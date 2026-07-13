import { NextResponse } from 'next/server';
import { adminLoginSchema } from '@/lib/validations';
import { ADMIN_SESSION_COOKIE, createSessionToken, verifyPassword } from '@/lib/admin-auth';

export async function POST(request: Request): Promise<NextResponse> {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, error: 'invalid_json' }, { status: 400 });
  }

  const parsed = adminLoginSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ success: false, error: 'validation' }, { status: 400 });
  }

  const valid = await verifyPassword(parsed.data.password);
  if (!valid) {
    return NextResponse.json({ success: false, error: 'invalid_password' }, { status: 401 });
  }

  const token = await createSessionToken();
  const response = NextResponse.json({ success: true });
  response.cookies.set(ADMIN_SESSION_COOKIE, token, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 12,
  });
  return response;
}
