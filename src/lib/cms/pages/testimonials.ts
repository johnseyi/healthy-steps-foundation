import { list, text, textarea } from '../fields';
import type { ContentItem, PageSchema } from '../types';
import { TESTIMONIALS } from '@/lib/constants';

export type TestimonialsContent = {
  items: ContentItem[];
};

const defaults: TestimonialsContent = {
  items: TESTIMONIALS.map((t) => ({
    name: t.name,
    location: t.location,
    quote: t.quote,
    program: t.program ?? '',
  })),
};

export const testimonialsSchema: PageSchema<TestimonialsContent> = {
  slug: 'testimonials',
  label: 'Testimonials',
  description: 'The quotes shown on the homepage and the Stories page.',
  group: 'Shared across pages',
  path: '/stories',
  extraPaths: ['/'],
  defaults,
  groups: [
    {
      id: 'items',
      label: 'Quotes',
      description:
        'Shown on the homepage and on Stories. Both grids adapt to however many there are.',
      fields: [
        list('items', 'Testimonials', {
          itemNoun: 'testimonial',
          titleKey: 'name',
          min: 1,
          help: 'Only publish words the person actually said, with their permission.',
          blank: { name: 'New testimonial', location: '', quote: '', program: '' },
          fields: [
            text('name', "Person's name"),
            text('location', 'Where they are from', {
              placeholder: 'e.g. Makerere Kikoni, Kampala',
            }),
            textarea('quote', 'What they said', { rows: 7 }),
            text('program', 'Program tag', {
              help: 'The small green label on the card. Leave empty to hide it.',
            }),
          ],
        }),
      ],
    },
  ],
};
