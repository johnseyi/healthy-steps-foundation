import { ORG } from '@/lib/constants';
import type { UpcomingEvent } from '@/types';

function toIcsDateTime(date: string, time: string): string {
  // date: 'YYYY-MM-DD', time: 'HH:MM' — treated as Africa/Kampala local time,
  // emitted as a floating (no Z suffix) ICS datetime so calendar apps show it
  // as-authored rather than converting through the visitor's timezone.
  return `${date.replace(/-/g, '')}T${time.replace(':', '')}00`;
}

function escapeIcsText(text: string): string {
  return text.replace(/[\\,;]/g, (m) => `\\${m}`).replace(/\n/g, '\\n');
}

export function buildIcsContent(event: UpcomingEvent): string {
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Healthy Steps Foundation//Events//EN',
    'BEGIN:VEVENT',
    `UID:${event.slug}@healthystepsfoundation`,
    `DTSTART:${toIcsDateTime(event.date, event.startTime)}`,
    `DTEND:${toIcsDateTime(event.date, event.endTime)}`,
    `SUMMARY:${escapeIcsText(`${ORG.name}: ${event.title}`)}`,
    `DESCRIPTION:${escapeIcsText(event.description)}`,
    `LOCATION:${escapeIcsText(event.location)}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ];
  return lines.join('\r\n');
}
