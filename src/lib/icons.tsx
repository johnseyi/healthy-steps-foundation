import {
  UtensilsCrossed,
  Shirt,
  GraduationCap,
  Briefcase,
  Stethoscope,
  BookOpen,
  Heart,
  Users,
  Shield,
  Target,
  Eye,
  HandHeart,
  Handshake,
  Sprout,
  Church,
  Home,
  Sparkles,
  Compass,
  ArrowRight,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  Clock,
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

/**
 * The icons an editor can choose from in the content editor.
 *
 * Deliberately a curated shortlist rather than all of Lucide: a dropdown of
 * thousands is unusable, and every icon here has been checked to read correctly
 * at the sizes the value/feature cards use.
 */
export const CONTENT_ICON_MAP: Record<string, LucideIcon> = {
  BookOpen,
  Users,
  Shield,
  Heart,
  Target,
  Eye,
  HandHeart,
  Handshake,
  Sprout,
  Church,
  Home,
  Sparkles,
  Compass,
  GraduationCap,
  Stethoscope,
  Briefcase,
  UtensilsCrossed,
  Shirt,
  ArrowRight,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  Clock,
};

/** Editor-facing labels for CONTENT_ICON_MAP, in dropdown order. */
export const CONTENT_ICON_OPTIONS: { value: string; label: string }[] = [
  { value: 'BookOpen', label: 'Open book' },
  { value: 'Users', label: 'People' },
  { value: 'Shield', label: 'Shield' },
  { value: 'Heart', label: 'Heart' },
  { value: 'Target', label: 'Target' },
  { value: 'Eye', label: 'Eye' },
  { value: 'HandHeart', label: 'Hand with heart' },
  { value: 'Handshake', label: 'Handshake' },
  { value: 'Sprout', label: 'Growing plant' },
  { value: 'Church', label: 'Church' },
  { value: 'Home', label: 'Home' },
  { value: 'Sparkles', label: 'Sparkles' },
  { value: 'Compass', label: 'Compass' },
  { value: 'ArrowRight', label: 'Arrow' },
  { value: 'CheckCircle', label: 'Tick in a circle' },
  { value: 'Mail', label: 'Envelope' },
  { value: 'Phone', label: 'Phone' },
  { value: 'MapPin', label: 'Map pin' },
  { value: 'Clock', label: 'Clock' },
  { value: 'GraduationCap', label: 'Graduation cap' },
  { value: 'Stethoscope', label: 'Stethoscope' },
  { value: 'Briefcase', label: 'Briefcase' },
  { value: 'UtensilsCrossed', label: 'Cutlery' },
  { value: 'Shirt', label: 'Shirt' },
];

export function contentIcon(name: string): LucideIcon {
  return CONTENT_ICON_MAP[name] ?? Heart;
}

interface ContentIconProps extends LucideProps {
  /** An icon name chosen in the content editor, e.g. "Shield" */
  name: string;
}

/** Renders a content-editor-chosen icon by name. See ProgramIcon for why the lookup lives here. */
export function ContentIcon({ name, ...props }: ContentIconProps): React.JSX.Element {
  const Icon = contentIcon(name);
  // eslint-disable-next-line react-hooks/static-components
  return <Icon {...props} />;
}
