import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { programIcon } from '@/lib/icons';
import type { Program } from '@/types';

interface ProgramCardProps {
  program: Program;
}

export default function ProgramCard({ program }: ProgramCardProps): React.JSX.Element {
  const Icon = programIcon(program.icon);

  return (
    <Link
      href={`/programs/${program.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-warm-gray-200/70 shadow-soft transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-float hover:ring-forest-green-200"
    >
      {/* Photo */}
      <div className="relative aspect-[16/10] overflow-hidden bg-forest-green-100">
        <Image
          src={program.image}
          alt={program.name}
          fill
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.08]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Base wash keeps the icon chip legible over any photo */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest-green-900/70 via-forest-green-900/10 to-transparent transition-opacity duration-500 group-hover:opacity-90" />

        {/* Icon chip — fills with forest green on hover */}
        <div className="absolute bottom-4 left-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/25 bg-white/15 text-white backdrop-blur-md transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:border-transparent group-hover:bg-amber-500 group-hover:text-warm-gray-900">
          <Icon size={20} />
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 font-serif text-lg font-bold text-warm-gray-900 transition-colors duration-300 group-hover:text-forest-green-600">
          {program.name}
        </h3>
        <p className="mb-5 flex-1 text-sm leading-relaxed text-warm-gray-500">
          {program.shortDescription}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-forest-green-600">Learn more</span>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-forest-green-50 text-forest-green-600 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bg-forest-green-500 group-hover:text-white">
            <ArrowUpRight size={17} />
          </span>
        </div>
      </div>

      {/* Amber rule that draws itself across the card foot on hover */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-amber-400 to-amber-500 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
      />
    </Link>
  );
}
