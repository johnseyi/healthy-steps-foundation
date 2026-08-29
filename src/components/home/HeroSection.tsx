'use client';

import Image from 'next/image';
import { useRef } from 'react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from 'framer-motion';
import { ArrowDown, ShieldCheck } from 'lucide-react';
import { ButtonLink } from '@/components/ui/Button';
import type { HomeContent } from '@/lib/cms/pages/home';

const rise: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.1 + i * 0.1, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export default function HeroSection({ content }: { content: HomeContent }): React.JSX.Element {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  // Photo drifts slower than the page — depth without a jarring parallax jump.
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', reduceMotion ? '0%' : '14%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', reduceMotion ? '0%' : '22%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, reduceMotion ? 1 : 0]);

  return (
    <section
      ref={ref}
      className="grain-overlay relative flex min-h-[92vh] items-center overflow-hidden bg-forest-green-900"
    >
      {/* Full-bleed background photo */}
      {/* Taller than the section so the parallax drift never exposes a bare edge */}
      <motion.div style={{ y: imageY }} className="absolute inset-x-0 top-0 h-[116%]">
        <Image
          src={content.heroImage.src}
          alt={content.heroImage.alt}
          fill
          className="object-cover object-top"
          priority
          sizes="100vw"
        />
      </motion.div>

      {/* Layered gradients — readable on all screen sizes */}
      <div className="absolute inset-0 bg-gradient-to-r from-forest-green-900/95 via-forest-green-900/70 to-forest-green-900/15" />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-green-900/70 via-transparent to-forest-green-900/25" />

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 container mx-auto px-6 py-28 sm:py-32"
      >
        <div className="max-w-xl lg:max-w-2xl">
          {/* Headline */}
          <motion.h1
            custom={0}
            variants={rise}
            initial="hidden"
            animate="visible"
            className="mb-8 font-serif text-4xl leading-tight font-bold text-white sm:text-5xl lg:text-6xl"
          >
            {content.heroHeadline}
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            custom={1}
            variants={rise}
            initial="hidden"
            animate="visible"
            className="mb-10 max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl"
          >
            {content.heroLead}
          </motion.p>

          {/* CTA */}
          <motion.div
            custom={2}
            variants={rise}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-4 sm:flex-row"
          >
            <ButtonLink href={content.heroDonateHref} size="lg" className="w-full sm:w-auto">
              {content.heroDonateLabel}
            </ButtonLink>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            custom={3}
            variants={rise}
            initial="hidden"
            animate="visible"
            className="mt-12 flex flex-wrap items-center gap-2.5"
          >
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest text-amber-300/90 uppercase">
              <ShieldCheck size={14} /> {content.heroTrustLabel}
            </span>
            {content.heroTrustPoints.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs text-white/75 backdrop-blur-sm transition-colors duration-300 hover:border-white/30 hover:text-white"
              >
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 sm:block"
        aria-hidden="true"
      >
        <div className="flex flex-col items-center gap-2 text-white/50">
          <span className="text-[0.65rem] font-medium tracking-[0.2em] uppercase">Scroll</span>
          <span className="flex h-9 w-9 animate-float-slow items-center justify-center rounded-full border border-white/20">
            <ArrowDown size={15} />
          </span>
        </div>
      </motion.div>
    </section>
  );
}
