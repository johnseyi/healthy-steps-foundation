import type { Metadata } from 'next';
import Link from 'next/link';
import { Heart, MessageCircle } from 'lucide-react';
import { TESTIMONIALS, PROGRAMS } from '@/lib/constants';
import FadeUp from '@/components/ui/FadeUp';
import Button from '@/components/ui/Button';
import StoriesGrid from '@/components/stories/StoriesGrid';

export const metadata: Metadata = {
  title: 'Stories | Healthy Steps Foundation',
  description:
    'Real stories from families impacted by Healthy Steps Foundation — hope, resilience, and dignity in Ndejje, Uganda.',
};

const PROGRAM_NAMES = PROGRAMS.map((p) => p.name);

export default function StoriesPage(): React.JSX.Element {
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
            Impact Stories
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-serif leading-tight mb-6">
            Real Families, Real Change
          </h1>
          <p className="text-forest-green-100 text-lg sm:text-xl leading-relaxed max-w-2xl">
            Behind every program is a family with a story. Here are a few of the lives touched
            by Healthy Steps Foundation — told with permission, shared with dignity.
          </p>
        </div>
      </section>

      {/* Stories grid */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="container mx-auto max-w-6xl">
          <FadeUp className="mb-12">
            <p className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-3">
              Community Voices
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-warm-gray-900">
              Stories from Ndejje
            </h2>
          </FadeUp>

          <StoriesGrid testimonials={TESTIMONIALS} />

          {/* More stories note */}
          <FadeUp delay={0.2} className="mt-14">
            <div className="bg-forest-green-50 rounded-2xl p-8 sm:p-10 text-center max-w-2xl mx-auto">
              <div className="w-12 h-12 bg-forest-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart size={22} className="text-forest-green-500" />
              </div>
              <h3 className="font-bold font-serif text-warm-gray-900 text-xl mb-3">
                More Stories Coming Soon
              </h3>
              <p className="text-warm-gray-600 text-sm leading-relaxed">
                Every family we serve has a story worth telling. As we collect more testimonials
                from the community, we will share them here — always with full permission, always
                with dignity and care.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Programs that create stories */}
      <section className="py-20 px-6 bg-forest-green-50">
        <div className="container mx-auto max-w-4xl">
          <FadeUp className="text-center mb-10">
            <p className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-3">
              Where Change Happens
            </p>
            <h2 className="text-3xl font-bold font-serif text-warm-gray-900 mb-4">
              Six Programs, Countless Stories
            </h2>
            <p className="text-warm-gray-500 text-lg max-w-xl mx-auto">
              Each story comes from one of our six holistic programs. Together, they address every
              dimension of a family&apos;s wellbeing.
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="flex flex-wrap justify-center gap-3">
              {PROGRAM_NAMES.map((name) => (
                <span
                  key={name}
                  className="px-4 py-2 bg-white rounded-full text-sm font-semibold text-forest-green-700 shadow-sm border border-forest-green-100"
                >
                  {name}
                </span>
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={0.18} className="text-center mt-8">
            <Link href="/programs">
              <Button variant="secondary" size="md">
                Explore All Programs
              </Button>
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-forest-green-900 text-white">
        <div className="container mx-auto max-w-3xl text-center">
          <FadeUp>
            <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4">
              Be Part of the Story
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif mb-5">
              Your Support Writes the Next Chapter
            </h2>
            <p className="text-forest-green-200 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Every donation helps a family through a crisis — and creates a story of hope,
              resilience, and dignity in Ndejje.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Link href="/donate">
                <Button variant="primary" size="lg">
                  <Heart size={20} />
                  Donate Now
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10"
                >
                  <MessageCircle size={20} />
                  Share Your Story
                </Button>
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
