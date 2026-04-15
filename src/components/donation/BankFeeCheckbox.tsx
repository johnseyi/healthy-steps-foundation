'use client';

import { BANK_FEE_USD } from '@/lib/constants';
import { formatCurrency } from '@/lib/utils';

interface BankFeeCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export default function BankFeeCheckbox({ checked, onChange }: BankFeeCheckboxProps): React.JSX.Element {
  return (
    <label className="flex items-start gap-3 cursor-pointer group p-4 rounded-lg border-2 border-warm-gray-200 hover:border-forest-green-200 transition-colors">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="w-5 h-5 mt-0.5 rounded border-2 border-warm-gray-300 text-forest-green-500 focus:ring-2 focus:ring-forest-green-100 cursor-pointer shrink-0"
      />
      <div>
        <p className="font-semibold text-warm-gray-800 group-hover:text-warm-gray-900">
          I&apos;ll cover the {formatCurrency(BANK_FEE_USD)} bank transfer fee
        </p>
        <p className="text-sm text-warm-gray-500 mt-1 leading-relaxed">
          This allows <strong>100% of your donation</strong> to reach the families we serve. Without this,{' '}
          {formatCurrency(BANK_FEE_USD)} will be deducted from your donation to cover international transfer costs.
        </p>
      </div>
    </label>
  );
}
