import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, MapPin, Heart, Handshake, Clock, ExternalLink } from 'lucide-react';
import { ORG } from '@/lib/constants';
import FadeUp from '@/components/ui/FadeUp';
import ContactForm from '@/components/contact/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    "Get in touch with Healthy Steps Foundation in Ndejje, Wakiso, Uganda. Whether you need support, want to partner, or have a question — we'd love to hear from you.",
};

const HERO_IMAGE = '/images/WhatsApp%20Image%202026-05-21%20at%2020.31.38%20%2811%29.jpeg';

const QUICK_LINKS = [
  {
    icon: Heart,
    title: 'Need Support?',
    description:
      'If you or your family need assistance, we\'re here to help. Reach out — no judgment, just care.',
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

// Ndejje Division, Wakiso District, Uganda — approximate coordinates
const MAP_SRC =
  'https://maps.google.com/maps?q=Ndejje+Division+Wakiso+Uganda&t=&z=14&ie=UTF8&iwloc=&output=embed';

export default function ContactPage(): React.JSX.Element {
  const locationParts = [
    ORG.location.village,
    ORG.location.ward,
    ORG.location.division,
    ORG.location.district,
    ORG.location.country,
  ];

  return (
    <>
      {/* Hero — full-bleed overlay */}
      <section className="relative min-h-[65vh] flex items-center overflow-hidden">
        <Image
          src={HERO_IMAGE}
          alt="Healthy Steps Foundation staff member conducting intake with community families in Ndejje, Uganda"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-green-900/95 via-forest-green-900/70 to-forest-green-900/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-green-900/55 via-transparent to-transparent" />

        <div className="relative z-10 container mx-auto px-6 py-24">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-0.5 bg-amber-400 shrink-0" />
              <span className="text-amber-300 text-sm font-medium tracking-wide">Reach Out</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-serif leading-[1.05] mb-6 text-white">
              Get in Touch
            </h1>
            <p className="text-white/80 text-lg sm:text-xl leading-relaxed max-w-xl">
              Whether you need support, want to partner with us, or just have a question —
              we&apos;d love to hear from you. No enquiry is too small.
            </p>
          </div>
        </div>
      </section>

      {/* Quick-contact strip */}
      <section className="bg-forest-green-900 border-t border-forest-green-700 py-5 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">

            <a href={`mailto:${ORG.email}`} className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-amber-500/20 transition-colors">
                <Mail size={18} className="text-amber-400" />
              </div>
              <div>
                <p className="text-forest-green-400 text-xs font-semibold uppercase tracking-wide">Email</p>
                <p className="text-white text-sm font-medium group-hover:text-amber-300 transition-colors break-all">
                  {ORG.email}
                </p>
              </div>
            </a>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                <Phone size={18} className="text-amber-400" />
              </div>
              <div>
                <p className="text-forest-green-400 text-xs font-semibold uppercase tracking-wide">Phone</p>
                <div className="flex flex-col gap-0.5">
                  {ORG.phone.map((num) => (
                    <a
                      key={num}
                      href={`tel:${num}`}
                      className="text-white text-sm font-medium hover:text-amber-300 transition-colors"
                    >
                      {num}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                <Clock size={18} className="text-amber-400" />
              </div>
              <div>
                <p className="text-forest-green-400 text-xs font-semibold uppercase tracking-wide">Response Time</p>
                <p className="text-white text-sm font-medium">Within 1–2 business days</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

            {/* Contact Form — 2 cols */}
            <div className="lg:col-span-2">
              <FadeUp>
                <div className="w-10 h-0.5 bg-amber-500 mb-4" />
                <p className="text-sm font-semibold uppercase tracking-widest text-warm-gray-400 mb-2">
                  Send a Message
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold font-serif text-warm-gray-900 mb-2">
                  We&apos;d Love to Hear From You
                </h2>
                <p className="text-warm-gray-500 mb-8">
                  Fill in the form below and we&apos;ll get back to you as soon as we can.
                </p>
                <ContactForm />
              </FadeUp>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">

              {/* Location card */}
              <FadeUp delay={0.1}>
                <div className="bg-white rounded-2xl p-7 shadow-md border border-warm-gray-100">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 bg-forest-green-50 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin size={18} className="text-forest-green-600" />
                    </div>
                    <h3 className="font-bold text-warm-gray-900 font-serif">Our Location</h3>
                  </div>
                  <div className="space-y-1 mb-5">
                    {locationParts.map((part) => (
                      <p key={part} className="text-warm-gray-600 text-sm leading-relaxed">
                        {part}
                      </p>
                    ))}
                  </div>
                  <a
                    href="https://maps.google.com/?q=Ndejje+Division,+Wakiso+District,+Uganda"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-forest-green-600 hover:text-forest-green-700 group transition-colors"
                  >
                    Open in Google Maps
                    <ExternalLink size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </FadeUp>

              {/* Quick links */}
              {QUICK_LINKS.map(({ icon: Icon, title, description, linkText, href }, i) => (
                <FadeUp key={title} delay={0.18 + i * 0.08}>
                  <div className="bg-white rounded-2xl p-7 shadow-md border border-warm-gray-100">
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
                      <span className="group-hover:translate-x-0.5 transition-transform inline-block">→</span>
                    </Link>
                  </div>
                </FadeUp>
              ))}

            </div>
          </div>
        </div>
      </section>

      {/* Live Map */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <FadeUp className="mb-8">
            <div className="w-10 h-0.5 bg-amber-500 mb-4" />
            <p className="text-sm font-semibold uppercase tracking-widest text-warm-gray-400 mb-2">Find Us</p>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-warm-gray-900">
              Ndejje Division, Wakiso — Uganda
            </h2>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="rounded-2xl overflow-hidden shadow-xl border border-warm-gray-100" style={{ height: '480px' }}>
              <iframe
                src={MAP_SRC}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Healthy Steps Foundation — Ndejje Division, Wakiso, Uganda"
              />
            </div>
            <p className="text-warm-gray-400 text-xs mt-3 text-center">
              Mirimu, Ndejje Ward, Ndejje Division, Wakiso District, Uganda
            </p>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
