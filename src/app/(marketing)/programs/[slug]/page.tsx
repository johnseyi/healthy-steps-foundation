import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import ProgramHero from '@/components/programs/ProgramHero';
import ProgramCard from '@/components/programs/ProgramCard';
import { ButtonLink } from '@/components/ui/Button';
import FadeUp from '@/components/ui/FadeUp';
import { PROGRAMS } from '@/lib/constants';
import { programIcon } from '@/lib/icons';

interface Props {
  params: Promise<{ slug: string }>;
}

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

  const Icon = programIcon(program.icon);
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
              <div className="w-10 h-0.5 bg-amber-500 mb-4" />
              <p className="text-sm font-semibold uppercase tracking-widest text-warm-gray-400 mb-3">About This Program</p>
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
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <FadeUp className="mb-10">
            <div className="w-10 h-0.5 bg-amber-500 mb-4" />
            <p className="text-sm font-semibold uppercase tracking-widest text-warm-gray-400">
              Program Impact
            </p>
          </FadeUp>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {program.impact.map(({ value, label }, i) => (
              <FadeUp key={label} delay={i * 0.1}>
                <div>
                  <div className="text-4xl sm:text-5xl font-black text-forest-green-600 font-serif mb-2">{value}</div>
                  <div className="text-warm-gray-500 text-sm leading-snug">{label}</div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-forest-green-50">
        <div className="container mx-auto max-w-4xl">
          <FadeUp className="mb-12">
            <div className="w-10 h-0.5 bg-amber-500 mb-4" />
            <p className="text-sm font-semibold uppercase tracking-widest text-warm-gray-400 mb-3">The Process</p>
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
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={program.image}
                alt={program.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 1024px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-green-900/30 to-transparent" />
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
                <ButtonLink
                  href={`/donate?fund=${program.fund}`}
                  size="lg"
                  className="w-full whitespace-nowrap sm:w-auto"
                >
                  Donate to This Program
                </ButtonLink>
                <ButtonLink href="/programs" variant="onDark" size="lg" className="w-full sm:w-auto">
                  All Programs
                </ButtonLink>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Related Programs */}
      {relatedPrograms.length > 0 && (
        <section className="py-20 px-6 bg-warm-white">
          <div className="container mx-auto max-w-5xl">
            <FadeUp className="mb-10">
              <div className="w-10 h-0.5 bg-amber-500 mb-4" />
              <p className="text-sm font-semibold uppercase tracking-widest text-warm-gray-400 mb-3">Keep Exploring</p>
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
