'use client';

import { FUND_LABELS } from '@/lib/constants';
import type { DonationFund } from '@/types';

interface FundSelectorProps {
  value: DonationFund;
  onChange: (fund: DonationFund) => void;
  error?: string;
}

const FUND_OPTIONS = Object.entries(FUND_LABELS) as [DonationFund, string][];

export default function FundSelector({ value, onChange, error }: FundSelectorProps): React.JSX.Element {
  return (
    <div className="space-y-1.5">
      <label htmlFor="fund" className="block text-sm font-medium text-warm-gray-700">
        Designate Your Gift
      </label>
      <select
        id="fund"
        value={value}
        onChange={(e) => onChange(e.target.value as DonationFund)}
        className="w-full px-4 py-3 border-2 border-warm-gray-200 rounded-lg bg-white focus:border-forest-green-500 focus:outline-none focus:ring-2 focus:ring-forest-green-100 transition-colors duration-200 text-warm-gray-900"
      >
        {FUND_OPTIONS.map(([slug, label]) => (
          <option key={slug} value={slug}>{label}</option>
        ))}
      </select>
      {error && <p className="text-sm text-error">{error}</p>}
    </div>
  );
}
