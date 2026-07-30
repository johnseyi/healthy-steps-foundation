import type { Metadata } from 'next';
import Image from 'next/image';
import { Heart, Eye, Target, Users, Shield, BookOpen } from 'lucide-react';
import { ButtonLink } from '@/components/ui/Button';
import FadeUp from '@/components/ui/FadeUp';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Healthy Steps Foundation: our story, mission, vision, and values.',
};

const HERO_IMAGE        = '/images/field/mother-child.jpg';
const STORY_IMAGE       = '/images/field/connection.jpg';
const WHERE_WORK_IMAGE  = '/images/field/distribution-wide.jpg';

const VALUES = [
  {
    icon: BookOpen,
    title: 'Faith-Based',
    description:
      'We are guided by spiritual principles in everything we do. Our faith shapes how we serve, with humility, compassion, and an unshakeable belief in the dignity of every person.',
  },
  {
    icon: Users,
    title: 'Partnership',
    description:
      'We work alongside families, not just for them. Every family we serve is a partner in their own healing; we walk with them, not ahead of them.',
  },
  {
    icon: Shield,
    title: 'Dignity & Respect',
    description:
      'Every individual deserves to be treated with honour. We ensure our support never diminishes the worth of those we serve, no matter their circumstance.',
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
      'We build stronger families together. We are not outsiders doing work for communities; we are neighbours embedded in the life of Ndejje.',
  },
  {
    icon: Eye,
    title: 'Integrity',
    description:
      'We are transparent with our donors, partners, and the families we serve. Trust is the foundation of everything we do, and we protect it carefully.',
  },
];

export default function AboutPage(): React.JSX.Element {
  return (
    <>
      {/* Hero — split screen */}
      <section className="overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
          {/* Left — text panel */}
          <div className="bg-forest-green-900 text-white px-8 py-24 lg:px-16 flex items-center">
            <div className="max-w-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-0.5 bg-amber-400 shrink-0" />
                <span className="text-amber-300 text-sm font-medium tracking-wide">Who We Are</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-serif leading-[1.05] mb-6">
                About Healthy Steps Foundation
              </h1>
              <p className="text-forest-green-100 text-lg sm:text-xl leading-relaxed">
                A faith-based organization partnering with families in Wakiso, Uganda, providing
                holistic mental health support and the resources needed to build healthy, whole, and
                hopeful lives on a temporary basis. Our goal is to reach out to and serve 100 to 300
                families.
              </p>
            </div>
          </div>
          {/* Right — real community photo */}
          <div className="relative min-h-[55vh] lg:min-h-0">
            <Image
              src={HERO_IMAGE}
              alt="A Healthy Steps Foundation worker speaking with a mother carrying her baby at a community outreach in Wakiso, Uganda"
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <div className="w-10 h-0.5 bg-amber-500 mb-4" />
              <p className="text-sm font-semibold uppercase tracking-widest text-warm-gray-400 mb-4">Our Story</p>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-warm-gray-900 mb-6">
                Born from a Community&apos;s Need
              </h2>
              <div className="space-y-4 text-warm-gray-600 leading-relaxed">
                <p>
                  Healthy Steps Foundation was born from a deep conviction: that mental health wellness
                  cannot be separated from food on the table, clothes on a child&apos;s back, or a
                  parent&apos;s ability to earn a living. Families in the surrounding communities are
                  faced with many insecurities that left unaddressed leads permanent burdens on their
                  mental and spiritual health.
                </p>
                <p>
                  Rooted in faith and guided by a commitment to serve, we began partnering with families
                  by teaching them new techniques and skills measurable outcomes. Our model is holistic,
                  therefore, our goal is to walk alongside those we serve during the most challenging
                  times.
                </p>
                <p>
                  Today, Healthy Steps Foundation runs six integrated programs. We are a
                  community-focused organisation with a heart to serve neighbors as if they were our
                  families.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.15}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={STORY_IMAGE}
                  alt="A Healthy Steps Foundation volunteer speaking warmly with a woman receiving a food package in Wakiso"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 px-6 bg-forest-green-50">
        <div className="container mx-auto max-w-4xl">
          <FadeUp className="mb-10">
            <div className="w-10 h-0.5 bg-amber-500 mb-4" />
            <p className="text-sm font-semibold uppercase tracking-widest text-warm-gray-400 mb-2">Our Purpose</p>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeUp>
              <div className="bg-white rounded-2xl p-10 shadow-md border-t-4 border-forest-green-500 h-full">
                <div className="w-12 h-12 bg-forest-green-50 rounded-xl flex items-center justify-center mb-6">
                  <Eye size={24} className="text-forest-green-500" />
                </div>
                <h2 className="text-2xl font-bold font-serif text-warm-gray-900 mb-4">Our Vision</h2>
                <p className="text-warm-gray-600 leading-relaxed text-lg">
                  A Uganda where every individual, family, and community has access to mental health
                  wellness resources regardless of their income, circumstances, or background.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.15}>
              <div className="bg-white rounded-2xl p-10 shadow-md border-t-4 border-amber-500 h-full">
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

      {/* Where We Work */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeUp delay={0.15}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden order-2 lg:order-1 shadow-xl">
                <Image
                  src={WHERE_WORK_IMAGE}
                  alt="Healthy Steps Foundation team distributing food packages to community members in Ndejje, Wakiso"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeUp>

            <FadeUp>
              <div className="order-1 lg:order-2">
                <div className="w-10 h-0.5 bg-amber-500 mb-4" />
                <p className="text-sm font-semibold uppercase tracking-widest text-warm-gray-400 mb-4">Where We Work</p>
                <h2 className="text-3xl sm:text-4xl font-bold font-serif text-warm-gray-900 mb-6">
                  Ndejje, Wakiso, Uganda
                </h2>
                <div className="space-y-4 text-warm-gray-600 leading-relaxed">
                  <p>
                    We are based in Mirimu, Ndejje Ward, Ndejje Division, a growing semi-urban community
                    in Wakiso District, just outside Kampala in Uganda&apos;s Central Region.
                  </p>
                  <p>
                    Wakiso is one of Uganda&apos;s most populous districts, but rapid growth has created
                    significant gaps in mental health services, education access, and food security. Many
                    families live on less than $2 a day, with limited access to healthcare and schools
                    that require fees most cannot afford.
                  </p>
                  <p>
                    Healthy Steps Foundation is embedded in this community; we are not visitors.
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
          <FadeUp className="mb-14">
            <div className="w-10 h-0.5 bg-amber-400 mb-4" />
            <p className="text-sm font-semibold uppercase tracking-widest text-forest-green-300 mb-3">
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
            <div className="w-10 h-0.5 bg-amber-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold font-serif text-warm-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-warm-gray-500 text-lg mb-2">
              Every member of our team is committed to serving with Healthy Steps Foundation.
            </p>
            <p className="text-warm-gray-500 text-lg mb-8">
              Our team treats everyone like a family, regardless to where they live.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ButtonLink href="/staff" variant="secondary" size="lg">
                Meet Our Team
              </ButtonLink>
              <ButtonLink href="/donate" size="lg">
                Support Our Work
              </ButtonLink>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
