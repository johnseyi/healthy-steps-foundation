'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FileText, Receipt } from 'lucide-react';
import { cn } from '@/lib/utils';
import LogoutButton from './LogoutButton';

const TABS = [
  { href: '/admin/content', label: 'Site Content', icon: FileText },
  { href: '/admin/donations', label: 'Donations', icon: Receipt },
];

/** Shared admin chrome so the two sections of the admin feel like one tool. */
export default function AdminNav(): React.JSX.Element {
  const pathname = usePathname();

  return (
    <header className="border-b border-warm-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-semibold tracking-widest text-warm-gray-400 uppercase">
            Healthy Steps Foundation
          </p>
          <p className="font-serif text-lg font-bold text-warm-gray-900">Admin</p>
        </div>

        <div className="flex items-center gap-6">
          <nav className="flex items-center gap-1" aria-label="Admin sections">
            {TABS.map(({ href, label, icon: Icon }) => {
              const active = pathname.startsWith(href);
              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={active ? 'page' : undefined}
                  className={cn(
                    'inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors',
                    active
                      ? 'bg-forest-green-50 text-forest-green-700'
                      : 'text-warm-gray-500 hover:bg-warm-white hover:text-warm-gray-900',
                  )}
                >
                  <Icon size={16} />
                  {label}
                </Link>
              );
            })}
          </nav>
          <LogoutButton />
        </div>
      </div>
    </header>
  );
}
