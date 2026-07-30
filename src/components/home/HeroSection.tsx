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
import { ArrowRight, ArrowDown, ShieldCheck } from 'lucide-react';
import { ButtonLink } from '@/components/ui/Button';

const HERO_IMAGE = '/images/field/food-relief-handoff.jpg';

const TRUST_POINTS = [
  'Faith-grounded',
  'Community-led',
  'Holistic family support',
  'Temporary emergency support',
] as const;

const rise: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.1 + i * 0.1, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export default function HeroSection(): React.JSX.Element {
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
          src={HERO_IMAGE}
          alt="A Healthy Steps Foundation volunteer handing a food relief bag to a community member in Wakiso, Uganda"
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
          {/* Location eyebrow */}
          <motion.div
            custom={0}
            variants={rise}
            initial="hidden"
            animate="visible"
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 py-2 pr-5 pl-3 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-400" />
            </span>
            <span className="text-xs font-medium tracking-wide text-white/85 sm:text-sm">
              Uganda &middot; Wakiso &middot; Ndejje &middot; Mirimu
            </span>
          </motion.div>

          {/* Logo in place of a headline (client direction). It stays inside the
              <h1> so the page keeps one top-level heading, with the visually
              hidden text carrying the meaning for screen readers and search. */}
          <motion.h1
            custom={1}
            variants={rise}
            initial="hidden"
            animate="visible"
            className="mb-8"
          >
            <span className="sr-only">
              Healthy Steps Foundation — every family deserves to be whole
            </span>
            <span className="inline-flex items-center justify-center rounded-3xl bg-white px-7 py-5 shadow-float sm:px-9 sm:py-6">
              <Image
                src="/HSF_logo.png"
                alt="Healthy Steps Foundation"
                width={520}
                height={150}
                priority
                className="h-24 w-auto object-contain sm:h-28 lg:h-32"
              />
            </span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            custom={2}
            variants={rise}
            initial="hidden"
            animate="visible"
            className="mb-10 max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl"
          >
            A faith-based organization partnering with families in Uganda to improve
            mental health wellness, providing holistic support across food, clothing,
            education, medical care, and vocational skills on a temporary basis.
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={3}
            variants={rise}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-4 sm:flex-row"
          >
            <ButtonLink href="/donate" size="lg" className="w-full sm:w-auto">
              Donate Now
            </ButtonLink>
            <ButtonLink href="/programs" variant="onDark" size="lg" className="group w-full sm:w-auto">
              Our Programs
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </ButtonLink>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            custom={4}
            variants={rise}
            initial="hidden"
            animate="visible"
            className="mt-12 flex flex-wrap items-center gap-2.5"
          >
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest text-amber-300/90 uppercase">
              <ShieldCheck size={14} /> How we serve
            </span>
            {TRUST_POINTS.map((item) => (
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
