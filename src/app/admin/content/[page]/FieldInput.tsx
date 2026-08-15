'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, ImageIcon, Plus, RotateCcw, Trash2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { fieldClasses } from '@/components/ui/Input';
import { CONTENT_ICON_OPTIONS, ContentIcon } from '@/lib/icons';
import type {
  ContentItem,
  ContentValue,
  Field,
  LeafField,
  LeafValue,
  MediaValue,
} from '@/lib/cms/types';
import MediaPicker from './MediaPicker';

function asString(value: LeafValue | undefined): string {
  return typeof value === 'string' ? value : '';
}

function asStrings(value: LeafValue | undefined): string[] {
  return Array.isArray(value) ? value : [];
}

function asMedia(value: LeafValue | undefined): MediaValue {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
    ? value
    : { src: '', alt: '' };
}

// ─── Media ────────────────────────────────────────────────────────────────────

function MediaInput({
  field,
  value,
  onChange,
}: {
  field: LeafField;
  value: MediaValue;
  onChange: (next: MediaValue) => void;
}): React.JSX.Element {
  const [pickerOpen, setPickerOpen] = useState(false);
  const isVideo = field.type === 'video';

  return (
    <div className="space-y-3">
      <div className="flex items-start gap-4 rounded-xl border border-warm-gray-200 bg-white p-3">
        <div className="h-20 w-28 shrink-0 overflow-hidden rounded-lg bg-warm-white">
          {value.src && !isVideo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={value.src} alt="" className="h-full w-full object-cover" />
          ) : (
            <span className="flex h-full w-full items-center justify-center text-warm-gray-300">
              <ImageIcon size={20} />
            </span>
          )}
        </div>

        <div className="min-w-0 flex-1">
          <p className="truncate text-sm text-warm-gray-600">
            {value.src ? decodeURIComponent(value.src.split('/').pop() ?? '') : 'No file chosen'}
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={(): void => setPickerOpen(true)}
              className="rounded-full border border-warm-gray-200 px-3 py-1.5 text-xs font-semibold text-warm-gray-700 transition-colors hover:border-forest-green-400 hover:text-forest-green-700"
            >
              {value.src ? 'Change' : 'Choose'} {isVideo ? 'video' : 'photo'}
            </button>
          </div>
        </div>
      </div>

      {/* Video has no alt text — the poster image carries the description. */}
      {!isVideo && (
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-warm-gray-500">
            Photo description (for screen readers and search engines)
          </span>
          <input
            type="text"
            value={value.alt}
            onChange={(e): void => onChange({ ...value, alt: e.target.value })}
            className={cn(fieldClasses, 'py-2.5 text-sm')}
            placeholder="Describe what is happening in the photo"
          />
        </label>
      )}

      <MediaPicker
        open={pickerOpen}
        kind={isVideo ? 'video' : 'image'}
        onClose={(): void => setPickerOpen(false)}
        onSelect={(src): void => onChange({ ...value, src })}
      />
    </div>
  );
}

// ─── Repeatable plain strings ─────────────────────────────────────────────────

function StringsInput({
  field,
  value,
  onChange,
}: {
  field: Extract<LeafField, { type: 'strings' }>;
  value: string[];
  onChange: (next: string[]) => void;
}): React.JSX.Element {
  function update(index: number, next: string): void {
    onChange(value.map((entry, i) => (i === index ? next : entry)));
  }
  function move(index: number, delta: number): void {
    const target = index + delta;
    if (target < 0 || target >= value.length) return;
    const next = [...value];
    const [row] = next.splice(index, 1);
    next.splice(target, 0, row ?? '');
    onChange(next);
  }

  return (
    <div className="space-y-2">
      {value.map((entry, index) => (
        <div key={index} className="flex items-start gap-2">
          {field.input === 'text' ? (
            <input
              type="text"
              value={entry}
              onChange={(e): void => update(index, e.target.value)}
              className={cn(fieldClasses, 'py-2.5 text-sm')}
            />
          ) : (
            <textarea
              value={entry}
              rows={3}
              onChange={(e): void => update(index, e.target.value)}
              className={cn(fieldClasses, 'text-sm')}
            />
          )}
          <div className="flex shrink-0 flex-col gap-1 pt-1">
            <RowButton label="Move up" onClick={(): void => move(index, -1)} disabled={index === 0}>
              <ChevronUp size={14} />
            </RowButton>
            <RowButton
              label="Move down"
              onClick={(): void => move(index, 1)}
              disabled={index === value.length - 1}
            >
              <ChevronDown size={14} />
            </RowButton>
            <RowButton
              label={`Delete ${field.itemNoun}`}
              danger
              onClick={(): void => onChange(value.filter((_, i) => i !== index))}
            >
              <Trash2 size={14} />
            </RowButton>
          </div>
        </div>
      ))}
      <AddButton label={`Add ${field.itemNoun}`} onClick={(): void => onChange([...value, ''])} />
    </div>
  );
}

// ─── Leaf dispatch ────────────────────────────────────────────────────────────

function LeafInput({
  field,
  value,
  onChange,
}: {
  field: LeafField;
  value: LeafValue | undefined;
  onChange: (next: LeafValue) => void;
}): React.JSX.Element {
  switch (field.type) {
    case 'text':
      return (
        <input
          type="text"
          value={asString(value)}
          placeholder={field.placeholder}
          onChange={(e): void => onChange(e.target.value)}
          className={cn(fieldClasses, 'py-2.5')}
        />
      );

    case 'textarea':
      return (
        <textarea
          value={asString(value)}
          rows={field.rows ?? 4}
          onChange={(e): void => onChange(e.target.value)}
          className={fieldClasses}
        />
      );

    case 'select':
      return (
        <select
          value={asString(value)}
          onChange={(e): void => onChange(e.target.value)}
          className={cn(fieldClasses, 'py-2.5')}
        >
          {field.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      );

    case 'icon':
      return (
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-forest-green-50 text-forest-green-600">
            <ContentIcon name={asString(value)} size={18} />
          </span>
          <select
            value={asString(value)}
            onChange={(e): void => onChange(e.target.value)}
            className={cn(fieldClasses, 'py-2.5')}
          >
            {CONTENT_ICON_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      );

    case 'strings':
      return <StringsInput field={field} value={asStrings(value)} onChange={onChange} />;

    case 'image':
    case 'video':
      return <MediaInput field={field} value={asMedia(value)} onChange={onChange} />;
  }
}

// ─── Repeatable groups ────────────────────────────────────────────────────────

function ListInput({
  field,
  value,
  onChange,
}: {
  field: Extract<Field, { type: 'list' }>;
  value: ContentItem[];
  onChange: (next: ContentItem[]) => void;
}): React.JSX.Element {
  function updateRow(index: number, key: string, next: LeafValue): void {
    onChange(value.map((row, i) => (i === index ? { ...row, [key]: next } : row)));
  }
  function move(index: number, delta: number): void {
    const target = index + delta;
    if (target < 0 || target >= value.length) return;
    const next = [...value];
    const [row] = next.splice(index, 1);
    if (row) next.splice(target, 0, row);
    onChange(next);
  }

  const atMin = value.length <= (field.min ?? 0);
  const atMax = field.max !== undefined && value.length >= field.max;

  return (
    <div className="space-y-3">
      {value.map((row, index) => {
        const title = asString(row[field.titleKey]) || `${field.itemNoun} ${index + 1}`;
        return (
          <div key={index} className="rounded-2xl border border-warm-gray-200 bg-warm-white">
            <div className="flex items-center gap-2 border-b border-warm-gray-200 px-4 py-3">
              <span className="min-w-0 flex-1 truncate text-sm font-semibold text-warm-gray-800">
                {title}
              </span>
              <RowButton label="Move up" onClick={(): void => move(index, -1)} disabled={index === 0}>
                <ChevronUp size={14} />
              </RowButton>
              <RowButton
                label="Move down"
                onClick={(): void => move(index, 1)}
                disabled={index === value.length - 1}
              >
                <ChevronDown size={14} />
              </RowButton>
              <RowButton
                label={`Delete ${field.itemNoun}`}
                danger
                disabled={atMin}
                onClick={(): void => onChange(value.filter((_, i) => i !== index))}
              >
                <Trash2 size={14} />
              </RowButton>
            </div>

            <div className="space-y-4 p-4">
              {field.fields.map((subField) => (
                <div key={subField.key}>
                  <span className="mb-1.5 block text-xs font-semibold text-warm-gray-600">
                    {subField.label}
                  </span>
                  <LeafInput
                    field={subField}
                    value={row[subField.key]}
                    onChange={(next): void => updateRow(index, subField.key, next)}
                  />
                  {subField.help && (
                    <p className="mt-1.5 text-xs text-warm-gray-400">{subField.help}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      })}

      {!atMax && (
        <AddButton
          label={`Add ${field.itemNoun}`}
          onClick={(): void => onChange([...value, { ...field.blank }])}
        />
      )}
    </div>
  );
}

// ─── Shared bits ──────────────────────────────────────────────────────────────

function RowButton({
  label,
  onClick,
  disabled,
  danger,
  children,
}: {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  danger?: boolean;
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      title={label}
      className={cn(
        'rounded-lg border border-warm-gray-200 bg-white p-1.5 text-warm-gray-500 transition-colors',
        'disabled:cursor-not-allowed disabled:opacity-35',
        danger
          ? 'hover:border-error hover:text-error'
          : 'hover:border-forest-green-400 hover:text-forest-green-700',
      )}
    >
      {children}
    </button>
  );
}

function AddButton({ label, onClick }: { label: string; onClick: () => void }): React.JSX.Element {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center gap-2 rounded-full border border-dashed border-warm-gray-300 px-4 py-2 text-sm font-semibold text-warm-gray-600 transition-colors hover:border-forest-green-400 hover:text-forest-green-700"
    >
      <Plus size={15} />
      {label}
    </button>
  );
}

// ─── Top-level field ──────────────────────────────────────────────────────────

interface FieldInputProps {
  field: Field;
  value: ContentValue;
  onChange: (next: ContentValue) => void;
  /** True when the value still matches the copy that ships in code. */
  isOriginal: boolean;
  onReset: () => void;
}

export default function FieldInput({
  field,
  value,
  onChange,
  isOriginal,
  onReset,
}: FieldInputProps): React.JSX.Element {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between gap-3">
        <span className="text-sm font-medium text-warm-gray-700">{field.label}</span>
        {!isOriginal && (
          <button
            type="button"
            onClick={onReset}
            className="inline-flex shrink-0 items-center gap-1.5 text-xs font-medium text-warm-gray-400 transition-colors hover:text-forest-green-600"
          >
            <RotateCcw size={12} />
            Reset to original
          </button>
        )}
      </div>

      {field.type === 'list' ? (
        <ListInput
          field={field}
          value={Array.isArray(value) && typeof value[0] !== 'string' ? (value as ContentItem[]) : []}
          onChange={onChange}
        />
      ) : (
        <LeafInput field={field} value={value as LeafValue} onChange={onChange} />
      )}

      {field.help && <p className="mt-1.5 text-xs text-warm-gray-400">{field.help}</p>}
    </div>
  );
}
