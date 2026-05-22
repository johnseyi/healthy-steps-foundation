import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
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

const HERO_IMAGE = '/images/WhatsApp%20Image%202026-05-21%20at%2020.31.34%20%281%29.jpeg';
const PROGRAM_ICONS = [UtensilsCrossed, Shirt, GraduationCap, Briefcase, Stethoscope, BookOpen];

const WHY_SIX = [
  {
    icon: Heart,
    label: 'Holistic Approach',
    desc: 'We address mental health, food, education, clothing, medical, and skills — because real change is never one-dimensional.',
  },
  {
    icon: Users,
    label: 'Family-Centred',
    desc: 'Every program is designed around the whole family unit — parents, children, and elderly relatives all matter.',
  },
  {
    icon: ArrowRight,
    label: 'Interconnected',
    desc: 'Our programs link together. A child in tuition support also benefits from our food and resource programs.',
  },
];

export default function ProgramsPage(): React.JSX.Element {
  return (
    <>
      {/* Hero — full-bleed overlay */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden">
        <Image
          src={HERO_IMAGE}
          alt="A community member receiving a food package from Healthy Steps Foundation staff through a distribution window in Ndejje"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-green-900/95 via-forest-green-900/70 to-forest-green-900/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-green-900/55 via-transparent to-transparent" />

        <div className="relative z-10 container mx-auto px-6 py-28">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-0.5 bg-amber-400 shrink-0" />
              <span className="text-amber-300 text-sm font-medium tracking-wide">What We Do</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-serif leading-[1.05] mb-6 text-white">
              Our Programs
            </h1>
            <p className="text-white/80 text-lg sm:text-xl leading-relaxed">
              Six carefully designed programs that work together to support the whole family —
              not just one need, but every dimension of a flourishing life.
            </p>
          </div>
        </div>
      </section>

      {/* Why 6 programs — white section, not amber */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <FadeUp className="mb-12">
            <div className="w-10 h-0.5 bg-amber-500 mb-4" />
            <p className="text-sm font-semibold uppercase tracking-widest text-warm-gray-400 mb-3">Our Philosophy</p>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-warm-gray-900">
              Why Six Programs?
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {WHY_SIX.map(({ icon: Icon, label, desc }, i) => (
              <FadeUp key={label} delay={i * 0.1}>
                <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 bg-forest-green-50 rounded-xl flex items-center justify-center">
                    <Icon size={22} className="text-forest-green-600" />
                  </div>
                  <h3 className="font-bold text-warm-gray-900 text-lg">{label}</h3>
                  <p className="text-warm-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Program Cards Grid */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="container mx-auto max-w-6xl">
          <FadeUp className="mb-12">
            <div className="w-10 h-0.5 bg-amber-500 mb-4" />
            <p className="text-sm font-semibold uppercase tracking-widest text-warm-gray-400 mb-3">Explore</p>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-warm-gray-900 mb-4">
              All Six Programs
            </h2>
            <p className="text-warm-gray-500 text-lg max-w-2xl">
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

      {/* How they connect */}
      <section className="py-20 px-6 bg-forest-green-50">
        <div className="container mx-auto max-w-5xl">
          <FadeUp className="mb-12">
            <div className="w-10 h-0.5 bg-amber-500 mb-4" />
            <p className="text-sm font-semibold uppercase tracking-widest text-warm-gray-400 mb-3">The Bigger Picture</p>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-warm-gray-900 mb-4">
              Programs That Work Together
            </h2>
            <p className="text-warm-gray-500 text-lg max-w-2xl">
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
            <div className="w-10 h-0.5 bg-amber-400 mx-auto mb-6" />
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
