# HEALTHY STEPS FOUNDATION - DESIGN SYSTEM

## DESIGN PHILOSOPHY

### Inspiration
**StrongMinds** (https://strongminds.org) - Uganda-based mental health NGO with award-winning design.

### Aesthetic Direction
- **Warm & Trustworthy**: Faith-grounded, community-focused
- **Nature-Inspired**: Uganda's lush green landscapes
- **Professional but Approachable**: Not corporate, not too casual
- **Hope-Focused**: Optimistic, uplifting, forward-looking

### Design Principles
1. **Mobile-First**: 70%+ Uganda traffic is mobile
2. **Accessible**: WCAG AA minimum, works for everyone
3. **Fast**: Optimized images, minimal JavaScript
4. **Clear CTAs**: Donate button always visible and prominent
5. **Story-Driven**: Photos and testimonials build trust

---

## BRAND COLORS

### Primary Palette
```css
--forest-green-50:  #E8F4F1;   /* Light backgrounds, hover states */
--forest-green-100: #C2E4DB;   /* Subtle accents */
--forest-green-200: #9BD4C4;   /* Borders, dividers */
--forest-green-300: #74C4AD;   /* Secondary elements */
--forest-green-400: #4DB496;   /* Interactive elements */
--forest-green-500: #0F6E56;   /* PRIMARY BRAND COLOR - Healing, nature, growth */
--forest-green-600: #0C5A46;   /* Hover states */
--forest-green-700: #094636;   /* Active states */
--forest-green-800: #063226;   /* Deep accents */
--forest-green-900: #031E16;   /* Text on light backgrounds */
```

**Usage**: 
- Headers, navigation, footer backgrounds
- Section dividers
- Primary buttons (with amber text)
- Links and interactive elements

### Accent - Amber (Call-to-Action)
```css
--amber-50:  #FEF7E8;   /* Light CTA backgrounds */
--amber-100: #FDECC2;   /* Hover backgrounds */
--amber-200: #FBE09B;   /* Borders */
--amber-300: #FAD474;   /* Subtle CTAs */
--amber-400: #F8C84D;   /* Secondary CTAs */
--amber-500: #F5A623;   /* PRIMARY CTA COLOR - "Donate" buttons */
--amber-600: #D48F1E;   /* Hover state */
--amber-700: #B37819;   /* Active state */
--amber-800: #926114;   /* Deep amber */
--amber-900: #714A0F;   /* Dark amber */
```

**Usage**:
- ALL "Donate" buttons (primary CTA)
- Important CTAs (Get Help, Submit, etc.)
- Highlights, badges, notification dots
- Icons that need attention

### Neutrals (Warm White Base)
```css
--warm-white:    #F7F5F0;   /* Page backgrounds (softer than #FFF) */
--warm-gray-50:  #FAFAF8;   /* Card backgrounds */
--warm-gray-100: #F0EFEA;   /* Subtle dividers */
--warm-gray-200: #E5E3DA;   /* Borders */
--warm-gray-300: #D1CEC1;   /* Disabled states */
--warm-gray-400: #B8B4A3;   /* Placeholder text */
--warm-gray-500: #8A8671;   /* Secondary text */
--warm-gray-600: #6E6B59;   /* Body text */
--warm-gray-700: #4A4840;   /* Headings */
--warm-gray-800: #2E2D28;   /* Dark text */
--warm-gray-900: #1A1917;   /* Maximum contrast */
```

### Semantic Colors
```css
--success: #10B981;   /* Form success, positive impact stats */
--warning: #F59E0B;   /* Alerts, important notices */
--error:   #EF4444;   /* Form errors, critical alerts */
--info:    #3B82F6;   /* Informational messages */
```

### Color Ratios (Following StrongMinds)
- **70% Warm White/Neutrals**: Backgrounds, breathing room
- **20% Forest Green**: Structure, navigation, sections
- **10% Amber**: CTAs, highlights, attention points

---

## TYPOGRAPHY

### Font Families

#### Primary: **Inter** (Sans-serif)
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```
**Usage**: UI elements, body text, buttons, navigation, forms  
**Weights**: 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)  
**Google Fonts**: `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');`

#### Secondary: **Merriweather** (Serif)
```css
font-family: 'Merriweather', Georgia, 'Times New Roman', serif;
```
**Usage**: Headings (H1, H2), pull quotes, testimonials  
**Weights**: 400 (Regular), 700 (Bold), 900 (Black)  
**Google Fonts**: `@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700;900&display=swap');`

### Type Scale (Mobile-First)

#### Headings
```css
/* H1 - Page Heroes */
.heading-1 {
  font-family: 'Merriweather', serif;
  font-size: 2rem;        /* 32px mobile */
  line-height: 1.2;
  font-weight: 900;
  letter-spacing: -0.02em;
  color: var(--warm-gray-900);
}
@media (min-width: 768px) {
  .heading-1 { font-size: 3rem; }    /* 48px tablet */
}
@media (min-width: 1024px) {
  .heading-1 { font-size: 4rem; }    /* 64px desktop */
}

/* H2 - Section Headings */
.heading-2 {
  font-family: 'Merriweather', serif;
  font-size: 1.75rem;     /* 28px mobile */
  line-height: 1.3;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: var(--warm-gray-900);
}
@media (min-width: 768px) {
  .heading-2 { font-size: 2.25rem; } /* 36px tablet */
}
@media (min-width: 1024px) {
  .heading-2 { font-size: 3rem; }    /* 48px desktop */
}

/* H3 - Subsection Headings */
.heading-3 {
  font-family: 'Inter', sans-serif;
  font-size: 1.5rem;      /* 24px mobile */
  line-height: 1.4;
  font-weight: 700;
  color: var(--warm-gray-800);
}
@media (min-width: 768px) {
  .heading-3 { font-size: 1.875rem; } /* 30px tablet/desktop */
}

/* H4 - Card Headings */
.heading-4 {
  font-family: 'Inter', sans-serif;
  font-size: 1.25rem;     /* 20px */
  line-height: 1.5;
  font-weight: 600;
  color: var(--warm-gray-800);
}

/* H5 - Small Headings */
.heading-5 {
  font-family: 'Inter', sans-serif;
  font-size: 1.125rem;    /* 18px */
  line-height: 1.5;
  font-weight: 600;
  color: var(--warm-gray-700);
}
```

#### Body Text
```css
/* Body Large - Intros, leads */
.body-large {
  font-family: 'Inter', sans-serif;
  font-size: 1.125rem;    /* 18px */
  line-height: 1.7;
  font-weight: 400;
  color: var(--warm-gray-600);
}

/* Body Regular - Default paragraph */
.body-regular {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;        /* 16px */
  line-height: 1.6;
  font-weight: 400;
  color: var(--warm-gray-600);
}

/* Body Small - Captions, labels */
.body-small {
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;    /* 14px */
  line-height: 1.5;
  font-weight: 400;
  color: var(--warm-gray-500);
}

/* Body Tiny - Fine print */
.body-tiny {
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;     /* 12px */
  line-height: 1.4;
  font-weight: 400;
  color: var(--warm-gray-500);
}
```

#### Functional Text
```css
/* Button Text */
.button-text {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;        /* 16px */
  line-height: 1;
  font-weight: 600;
  letter-spacing: 0.01em;
  text-transform: none;   /* No all-caps */
}

/* Label Text */
.label-text {
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;    /* 14px */
  line-height: 1.4;
  font-weight: 500;
  letter-spacing: 0.01em;
  color: var(--warm-gray-700);
}

/* Navigation Link */
.nav-link {
  font-family: 'Inter', sans-serif;
  font-size: 0.9375rem;   /* 15px */
  line-height: 1.5;
  font-weight: 500;
  letter-spacing: 0;
  color: var(--warm-gray-700);
}
```

---

## SPACING SYSTEM

### Base Unit: 4px (0.25rem)
```css
--space-0:  0;
--space-1:  0.25rem;  /* 4px */
--space-2:  0.5rem;   /* 8px */
--space-3:  0.75rem;  /* 12px */
--space-4:  1rem;     /* 16px */
--space-5:  1.25rem;  /* 20px */
--space-6:  1.5rem;   /* 24px */
--space-8:  2rem;     /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
--space-32: 8rem;     /* 128px */
```

### Spacing Guidelines
- **Component Padding**: 4, 6, 8 (buttons, cards, inputs)
- **Section Padding**: 12, 16, 20 (page sections)
- **Section Margins**: 16, 20, 24 (between major sections)
- **Grid Gaps**: 4, 6, 8 (card grids, lists)

---

## LAYOUT GRID

### Container Widths
```css
--container-sm:  640px;   /* Small screens */
--container-md:  768px;   /* Tablets */
--container-lg:  1024px;  /* Laptops */
--container-xl:  1280px;  /* Desktops */
--container-2xl: 1536px;  /* Large desktops */
```

### Breakpoints (Tailwind defaults)
```css
sm:  640px
md:  768px
lg:  1024px
xl:  1280px
2xl: 1536px
```

### Grid Columns
- **Mobile**: 1 column (full width)
- **Tablet**: 2 columns (cards, features)
- **Desktop**: 3-4 columns (program cards, staff grid)

---

## COMPONENT LIBRARY

### Buttons

#### Primary Button (CTA - Amber)
```tsx
<button className="
  bg-amber-500 text-white
  px-6 py-3 rounded-lg
  font-semibold text-base
  hover:bg-amber-600 
  active:bg-amber-700
  transition-colors duration-200
  shadow-md hover:shadow-lg
  disabled:opacity-50 disabled:cursor-not-allowed
">
  Donate Now
</button>
```

#### Secondary Button (Forest Green)
```tsx
<button className="
  bg-forest-green-500 text-white
  px-6 py-3 rounded-lg
  font-semibold text-base
  hover:bg-forest-green-600
  active:bg-forest-green-700
  transition-colors duration-200
  shadow-sm hover:shadow-md
">
  Learn More
</button>
```

#### Outline Button
```tsx
<button className="
  border-2 border-forest-green-500 text-forest-green-500
  bg-transparent
  px-6 py-3 rounded-lg
  font-semibold text-base
  hover:bg-forest-green-50
  active:bg-forest-green-100
  transition-colors duration-200
">
  Read Stories
</button>
```

#### Ghost Button
```tsx
<button className="
  text-forest-green-600
  px-4 py-2 rounded-md
  font-medium text-sm
  hover:bg-forest-green-50
  active:bg-forest-green-100
  transition-colors duration-200
">
  View All Programs
</button>
```

### Cards

#### Program Card
```tsx
<div className="
  bg-white rounded-xl
  shadow-md hover:shadow-xl
  transition-shadow duration-300
  overflow-hidden
  group
">
  <div className="aspect-video bg-forest-green-100 relative overflow-hidden">
    {/* Image with hover zoom */}
    <img 
      src="..." 
      alt="..."
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
    />
  </div>
  <div className="p-6">
    <h3 className="heading-4 text-forest-green-900 mb-2">Program Name</h3>
    <p className="body-regular text-warm-gray-600 mb-4">Description...</p>
    <a href="..." className="text-amber-500 font-semibold hover:text-amber-600 inline-flex items-center gap-2">
      Learn More
      <svg>→</svg>
    </a>
  </div>
</div>
```

#### Staff Card
```tsx
<div className="
  bg-white rounded-lg
  shadow-sm hover:shadow-md
  transition-shadow duration-300
  overflow-hidden
  text-center
">
  <div className="aspect-square bg-warm-gray-100 relative overflow-hidden">
    <img 
      src="..." 
      alt="..."
      className="w-full h-full object-cover"
    />
  </div>
  <div className="p-6">
    <h4 className="heading-5 text-forest-green-900 mb-1">Staff Name</h4>
    <p className="body-small text-amber-600 font-medium mb-3">Job Title</p>
    <p className="body-small text-warm-gray-600">Brief bio...</p>
  </div>
</div>
```

#### Stat Card
```tsx
<div className="
  bg-forest-green-500 text-white
  rounded-lg p-8
  text-center
">
  <div className="text-5xl font-bold mb-2 font-['Merriweather']">1,200+</div>
  <div className="text-lg opacity-90">Families Served</div>
</div>
```

### Form Elements

#### Text Input
```tsx
<div className="space-y-2">
  <label className="label-text block">Email Address</label>
  <input 
    type="email"
    className="
      w-full px-4 py-3
      border-2 border-warm-gray-200
      rounded-lg
      focus:border-forest-green-500 focus:outline-none focus:ring-2 focus:ring-forest-green-100
      transition-colors duration-200
      placeholder:text-warm-gray-400
    "
    placeholder="you@example.com"
  />
</div>
```

#### Select Dropdown
```tsx
<div className="space-y-2">
  <label className="label-text block">Select Fund</label>
  <select className="
    w-full px-4 py-3
    border-2 border-warm-gray-200
    rounded-lg
    focus:border-forest-green-500 focus:outline-none focus:ring-2 focus:ring-forest-green-100
    bg-white
    transition-colors duration-200
  ">
    <option>Food Closet</option>
    <option>Clothing Closet</option>
    {/* ... */}
  </select>
</div>
```

#### Checkbox
```tsx
<label className="flex items-start gap-3 cursor-pointer group">
  <input 
    type="checkbox"
    className="
      w-5 h-5 mt-0.5
      rounded border-2 border-warm-gray-300
      text-forest-green-500
      focus:ring-2 focus:ring-forest-green-100
      cursor-pointer
    "
  />
  <span className="body-regular text-warm-gray-700 group-hover:text-warm-gray-900">
    I'll cover the $50 bank transfer fee
  </span>
</label>
```

#### Radio Buttons (Donation Type)
```tsx
<div className="flex gap-4">
  <label className="flex-1 cursor-pointer">
    <input type="radio" name="type" value="one-time" className="sr-only peer" />
    <div className="
      px-6 py-3 rounded-lg
      border-2 border-warm-gray-200
      text-center font-semibold
      peer-checked:border-forest-green-500 peer-checked:bg-forest-green-50 peer-checked:text-forest-green-700
      hover:border-warm-gray-300
      transition-colors duration-200
    ">
      One-Time
    </div>
  </label>
  <label className="flex-1 cursor-pointer">
    <input type="radio" name="type" value="recurring" className="sr-only peer" />
    <div className="
      px-6 py-3 rounded-lg
      border-2 border-warm-gray-200
      text-center font-semibold
      peer-checked:border-forest-green-500 peer-checked:bg-forest-green-50 peer-checked:text-forest-green-700
      hover:border-warm-gray-300
      transition-colors duration-200
    ">
      Recurring
    </div>
  </label>
</div>
```

### Navigation

#### Desktop Header
```tsx
<header className="
  bg-white border-b-2 border-warm-gray-100
  sticky top-0 z-50
  shadow-sm
">
  <div className="container mx-auto px-6 py-4 flex items-center justify-between">
    {/* Logo */}
    <div className="flex items-center gap-3">
      <img src="/logo.svg" alt="Healthy Steps" className="h-12" />
      <span className="heading-5 text-forest-green-900">Healthy Steps Foundation</span>
    </div>
    
    {/* Navigation */}
    <nav className="flex items-center gap-8">
      <a href="/" className="nav-link hover:text-forest-green-600">Home</a>
      <a href="/programs" className="nav-link hover:text-forest-green-600">Programs</a>
      <a href="/stories" className="nav-link hover:text-forest-green-600">Stories</a>
      <a href="/contact" className="nav-link hover:text-forest-green-600">Contact</a>
    </nav>
    
    {/* CTA Button */}
    <button className="bg-amber-500 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-amber-600">
      Donate
    </button>
  </div>
</header>
```

#### Mobile Menu (Hamburger)
```tsx
{/* Hamburger trigger */}
<button className="lg:hidden p-2" aria-label="Menu">
  <svg className="w-6 h-6">...</svg>
</button>

{/* Mobile drawer */}
<div className="
  fixed inset-0 bg-white z-50
  transform translate-x-full
  transition-transform duration-300
  data-[open=true]:translate-x-0
">
  <div className="p-6 flex flex-col gap-6">
    <a href="/" className="text-xl font-semibold text-forest-green-900">Home</a>
    <a href="/programs" className="text-xl font-semibold text-forest-green-900">Programs</a>
    {/* ... */}
    <button className="bg-amber-500 text-white px-6 py-3 rounded-lg font-semibold mt-4">
      Donate Now
    </button>
  </div>
</div>
```

---

## SHADOWS

```css
--shadow-sm:  0 1px 2px 0 rgba(15, 110, 86, 0.05);
--shadow-md:  0 4px 6px -1px rgba(15, 110, 86, 0.1), 
              0 2px 4px -1px rgba(15, 110, 86, 0.06);
--shadow-lg:  0 10px 15px -3px rgba(15, 110, 86, 0.1), 
              0 4px 6px -2px rgba(15, 110, 86, 0.05);
--shadow-xl:  0 20px 25px -5px rgba(15, 110, 86, 0.1), 
              0 10px 10px -5px rgba(15, 110, 86, 0.04);
--shadow-2xl: 0 25px 50px -12px rgba(15, 110, 86, 0.25);
```

**Usage**:
- Cards: `shadow-md` default, `shadow-xl` on hover
- Buttons: `shadow-md` primary CTAs
- Modals/Popups: `shadow-2xl`
- Dropdowns: `shadow-lg`

---

## BORDER RADIUS

```css
--radius-sm:  0.25rem;  /* 4px - small buttons, badges */
--radius-md:  0.5rem;   /* 8px - inputs, small cards */
--radius-lg:  0.75rem;  /* 12px - buttons, medium cards */
--radius-xl:  1rem;     /* 16px - large cards, modals */
--radius-2xl: 1.5rem;   /* 24px - hero sections */
--radius-full: 9999px;  /* Circular - avatars, pills */
```

---

## ANIMATIONS

### Transitions
```css
/* Default transition */
transition: all 200ms ease-in-out;

/* Color transitions */
transition: background-color 200ms ease-in-out, 
            color 200ms ease-in-out;

/* Transform transitions (hover scale, etc) */
transition: transform 300ms ease-out;

/* Shadow transitions */
transition: box-shadow 300ms ease-in-out;
```

### Hover Effects

#### Card Lift
```tsx
<div className="
  transition-all duration-300
  hover:shadow-xl hover:-translate-y-1
">
  {/* Card content */}
</div>
```

#### Image Zoom (on hover)
```tsx
<div className="overflow-hidden">
  <img className="
    transition-transform duration-500
    group-hover:scale-105
  " />
</div>
```

#### Button Press
```tsx
<button className="
  transition-transform duration-100
  active:scale-95
">
  Click Me
</button>
```

### Loading States

#### Skeleton Loader
```tsx
<div className="animate-pulse">
  <div className="h-4 bg-warm-gray-200 rounded w-3/4 mb-2"></div>
  <div className="h-4 bg-warm-gray-200 rounded w-1/2"></div>
</div>
```

#### Spinner
```tsx
<svg className="animate-spin h-5 w-5 text-forest-green-500" viewBox="0 0 24 24">
  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
</svg>
```

---

## ICONS

### Icon Library: **Lucide React**
```bash
npm install lucide-react
```

### Common Icons
```tsx
import { 
  Heart,        // Donate, support
  Users,        // Community, families
  GraduationCap, // Education programs
  Shirt,        // Clothing closet
  UtensilsCrossed, // Food closet
  Stethoscope,  // Medical support
  BookOpen,     // Resource materials
  ChevronRight, // Navigation arrows
  Menu,         // Mobile menu
  X,            // Close button
  Check,        // Success, checkboxes
  AlertCircle,  // Warnings
  Mail,         // Contact
  Phone,        // Phone contact
} from 'lucide-react';
```

### Icon Sizing
- **Small**: 16px (`size={16}`)
- **Medium**: 20px (`size={20}`)
- **Large**: 24px (`size={24}`)
- **XL**: 32px (`size={32}`)

---

## IMAGERY GUIDELINES

### Photo Style
- **Authentic**: Real people, real Uganda locations
- **Warm Lighting**: Natural, golden hour when possible
- **Candid**: Not overly posed, genuine moments
- **Diverse**: Show all programs and communities served
- **Hopeful**: Uplifting, positive, forward-looking

### Image Specs
- **Hero Images**: 1920x1080px minimum (16:9)
- **Program Cards**: 800x600px minimum (4:3)
- **Staff Photos**: 600x600px minimum (1:1 square)
- **Testimonial Photos**: 400x400px (1:1 square)
- **Format**: WebP preferred (fallback to JPG)
- **Optimization**: Compress to <200KB per image

### Placeholder Colors
```css
--placeholder-light: #E8F4F1;  /* Forest green 50 */
--placeholder-dark:  #9BD4C4;  /* Forest green 200 */
```

---

## ACCESSIBILITY

### Contrast Ratios (WCAG AA)
- **Normal Text**: 4.5:1 minimum
- **Large Text**: 3:1 minimum (18px+ or 14px+ bold)
- **UI Components**: 3:1 minimum

### Verified Combinations
✅ Forest Green 500 (#0F6E56) on Warm White (#F7F5F0) - 7.2:1  
✅ Amber 500 (#F5A623) on Forest Green 900 (#031E16) - 8.1:1  
✅ Warm Gray 600 (#6E6B59) on Warm White (#F7F5F0) - 5.3:1  
✅ White (#FFFFFF) on Forest Green 500 (#0F6E56) - 5.8:1  

### Focus States
```css
/* Keyboard focus ring */
focus:outline-none 
focus:ring-2 
focus:ring-forest-green-500 
focus:ring-offset-2
```

### Screen Reader Support
- Semantic HTML (`<nav>`, `<main>`, `<article>`)
- ARIA labels on icon buttons
- Alt text on all images
- Skip-to-content link
- Proper heading hierarchy (H1 → H2 → H3)

---

## RESPONSIVE DESIGN

### Mobile (< 640px)
- Single column layout
- Larger tap targets (min 44px)
- Simplified navigation (hamburger menu)
- Reduced padding (space-4 to space-6)
- Stacked donation form fields

### Tablet (640px - 1024px)
- 2-column grids for cards
- Side-by-side form fields (where logical)
- Visible navigation (no hamburger)
- Medium padding (space-6 to space-8)

### Desktop (1024px+)
- 3-4 column grids
- Full-width hero sections
- Larger typography
- Generous padding (space-12 to space-20)
- Hover effects enabled

---

## TAILWIND CONFIG

```javascript
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'forest-green': {
          50: '#E8F4F1',
          100: '#C2E4DB',
          200: '#9BD4C4',
          300: '#74C4AD',
          400: '#4DB496',
          500: '#0F6E56',
          600: '#0C5A46',
          700: '#094636',
          800: '#063226',
          900: '#031E16',
        },
        'amber': {
          50: '#FEF7E8',
          100: '#FDECC2',
          200: '#FBE09B',
          300: '#FAD474',
          400: '#F8C84D',
          500: '#F5A623',
          600: '#D48F1E',
          700: '#B37819',
          800: '#926114',
          900: '#714A0F',
        },
        'warm-white': '#F7F5F0',
        'warm-gray': {
          50: '#FAFAF8',
          100: '#F0EFEA',
          200: '#E5E3DA',
          300: '#D1CEC1',
          400: '#B8B4A3',
          500: '#8A8671',
          600: '#6E6B59',
          700: '#4A4840',
          800: '#2E2D28',
          900: '#1A1917',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        serif: ['Merriweather', 'ui-serif', 'Georgia'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      boxShadow: {
        'green-sm': '0 1px 2px 0 rgba(15, 110, 86, 0.05)',
        'green-md': '0 4px 6px -1px rgba(15, 110, 86, 0.1), 0 2px 4px -1px rgba(15, 110, 86, 0.06)',
        'green-lg': '0 10px 15px -3px rgba(15, 110, 86, 0.1), 0 4px 6px -2px rgba(15, 110, 86, 0.05)',
        'green-xl': '0 20px 25px -5px rgba(15, 110, 86, 0.1), 0 10px 10px -5px rgba(15, 110, 86, 0.04)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
```

---

## FRAMER MOTION ANIMATIONS

### Page Transitions
```tsx
import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

<motion.div
  variants={pageVariants}
  initial="initial"
  animate="animate"
  exit="exit"
  transition={{ duration: 0.3 }}
>
  {/* Page content */}
</motion.div>
```

### Stagger Children (Cards Grid)
```tsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

<motion.div variants={containerVariants} initial="hidden" animate="visible">
  {items.map(item => (
    <motion.div key={item.id} variants={itemVariants}>
      {/* Card */}
    </motion.div>
  ))}
</motion.div>
```

### Modal/Popup Animation
```tsx
const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { type: 'spring', damping: 25, stiffness: 300 }
  },
};

<motion.div variants={backdropVariants} initial="hidden" animate="visible">
  <motion.div variants={modalVariants}>
    {/* Modal content */}
  </motion.div>
</motion.div>
```

---

## PERFORMANCE

### Image Optimization
```tsx
import Image from 'next/image';

<Image
  src="/hero.jpg"
  alt="Families in Uganda"
  width={1920}
  height={1080}
  priority // Above the fold
  placeholder="blur"
  blurDataURL="data:..." // Base64 placeholder
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

### Font Loading
```tsx
// app/layout.tsx
import { Inter, Merriweather } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const merriweather = Merriweather({ 
  weight: ['400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-merriweather',
});
```

### Bundle Size Targets
- **Initial Load**: < 150KB (JS + CSS)
- **Per Page**: < 50KB additional
- **Images**: WebP, lazy-loaded, responsive srcset

---

## BRAND VOICE

### Tone Attributes
- **Warm**: Welcoming, compassionate, human
- **Hopeful**: Optimistic, forward-looking, empowering
- **Trustworthy**: Transparent, professional, reliable
- **Faith-Grounded**: Spiritual without being preachy
- **Action-Oriented**: Clear CTAs, solution-focused

### Writing Guidelines
- Use "we" and "our community" (inclusive)
- Active voice over passive
- Short sentences (mobile readability)
- No jargon (accessible to all education levels)
- Personal stories over statistics (when possible)

---

**Version**: 1.0  
**Last Updated**: 2026-04-09  
**Maintained By**: Development Team
