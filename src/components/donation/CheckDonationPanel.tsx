'use client';

import { useState } from 'react';
import { Check, Copy, CheckCircle, Mail } from 'lucide-react';
import { US_CHECK_DETAILS, ORG } from '@/lib/constants';
import { cn } from '@/lib/utils';

function CopyRow({ label, value }: { label: string; value: string }): React.JSX.Element {
  const [copied, setCopied] = useState(false);
  const isPending = !value;

  function handleCopy(): void {
    if (isPending) return;
    void navigator.clipboard.writeText(value).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div className="flex items-center justify-between gap-3 py-3 border-b border-warm-gray-100 last:border-0">
      <span className="text-warm-gray-500 text-sm shrink-0">{label}</span>
      <div className="flex items-center gap-2">
        <span className={cn(
          'text-sm font-semibold text-right',
          isPending ? 'italic text-warm-gray-400' : 'text-warm-gray-900',
        )}>
          {isPending ? 'Contact us for address' : value}
        </span>
        {!isPending && (
          <button
            type="button"
            onClick={handleCopy}
            className="p-1 rounded hover:bg-warm-gray-100 transition-colors text-warm-gray-400 hover:text-forest-green-600"
            aria-label={`Copy ${label}`}
          >
            {copied
              ? <Check size={14} className="text-forest-green-500" />
              : <Copy size={14} />}
          </button>
        )}
      </div>
    </div>
  );
}

const CHECK_STEPS = [
  { step: '1', text: 'Write a personal or cashier\'s check using the details below' },
  { step: '2', text: 'Mail it to First Baptist Sweetwater — our US partner church' },
  { step: '3', text: 'Your gift is received, processed, and forwarded to Healthy Steps Foundation' },
  { step: '4', text: 'Email us so we can confirm receipt and send a thank-you within 2 business days' },
] as const;

export default function CheckDonationPanel(): React.JSX.Element {
  return (
    <div className="space-y-8">

      {/* Zero-fee highlight */}
      <div className="flex items-start gap-4 bg-forest-green-50 rounded-xl p-5 border border-forest-green-100">
        <div className="w-10 h-10 bg-forest-green-500 rounded-full flex items-center justify-center shrink-0 mt-0.5">
          <CheckCircle size={20} className="text-white" />
        </div>
        <div>
          <p className="font-bold text-forest-green-900 mb-1">Zero Transfer Fees</p>
          <p className="text-sm text-warm-gray-600 leading-relaxed">
            Giving by check avoids the $45 SWIFT transfer fee — every dollar of your gift
            reaches families in Wakiso, Uganda.
          </p>
        </div>
      </div>

      {/* Steps */}
      <div>
        <div className="flex items-center gap-3 pb-3 border-b border-warm-gray-100 mb-5">
          <div className="w-7 h-7 rounded-full bg-forest-green-500 text-white text-xs font-bold flex items-center justify-center shrink-0">1</div>
          <h3 className="font-bold text-warm-gray-900">How Check Giving Works</h3>
        </div>
        <ol className="space-y-4">
          {CHECK_STEPS.map(({ step, text }) => (
            <li key={step} className="flex gap-4 items-start">
              <span className="shrink-0 w-7 h-7 bg-amber-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                {step}
              </span>
              <span className="text-warm-gray-600 text-sm leading-relaxed pt-0.5">{text}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* Check details */}
      <div>
        <div className="flex items-center gap-3 pb-3 border-b border-warm-gray-100 mb-4">
          <div className="w-7 h-7 rounded-full bg-forest-green-500 text-white text-xs font-bold flex items-center justify-center shrink-0">2</div>
          <h3 className="font-bold text-warm-gray-900">Check Details</h3>
        </div>
        <div className="bg-white border border-warm-gray-200 rounded-xl p-5 shadow-sm">
          <CopyRow label="Make payable to" value={US_CHECK_DETAILS.payableTo} />
          <CopyRow label="Memo / note line" value={US_CHECK_DETAILS.memo} />
          <CopyRow label="Mailing address" value={US_CHECK_DETAILS.mailingAddress} />
        </div>
        <p className="text-xs text-warm-gray-400 text-center mt-2">
          Click the copy icon next to each field to copy it.
        </p>
      </div>

      {/* Partner church note */}
      <div className="bg-amber-50 rounded-xl p-5 border border-amber-100">
        <p className="text-sm text-amber-800 leading-relaxed">
          <span className="font-semibold">About our US partner:</span>{' '}
          Checks are received by <strong>First Baptist Sweetwater</strong>, a partner church that
          administers gifts designated to Healthy Steps Foundation. Be sure to write
          &ldquo;{US_CHECK_DETAILS.memo}&rdquo; on the memo line so your gift is correctly routed.
        </p>
      </div>

      {/* Confirm by email */}
      <div>
        <div className="flex items-center gap-3 pb-3 border-b border-warm-gray-100 mb-4">
          <div className="w-7 h-7 rounded-full bg-forest-green-500 text-white text-xs font-bold flex items-center justify-center shrink-0">3</div>
          <h3 className="font-bold text-warm-gray-900">Let Us Know You Gave</h3>
        </div>
        <p className="text-sm text-warm-gray-600 leading-relaxed mb-4">
          Once your check is in the mail, drop us a quick email — we&apos;ll confirm receipt
          and send a personal thank-you within 2 business days.
        </p>
        <a
          href={`mailto:${ORG.email}?subject=Check%20Donation%20-%20Healthy%20Steps%20Foundation`}
          className="inline-flex items-center gap-2 bg-forest-green-600 text-white px-5 py-3 rounded-xl font-semibold text-sm hover:bg-forest-green-700 transition-colors"
        >
          <Mail size={16} />
          {ORG.email}
        </a>
        <div className="mt-4 space-y-1">
          {ORG.phone.map((num) => (
            <a
              key={num}
              href={`tel:${num}`}
              className="flex items-center gap-2 text-forest-green-600 text-sm hover:text-forest-green-700 transition-colors font-medium"
            >
              {num}
            </a>
          ))}
        </div>
      </div>

    </div>
  );
}
