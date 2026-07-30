import Link from 'next/link';
import { CalendarDays, ArrowRight } from 'lucide-react';
import { UPCOMING_EVENTS } from '@/lib/constants';
import AddToCalendarButton from './AddToCalendarButton';

function formatEventDate(iso: string): string {
  return new Date(`${iso}T00:00:00`).toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });
}

export default function EventsBanner(): React.JSX.Element | null {
  const today = new Date().toISOString().slice(0, 10);
  const nextEvent = UPCOMING_EVENTS
    .filter((event) => event.date >= today)
    .sort((a, b) => a.date.localeCompare(b.date))[0];

  if (!nextEvent) return null;

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-forest-green-900 via-forest-green-800 to-forest-green-900 text-white">
      {/* Hairline of amber along the bottom, tying the banner to the brand */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"
      />
      <div className="relative z-10 container mx-auto flex flex-col items-center justify-center gap-3 px-6 py-3 text-center sm:flex-row sm:text-left">
        <div className="flex items-center gap-2.5 text-sm">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-500/15">
            <CalendarDays size={14} className="text-amber-400" />
          </span>
          <span>
            <span className="font-semibold">Next Outreach:</span> {nextEvent.title},{' '}
            {formatEventDate(nextEvent.date)}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <AddToCalendarButton
            event={nextEvent}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-forest-green-200 hover:text-white transition-colors underline underline-offset-2"
          />
          <Link
            href="/donate"
            className="inline-flex items-center gap-1 text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors"
          >
            Support This Outreach <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
