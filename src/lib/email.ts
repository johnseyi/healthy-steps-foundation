import 'server-only';
import { Resend } from 'resend';
import { ORG } from '@/lib/constants';
import type { DonationRecord } from '@/types';

let client: Resend | null = null;

function getResend(): Resend {
  if (client) return client;
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error('Missing RESEND_API_KEY environment variable');
  client = new Resend(apiKey);
  return client;
}

function getFromAddress(): string {
  const from = process.env.RESEND_FROM_EMAIL;
  if (!from) throw new Error('Missing RESEND_FROM_EMAIL environment variable');
  return from;
}

interface EmailResult {
  ok: boolean;
  error?: string;
}

export async function sendDonationPledgeEmail(
  record: DonationRecord,
  pdfBuffer: Buffer,
): Promise<EmailResult> {
  try {
    const { error } = await getResend().emails.send({
      from: getFromAddress(),
      to: record.email,
      replyTo: ORG.email,
      subject: `Thank You! Your Donation Has Been Received #${record.invoiceNumber}`,
      html: `
        <h1 style="letter-spacing: 1px;">THANK YOU, ${record.firstName.toUpperCase()}!</h1>
        <p>Your donation pledge to ${ORG.name} has been successfully received.</p>
        <p>Your pledge confirmation (invoice #${record.invoiceNumber}) is attached as a PDF,
        along with instructions for completing your
        ${record.method === 'swift' ? 'SWIFT bank transfer' : 'check donation'}.</p>
        <p><strong>Please note:</strong> this confirms your pledge only. It is not a receipt of
        funds received, since ${record.method === 'swift' ? 'SWIFT transfers are' : 'checks are'}
        processed manually, not in real time. Once your
        ${record.method === 'swift' ? 'bank transfer' : 'check'} is complete, please reply to this
        email or write to ${ORG.email} with proof of payment, referencing invoice
        #${record.invoiceNumber}, so we can confirm receipt. We'll follow up with a second,
        separate email once we've confirmed your gift has arrived.</p>
        <p>With gratitude,<br />${ORG.name}</p>
      `,
      attachments: [
        {
          filename: `${record.invoiceNumber}.pdf`,
          content: pdfBuffer,
        },
      ],
    });

    if (error) return { ok: false, error: error.message };
    return { ok: true };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : 'Unknown error' };
  }
}

// Sent separately once staff confirm the transfer/check actually arrived (admin
// "Mark received" action) — no bank details this time, just confirmation.
export async function sendPaymentReceivedEmail(record: DonationRecord): Promise<EmailResult> {
  try {
    const { error } = await getResend().emails.send({
      from: getFromAddress(),
      to: record.email,
      replyTo: ORG.email,
      subject: `Thank You! We've Confirmed Your Donation #${record.invoiceNumber}`,
      html: `
        <h1 style="letter-spacing: 1px;">THANK YOU, ${record.firstName.toUpperCase()}!</h1>
        <p>We're writing to confirm that your donation (invoice #${record.invoiceNumber}) has
        been received. Thank you for partnering with ${ORG.name} to walk alongside families in
        Wakiso, Uganda.</p>
        <p>With gratitude,<br />${ORG.name}</p>
      `,
    });

    if (error) return { ok: false, error: error.message };
    return { ok: true };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : 'Unknown error' };
  }
}
