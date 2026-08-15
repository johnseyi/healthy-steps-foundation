'use client';

import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import type { HomeContent } from '@/lib/cms/pages/home';
import type { MediaValue } from '@/lib/cms/types';

/** Tailwind spans for the bento layout (lg and up), keyed by the editor's tile-size choice. */
const SPAN_CLASSES: Record<string, string> = {
  large: 'lg:col-span-2 lg:row-span-2',
  wide: 'lg:col-span-2',
  standard: '',
};

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function GallerySection({ content }: { content: HomeContent }): React.JSX.Element {
  return (
    <section className="bg-white px-6 py-24">
      <div className="container mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={content.galleryEyebrow}
          title={content.galleryTitle}
          lead={content.galleryLead}
          className="mb-12"
        />

        {/* Bento mosaic */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] lg:grid-cols-4"
        >
          {content.galleryPhotos.map((entry, i) => {
            const photo = entry.photo as MediaValue | undefined;
            if (!photo?.src) return null;
            const size = typeof entry.size === 'string' ? entry.size : 'standard';

            return (
              <motion.div
                key={`${photo.src}-${i}`}
                variants={itemVariants}
                className={`group relative overflow-hidden rounded-2xl ring-1 ring-warm-gray-200/70 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:z-10 hover:shadow-float hover:ring-forest-green-200 ${SPAN_CLASSES[size] ?? ''}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.07]"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-green-900/45 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
