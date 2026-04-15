import type { Metadata } from 'next';
import Link from 'next/link';
import {
  UtensilsCrossed, Shirt, GraduationCap, Briefcase, Stethoscope, BookOpen,
  Heart, Users, ArrowRight,
} from 'lucide-react';
import ProgramCard from '@/components/programs/ProgramCard';
import Button from '@/components/ui/Button';
import FadeUp from '@/components/ui/FadeUp';
import { PROGRAMS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Our Programs',
  description: 'Six programs supporting families in Wakiso, Uganda — food, clothing, education, vocation, medical care, and mental health resources.',
};

const PROGRAM_ICONS = [UtensilsCrossed, Shirt, GraduationCap, Briefcase, Stethoscope, BookOpen];

export default function ProgramsPage(): React.JSX.Element {
  return (
    <>
      {/* Hero */}
      <section className="bg-forest-green-900 text-white py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-forest-green-700/30 rounded-full -translate-y-1/3 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full translate-y-1/2 -translate-x-1/4" />
        </div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4">What We Do</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-serif leading-tight mb-6">
            Our Programs
          </h1>
          <p className="text-forest-green-100 text-lg sm:text-xl leading-relaxed max-w-2xl">
            Six carefully designed programs that work together to support the whole family —
            not just one need, but every dimension of a flourishing life.
          </p>
        </div>
      </section>

      {/* Why 6 programs — intro strip */}
      <section className="bg-amber-500 py-12 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { icon: Heart, label: 'Holistic Approach', desc: 'We address mental health, food, education, clothing, medical, and skills — because real change is never one-dimensional.' },
              { icon: Users, label: 'Family-Centred', desc: 'Every program is designed around the whole family unit — parents, children, and elderly relatives all matter.' },
              { icon: ArrowRight, label: 'Interconnected', desc: 'Our programs link together. A child in tuition support also benefits from our food and resource programs.' },
            ].map(({ icon: Icon, label, desc }, i) => (
              <FadeUp key={label} delay={i * 0.1}>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Icon size={22} className="text-white" />
                  </div>
                  <h3 className="font-bold text-white text-lg">{label}</h3>
                  <p className="text-amber-100 text-sm leading-relaxed">{desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Program Cards Grid */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="container mx-auto max-w-6xl">
          <FadeUp className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-warm-gray-900 mb-4">
              Explore All Six Programs
            </h2>
            <p className="text-warm-gray-500 text-lg max-w-2xl mx-auto">
              Click any program to learn how it works, who it serves, and how your donation makes an impact.
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROGRAMS.map((program, i) => (
              <FadeUp key={program.slug} delay={i * 0.08}>
                <ProgramCard program={program} />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* How they connect — visual flow */}
      <section className="py-20 px-6 bg-forest-green-50">
        <div className="container mx-auto max-w-5xl">
          <FadeUp className="text-center mb-12">
            <p className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-3">The Bigger Picture</p>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-warm-gray-900 mb-4">
              Programs That Work Together
            </h2>
            <p className="text-warm-gray-500 text-lg max-w-2xl mx-auto">
              A family enrolled in Children Tuition is also more likely to access Food Closet support.
              An Adult Vocation graduate no longer needs Family Medical emergency funding.
              Each program strengthens the others.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PROGRAMS.map((program, i) => {
              const Icon = PROGRAM_ICONS[i];
              return (
                <FadeUp key={program.slug} delay={i * 0.07}>
                  <Link
                    href={`/programs/${program.slug}`}
                    className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm border border-warm-gray-100 hover:shadow-md hover:border-forest-green-200 hover:-translate-y-0.5 transition-all duration-200 group"
                  >
                    <div className="w-10 h-10 bg-forest-green-50 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-forest-green-100 transition-colors">
                      <Icon size={20} className="text-forest-green-500" />
                    </div>
                    <span className="text-sm font-semibold text-warm-gray-800 group-hover:text-forest-green-700 leading-snug">
                      {program.name}
                    </span>
                  </Link>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* Donate CTA */}
      <section className="py-20 px-6 bg-forest-green-900 text-white">
        <div className="container mx-auto max-w-3xl text-center">
          <FadeUp>
            <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4">Support the Work</p>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif mb-5">
              Fund a Program That Matters to You
            </h2>
            <p className="text-forest-green-200 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              When you donate, you can choose exactly which program your gift supports — or let us direct
              it where it is needed most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/donate">
                <Button variant="primary" size="lg" className="w-full sm:w-auto px-10">Donate Now</Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto px-10 border-forest-green-500 text-forest-green-200 hover:bg-forest-green-800">
                  Partner With Us
                </Button>
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
