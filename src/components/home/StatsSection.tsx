'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { IMPACT_STATS } from '@/lib/constants';

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
      // Ease out cubic
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
    <section className="bg-amber-500 py-16 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {IMPACT_STATS.map(({ value, suffix, label }) => (
            <div key={label} className="text-center">
              <div className="text-4xl sm:text-5xl font-black text-white font-serif mb-2">
                <AnimatedCounter end={value} suffix={suffix} />
              </div>
              <div className="text-amber-100 text-sm sm:text-base font-medium">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
