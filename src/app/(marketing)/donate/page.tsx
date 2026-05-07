import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Shield, Heart, RefreshCw, Mail, Phone, FileText } from 'lucide-react';
import DonatePageClient from './DonatePageClient';
import { ORG, US_CHECK_DETAILS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Donate',
  description: 'Support Healthy Steps Foundation and help families in Uganda thrive.',
};

const IMPACT_EXAMPLES = [
  { amount: '$25', description: 'Covers a child\'s school supplies for one term' },
  { amount: '$50', description: 'Feeds a family of 4 for an entire month' },
  { amount: '$100', description: 'Sponsors a child\'s school fees for one term' },
  { amount: '$250', description: 'Funds one adult through vocational training' },
  { amount: '$500', description: 'Covers a full month of Family Medical support' },
];

const SWIFT_STEPS = [
  { step: '1', text: 'Fill in your details and gift amount below' },
  { step: '2', text: 'We show you our bank transfer instructions' },
  { step: '3', text: 'You complete the transfer at your bank' },
  { step: '4', text: 'Email us proof of payment — we confirm within 48 hrs' },
];

export default function DonatePage(): React.JSX.Element {
  return (
    <>
      {/* Hero */}
      <section className="bg-forest-green-900 text-white py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-forest-green-700/30 rounded-full -translate-y-1/3 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full translate-y-1/2 -translate-x-1/4" />
        </div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4">Give Today</p>
          <h1 className="text-5xl sm:text-6xl font-black font-serif leading-tight mb-5">
            Make a Difference Today
          </h1>
          <p className="text-forest-green-100 text-xl leading-relaxed max-w-2xl mx-auto">
            Every gift — no matter the size — reaches a real family in Wakiso, Uganda.
            Choose your amount, select a program, and we&apos;ll walk you through the rest.
          </p>
        </div>
      </section>

      {/* Main content — form + sidebar */}
      <section className="py-16 px-6 bg-warm-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

            {/* Donation Form — takes 2/3 width */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-md p-8">
              <h2 className="text-2xl font-bold font-serif text-warm-gray-900 mb-2">Your Gift Details</h2>
              <p className="text-warm-gray-500 text-sm mb-8">
                All donations are processed via international bank transfer (SWIFT). You&apos;ll receive
                full instructions after completing this form.
              </p>
              <Suspense fallback={
                <div className="flex items-center justify-center py-16 text-warm-gray-400">
                  <RefreshCw size={20} className="animate-spin mr-2" /> Loading form...
                </div>
              }>
                <DonatePageClient />
              </Suspense>
            </div>

            {/* Trust Sidebar — takes 1/3 width */}
            <div className="space-y-6">

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

              {/* How SWIFT works */}
              <div className="bg-forest-green-50 rounded-2xl p-6 border border-forest-green-100">
                <h3 className="font-bold text-forest-green-900 mb-4">How Donating Works</h3>
                <ol className="space-y-3">
                  {SWIFT_STEPS.map(({ step, text }) => (
                    <li key={step} className="flex gap-3 items-start">
                      <span className="shrink-0 w-6 h-6 bg-forest-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                        {step}
                      </span>
                      <span className="text-warm-gray-600 text-sm leading-snug">{text}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Security note */}
              <div className="bg-white rounded-2xl shadow-md p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Shield size={18} className="text-forest-green-500" />
                  <h3 className="font-bold text-warm-gray-900">Safe & Transparent</h3>
                </div>
                <p className="text-warm-gray-500 text-sm leading-relaxed">
                  We never store your bank details. SWIFT transfers are a secure, bank-to-bank
                  international payment method used worldwide. Your donation goes directly
                  to our registered account.
                </p>
              </div>

              {/* Questions */}
              <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100">
                <h3 className="font-bold text-warm-gray-900 mb-3">Questions?</h3>
                <p className="text-warm-gray-500 text-sm mb-4">
                  We&apos;re happy to help — reach out any time.
                </p>
                <div className="space-y-2">
                  <a href={`mailto:${ORG.email}`} className="flex items-center gap-2 text-forest-green-600 text-sm hover:text-forest-green-700 transition-colors font-medium">
                    <Mail size={15} /> {ORG.email}
                  </a>
                  {ORG.phone.map((num) => (
                    <a key={num} href={`tel:${num}`} className="flex items-center gap-2 text-forest-green-600 text-sm hover:text-forest-green-700 transition-colors font-medium">
                      <Phone size={15} /> {num}
                    </a>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* US Donors — Check option */}
      <section className="py-14 px-6 bg-amber-50 border-y border-amber-100">
        <div className="container mx-auto max-w-3xl">
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center shrink-0">
              <FileText size={22} className="text-amber-600" />
            </div>
            <div>
              <p className="text-amber-700 text-xs font-semibold uppercase tracking-widest mb-1">
                US Donors
              </p>
              <h2 className="text-xl font-bold font-serif text-warm-gray-900 mb-3">
                Donating from the United States? Give by Check.
              </h2>
              <p className="text-warm-gray-600 text-sm leading-relaxed mb-5">
                US donors can give by personal or cashier&apos;s check — no international transfer
                fees required. Checks are received by First Baptist Sweetwater, a partner church
                that administers gifts designated to Healthy Steps Foundation.
              </p>
              <div className="bg-white rounded-xl border border-amber-200 p-5 space-y-3 text-sm max-w-md">
                <div className="flex justify-between gap-4">
                  <span className="text-warm-gray-500 shrink-0">Make check payable to</span>
                  <span className="font-semibold text-warm-gray-900 text-right">
                    {US_CHECK_DETAILS.payableTo}
                  </span>
                </div>
                <div className="flex justify-between gap-4 border-t border-warm-gray-100 pt-3">
                  <span className="text-warm-gray-500 shrink-0">Memo / note line</span>
                  <span className="font-semibold text-warm-gray-900 text-right">
                    {US_CHECK_DETAILS.memo}
                  </span>
                </div>
                <div className="flex justify-between gap-4 border-t border-warm-gray-100 pt-3">
                  <span className="text-warm-gray-500 shrink-0">Mailing address</span>
                  <span className={US_CHECK_DETAILS.mailingAddress ? 'font-semibold text-warm-gray-900 text-right' : 'italic text-warm-gray-400 text-right'}>
                    {US_CHECK_DETAILS.mailingAddress || 'Contact us for address'}
                  </span>
                </div>
              </div>
              <p className="text-warm-gray-500 text-xs mt-4">
                Questions about check donations?{' '}
                <a href={`mailto:${ORG.email}`} className="text-forest-green-600 font-medium hover:underline">
                  {ORG.email}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom trust bar */}
      <section className="py-10 px-6 bg-forest-green-900 text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {[
              { icon: Shield, label: 'Secure Transfer', desc: 'Bank-to-bank SWIFT — no card data stored' },
              { icon: Heart, label: '100% to Families', desc: 'Cover the bank fee so every cent reaches those in need' },
              { icon: Mail, label: 'Confirmed in 48hrs', desc: 'We acknowledge every gift by email within 2 business days' },
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
