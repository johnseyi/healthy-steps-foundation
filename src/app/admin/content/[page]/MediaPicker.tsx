'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { Search, Upload, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { fieldClasses } from '@/components/ui/Input';

export interface MediaAsset {
  src: string;
  label: string;
  kind: 'image' | 'video';
  source: 'library' | 'uploaded';
}

interface MediaPickerProps {
  open: boolean;
  /** Restricts both the grid and the upload input to photos or video. */
  kind: 'image' | 'video';
  onClose: () => void;
  onSelect: (src: string) => void;
}

// Shared across every picker on the page — the list is identical for all of
// them, and re-fetching 60+ assets each time a picker opens is wasted work.
let cachedAssets: MediaAsset[] | null = null;

export default function MediaPicker({
  open,
  kind,
  onClose,
  onSelect,
}: MediaPickerProps): React.JSX.Element | null {
  const [assets, setAssets] = useState<MediaAsset[]>(cachedAssets ?? []);
  const [loading, setLoading] = useState(cachedAssets === null);
  const [query, setQuery] = useState('');
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const load = useCallback(async (force = false): Promise<void> => {
    if (cachedAssets && !force) {
      setAssets(cachedAssets);
      setLoading(false);
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('/api/admin/media');
      const json: unknown = await res.json();
      const list = (json as { assets?: MediaAsset[] }).assets ?? [];
      cachedAssets = list;
      setAssets(list);
    } catch {
      setError('Could not load the photo library.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (open) void load();
  }, [open, load]);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent): void {
      if (event.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', onKeyDown);
    return (): void => document.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  async function handleUpload(event: React.ChangeEvent<HTMLInputElement>): Promise<void> {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setError(null);
    try {
      const form = new FormData();
      form.append('file', file);
      const res = await fetch('/api/admin/media', { method: 'POST', body: form });
      const json = (await res.json()) as { success: boolean; error?: string; asset?: MediaAsset };

      if (!json.success || !json.asset) {
        setError(json.error ?? 'The upload failed.');
        return;
      }
      cachedAssets = [json.asset, ...(cachedAssets ?? [])];
      setAssets(cachedAssets);
      onSelect(json.asset.src);
      onClose();
    } catch {
      setError('The upload failed. Please try again.');
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  }

  if (!open) return null;

  const visible = assets
    .filter((asset) => asset.kind === kind)
    .filter((asset) => asset.label.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-warm-gray-900/50 p-0 backdrop-blur-sm sm:items-center sm:p-6">
      <div
        role="dialog"
        aria-modal="true"
        aria-label={kind === 'video' ? 'Choose a video' : 'Choose a photo'}
        className="flex h-[85vh] w-full max-w-3xl flex-col rounded-t-3xl bg-white shadow-float sm:h-[80vh] sm:rounded-3xl"
      >
        <div className="flex items-center justify-between border-b border-warm-gray-100 p-5">
          <h2 className="font-serif text-lg font-bold text-warm-gray-900">
            {kind === 'video' ? 'Choose a video' : 'Choose a photo'}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="rounded-full p-2 text-warm-gray-400 transition-colors hover:bg-warm-white hover:text-warm-gray-900"
          >
            <X size={18} />
          </button>
        </div>

        <div className="flex flex-col gap-3 border-b border-warm-gray-100 p-5 sm:flex-row">
          <div className="relative flex-1">
            <Search
              size={16}
              className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-warm-gray-400"
            />
            <input
              type="search"
              value={query}
              onChange={(e): void => setQuery(e.target.value)}
              placeholder="Search by name"
              className={cn(fieldClasses, 'py-2.5 pl-10')}
            />
          </div>
          <label
            className={cn(
              'inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-forest-green-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-forest-green-700',
              uploading && 'pointer-events-none opacity-60',
            )}
          >
            <Upload size={16} />
            {uploading ? 'Uploading…' : 'Upload new'}
            <input
              ref={fileInputRef}
              type="file"
              accept={kind === 'video' ? 'video/mp4,video/webm' : 'image/*'}
              onChange={handleUpload}
              className="sr-only"
            />
          </label>
        </div>

        {error && (
          <p role="alert" className="border-b border-warm-gray-100 px-5 py-3 text-sm text-error">
            {error}
          </p>
        )}

        <div className="flex-1 overflow-y-auto p-5">
          {loading ? (
            <p className="text-sm text-warm-gray-500">Loading…</p>
          ) : visible.length === 0 ? (
            <p className="text-sm text-warm-gray-500">
              Nothing here yet. Use &ldquo;Upload new&rdquo; to add {kind === 'video' ? 'a video' : 'a photo'}.
            </p>
          ) : (
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {visible.map((asset) => (
                <li key={asset.src}>
                  <button
                    type="button"
                    onClick={(): void => {
                      onSelect(asset.src);
                      onClose();
                    }}
                    className="group w-full overflow-hidden rounded-xl border border-warm-gray-200 text-left transition-all hover:border-forest-green-400 hover:shadow-lift"
                  >
                    <span className="block aspect-[4/3] overflow-hidden bg-warm-white">
                      {asset.kind === 'image' ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={asset.src}
                          alt=""
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <span className="flex h-full w-full items-center justify-center text-xs text-warm-gray-400">
                          Video
                        </span>
                      )}
                    </span>
                    <span className="block truncate px-3 py-2 text-xs text-warm-gray-600">
                      {asset.label}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
