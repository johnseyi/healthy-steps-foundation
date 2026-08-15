import 'server-only';
import { getSupabaseAdmin } from '@/lib/supabase';
import { PUBLIC_MEDIA, type ManifestAsset } from './media-manifest';

export const MEDIA_BUCKET = 'site-media';

const IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/avif', 'image/gif'];
const VIDEO_TYPES = ['video/mp4', 'video/webm', 'video/quicktime'];

const MAX_IMAGE_BYTES = 8 * 1024 * 1024;
const MAX_VIDEO_BYTES = 60 * 1024 * 1024;

export interface MediaAsset extends ManifestAsset {
  /** `library` ships with the site; `uploaded` was added through the editor. */
  source: 'library' | 'uploaded';
}

function isConfigured(): boolean {
  return Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY);
}

function publicUrl(path: string): string {
  return getSupabaseAdmin().storage.from(MEDIA_BUCKET).getPublicUrl(path).data.publicUrl;
}

/** Photos and video an editor has uploaded, newest first. */
export async function listUploadedMedia(): Promise<MediaAsset[]> {
  if (!isConfigured()) return [];

  try {
    const { data, error } = await getSupabaseAdmin()
      .storage.from(MEDIA_BUCKET)
      .list('', { limit: 500, sortBy: { column: 'created_at', order: 'desc' } });

    if (error || !data) return [];

    return data
      .filter((file) => file.name !== '.emptyFolderPlaceholder')
      .map((file) => {
        const mime = file.metadata?.mimetype;
        return {
          src: publicUrl(file.name),
          // Strip the timestamp this module prefixes on upload, for a readable label.
          label: file.name.replace(/^\d+-/, '').replace(/\.[^.]+$/, '').replace(/[-_]+/g, ' '),
          kind: typeof mime === 'string' && mime.startsWith('video/') ? 'video' : 'image',
          source: 'uploaded' as const,
        };
      });
  } catch (error) {
    console.warn('[cms] could not list uploaded media', error);
    return [];
  }
}

/** Everything the picker can offer: uploads first, then the images that ship with the site. */
export async function listMedia(): Promise<MediaAsset[]> {
  const uploaded = await listUploadedMedia();
  const library: MediaAsset[] = PUBLIC_MEDIA.map((asset) => ({ ...asset, source: 'library' }));
  return [...uploaded, ...library];
}

export type UploadResult = { ok: true; asset: MediaAsset } | { ok: false; error: string };

function safeName(name: string): string {
  const dot = name.lastIndexOf('.');
  const base = dot > 0 ? name.slice(0, dot) : name;
  const ext = dot > 0 ? name.slice(dot).toLowerCase() : '';
  const slug = base
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60);
  return `${Date.now()}-${slug || 'upload'}${ext}`;
}

export async function uploadMedia(file: File): Promise<UploadResult> {
  if (!isConfigured()) {
    return { ok: false, error: 'The media library is not connected yet.' };
  }

  const isImage = IMAGE_TYPES.includes(file.type);
  const isVideo = VIDEO_TYPES.includes(file.type);

  if (!isImage && !isVideo) {
    return { ok: false, error: 'That file type is not supported. Use a JPG, PNG, WEBP or MP4.' };
  }

  const limit = isVideo ? MAX_VIDEO_BYTES : MAX_IMAGE_BYTES;
  if (file.size > limit) {
    return {
      ok: false,
      error: `That file is too large. The limit is ${Math.round(limit / 1024 / 1024)}MB.`,
    };
  }

  const path = safeName(file.name);

  try {
    const { error } = await getSupabaseAdmin()
      .storage.from(MEDIA_BUCKET)
      .upload(path, file, { contentType: file.type, upsert: false });

    if (error) return { ok: false, error: error.message };

    return {
      ok: true,
      asset: {
        src: publicUrl(path),
        label: file.name.replace(/\.[^.]+$/, ''),
        kind: isVideo ? 'video' : 'image',
        source: 'uploaded',
      },
    };
  } catch (error) {
    console.warn('[cms] upload failed', error);
    return { ok: false, error: 'The upload failed. Please try again.' };
  }
}
