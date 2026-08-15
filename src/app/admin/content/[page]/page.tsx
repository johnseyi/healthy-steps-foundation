import { cookies } from 'next/headers';
import { notFound, redirect } from 'next/navigation';
import type { Metadata } from 'next';
import { ADMIN_SESSION_COOKIE, verifySessionToken } from '@/lib/admin-auth';
import { getPageContent } from '@/lib/cms/content';
import { findPageSchema } from '@/lib/cms/registry';
import ContentEditor from './ContentEditor';

interface PageProps {
  params: Promise<{ page: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { page } = await params;
  return { title: findPageSchema(page)?.label ?? 'Content' };
}

// The editor must open on what is saved right now, never a cached snapshot.
export const dynamic = 'force-dynamic';

export default async function EditContentPage({ params }: PageProps): Promise<React.JSX.Element> {
  // Defense in depth: middleware already gates this route, re-check here too.
  const cookieStore = await cookies();
  if (!(await verifySessionToken(cookieStore.get(ADMIN_SESSION_COOKIE)?.value))) {
    redirect('/admin/login');
  }

  const { page } = await params;
  const schema = findPageSchema(page);
  if (!schema) notFound();

  const content = await getPageContent(schema);

  return <ContentEditor schema={schema} initial={content} />;
}
