import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Phone,
  Mail,
  CheckCircle,
  ArrowRight,
  Clock,
} from 'lucide-react';
import { ORG } from '@/lib/constants';
import FadeUp from '@/components/ui/FadeUp';
import { ProgramIcon } from '@/lib/icons';
import { ButtonLink, buttonStyles } from '@/components/ui/Button';
import { getPrograms } from '@/lib/cms/collections';
import { getPageContent } from '@/lib/cms/content';
import { getHelpSchema } from '@/lib/cms/pages/get-help';

export const metadata: Metadata = {
  title: 'Get Help | Healthy Steps Foundation',
  description:
    'Healthy Steps Foundation provides emergency, temporary support to families in Ndejje, Uganda. Learn about our programs and how to reach out for help.',
};

function str(value: unknown): string {
  return typeof value === 'string' ? value : '';
}

export default async function GetHelpPage(): Promise<React.JSX.Element> {
  const [content, programs] = await Promise.all([
    getPageContent(getHelpSchema),
    getPrograms(),
  ]);

  return (
    <>
      {/* Hero */}
      <section className="bg-forest-green-900 text-white py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-forest-green-700/30 rounded-full -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full translate-y-1/2 -translate-x-1/3" />
        </div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4">
            {content.heroEyebrow}
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-serif leading-tight mb-6">
            {content.heroTitle}
          </h1>
          <p className="text-forest-green-100 text-lg sm:text-xl leading-relaxed max-w-2xl">
            {content.heroLead}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <a
              href={`tel:${ORG.phone[0]}`}
              className={buttonStyles('primary', 'lg', 'w-full sm:w-auto')}
            >
              <Phone size={20} />
              {content.heroCallLabel}
            </a>
            <ButtonLink
              href={content.heroMessageHref}
              variant="onDark"
              size="lg"
              className="w-full sm:w-auto"
            >
              {content.heroMessageLabel}
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <FadeUp>
              <p className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-4">
                {content.whoEyebrow}
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-warm-gray-900 mb-6">
                {content.whoTitle}
              </h2>
              <div className="space-y-4 text-warm-gray-600 leading-relaxed">
                {content.whoParagraphs.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={0.12}>
              <div className="bg-forest-green-50 rounded-2xl p-8">
                <h3 className="font-bold text-warm-gray-900 text-lg mb-6">
                  {content.eligibilityHeading}
                </h3>
                <ul className="space-y-3">
                  {content.eligibility.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle
                        size={18}
                        className="text-forest-green-500 mt-0.5 shrink-0"
                      />
                      <span className="text-warm-gray-700 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Hours of Operation */}
      <section className="py-20 px-6 bg-forest-green-50">
        <div className="container mx-auto max-w-4xl">
          <FadeUp className="mb-12">
            <p className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-3">
              {content.hoursEyebrow}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-warm-gray-900">
              {content.hoursTitle}
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {content.hours.map((entry, i) => (
              <FadeUp key={i} delay={i * 0.07}>
                <div className="flex gap-4 items-start bg-white rounded-2xl p-6 shadow-md h-full">
                  <div className="w-10 h-10 bg-forest-green-500 rounded-lg flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-warm-gray-900 mb-1">{str(entry.title)}</h3>
                    <p className="text-warm-gray-600 text-sm leading-relaxed">
                      {str(entry.description)}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Available */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="container mx-auto max-w-6xl">
          <FadeUp className="text-center mb-12">
            <p className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-3">
              {content.programsEyebrow}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-warm-gray-900 mb-4">
              {content.programsTitle}
            </h2>
            <p className="text-warm-gray-500 text-lg max-w-xl mx-auto">{content.programsLead}</p>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {programs.map((program, i) => {
              return (
                <FadeUp key={program.slug} delay={i * 0.07}>
                  <Link
                    href={`/programs/${program.slug}`}
                    className="group bg-white rounded-2xl p-7 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col"
                  >
                    <div className="w-12 h-12 bg-forest-green-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-forest-green-100 transition-colors shrink-0">
                      <ProgramIcon name={program.icon} size={22} className="text-forest-green-500" />
                    </div>
                    <h3 className="font-bold text-warm-gray-900 mb-2">{program.name}</h3>
                    <p className="text-warm-gray-600 text-sm leading-relaxed flex-1">
                      {program.shortDescription}
                    </p>
                    <span className="mt-4 text-sm font-semibold text-amber-600 group-hover:text-amber-700 inline-flex items-center gap-1.5 transition-colors">
                      Learn more
                      <ArrowRight
                        size={14}
                        className="group-hover:translate-x-0.5 transition-transform"
                      />
                    </span>
                  </Link>
                </FadeUp>
              );
            })}
          </div>

          <FadeUp delay={0.3} className="text-center mt-10">
            <ButtonLink href="/programs" variant="secondary" size="lg">
              {content.programsButtonLabel}
            </ButtonLink>
          </FadeUp>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-forest-green-50">
        <div className="container mx-auto max-w-4xl">
          <FadeUp className="mb-12">
            <p className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-3">
              {content.processEyebrow}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-warm-gray-900">
              {content.processTitle}
            </h2>
          </FadeUp>

          <div className="space-y-5">
            {content.steps.map((step, i) => (
              <FadeUp key={i} delay={i * 0.09}>
                <div className="flex gap-6 items-start bg-white rounded-2xl p-7 shadow-md">
                  <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center shrink-0 text-white font-black text-lg font-serif">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-warm-gray-900 text-lg mb-1">{str(step.title)}</h3>
                    <p className="text-warm-gray-600 leading-relaxed">{str(step.description)}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-20 px-6 bg-forest-green-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <FadeUp className="text-center mb-14">
            <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
              {content.promiseEyebrow}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif">{content.promiseTitle}</h2>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {content.promises.map((promise, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <div className="bg-forest-green-800/60 rounded-2xl p-7 border border-forest-green-700/50 h-full">
                  <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center mb-4">
                    <CheckCircle size={20} className="text-amber-400" />
                  </div>
                  <h3 className="font-bold text-white mb-2">{str(promise.title)}</h3>
                  <p className="text-forest-green-200 text-sm leading-relaxed">
                    {str(promise.description)}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="container mx-auto max-w-3xl text-center">
          <FadeUp>
            <h2 className="text-3xl font-bold font-serif text-warm-gray-900 mb-4">
              {content.ctaTitle}
            </h2>
            <p className="text-warm-gray-500 text-lg mb-10 max-w-xl mx-auto">{content.ctaLead}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              {ORG.phone.map((num) => (
                <a
                  key={num}
                  href={`tel:${num}`}
                  className={buttonStyles('secondary', 'lg', 'w-full sm:w-auto')}
                >
                  <Phone size={20} />
                  {num}
                </a>
              ))}
            </div>
            <p className="text-warm-gray-500 text-sm">
              {content.ctaEmailPrefix}{' '}
              <a
                href={`mailto:${ORG.email}`}
                className="text-forest-green-600 font-medium hover:underline"
              >
                {ORG.email}
              </a>
            </p>
            <div className="mt-10 pt-10 border-t border-warm-gray-200">
              <p className="text-warm-gray-500 text-sm mb-4">{content.ctaDonatePrompt}</p>
              <ButtonLink href={content.ctaDonateHref} size="lg">
                <Mail size={20} />
                {content.ctaDonateLabel}
              </ButtonLink>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
