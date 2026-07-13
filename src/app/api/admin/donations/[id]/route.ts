import { NextResponse } from 'next/server';
import { z } from 'zod';
import { ADMIN_SESSION_COOKIE, verifySessionToken } from '@/lib/admin-auth';
import { getSupabaseAdmin } from '@/lib/supabase';

const updateSchema = z.object({ status: z.literal('received') });

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
): Promise<NextResponse> {
  // Defense in depth: middleware already gates /api/admin/*, but re-check here too.
  const cookieHeader = request.headers.get('cookie') ?? '';
  const token = cookieHeader
    .split(';')
    .map((c) => c.trim())
    .find((c) => c.startsWith(`${ADMIN_SESSION_COOKIE}=`))
    ?.split('=')[1];

  if (!(await verifySessionToken(token))) {
    return NextResponse.json({ success: false, error: 'unauthorized' }, { status: 401 });
  }

  const { id } = await params;

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, error: 'invalid_json' }, { status: 400 });
  }

  const parsed = updateSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ success: false, error: 'validation' }, { status: 400 });
  }

  const { error } = await getSupabaseAdmin()
    .from('donations')
    .update({ status: 'received', received_at: new Date().toISOString() })
    .eq('id', id);

  if (error) {
    console.error('Failed to mark donation received:', error);
    return NextResponse.json({ success: false, error: 'server_error' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
