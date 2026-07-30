import {
  UtensilsCrossed,
  Shirt,
  GraduationCap,
  Briefcase,
  Stethoscope,
  BookOpen,
  type LucideIcon,
} from 'lucide-react';

/**
 * Maps the `icon` string on each Program in constants.ts to its Lucide
 * component. Kept in one place so the programs index, the program detail page
 * and the header mega-menu can never drift out of sync.
 */
export const PROGRAM_ICON_MAP: Record<string, LucideIcon> = {
  UtensilsCrossed,
  Shirt,
  GraduationCap,
  Briefcase,
  Stethoscope,
  BookOpen,
};

export function programIcon(name: string): LucideIcon {
  return PROGRAM_ICON_MAP[name] ?? BookOpen;
}
