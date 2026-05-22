import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import type { Program } from '@/types';

interface ProgramCardProps {
  program: Program;
}

export default function ProgramCard({ program }: ProgramCardProps): React.JSX.Element {
  return (
    <Link
      href={`/programs/${program.slug}`}
      className="group block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      {/* Real program photo */}
      <div className="relative aspect-[16/10] overflow-hidden bg-forest-green-100">
        <Image
          src={program.image}
          alt={program.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-green-900/50 to-transparent opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
      </div>

      {/* Card body */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-warm-gray-900 mb-2 font-serif">{program.name}</h3>
        <p className="text-warm-gray-500 text-sm leading-relaxed mb-4">{program.shortDescription}</p>
        <span className="text-amber-600 font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
          Learn More <ChevronRight size={16} />
        </span>
      </div>
    </Link>
  );
}
