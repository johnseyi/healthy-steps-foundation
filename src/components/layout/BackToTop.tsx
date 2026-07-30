'use client';

import { useSyncExternalStore } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { subscribeToScroll } from '@/lib/scroll';

/**
 * Appears once the visitor is a screen or so down the page. The ring around it
 * fills as a progress indicator, so it doubles as a sense of "how far in am I"
 * on the long program and mission pages.
 */
export default function BackToTop(): React.JSX.Element {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 220, damping: 40, mass: 0.3 });

  const visible = useSyncExternalStore(
    subscribeToScroll,
    () => window.scrollY > window.innerHeight * 0.9,
    () => false,
  );

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0.7, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 12 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -3 }}
          className="group fixed right-5 bottom-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-forest-green-900 text-white shadow-float transition-colors hover:bg-forest-green-700 sm:right-8 sm:bottom-8"
        >
          {/* Progress ring */}
          <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 48 48" aria-hidden="true">
            <motion.circle
              cx="24"
              cy="24"
              r="22"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="text-amber-400"
              style={{ pathLength: progress }}
            />
          </svg>
          <ArrowUp size={18} className="relative transition-transform duration-300 group-hover:-translate-y-0.5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
