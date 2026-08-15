import { list, strings, text, textarea } from '../fields';
import type { ContentItem, PageSchema } from '../types';

export type GetHelpContent = {
  heroEyebrow: string;
  heroTitle: string;
  heroLead: string;
  heroCallLabel: string;
  heroMessageLabel: string;
  heroMessageHref: string;

  whoEyebrow: string;
  whoTitle: string;
  whoParagraphs: string[];
  eligibilityHeading: string;
  eligibility: string[];

  hoursEyebrow: string;
  hoursTitle: string;
  hours: ContentItem[];

  programsEyebrow: string;
  programsTitle: string;
  programsLead: string;
  programsButtonLabel: string;

  processEyebrow: string;
  processTitle: string;
  steps: ContentItem[];

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

  whoEyebrow: 'Who We Serve',
  whoTitle: 'Families in Temporary Crisis',
  whoParagraphs: [
    'We support families in Ndejje Division, Wakiso, who are facing short-term hardship that threatens their mental, physical, or economic wellbeing, on an emergency, temporary basis.',
    'We are not a long-term welfare programme. We help families through their crisis period, providing the specific support they need when they need it, so they can stabilise and move forward with dignity and self-sufficiency.',
    'Healthy Steps Foundation is not a medical organization and does not operate a medical treatment facility. Through committed partnerships with spiritual leaders, volunteer mental health professionals, and local clinics, we connect families to the right resources, respectfully and confidentially.',
  ],
  eligibilityHeading: 'We can help if your family is facing:',
  eligibility: [
    'Food insecurity or hunger in the household',
    'Inability to pay school fees for a child',
    'Lack of basic clothing for family members',
    'A medical emergency with no means to pay',
    'Economic hardship affecting mental health',
    'Need for vocational skills to earn income',
    'Need for mental wellness or spiritual resources',
  ],

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

  processEyebrow: 'The Process',
  processTitle: 'How It Works',
  steps: [
    {
      title: 'Reach Out',
      description:
        'Call us, email us, or visit us in Ndejje. No complicated application — we respond to need. Urgent cases receive same-day attention.',
    },
    {
      title: 'Compassionate Conversation',
      description:
        "We listen to understand your family's situation — private, judgment-free, and respectful of your dignity from the very first interaction.",
    },
    {
      title: 'Tailored Support',
      description:
        'We match your family with the right program or combination of programs for your specific need — food, clothing, school fees, medical care, and more.',
    },
    {
      title: 'Follow-Up & Stability',
      description:
        'We check in to ensure your situation is stabilising and connect you with other resources as needed, walking alongside you through your crisis period.',
    },
  ],

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
  description: 'Who we serve, opening hours, the process, and what families can expect.',
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
      id: 'who',
      label: 'Who we serve',
      fields: [
        text('whoEyebrow', 'Small label above the heading'),
        text('whoTitle', 'Heading'),
        strings('whoParagraphs', 'Body text', 'paragraph'),
        text('eligibilityHeading', 'Checklist heading'),
        strings('eligibility', 'Checklist items', 'item', { input: 'text' }),
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
      id: 'process',
      label: 'How it works',
      description: 'Numbering follows the order here automatically.',
      fields: [
        text('processEyebrow', 'Small label above the heading'),
        text('processTitle', 'Heading'),
        list('steps', 'Steps', {
          itemNoun: 'step',
          titleKey: 'title',
          min: 1,
          blank: { title: 'New step', description: '' },
          fields: [text('title', 'Step title'), textarea('description', 'Description', { rows: 4 })],
        }),
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
