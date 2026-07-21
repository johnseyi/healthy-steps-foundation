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
    <div className="bg-forest-green-900 text-white">
      <div className="container mx-auto px-6 py-3 flex flex-col sm:flex-row items-center justify-center gap-3 text-center sm:text-left">
        <div className="flex items-center gap-2 text-sm">
          <CalendarDays size={16} className="text-amber-400 shrink-0" />
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
