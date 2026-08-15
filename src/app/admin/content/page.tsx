import Link from 'next/link';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { ArrowRight, PencilLine, TriangleAlert } from 'lucide-react';
import { ADMIN_SESSION_COOKIE, verifySessionToken } from '@/lib/admin-auth';
import { getAllEditStates } from '@/lib/cms/content';
import { groupedPageSchemas } from '@/lib/cms/registry';

export const metadata = { title: 'Site Content' };

// Always reflect what is actually saved right now, not a cached snapshot.
export const dynamic = 'force-dynamic';

function formatUpdated(iso: string | null): string {
  if (!iso) return 'Not edited yet';
  return `Last edited ${new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })}`;
}

export default async function ContentIndexPage(): Promise<React.JSX.Element> {
  // Defense in depth: middleware already gates this route, re-check here too.
  const cookieStore = await cookies();
  if (!(await verifySessionToken(cookieStore.get(ADMIN_SESSION_COOKIE)?.value))) {
    redirect('/admin/login');
  }

  const connected = Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY);
  const states = await getAllEditStates();
  const groups = groupedPageSchemas();

  return (
    <div>
      <h1 className="font-serif text-2xl font-bold text-warm-gray-900">Site Content</h1>
      <p className="mt-2 mb-8 text-warm-gray-500">
        Choose a page to change its words and photos. Edits go live as soon as you save.
      </p>

      {!connected && (
        <div className="mb-8 flex gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-5">
          <TriangleAlert size={20} className="mt-0.5 shrink-0 text-amber-600" />
          <div className="text-sm text-warm-gray-700">
            <p className="font-semibold text-warm-gray-900">The content database is not connected</p>
            <p className="mt-1">
              You can look around, but saving will fail until the Supabase details are added to the
              site&apos;s settings. The site is showing the wording it was built with.
            </p>
          </div>
        </div>
      )}

      <div className="space-y-10">
        {groups.map((group) => (
          <section key={group.label}>
            <h2 className="mb-3 text-xs font-semibold tracking-[0.2em] text-warm-gray-400 uppercase">
              {group.label}
            </h2>
            <ul className="space-y-3">
              {group.schemas.map((schema) => {
                const state = states[schema.slug] ?? { editedFields: 0, updatedAt: null };
                return (
                  <li key={schema.slug}>
                    <Link
                      href={`/admin/content/${schema.slug}`}
                      className="group flex items-center gap-4 rounded-2xl border border-warm-gray-200 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-forest-green-200 hover:shadow-lift"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-forest-green-50 text-forest-green-600">
                        <PencilLine size={18} />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-semibold text-warm-gray-900">{schema.label}</span>
                        <span className="block text-sm text-warm-gray-500">{schema.description}</span>
                        <span className="mt-1 block text-xs text-warm-gray-400">
                          {formatUpdated(state.updatedAt)}
                          {state.editedFields > 0 && ` · ${state.editedFields} changed`}
                        </span>
                      </span>
                      <ArrowRight
                        size={18}
                        className="shrink-0 text-warm-gray-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-forest-green-500"
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
