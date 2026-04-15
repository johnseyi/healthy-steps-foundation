import Link from 'next/link';
import {
  UtensilsCrossed,
  Shirt,
  GraduationCap,
  Briefcase,
  Stethoscope,
  BookOpen,
  ChevronRight,
  type LucideIcon,
} from 'lucide-react';
import type { Program } from '@/types';

const ICON_MAP: Record<string, LucideIcon> = {
  UtensilsCrossed,
  Shirt,
  GraduationCap,
  Briefcase,
  Stethoscope,
  BookOpen,
};

interface ProgramCardProps {
  program: Program;
}

export default function ProgramCard({ program }: ProgramCardProps): React.JSX.Element {
  const Icon = ICON_MAP[program.icon] ?? BookOpen;

  return (
    <Link
      href={`/programs/${program.slug}`}
      className="group block bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
    >
      <div className="aspect-video bg-forest-green-50 flex items-center justify-center relative overflow-hidden">
        <div className="w-16 h-16 bg-forest-green-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
          <Icon size={32} className="text-forest-green-500" />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-forest-green-900 mb-2 font-serif">{program.name}</h3>
        <p className="text-warm-gray-600 text-sm leading-relaxed mb-4">{program.shortDescription}</p>
        <span className="text-amber-500 font-semibold text-sm hover:text-amber-600 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
          Learn More <ChevronRight size={16} />
        </span>
      </div>
    </Link>
  );
}
