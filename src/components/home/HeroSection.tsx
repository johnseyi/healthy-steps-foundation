'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';

const HERO_IMAGE = '/images/field/packing-hero.jpg';

export default function HeroSection(): React.JSX.Element {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Full-bleed background photo */}
      <Image
        src={HERO_IMAGE}
        alt="Healthy Steps Foundation volunteers packing food relief bags at a community outreach in Wakiso, Uganda"
        fill
        className="object-cover object-[70%_center]"
        priority
        sizes="100vw"
      />

      {/* Layered gradients — readable on all screen sizes */}
      <div className="absolute inset-0 bg-gradient-to-r from-forest-green-900/95 via-forest-green-900/70 to-forest-green-900/15" />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-green-900/55 via-transparent to-forest-green-900/20" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-28 sm:py-32">
        <div className="max-w-xl lg:max-w-2xl">

          {/* Amber accent rule + location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-10 h-0.5 bg-amber-400 shrink-0" />
            <span className="text-amber-300 text-sm font-medium tracking-wide">
              Uganda &middot; Wakiso &middot; Ndejje &middot; Mirimu
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black font-serif leading-[1.05] tracking-tight mb-6 text-white"
          >
            Every Family{' '}
            <span className="text-amber-400">Deserves</span>
            <br />
            to Be Whole.
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="text-white/80 text-lg sm:text-xl leading-relaxed mb-10"
          >
            A faith-based organization partnering with families in Uganda to improve
            mental health wellness — providing holistic support across food, clothing,
            education, medical care, and vocational skills on an as-needed basis.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/donate">
              <Button variant="primary" size="lg" className="w-full sm:w-auto px-8">
                Donate Now
              </Button>
            </Link>
            <Link
              href="/programs"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white border border-white/30 rounded-lg hover:bg-white/10 transition-all duration-200 w-full sm:w-auto"
            >
              Our Programs <ArrowRight size={18} />
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3"
          >
            {[
              'Faith-grounded',
              'Community-led',
              'Holistic family support',
              'As-needed emergency support',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                <span className="text-white/70 text-sm">{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
