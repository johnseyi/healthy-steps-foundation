import LogoutButton from './LogoutButton';

export default function DonationsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>): React.JSX.Element {
  return (
    <div>
      <header className="border-b border-warm-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-warm-gray-400">
              Healthy Steps Foundation
            </p>
            <h1 className="text-lg font-bold font-serif text-warm-gray-900">Donation Records</h1>
          </div>
          <LogoutButton />
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-6 py-8">{children}</main>
    </div>
  );
}
