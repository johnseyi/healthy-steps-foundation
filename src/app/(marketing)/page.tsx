import Link from 'next/link';
import Button from '@/components/ui/Button';
import HeroSection from '@/components/home/HeroSection';
import StatsSection from '@/components/home/StatsSection';
import ProgramsSection from '@/components/home/ProgramsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';

export default function HomePage(): React.JSX.Element {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ProgramsSection />
      <TestimonialsSection />

      {/* Final CTA */}
      <section className="bg-forest-green-900 text-white py-24 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Partner With Us
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif mb-5">
            Help a Family Through Their Most Difficult Season
          </h2>
          <p className="text-forest-green-200 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Your donation partners with a family in Wakiso facing a temporary crisis — providing
            the mental health support, food, education, or medical care they need to get back on
            their feet with dignity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate">
              <Button variant="primary" size="lg" className="w-full sm:w-auto px-10">
                Donate Today
              </Button>
            </Link>
            <Link href="/about">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto px-10 border-forest-green-500 text-forest-green-200 hover:bg-forest-green-800"
              >
                Our Story
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
