import type { Metadata } from 'next';
import Link from 'next/link';
import { Heart, Eye, Target, Users, Shield, BookOpen } from 'lucide-react';
import Button from '@/components/ui/Button';
import FadeUp from '@/components/ui/FadeUp';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Healthy Steps Foundation — our story, mission, vision, and values.',
};

const VALUES = [
  {
    icon: BookOpen,
    title: 'Faith-Based',
    description:
      'We are guided by spiritual principles in everything we do. Our faith shapes how we serve — with humility, compassion, and an unshakeable belief in the dignity of every person.',
  },
  {
    icon: Users,
    title: 'Partnership',
    description:
      'We work alongside families, not just for them. Every family we serve is a partner in their own healing — we walk with them, not ahead of them.',
  },
  {
    icon: Shield,
    title: 'Dignity & Respect',
    description:
      'Every individual deserves to be treated with honour. We ensure our support never diminishes the worth of those we serve — no matter their circumstance.',
  },
  {
    icon: Heart,
    title: 'Holistic Wellness',
    description:
      'We address mental, physical, and spiritual health together. True wellness cannot be achieved by treating only one dimension of a person\'s life.',
  },
  {
    icon: Target,
    title: 'Community',
    description:
      'We build stronger families together. We are not outsiders doing work for communities — we are neighbours embedded in the life of Ndejje.',
  },
  {
    icon: Eye,
    title: 'Integrity',
    description:
      'We are transparent with our donors, partners, and the families we serve. Trust is the foundation of everything we do — and we protect it carefully.',
  },
];

export default function AboutPage(): React.JSX.Element {
  return (
    <>
      {/* Hero */}
      <section className="bg-forest-green-900 text-white py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-forest-green-700/30 rounded-full -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full translate-y-1/2 -translate-x-1/3" />
        </div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4">Who We Are</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-serif leading-tight mb-6">
            About Healthy Steps Foundation
          </h1>
          <p className="text-forest-green-100 text-lg sm:text-xl leading-relaxed max-w-2xl">
            A faith-based organization partnering with families in Wakiso, Uganda — providing
            holistic mental health support and the resources needed to build healthy, whole, and
            hopeful lives on an as-needed basis.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <FadeUp>
              <p className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-4">Our Story</p>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-warm-gray-900 mb-6">
                Born from a Community's Need
              </h2>
              <div className="space-y-4 text-warm-gray-600 leading-relaxed">
                <p>
                  Healthy Steps Foundation was born from a deep conviction: that mental health wellness
                  cannot be separated from food on the table, clothes on a child&apos;s back, or a
                  parent&apos;s ability to earn a living. Families in Ndejje, Wakiso were facing temporary
                  insecurities that, left unaddressed, were becoming permanent burdens on their mental and
                  spiritual health.
                </p>
                <p>
                  Rooted in faith and guided by a commitment to dignity, we began partnering with families
                  — not doing work for them, but walking alongside them through their most difficult
                  seasons. Our model is holistic and as-needed: emergency food support, clothing, school
                  fees, medical care, vocational training, and mental wellness resources — each addressing
                  a different dimension of the same underlying need.
                </p>
                <p>
                  Today, Healthy Steps Foundation runs six integrated programs across the Ndejje Division.
                  We are a community-embedded organisation — our staff live here, our families are
                  neighbours, and our work is shaped entirely by the people we serve.
                </p>
              </div>
            </FadeUp>

            {/* Image placeholder */}
            <FadeUp delay={0.15}>
              <div className="aspect-[4/3] bg-forest-green-100 rounded-2xl flex items-center justify-center">
                <div className="text-center text-forest-green-400">
                  <Users size={64} className="mx-auto mb-3 opacity-40" />
                  <p className="text-sm font-medium opacity-60">Community photo coming soon</p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 px-6 bg-forest-green-50">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <FadeUp>
            <div className="bg-white rounded-2xl p-10 shadow-md border-t-4 border-forest-green-500">
              <div className="w-12 h-12 bg-forest-green-50 rounded-xl flex items-center justify-center mb-6">
                <Eye size={24} className="text-forest-green-500" />
              </div>
              <h2 className="text-2xl font-bold font-serif text-warm-gray-900 mb-4">Our Vision</h2>
              <p className="text-warm-gray-600 leading-relaxed text-lg">
                A Uganda where every family has the mental health support, education, and resources
                to thrive — regardless of income, circumstance, or background.
              </p>
            </div>
            </FadeUp>

            {/* Mission */}
            <FadeUp delay={0.15}>
            <div className="bg-white rounded-2xl p-10 shadow-md border-t-4 border-amber-500">
              <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-6">
                <Target size={24} className="text-amber-500" />
              </div>
              <h2 className="text-2xl font-bold font-serif text-warm-gray-900 mb-4">Our Mission</h2>
              <p className="text-warm-gray-600 leading-relaxed text-lg">
                Healthy Steps Foundation is a faith-based organization that seeks to partner with
                families to improve mental health wellness. Our holistic approach includes researching
                and introducing techniques and programs designed to treat individuals suffering with
                mental health challenges in a respectful and dignified manner.
              </p>
            </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Uganda Context */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image placeholder */}
            <FadeUp delay={0.15}>
            <div className="aspect-[4/3] bg-amber-50 rounded-2xl flex items-center justify-center order-2 lg:order-1">
              <div className="text-center text-amber-400">
                <Target size={64} className="mx-auto mb-3 opacity-40" />
                <p className="text-sm font-medium opacity-60">Ndejje community photo coming soon</p>
              </div>
            </div>
            </FadeUp>

            {/* Text */}
            <FadeUp>
              <div className="order-1 lg:order-2">
                <p className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-4">Where We Work</p>
                <h2 className="text-3xl sm:text-4xl font-bold font-serif text-warm-gray-900 mb-6">
                  Ndejje, Wakiso — Uganda
                </h2>
                <div className="space-y-4 text-warm-gray-600 leading-relaxed">
                  <p>
                    We are based in Mirimu, Ndejje Ward, Ndejje Division — a growing semi-urban community
                    in Wakiso District, just outside Kampala in Uganda&apos;s Central Region.
                  </p>
                  <p>
                    Wakiso is one of Uganda&apos;s most populous districts, but rapid growth has created
                    significant gaps in mental health services, education access, and food security. Many
                    families live on less than $2 a day, with limited access to healthcare and schools
                    that require fees most cannot afford.
                  </p>
                  <p>
                    Healthy Steps Foundation is embedded in this community — we are not visitors.
                    Our staff live here, our families are neighbours, and our work is shaped by the
                    people we serve.
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-6 bg-forest-green-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <FadeUp className="text-center mb-14">
            <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
              What Guides Us
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif">Our Core Values</h2>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map(({ icon: Icon, title, description }, i) => (
              <FadeUp key={title} delay={i * 0.08}>
              <div className="bg-forest-green-800/60 rounded-2xl p-8 border border-forest-green-700/50 h-full">
                <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center mb-5">
                  <Icon size={24} className="text-amber-400" />
                </div>
                <h3 className="text-lg font-bold mb-3">{title}</h3>
                <p className="text-forest-green-200 text-sm leading-relaxed">{description}</p>
              </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="container mx-auto max-w-3xl text-center">
          <FadeUp>
          <h2 className="text-3xl font-bold font-serif text-warm-gray-900 mb-4">
            Meet the People Behind the Work
          </h2>
          <p className="text-warm-gray-500 text-lg mb-8">
            Our team is made up of passionate, community-rooted individuals committed to walking
            alongside families every day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/staff">
              <Button variant="secondary" size="lg">Meet Our Team</Button>
            </Link>
            <Link href="/donate">
              <Button variant="primary" size="lg">Support Our Work</Button>
            </Link>
          </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
