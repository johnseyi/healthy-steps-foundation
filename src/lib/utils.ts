import { BANK_FEE_USD } from './constants';

export function formatCurrency(amount: number, currency = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function calculateDonationTotals(
  amount: number,
  coverBankFee: boolean,
): { donationAmount: number; bankFee: number; totalAmount: number } {
  const bankFee = coverBankFee ? BANK_FEE_USD : 0;
  return {
    donationAmount: amount,
    bankFee,
    totalAmount: amount + bankFee,
  };
}

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}
