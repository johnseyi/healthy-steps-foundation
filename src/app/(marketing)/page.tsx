import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import FadeUp from '@/components/ui/FadeUp';
import HeroSection from '@/components/home/HeroSection';
import StatsSection from '@/components/home/StatsSection';
import VideoSection from '@/components/home/VideoSection';
import ProgramsSection from '@/components/home/ProgramsSection';
import GallerySection from '@/components/home/GallerySection';
import TestimonialsSection from '@/components/home/TestimonialsSection';

const FIELD_IMAGE = '/images/field/counseling-circle.jpg';

export default function HomePage(): React.JSX.Element {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <VideoSection />
      <ProgramsSection />
      <GallerySection />
      <TestimonialsSection />

      {/* Field photo break — community in context */}
      <section className="relative h-[55vh] sm:h-[65vh] flex items-center overflow-hidden">
        <Image
          src={FIELD_IMAGE}
          alt="Families gathered in a mental wellness counselling circle at a Healthy Steps outreach in Wakiso, Uganda"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-forest-green-900/65" />
        <div className="relative z-10 container mx-auto px-6">
          <FadeUp className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-10 h-0.5 bg-amber-400 shrink-0" />
              <span className="text-amber-300 text-sm font-medium uppercase tracking-widest">
                Our Community
              </span>
              <div className="w-10 h-0.5 bg-amber-400 shrink-0" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-white mb-5">
              Walking alongside families through their most difficult seasons
            </h2>
            <p className="text-white/75 text-lg leading-relaxed">
              Since 2022, Healthy Steps Foundation has been embedded in the community of Ndejje,
              Wakiso — where our staff live, and the families we serve are our neighbours.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-forest-green-900 text-white py-24 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <div className="w-10 h-0.5 bg-amber-500 mx-auto mb-6" />
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
