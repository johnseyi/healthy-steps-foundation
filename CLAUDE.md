# HEALTHY STEPS FOUNDATION - WEBSITE PROJECT BRIEF

## PROJECT OVERVIEW
Building a professional NGO website for Healthy Steps Foundation, a Uganda-based faith-based mental health and family support organization. Built with Next.js 16.2.3, TypeScript (strict), Tailwind CSS v4, and Framer Motion v12.

## ORGANIZATION DETAILS
- **Name**: Healthy Steps Foundation
- **Location**: Uganda, Central Region, Wakiso, Ndejje Division, Ndejje Ward, Mirimu
- **Contacts**:
  - Phone: +256756231553 / +256782818734
  - Email: healthystepsfoundation@gmail.com

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

---

## CURRENT BUILD STATUS (as of 2026-04-15)

### ✅ COMPLETED — All 18 pages build and pass TypeScript

#### Pages Built
| Page | Route | Status |
|------|-------|--------|
| Homepage | `/` | ✅ Complete |
| About Us | `/about` | ✅ Complete |
| Our Staff | `/staff` | ✅ Complete — awaiting real staff data |
| Our Mission | `/mission` | ✅ Complete — full page with real content |
| Programs Overview | `/programs` | ✅ Complete |
| Food Closet | `/programs/food-closet` | ✅ Complete |
| Clothing Closet | `/programs/clothing-closet` | ✅ Complete |
| Children Tuition | `/programs/children-tuition` | ✅ Complete |
| Adult Vocation | `/programs/adult-vocation` | ✅ Complete |
| Family Medical | `/programs/family-medical` | ✅ Complete |
| Resource Materials | `/programs/resource-materials` | ✅ Complete |
| Donate | `/donate` | ✅ Complete — awaiting SWIFT details |
| Get Help | `/get-help` | ⏳ Placeholder shell — Phase 2 |
| Stories | `/stories` | ⏳ Placeholder shell — Phase 2 |
| Contact | `/contact` | ⏳ Placeholder shell — Phase 2 |

#### Components Built
- `Header.tsx` — sticky, dropdown nav, mobile drawer, HSF_logo.png
- `Footer.tsx` — 4-column grid, logo, links, contact
- `FadeUp.tsx` — standard scroll-animation wrapper (used on all pages)
- `HeroSection.tsx` — homepage hero with Framer Motion entry animations
- `StatsSection.tsx` — animated counters with `useInView` + `requestAnimationFrame`
- `ProgramsSection.tsx` — staggered program card grid
- `TestimonialsSection.tsx` — 3-card testimonial layout
- `ProgramCard.tsx` — reusable card linking to program slug pages
- `ProgramHero.tsx` — individual program page hero
- `StaffCard.tsx` — initials avatar + name/title/bio
- `DonationForm.tsx` — 3-step form with SWIFT success modal
- `DonationPopup.tsx` — sessionStorage-gated popup, 5s delay
- `AmountSelector.tsx`, `FundSelector.tsx`, `BankFeeCheckbox.tsx`
- `Button.tsx`, `Input.tsx`

#### Data & Logic
- `src/lib/constants.ts` — all static data (PROGRAMS, STAFF_MEMBERS, TESTIMONIALS, IMPACT_STATS, SWIFT_DETAILS, ORG)
- `src/lib/validations.ts` — Zod `donationSchema`
- `src/lib/utils.ts` — `formatCurrency`, `calculateDonationTotals`, `cn`
- `src/types/index.ts` — all TypeScript interfaces

### ⏳ PENDING — Blocking launch
- [ ] **SWIFT bank details** — fill into `SWIFT_DETAILS` in `src/lib/constants.ts`
- [ ] **Staff names, titles, bios, photos** — fill into `STAFF_MEMBERS` in `src/lib/constants.ts`
- [ ] **Real impact statistics** — fill into `IMPACT_STATS` in `src/lib/constants.ts`
- [ ] **Real testimonials** — fill into `TESTIMONIALS` in `src/lib/constants.ts`
- [ ] **High-quality photos** — replace all "photo coming soon" placeholders
- [ ] **Organization founding story** — update `about/page.tsx` Our Story section

---

## CONTENT THAT IS REAL (from client)

### Program Short Descriptions (all updated in constants.ts)
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
- Calculated: `donationAmount`, `bankFee` ($50), `totalAmount`

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

## DESIGN SYSTEM

See `DESIGN_SYSTEM.md` for full details. Summary:

### Brand Colors
- **Forest Green**: `forest-green-50` through `forest-green-900` (primary brand)
- **Amber**: `amber-400` / `amber-500` / `amber-600` (accent, CTAs, highlights)
- **Warm White**: `warm-white` (page backgrounds)
- **Warm Gray**: `warm-gray-400` through `warm-gray-900` (text)

### Typography
- **Serif** (`font-serif`): Merriweather — headings, hero text
- **Sans** (`font-sans`): Inter — body, UI

### Animation Pattern
Use `FadeUp` component for all scroll-triggered animations:
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
│   │   ├── get-help/page.tsx  ← placeholder
│   │   ├── stories/page.tsx   ← placeholder
│   │   └── contact/page.tsx   ← placeholder
│   ├── layout.tsx             ← Root layout (fonts)
│   └── globals.css            ← Tailwind v4 @theme config
├── components/
│   ├── layout/Header.tsx, Footer.tsx
│   ├── home/HeroSection.tsx, StatsSection.tsx, ProgramsSection.tsx, TestimonialsSection.tsx
│   ├── donation/DonationForm.tsx, DonationPopup.tsx, AmountSelector.tsx, FundSelector.tsx, BankFeeCheckbox.tsx
│   ├── programs/ProgramCard.tsx, ProgramHero.tsx
│   ├── staff/StaffCard.tsx
│   └── ui/Button.tsx, Input.tsx, FadeUp.tsx
├── lib/
│   ├── constants.ts           ← All static data — edit here for content updates
│   ├── utils.ts
│   └── validations.ts
└── types/index.ts
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

---

## BUILD PHASES

### Phase 1: MVP Launch ← NEARLY COMPLETE
- [x] Project setup (Next.js 16, TypeScript, Tailwind v4, Framer Motion v12)
- [x] Design system (globals.css @theme, brand tokens)
- [x] Root layout + marketing layout
- [x] Header (sticky, dropdowns, mobile drawer)
- [x] Footer (4-column, logo, links)
- [x] Homepage (hero, stats, programs, testimonials, CTA)
- [x] About Us page (story, mission, vision, values, Uganda context)
- [x] Our Staff page (grid, stats strip, CTA)
- [x] Our Mission page (full page — mission, vision, holistic model, principles)
- [x] Programs overview page
- [x] All 6 individual program pages (`/programs/[slug]`)
- [x] Donate page (3-step form, SWIFT modal, trust sidebar)
- [x] Donation popup modal (sessionStorage, 5s delay)
- [x] FadeUp scroll animations on all pages
- [x] Smooth scroll (`scroll-behavior: smooth`)
- [x] Real program content from client (all 6 descriptions updated)
- [x] Real mission statement and core values updated
- [x] Mobile responsive (all pages, `text-4xl sm:text-5xl lg:text-6xl` pattern)
- [ ] SWIFT bank details (awaiting from client)
- [ ] Real staff data (awaiting from client)
- [ ] Real impact statistics (awaiting from client)
- [ ] Real testimonials (awaiting from client)
- [ ] Real photos (awaiting from client)
- [ ] Testing + deployment (Vercel)

### Phase 2: Enhancement (30-60 days post-launch)
- [ ] Get Help page — eligibility, application process, resources
- [ ] Stories page — testimonial cards with full story view
- [ ] Contact page — form (React Hook Form + Zod) → email
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

⚠️ **Bank Fee Clarity**: The $50 bank fee must be explained clearly. Donors actively choose whether to cover it. Never hide or obscure this cost.

⚠️ **SWIFT Details**: Not sensitive — meant to be shared for receiving payments. Safe to display publicly.

⚠️ **Recurring Donations**: SWIFT is manual. "Recurring" means we show the donor their schedule and ask them to set up recurring transfers at their bank. Email reminders in Phase 2.

⚠️ **As-Needed Framing**: Never describe programs as "long-term" or "ongoing welfare." Always use: "as-needed," "emergency basis," "temporary crisis," "through their crisis period."

⚠️ **Faith-Based Language**: Always acknowledge the faith foundation — "faith-grounded," "spiritual," "faith-based." This is core to the organization's identity.

⚠️ **Mobile First**: 70%+ of Uganda web traffic is mobile. Every component must work on small screens first.

⚠️ **Tailwind v4**: There is NO `tailwind.config.js`. All config is in `globals.css` via `@theme {}`. Do not create a tailwind config file.

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
3. Follow hero pattern: `bg-forest-green-900`, amber tag, `text-4xl sm:text-5xl lg:text-6xl` H1
4. Pull from `CONTENT.md` for copy
5. Run `npm run build` to verify

---

**Last Updated**: 2026-04-15
**Version**: 2.0
**Status**: Phase 1 — Feature Complete, Awaiting Client Content
**Next Step**: Receive SWIFT details + staff info → populate constants.ts → deploy to Vercel
