'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { IMPACT_STATS } from '@/lib/constants';
import FadeUp from '@/components/ui/FadeUp';

const STATS_IMAGE = '/images/field/beneficiaries-women.jpg';

function AnimatedCounter({
  end,
  suffix,
  duration = 2000,
}: {
  end: number;
  suffix: string;
  duration?: number;
}): React.JSX.Element {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    if (!isInView) return;
    let startTime: number | null = null;
    function step(timestamp: number): void {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function StatsSection(): React.JSX.Element {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Stats side */}
          <FadeUp>
            <div className="w-10 h-0.5 bg-amber-500 mb-4" />
            <p className="text-sm font-semibold uppercase tracking-widest text-warm-gray-400 mb-3">Our Impact</p>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-warm-gray-900 mb-10">
              Real numbers.<br />Real families.
            </h2>
            <div className="grid grid-cols-2 gap-x-10 gap-y-10">
              {IMPACT_STATS.map(({ value, suffix, label }) => (
                <div key={label}>
                  <div className="text-5xl sm:text-6xl font-black text-forest-green-600 font-serif mb-1">
                    <AnimatedCounter end={value} suffix={suffix} />
                  </div>
                  <div className="text-warm-gray-500 text-sm font-medium leading-snug">{label}</div>
                </div>
              ))}
            </div>
          </FadeUp>

          {/* Photo side */}
          <FadeUp delay={0.15}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={STATS_IMAGE}
                alt="Three women smiling with their Healthy Steps Foundation food packages in Wakiso, Uganda"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-green-900/40 to-transparent" />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
