import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { ADMIN_SESSION_COOKIE, verifySessionToken } from '@/lib/admin-auth';
import { getSupabaseAdmin, mapDonationRow, type DonationRow } from '@/lib/supabase';
import DonationsTable from './DonationsTable';

export default async function AdminDonationsPage(): Promise<React.JSX.Element> {
  // Defense in depth: middleware already gates this route, re-check here too.
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_SESSION_COOKIE)?.value;
  if (!(await verifySessionToken(token))) {
    redirect('/admin/login');
  }

  const { data, error } = await getSupabaseAdmin()
    .from('donations')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    return (
      <p className="text-error">Failed to load donations: {error.message}</p>
    );
  }

  const donations = (data as DonationRow[]).map(mapDonationRow);

  return <DonationsTable donations={donations} />;
}
