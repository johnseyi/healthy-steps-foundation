'use client';

import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ProgramCard from '@/components/programs/ProgramCard';
import SectionHeading from '@/components/ui/SectionHeading';
import type { HomeContent } from '@/lib/cms/pages/home';
import type { ProgramView } from '@/types';

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

interface ProgramsSectionProps {
  content: HomeContent;
  programs: ProgramView[];
}

export default function ProgramsSection({
  content,
  programs,
}: ProgramsSectionProps): React.JSX.Element {
  return (
    <section className="relative overflow-hidden bg-warm-white px-6 py-24 sm:py-28">
      {/* Ambient wash so the section is not a flat slab of colour */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-forest-green-100/40 blur-3xl"
      />

      <div className="relative z-10 container mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={content.programsEyebrow}
          title={content.programsTitle}
          lead={content.programsLead}
          className="mb-14"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {programs.map((program) => (
            <motion.div key={program.slug} variants={itemVariants} className="h-full">
              <ProgramCard program={program} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <Link
            href="/programs"
            className="group inline-flex items-center gap-2 rounded-full border border-forest-green-200 bg-white px-6 py-3 text-sm font-semibold text-forest-green-600 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-forest-green-400 hover:shadow-lift"
          >
            {content.programsLinkLabel}
            <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
