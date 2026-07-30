'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Quote, MapPin } from 'lucide-react';
import type { Testimonial } from '@/types';

interface StoriesGridProps {
  testimonials: Testimonial[];
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0] ?? '')
    .join('')
    .toUpperCase();
}

const AVATAR_COLORS = [
  'bg-forest-green-500',
  'bg-forest-green-700',
  'bg-amber-500',
  'bg-forest-green-600',
  'bg-amber-600',
  'bg-forest-green-800',
] as const;

export default function StoriesGrid({ testimonials }: StoriesGridProps): React.JSX.Element {
  const [selected, setSelected] = useState<Testimonial | null>(null);

  useEffect(() => {
    if (!selected) return;
    function onKey(e: KeyboardEvent): void {
      if (e.key === 'Escape') setSelected(null);
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [selected]);

  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selected]);

  return (
    <>
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 gap-6 ${
          testimonials.length > 2 ? 'lg:grid-cols-3' : 'max-w-4xl'
        }`}
      >
        {testimonials.map((t, i) => {
          const avatarBg = AVATAR_COLORS[i % AVATAR_COLORS.length];
          return (
            <article
              key={t.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col p-7"
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-5">
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 text-white font-bold text-lg ${avatarBg}`}
                  aria-hidden="true"
                >
                  {getInitials(t.name)}
                </div>
                <div>
                  <p className="font-bold text-warm-gray-900">{t.name}</p>
                  <p className="text-warm-gray-500 text-sm flex items-center gap-1">
                    <MapPin size={12} className="shrink-0" />
                    {t.location}
                  </p>
                </div>
              </div>

              {/* Program badge */}
              {t.program && (
                <span className="self-start mb-4 px-3 py-1 bg-amber-50 text-amber-700 text-xs font-semibold rounded-full">
                  {t.program}
                </span>
              )}

              {/* Quote */}
              <blockquote className="flex-1 mb-5">
                <Quote size={20} className="text-forest-green-200 mb-2" />
                <p className="text-warm-gray-600 text-sm leading-relaxed italic line-clamp-4">
                  {t.quote}
                </p>
              </blockquote>

              {/* Read story button */}
              <button
                onClick={() => setSelected(t)}
                className="self-start text-sm font-semibold text-forest-green-600 hover:text-forest-green-700 transition-colors inline-flex items-center gap-1.5 group"
              >
                Read story
                <span className="group-hover:translate-x-0.5 transition-transform inline-block">
                  →
                </span>
              </button>
            </article>
          );
        })}
      </div>

      {/* Story modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setSelected(null)}
              aria-hidden="true"
            />

            {/* Modal card */}
            <motion.div
              className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { type: 'spring', damping: 28, stiffness: 320, delay: 0.05 },
              }}
              exit={{ opacity: 0, y: 30, scale: 0.95, transition: { duration: 0.2 } }}
              role="dialog"
              aria-modal="true"
              aria-label={`Story from ${selected.name}`}
            >
              {/* Green header */}
              <div className="bg-forest-green-900 px-8 pt-8 pb-10 text-white relative">
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 p-1.5 rounded-lg hover:bg-white/10 transition-colors"
                  aria-label="Close"
                >
                  <X size={18} className="text-white/70" />
                </button>

                <div className="flex items-center gap-4 mb-5">
                  <div
                    className="w-16 h-16 rounded-full bg-forest-green-600 flex items-center justify-center text-white font-bold text-xl shrink-0"
                    aria-hidden="true"
                  >
                    {getInitials(selected.name)}
                  </div>
                  <div>
                    <p className="font-bold text-lg">{selected.name}</p>
                    <p className="text-forest-green-300 text-sm flex items-center gap-1">
                      <MapPin size={12} className="shrink-0" />
                      {selected.location}
                    </p>
                    {selected.program && (
                      <span className="mt-1 inline-block px-2.5 py-0.5 bg-amber-500/20 text-amber-300 text-xs font-semibold rounded-full">
                        {selected.program}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Story content */}
              <div className="px-8 py-8">
                <Quote size={28} className="text-forest-green-200 mb-4" />
                <blockquote>
                  <p className="text-warm-gray-700 text-lg font-serif leading-relaxed italic">
                    &ldquo;{selected.quote}&rdquo;
                  </p>
                </blockquote>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
