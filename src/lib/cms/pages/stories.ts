import { text, textarea } from '../fields';
import type { PageSchema } from '../types';

export type StoriesContent = {
  heroEyebrow: string;
  heroTitle: string;
  heroLead: string;

  gridEyebrow: string;
  gridTitle: string;

  moreTitle: string;
  moreText: string;

  programsEyebrow: string;
  programsTitle: string;
  programsLead: string;
  programsButtonLabel: string;
  programsButtonHref: string;

  ctaEyebrow: string;
  ctaTitle: string;
  ctaLead: string;
  ctaDonateLabel: string;
  ctaDonateHref: string;
  ctaShareLabel: string;
  ctaShareHref: string;
};

const defaults: StoriesContent = {
  heroEyebrow: 'Impact Stories',
  heroTitle: 'Real Families, Real Change',
  heroLead:
    'Behind every program is a family with a story. Here are a few of the lives touched by Healthy Steps Foundation — told with permission, shared with dignity.',

  gridEyebrow: 'Community Voices',
  gridTitle: 'Stories from the Community',

  moreTitle: 'More Stories Coming Soon',
  moreText:
    'Every family we serve has a story worth telling. As we collect more testimonials from the community, we will share them here — always with full permission, always with dignity and care.',

  programsEyebrow: 'Where Change Happens',
  programsTitle: 'Six Programs, Countless Stories',
  programsLead:
    "Each story comes from one of our six holistic programs. Together, they address every dimension of a family's wellbeing.",
  programsButtonLabel: 'Explore All Programs',
  programsButtonHref: '/programs',

  ctaEyebrow: 'Be Part of the Story',
  ctaTitle: 'Your Support Writes the Next Chapter',
  ctaLead:
    'Every donation helps a family through a crisis — and creates a story of hope, resilience, and dignity in Ndejje.',
  ctaDonateLabel: 'Donate Now',
  ctaDonateHref: '/donate',
  ctaShareLabel: 'Share Your Story',
  ctaShareHref: '/contact',
};

export const storiesSchema: PageSchema<StoriesContent> = {
  slug: 'stories',
  label: 'Stories',
  description: 'The Stories page wording. The quotes themselves are under Testimonials.',
  group: 'Pages',
  path: '/stories',
  defaults,
  groups: [
    {
      id: 'hero',
      label: 'Hero',
      fields: [
        text('heroEyebrow', 'Small label above the heading'),
        text('heroTitle', 'Heading'),
        textarea('heroLead', 'Introduction paragraph', { rows: 4 }),
      ],
    },
    {
      id: 'grid',
      label: 'Stories section',
      description: 'The quotes shown here are edited under Testimonials.',
      fields: [
        text('gridEyebrow', 'Small label above the heading'),
        text('gridTitle', 'Heading'),
        text('moreTitle', 'Green box heading'),
        textarea('moreText', 'Green box text', { rows: 4 }),
      ],
    },
    {
      id: 'programs',
      label: 'Programs section',
      fields: [
        text('programsEyebrow', 'Small label above the heading'),
        text('programsTitle', 'Heading'),
        textarea('programsLead', 'Body text', { rows: 3 }),
        text('programsButtonLabel', 'Button label'),
        text('programsButtonHref', 'Button link'),
      ],
    },
    {
      id: 'cta',
      label: 'Closing call to action',
      fields: [
        text('ctaEyebrow', 'Small label above the heading'),
        text('ctaTitle', 'Heading'),
        textarea('ctaLead', 'Body text', { rows: 3 }),
        text('ctaDonateLabel', 'First button label'),
        text('ctaDonateHref', 'First button link'),
        text('ctaShareLabel', 'Second button label'),
        text('ctaShareHref', 'Second button link'),
      ],
    },
  ],
};
