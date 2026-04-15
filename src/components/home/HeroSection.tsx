'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function HeroSection(): React.JSX.Element {
  return (
    <section className="relative bg-forest-green-900 text-white overflow-hidden min-h-[90vh] flex items-center">
      {/* Decorative background shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-forest-green-700/40 rounded-full -translate-y-1/3 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-500/10 rounded-full translate-y-1/3 -translate-x-1/3" />
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-forest-green-800/30 rounded-full -translate-x-1/2 -translate-y-1/2" />
        {/* Leaf motif dots */}
        <div className="absolute top-24 left-10 w-3 h-3 bg-amber-400/60 rounded-full" />
        <div className="absolute top-40 left-24 w-2 h-2 bg-amber-400/40 rounded-full" />
        <div className="absolute bottom-32 right-16 w-4 h-4 bg-forest-green-400/50 rounded-full" />
        <div className="absolute bottom-20 right-40 w-2 h-2 bg-amber-400/30 rounded-full" />
      </div>

      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="max-w-4xl">
          {/* Tag line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/30 text-amber-300 text-sm font-medium px-4 py-2 rounded-full mb-8"
          >
            <Heart size={14} className="fill-amber-400 text-amber-400" />
            Uganda &bull; Wakiso &bull; Ndejje &bull; Mirimu
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-black font-serif leading-[1.1] tracking-tight mb-6"
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
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-forest-green-100 text-lg sm:text-xl leading-relaxed max-w-2xl mb-10"
          >
            A faith-based organization partnering with families in Uganda to improve
            mental health wellness — providing holistic support across food, clothing,
            education, medical care, and vocational skills on an as-needed basis.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/donate">
              <Button variant="primary" size="lg" className="w-full sm:w-auto text-base px-8">
                Donate Now
              </Button>
            </Link>
            <Link href="/programs">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto text-base px-8 border-white/40 text-white hover:bg-white/10 inline-flex items-center gap-2"
              >
                Our Programs <ArrowRight size={18} />
              </Button>
            </Link>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-14 flex flex-wrap items-center gap-6 text-forest-green-300 text-sm"
          >
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-forest-green-600 flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              Faith-grounded
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-forest-green-600 flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              Community-led
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-forest-green-600 flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              Holistic family support
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-forest-green-600 flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              As-needed emergency support
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
