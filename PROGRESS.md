# PROGRESS — Healthy Steps Foundation Website

Running log of what has shipped, what is blocked, and what is next.
`CLAUDE.md` is the project brief (architecture, design rules, conventions); this file is the
timeline. When they disagree, trust this file for *status* and `CLAUDE.md` for *how things work*.

**Last updated**: 2026-08-15
**Phase**: 1 — feature complete, pre-launch
**Deployed to**: Netlify, from `main`

---

## Launch readiness at a glance

| # | Blocker | Owner | Status |
|---|---------|-------|--------|
| 1 | Real impact statistics | Client | ⛔ Outstanding — placeholder numbers still live. Now editable in the CMS (Homepage → Impact numbers), so this no longer needs a developer |
| 2 | Supabase + Resend accounts and env vars | Client / user | ⛔ Outstanding — donation backend cannot run without them |
| 3 | Verify the latest Netlify deploy is green | User | ⚠️ Unverified — see "Known risks" |
| 4 | Final cross-device smoke test | User | ⚠️ Not started |

Blocker 2 now gates two things, not one: the donation backend **and** the content editor. Neither
can save without Supabase. Both degrade cleanly without it — the site renders, nothing 500s.

Everything else needed for launch is built.

---

## Timeline

### 2026-08-15 — Real photographs replace the stock program images

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

### 2026-08-15 — Content editor, pass 2: everything else

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

### 2026-08-15 — Content editor, pass 1

Staff can now change words and photos themselves at `/admin/content`, behind the existing admin
password. Homepage, About Us and Our Staff converted first, to check the editing experience before
rolling it across the rest.

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

Verified: production build green (29 routes), TypeScript clean, no new lint findings. Login,
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

**No visual QA has been done on the UI pass, or on the content editor.** Chrome could not reach
the local dev server (blocked at the browser extension's site permissions — the server itself
answered every request), so everything has been verified over HTTP and by fetching and grepping
rendered pages. Highest-value checks left: the homepage hero, the Programs mega-menu, the mobile
drawer at a scrolled position, and the content editor on a phone — the client will be using it on
one.

**A real save has never run.** Every path around it is tested, but the actual Supabase write,
the `revalidatePath` that follows it, and an uploaded photo coming back through `next/image` all
need the Supabase account before anyone can say they work.

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
