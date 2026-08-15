import { text, textarea } from '../fields';
import type { PageSchema } from '../types';

export type SiteContent = {
  footerBlurb: string;
  footerCtaLabel: string;
  footerProgramsHeading: string;
  footerExploreHeading: string;
  footerContactHeading: string;
  footerMessageLabel: string;
  footerLegalRight: string;
};

const defaults: SiteContent = {
  footerBlurb:
    'A faith-based organization partnering with families in Wakiso, Uganda to improve mental health wellness — through food, clothing, education, medical care and vocational skills, offered on a temporary basis.',
  footerCtaLabel: 'Support a family',
  footerProgramsHeading: 'Programs',
  footerExploreHeading: 'Explore',
  footerContactHeading: 'Reach Us',
  footerMessageLabel: 'Send us a message',
  footerLegalRight: 'Registered in Uganda · Wakiso, Central Region',
};

export const siteSchema: PageSchema<SiteContent> = {
  slug: 'site',
  label: 'Footer',
  description: 'The wording in the footer, which appears at the bottom of every page.',
  group: 'Shared across pages',
  path: '/',
  revalidateLayout: true,
  defaults,
  groups: [
    {
      id: 'footer',
      label: 'Footer',
      description:
        'The email address, phone numbers and physical address are not edited here — they also appear in donation receipts and reminder emails, so they are changed once in the code and update everywhere at the same time.',
      fields: [
        textarea('footerBlurb', 'Description under the logo', { rows: 4 }),
        text('footerCtaLabel', 'Button label'),
        text('footerProgramsHeading', 'Programs column heading'),
        text('footerExploreHeading', 'Links column heading'),
        text('footerContactHeading', 'Contact column heading'),
        text('footerMessageLabel', 'Contact link label'),
        text('footerLegalRight', 'Small print, bottom right', {
          help: 'The copyright line on the left updates its year automatically.',
        }),
      ],
    },
  ],
};
