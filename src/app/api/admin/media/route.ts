import { NextResponse } from 'next/server';
import { verifyRequestSession } from '@/lib/admin-auth';
import { listMedia, uploadMedia } from '@/lib/cms/media';

export async function GET(request: Request): Promise<NextResponse> {
  if (!(await verifyRequestSession(request))) {
    return NextResponse.json({ success: false, error: 'unauthorized' }, { status: 401 });
  }

  const assets = await listMedia();
  return NextResponse.json({ success: true, assets });
}

export async function POST(request: Request): Promise<NextResponse> {
  if (!(await verifyRequestSession(request))) {
    return NextResponse.json({ success: false, error: 'unauthorized' }, { status: 401 });
  }

  let file: File | null = null;
  try {
    const form = await request.formData();
    const entry = form.get('file');
    if (entry instanceof File) file = entry;
  } catch {
    return NextResponse.json({ success: false, error: 'invalid_form' }, { status: 400 });
  }

  if (!file) {
    return NextResponse.json({ success: false, error: 'No file was received.' }, { status: 400 });
  }

  const result = await uploadMedia(file);
  if (!result.ok) {
    return NextResponse.json({ success: false, error: result.error }, { status: 400 });
  }

  return NextResponse.json({ success: true, asset: result.asset });
}
