# HEALTHY STEPS FOUNDATION - WEBSITE PROJECT BRIEF

## PROJECT OVERVIEW
Building a professional NGO website for Healthy Steps Foundation, a Uganda-based faith-based mental health and family support organization. Built with Next.js 16.2.3, TypeScript (strict), Tailwind CSS v4, and Framer Motion v12.

## ORGANIZATION DETAILS
- **Name**: Healthy Steps Foundation
- **Location**: Uganda, Central Region, Wakiso, Ndejje Division, Ndejje Ward, Mirimu
- **Contacts**:
  - Phone: +256756231553 / +256782818734
  - Email: healthystepsfoundation@gmail.com

## REAL STAFF (confirmed from client documents)
| Name | Title | Photo file |
|------|-------|------------|
| Isaac Oyirwoth | Director | `/public/Picture1.jpg` |
| Sharon Blue | Director | `/public/Picture4.jpg` |
| Pius Olockywinu | Secretary | `/public/Picture3.jpg` |

All three are live in `STAFF_MEMBERS` in `src/lib/constants.ts`.

---

## ORGANIZATIONAL APPROACH

### Philosophy
Healthy Steps Foundation takes a **holistic approach** to mental health wellness by addressing the **short-term and temporary insecurities** that affect overall wellbeing. Mental health cannot be separated from physical needs, economic stability, education, and spiritual health.

### Real Mission Statement (from client)
> *"Healthy Steps Foundation is a faith-based organization that seeks to partner with families to improve mental health wellness. Our holistic approach includes researching and introducing techniques and programs designed to treat individuals suffering with mental health challenges in a respectful and dignified manner."*

### Service Model
- **Faith-Based**: Rooted in spiritual principles — faith shapes how we serve
- **Partnership**: We work *with* families, not just *for* them
- **Dignified**: Respectful treatment of every individual — no shame in needing help
- **As-Needed Basis**: Emergency, crisis-response support — not long-term welfare
- **Holistic**: Addressing spiritual, mental, physical, and economic wellness together
- **Temporary Support**: Helping families through crisis periods toward self-sufficiency

### Program Limitations (enforce these in all content)
- **School Tuition**: Maximum **one semester** per family
- **Adult Vocation**: **One adult family member** per family
- **All Programs**: As-needed, emergency basis — not ongoing welfare

---

## TECHNOLOGY STACK (ACTUAL — do not change)

| Tool | Version | Notes |
|------|---------|-------|
| Next.js | 16.2.3 | App Router, Turbopack |
| TypeScript | Strict mode | No `any` types |
| Tailwind CSS | v4 | CSS `@theme` block — no tailwind.config.js |
| Framer Motion | v12 | `type Variants`, `ease: 'easeOut' as const` |
| Lucide React | latest | Icons throughout |
| React Hook Form | latest | + Zod via `@hookform/resolvers/zod` |
| next/font | built-in | Inter (sans) + Merriweather (serif) |

### Critical Tailwind v4 Notes
- Config is in `src/app/globals.css` via `@theme { ... }` — **no tailwind.config.js**
- Custom colors use CSS variable naming: `--color-forest-green-900`, etc.
- Plugins: `@plugin "@tailwindcss/forms"` and `@plugin "@tailwindcss/typography"`

### Critical Framer Motion v12 Notes
- Always `import { type Variants } from 'framer-motion'` when defining variant objects
- Use `ease: 'easeOut' as const` (not plain string) to satisfy TypeScript
- `FadeUp` component (`src/components/ui/FadeUp.tsx`) is the standard scroll animation wrapper

### Vercel Deployment
- `vercel.json` exists at root — sets `framework`, `buildCommand`, `outputDirectory`, `installCommand`
- Required to prevent "path argument must be of type string" error in Vercel's modifyConfig step
- Do not delete `vercel.json`

---

## CURRENT BUILD STATUS (as of 2026-05-22)

### ✅ COMPLETED — All 18 pages build and pass TypeScript

#### Pages Built
| Page | Route | Status |
|------|-------|--------|
| Homepage | `/` | ✅ Complete — real field photos, Community Documentary design |
| About Us | `/about` | ✅ Complete — real field photos throughout |
| Our Staff | `/staff` | ✅ Complete — real staff names, titles, headshots |
| Our Mission | `/mission` | ✅ Complete — full page with real content |
| Programs Overview | `/programs` | ✅ Complete — real field photos |
| Food Closet | `/programs/food-closet` | ✅ Complete |
| Clothing Closet | `/programs/clothing-closet` | ✅ Complete |
| Children Tuition | `/programs/children-tuition` | ✅ Complete |
| Adult Vocation | `/programs/adult-vocation` | ✅ Complete — Ugandan tailoring photo |
| Family Medical | `/programs/family-medical` | ✅ Complete |
| Resource Materials | `/programs/resource-materials` | ✅ Complete — Ugandan classroom photo |
| Donate | `/donate` | ✅ Complete — awaiting SWIFT details |
| Contact | `/contact` | ✅ Complete — real photo hero, contact strip, form, live map |
| Get Help | `/get-help` | ⏳ Placeholder shell — Phase 2 |
| Stories | `/stories` | ⏳ Placeholder shell — Phase 2 |

#### Components Built
- `Header.tsx` — sticky, dropdown nav, mobile drawer, HSF_logo.png
- `Footer.tsx` — 4-column grid, logo, links, contact
- `FadeUp.tsx` — standard scroll-animation wrapper (used on all pages)
- `HeroSection.tsx` — homepage hero (full-bleed real field photo + Framer Motion)
- `StatsSection.tsx` — animated counters + real field photo (50/50 grid)
- `ProgramsSection.tsx` — staggered program card grid
- `TestimonialsSection.tsx` — 3-card layout on `bg-forest-green-50`
- `ProgramCard.tsx` — real program photos, hover scale, links to slug
- `ProgramHero.tsx` — individual program full-bleed overlay hero
- `StaffCard.tsx` — real headshot with `object-top` crop + `sizes`; initials fallback
- `ContactForm.tsx` — React Hook Form + Zod, 6 subject options, success state
- `DonationForm.tsx` — 3-step form with SWIFT success modal
- `DonationPopup.tsx` — sessionStorage-gated popup, 5s delay
- `AmountSelector.tsx`, `FundSelector.tsx`, `BankFeeCheckbox.tsx`
- `Button.tsx`, `Input.tsx`

#### Data & Logic
- `src/lib/constants.ts` — all static data (PROGRAMS, STAFF_MEMBERS, TESTIMONIALS, IMPACT_STATS, SWIFT_DETAILS, ORG)
- `src/lib/validations.ts` — Zod `donationSchema` + `contactSchema`
- `src/lib/utils.ts` — `formatCurrency`, `calculateDonationTotals`, `cn`
- `src/types/index.ts` — all TypeScript interfaces (`Program.image` is required, not optional)

### ⏳ PENDING — Blocking launch
- [ ] **SWIFT bank details** — fill into `SWIFT_DETAILS` in `src/lib/constants.ts`
- [ ] **Real impact statistics** — fill into `IMPACT_STATS` in `src/lib/constants.ts`
- [ ] **Real testimonials** — fill into `TESTIMONIALS` in `src/lib/constants.ts`
- [ ] **Testing + deployment** — final Vercel deploy and smoke test

---

## PHOTOS & IMAGES

### Real HSF Field Photos (19 WhatsApp photos in `/public/images/`)
All named `WhatsApp Image 2026-05-21 at 20.31.XX (N).jpeg`. Usage map:

| File | Used on |
|------|---------|
| `20.31.38.jpeg` | Homepage hero |
| `20.31.38 (5).jpeg` | Homepage stats section |
| `20.31.35.jpeg` | Homepage photo break section |
| `20.31.37.jpeg` | About page hero |
| `20.31.38 (1).jpeg` | About page — Our Story |
| `20.31.38 (18).jpeg` | About page — Where We Work |
| `20.31.38 (14).jpeg` | Staff page hero |
| `20.31.38 (13).jpeg` | Staff page team photo |
| `20.31.36 (1).jpeg` | Mission page hero |
| `20.31.34 (1).jpeg` | Programs overview hero |
| `20.31.38 (11).jpeg` | Contact page hero (intake/registration scene) |

Remaining photos `(2)–(4)`, `(6)–(10)`, `(12)`, `(15)–(17)`, `20.31.33`, `20.31.34`, `20.31.34 (2)`, `20.31.36` are **available for future use** (Get Help, Stories, etc.).

### Program Images (`/public/images/program-*.jpg`)
| File | Content | Source |
|------|---------|--------|
| `program-food-closet.jpg` | African children in colourful clothes | Stock |
| `program-clothing-closet.jpg` | African women carrying basins | Stock |
| `program-children-tuition.jpg` | African children in classroom | Stock |
| `program-adult-vocation.jpg` | Ugandan tailor at sewing machine (Wawoto Kacel craft group, Uganda) | Unsplash |
| `program-family-medical.jpg` | African medical clinic scene | Stock |
| `program-resource-materials.jpg` | Children studying in classroom, Wakiso, Uganda | Unsplash |

### Staff Headshots (`/public/`)
- `Picture1.jpg` → Isaac Oyirwoth (Director)
- `Picture3.jpg` → Pius Olockywinu (Secretary)
- `Picture4.jpg` → Sharon Blue (Director)

---

## DESIGN SYSTEM — "Community Documentary"

All pages follow these six rules (stored in memory at `.claude/projects/.../memory/project-design-system.md`):

### Rule 1 — Amber is accent only
Amber (`amber-400`/`amber-500`) is used for: accent rules (`w-10 h-0.5 bg-amber-500`), CTA buttons, icon backgrounds on light. Never as a large section background.

### Rule 2 — Section heading pattern (apply everywhere)
```tsx
<div className="w-10 h-0.5 bg-amber-500 mb-4" />
<p className="text-sm font-semibold uppercase tracking-widest text-warm-gray-400 mb-3">Label</p>
<h2 className="text-3xl sm:text-4xl font-bold font-serif text-warm-gray-900">Heading</h2>
```
On dark (`bg-forest-green-900`): replace `text-warm-gray-400` with `text-forest-green-300`, use `bg-amber-400`.

### Rule 3 — Photo-anchored heroes (two variants)
**Full-bleed overlay** (most pages):
```tsx
<section className="relative min-h-[70vh] flex items-center overflow-hidden">
  <Image src={PHOTO} alt="..." fill className="object-cover object-center" priority sizes="100vw" />
  <div className="absolute inset-0 bg-gradient-to-r from-forest-green-900/95 via-forest-green-900/70 to-forest-green-900/20" />
  <div className="absolute inset-0 bg-gradient-to-t from-forest-green-900/55 via-transparent to-transparent" />
  <div className="relative z-10 container mx-auto px-6 py-28">...</div>
</section>
```
**Split-screen** (About, Mission): `grid grid-cols-1 lg:grid-cols-2 min-h-[78vh]` — left panel `bg-forest-green-900`, right panel `next/image fill`.

### Rule 4 — Two background colours per page
Alternate between `bg-warm-white`, `bg-white`, `bg-forest-green-50`, and `bg-forest-green-900`. Never use `bg-amber-500` as a section background.

### Rule 5 — Stats use large forest-green serif numbers
```tsx
<div className="text-5xl sm:text-6xl font-black text-forest-green-600 font-serif mb-2">{value}</div>
```
Not white-on-amber. Stats sections use `bg-white` or `bg-warm-white`.

### Rule 6 — Program/content cards
Real photos at top (`aspect-[16/10]`, `object-cover`, hover scale). No icon-in-whitespace pattern.

---

## CONTENT THAT IS REAL (from client)

### Program Short Descriptions (all in constants.ts)
- **Food Closet**: "Emergency food support that meets immediate food insecurities for families in need."
- **Clothing Closet**: "Basic wardrobe essentials provided on an as-needed basis to maintain dignity and confidence."
- **Children Tuition**: "School tuition assistance to keep children in education, supporting up to one semester per family."
- **Adult Vocation**: "Vocational skills training for one adult family member in farming, tailoring, or mechanics."
- **Family Medical**: "Medical support on an as-needed basis to address health emergencies and basic healthcare needs."
- **Resource Materials**: "Spiritual, mental wellness, and vocational resource materials to support holistic family development."

### Core Values (real — used on About and Mission pages)
1. **Faith-Based** — Guided by spiritual principles
2. **Partnership** — Work alongside families, not for them
3. **Dignity & Respect** — Honour every individual
4. **Holistic Wellness** — Mental, physical, and spiritual health together
5. **Community** — Neighbours walking with neighbours
6. **Integrity** — Transparent with donors, partners, and families

---

## SITE STRUCTURE

### Navigation
```
Logo (left)                                    Donate Button (amber, right)
├── Home (dropdown)
│   ├── About Us
│   ├── Our Staff
│   └── Our Mission
├── Programs (dropdown)
│   ├── All Programs
│   ├── Food Closet
│   ├── Clothing Closet
│   ├── Children Tuition
│   ├── Adult Vocation
│   ├── Family Medical
│   └── Resource Materials
├── Get Help
├── Stories
└── Contact
```

### Route Group
All marketing pages live in `src/app/(marketing)/` with a shared layout that wraps `Header` + `Footer` + `DonationPopup`.

---

## DONATION FLOW (CRITICAL FEATURE)

### Payment Method: SWIFT Bank Transfer
Since SWIFT is bank-to-bank (not real-time), the website:
1. Collects donor info and choices (3-step form)
2. Shows SWIFT transfer details in a success modal
3. Donor completes transfer at their bank
4. Donor emails proof to healthystepsfoundation@gmail.com

### Donation Form Fields (`src/types/index.ts` → `DonationForm`)
- `firstName`, `lastName`, `email`, `phone?`, `country`
- `type`: `'one-time' | 'recurring'`
- `recurringFrequency?`: `'monthly' | 'quarterly' | 'annually'`
- `amount`: quick buttons $25/$50/$100/$250/$500 or custom
- `fund`: one of 7 fund slugs (6 programs + `where-needed-most`)
- `coverBankFee`: boolean checkbox
- Calculated: `donationAmount`, `bankFee` ($45), `totalAmount`

### SWIFT Bank Details (PENDING from client)
Fill into `src/lib/constants.ts` → `SWIFT_DETAILS`:
```typescript
export const SWIFT_DETAILS = {
  bankName: '',        // PENDING
  accountHolder: 'Healthy Steps Foundation',
  accountNumber: '',   // PENDING
  swiftBicCode: '',    // PENDING
  branch: '',          // PENDING
  branchAddress: '',   // PENDING
};
```

### Donation Popup
- Fires **5 seconds** after any page load
- Once per session (`sessionStorage` key: `hsf_popup_shown`)
- Quick donate $50 / $100 → routes to `/donate?amount=X&fund=where-needed-most&type=one-time`
- Backdrop click or X button closes

---

## BRAND COLORS & TYPOGRAPHY

### Brand Colors
- **Forest Green**: `forest-green-50` through `forest-green-900` (primary brand)
- **Amber**: `amber-400` / `amber-500` / `amber-600` (accent only — not section backgrounds)
- **Warm White**: `warm-white` (page backgrounds)
- **Warm Gray**: `warm-gray-400` through `warm-gray-900` (text)

### Typography
- **Serif** (`font-serif`): Merriweather — headings, hero text, stats numbers
- **Sans** (`font-sans`): Inter — body, UI elements

### Animation Pattern
```tsx
<FadeUp delay={0.1}>
  <YourContent />
</FadeUp>
```
Stagger sibling elements with `delay={i * 0.08}`.

### Logo
- File: `/public/HSF_logo.png` (horizontal logo)
- Header: `className="h-12 sm:h-14 md:h-20 w-auto object-contain"`
- Footer: white pill background `rounded-2xl px-5 py-3`, `h-14 w-auto`

---

## CODING STANDARDS

### File Organization
```
src/
├── app/
│   ├── (marketing)/
│   │   ├── layout.tsx         ← Header + Footer + DonationPopup
│   │   ├── page.tsx           ← Homepage
│   │   ├── about/page.tsx
│   │   ├── staff/page.tsx
│   │   ├── mission/page.tsx
│   │   ├── programs/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── donate/page.tsx
│   │   ├── contact/page.tsx   ← COMPLETE (form + live map)
│   │   ├── get-help/page.tsx  ← placeholder — Phase 2
│   │   └── stories/page.tsx   ← placeholder — Phase 2
│   ├── layout.tsx             ← Root layout (fonts)
│   └── globals.css            ← Tailwind v4 @theme config
├── components/
│   ├── layout/Header.tsx, Footer.tsx
│   ├── home/HeroSection.tsx, StatsSection.tsx, ProgramsSection.tsx, TestimonialsSection.tsx
│   ├── contact/ContactForm.tsx
│   ├── donation/DonationForm.tsx, DonationPopup.tsx, AmountSelector.tsx, FundSelector.tsx, BankFeeCheckbox.tsx
│   ├── programs/ProgramCard.tsx, ProgramHero.tsx
│   ├── staff/StaffCard.tsx
│   └── ui/Button.tsx, Input.tsx, FadeUp.tsx
├── lib/
│   ├── constants.ts           ← All static data — edit here for content updates
│   ├── utils.ts
│   └── validations.ts         ← donationSchema + contactSchema
└── types/index.ts             ← Program.image is required (not optional)
```

### TypeScript Rules
- Strict mode enabled — no `any` types
- Explicit return types on all functions
- Interface over type for objects
- Props interfaces named `ComponentNameProps`

### Component Rules
- Server Components by default
- `'use client'` only for: forms, animations, state, browser APIs
- All client components that use Framer Motion must be in separate files

### Styling Rules
- Tailwind utility classes only
- Mobile-first: `sm:` → `md:` → `lg:` breakpoints
- Hero text sizing: `text-4xl sm:text-5xl lg:text-6xl` (never plain `text-5xl`)
- `next/image` with `fill` always needs `sizes` prop

---

## BUILD PHASES

### Phase 1: MVP Launch ← NEARLY COMPLETE
- [x] Project setup (Next.js 16, TypeScript, Tailwind v4, Framer Motion v12)
- [x] Design system (globals.css @theme, brand tokens)
- [x] Root layout + marketing layout
- [x] Header (sticky, dropdowns, mobile drawer)
- [x] Footer (4-column, logo, links)
- [x] Homepage (real photo hero, stats + photo, programs, testimonials, CTA)
- [x] About Us page (real photos, story, mission, vision, values, Uganda context)
- [x] Our Staff page (real headshots — Isaac, Sharon, Pius)
- [x] Our Mission page (full page — mission, vision, holistic model, principles)
- [x] Programs overview page (real field photos)
- [x] All 6 individual program pages (`/programs/[slug]`)
- [x] Donate page (3-step form, SWIFT modal, trust sidebar)
- [x] Contact page (real photo hero, contact strip, form, Google Maps embed)
- [x] Donation popup modal (sessionStorage, 5s delay)
- [x] FadeUp scroll animations on all pages
- [x] Community Documentary design system applied across all pages
- [x] Real program content from client (all 6 descriptions updated)
- [x] Real mission statement and core values updated
- [x] Real staff data (Isaac Oyirwoth, Sharon Blue, Pius Olockywinu)
- [x] 19 real HSF field photos integrated throughout
- [x] All non-African/non-Ugandan stock photos replaced
- [x] Mobile responsive (all pages, `text-4xl sm:text-5xl lg:text-6xl` pattern)
- [x] vercel.json for stable Vercel deployment
- [ ] **SWIFT bank details** (awaiting from client)
- [ ] **Real impact statistics** (awaiting from client)
- [ ] **Real testimonials** (awaiting from client)
- [ ] Final testing + go-live on Vercel

### Phase 2: Enhancement (30-60 days post-launch)
- [ ] Get Help page — eligibility, application process, resources
- [ ] Stories page — testimonial cards with full story view
- [ ] Email confirmation system for donors
- [ ] Database for donation submission tracking
- [ ] Admin dashboard
- [ ] Analytics integration
- [ ] SEO optimization (metadata, OG images, sitemap)
- [ ] Dark mode toggle

---

## HOW TO UPDATE CONTENT (for non-dev updates)

All content lives in `src/lib/constants.ts`. To update without touching page files:

| Content | Where in constants.ts |
|---------|----------------------|
| SWIFT bank details | `SWIFT_DETAILS` object |
| Staff names/bios/photos | `STAFF_MEMBERS` array |
| Impact numbers (homepage) | `IMPACT_STATS` array |
| Testimonial quotes | `TESTIMONIALS` array |
| Program descriptions | `PROGRAMS` array → `description`, `shortDescription` |
| Program how-it-works steps | `PROGRAMS` array → `howItWorks` |

---

## IMPORTANT NOTES

⚠️ **Bank Fee**: `BANK_FEE_USD = 45` (not $50 as previously stated). Donors actively choose whether to cover it. Never hide this cost.

⚠️ **SWIFT Details**: Not sensitive — meant to be shared for receiving payments. Safe to display publicly.

⚠️ **Recurring Donations**: SWIFT is manual. "Recurring" means the donor sets up recurring transfers at their bank. Email reminders in Phase 2.

⚠️ **As-Needed Framing**: Never describe programs as "long-term" or "ongoing welfare." Always use: "as-needed," "emergency basis," "temporary crisis," "through their crisis period."

⚠️ **Faith-Based Language**: Always acknowledge the faith foundation — "faith-grounded," "spiritual," "faith-based." This is core to the organization's identity.

⚠️ **Mobile First**: 70%+ of Uganda web traffic is mobile. Every component must work on small screens first.

⚠️ **Tailwind v4**: There is NO `tailwind.config.js`. All config is in `globals.css` via `@theme {}`. Do not create a tailwind config file.

⚠️ **Program.image is required**: `src/types/index.ts` — `image: string` (not `image?: string`). All 6 programs have images defined.

⚠️ **Google Maps iframe**: The contact page embeds Google Maps via `<iframe>` (no API key needed). The `MAP_SRC` constant is in `contact/page.tsx`. No CSP changes needed.

---

## SESSION WORKFLOW

### Starting a New Session
1. Say: **"Read CLAUDE.md first"**
2. Claude reads this file to get full project context
3. No re-explaining needed — all state is here

### To Update Content Only
1. Edit `src/lib/constants.ts` for data changes
2. Edit specific page files for copy changes
3. Run `npm run build` to verify — must show 18 pages, 0 errors

### To Build a New Page
1. Create `src/app/(marketing)/[page-name]/page.tsx`
2. Use `FadeUp` for scroll animations
3. Hero: full-bleed overlay with a real HSF field photo (see photo map above)
4. Follow section heading pattern: amber rule + label + serif heading
5. Alternate `bg-warm-white` / `bg-white` / `bg-forest-green-50` / `bg-forest-green-900`
6. Run `npm run build` to verify

---

**Last Updated**: 2026-05-22
**Version**: 3.0
**Status**: Phase 1 — Feature Complete. Awaiting SWIFT details, impact stats, and real testimonials from client.
**Next Step**: Receive SWIFT bank details → populate `SWIFT_DETAILS` in `constants.ts` → go live on Vercel
