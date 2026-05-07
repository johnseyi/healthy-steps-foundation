import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  UtensilsCrossed, Shirt, GraduationCap, Briefcase,
  Stethoscope, BookOpen, type LucideIcon,
} from 'lucide-react';
import ProgramHero from '@/components/programs/ProgramHero';
import ProgramCard from '@/components/programs/ProgramCard';
import Button from '@/components/ui/Button';
import FadeUp from '@/components/ui/FadeUp';
import { PROGRAMS } from '@/lib/constants';

interface Props {
  params: Promise<{ slug: string }>;
}

const ICON_MAP: Record<string, LucideIcon> = {
  UtensilsCrossed, Shirt, GraduationCap, Briefcase, Stethoscope, BookOpen,
};

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return PROGRAMS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const program = PROGRAMS.find((p) => p.slug === slug);
  if (!program) return {};
  return {
    title: program.name,
    description: program.shortDescription,
  };
}

export default async function ProgramPage({ params }: Props): Promise<React.JSX.Element> {
  const { slug } = await params;
  const program = PROGRAMS.find((p) => p.slug === slug);
  if (!program) notFound();

  const Icon = ICON_MAP[program.icon] ?? BookOpen;
  const relatedPrograms = PROGRAMS.filter((p) => program.relatedSlugs.includes(p.slug));

  return (
    <>
      <ProgramHero program={program} />

      {/* About */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Main description */}
            <FadeUp className="lg:col-span-2">
              <p className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-4">About This Program</p>
              <h2 className="text-3xl font-bold font-serif text-warm-gray-900 mb-6">{program.name}</h2>
              <p className="text-warm-gray-600 leading-relaxed text-lg">{program.description}</p>
            </FadeUp>

            {/* Who We Serve sidebar */}
            <FadeUp delay={0.15}>
              <div className="bg-forest-green-50 rounded-2xl p-6 border border-forest-green-100">
                <div className="w-10 h-10 bg-forest-green-500 rounded-xl flex items-center justify-center mb-4">
                  <Icon size={20} className="text-white" />
                </div>
                <h3 className="font-bold text-forest-green-900 mb-3">Who We Serve</h3>
                <p className="text-warm-gray-600 text-sm leading-relaxed">{program.whoWeServe}</p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-amber-500 py-14 px-6">
        <div className="container mx-auto max-w-5xl">
          <FadeUp>
            <p className="text-amber-100 text-center text-sm font-semibold uppercase tracking-widest mb-8">
              Program Impact
            </p>
          </FadeUp>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {program.impact.map(({ value, label }, i) => (
              <FadeUp key={label} delay={i * 0.1}>
                <div>
                  <div className="text-3xl sm:text-4xl font-black text-white font-serif mb-1">{value}</div>
                  <div className="text-amber-100 text-sm">{label}</div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-forest-green-50">
        <div className="container mx-auto max-w-4xl">
          <FadeUp className="text-center mb-12">
            <p className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-3">The Process</p>
            <h2 className="text-3xl font-bold font-serif text-warm-gray-900">How It Works</h2>
          </FadeUp>

          <div className="space-y-6">
            {program.howItWorks.map(({ step, title, description }, i) => (
              <FadeUp key={step} delay={i * 0.1}>
                <div className="flex gap-6 bg-white rounded-2xl p-6 shadow-sm border border-warm-gray-100">
                  <div className="shrink-0 w-12 h-12 bg-forest-green-500 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{step}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-warm-gray-900 text-lg mb-2">{title}</h3>
                    <p className="text-warm-gray-600 leading-relaxed">{description}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Program photo */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="container mx-auto max-w-5xl">
          <FadeUp>
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-forest-green-100">
              {program.image ? (
                <Image
                  src={program.image}
                  alt={program.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 1024px"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-forest-green-400">
                  <div className="text-center">
                    <Icon size={72} className="mx-auto mb-4 opacity-30" />
                    <p className="font-semibold text-lg opacity-50">{program.name} — photo coming soon</p>
                  </div>
                </div>
              )}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Donate CTA */}
      <section className="py-16 px-6 bg-forest-green-900 text-white">
        <div className="container mx-auto max-w-4xl">
          <FadeUp>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold font-serif mb-3">
                  Support {program.name}
                </h2>
                <p className="text-forest-green-200 leading-relaxed max-w-lg">
                  Your donation goes directly to this program — funding food, fees, training, or care for
                  families in Ndejje who need it most.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Link href={`/donate?fund=${program.fund}`}>
                  <Button variant="primary" size="lg" className="w-full sm:w-auto whitespace-nowrap">
                    Donate to This Program
                  </Button>
                </Link>
                <Link href="/programs">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto border-forest-green-500 text-forest-green-200 hover:bg-forest-green-800">
                    All Programs
                  </Button>
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Related Programs */}
      {relatedPrograms.length > 0 && (
        <section className="py-20 px-6 bg-warm-white">
          <div className="container mx-auto max-w-5xl">
            <FadeUp className="text-center mb-10">
              <p className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-3">Keep Exploring</p>
              <h2 className="text-2xl font-bold font-serif text-warm-gray-900">Related Programs</h2>
            </FadeUp>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPrograms.map((p, i) => (
                <FadeUp key={p.slug} delay={i * 0.1}>
                  <ProgramCard program={p} />
                </FadeUp>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
