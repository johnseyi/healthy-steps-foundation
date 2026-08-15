import type {
  ContentItem,
  IconField,
  ImageField,
  LeafField,
  ListField,
  MediaValue,
  SelectField,
  SelectOption,
  StringsField,
  TextAreaField,
  TextField,
  VideoField,
} from './types';

/**
 * Small constructors for field definitions.
 *
 * They exist for one reason: the generic `K` is inferred from the `key`
 * argument, so a typo in a field key is a compile error against the page's
 * content type rather than a silently blank section on the live site.
 */

interface Opts {
  help?: string;
}

export function text<K extends string>(
  key: K,
  label: string,
  opts: Opts & { placeholder?: string } = {},
): TextField<K> {
  return { type: 'text', key, label, ...opts };
}

export function textarea<K extends string>(
  key: K,
  label: string,
  opts: Opts & { rows?: number } = {},
): TextAreaField<K> {
  return { type: 'textarea', key, label, rows: 4, ...opts };
}

export function strings<K extends string>(
  key: K,
  label: string,
  itemNoun: string,
  opts: Opts & { input?: 'text' | 'textarea' } = {},
): StringsField<K> {
  return { type: 'strings', key, label, itemNoun, input: 'textarea', ...opts };
}

export function image<K extends string>(key: K, label: string, opts: Opts = {}): ImageField<K> {
  return { type: 'image', key, label, ...opts };
}

export function video<K extends string>(key: K, label: string, opts: Opts = {}): VideoField<K> {
  return { type: 'video', key, label, ...opts };
}

export function select<K extends string>(
  key: K,
  label: string,
  options: SelectOption[],
  opts: Opts = {},
): SelectField<K> {
  return { type: 'select', key, label, options, ...opts };
}

export function icon<K extends string>(key: K, label: string, opts: Opts = {}): IconField<K> {
  return { type: 'icon', key, label, ...opts };
}

export function list<K extends string>(
  key: K,
  label: string,
  config: Opts & {
    itemNoun: string;
    titleKey: string;
    fields: LeafField[];
    blank: ContentItem;
    min?: number;
    max?: number;
  },
): ListField<K> {
  return { type: 'list', key, label, ...config };
}

/** Shorthand for an image/video value in a defaults block. */
export function media(src: string, alt: string): MediaValue {
  return { src, alt };
}
