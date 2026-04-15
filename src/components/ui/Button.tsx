import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-amber-500 text-white shadow-md hover:bg-amber-600 active:bg-amber-700 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed',
  secondary:
    'bg-forest-green-500 text-white shadow-sm hover:bg-forest-green-600 active:bg-forest-green-700 hover:shadow-md',
  outline:
    'border-2 border-forest-green-500 text-forest-green-500 bg-transparent hover:bg-forest-green-50 active:bg-forest-green-100',
  ghost:
    'text-forest-green-600 hover:bg-forest-green-50 active:bg-forest-green-100',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm rounded-md',
  md: 'px-6 py-3 text-base rounded-lg',
  lg: 'px-8 py-4 text-lg rounded-lg',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps): React.JSX.Element {
  return (
    <button
      className={cn(
        'font-semibold transition-all duration-200 active:scale-95 inline-flex items-center justify-center gap-2',
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
