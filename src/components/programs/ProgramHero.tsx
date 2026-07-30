import Image from 'next/image';
import { ButtonLink } from '@/components/ui/Button';
import { programIcon } from '@/lib/icons';
import type { Program } from '@/types';

interface ProgramHeroProps {
  program: Program;
}

export default function ProgramHero({ program }: ProgramHeroProps): React.JSX.Element {
  const Icon = programIcon(program.icon);

  return (
    <section className="grain-overlay relative flex min-h-[70vh] items-center overflow-hidden bg-forest-green-900">
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
      <div className="absolute inset-0 bg-gradient-to-t from-forest-green-900/60 via-transparent to-forest-green-900/20" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-24">
        <div className="max-w-2xl">
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 py-2 pr-5 pl-2.5 backdrop-blur-md">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-500 text-forest-green-900">
              <Icon size={15} />
            </span>
            <span className="text-xs font-semibold tracking-[0.2em] text-white/85 uppercase">
              Our Programs
            </span>
          </div>

          <h1 className="mb-6 font-serif text-4xl leading-[1.08] font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            {program.name}
          </h1>
          <p className="mb-9 max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl">
            {program.shortDescription}
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <ButtonLink href={`/donate?fund=${program.fund}`} size="lg" className="w-full sm:w-auto">
              Support This Program
            </ButtonLink>
            <ButtonLink href="/programs" variant="onDark" size="lg" className="w-full sm:w-auto">
              All Programs
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
