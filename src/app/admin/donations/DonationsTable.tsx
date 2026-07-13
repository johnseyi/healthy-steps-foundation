'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { formatCurrency, cn } from '@/lib/utils';
import { FUND_LABELS } from '@/lib/constants';
import type { DonationRecord } from '@/types';

export default function DonationsTable({
  donations,
}: {
  donations: DonationRecord[];
}): React.JSX.Element {
  const router = useRouter();
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  async function markReceived(id: string): Promise<void> {
    setUpdatingId(id);
    try {
      const res = await fetch(`/api/admin/donations/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: 'received' }),
      });
      if (res.ok) router.refresh();
    } finally {
      setUpdatingId(null);
    }
  }

  if (donations.length === 0) {
    return <p className="text-warm-gray-500">No donation pledges yet.</p>;
  }

  return (
    <div className="bg-white rounded-xl border border-warm-gray-200 overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-warm-gray-200 text-left text-warm-gray-500">
            <th className="px-4 py-3 font-medium">Invoice #</th>
            <th className="px-4 py-3 font-medium">Date</th>
            <th className="px-4 py-3 font-medium">Donor</th>
            <th className="px-4 py-3 font-medium">Method</th>
            <th className="px-4 py-3 font-medium">Type</th>
            <th className="px-4 py-3 font-medium">Fund</th>
            <th className="px-4 py-3 font-medium text-right">Total</th>
            <th className="px-4 py-3 font-medium">Status</th>
            <th className="px-4 py-3 font-medium" />
          </tr>
        </thead>
        <tbody>
          {donations.map((d) => (
            <tr key={d.id} className="border-b border-warm-gray-100 last:border-0">
              <td className="px-4 py-3 font-mono text-xs text-warm-gray-500">{d.invoiceNumber}</td>
              <td className="px-4 py-3 text-warm-gray-600 whitespace-nowrap">
                {new Date(d.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
              </td>
              <td className="px-4 py-3">
                <div className="font-medium text-warm-gray-900">{d.firstName} {d.lastName}</div>
                <div className="text-xs text-warm-gray-500">{d.email}</div>
              </td>
              <td className="px-4 py-3 text-warm-gray-600 capitalize">{d.method === 'swift' ? 'SWIFT' : 'US Check'}</td>
              <td className="px-4 py-3 text-warm-gray-600 capitalize">
                {d.donationType === 'recurring' ? `Recurring (${d.recurringFrequency})` : 'One-time'}
              </td>
              <td className="px-4 py-3 text-warm-gray-600">{FUND_LABELS[d.fund] ?? d.fund}</td>
              <td className="px-4 py-3 text-right font-semibold text-warm-gray-900">
                {formatCurrency(d.totalAmount)}
              </td>
              <td className="px-4 py-3">
                <span className={cn(
                  'inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold',
                  d.status === 'received'
                    ? 'bg-forest-green-100 text-forest-green-700'
                    : 'bg-amber-100 text-amber-700',
                )}>
                  {d.status === 'received' ? 'Received' : 'Pledged'}
                </span>
              </td>
              <td className="px-4 py-3">
                {d.status === 'pledged' && (
                  <button
                    type="button"
                    onClick={() => markReceived(d.id)}
                    disabled={updatingId === d.id}
                    className="text-xs font-semibold text-forest-green-600 hover:text-forest-green-700 disabled:opacity-50"
                  >
                    {updatingId === d.id ? 'Saving...' : 'Mark received'}
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
