import { icon, image, list, strings, text, textarea, media } from '../fields';
import type { ContentItem, MediaValue, PageSchema } from '../types';
import type { Program } from '@/types';
import { PROGRAMS } from '@/lib/constants';

export type ProgramContent = {
  name: string;
  shortDescription: string;
  description: string[];
  icon: string;
  image: MediaValue;
  whoWeServe: string;
  howItWorks: ContentItem[];
  impact: ContentItem[];
};

/**
 * Builds the editor for one program from the entry in `PROGRAMS`.
 *
 * Each program gets its own screen in the admin rather than being a row inside a
 * six-item list: the steps and impact figures are lists of their own, and nesting
 * those two levels deep produces a form nobody can use.
 *
 * `slug`, `fund` and `relatedSlugs` are deliberately not editable — they are
 * routing and navigation, not copy, and a typo in any of them breaks a URL or a
 * donation fund rather than just reading badly.
 */
export function makeProgramSchema(program: Program): PageSchema<ProgramContent> {
  const defaults: ProgramContent = {
    name: program.name,
    shortDescription: program.shortDescription,
    // The constant packs paragraphs into one string with blank lines between.
    description: program.description.split('\n\n').map((p) => p.trim()).filter(Boolean),
    icon: program.icon,
    image: media(program.image, `${program.name} — Healthy Steps Foundation, Wakiso, Uganda`),
    whoWeServe: program.whoWeServe,
    howItWorks: program.howItWorks.map((step) => ({
      title: step.title,
      description: step.description,
    })),
    impact: program.impact.map((stat) => ({ value: stat.value, label: stat.label })),
  };

  return {
    slug: `program-${program.slug}`,
    label: program.name,
    description: `The ${program.name} program page.`,
    group: 'Programs',
    path: `/programs/${program.slug}`,
    // The name and summary also appear on the homepage, the programs index, Get
    // Help, Stories, and in the header and footer of every page.
    extraPaths: ['/', '/programs', '/get-help', '/stories'],
    revalidateLayout: true,
    defaults,
    groups: [
      {
        id: 'overview',
        label: 'Name and summary',
        description: 'Used on this page, the programs list, the homepage and the menus.',
        fields: [
          text('name', 'Program name'),
          textarea('shortDescription', 'One-line summary', {
            rows: 3,
            help: 'Shown on the program cards and under the heading at the top of this page.',
          }),
          icon('icon', 'Icon'),
          image('image', 'Program photo'),
        ],
      },
      {
        id: 'about',
        label: 'About this program',
        fields: [
          strings('description', 'Full description', 'paragraph', {
            help: 'Each entry becomes its own paragraph.',
          }),
          textarea('whoWeServe', 'Who we serve', {
            rows: 5,
            help: 'The green box beside the description.',
          }),
        ],
      },
      {
        id: 'impact',
        label: 'Program impact',
        description: 'The row of large green figures.',
        fields: [
          list('impact', 'Figures', {
            itemNoun: 'figure',
            titleKey: 'value',
            min: 1,
            max: 4,
            help: 'Four reads best — they sit in a single row.',
            blank: { value: '', label: '' },
            fields: [
              text('value', 'Large text', { placeholder: 'e.g. Weekly' }),
              text('label', 'Description underneath'),
            ],
          }),
        ],
      },
      {
        id: 'how',
        label: 'How it works',
        description: 'The numbered steps. Numbering follows the order here automatically.',
        fields: [
          list('howItWorks', 'Steps', {
            itemNoun: 'step',
            titleKey: 'title',
            min: 1,
            blank: { title: 'New step', description: '' },
            fields: [
              text('title', 'Step title'),
              textarea('description', 'Step description', { rows: 4 }),
            ],
          }),
        ],
      },
    ],
  };
}

/** One editable schema per program, in the order they appear across the site. */
export const PROGRAM_SCHEMAS = PROGRAMS.map(makeProgramSchema);
