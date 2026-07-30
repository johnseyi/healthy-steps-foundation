'use client';

import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';

interface GalleryPhoto {
  src: string;
  alt: string;
  /** Tailwind span classes for the bento layout (lg and up). */
  span: string;
}

const PHOTOS: GalleryPhoto[] = [
  {
    src: '/images/field/connection.jpg',
    alt: 'A Healthy Steps volunteer speaking warmly with a woman receiving a food package',
    span: 'lg:col-span-2 lg:row-span-2',
  },
  {
    src: '/images/field/beneficiaries-women.jpg',
    alt: 'Three women smiling with their Healthy Steps food packages in Wakiso',
    span: 'lg:col-span-2',
  },
  {
    src: '/images/field/team-joy.jpg',
    alt: 'Two Healthy Steps Foundation team members laughing in branded shirts',
    span: '',
  },
  {
    src: '/images/field/food-packages.jpg',
    alt: 'Food packages branded with the Healthy Steps Foundation logo',
    span: '',
  },
  {
    src: '/images/field/counseling-circle.jpg',
    alt: 'A mental wellness counselling circle during a Healthy Steps outreach',
    span: 'lg:col-span-2',
  },
  {
    src: '/images/field/distribution-handover.jpg',
    alt: 'A Healthy Steps team member handing a food package to a community member',
    span: '',
  },
  {
    src: '/images/field/medical-intake.jpg',
    alt: 'Healthy Steps staff running a medical intake table with hand sanitiser and gloves',
    span: '',
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function GallerySection(): React.JSX.Element {
  return (
    <section className="bg-white px-6 py-24">
      <div className="container mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="From the Field"
          title={<>Moments of Dignity &amp; Hope</>}
          lead="Real photographs from our outreach in Wakiso — the families we walk with, and the team that shows up for them."
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
          {PHOTOS.map((photo) => (
            <motion.div
              key={photo.src}
              variants={itemVariants}
              className={`group relative overflow-hidden rounded-2xl ring-1 ring-warm-gray-200/70 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:z-10 hover:shadow-float hover:ring-forest-green-200 ${photo.span}`}
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
          ))}
        </motion.div>
      </div>
    </section>
  );
}
