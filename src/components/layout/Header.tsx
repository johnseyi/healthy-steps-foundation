'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Button from '@/components/ui/Button';
import { PROGRAMS } from '@/lib/constants';

export default function Header(): React.JSX.Element {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white border-b border-warm-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-1 flex items-center justify-between gap-6">

        {/* Logo */}
        <Link href="/" className="shrink-0 flex items-center">
          <Image
            src="/HSF_logo.png"
            alt="Healthy Steps Foundation — A path to mental wellness"
            width={280}
            height={80}
            className="h-12 sm:h-14 md:h-20 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
          {/* Home dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-sm font-medium text-warm-gray-700 hover:text-forest-green-600 transition-colors py-1">
              Home <ChevronDown size={15} />
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-warm-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <Link href="/about" className="block px-4 py-3 text-sm text-warm-gray-700 hover:bg-forest-green-50 hover:text-forest-green-700 rounded-t-xl">About Us</Link>
              <Link href="/staff" className="block px-4 py-3 text-sm text-warm-gray-700 hover:bg-forest-green-50 hover:text-forest-green-700">Our Staff</Link>
              <Link href="/mission" className="block px-4 py-3 text-sm text-warm-gray-700 hover:bg-forest-green-50 hover:text-forest-green-700 rounded-b-xl">Our Mission</Link>
            </div>
          </div>

          {/* Programs dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-sm font-medium text-warm-gray-700 hover:text-forest-green-600 transition-colors py-1">
              Programs <ChevronDown size={15} />
            </button>
            <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-warm-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <Link href="/programs" className="block px-4 py-3 text-sm font-semibold text-forest-green-700 hover:bg-forest-green-50 rounded-t-xl border-b border-warm-gray-100">
                All Programs
              </Link>
              {PROGRAMS.map((p) => (
                <Link
                  key={p.slug}
                  href={`/programs/${p.slug}`}
                  className="block px-4 py-3 text-sm text-warm-gray-700 hover:bg-forest-green-50 hover:text-forest-green-700 last:rounded-b-xl"
                >
                  {p.name}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/get-help" className="text-sm font-medium text-warm-gray-700 hover:text-forest-green-600 transition-colors">
            Get Help
          </Link>
          <Link href="/stories" className="text-sm font-medium text-warm-gray-700 hover:text-forest-green-600 transition-colors">
            Stories
          </Link>
          <Link href="/contact" className="text-sm font-medium text-warm-gray-700 hover:text-forest-green-600 transition-colors">
            Contact
          </Link>
        </nav>

        {/* Donate CTA + Hamburger */}
        <div className="flex items-center gap-3 shrink-0">
          <Link href="/donate" className="hidden sm:block">
            <Button variant="primary" size="sm">Donate</Button>
          </Link>
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-warm-gray-100 transition-colors"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} className="text-warm-gray-700" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col p-6 gap-6 overflow-y-auto lg:hidden">
          <div className="flex items-center justify-between">
            <Link href="/" onClick={() => setMobileOpen(false)}>
              <Image
                src="/HSF_logo.png"
                alt="Healthy Steps Foundation"
                width={200}
                height={58}
                className="h-14 w-auto object-contain"
              />
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 rounded-lg hover:bg-warm-gray-100"
              aria-label="Close menu"
            >
              <X size={24} className="text-warm-gray-700" />
            </button>
          </div>

          <nav className="flex flex-col gap-1">
            {[
              { href: '/', label: 'Home' },
              { href: '/about', label: 'About Us' },
              { href: '/staff', label: 'Our Staff' },
              { href: '/mission', label: 'Our Mission' },
              { href: '/programs', label: 'All Programs' },
              { href: '/get-help', label: 'Get Help' },
              { href: '/stories', label: 'Stories' },
              { href: '/contact', label: 'Contact' },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="text-lg font-semibold text-warm-gray-900 py-3 px-4 rounded-lg hover:bg-forest-green-50 hover:text-forest-green-700 transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>

          <Link href="/donate" onClick={() => setMobileOpen(false)}>
            <Button variant="primary" size="lg" className="w-full">Donate Now</Button>
          </Link>
        </div>
      )}
    </header>
  );
}
