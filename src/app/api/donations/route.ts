import { NextResponse } from 'next/server';
import { donationSchema } from '@/lib/validations';
import { calculateDonationTotals } from '@/lib/utils';
import { getSupabaseAdmin, mapDonationRow, type DonationRow } from '@/lib/supabase';
import { renderDonationPledgePdf } from '@/lib/pdf/donation-pledge';
import { sendDonationPledgeEmail } from '@/lib/email';
import { computeNextReminderDate } from '@/lib/reminders';

export async function POST(request: Request): Promise<NextResponse> {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, error: 'invalid_json' }, { status: 400 });
  }

  const parsed = donationSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { success: false, error: 'validation', fieldErrors: parsed.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  const data = parsed.data;

  // Honeypot: a filled-in hidden field means a bot submitted this. Respond as if
  // it succeeded (don't tip off the bot) but do nothing.
  if (data.companyWebsite) {
    return NextResponse.json({ success: true, invoiceNumber: 'N/A', donationId: 'N/A', totals: { donationAmount: 0, bankFee: 0, totalAmount: 0 }, emailStatus: 'sent' });
  }

  const totals = calculateDonationTotals(data.amount, data.coverBankFee);

  const nextReminderDate =
    data.type === 'recurring' && data.recurringFrequency
      ? computeNextReminderDate(new Date(), data.recurringFrequency).toISOString().slice(0, 10)
      : null;

  const insertPayload = {
    method: data.method,
    first_name: data.firstName,
    last_name: data.lastName,
    email: data.email,
    phone: data.phone || null,
    country: data.country,
    donation_type: data.type,
    recurring_frequency: data.recurringFrequency ?? null,
    amount: totals.donationAmount,
    fund: data.fund,
    cover_bank_fee: data.coverBankFee,
    bank_fee: totals.bankFee,
    total_amount: totals.totalAmount,
    next_reminder_date: nextReminderDate,
  };

  const supabase = getSupabaseAdmin();
  const { data: row, error: insertError } = await supabase
    .from('donations')
    .insert(insertPayload)
    .select()
    .single();

  if (insertError || !row) {
    console.error('Failed to insert donation row:', insertError);
    return NextResponse.json({ success: false, error: 'server_error' }, { status: 500 });
  }

  const record = mapDonationRow(row as DonationRow);

  let emailStatus: 'sent' | 'failed' = 'failed';
  try {
    const pdfBuffer = await renderDonationPledgePdf(record);
    const emailResult = await sendDonationPledgeEmail(record, pdfBuffer);
    emailStatus = emailResult.ok ? 'sent' : 'failed';
    if (!emailResult.ok) {
      console.error('Failed to send donation pledge email:', emailResult.error);
    }
  } catch (err) {
    console.error('Failed to generate/send donation pledge PDF email:', err);
  }

  return NextResponse.json({
    success: true,
    invoiceNumber: record.invoiceNumber,
    donationId: record.id,
    totals,
    emailStatus,
  });
}
