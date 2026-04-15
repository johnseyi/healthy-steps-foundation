# HEALTHY STEPS FOUNDATION - SITEMAP

## SITE STRUCTURE OVERVIEW

```
Homepage (/)
│
├── About Us (/about)
├── Our Staff (/staff)
├── Our Mission (/mission) [Phase 2]
│
├── Programs (/programs)
│   ├── All Programs Overview
│   ├── Food Closet (/programs/food-closet)
│   ├── Clothing Closet (/programs/clothing-closet)
│   ├── Children Tuition (/programs/children-tuition)
│   ├── Adult Vocation (/programs/adult-vocation)
│   ├── Family Medical (/programs/family-medical)
│   └── Resource Materials (/programs/resource-materials)
│
├── Get Help (/get-help) [Phase 2]
├── Stories (/stories) [Phase 2]
├── Contact (/contact) [Phase 2]
│
└── Donate (/donate) [CRITICAL - Phase 1]
    └── Donation Popup Modal (triggers on homepage)
```

**Total Pages**: 10 (6 in Phase 1, 4 in Phase 2)

---

## PHASE 1 - LAUNCH READY (6 Pages)

### 1. HOMEPAGE (/)

**File**: `src/app/(marketing)/page.tsx`

#### Sections (in order):
1. **Hero Section**
   - Full-screen background image (rotates between 3-5 photos)
   - Overlay with organization name + tagline
   - Primary CTA: "Donate Now" (amber button)
   - Secondary CTA: "Learn Our Story" (outline button)
   - Impact stats ticker (families served, years active, etc.)

2. **Programs Overview**
   - "Our Programs" heading
   - Grid of 6 program cards (2 cols mobile, 3 cols desktop)
   - Each card: Icon, Title, 1-sentence description, "Learn More" link
   - Links to individual program pages

3. **Impact Stats**
   - 3-4 large stat cards in grid
   - Animated count-up on scroll
   - Examples: "1,200+ Families Served", "500+ Children Educated"

4. **How You Can Help**
   - Split section: Donate | Get Involved | Get Help
   - Each with icon, description, CTA button

5. **Stories Preview**
   - "Hear from Our Community" heading
   - 2-3 testimonial cards (photo, quote, name, program)
   - "Read More Stories" button → Stories page (Phase 2)

6. **Newsletter Signup** (Optional - Phase 2)
   - Email capture form
   - "Stay updated on our impact"

#### Components Needed:
- `<Hero>` with image carousel
- `<ProgramCard>` (reusable)
- `<StatCard>` with count-up animation
- `<TestimonialCard>` (reusable)
- `<DonationPopup>` (auto-fires after 5 seconds)

#### Interactions:
- Popup donation modal (5 seconds after load, once per session)
- Smooth scroll to sections
- Program cards hover effects
- Stats count-up on viewport enter

---

### 2. ABOUT US (/about)

**File**: `src/app/(marketing)/about/page.tsx`

#### Sections:
1. **Page Hero**
   - "About Healthy Steps Foundation"
   - 2-3 sentence intro
   - Background image (Uganda community)

2. **Our Story**
   - Founding story, history, growth
   - Timeline (optional if milestones available)
   - 2-3 paragraphs with supporting image

3. **Mission, Vision, Values**
   - Side-by-side cards or stacked
   - Mission: 2-3 sentences
   - Vision: 1-2 sentences
   - Values: List of 3-5 with icons

4. **Why Uganda / Why Wakiso**
   - Context about the community
   - What makes this area unique
   - Challenges + how HSF addresses them

5. **Leadership Intro**
   - 1-2 sentence intro to team
   - "Meet Our Staff" CTA → Staff page

#### Components:
- `<PageHero>`
- `<ContentSection>` (text + image layouts)
- `<ValueCard>`

---

### 3. OUR STAFF (/staff)

**File**: `src/app/(marketing)/staff/page.tsx`

#### Sections:
1. **Page Hero**
   - "Meet Our Team"
   - Team photo (if available) or collage

2. **Staff Directory**
   - Grid of staff cards (2 cols mobile, 3-4 cols desktop)
   - Each card: Photo, Name, Title, Short bio (2-3 sentences)
   - Optional: Email, LinkedIn links

3. **Join Our Team** (Optional)
   - "Want to make a difference?"
   - Brief hiring/volunteer pitch
   - "Contact Us" CTA

#### Components:
- `<StaffCard>` (reusable)
- Grid layout with hover effects

#### Notes:
- Staff photos should be same aspect ratio (1:1 square preferred)
- Alphabetical order or by hierarchy?
- If no photos available, use placeholder initials

---

### 4. PROGRAMS OVERVIEW (/programs)

**File**: `src/app/(marketing)/programs/page.tsx`

#### Sections:
1. **Page Hero**
   - "Our Programs"
   - "Six ways we support families in Uganda"

2. **Programs Grid**
   - Large cards for all 6 programs
   - Each card:
     - Program icon
     - Program name
     - 2-3 sentence description
     - "Learn More" link → individual program page
     - Supporting image

3. **How to Get Help**
   - Brief instructions on applying for assistance
   - "Get Help" CTA → Get Help page (Phase 2)

#### Components:
- `<ProgramCard>` (larger, more detailed than homepage version)

---

### 5. INDIVIDUAL PROGRAM PAGES (6 Pages)

**Files**: `src/app/(marketing)/programs/[slug]/page.tsx`

**Slugs**:
- `/programs/food-closet`
- `/programs/clothing-closet`
- `/programs/children-tuition`
- `/programs/adult-vocation`
- `/programs/family-medical`
- `/programs/resource-materials`

#### Sections (each program page):
1. **Program Hero**
   - Program name
   - Program icon (large)
   - 1-sentence tagline
   - Background image specific to program

2. **Program Details**
   - Full description (2-3 paragraphs)
   - "How It Works" (step-by-step or bullet points)
   - "Who We Serve" (eligibility/target audience)

3. **Impact Stats**
   - 2-3 stats specific to this program
   - Examples:
     - Food Closet: "500 families served monthly"
     - Children Tuition: "150 children in school"

4. **Testimonial/Story**
   - 1 featured story from this program
   - Photo + quote + name

5. **How You Can Help**
   - Donate to this program (dropdown pre-selected)
   - Volunteer opportunities
   - Share the program

6. **Other Programs**
   - "Explore Our Other Programs" carousel
   - Links to other 5 programs

#### Components:
- `<ProgramHero>`
- `<ProgramDetails>`
- `<ProgramStats>`
- `<RelatedPrograms>` carousel

#### Dynamic Content:
```typescript
// src/lib/constants.ts
export const PROGRAMS = [
  {
    slug: 'food-closet',
    name: 'Food Closet',
    icon: UtensilsCrossed,
    tagline: 'Nourishing families with dignity',
    description: '...',
    howItWorks: [...],
    stats: { familiesServed: 500, mealsPerMonth: 2000 },
    testimonial: { ... },
  },
  // ... other programs
];
```

---

### 6. DONATE PAGE (/donate)

**File**: `src/app/(marketing)/donate/page.tsx`

#### Sections:
1. **Page Hero**
   - "Make a Difference Today"
   - 2-3 sentence emotional appeal

2. **Donation Form**
   - **Donation Type Toggle**: One-Time | Recurring
   - **Amount Selection**:
     - Quick buttons: $25, $50, $100, $250, $500
     - Custom amount input
   - **Recurring Frequency** (if recurring selected):
     - Dropdown: Monthly | Quarterly | Annually
   - **Select Fund/Program**:
     - Dropdown with all 6 programs + "Where Needed Most"
     - Each option has short description
   - **Donor Information**:
     - First Name (required)
     - Last Name (required)
     - Email (required)
     - Phone (optional)
     - Country (required - dropdown)
   - **Bank Fee Option**:
     - Checkbox: "I'll cover the $50 bank transfer fee"
     - Explanation text (clear, visible)
     - Total amount updates dynamically
   - **Summary Box** (sticky on desktop):
     - Your donation: $X
     - Bank fee: $50 (or $0)
     - Total: $X
     - Frequency: [One-time / Monthly / etc.]
     - Fund: [Program name]
   - **Submit Button**: "Review Donation" (amber, large)

3. **After Submission - SWIFT Instructions Modal**
   - Success message
   - "Next Steps" heading
   - Complete SWIFT bank details (formatted clearly)
   - Instructions:
     1. Go to your bank
     2. Initiate international wire transfer
     3. Use the details above
     4. Email proof to healthystepsfoundation@gmail.com
   - "I've Completed the Transfer" button (closes modal)
   - "Email Me These Instructions" button

4. **Why Donate Section** (below form)
   - 3-4 impact points
   - "Your $50 provides X days of meals"
   - "Your $100 covers Y child's tuition for Z months"

5. **FAQs**
   - "Is my donation tax-deductible?"
   - "How is my donation used?"
   - "Can I donate in Ugandan Shillings?"
   - "What if I can't afford the bank fee?"

#### Components:
- `<DonationForm>` (main component)
- `<AmountSelector>`
- `<FundSelector>`
- `<BankFeeCheckbox>`
- `<DonationSummary>` (sticky sidebar)
- `<SwiftInstructionsModal>`

#### Form Validation:
```typescript
// src/lib/validations.ts
import { z } from 'zod';

export const donationSchema = z.object({
  type: z.enum(['one-time', 'recurring']),
  recurringFrequency: z.enum(['monthly', 'quarterly', 'annually']).optional(),
  amount: z.number().min(5, 'Minimum donation is $5'),
  fund: z.enum([
    'food-closet',
    'clothing-closet',
    'children-tuition',
    'adult-vocation',
    'family-medical',
    'resource-materials',
    'where-needed-most',
  ]),
  firstName: z.string().min(1, 'First name required'),
  lastName: z.string().min(1, 'Last name required'),
  email: z.string().email('Valid email required'),
  phone: z.string().optional(),
  country: z.string().min(1, 'Country required'),
  coverBankFee: z.boolean(),
});
```

#### State Management:
- React Hook Form for form state
- Zod for validation
- Context for donation summary (so it's accessible across components)

---

### DONATION POPUP MODAL

**Component**: `<DonationPopup>` in `src/components/donation/DonationPopup.tsx`

#### Trigger:
- Homepage only
- 5 seconds after page load
- Shows once per session (localStorage: `donationPopupShown`)
- User can dismiss (X button or backdrop click)

#### Content:
- 🌱 Icon or small image
- **Headline**: "Make an Impact Today"
- **Subtext**: 1-2 sentences about urgency/need
- **Quick Donate Buttons**:
  - "$50 Donation" → Pre-fills /donate page
  - "$100 Donation" → Pre-fills /donate page
- **Full Form Link**: "See All Options →"
- **Close Button**: X in top-right

#### Functionality:
```typescript
// Quick donate buttons
const handleQuickDonate = (amount: number) => {
  router.push(`/donate?amount=${amount}&fund=where-needed-most&type=one-time`);
  setPopupShown(true);
};
```

---

## PHASE 2 - ENHANCEMENT (4 Pages)

### 7. OUR MISSION (/mission) [Phase 2]

**File**: `src/app/(marketing)/mission/page.tsx`

#### Sections:
- Mission statement (expanded)
- Vision statement (expanded)
- Core values (detailed)
- Strategic goals (3-5 year plan)
- Faith foundation (if applicable)

---

### 8. GET HELP (/get-help) [Phase 2]

**File**: `src/app/(marketing)/get-help/page.tsx`

#### Sections:
- Eligibility criteria
- Application process
- Required documents
- Timeline expectations
- Contact information
- FAQ

---

### 9. STORIES (/stories) [Phase 2]

**File**: `src/app/(marketing)/stories/page.tsx`

#### Sections:
- Featured story (full-width)
- Grid of story cards (filterable by program)
- Each story:
  - Photo
  - Name (or anonymous)
  - Program helped by
  - Quote + full story
  - Date

---

### 10. CONTACT (/contact) [Phase 2]

**File**: `src/app/(marketing)/contact/page.tsx`

#### Sections:
- Contact form
- Office address + map embed
- Office hours
- Phone numbers
- Email
- Social media links

---

## GLOBAL COMPONENTS

### Header/Navigation

**Component**: `src/components/layout/Header.tsx`

#### Desktop Navigation:
```
[Logo] [Healthy Steps Foundation]    Home* | Programs | Get Help | Stories | Contact    [Donate Button]

*Home has dropdown:
  - About Us
  - Our Staff
  - Our Mission
```

#### Mobile Navigation:
- Hamburger menu (right side)
- Drawer slides from right
- Same links, stacked vertically
- Donate button at bottom

#### Sticky Behavior:
- Header sticks to top on scroll
- Slight shadow appears when not at top
- Mobile: Collapses to smaller size on scroll

---

### Footer

**Component**: `src/components/layout/Footer.tsx`

#### Layout (4 columns on desktop, stacked on mobile):

**Column 1: About**
- Logo
- Tagline
- 1-2 sentence description

**Column 2: Quick Links**
- About Us
- Our Staff
- Programs
- Donate

**Column 3: Programs**
- Food Closet
- Clothing Closet
- Children Tuition
- Adult Vocation
- Family Medical
- Resource Materials

**Column 4: Connect**
- Email
- Phone
- Social media icons
- Newsletter signup (Phase 2)

**Bottom Bar**:
- © 2026 Healthy Steps Foundation. All rights reserved.
- Privacy Policy | Terms of Service (Phase 2)

---

## URL STRUCTURE & ROUTING

### Static Routes
```
/                           → Homepage
/about                      → About Us
/staff                      → Our Staff
/mission                    → Our Mission [Phase 2]
/programs                   → Programs Overview
/donate                     → Donate Page
/get-help                   → Get Help [Phase 2]
/stories                    → Stories [Phase 2]
/contact                    → Contact [Phase 2]
```

### Dynamic Routes
```
/programs/[slug]            → Individual Program Pages
                              (6 pages, slugs from constants)
```

### Query Parameters
```
/donate?amount=50&fund=food-closet&type=one-time
  → Pre-fills donation form
```

---

## SEO STRATEGY

### Meta Tags (all pages)
- `<title>` - Unique per page, max 60 chars
- `<meta name="description">` - Unique, max 160 chars
- Open Graph tags (og:title, og:description, og:image)
- Twitter Card tags

### Structured Data (JSON-LD)
- Organization schema (homepage)
- Breadcrumbs (program pages)
- Nonprofit schema (donate page)

### Sitemap.xml
Auto-generated by Next.js:
```typescript
// src/app/sitemap.ts
export default function sitemap() {
  return [
    { url: 'https://healthystepsfoundation.org/', priority: 1.0 },
    { url: 'https://healthystepsfoundation.org/about', priority: 0.8 },
    { url: 'https://healthystepsfoundation.org/donate', priority: 0.9 },
    // ... all pages
  ];
}
```

### Robots.txt
```
User-agent: *
Allow: /
Sitemap: https://healthystepsfoundation.org/sitemap.xml
```

---

## ACCESSIBILITY CHECKLIST

- [ ] Semantic HTML (`<nav>`, `<main>`, `<article>`, `<section>`)
- [ ] Proper heading hierarchy (H1 → H2 → H3)
- [ ] Alt text on all images
- [ ] ARIA labels on icon buttons
- [ ] Keyboard navigation (Tab, Enter, Escape)
- [ ] Focus indicators (visible focus rings)
- [ ] Color contrast WCAG AA
- [ ] Screen reader testing
- [ ] Skip-to-content link

---

## PERFORMANCE TARGETS

- **Lighthouse Score**: 90+ (all categories)
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Time to Interactive**: < 3.5s
- **Cumulative Layout Shift**: < 0.1

**Optimizations**:
- Next.js Image component (lazy loading, WebP)
- Font subsetting (only Latin characters)
- Code splitting (per route)
- Static generation where possible
- CDN hosting (Vercel)

---

**Last Updated**: 2026-04-09  
**Total Pages**: 10 (6 Phase 1, 4 Phase 2)  
**Next Review**: Before Phase 1 launch
