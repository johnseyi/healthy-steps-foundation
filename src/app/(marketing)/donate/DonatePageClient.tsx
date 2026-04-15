'use client';

import { useSearchParams } from 'next/navigation';
import DonationForm from '@/components/donation/DonationForm';
import type { DonationFund } from '@/types';

const VALID_FUNDS: DonationFund[] = [
  'food-closet', 'clothing-closet', 'children-tuition',
  'adult-vocation', 'family-medical', 'resource-materials', 'where-needed-most',
];

export default function DonatePageClient(): React.JSX.Element {
  const params = useSearchParams();

  const amount = Number(params.get('amount')) || undefined;
  const rawFund = params.get('fund');
  const fund = VALID_FUNDS.includes(rawFund as DonationFund) ? (rawFund as DonationFund) : undefined;
  const rawType = params.get('type');
  const type = rawType === 'recurring' ? 'recurring' : rawType === 'one-time' ? 'one-time' : undefined;

  return <DonationForm defaultAmount={amount} defaultFund={fund} defaultType={type} />;
}
