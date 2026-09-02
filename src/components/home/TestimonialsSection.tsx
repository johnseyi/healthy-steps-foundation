'use client';

import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Quote } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import type { HomeContent } from '@/lib/cms/pages/home';
import type { Testimonial } from '@/types';

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const },
  },
};

function initials(name: string): string {
  return name
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0] ?? '')
    .join('')
    .toUpperCase();
}

interface TestimonialsSectionProps {
  content: HomeContent;
  testimonials: Testimonial[];
}

export default function TestimonialsSection({
  content,
  testimonials,
}: TestimonialsSectionProps): React.JSX.Element {
  return (
    <section className="relative overflow-hidden bg-forest-green-50 px-6 py-24 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-24 h-80 w-80 rounded-full bg-white/60 blur-3xl"
      />

      <div className="relative z-10 container mx-auto max-w-6xl">
        {/* "Stories of Hope" is the heading; the former heading sits under it
            in the same serif, regular weight, a step smaller. */}
        <SectionHeading
          title={content.testimonialsEyebrow}
          lead={
            <>
              <span className="block font-serif text-xl leading-snug font-normal text-warm-gray-700 sm:text-2xl">
                {content.testimonialsTitle}
              </span>
              <span className="mt-3 block">{content.testimonialsLead}</span>
            </>
          }
          className="mb-14"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {testimonials.map((t) => (
            <motion.figure
              key={t.id}
              variants={cardVariants}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-white p-8 shadow-soft ring-1 ring-white/60 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-lift sm:p-9"
            >
              {/* Watermark glyph */}
              <Quote
                size={104}
                aria-hidden="true"
                className="pointer-events-none absolute -top-4 -right-3 rotate-180 text-forest-green-50 transition-colors duration-500 group-hover:text-amber-50"
              />

              <blockquote className="relative z-10 flex-1">
                <p className="text-[0.975rem] leading-relaxed text-warm-gray-700 sm:text-base">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </blockquote>

              <figcaption className="relative z-10 mt-7 flex items-center gap-4 border-t border-warm-gray-100 pt-6">
                <span
                  aria-hidden="true"
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-forest-green-500 to-forest-green-700 font-serif text-sm font-bold text-white shadow-soft"
                >
                  {initials(t.name)}
                </span>
                <span className="min-w-0">
                  <span className="block font-semibold text-warm-gray-900">{t.name}</span>
                  <span className="block text-sm text-warm-gray-400">{t.location}</span>
                </span>
                {t.program && (
                  <span className="ml-auto hidden shrink-0 rounded-full border border-forest-green-100 bg-forest-green-50 px-3 py-1 text-xs font-medium text-forest-green-700 sm:inline-block">
                    {t.program}
                  </span>
                )}
              </figcaption>

              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-amber-400 to-amber-500 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
              />
            </motion.figure>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12"
        >
          <Link
            href="/stories"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-forest-green-600 transition-colors hover:text-forest-green-700"
          >
            <span className="link-sweep">{content.testimonialsLinkLabel}</span>
            <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
