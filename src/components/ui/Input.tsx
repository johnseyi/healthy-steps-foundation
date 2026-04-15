'use client';

import { cn } from '@/lib/utils';
import { forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, error, className, id, ...props },
  ref,
) {
  return (
    <div className="space-y-1.5">
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-warm-gray-700"
        >
          {label}
        </label>
      )}
      <input
        ref={ref}
        id={id}
        className={cn(
          'w-full px-4 py-3 border-2 border-warm-gray-200 rounded-lg',
          'focus:border-forest-green-500 focus:outline-none focus:ring-2 focus:ring-forest-green-100',
          'transition-colors duration-200 placeholder:text-warm-gray-400',
          'text-warm-gray-900 bg-white',
          error && 'border-error focus:border-error focus:ring-red-100',
          className,
        )}
        {...props}
      />
      {error && (
        <p className="text-sm text-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
});

export default Input;
