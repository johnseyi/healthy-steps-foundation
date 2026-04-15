import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';
import { ORG, PROGRAMS } from '@/lib/constants';

export default function Footer(): React.JSX.Element {
  return (
    <footer className="bg-forest-green-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            {/* Logo on white pill — keeps it legible on dark bg */}
            <Link href="/" className="inline-block mb-4">
              <div className="bg-white rounded-2xl px-5 py-3 inline-flex items-center justify-center">
                <Image
                  src="/HSF_logo.png"
                  alt="Healthy Steps Foundation"
                  width={200}
                  height={58}
                  className="h-14 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-forest-green-200 text-sm leading-relaxed">
              Supporting families in Uganda with mental health care, education, and essential resources.
            </p>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Programs</h3>
            <ul className="space-y-2">
              {PROGRAMS.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/programs/${p.slug}`}
                    className="text-forest-green-200 text-sm hover:text-amber-400 transition-colors"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: '/about', label: 'About Us' },
                { href: '/staff', label: 'Our Staff' },
                { href: '/stories', label: 'Stories' },
                { href: '/get-help', label: 'Get Help' },
                { href: '/contact', label: 'Contact' },
                { href: '/donate', label: 'Donate' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-forest-green-200 text-sm hover:text-amber-400 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-forest-green-200 text-sm">
                <MapPin size={16} className="text-amber-400 mt-0.5 shrink-0" />
                <span>{ORG.location.village}, {ORG.location.ward}, {ORG.location.district}, {ORG.location.country}</span>
              </li>
              <li>
                <a href={`mailto:${ORG.email}`} className="flex items-center gap-2 text-forest-green-200 text-sm hover:text-amber-400 transition-colors">
                  <Mail size={16} className="text-amber-400 shrink-0" />
                  {ORG.email}
                </a>
              </li>
              {ORG.phone.map((num) => (
                <li key={num}>
                  <a href={`tel:${num}`} className="flex items-center gap-2 text-forest-green-200 text-sm hover:text-amber-400 transition-colors">
                    <Phone size={16} className="text-amber-400 shrink-0" />
                    {num}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-forest-green-700 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-forest-green-400 text-sm">
          <p>&copy; {new Date().getFullYear()} {ORG.name}. All rights reserved.</p>
          <p>Registered in Uganda &middot; Wakiso, Central Region</p>
        </div>
      </div>
    </footer>
  );
}
