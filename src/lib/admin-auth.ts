// Web Crypto based (crypto.subtle) so this works unchanged in both Next.js Edge
// middleware and Node route handlers — no Node-only `crypto` module, no JWT library.

export const ADMIN_SESSION_COOKIE = 'hsf_admin_session';
const SESSION_TTL_MS = 12 * 60 * 60 * 1000; // 12 hours

function toHex(buffer: ArrayBuffer): string {
  return Array.from(new Uint8Array(buffer))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) {
    diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return diff === 0;
}

async function sha256Hex(value: string): Promise<string> {
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(value));
  return toHex(digest);
}

async function hmacHex(secret: string, value: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  const signature = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(value));
  return toHex(signature);
}

export async function verifyPassword(candidate: string): Promise<boolean> {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) return false;
  const [candidateHash, expectedHash] = await Promise.all([sha256Hex(candidate), sha256Hex(expected)]);
  return timingSafeEqual(candidateHash, expectedHash);
}

export async function createSessionToken(): Promise<string> {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) throw new Error('Missing ADMIN_SESSION_SECRET environment variable');

  const payload = JSON.stringify({ exp: Date.now() + SESSION_TTL_MS });
  const payloadB64 = btoa(payload);
  const signature = await hmacHex(secret, payloadB64);
  return `${payloadB64}.${signature}`;
}

export async function verifySessionToken(token: string | undefined | null): Promise<boolean> {
  if (!token) return false;
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) return false;

  const [payloadB64, signature] = token.split('.');
  if (!payloadB64 || !signature) return false;

  const expectedSignature = await hmacHex(secret, payloadB64);
  if (!timingSafeEqual(signature, expectedSignature)) return false;

  try {
    const payload = JSON.parse(atob(payloadB64)) as { exp: number };
    return typeof payload.exp === 'number' && payload.exp > Date.now();
  } catch {
    return false;
  }
}

/**
 * Reads the admin session cookie out of a raw Cookie header.
 *
 * Splits on the FIRST `=` only — the token is base64 and can legitimately end in
 * padding, which a naive `split('=')[1]` would truncate into an invalid token.
 */
export function readSessionCookie(cookieHeader: string | null): string | undefined {
  const entry = cookieHeader
    ?.split(';')
    .map((part) => part.trim())
    .find((part) => part.startsWith(`${ADMIN_SESSION_COOKIE}=`));

  return entry?.slice(ADMIN_SESSION_COOKIE.length + 1);
}

/**
 * Defence in depth for /api/admin/* route handlers: middleware already gates
 * these paths, but a route should never depend on that alone.
 */
export async function verifyRequestSession(request: Request): Promise<boolean> {
  return verifySessionToken(readSessionCookie(request.headers.get('cookie')));
}
