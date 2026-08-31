# PROGRESS — Healthy Steps Foundation Website

Running log of what has shipped, what is blocked, and what is next.
`CLAUDE.md` is the project brief (architecture, design rules, conventions); this file is the
timeline. When they disagree, trust this file for *status* and `CLAUDE.md` for *how things work*.

**Last updated**: 2026-08-31
**Phase**: 1 — feature complete, pre-launch
**Deployed to**: Netlify, from `main`

---

## Launch readiness at a glance

| # | Blocker | Owner | Status |
|---|---------|-------|--------|
| 1 | Real impact statistics | Client | ⛔ Outstanding — placeholder numbers still live. Editable in the CMS (Homepage → Impact numbers), so this no longer needs a developer |
| 2 | Supabase `site_content` table + `site-media` bucket | User | ✅ **Working** — confirmed indirectly on 2026-08-29: the live homepage renders a CMS-saved image served from Supabase Storage (that is what tripped Netlify's secrets scan). Saves and uploads are real |
| 3 | Resend account and env vars | Client / user | ⛔ Outstanding — donation *emails* only; the CMS does not need it |
| 4 | Verify the Netlify deploy is green | User | 🟡 The 2026-08-29 deploy failed on secrets scanning (see timeline); the fix shipped in `a162bd9`, and 13 more commits have landed since. Confirm the latest deploy went green |
| 5 | Final cross-device smoke test | User | ⚠️ Not started |
| 6 | Update the saved "Watch Videos" heading in the editor | User / client | ⚠️ One manual edit: `/admin/content` → Homepage → Video → Heading → "Videos and Pictures". The saved override shadows the new code default |

Everything else needed for launch is built.

### Next steps, in order

1. **Confirm the latest Netlify deploy is green** — the secrets-scan fix and the whole client
   feedback round (14 commits, `dba94b9`..`5ebb70e`) are unverified in production.
2. **Change the saved video-section heading** to "Videos and Pictures" in `/admin/content`.
3. **Visual QA on a phone** — hero, enlarged header, video+gallery grid, lightbox.
4. Get the real impact statistics and a clothing-market photograph from the client; both are
   theirs to enter in the editor, not a developer task.

---

## Timeline

### 2026-08-29 → 2026-08-31 — Client feedback round: heroes, header, homepage sections (`dba94b9`..`5ebb70e`, 14 commits)

A live review session with the client's corrections, applied one at a time. The theme: strip
decoration, put the brand in the header, and let real content lead.

**Heroes (homepage + donate).** The white logo cards are gone from both heroes — the page led with
the brand twice (header + hero) and no message. Visible headlines are back: "Every Family Deserves
to Be Whole" (home) and "Donate to Healthy Steps Foundation" (donate), both editable. The CMS
field `heroScreenReaderText` was renamed to `heroHeadline` on both pages since the text is visible
again. The homepage hero also lost its location pill, its "Our Programs" button, and the
"How we serve" label + shield icon above the trust tags — it now reads headline → lead →
Donate Now → tags.

**Header.** In exchange, the header logo grew twice (now `h-20/h-24/h-28` at rest, with the
`next/image` request bumped to 440×126 so it stays sharp) and the bar got taller (`py-4`); the
scrolled state compresses proportionally. Desktop nav links went from 15px to 17px.

**Stats section.** Hierarchy swap: "Our Impact" (previously the small eyebrow) is now the big
serif heading; the former heading text sits under it, same serif, regular weight, one step
smaller. The floating white caption card on the photo (and the sparkle icon inside it) is gone —
the photo stands alone. CMS keys unchanged, only editor labels; saved text keeps applying.

**Video section became "Videos and Pictures".** Same eyebrow/heading swap. The standalone
gallery section further down the homepage was merged in: `GallerySection.tsx` is deleted and the
photo mosaic now lives directly with the video, on the dark background, reusing the same
`galleryPhotos` CMS list. Through three rounds of feedback the video shrank from full-width
standalone → 2×2 tile in the mosaic → a single cell the same size as every photo. All tiles are
equal-sized now (the bento large/wide spans and the editor's "Tile size" select are removed), and
tapping any photo opens a lightbox at natural size (close: backdrop, X, or Escape).

**SectionHeading** gained optional `eyebrow` (can be omitted) and `eyebrowClassName`/
`titleClassName` overrides, which is how the two sections diverge without forking the pattern.

⚠️ **Renames orphaned three saved overrides by design** (`heroScreenReaderText`,
`heroLocation`, `heroProgramsLabel/Href`, `heroTrustLabel`, gallery heading fields) — all fields
whose on-page element was removed, so nothing user-visible was lost. The one that matters:
**the video-section heading override saved as "Watch Videos" still shadows the new
"Videos and Pictures" default** and must be re-saved in the editor (blocker 6 above).

### 2026-08-29 — Netlify deploy failed on secrets scanning; Supabase confirmed live (`a162bd9`)

The production deploy compiled cleanly but died in Netlify's **secrets scanner**: the value of
`SUPABASE_URL` was found in the rendered homepage HTML. Cause: someone has saved content in the
editor with an uploaded photo — Supabase Storage URLs embed the project URL. That URL is public
by design (it ships in every Supabase client app); the fix was
`SECRETS_SCAN_OMIT_KEYS = "SUPABASE_URL"` in `netlify.toml`. The service-role key and admin
secrets remain scanned.

**Silver lining, and it's big:** this failure is proof that the Supabase table, the storage
bucket, env vars in Netlify, a real CMS save, *and* a real photo upload all work in production —
the exact chain that had never been exercised. Blocker 2 is closed by evidence.

### 2026-08-17 — Supabase setup for the content editor: one trap found

Pasting `supabase/schema.sql` whole into the Supabase SQL editor failed with:

```
ERROR: 42P01: relation "storage.buckets" does not exist
```

**Cause.** The file ended with an `insert into storage.buckets (...)` to create the media bucket.
On a project where the Storage page has never been opened, that schema does not exist yet.
Opening Storage in the dashboard is what provisions it.

**Why it mattered more than it looks.** The Supabase SQL editor runs a pasted script as a single
transaction, so that one failing statement at the bottom **rolled back the `site_content` table
created at the top**. The run looked like it had done nothing at all, which is exactly what it had
done.

**Fix.** The `insert` is removed from `schema.sql` and replaced with a comment explaining why it
must not come back, and how to create the bucket instead: Storage → New bucket → `site-media` →
Public ON. `CLAUDE.md` carries the same warning.

The correct order is now: run the SQL (creates the table), then create the bucket in the dashboard.
Without the bucket, everything works except uploading *new* photos — the editor still runs and the
picker still offers every image that ships in `/public`.

⚠️ Still unconfirmed at the time of writing: whether the re-run succeeded. Nothing downstream of a
real save has been exercised.

### 2026-08-15 — Real photographs replace the stock program images (`872877f`)

The client supplied five real photographs and asked for the stock imagery to go, particularly
anywhere a stock photo of children was standing in for the children they actually serve.

| Program | Now shows | Was |
|---|---|---|
| Food Closet | Staff handing a food bag through the distribution window | Stock |
| Clothing Closet | Mother carrying an HSF bag home with her child | Stock |
| Children Tuition | Boy holding up a new school backpack | Stock |
| Adult Vocation | *unchanged* — tailor at a sewing machine | Unsplash, kept on request |
| Family Medical | Medical partners screening two women at an outreach | Stock |
| Resource Materials | Staff crouching with children, one carrying a box of supplies | Unsplash |

- The five stock files are **deleted**, not just unreferenced, so they can no longer be picked by
  mistake in the content editor.
- Adult Vocation was left alone as instructed — it shows a sewing machine and no faces, so it
  illustrates the trade rather than standing in for a real person.
- Each program now carries `imageAlt` describing what is actually in the photo. Previously the alt
  text was the program name repeated, which told a screen-reader user nothing.
- A sixth supplied photo (a second frame of the medical screening) went into the field library as
  `field/medical-screening-wide.jpg`, available in the editor's picker.

⚠️ **The client gave no clothing photograph.** Clothing Closet is using a real HSF photo of a
family carrying an HSF bag home — honest, but not literally the clothing market. Worth asking for
one; swapping it is a 30-second job in the editor now, no developer needed.

⚠️ **Two photos came through WhatsApp and are portrait and recompressed**
(902×1280 and 810×1080). They crop to the middle band in the 16:10 cards and will look soft on a
large desktop hero — most traffic is mobile, where they are fine. The un-compressed originals off
the client's phone would be a straight improvement, and a drop-in replacement.

### 2026-08-15 — Content editor, pass 2: everything else (`4d9abc9`)

The remaining 16 pages are converted. **Every page on the site is now editable** at
`/admin/content`, grouped as Pages (10), Programs (6, one screen each) and Shared across pages
(Testimonials, Upcoming Events, Footer).

- **Programs** get one editor each rather than six rows in a list — their steps and impact figures
  are lists of their own, and nesting two levels deep produces a form nobody can use. Built by a
  factory from `PROGRAMS`, so all six stay identical in shape.
- **Testimonials, events and news posts** are add/edit/delete/reorder lists. Adding a news post now
  actually shows: the newest is the featured letter, and any others appear as an "Earlier updates"
  list that simply is not rendered while there is only one.
- **One database round trip per page render.** `content.ts` loads the whole table once through
  React's `cache()`, so a page reading its own copy plus the footer plus all six programs still
  costs a single query.
- **Fixed a real bug**: each program's description holds several paragraphs separated by blank
  lines, but the detail page rendered it inside one `<p>`, so it displayed as a single run-on
  block. It is now a proper paragraph list. Program photos also carry their own alt text instead
  of repeating the program name.
- Deliberately **not** in the CMS: contact details, bank details and the bank fee (they also go
  into receipts, PDFs and reminder emails — a half-edited value would leave the site and the emails
  disagreeing), and each program's URL/fund keys (routing, not copy). `CLAUDE.md` lists these.

Verified: production build green (26 routes), TypeScript clean, lint unchanged from before this
work. All 12 marketing pages fetched and spot-checked for content — 22 distinctive strings from
every converted section, all present. All 15 editor screens load with their accordion sections
intact. **`npm run test:cms` — 27 new assertions** on the merge/diff logic, including the save
round-trip, junk-input fallback and list reorder/delete. Still untested: a real save, which needs
Supabase.

### 2026-08-15 — Content editor, pass 1 (`4d9abc9`)

Staff can now change words and photos themselves at `/admin/content`, behind the existing admin
password. Homepage, About Us and Our Staff converted first, to check the editing experience before
rolling it across the rest. *(Both passes landed in the single commit `4d9abc9` — they are split
here because they were built and reviewed as two steps, not because there are two commits.)*

- **Every field is declared once**, in `src/lib/cms/pages/*.ts` — the same declaration is both the
  copy the site ships with and the form the editor sees. Architecture detail is in `CLAUDE.md` →
  "CONTENT EDITOR (CMS)". Adding a page needs no admin UI work; the form builds itself.
- **Only the diff is stored.** `site_content` holds just the fields someone actually changed, so a
  later copy fix in code still reaches every untouched field, and "Reset to original" is a delete
  rather than a second source of truth.
- **Photos**: upload to Supabase Storage, or pick from the 66 images already in `/public`
  (`npm run media:manifest` regenerates that list). Alt text is stored next to each image so the
  two cannot drift apart.
- Editable per page: headings, eyebrow labels, body paragraphs, button labels *and* links, images
  with alt text, icons, and repeatable lists — team members, core values, impact numbers, gallery
  tiles — with add / delete / reorder.
- `STAFF_MEMBERS` and `IMPACT_STATS` were **removed** from `constants.ts`. They live in the staff
  and home schemas now; keeping a second copy is exactly the drift this was built to stop.
- Saving calls `revalidatePath`, so edits appear on the live site without a rebuild.
- ⚠️ Renaming a field key orphans any saved override for it — the merge drops unknown keys.

Verified at the time: production build green (29 routes — pass 2 later reduced this to 26 by
dropping a needless `generateStaticParams`), TypeScript clean, no new lint findings. Login,
auth rejection, both editor screens, the 66-asset media API, and the save + unknown-page error
paths were all exercised over HTTP. **The one path that could not be tested is a real save**, which
needs Supabase.

### 2026-08-03 — Homepage logo + honest donate copy (`67894ff`)
- Homepage hero headline "Every Family Deserves to Be Whole" replaced by the **HSF logo**,
  matching the donate page. The line survives as screen-reader text inside the `<h1>`, so the
  page keeps one top-level heading and search engines still index the phrase.
- Donate copy said US donors could give "by check or online", which reads as a card checkout.
  **There is no card checkout.** Copy is now "by check or by SWIFT bank transfer", and the method
  picker reads "US Donors — Give by Check".
- ⚠️ Both heroes now lead with a logo rather than a sentence. A logo does not tell a first-time
  visitor why they should care. If it reads flat in review, add a short line under the logo
  rather than reverting.

### 2026-07-30 — Client content corrections (`9ab1dfc`)
Applied the client's marked-up corrections:
- **Donate**: logo replaces the hero headline; "Two Ways to Give" + "Safe & Transparent" cards
  collapse into one **Secure Giving** card; `$500` now reads "Covers Family Medical and counseling
  support for a full year"; bank-fee wording corrected; donation summary gained a
  **"Total received is"** line (a $50 gift not covering the fee shows −$45 → $5, clamped at zero);
  check giving trimmed to "Mail it to First Baptist Sweetwater" plus the payable-to / memo /
  address rows.
- **Staff**: hero is now "Meet Our Team" with the client's wording.
- **About**: hero is now "About Us", body opens "We are a faith-based organization partnering…".
- "as-needed basis" → **"temporary basis"** in the footer, Family Medical description and
  Programs menu.
- **Donation pop-up removed** from every page. `DonationPopup.tsx` is still in
  `src/components/donation/` if it is ever wanted back.
- Vision and Our Story already matched the client's text — left untouched.
- Kept the check pledge-confirmation form despite "delete the rest": removing it would break the
  backend that records pledges and emails the PDF.

### 2026-07-30 — Premium UI pass (`2e13713`)
Full visual/interaction overhaul. Detail lives in `CLAUDE.md` → "UI SYSTEM"; the highlights:
- **Fonts were never loading.** `--font-sans`/`--font-serif` named `'Inter'`/`'Merriweather'`
  literally, but `next/font` emits hashed family names. Every page fell back to system fonts.
- **17 nested `<Link><Button>` pairs** across 8 pages produced `<a>` wrapping `<button>` — invalid
  HTML that double-announces to screen readers. Replaced with `ButtonLink` / `buttonStyles()`.
- **Mobile drawer was inside `<header>`**, whose `backdrop-filter` makes it a containing block for
  `position: fixed` — the drawer would have been clipped to header height once scrolled.
- Header rebuilt: frosted glass on scroll, reading-progress bar, Programs mega-menu, active-route
  underlines, animated drawer. The old dropdowns were CSS `group-hover` only and unreachable by
  keyboard.
- Design tokens (warm-ink elevation scale, shared easing), `SectionHeading`, redesigned program /
  staff / testimonial cards, hero parallax and grain.
- Accessibility: skip link, global focus ring, `prefers-reduced-motion`, dark-on-amber CTAs
  (white on amber-500 failed contrast).

### 2026-07-30 — Real testimonials (`447a232`)
- Removed three **invented** placeholder testimonials (Grace N., John K., Sarah M.).
- Added two real ones from the Makerere Kikoni outreach: **Charles Kasibante** (medical partner)
  and **Patricia Kayeny** (beneficiary). Quotes verbatim apart from dropping spoken
  self-introductions and one typo fix.
- Both grids were built for three cards; they now adapt to two and return to three automatically
  when a third story is added.
- ❗ Never re-add fabricated testimonials.

### 2026-07-17 and earlier
- Operational content extracted from the client's Operational Manual and Programs docs (`b192a2b`).
- Stakeholder-meeting decisions applied (`868c6d3`).
- dfcu SWIFT/BIC (`DFCUUGKA`) and the US check address (3800 Wekiva Rd., Longwood, FL 32779)
  filled in; News page added (`b23dec1`).
- Donation backend built (`6f43e9b`): Supabase pledges, PDF pledge confirmations via Resend,
  `/admin/donations`, recurring reminders as a Netlify scheduled function.
- 19 pages, design system, and all real photography shipped before that.

---

## Known risks

**~~The last three pushes have no completed local production build behind them.~~ RESOLVED
2026-08-15.** `next build` now completes cleanly (29 routes) after a fresh `npm install` — the
`next/font/google` woff2 fetches from `fonts.gstatic.com` succeeded this time. The failure was
environmental, not in the source. ESLint still has the one pre-existing error
(`CurrencyConverter.tsx:118`).
*If it recurs: self-host the two fonts via `next/font/local` and drop the build-time network
dependency.*

**`node_modules` keeps emptying itself.** It was corrupted twice in one session (truncated
`next/package.json` and `@edge-runtime/primitives`, stray `routes.d 2.ts` files in `.next`), and on
2026-08-15 it was found completely empty. That is a file-sync tool (iCloud/Dropbox) writing into
the project directory. Reinstalling fixes it, and it will keep recurring until the folder is
excluded from sync.

**No visual QA has been done on the UI pass, the content editor, or the 2026-08-29..31 feedback
round.** Everything has been verified by local production builds, not by looking at rendered
pages. Highest-value checks now: the reworked homepage hero (headline, no pill/second button),
the enlarged header at rest and scrolled, the video+photo grid and its lightbox on a phone, and
the caption legibility inside the now-small video tile.

~~**A real save has never run.**~~ **RESOLVED 2026-08-29** — the Netlify secrets-scan failure
proved a saved CMS edit with an uploaded Supabase Storage photo is rendering on the live
homepage. Save, upload, and `next/image` remote loading all work in production.

**Fourteen commits are on `main` and unverified in production** (`dba94b9`..`5ebb70e`), including
the secrets-scan fix itself, a deleted component, and CMS schema changes. All build clean locally
(26 routes, CMS tests green). Confirm the latest Netlify deploy before assuming the site is fine.

**Saved CMS overrides can shadow code changes.** Now that real saves exist, editing a default in
`src/lib/cms/pages/*.ts` only shows where staff have not saved that field — the "Watch Videos"
heading is the live example. When a copy change does not appear, check `/admin/content` before
suspecting the deploy.

**`CLAUDE.md` is now behind on the homepage.** It still describes the hero logo, the standalone
gallery section, and the smaller header. Trust this file for status; sync `CLAUDE.md` when the
dust settles on the client's feedback.

---

## Open questions for the client

1. **A photograph of the clothing market** — nothing in the supplied set or the existing library
   shows it, so Clothing Closet is using a related HSF photo instead.
2. **Un-compressed originals** of the food-closet and children-tuition photos, straight off the
   phone rather than through WhatsApp.
3. **Patricia Kayeny's location** — her testimonial does not say where she lives. Currently labelled
   "Makerere Kikoni Outreach" because the support she describes matches that event; needs confirming.
4. **Impact statistics** — the homepage impact numbers still hold invented values (1200+ families, 500+
   children, 3+ years). These are public-facing claims about a charity and should not go live
   unverified.

---

## Phase 2 (post-launch)

Analytics, SEO metadata and OG images, dark mode, and a fuller Stories experience. `Get Help` and
`Stories` are no longer placeholders — both shipped — so the original Phase 2 list in `CLAUDE.md`
overstates what is left.

~~**Content editor, pass 2**~~ — done 2026-08-15.
