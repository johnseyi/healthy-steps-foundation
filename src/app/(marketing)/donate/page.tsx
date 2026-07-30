import type { Metadata } from 'next';
import Image from 'next/image';
import { Suspense } from 'react';
import { Shield, Heart, RefreshCw, Mail, Phone } from 'lucide-react';
import DonatePageClient from './DonatePageClient';
import { ORG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Donate',
  description: 'Support Healthy Steps Foundation and help families in Uganda thrive.',
};

const IMPACT_EXAMPLES = [
  { amount: '$25', description: 'Covers a child\'s school supplies for one term' },
  { amount: '$50', description: 'Feeds a family of 4 for an entire month' },
  { amount: '$100', description: 'Sponsors a child\'s school fees for one term' },
  { amount: '$250', description: 'Funds one adult through vocational training' },
  { amount: '$500', description: 'Covers Family Medical and counseling support for a full year' },
];

export default function DonatePage(): React.JSX.Element {
  return (
    <>
      {/* Hero — real field photo, full-bleed overlay */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <Image
          src="/images/WhatsApp Image 2026-05-21 at 20.31.38 (2).jpeg"
          alt="Community members supported by Healthy Steps Foundation in Ndejje, Wakiso, Uganda"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-green-900/95 via-forest-green-900/70 to-forest-green-900/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-green-900/55 via-transparent to-transparent" />
        <div className="relative z-10 container mx-auto px-6 py-28 max-w-5xl">
          <div className="max-w-2xl">
            <div className="w-10 h-0.5 bg-amber-400 mb-4" />
            <p className="text-sm font-semibold uppercase tracking-widest text-forest-green-300 mb-3">
              Give Today
            </p>
            {/* The logo carries this hero instead of a headline (client direction).
                It stays inside an <h1> so the page keeps a single top-level
                heading, with the alt text doing the work for screen readers. */}
            <h1 className="mb-8">
              <span className="sr-only">Donate to Healthy Steps Foundation</span>
              <span className="inline-flex items-center justify-center rounded-3xl bg-white px-7 py-5 shadow-float">
                <Image
                  src="/HSF_logo.png"
                  alt="Healthy Steps Foundation"
                  width={420}
                  height={120}
                  priority
                  className="h-20 w-auto object-contain sm:h-24 lg:h-28"
                />
              </span>
            </h1>
            <p className="text-forest-green-100 text-xl leading-relaxed max-w-xl">
              Every gift — no matter the size — reaches a real family in Wakiso, Uganda.
              US donors can give by check or by SWIFT bank transfer. International donors
              must use SWIFT bank transfer.
            </p>
          </div>
        </div>
      </section>

      {/* Main content — form + sidebar */}
      <section className="py-16 px-6 bg-warm-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

            {/* Donation Form — takes 2/3 width */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-md p-8">
              <div className="w-10 h-0.5 bg-amber-500 mb-4" />
              <h2 className="text-2xl font-bold font-serif text-warm-gray-900 mb-2">Make Your Gift</h2>
              <p className="text-warm-gray-500 text-sm mb-8">
                Choose how you&apos;d like to give below. US donors can give by check or by
                SWIFT bank transfer. International donors must use SWIFT bank transfer.
              </p>
              <Suspense fallback={
                <div className="flex items-center justify-center py-16 text-warm-gray-400">
                  <RefreshCw size={20} className="animate-spin mr-2" /> Loading...
                </div>
              }>
                <DonatePageClient />
              </Suspense>
            </div>

            {/* Sidebar — takes 1/3 width */}
            <div className="space-y-6">

              {/* Secure Giving — replaces the former "Two Ways to Give" and
                  "Safe & Transparent" cards (client direction) */}
              <div className="bg-forest-green-900 rounded-2xl p-6">
                <div className="w-8 h-0.5 bg-amber-400 mb-3" />
                <div className="flex items-center gap-2 mb-3">
                  <Shield size={18} className="text-amber-400" />
                  <h3 className="font-bold text-white font-serif text-lg">Secure Giving</h3>
                </div>
                <p className="text-forest-green-200 text-sm leading-relaxed">
                  SWIFT or check — no card data ever stored.
                </p>
              </div>

              {/* Your gift at work */}
              <div className="bg-white rounded-2xl shadow-md p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Heart size={18} className="text-amber-500 fill-amber-500" />
                  <h3 className="font-bold text-warm-gray-900">Your Gift at Work</h3>
                </div>
                <ul className="space-y-3">
                  {IMPACT_EXAMPLES.map(({ amount, description }) => (
                    <li key={amount} className="flex gap-3 items-start">
                      <span className="shrink-0 font-bold text-forest-green-600 text-sm w-12">{amount}</span>
                      <span className="text-warm-gray-600 text-sm leading-snug">{description}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Questions */}
              <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100">
                <h3 className="font-bold text-warm-gray-900 mb-3">Questions?</h3>
                <p className="text-warm-gray-500 text-sm mb-4">
                  We&apos;re happy to help — reach out any time.
                </p>
                <div className="space-y-2">
                  <a
                    href={`mailto:${ORG.email}`}
                    className="flex items-center gap-2 text-forest-green-600 text-sm hover:text-forest-green-700 transition-colors font-medium"
                  >
                    <Mail size={15} /> {ORG.email}
                  </a>
                  {ORG.phone.map((num) => (
                    <a
                      key={num}
                      href={`tel:${num}`}
                      className="flex items-center gap-2 text-forest-green-600 text-sm hover:text-forest-green-700 transition-colors font-medium"
                    >
                      <Phone size={15} /> {num}
                    </a>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Bottom trust bar */}
      <section className="py-10 px-6 bg-forest-green-900 text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {[
              { icon: Shield, label: 'Secure Giving', desc: 'SWIFT or check — no card data ever stored' },
              { icon: Heart, label: '100% to Families', desc: 'Give by check or cover the bank fee so every cent reaches those in need' },
              { icon: Mail, label: 'Confirmed in 48 hrs', desc: 'We acknowledge every gift personally within 2 business days' },
            ].map(({ icon: Icon, label, desc }) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <Icon size={22} className="text-amber-400" />
                <p className="font-semibold text-white text-sm">{label}</p>
                <p className="text-forest-green-300 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
