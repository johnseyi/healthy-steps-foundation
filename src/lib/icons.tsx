import {
  UtensilsCrossed,
  Shirt,
  GraduationCap,
  Briefcase,
  Stethoscope,
  BookOpen,
  type LucideIcon,
  type LucideProps,
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

interface ProgramIconProps extends LucideProps {
  /** The `icon` field from a Program, e.g. "UtensilsCrossed" */
  name: string;
}

/**
 * Renders a program's icon by name.
 *
 * Prefer this over calling `programIcon()` at a call site and rendering the
 * result: react-hooks/static-components cannot tell a map lookup from a
 * component defined inline, so every such call site trips the rule. Doing the
 * lookup once, here, keeps the suppression to a single reviewed line — and the
 * values in PROGRAM_ICON_MAP are module-scope components, so no component is
 * ever actually created during render.
 */
export function ProgramIcon({ name, ...props }: ProgramIconProps): React.JSX.Element {
  const Icon = programIcon(name);
  // eslint-disable-next-line react-hooks/static-components
  return <Icon {...props} />;
}
