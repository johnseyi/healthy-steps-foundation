/**
 * Checks for the content merge — run with `npm run test:cms`.
 *
 * This is the one piece of CMS logic that can silently lose an editor's work: it
 * decides what a saved page renders, what gets written back to the database, and
 * what "Reset to original" compares against. It has no dependencies and runs on
 * plain node, so it needs no test framework.
 */
import { mergeContent, diffFromDefaults, valuesEqual } from './merge.ts';
import type { PageSchema } from './types.ts';

type C = {
  title: string;
  body: string;
  paras: string[];
  photo: { src: string; alt: string };
  pick: string;
  ico: string;
  rows: Record<string, string | string[] | { src: string; alt: string }>[];
};

const defaults: C = {
  title: 'Hello',
  body: 'Body text',
  paras: ['one', 'two'],
  photo: { src: '/a.jpg', alt: 'A' },
  pick: 'large',
  ico: 'Heart',
  rows: [
    { name: 'Row 1', pic: { src: '/r1.jpg', alt: 'R1' }, tags: ['x'] },
    { name: 'Row 2', pic: { src: '/r2.jpg', alt: 'R2' }, tags: [] },
  ],
};

const schema: PageSchema<C> = {
  slug: 't', label: 'T', description: '', path: '/', defaults,
  groups: [{ id: 'g', label: 'G', fields: [
    { type: 'text', key: 'title', label: 'Title' },
    { type: 'textarea', key: 'body', label: 'Body' },
    { type: 'strings', key: 'paras', label: 'Paras', itemNoun: 'p' },
    { type: 'image', key: 'photo', label: 'Photo' },
    { type: 'select', key: 'pick', label: 'Pick', options: [{ value: 'large', label: 'L' }] },
    { type: 'icon', key: 'ico', label: 'Icon' },
    { type: 'list', key: 'rows', label: 'Rows', itemNoun: 'row', titleKey: 'name',
      blank: { name: '', pic: { src: '', alt: '' }, tags: [] },
      fields: [
        { type: 'text', key: 'name', label: 'Name' },
        { type: 'image', key: 'pic', label: 'Pic' },
        { type: 'strings', key: 'tags', label: 'Tags', itemNoun: 't' },
      ] },
  ] }],
};

let failures = 0;
function check(name: string, pass: boolean, detail?: unknown): void {
  if (pass) { console.log(`  PASS  ${name}`); }
  else { failures++; console.log(`  FAIL  ${name}`, detail !== undefined ? JSON.stringify(detail) : ''); }
}

// 1. Empty overrides render exactly the defaults, and store nothing.
const m0 = mergeContent(schema, {});
check('empty overrides === defaults', JSON.stringify(m0) === JSON.stringify(defaults), m0);
check('empty overrides diff to {}', Object.keys(diffFromDefaults(schema, m0)).length === 0);

// 2. A single edit stores only that key.
const m1 = mergeContent(schema, { title: 'Changed' });
check('edit applied', m1.title === 'Changed');
check('untouched field still from code', m1.body === 'Body text');
const d1 = diffFromDefaults(schema, m1);
check('diff holds only the edited key', JSON.stringify(Object.keys(d1)) === '["title"]', d1);

// 3. Junk cannot break a render.
const m2 = mergeContent(schema, { title: 42, paras: 'nope', photo: null, rows: 'bad', ico: '   ', bogus: 1 });
check('wrong-typed text falls back', m2.title === 'Hello');
check('wrong-typed strings falls back', Array.isArray(m2.paras) && m2.paras.length === 2);
check('null image falls back', m2.photo.src === '/a.jpg');
check('wrong-typed list falls back', Array.isArray(m2.rows) && m2.rows.length === 2);
check('blank icon falls back', m2.ico === 'Heart');
check('unknown key dropped', !('bogus' in m2));

// 4. A cleared image src falls back; a cleared text field does not.
const m3 = mergeContent(schema, { photo: { src: '', alt: 'kept' }, body: '' });
check('cleared image src falls back', m3.photo.src === '/a.jpg');
check('cleared image keeps new alt', m3.photo.alt === 'kept');
check('cleared text stays cleared', m3.body === '');

// 5. Lists: add, delete, reorder, and nested sub-values round-trip.
const reordered = [defaults.rows[1], defaults.rows[0]];
const m4 = mergeContent(schema, { rows: reordered });
check('list reorder kept', m4.rows[0]?.name === 'Row 2' && m4.rows[1]?.name === 'Row 1');
check('list reorder is a real change', Object.keys(diffFromDefaults(schema, m4)).includes('rows'));

const m5 = mergeContent(schema, { rows: [{ name: 'Only', pic: { src: '/n.jpg', alt: 'N' }, tags: ['a', 'b'] }] });
check('list delete kept', m5.rows.length === 1);
check('nested image in list kept', JSON.stringify(m5.rows[0]?.pic) === '{"src":"/n.jpg","alt":"N"}');
check('nested strings in list kept', JSON.stringify(m5.rows[0]?.tags) === '["a","b"]');

const m6 = mergeContent(schema, { rows: [] });
check('emptying an unconstrained list is allowed', m6.rows.length === 0);

const m7 = mergeContent(schema, { rows: [{ name: 'Partial' }] });
check('missing sub-fields fill from blank', m7.rows[0]?.name === 'Partial' && JSON.stringify(m7.rows[0]?.pic) === '{"src":"","alt":""}');

// 6. Round-trip: merge(diff) must equal merge(full). This is the save path.
const edited = { ...m0, title: 'New', rows: reordered, paras: ['a'] };
const roundTrip = mergeContent(schema, diffFromDefaults(schema, edited));
check('merge(diff) === edited (save round-trip)', JSON.stringify(roundTrip) === JSON.stringify(edited), { roundTrip, edited });

// 7. valuesEqual is what drives "Reset to original" and the changed badges.
check('valuesEqual: identical media', valuesEqual({ src: 'a', alt: 'b' }, { src: 'a', alt: 'b' }));
check('valuesEqual: differing media', !valuesEqual({ src: 'a', alt: 'b' }, { src: 'a', alt: 'c' }));
check('valuesEqual: identical lists', valuesEqual(defaults.rows, JSON.parse(JSON.stringify(defaults.rows))));
check('valuesEqual: reordered lists differ', !valuesEqual(defaults.rows, reordered));
check('valuesEqual: string lists', valuesEqual(['a', 'b'], ['a', 'b']) && !valuesEqual(['a'], ['b']));

console.log(failures === 0 ? '\nALL PASS' : `\n${failures} FAILURE(S)`);
process.exit(failures === 0 ? 0 : 1);
