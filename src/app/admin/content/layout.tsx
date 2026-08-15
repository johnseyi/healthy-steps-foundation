import AdminNav from '../AdminNav';

export default function ContentLayout({
  children,
}: Readonly<{ children: React.ReactNode }>): React.JSX.Element {
  return (
    <div>
      <AdminNav />
      <main className="mx-auto max-w-4xl px-6 py-8">{children}</main>
    </div>
  );
}
