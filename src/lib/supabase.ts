import 'server-only';
import { createClient, type SupabaseClient } from '@supabase/supabase-js';

export type { DonationRow } from './donation-row';
export { mapDonationRow } from './donation-row';

let client: SupabaseClient | null = null;

// Server-only Supabase client using the service-role key — bypasses RLS.
// Never import this file from a 'use client' component.
export function getSupabaseAdmin(): SupabaseClient {
  if (client) return client;

  const url = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    throw new Error('Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY environment variables');
  }

  client = createClient(url, serviceRoleKey, {
    auth: { persistSession: false },
  });

  return client;
}
