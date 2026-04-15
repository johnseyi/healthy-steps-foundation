'use client';

import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';
import { Quote, ArrowRight } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/constants';

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function TestimonialsSection(): React.JSX.Element {
  return (
    <section className="py-24 px-6 bg-forest-green-50">
      <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-3">
            Stories of Hope
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-warm-gray-900 mb-4">
            Real Families. Real Change.
          </h2>
          <p className="text-warm-gray-500 text-lg max-w-2xl mx-auto">
            Behind every statistic is a person whose life has been changed. Here are some of their stories.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {TESTIMONIALS.map((t) => (
            <motion.div
              key={t.id}
              variants={cardVariants}
              className="bg-white rounded-2xl p-8 shadow-md flex flex-col gap-6"
            >
              <Quote size={32} className="text-amber-400 shrink-0" />
              <p className="text-warm-gray-700 leading-relaxed italic flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="border-t border-warm-gray-100 pt-4">
                <p className="font-semibold text-warm-gray-900">{t.name}</p>
                <p className="text-sm text-warm-gray-500">{t.location}</p>
                {t.program && (
                  <span className="inline-block mt-2 text-xs font-medium bg-forest-green-50 text-forest-green-700 px-3 py-1 rounded-full border border-forest-green-100">
                    {t.program}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Link to Stories page */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10"
        >
          <Link
            href="/stories"
            className="inline-flex items-center gap-2 text-forest-green-600 font-semibold hover:text-forest-green-700 transition-colors"
          >
            Read more stories <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
