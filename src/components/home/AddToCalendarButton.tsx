'use client';

import { CalendarPlus } from 'lucide-react';
import { buildIcsContent } from '@/lib/ics';
import type { UpcomingEvent } from '@/types';

export default function AddToCalendarButton({
  event,
  className,
}: {
  event: UpcomingEvent;
  className?: string;
}): React.JSX.Element {
  function handleClick(): void {
    const blob = new Blob([buildIcsContent(event)], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${event.slug}.ics`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={className}
    >
      <CalendarPlus size={16} />
      Add to Calendar
    </button>
  );
}
