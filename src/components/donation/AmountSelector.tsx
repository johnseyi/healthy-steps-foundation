'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { DONATION_AMOUNTS } from '@/lib/constants';

interface AmountSelectorProps {
  value: number;
  onChange: (amount: number) => void;
}

export default function AmountSelector({ value, onChange }: AmountSelectorProps): React.JSX.Element {
  const [customMode, setCustomMode] = useState(!DONATION_AMOUNTS.includes(value as typeof DONATION_AMOUNTS[number]));

  function handlePreset(amount: number): void {
    setCustomMode(false);
    onChange(amount);
  }

  function handleCustomChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const parsed = parseFloat(e.target.value);
    onChange(isNaN(parsed) ? 0 : parsed);
  }

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
        {DONATION_AMOUNTS.map((amount) => (
          <button
            key={amount}
            type="button"
            onClick={() => handlePreset(amount)}
            className={cn(
              'py-3 px-2 rounded-lg border-2 font-semibold text-sm transition-all duration-200',
              !customMode && value === amount
                ? 'border-forest-green-500 bg-forest-green-50 text-forest-green-700'
                : 'border-warm-gray-200 text-warm-gray-700 hover:border-warm-gray-300',
            )}
          >
            ${amount}
          </button>
        ))}
        <button
          type="button"
          onClick={() => { setCustomMode(true); }}
          className={cn(
            'py-3 px-2 rounded-lg border-2 font-semibold text-sm transition-all duration-200 col-span-3 sm:col-span-1',
            customMode
              ? 'border-forest-green-500 bg-forest-green-50 text-forest-green-700'
              : 'border-warm-gray-200 text-warm-gray-700 hover:border-warm-gray-300',
          )}
        >
          Custom
        </button>
      </div>

      {customMode && (
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-warm-gray-500 font-semibold">$</span>
          <input
            type="number"
            min="1"
            step="1"
            value={value || ''}
            onChange={handleCustomChange}
            placeholder="Enter amount"
            className="w-full pl-8 pr-4 py-3 border-2 border-forest-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-green-100 text-warm-gray-900"
            autoFocus
          />
        </div>
      )}
    </div>
  );
}
