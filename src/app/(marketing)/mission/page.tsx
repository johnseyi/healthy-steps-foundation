import type { Metadata } from 'next';
import Link from 'next/link';
import { Heart, Eye, Target, Users, Shield, BookOpen } from 'lucide-react';
import Button from '@/components/ui/Button';
import FadeUp from '@/components/ui/FadeUp';

export const metadata: Metadata = {
  title: 'Our Mission',
  description: 'The mission, vision, and values driving Healthy Steps Foundation — a faith-based organization partnering with families in Uganda to improve mental health wellness.',
};

const PILLARS = [
  {
    icon: BookOpen,
    title: 'Faith-Grounded',
    description:
      'Our work flows from a conviction that every person is made with inherent worth. Faith is not a footnote — it shapes how we serve, how we listen, and how we walk alongside families in crisis.',
  },
  {
    icon: Users,
    title: 'Partnership, Not Charity',
    description:
      'We partner with families rather than doing things for them. Every family we serve has strengths, agency, and the capacity to move forward — our role is to come alongside them, not to lead from above.',
  },
  {
    icon: Heart,
    title: 'Holistic by Design',
    description:
      'Mental wellness cannot be isolated from hunger, illness, or lack of education. Our six programs work together to address the whole family — because a person\'s wellbeing is more than any one need.',
  },
  {
    icon: Shield,
    title: 'Dignity in Every Interaction',
    description:
      'No family should feel shame for needing help. Our processes are designed to be respectful, private, and honoring — from how we assess needs to how we distribute support.',
  },
  {
    icon: Target,
    title: 'As-Needed, Not Dependency',
    description:
      'We provide emergency support through temporary crises — not long-term welfare. Our goal is always to help families stabilise and become self-sufficient, then step back as they move forward.',
  },
  {
    icon: Eye,
    title: 'Transparency & Trust',
    description:
      'We are accountable to the families we serve, to our donors, and to our community. We handle every resource entrusted to us with care, honesty, and integrity.',
  },
];

export default function MissionPage(): React.JSX.Element {
  return (
    <>
      {/* Hero */}
      <section className="bg-forest-green-900 text-white py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-forest-green-700/30 rounded-full -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full translate-y-1/2 -translate-x-1/3" />
        </div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4">Why We Exist</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-serif leading-tight mb-6">
            Our Mission
          </h1>
          <p className="text-forest-green-100 text-lg sm:text-xl leading-relaxed max-w-2xl">
            A faith-based approach to mental health wellness — partnering with families in Uganda
            to address the temporary insecurities that prevent people from flourishing.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <FadeUp>
              <p className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-4">Mission Statement</p>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-warm-gray-900 mb-6">
                What We Are Called to Do
              </h2>
              <p className="text-warm-gray-600 leading-relaxed text-lg">
                Healthy Steps Foundation is a faith-based organization that seeks to partner with
                families to improve mental health wellness. Our holistic approach includes researching
                and introducing techniques and programs designed to treat individuals suffering with
                mental health challenges in a respectful and dignified manner.
              </p>
            </FadeUp>
            <FadeUp delay={0.15}>
              <blockquote className="bg-forest-green-50 border-l-4 border-forest-green-500 rounded-r-2xl p-8">
                <p className="text-forest-green-800 text-xl font-serif font-semibold leading-relaxed italic">
                  &ldquo;We believe that mental health cannot be separated from the physical, economic,
                  and spiritual realities of everyday life. True wellness requires all of these to be
                  addressed — together.&rdquo;
                </p>
              </blockquote>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 px-6 bg-amber-500">
        <div className="container mx-auto max-w-4xl text-center">
          <FadeUp>
            <p className="text-amber-100 text-sm font-semibold uppercase tracking-widest mb-4">Vision Statement</p>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white mb-6">
              What We Are Working Toward
            </h2>
            <p className="text-amber-100 text-xl leading-relaxed max-w-2xl mx-auto">
              A Uganda where every family has the mental health support, education, and resources
              to thrive — regardless of income, circumstance, or background.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Holistic Model */}
      <section className="py-20 px-6 bg-forest-green-50">
        <div className="container mx-auto max-w-4xl">
          <FadeUp className="mb-12">
            <p className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-3">Our Approach</p>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-warm-gray-900 mb-5">
              Holistic Care for Temporary Crises
            </h2>
            <p className="text-warm-gray-600 text-lg leading-relaxed max-w-2xl">
              We recognise that the short-term, temporary insecurities families face — food, clothing,
              medical emergencies, school fees — are not separate from their mental health. They are
              the same crisis, experienced in different dimensions. Our six programs work together
              to address all of them.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { label: 'Spiritual', desc: 'Faith-grounded support that honours the whole person' },
              { label: 'Mental', desc: 'Resources and care for mental health and emotional wellness' },
              { label: 'Physical', desc: 'Food, clothing, and medical care to meet bodily needs' },
              { label: 'Economic', desc: 'Vocational training to build sustainable household income' },
              { label: 'Educational', desc: 'Keeping children in school through tuition support' },
              { label: 'Relational', desc: 'Walking with families — not doing things for them' },
            ].map(({ label, desc }, i) => (
              <FadeUp key={label} delay={i * 0.07}>
                <div className="bg-white rounded-xl p-6 border border-warm-gray-100 shadow-sm h-full">
                  <div className="text-amber-500 font-bold text-sm uppercase tracking-widest mb-2">{label}</div>
                  <p className="text-warm-gray-600 text-sm leading-relaxed">{desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Guiding Principles */}
      <section className="py-20 px-6 bg-forest-green-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <FadeUp className="text-center mb-14">
            <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
              How We Work
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif">
              The Principles That Guide Us
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PILLARS.map(({ icon: Icon, title, description }, i) => (
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

      {/* CTA */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="container mx-auto max-w-3xl text-center">
          <FadeUp>
            <h2 className="text-3xl font-bold font-serif text-warm-gray-900 mb-4">
              Partner With Us
            </h2>
            <p className="text-warm-gray-500 text-lg mb-8 max-w-xl mx-auto">
              Every donation directly supports a family working through a temporary crisis —
              with dignity, faith, and holistic care at the centre.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/donate">
                <Button variant="primary" size="lg">Donate Now</Button>
              </Link>
              <Link href="/programs">
                <Button variant="secondary" size="lg">See Our Programs</Button>
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
