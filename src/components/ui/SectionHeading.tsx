'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  /** `dark` = placed on forest-green-900 / photo overlays */
  tone?: 'light' | 'dark';
  align?: 'left' | 'center';
  className?: string;
  /** Extra classes for the uppercase eyebrow line, e.g. to enlarge it. */
  eyebrowClassName?: string;
  /** Extra classes for the serif headline, e.g. to enlarge it. */
  titleClassName?: string;
}

/**
 * The section heading pattern from the design system — accent rule, uppercase
 * eyebrow, serif headline — in one component so every section on the site
 * animates and spaces identically. The amber rule draws itself in on scroll.
 */
export default function SectionHeading({
  eyebrow,
  title,
  lead,
  tone = 'light',
  align = 'left',
  className,
  eyebrowClassName,
  titleClassName,
}: SectionHeadingProps): React.JSX.Element {
  const centered = align === 'center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(centered && 'mx-auto text-center', className)}
    >
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          'mb-4 h-0.5 w-10 origin-left rounded-full',
          centered && 'mx-auto',
          tone === 'dark' ? 'bg-amber-400' : 'bg-amber-500',
        )}
      />
      <p
        className={cn(
          'mb-3 text-xs font-semibold tracking-[0.2em] uppercase sm:text-sm',
          tone === 'dark' ? 'text-amber-300' : 'text-warm-gray-400',
          eyebrowClassName,
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          'font-serif text-3xl leading-[1.15] font-bold tracking-tight sm:text-4xl',
          tone === 'dark' ? 'text-white' : 'text-warm-gray-900',
          titleClassName,
        )}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={cn(
            'mt-5 max-w-2xl text-base leading-relaxed sm:text-lg',
            centered && 'mx-auto',
            tone === 'dark' ? 'text-forest-green-100/85' : 'text-warm-gray-500',
          )}
        >
          {lead}
        </p>
      )}
    </motion.div>
  );
}
