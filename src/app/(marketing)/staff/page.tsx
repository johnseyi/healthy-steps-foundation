import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import StaffCard from '@/components/staff/StaffCard';
import Button from '@/components/ui/Button';
import FadeUp from '@/components/ui/FadeUp';
import { STAFF_MEMBERS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Our Staff',
  description: 'Meet the dedicated team behind Healthy Steps Foundation in Wakiso, Uganda.',
};

const HERO_IMAGE = '/images/WhatsApp%20Image%202026-05-21%20at%2020.31.38%20%2814%29.jpeg';
const TEAM_IMAGE = '/images/WhatsApp%20Image%202026-05-21%20at%2020.31.38%20%2813%29.jpeg';

export default function StaffPage(): React.JSX.Element {
  return (
    <>
      {/* Hero — full-bleed overlay */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden">
        <Image
          src={HERO_IMAGE}
          alt="Healthy Steps Foundation staff members greeting children at a community outreach event in Ndejje, Uganda"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-green-900/95 via-forest-green-900/70 to-forest-green-900/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-green-900/50 via-transparent to-transparent" />

        <div className="relative z-10 container mx-auto px-6 py-28">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-0.5 bg-amber-400 shrink-0" />
              <span className="text-amber-300 text-sm font-medium tracking-wide">The Team</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-serif leading-[1.05] mb-6 text-white">
              Meet Our Staff
            </h1>
            <p className="text-white/80 text-lg sm:text-xl leading-relaxed">
              Every member of our team is rooted in the Ndejje community — neighbours
              dedicated to walking alongside families in their most difficult moments.
            </p>
          </div>
        </div>
      </section>

      {/* Staff Grid */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="container mx-auto max-w-6xl">
          <FadeUp className="mb-12">
            <div className="w-10 h-0.5 bg-amber-500 mb-4" />
            <p className="text-sm font-semibold uppercase tracking-widest text-warm-gray-400 mb-2">Our People</p>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-warm-gray-900">
              Community-Rooted Leadership
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {STAFF_MEMBERS.map((member, i) => (
              <FadeUp key={member.id} delay={i * 0.08}>
                <StaffCard member={member} />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Values strip */}
      <section className="py-16 px-6 bg-forest-green-50">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {[
              { number: '100%', label: 'Community-Based', sub: 'Our team lives where they work' },
              { number: '6', label: 'Programs Managed', sub: 'Every program has a dedicated lead' },
              { number: '5+', label: 'Languages Spoken', sub: 'Luganda, English & local dialects' },
            ].map(({ number, label, sub }, i) => (
              <FadeUp key={label} delay={i * 0.1}>
                <div className="p-6">
                  <div className="text-5xl font-black text-forest-green-600 font-serif mb-1">{number}</div>
                  <div className="font-semibold text-warm-gray-800 mb-1">{label}</div>
                  <div className="text-sm text-warm-gray-500">{sub}</div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Team photo */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="container mx-auto max-w-5xl">
          <FadeUp>
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={TEAM_IMAGE}
                alt="Healthy Steps Foundation staff members with community children at an outreach event in Ndejje"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 1024px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-green-900/30 to-transparent" />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20 px-6 bg-forest-green-900 text-white">
        <div className="container mx-auto max-w-3xl text-center">
          <FadeUp>
            <div className="w-10 h-0.5 bg-amber-400 mx-auto mb-6" />
            <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4">
              Get Involved
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif mb-5">
              Join Our Team
            </h2>
            <p className="text-forest-green-200 text-lg leading-relaxed max-w-xl mx-auto mb-10">
              Are you passionate about mental health, community development, or family support?
              We&apos;d love to hear from you — whether as a staff member, volunteer, or partner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="primary" size="lg" className="w-full sm:w-auto px-10">
                  Get in Touch
                </Button>
              </Link>
              <Link href="/donate">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto px-10 border-forest-green-500 text-forest-green-200 hover:bg-forest-green-800"
                >
                  Support the Team
                </Button>
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
