// Netlify Scheduled Function — runs daily to email recurring donors a reminder
// (SWIFT/check giving is manual, not automatic). Imported via a relative path,
// not the '@/*' tsconfig alias, since Netlify's function bundler doesn't resolve
// it; src/lib/reminders.ts is deliberately self-contained for this reason.
import { runDueRecurringReminders } from '../../src/lib/reminders';

async function handler(): Promise<Response> {
  const result = await runDueRecurringReminders();
  console.log('Recurring reminders run:', result);
  return new Response(JSON.stringify(result), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

export default handler;

export const config = {
  schedule: '0 6 * * *', // daily, 06:00 UTC
};
