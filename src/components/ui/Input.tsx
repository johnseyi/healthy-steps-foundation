'use client';

import { forwardRef, useId } from 'react';
import { cn } from '@/lib/utils';

/**
 * Shared field chrome, exported so <select> and <textarea> elsewhere match the
 * inputs exactly instead of each re-declaring their own border/focus styles.
 */
export const fieldClasses =
  'w-full rounded-xl border border-warm-gray-200 bg-white px-4 py-3 text-warm-gray-900 ' +
  'shadow-[inset_0_1px_2px_rgba(26,25,23,0.04)] placeholder:text-warm-gray-400 ' +
  'transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-warm-gray-300 ' +
  'focus:border-forest-green-500 focus:ring-4 focus:ring-forest-green-500/12 focus:outline-none';

export const fieldErrorClasses =
  'border-error hover:border-error focus:border-error focus:ring-red-500/12';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  /** Optional helper text shown under the field when there is no error. */
  hint?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, error, hint, className, id, ...props },
  ref,
) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const messageId = `${inputId}-message`;

  return (
    <div className="space-y-2">
      {label && (
        <label htmlFor={inputId} className="block text-sm font-medium text-warm-gray-700">
          {label}
        </label>
      )}
      <input
        ref={ref}
        id={inputId}
        aria-invalid={error ? true : undefined}
        aria-describedby={error || hint ? messageId : undefined}
        className={cn(fieldClasses, error && fieldErrorClasses, className)}
        {...props}
      />
      {(error || hint) && (
        <p
          id={messageId}
          role={error ? 'alert' : undefined}
          className={cn('text-sm', error ? 'text-error' : 'text-warm-gray-500')}
        >
          {error ?? hint}
        </p>
      )}
    </div>
  );
});

export default Input;
