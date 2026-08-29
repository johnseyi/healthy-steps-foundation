import { image, list, select, strings, text, textarea, video, media } from '../fields';
import type { ContentItem, MediaValue, PageSchema } from '../types';

export type HomeContent = {
  heroHeadline: string;
  heroLead: string;
  heroDonateLabel: string;
  heroDonateHref: string;
  heroTrustPoints: string[];
  heroImage: MediaValue;

  statsEyebrow: string;
  statsTitle: string;
  stats: ContentItem[];
  statsImage: MediaValue;

  videoEyebrow: string;
  videoTitle: string;
  videoLead: string;
  videoFile: MediaValue;
  videoPoster: MediaValue;
  videoCaptionTitle: string;
  videoCaptionMeta: string;

  programsEyebrow: string;
  programsTitle: string;
  programsLead: string;
  programsLinkLabel: string;

  galleryEyebrow: string;
  galleryTitle: string;
  galleryLead: string;
  galleryPhotos: ContentItem[];

  testimonialsEyebrow: string;
  testimonialsTitle: string;
  testimonialsLead: string;
  testimonialsLinkLabel: string;

  breakEyebrow: string;
  breakTitle: string;
  breakLead: string;
  breakImage: MediaValue;

  ctaEyebrow: string;
  ctaTitle: string;
  ctaLead: string;
  ctaDonateLabel: string;
  ctaDonateHref: string;
  ctaStoryLabel: string;
  ctaStoryHref: string;
};

const defaults: HomeContent = {
  heroHeadline: 'Every Family Deserves to Be Whole',
  heroLead:
    'A faith-based organization partnering with families in Uganda to improve mental health wellness, providing holistic support across food, clothing, education, medical care, and vocational skills on a temporary basis.',
  heroDonateLabel: 'Donate Now',
  heroDonateHref: '/donate',
  heroTrustPoints: [
    'Faith-grounded',
    'Community-led',
    'Holistic family support',
    'Temporary emergency support',
  ],
  heroImage: media(
    '/images/field/food-relief-handoff.jpg',
    'A Healthy Steps Foundation volunteer handing a food relief bag to a community member in Wakiso, Uganda',
  ),

  statsEyebrow: 'Our Impact',
  statsTitle: 'Real numbers.\nReal families.',
  stats: [
    { value: '1200', suffix: '+', label: 'Families Served' },
    { value: '6', suffix: '', label: 'Active Programs' },
    { value: '500', suffix: '+', label: 'Children in School' },
    { value: '3', suffix: '+', label: 'Years of Service' },
  ],
  statsImage: media(
    '/images/field/beneficiaries-women.jpg',
    'Three women smiling with their Healthy Steps Foundation food packages in Wakiso, Uganda',
  ),

  videoEyebrow: 'Watch the Outreach',
  videoTitle: 'See Healthy Steps in the Field',
  videoLead:
    'Filmed during our June outreach in Wakiso — food packages, medical care, and mental wellness support reaching families, one healthy step at a time.',
  videoFile: media('/outreach-june.mp4', ''),
  videoPoster: media(
    '/images/field/video-poster.jpg',
    'A young woman smiling as she carries a Healthy Steps Foundation food package during the June outreach in Wakiso, Uganda',
  ),
  videoCaptionTitle: 'June Community Outreach',
  videoCaptionMeta: 'Wakiso, Uganda · 1:44',

  programsEyebrow: 'What We Do',
  programsTitle: 'Six Holistic Programs',
  programsLead:
    'Each program addresses a different dimension of family wellness — because mental health cannot be separated from food, clothing, education, medical care, or economic stability.',
  programsLinkLabel: 'View all programs',

  galleryEyebrow: 'From the Field',
  galleryTitle: 'Moments of Dignity & Hope',
  galleryLead:
    'Real photographs from our outreach in Wakiso — the families we walk with, and the team that shows up for them.',
  galleryPhotos: [
    {
      photo: media(
        '/images/field/connection.jpg',
        'A Healthy Steps volunteer speaking warmly with a woman receiving a food package',
      ),
      size: 'large',
    },
    {
      photo: media(
        '/images/field/beneficiaries-women.jpg',
        'Three women smiling with their Healthy Steps food packages in Wakiso',
      ),
      size: 'wide',
    },
    {
      photo: media(
        '/images/field/team-joy.jpg',
        'Two Healthy Steps Foundation team members laughing in branded shirts',
      ),
      size: 'standard',
    },
    {
      photo: media(
        '/images/field/food-packages.jpg',
        'Food packages branded with the Healthy Steps Foundation logo',
      ),
      size: 'standard',
    },
    {
      photo: media(
        '/images/field/counseling-circle.jpg',
        'A mental wellness counselling circle during a Healthy Steps outreach',
      ),
      size: 'wide',
    },
    {
      photo: media(
        '/images/field/distribution-handover.jpg',
        'A Healthy Steps team member handing a food package to a community member',
      ),
      size: 'standard',
    },
    {
      photo: media(
        '/images/field/medical-intake.jpg',
        'Healthy Steps staff running a medical intake table with hand sanitiser and gloves',
      ),
      size: 'standard',
    },
  ],

  testimonialsEyebrow: 'Stories of Hope',
  testimonialsTitle: 'Real Families. Real Change.',
  testimonialsLead:
    'Voices from the communities we serve — partners on the ground and the families they reached.',
  testimonialsLinkLabel: 'Read more stories',

  breakEyebrow: 'Our Community',
  breakTitle: 'Walking alongside families through their most difficult seasons',
  breakLead:
    'Since 2022, Healthy Steps Foundation has been embedded in the community of Ndejje, Wakiso — where our staff live, and the families we serve are our neighbours.',
  breakImage: media(
    '/images/field/counseling-circle.jpg',
    'Families gathered in a mental wellness counselling circle at a Healthy Steps outreach in Wakiso, Uganda',
  ),

  ctaEyebrow: 'Partner With Us',
  ctaTitle: 'Help a Family Through Their Most Difficult Season',
  ctaLead:
    'Your donation partners with a family in Wakiso facing a temporary crisis — providing the mental health support, food, education, or medical care they need to get back on their feet with dignity.',
  ctaDonateLabel: 'Donate Today',
  ctaDonateHref: '/donate',
  ctaStoryLabel: 'Our Story',
  ctaStoryHref: '/about',
};

export const homeSchema: PageSchema<HomeContent> = {
  slug: 'home',
  label: 'Homepage',
  group: 'Pages',
  description: 'Hero, impact numbers, video, gallery and the closing call to action.',
  path: '/',
  defaults,
  groups: [
    {
      id: 'hero',
      label: 'Hero',
      description: 'The full-screen photo and headline at the top.',
      fields: [
        text('heroHeadline', 'Headline'),
        textarea('heroLead', 'Introduction paragraph', { rows: 5 }),
        text('heroDonateLabel', 'Main button label'),
        text('heroDonateHref', 'Main button link'),
        strings('heroTrustPoints', 'Small tags', 'tag', { input: 'text' }),
        image('heroImage', 'Background photo'),
      ],
    },
    {
      id: 'stats',
      label: 'Impact numbers',
      fields: [
        text('statsEyebrow', 'Heading'),
        textarea('statsTitle', 'Text under the heading', {
          rows: 2,
          help: 'Shown below the heading, smaller and not bold. Press Enter to break it onto a second line.',
        }),
        list('stats', 'The numbers', {
          itemNoun: 'number',
          titleKey: 'label',
          min: 1,
          max: 4,
          help: 'Four reads best — they sit in a 2×2 grid. Plain digits count up on scroll; anything else is shown as written.',
          blank: { value: '', suffix: '', label: '' },
          fields: [
            text('value', 'Number', { placeholder: 'e.g. 1200' }),
            text('suffix', 'After the number', { placeholder: 'e.g. +' }),
            text('label', 'What it counts', { placeholder: 'e.g. Families Served' }),
          ],
        }),
        image('statsImage', 'Photo'),
      ],
    },
    {
      id: 'video',
      label: 'Video',
      fields: [
        text('videoEyebrow', 'Heading'),
        text('videoTitle', 'Text under the heading', {
          help: 'Shown below the heading, smaller and not bold.',
        }),
        textarea('videoLead', 'Body text', { rows: 4 }),
        video('videoFile', 'Video file'),
        image('videoPoster', 'Still image shown before play'),
        text('videoCaptionTitle', 'Caption on the video'),
        text('videoCaptionMeta', 'Caption small print', { placeholder: 'e.g. Wakiso, Uganda · 1:44' }),
      ],
    },
    {
      id: 'programs',
      label: 'Programs section',
      description: 'Only the wording here — the six program cards are edited on the Programs page.',
      fields: [
        text('programsEyebrow', 'Small label above the heading'),
        text('programsTitle', 'Heading'),
        textarea('programsLead', 'Body text', { rows: 4 }),
        text('programsLinkLabel', 'Link label under the cards'),
      ],
    },
    {
      id: 'gallery',
      label: 'Photo gallery',
      fields: [
        text('galleryEyebrow', 'Small label above the heading'),
        text('galleryTitle', 'Heading'),
        textarea('galleryLead', 'Body text', { rows: 3 }),
        list('galleryPhotos', 'Photos', {
          itemNoun: 'photo',
          titleKey: 'size',
          min: 1,
          help: 'Photos fill a mosaic in the order listed. One large and two wide among the rest keeps the shape balanced.',
          blank: { photo: { src: '', alt: '' }, size: 'standard' },
          fields: [
            image('photo', 'Photo'),
            select('size', 'Tile size', [
              { value: 'large', label: 'Large (fills four tiles)' },
              { value: 'wide', label: 'Wide (fills two tiles)' },
              { value: 'standard', label: 'Standard (one tile)' },
            ]),
          ],
        }),
      ],
    },
    {
      id: 'testimonials',
      label: 'Testimonials section',
      description: 'Only the wording here — the quotes themselves are shared with the Stories page.',
      fields: [
        text('testimonialsEyebrow', 'Small label above the heading'),
        text('testimonialsTitle', 'Heading'),
        textarea('testimonialsLead', 'Body text', { rows: 3 }),
        text('testimonialsLinkLabel', 'Link label under the quotes'),
      ],
    },
    {
      id: 'break',
      label: 'Full-width photo band',
      description: 'The dark photo section between the testimonials and the closing call to action.',
      fields: [
        text('breakEyebrow', 'Small label above the heading'),
        textarea('breakTitle', 'Heading', { rows: 2 }),
        textarea('breakLead', 'Body text', { rows: 3 }),
        image('breakImage', 'Background photo'),
      ],
    },
    {
      id: 'cta',
      label: 'Closing call to action',
      fields: [
        text('ctaEyebrow', 'Small label above the heading'),
        textarea('ctaTitle', 'Heading', { rows: 2 }),
        textarea('ctaLead', 'Body text', { rows: 4 }),
        text('ctaDonateLabel', 'Main button label'),
        text('ctaDonateHref', 'Main button link'),
        text('ctaStoryLabel', 'Second button label'),
        text('ctaStoryHref', 'Second button link'),
      ],
    },
  ],
};
