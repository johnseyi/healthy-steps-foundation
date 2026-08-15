import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { verifyRequestSession } from '@/lib/admin-auth';
import { savePageContent } from '@/lib/cms/content';
import { findPageSchema } from '@/lib/cms/registry';

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ page: string }> },
): Promise<NextResponse> {
  if (!(await verifyRequestSession(request))) {
    return NextResponse.json({ success: false, error: 'unauthorized' }, { status: 401 });
  }

  const { page } = await params;
  const schema = findPageSchema(page);
  if (!schema) {
    return NextResponse.json({ success: false, error: 'unknown_page' }, { status: 404 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, error: 'invalid_json' }, { status: 400 });
  }

  // savePageContent sanitises against the schema — unknown keys are dropped and
  // wrong-shaped values fall back — so no separate Zod pass is needed here.
  const result = await savePageContent(schema, body);
  if (!result.ok) {
    console.error(`[cms] save failed for "${page}":`, result.error);
    return NextResponse.json({ success: false, error: result.error }, { status: 500 });
  }

  // The marketing pages are statically prerendered, so the edit is not visible
  // until their cached output is dropped.
  if (schema.revalidateLayout) {
    // Content in the shared header/footer appears on every page — cheaper to
    // drop the whole tree than to enumerate 19 paths.
    revalidatePath('/', 'layout');
  } else {
    for (const path of [schema.path, ...(schema.extraPaths ?? [])]) {
      revalidatePath(path);
    }
  }

  return NextResponse.json({ success: true });
}
