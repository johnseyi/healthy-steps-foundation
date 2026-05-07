import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Users } from 'lucide-react';
import StaffCard from '@/components/staff/StaffCard';
import Button from '@/components/ui/Button';
import FadeUp from '@/components/ui/FadeUp';
import { STAFF_MEMBERS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Our Staff',
  description: 'Meet the dedicated team behind Healthy Steps Foundation in Wakiso, Uganda.',
};

export default function StaffPage(): React.JSX.Element {
  return (
    <>
      {/* Hero */}
      <section className="bg-forest-green-900 text-white py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-80 h-80 bg-forest-green-700/30 rounded-full -translate-y-1/3 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-56 h-56 bg-amber-500/10 rounded-full translate-y-1/2 -translate-x-1/4" />
        </div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4">
            The Team
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-serif leading-tight mb-5">
            Meet Our Staff
          </h1>
          <p className="text-forest-green-100 text-lg sm:text-xl leading-relaxed max-w-2xl">
            Every member of our team is rooted in the Ndejje community — neighbours
            dedicated to walking alongside families in their most difficult moments.
          </p>
        </div>
      </section>

      {/* Staff Grid */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="container mx-auto max-w-6xl">
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
                  <div className="text-4xl font-black text-forest-green-500 font-serif mb-1">{number}</div>
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
            <div className="relative aspect-video rounded-2xl overflow-hidden">
              <Image
                src="/images/staff-team.jpg"
                alt="Community members gathered together in the Ndejje area"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 1024px"
              />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20 px-6 bg-forest-green-900 text-white">
        <div className="container mx-auto max-w-3xl text-center">
          <FadeUp>
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
