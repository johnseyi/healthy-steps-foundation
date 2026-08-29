'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';
import { Play } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import type { HomeContent } from '@/lib/cms/pages/home';
import type { MediaValue } from '@/lib/cms/types';

/** Tailwind spans for the bento layout (lg and up), keyed by the editor's tile-size choice. */
const SPAN_CLASSES: Record<string, string> = {
  large: 'lg:col-span-2 lg:row-span-2',
  wide: 'lg:col-span-2',
  standard: '',
};

const galleryContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const galleryItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function VideoSection({ content }: { content: HomeContent }): React.JSX.Element {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  function handlePlay(): void {
    const video = videoRef.current;
    if (!video) return;
    void video.play();
    setPlaying(true);
  }

  return (
    <section className="relative overflow-hidden bg-forest-green-900 py-24 px-6">
      {/* Soft ambient glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-amber-400/10 blur-3xl" />

      <div className="container relative z-10 mx-auto max-w-6xl">
        {/* The former eyebrow is the heading here; the old heading sits under
            it in the same serif, regular weight, a step smaller. */}
        <SectionHeading
          title={content.videoEyebrow}
          lead={
            <>
              <span className="block font-serif text-xl leading-snug font-normal text-white/90 sm:text-2xl">
                {content.videoTitle}
              </span>
              <span className="mt-3 block">{content.videoLead}</span>
            </>
          }
          tone="dark"
          align="center"
          className="mb-12 max-w-2xl"
        />

        {/* Player */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="group relative mx-auto aspect-video max-w-3xl overflow-hidden rounded-3xl shadow-float ring-1 ring-white/10"
        >
          <video
            ref={videoRef}
            src={content.videoFile.src}
            poster={content.videoPoster.src}
            controls={playing}
            playsInline
            preload="none"
            className="h-full w-full bg-black object-cover"
            onPause={(): void => setPlaying(true)}
          />

          {/* Poster overlay with play button (hidden once playing starts) */}
          {!playing && (
            <button
              type="button"
              onClick={handlePlay}
              aria-label="Play the Healthy Steps Foundation outreach video"
              className="absolute inset-0 flex items-center justify-center"
            >
              <Image
                src={content.videoPoster.src}
                alt={content.videoPoster.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 768px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-green-900/70 via-forest-green-900/10 to-transparent transition-colors group-hover:from-forest-green-900/60" />
              <span className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-amber-500 text-forest-green-900 shadow-glow-amber transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110">
                {/* Pulsing halo draws the eye to the only interactive element here */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 animate-ping rounded-full bg-amber-400/40"
                />
                <Play size={32} className="relative ml-1 fill-current" />
              </span>
              <span className="absolute bottom-6 left-6 z-10 text-left">
                <span className="block font-serif text-lg font-bold text-white sm:text-xl">
                  {content.videoCaptionTitle}
                </span>
                <span className="block text-sm text-white/70">{content.videoCaptionMeta}</span>
              </span>
            </button>
          )}
        </motion.div>

        {/* Photo gallery — the field mosaic lives with the video now */}
        <motion.div
          variants={galleryContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-14 grid auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[190px] lg:grid-cols-4"
        >
          {content.galleryPhotos.map((entry, i) => {
            const photo = entry.photo as MediaValue | undefined;
            if (!photo?.src) return null;
            const size = typeof entry.size === 'string' ? entry.size : 'standard';

            return (
              <motion.div
                key={`${photo.src}-${i}`}
                variants={galleryItem}
                className={`group relative overflow-hidden rounded-2xl ring-1 ring-white/10 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:z-10 hover:shadow-float hover:ring-amber-300/50 ${SPAN_CLASSES[size] ?? ''}`}
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
