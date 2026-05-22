import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import type { Program } from '@/types';

interface ProgramHeroProps {
  program: Program;
}

export default function ProgramHero({ program }: ProgramHeroProps): React.JSX.Element {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      {/* Full-bleed program photo */}
      <Image
        src={program.image}
        alt={program.name}
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />
      {/* Layered overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-forest-green-900/95 via-forest-green-900/75 to-forest-green-900/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-green-900/50 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-24">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-0.5 bg-amber-400 shrink-0" />
            <span className="text-amber-300 text-sm font-medium tracking-wide uppercase">Our Programs</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-serif leading-tight mb-6 text-white">
            {program.name}
          </h1>
          <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl">
            {program.shortDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href={`/donate?fund=${program.fund}`}>
              <Button variant="primary" size="lg">Support This Program</Button>
            </Link>
            <Link
              href="/programs"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border border-white/30 rounded-lg hover:bg-white/10 transition-all duration-200 w-full sm:w-auto"
            >
              All Programs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
