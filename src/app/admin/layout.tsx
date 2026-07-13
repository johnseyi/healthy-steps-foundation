import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { default: 'Admin', template: '%s | Healthy Steps Foundation Admin' },
  robots: { index: false, follow: false },
};

export default function AdminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>): React.JSX.Element {
  return <div className="min-h-screen bg-warm-white">{children}</div>;
}
