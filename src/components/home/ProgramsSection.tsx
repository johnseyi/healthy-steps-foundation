'use client';

import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ProgramCard from '@/components/programs/ProgramCard';
import { PROGRAMS } from '@/lib/constants';

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' as const } },
};

export default function ProgramsSection(): React.JSX.Element {
  return (
    <section className="py-24 px-6 bg-warm-white">
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
            What We Do
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-warm-gray-900 mb-4">
            Six Holistic Programs
          </h2>
          <p className="text-warm-gray-500 text-lg max-w-2xl mx-auto">
            Each program addresses a different dimension of family wellness — because mental health cannot be
            separated from food, clothing, education, medical care, or economic stability.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {PROGRAMS.map((program) => (
            <motion.div key={program.slug} variants={itemVariants}>
              <ProgramCard program={program} />
            </motion.div>
          ))}
        </motion.div>

        {/* View all */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-10"
        >
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 text-forest-green-600 font-semibold hover:text-forest-green-700 transition-colors"
          >
            View all programs <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
