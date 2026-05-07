import type { Metadata } from 'next';
import Link from 'next/link';
import { Mail, Phone, MapPin, Heart, Handshake } from 'lucide-react';
import { ORG } from '@/lib/constants';
import FadeUp from '@/components/ui/FadeUp';
import ContactForm from '@/components/contact/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | Healthy Steps Foundation',
  description:
    "Get in touch with Healthy Steps Foundation. Whether you need support, want to partner with us, or have a question — we'd love to hear from you.",
};

const QUICK_LINKS = [
  {
    icon: Heart,
    title: 'Need Support?',
    description:
      'If you or your family need assistance, we\'re here to help. Reach out — no judgment, just support.',
    linkText: 'Apply for Help',
    href: '/get-help',
  },
  {
    icon: Handshake,
    title: 'Want to Partner?',
    description:
      'We welcome partnerships with churches, NGOs, businesses, and individuals who share our values.',
    linkText: 'Support Our Work',
    href: '/donate',
  },
];

export default function ContactPage(): React.JSX.Element {
  const locationString = [
    ORG.location.village,
    ORG.location.ward,
    ORG.location.division,
    ORG.location.district,
    ORG.location.region,
    ORG.location.country,
  ].join(', ');

  return (
    <>
      {/* Hero */}
      <section className="bg-forest-green-900 text-white py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-forest-green-700/30 rounded-full -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full translate-y-1/2 -translate-x-1/3" />
        </div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Reach Out
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-serif leading-tight mb-6">
            Get in Touch
          </h1>
          <p className="text-forest-green-100 text-lg sm:text-xl leading-relaxed max-w-2xl">
            Whether you need support, want to partner with us, or just have a question — we&apos;d
            love to hear from you. No enquiry is too small.
          </p>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

            {/* Contact Form — 2 cols wide */}
            <div className="lg:col-span-2">
              <FadeUp>
                <h2 className="text-2xl font-bold font-serif text-warm-gray-900 mb-1">
                  Send Us a Message
                </h2>
                <p className="text-warm-gray-500 mb-8">
                  We aim to respond within 1–2 business days.
                </p>
                <ContactForm />
              </FadeUp>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">

              {/* Contact details card */}
              <FadeUp delay={0.1}>
                <div className="bg-white rounded-2xl p-7 shadow-md">
                  <h3 className="font-bold text-warm-gray-900 mb-5 text-lg font-serif">
                    Contact Details
                  </h3>
                  <div className="space-y-5">
                    <a
                      href={`mailto:${ORG.email}`}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-10 h-10 bg-forest-green-50 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-forest-green-100 transition-colors">
                        <Mail size={18} className="text-forest-green-500" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-warm-gray-400 uppercase tracking-wide mb-0.5">
                          Email
                        </p>
                        <p className="text-forest-green-600 font-medium text-sm group-hover:text-forest-green-700 transition-colors break-all">
                          {ORG.email}
                        </p>
                      </div>
                    </a>

                    {ORG.phone.map((num) => (
                      <a
                        key={num}
                        href={`tel:${num}`}
                        className="flex items-start gap-4 group"
                      >
                        <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-amber-100 transition-colors">
                          <Phone size={18} className="text-amber-500" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-warm-gray-400 uppercase tracking-wide mb-0.5">
                            Phone
                          </p>
                          <p className="text-warm-gray-800 font-medium text-sm group-hover:text-warm-gray-900 transition-colors">
                            {num}
                          </p>
                        </div>
                      </a>
                    ))}

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-forest-green-50 rounded-xl flex items-center justify-center shrink-0">
                        <MapPin size={18} className="text-forest-green-500" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-warm-gray-400 uppercase tracking-wide mb-0.5">
                          Location
                        </p>
                        <p className="text-warm-gray-700 text-sm leading-relaxed">
                          {locationString}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeUp>

              {/* Quick links */}
              {QUICK_LINKS.map(({ icon: Icon, title, description, linkText, href }, i) => (
                <FadeUp key={title} delay={0.18 + i * 0.08}>
                  <div className="bg-white rounded-2xl p-7 shadow-md">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 bg-amber-50 rounded-lg flex items-center justify-center shrink-0">
                        <Icon size={18} className="text-amber-500" />
                      </div>
                      <h4 className="font-bold text-warm-gray-900">{title}</h4>
                    </div>
                    <p className="text-warm-gray-600 text-sm leading-relaxed mb-4">
                      {description}
                    </p>
                    <Link
                      href={href}
                      className="text-sm font-semibold text-forest-green-600 hover:text-forest-green-700 inline-flex items-center gap-1.5 group transition-colors"
                    >
                      {linkText}
                      <span className="group-hover:translate-x-0.5 transition-transform inline-block">
                        →
                      </span>
                    </Link>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
