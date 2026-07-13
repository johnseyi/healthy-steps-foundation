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
      subject: `Donation Pledge Confirmation #${record.invoiceNumber}`,
      html: `
        <p>Dear ${record.firstName},</p>
        <p>Thank you for pledging a donation to ${ORG.name}. Your pledge confirmation
        (invoice #${record.invoiceNumber}) is attached as a PDF, with instructions for completing
        your ${record.method === 'swift' ? 'SWIFT bank transfer' : 'check donation'}.</p>
        <p><strong>This confirms your pledge — it is not a receipt of funds received.</strong>
        Once you've completed the transfer or mailed your check, please reply to this email or
        write to ${ORG.email} with proof of payment, referencing invoice #${record.invoiceNumber},
        so we can confirm receipt.</p>
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
