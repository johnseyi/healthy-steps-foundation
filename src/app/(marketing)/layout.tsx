import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import DonationPopup from '@/components/donation/DonationPopup';

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <DonationPopup />
    </>
  );
}
