'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const VIDEO_SRC = '/outreach-june.mp4';
const POSTER_SRC = '/images/field/video-poster.jpg';

export default function VideoSection(): React.JSX.Element {
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

      <div className="container relative z-10 mx-auto max-w-5xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <div className="mx-auto mb-4 h-0.5 w-10 bg-amber-400" />
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-forest-green-300">
            Watch the Outreach
          </p>
          <h2 className="mb-5 font-serif text-3xl font-bold text-white sm:text-4xl">
            See Healthy Steps in the Field
          </h2>
          <p className="text-lg leading-relaxed text-forest-green-200">
            Filmed during our June outreach in Wakiso — food packages, medical care, and mental
            wellness support reaching families, one healthy step at a time.
          </p>
        </motion.div>

        {/* Player */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="group relative aspect-video overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10"
        >
          <video
            ref={videoRef}
            src={VIDEO_SRC}
            poster={POSTER_SRC}
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
                src={POSTER_SRC}
                alt="A young woman smiling as she carries a Healthy Steps Foundation food package during the June outreach in Wakiso, Uganda"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-green-900/70 via-forest-green-900/10 to-transparent transition-colors group-hover:from-forest-green-900/60" />
              <span className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-amber-500 text-forest-green-900 shadow-xl transition-transform duration-200 group-hover:scale-110">
                <Play size={32} className="ml-1 fill-current" />
              </span>
              <span className="absolute bottom-6 left-6 z-10 text-left">
                <span className="block font-serif text-lg font-bold text-white sm:text-xl">
                  June Community Outreach
                </span>
                <span className="block text-sm text-white/70">Wakiso, Uganda &middot; 1:44</span>
              </span>
            </button>
          )}
        </motion.div>
      </div>
    </section>
  );
}
