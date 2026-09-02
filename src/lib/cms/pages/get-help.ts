import { list, text, textarea } from '../fields';
import type { ContentItem, PageSchema } from '../types';

export type GetHelpContent = {
  heroEyebrow: string;
  heroTitle: string;
  heroLead: string;
  heroCallLabel: string;
  heroMessageLabel: string;
  heroMessageHref: string;

  hoursEyebrow: string;
  hoursTitle: string;
  hours: ContentItem[];

  programsEyebrow: string;
  programsTitle: string;
  programsLead: string;
  programsButtonLabel: string;

  promiseEyebrow: string;
  promiseTitle: string;
  promises: ContentItem[];

  ctaTitle: string;
  ctaLead: string;
  ctaEmailPrefix: string;
  ctaDonatePrompt: string;
  ctaDonateLabel: string;
  ctaDonateHref: string;
};

const defaults: GetHelpContent = {
  heroEyebrow: 'Support for Families',
  heroTitle: "We're Here to Help",
  heroLead:
    'Healthy Steps Foundation walks alongside families facing temporary hardship, with faith-grounded care, dignity, and no judgment. Reach out today.',
  heroCallLabel: 'Call Us Now',
  heroMessageLabel: 'Send a Message',
  heroMessageHref: '/contact',

  hoursEyebrow: 'Plan Your Visit',
  hoursTitle: 'Hours of Operation',
  hours: [
    { title: 'Office Hours', description: 'Monday to Thursday, 10am to 3pm.' },
    {
      title: 'Community Outreach',
      description:
        'Three Saturdays a month, 10am to 12 noon, rotating between Ndejje, Bukasa, and Makerere Kikoni. Locations are shared before each event. Giveaway items are limited and distributed first come, first served.',
    },
    {
      title: 'Last Saturday of the Month',
      description: "We're closed for inventory and restocking essential items.",
    },
    {
      title: 'Counseling',
      description:
        'Spiritual, psychological, or medical counseling is by appointment only, so the right professional is available. No walk-in appointments.',
    },
    {
      title: 'Volunteer Gatherings',
      description: 'Held the 4th Friday of every month to plan and strategise for community needs.',
    },
  ],

  programsEyebrow: 'Our Programs',
  programsTitle: 'How We Can Support You',
  programsLead:
    "Six programs working together to address every dimension of a family's wellbeing.",
  programsButtonLabel: 'View All Programs',

  promiseEyebrow: 'Our Promise to You',
  promiseTitle: 'What to Expect',
  promises: [
    {
      title: 'Private & Confidential',
      description:
        'Your information is handled with discretion. What you share stays with our team.',
    },
    {
      title: 'No Judgment',
      description:
        "Every family faces seasons of hardship. Needing help is not a failure — it's human.",
    },
    {
      title: 'Open to Everyone',
      description:
        'We are faith-rooted but serve all families regardless of background or beliefs.',
    },
    {
      title: 'Dignity First',
      description:
        'Every interaction is designed to honor your worth and preserve your agency as a family.',
    },
  ],

  ctaTitle: 'Ready to Reach Out?',
  ctaLead:
    "You don't need to have everything figured out. Just reach out — we'll walk through everything together.",
  ctaEmailPrefix: 'Or email us at',
  ctaDonatePrompt: 'Want to support families like these?',
  ctaDonateLabel: 'Donate to Our Work',
  ctaDonateHref: '/donate',
};

export const getHelpSchema: PageSchema<GetHelpContent> = {
  slug: 'get-help',
  label: 'Get Help',
  description: 'Opening hours, the programs, and what families can expect.',
  group: 'Pages',
  path: '/get-help',
  defaults,
  groups: [
    {
      id: 'hero',
      label: 'Hero',
      description: 'The phone number on the call button comes from the site contact details.',
      fields: [
        text('heroEyebrow', 'Small label above the heading'),
        text('heroTitle', 'Heading'),
        textarea('heroLead', 'Introduction paragraph', { rows: 4 }),
        text('heroCallLabel', 'Call button label'),
        text('heroMessageLabel', 'Message button label'),
        text('heroMessageHref', 'Message button link'),
      ],
    },
    {
      id: 'hours',
      label: 'Hours of operation',
      fields: [
        text('hoursEyebrow', 'Small label above the heading'),
        text('hoursTitle', 'Heading'),
        list('hours', 'Opening times', {
          itemNoun: 'entry',
          titleKey: 'title',
          min: 1,
          blank: { title: 'New entry', description: '' },
          fields: [text('title', 'Title'), textarea('description', 'Details', { rows: 4 })],
        }),
      ],
    },
    {
      id: 'programs',
      label: 'Programs section',
      description: 'Only the wording here — the cards come from each program page.',
      fields: [
        text('programsEyebrow', 'Small label above the heading'),
        text('programsTitle', 'Heading'),
        textarea('programsLead', 'Body text', { rows: 3 }),
        text('programsButtonLabel', 'Button label'),
      ],
    },
    {
      id: 'promise',
      label: 'Our promise',
      fields: [
        text('promiseEyebrow', 'Small label above the heading'),
        text('promiseTitle', 'Heading'),
        list('promises', 'Promise cards', {
          itemNoun: 'promise',
          titleKey: 'title',
          min: 1,
          max: 4,
          help: 'Four reads best — they sit in a single row on a wide screen.',
          blank: { title: 'New promise', description: '' },
          fields: [text('title', 'Title'), textarea('description', 'Description', { rows: 3 })],
        }),
      ],
    },
    {
      id: 'cta',
      label: 'Closing call to action',
      description: 'The phone buttons and email address come from the site contact details.',
      fields: [
        text('ctaTitle', 'Heading'),
        textarea('ctaLead', 'Body text', { rows: 3 }),
        text('ctaEmailPrefix', 'Words before the email address'),
        text('ctaDonatePrompt', 'Words above the donate button'),
        text('ctaDonateLabel', 'Donate button label'),
        text('ctaDonateHref', 'Donate button link'),
      ],
    },
  ],
};
