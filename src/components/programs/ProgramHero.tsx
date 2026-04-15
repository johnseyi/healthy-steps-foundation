import type { Program } from '@/types';
import Button from '@/components/ui/Button';
import Link from 'next/link';

interface ProgramHeroProps {
  program: Program;
}

export default function ProgramHero({ program }: ProgramHeroProps): React.JSX.Element {
  return (
    <section className="bg-forest-green-500 text-white py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <p className="text-forest-green-200 text-sm font-medium uppercase tracking-wider mb-4">
          Our Programs
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-serif leading-tight mb-6">
          {program.name}
        </h1>
        <p className="text-forest-green-100 text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
          {program.shortDescription}
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href={`/donate?fund=${program.fund}`}>
            <Button variant="primary" size="lg">Support This Program</Button>
          </Link>
          <Link href="/programs">
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              All Programs
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
