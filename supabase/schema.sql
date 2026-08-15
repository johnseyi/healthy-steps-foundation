-- Healthy Steps Foundation — donation pledges table
-- Run this once in the Supabase SQL editor for the project used by this app.

create table if not exists donations (
  id                    uuid primary key default gen_random_uuid(),
  serial_number         bigserial not null unique,
  created_at            timestamptz not null default now(),
  -- invoice_number is populated by the trigger below, not a generated column:
  -- extract(year from a timestamptz) depends on the session timezone, so Postgres
  -- rejects it as a "generation expression is not immutable" for a GENERATED
  -- ALWAYS AS column. A BEFORE INSERT trigger has no such restriction.
  invoice_number        text unique,

  method                text not null check (method in ('swift', 'us-check')),
  first_name            text not null,
  last_name             text not null,
  email                 text not null,
  phone                 text,
  country               text not null,

  donation_type         text not null check (donation_type in ('one-time', 'recurring')),
  recurring_frequency   text check (recurring_frequency in ('monthly', 'quarterly', 'annually')),

  amount                numeric(12,2) not null,
  fund                  text not null,
  cover_bank_fee        boolean not null default false,
  bank_fee              numeric(12,2) not null default 0,
  total_amount          numeric(12,2) not null,

  status                text not null default 'pledged' check (status in ('pledged', 'received')),
  received_at           timestamptz,

  -- recurring reminder tracking; is_active lets an admin stop reminders without deleting history
  is_active             boolean not null default true,
  next_reminder_date    date,
  last_reminder_sent_at timestamptz
);

create or replace function set_donation_invoice_number()
returns trigger as $$
begin
  new.invoice_number := 'HSF-' || extract(year from new.created_at)::text
    || '-' || lpad(new.serial_number::text, 6, '0');
  return new;
end;
$$ language plpgsql;

drop trigger if exists donations_set_invoice_number on donations;
create trigger donations_set_invoice_number
  before insert on donations
  for each row
  execute function set_donation_invoice_number();

create index if not exists donations_status_idx on donations (status);
create index if not exists donations_next_reminder_idx on donations (next_reminder_date)
  where donation_type = 'recurring' and is_active;

alter table donations enable row level security;
-- Intentionally no policies: only the server-side service_role key (never exposed to
-- the browser) may read/write this table.


-- ─────────────────────────────────────────────────────────────────────────────
-- Site content (CMS)
-- ─────────────────────────────────────────────────────────────────────────────
-- One row per editable page. `content` holds ONLY the fields an editor has
-- actually changed — anything absent falls back to the defaults declared in
-- src/lib/cms/pages/*.ts. That means a code-side copy edit still reaches the
-- site for every field nobody has overridden, and an empty table renders the
-- site exactly as it ships.

create table if not exists site_content (
  page       text primary key,
  content    jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table site_content enable row level security;
-- Intentionally no policies: written only by the server-side service_role key.
-- The public site reads it through the same server-side client, never the browser.

-- ─────────────────────────────────────────────────────────────────────────────
-- Storage bucket for editor-uploaded photos and video
-- ─────────────────────────────────────────────────────────────────────────────
-- CREATE THIS IN THE DASHBOARD, NOT HERE: Storage → New bucket → name it
-- `site-media` → turn "Public bucket" ON.
--
-- Do not add an `insert into storage.buckets` statement to this file. On a
-- project where Storage has never been opened, that schema does not exist yet
-- and the statement fails with `relation "storage.buckets" does not exist` —
-- which, because the SQL editor runs a pasted script as one transaction, also
-- rolls back the site_content table above. Opening the Storage page is what
-- provisions the schema in the first place.
--
-- The bucket must be public so next/image can fetch uploaded photos. Writes
-- only ever happen through the service-role key in /api/admin/media.
--
-- Everything except uploading NEW photos works without it: the site falls back
-- to the copy in code, and the editor's photo picker still offers every image
-- that ships in /public.
