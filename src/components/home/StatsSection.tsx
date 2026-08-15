'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import type { HomeContent } from '@/lib/cms/pages/home';

function AnimatedCounter({
  end,
  suffix,
  duration = 2000,
}: {
  end: number;
  suffix: string;
  duration?: number;
}): React.JSX.Element {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    if (!isInView) return;
    let startTime: number | null = null;
    function step(timestamp: number): void {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

function str(value: unknown): string {
  return typeof value === 'string' ? value : '';
}

export default function StatsSection({ content }: { content: HomeContent }): React.JSX.Element {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-24 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-amber-100/40 blur-3xl"
      />

      <div className="relative z-10 container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Stats side */}
          <div>
            <SectionHeading
              eyebrow={content.statsEyebrow}
              title={<span className="whitespace-pre-line">{content.statsTitle}</span>}
              className="mb-10"
            />

            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-warm-gray-200/70 ring-1 ring-warm-gray-200/70">
              {content.stats.map((stat, i) => {
                const value = str(stat.value);
                const suffix = str(stat.suffix);
                const label = str(stat.label);
                // Plain digits count up; anything else (e.g. "Weekly") is shown as written.
                const numeric = Number(value.replace(/,/g, ''));
                const countsUp = value.trim() !== '' && Number.isFinite(numeric);

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    className="group bg-white p-6 transition-colors duration-500 hover:bg-warm-white sm:p-7"
                  >
                    <div className="mb-1 font-serif text-4xl font-black text-forest-green-600 tabular-nums sm:text-5xl">
                      {countsUp ? (
                        <AnimatedCounter end={numeric} suffix={suffix} />
                      ) : (
                        <span>
                          {value}
                          {suffix}
                        </span>
                      )}
                    </div>
                    <div className="text-sm leading-snug font-medium text-warm-gray-500">{label}</div>
                    <div className="mt-3 h-0.5 w-6 origin-left scale-x-0 rounded-full bg-amber-500 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Photo side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="grain-overlay relative aspect-[4/3] overflow-hidden rounded-3xl shadow-float">
              <Image
                src={content.statsImage.src}
                alt={content.statsImage.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-green-900/55 via-transparent to-transparent" />
            </div>

            {/* Floating caption card — breaks the rectangle and adds depth */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-6 left-6 right-6 rounded-2xl border border-warm-gray-100 bg-white/95 p-5 shadow-float backdrop-blur-xl sm:-right-6 sm:left-auto sm:max-w-[17rem]"
            >
              <div className="mb-2 flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
                  <Sparkles size={16} />
                </span>
                <span className="text-xs font-semibold tracking-widest text-warm-gray-400 uppercase">
                  {content.statsCaptionLabel}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-warm-gray-600">
                {content.statsCaptionText}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
