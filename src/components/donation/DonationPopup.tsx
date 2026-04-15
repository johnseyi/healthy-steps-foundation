'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart } from 'lucide-react';
import Button from '@/components/ui/Button';

const SESSION_KEY = 'hsf_popup_shown';
const DELAY_MS = 5000;

const QUICK_AMOUNTS = [
  { amount: 50, impact: 'feeds a family for a month' },
  { amount: 100, impact: 'sponsors a child\'s school term' },
];

export default function DonationPopup(): React.JSX.Element | null {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;
    const timer = setTimeout(() => {
      setIsOpen(true);
      sessionStorage.setItem(SESSION_KEY, '1');
    }, DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  function handleQuickDonate(amount: number): void {
    setIsOpen(false);
    router.push(`/donate?amount=${amount}&fund=where-needed-most&type=one-time`);
  }

  function handleClose(): void {
    setIsOpen(false);
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={handleClose}
            aria-hidden="true"
          />

          {/* Popup card */}
          <motion.div
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1, transition: { type: 'spring', damping: 28, stiffness: 320, delay: 0.05 } }}
            exit={{ opacity: 0, y: 40, scale: 0.95, transition: { duration: 0.2 } }}
            role="dialog"
            aria-modal="true"
            aria-label="Donation prompt"
          >
            {/* Green header strip */}
            <div className="bg-forest-green-900 px-6 pt-6 pb-8 text-white text-center relative">
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-1.5 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Close"
              >
                <X size={18} className="text-white/70" />
              </button>

              <div className="w-14 h-14 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart size={26} className="text-white fill-white" />
              </div>
              <h2 className="text-2xl font-bold font-serif mb-2">Make an Impact Today</h2>
              <p className="text-forest-green-200 text-sm leading-relaxed">
                Partner with us to help families in Wakiso, Uganda access mental health
                support, emergency food, education, and essential resources — with dignity.
              </p>
            </div>

            {/* Content */}
            <div className="px-6 py-6 space-y-4">
              {/* Quick donate buttons */}
              <div className="space-y-3">
                {QUICK_AMOUNTS.map(({ amount, impact }) => (
                  <button
                    key={amount}
                    onClick={() => handleQuickDonate(amount)}
                    className="w-full flex items-center justify-between bg-forest-green-50 hover:bg-forest-green-100 border-2 border-forest-green-100 hover:border-forest-green-300 rounded-xl px-5 py-4 transition-all duration-200 group"
                  >
                    <div className="text-left">
                      <p className="font-bold text-forest-green-900 text-lg">${amount}</p>
                      <p className="text-forest-green-600 text-xs">{impact}</p>
                    </div>
                    <span className="text-sm font-semibold text-amber-600 group-hover:text-amber-700 transition-colors">
                      Give ${amount} →
                    </span>
                  </button>
                ))}
              </div>

              {/* Full page link */}
              <button
                onClick={() => { handleClose(); router.push('/donate'); }}
                className="w-full text-center text-sm text-warm-gray-500 hover:text-forest-green-600 transition-colors py-2"
              >
                Choose a different amount or fund →
              </button>

              <p className="text-xs text-warm-gray-400 text-center">
                All donations via secure international bank transfer (SWIFT).
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
