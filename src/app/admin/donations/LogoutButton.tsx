'use client';

import { useRouter } from 'next/navigation';
import { LogOut } from 'lucide-react';

export default function LogoutButton(): React.JSX.Element {
  const router = useRouter();

  async function handleLogout(): Promise<void> {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin/login');
    router.refresh();
  }

  return (
    <button
      type="button"
      onClick={handleLogout}
      className="inline-flex items-center gap-2 text-sm font-medium text-warm-gray-600 hover:text-forest-green-600 transition-colors"
    >
      <LogOut size={16} />
      Logout
    </button>
  );
}
