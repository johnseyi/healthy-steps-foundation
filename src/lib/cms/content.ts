import 'server-only';
import { cache } from 'react';
import { getSupabaseAdmin } from '@/lib/supabase';
import { diffFromDefaults, mergeContent } from './merge';
import type { PageContent, PageSchema } from './types';

const TABLE = 'site_content';

/**
 * Reading and writing page content.
 *
 * The read path is deliberately unable to fail loudly: if Supabase is not
 * configured, is unreachable, or holds a malformed row, the page renders the
 * defaults declared in code. The site shipping without a CMS backend behind it
 * is a supported state, not an outage.
 */

function isConfigured(): boolean {
  return Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY);
}

function asContent(value: unknown): PageContent {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
    ? (value as PageContent)
    : {};
}

/**
 * Every override row, keyed by page slug.
 *
 * `cache()` memoises this for the duration of one render, so a page that reads
 * its own content plus the shared footer plus all six programs costs a single
 * round trip rather than eight. The whole table is a handful of small JSON blobs.
 */
const loadOverrides = cache(async (): Promise<Record<string, PageContent>> => {
  if (!isConfigured()) return {};

  try {
    const { data, error } = await getSupabaseAdmin().from(TABLE).select('page, content');

    if (error) {
      console.warn(`[cms] could not load site content: ${error.message}`);
      return {};
    }

    const rows = (data ?? []) as { page: string; content: unknown }[];
    return Object.fromEntries(rows.map((row) => [row.page, asContent(row.content)]));
  } catch (error) {
    console.warn('[cms] site content lookup failed', error);
    return {};
  }
});

/** The raw overrides for one page — only the fields an editor has actually changed. */
export async function getStoredOverrides(slug: string): Promise<PageContent> {
  const all = await loadOverrides();
  return all[slug] ?? {};
}

/** Defaults with any saved edits applied. Always returns a renderable object. */
export async function getPageContent<T extends PageContent>(schema: PageSchema<T>): Promise<T> {
  const all = await loadOverrides();
  return mergeContent(schema, all[schema.slug] ?? {});
}

/** Same as `getPageContent` for many schemas at once, still on one round trip. */
export async function getPagesContent<T extends PageContent>(
  schemas: PageSchema<T>[],
): Promise<T[]> {
  const all = await loadOverrides();
  return schemas.map((schema) => mergeContent(schema, all[schema.slug] ?? {}));
}

export interface SaveResult {
  ok: boolean;
  error?: string;
}

/**
 * Stores only what differs from the defaults, so a later copy change in code
 * still reaches the live site for every field nobody has overridden.
 */
export async function savePageContent<T extends PageContent>(
  schema: PageSchema<T>,
  submitted: unknown,
): Promise<SaveResult> {
  if (!isConfigured()) {
    return { ok: false, error: 'The content database is not connected yet.' };
  }

  // Round-tripping through the merge is what sanitises the submission: unknown
  // keys are dropped and wrong-shaped values fall back to the default.
  const merged = mergeContent(schema, submitted);
  const diff = diffFromDefaults(schema, merged);

  const { error } = await getSupabaseAdmin()
    .from(TABLE)
    .upsert(
      { page: schema.slug, content: diff, updated_at: new Date().toISOString() },
      { onConflict: 'page' },
    );

  if (error) return { ok: false, error: error.message };
  return { ok: true };
}

export interface PageEditState {
  /** How many fields differ from the copy that ships in code. */
  editedFields: number;
  updatedAt: string | null;
}

/** Admin-only, so it reads fresh rather than through the render-scoped cache. */
export async function getAllEditStates(): Promise<Record<string, PageEditState>> {
  if (!isConfigured()) return {};

  try {
    const { data, error } = await getSupabaseAdmin().from(TABLE).select('page, content, updated_at');
    if (error || !data) return {};

    const rows = data as { page: string; content: unknown; updated_at?: string }[];
    return Object.fromEntries(
      rows.map((row) => [
        row.page,
        {
          editedFields: Object.keys(asContent(row.content)).length,
          updatedAt: row.updated_at ?? null,
        },
      ]),
    );
  } catch {
    return {};
  }
}
