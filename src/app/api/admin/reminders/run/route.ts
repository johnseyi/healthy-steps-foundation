import { NextResponse } from 'next/server';
import { ADMIN_SESSION_COOKIE, verifySessionToken } from '@/lib/admin-auth';
import { runDueRecurringReminders } from '@/lib/reminders';

export async function POST(request: Request): Promise<NextResponse> {
  const cookieHeader = request.headers.get('cookie') ?? '';
  const token = cookieHeader
    .split(';')
    .map((c) => c.trim())
    .find((c) => c.startsWith(`${ADMIN_SESSION_COOKIE}=`))
    ?.split('=')[1];

  if (!(await verifySessionToken(token))) {
    return NextResponse.json({ success: false, error: 'unauthorized' }, { status: 401 });
  }

  try {
    const summary = await runDueRecurringReminders();
    return NextResponse.json({ success: true, summary });
  } catch (err) {
    console.error('Failed to run recurring reminders:', err);
    return NextResponse.json({ success: false, error: 'server_error' }, { status: 500 });
  }
}
