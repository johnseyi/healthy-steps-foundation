import type { Metadata } from 'next';
import Image from 'next/image';
import { ButtonLink } from '@/components/ui/Button';
import FadeUp from '@/components/ui/FadeUp';
import { ContentIcon } from '@/lib/icons';
import { getPageContent } from '@/lib/cms/content';
import { missionSchema } from '@/lib/cms/pages/mission';

export const metadata: Metadata = {
  title: 'Our Mission',
  description: 'The mission, vision, and values driving Healthy Steps Foundation, a faith-based organization partnering with families in Uganda to improve mental health wellness.',
};

export default async function MissionPage(): Promise<React.JSX.Element> {
  const content = await getPageContent(missionSchema);

  return (
    <>
      {/* Hero — split screen */}
      <section className="overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[78vh]">
          {/* Left — text */}
          <div className="bg-forest-green-900 text-white px-8 py-24 lg:px-16 flex items-center">
            <div className="max-w-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-0.5 bg-amber-400 shrink-0" />
                <span className="text-amber-300 text-sm font-medium tracking-wide">
                  {content.heroEyebrow}
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-serif leading-[1.05] mb-6">
                {content.heroTitle}
              </h1>
              <p className="text-forest-green-100 text-lg sm:text-xl leading-relaxed">
                {content.heroLead}
              </p>
            </div>
          </div>
          {/* Right — real community photo */}
          <div className="relative min-h-[55vh] lg:min-h-0">
            <Image
              src={content.heroImage.src}
              alt={content.heroImage.alt}
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <FadeUp>
              <div className="w-10 h-0.5 bg-amber-500 mb-4" />
              <p className="text-sm font-semibold uppercase tracking-widest text-warm-gray-400 mb-4">
                {content.missionEyebrow}
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-warm-gray-900 mb-6">
                {content.missionTitle}
              </h2>
              <p className="text-warm-gray-600 leading-relaxed text-lg">{content.missionText}</p>
            </FadeUp>
            <FadeUp delay={0.15}>
              <blockquote className="bg-forest-green-50 border-l-4 border-forest-green-500 rounded-r-2xl p-8">
                <p className="text-forest-green-800 text-xl font-serif font-semibold leading-relaxed italic">
                  &ldquo;{content.missionQuote}&rdquo;
                </p>
              </blockquote>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Vision — dark green, NOT amber bg */}
      <section className="py-20 px-6 bg-forest-green-900 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <FadeUp>
            <div className="w-10 h-0.5 bg-amber-400 mx-auto mb-4" />
            <p className="text-amber-300 text-sm font-semibold uppercase tracking-widest mb-4">
              {content.visionEyebrow}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif mb-6">{content.visionTitle}</h2>
            <p className="text-forest-green-200 text-xl leading-relaxed max-w-2xl mx-auto">
              {content.visionText}
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Holistic Model */}
      <section className="py-20 px-6 bg-forest-green-50">
        <div className="container mx-auto max-w-4xl">
          <FadeUp className="mb-12">
            <div className="w-10 h-0.5 bg-amber-500 mb-4" />
            <p className="text-sm font-semibold uppercase tracking-widest text-warm-gray-400 mb-3">
              {content.modelEyebrow}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-warm-gray-900 mb-5">
              {content.modelTitle}
            </h2>
            <p className="text-warm-gray-600 text-lg leading-relaxed max-w-2xl">
              {content.modelLead}
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {content.dimensions.map((entry, i) => (
              <FadeUp key={i} delay={i * 0.07}>
                <div className="bg-white rounded-xl p-6 border border-warm-gray-100 shadow-sm h-full">
                  <div className="w-8 h-0.5 bg-amber-400 mb-3" />
                  <div className="text-forest-green-700 font-bold text-sm uppercase tracking-widest mb-2">
                    {String(entry.label ?? '')}
                  </div>
                  <p className="text-warm-gray-600 text-sm leading-relaxed">
                    {String(entry.desc ?? '')}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* 5 Cs of Resilience */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="container mx-auto max-w-4xl">
          <FadeUp className="mb-12">
            <div className="w-10 h-0.5 bg-amber-500 mb-4" />
            <p className="text-sm font-semibold uppercase tracking-widest text-warm-gray-400 mb-3">
              {content.frameworkEyebrow}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-warm-gray-900 mb-5">
              {content.frameworkTitle}
            </h2>
            <p className="text-warm-gray-600 text-lg leading-relaxed max-w-2xl">
              {content.frameworkLead}
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {content.framework.map((entry, i) => (
              <FadeUp key={i} delay={i * 0.07}>
                <div className="bg-forest-green-50 rounded-xl p-6 h-full">
                  <div className="w-8 h-0.5 bg-amber-400 mb-3" />
                  <div className="text-forest-green-700 font-bold text-sm uppercase tracking-widest mb-2">
                    {String(entry.label ?? '')}
                  </div>
                  <p className="text-warm-gray-600 text-sm leading-relaxed">
                    {String(entry.desc ?? '')}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Guiding Principles */}
      <section className="py-20 px-6 bg-forest-green-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <FadeUp className="mb-14">
            <div className="w-10 h-0.5 bg-amber-400 mb-4" />
            <p className="text-sm font-semibold uppercase tracking-widest text-forest-green-300 mb-3">
              {content.principlesEyebrow}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif">{content.principlesTitle}</h2>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.principles.map((principle, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <div className="bg-forest-green-800/60 rounded-2xl p-8 border border-forest-green-700/50 h-full">
                  <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center mb-5">
                    <ContentIcon
                      name={String(principle.icon ?? '')}
                      size={24}
                      className="text-amber-400"
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-3">{String(principle.title ?? '')}</h3>
                  <p className="text-forest-green-200 text-sm leading-relaxed">
                    {String(principle.description ?? '')}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="container mx-auto max-w-3xl text-center">
          <FadeUp>
            <div className="w-10 h-0.5 bg-amber-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold font-serif text-warm-gray-900 mb-4">
              {content.ctaTitle}
            </h2>
            <p className="text-warm-gray-500 text-lg mb-8 max-w-xl mx-auto">{content.ctaLead}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ButtonLink href={content.ctaDonateHref} size="lg">
                {content.ctaDonateLabel}
              </ButtonLink>
              <ButtonLink href={content.ctaProgramsHref} variant="secondary" size="lg">
                {content.ctaProgramsLabel}
              </ButtonLink>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
