import Image from 'next/image';
import { ButtonLink } from '@/components/ui/Button';
import FadeUp from '@/components/ui/FadeUp';
import EventsBanner from '@/components/home/EventsBanner';
import HeroSection from '@/components/home/HeroSection';
import StatsSection from '@/components/home/StatsSection';
import VideoSection from '@/components/home/VideoSection';
import ProgramsSection from '@/components/home/ProgramsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import { getPageContent } from '@/lib/cms/content';
import { getPrograms, getTestimonials, getUpcomingEvents } from '@/lib/cms/collections';
import { homeSchema } from '@/lib/cms/pages/home';

// EventsBanner picks "the next upcoming event" from today's date — without
// revalidation this page is statically prerendered once and the banner would
// freeze at build time instead of updating as events pass.
export const revalidate = 3600;

export default async function HomePage(): Promise<React.JSX.Element> {
  const [content, programs, testimonials, events] = await Promise.all([
    getPageContent(homeSchema),
    getPrograms(),
    getTestimonials(),
    getUpcomingEvents(),
  ]);

  return (
    <>
      <EventsBanner events={events} />
      <HeroSection content={content} />
      <StatsSection content={content} />
      <VideoSection content={content} />
      <ProgramsSection content={content} programs={programs} />
      <TestimonialsSection content={content} testimonials={testimonials} />

      {/* Field photo break — community in context */}
      <section className="grain-overlay relative flex h-[55vh] items-center overflow-hidden sm:h-[65vh]">
        <Image
          src={content.breakImage.src}
          alt={content.breakImage.alt}
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-forest-green-900/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-green-900/60 via-transparent to-forest-green-900/40" />
        <div className="relative z-10 container mx-auto px-6">
          <FadeUp className="mx-auto max-w-3xl text-center">
            <div className="mb-6 flex items-center justify-center gap-3">
              <div className="h-0.5 w-10 shrink-0 rounded-full bg-amber-400" />
              <span className="text-xs font-semibold tracking-[0.2em] text-amber-300 uppercase sm:text-sm">
                {content.breakEyebrow}
              </span>
              <div className="h-0.5 w-10 shrink-0 rounded-full bg-amber-400" />
            </div>
            <h2 className="mb-5 font-serif text-3xl leading-[1.15] font-bold tracking-tight whitespace-pre-line text-white sm:text-4xl lg:text-5xl">
              {content.breakTitle}
            </h2>
            <p className="text-lg leading-relaxed text-white/75">{content.breakLead}</p>
          </FadeUp>
        </div>
      </section>

      {/* Final CTA — a contained card so it does not merge into the dark footer */}
      <section className="bg-warm-white px-6 py-24 sm:py-28">
        <div className="container mx-auto max-w-5xl">
          <FadeUp>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-forest-green-700 via-forest-green-800 to-forest-green-900 px-8 py-16 text-center shadow-float sm:px-14 sm:py-20">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-24 -right-20 h-72 w-72 rounded-full bg-amber-400/15 blur-3xl"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-28 -left-16 h-72 w-72 rounded-full bg-forest-green-400/15 blur-3xl"
              />

              <div className="relative z-10">
                <div className="mx-auto mb-6 h-0.5 w-10 rounded-full bg-amber-400" />
                <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-amber-300 uppercase sm:text-sm">
                  {content.ctaEyebrow}
                </p>
                <h2 className="mb-5 font-serif text-3xl leading-[1.15] font-bold tracking-tight whitespace-pre-line text-white sm:text-4xl">
                  {content.ctaTitle}
                </h2>
                <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-forest-green-100/85">
                  {content.ctaLead}
                </p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                  <ButtonLink href={content.ctaDonateHref} size="lg" className="w-full sm:w-auto">
                    {content.ctaDonateLabel}
                  </ButtonLink>
                  <ButtonLink
                    href={content.ctaStoryHref}
                    variant="onDark"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    {content.ctaStoryLabel}
                  </ButtonLink>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
