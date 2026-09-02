import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BackToTop from '@/components/layout/BackToTop';
import { getPrograms } from '@/lib/cms/collections';
import { getPageContent } from '@/lib/cms/content';
import { siteSchema } from '@/lib/cms/pages/site';

export default async function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}): Promise<React.JSX.Element> {
  // Fetched once here rather than in each bar — both reads share one round trip,
  // and Header is a client component so it cannot read content itself.
  const [programs, site] = await Promise.all([
    getPrograms(),
    getPageContent(siteSchema),
  ]);

  return (
    <>
      {/* Keyboard users land here first and can jump past the whole nav */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-forest-green-900 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white focus:shadow-float"
      >
        Skip to content
      </a>
      <Header programs={programs} />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer content={site} />
      {/* DonationPopup removed 2026-07-30 at the client's request. The component
          is still in src/components/donation/ if it is ever wanted back. */}
      <BackToTop />
    </>
  );
}
