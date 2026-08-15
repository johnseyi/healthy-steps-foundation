import AdminNav from '../AdminNav';

export default function DonationsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>): React.JSX.Element {
  return (
    <div>
      <AdminNav />
      <main className="mx-auto max-w-7xl px-6 py-8">
        <h1 className="mb-6 font-serif text-2xl font-bold text-warm-gray-900">Donation Records</h1>
        {children}
      </main>
    </div>
  );
}
