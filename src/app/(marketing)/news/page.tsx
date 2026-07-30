import type { Metadata } from 'next';
import Image from 'next/image';
import { Heart, Mail, Phone } from 'lucide-react';
import { NEWS_UPDATES, US_CHECK_DETAILS, ORG } from '@/lib/constants';
import FadeUp from '@/components/ui/FadeUp';
import { ButtonLink, buttonStyles } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'News | Healthy Steps Foundation',
  description:
    'Updates from Healthy Steps Foundation on recent events, fundraising, and what is next for families in Ndejje, Uganda.',
};

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function NewsPage(): React.JSX.Element {
  const [latest] = NEWS_UPDATES;

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <Image
          src={latest.image}
          alt="Healthy Steps Foundation volunteers distributing staple food bags in Kampala, Uganda"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-green-900/95 via-forest-green-900/70 to-forest-green-900/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-green-900/55 via-transparent to-transparent" />
        <div className="relative z-10 container mx-auto px-6 py-24">
          <div className="w-10 h-0.5 bg-amber-400 mb-4" />
          <p className="text-sm font-semibold uppercase tracking-widest text-forest-green-300 mb-3">
            Foundation News
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-serif leading-tight text-white max-w-2xl">
            Updates from Healthy Steps Foundation
          </h1>
          <p className="text-forest-green-100 text-lg sm:text-xl leading-relaxed max-w-2xl mt-6">
            Recent events, fundraising news, and what is next for the families we serve in
            Ndejje, Uganda.
          </p>
        </div>
      </section>

      {/* Latest update */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="container mx-auto max-w-3xl">
          <FadeUp className="mb-10">
            <div className="w-10 h-0.5 bg-amber-500 mb-4" />
            <p className="text-sm font-semibold uppercase tracking-widest text-warm-gray-400 mb-3">
              {formatDate(latest.date)}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-warm-gray-900">
              {latest.title}
            </h2>
          </FadeUp>

          <FadeUp delay={0.08}>
            <p className="text-warm-gray-900 font-semibold mb-6">Dear Friends,</p>
            <div className="space-y-5 text-warm-gray-600 leading-relaxed">
              {latest.body.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
            <p className="mt-8 text-warm-gray-700">
              Gratefully,
              <br />
              <span className="font-semibold text-warm-gray-900">
                {latest.signOff.name}, {latest.signOff.title}
              </span>
            </p>
          </FadeUp>
        </div>
      </section>

      {/* How to give in response to this update */}
      <section className="py-20 px-6 bg-forest-green-50">
        <div className="container mx-auto max-w-4xl">
          <FadeUp className="text-center mb-12">
            <div className="w-10 h-0.5 bg-amber-500 mb-4 mx-auto" />
            <p className="text-sm font-semibold uppercase tracking-widest text-warm-gray-400 mb-3">
              Give in Response
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-warm-gray-900">
              Support the Next Outreach
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FadeUp delay={0.08}>
              <div className="bg-white rounded-2xl p-8 shadow-md h-full flex flex-col">
                <h3 className="font-bold text-warm-gray-900 text-lg mb-2">Give Online</h3>
                <p className="text-warm-gray-600 text-sm leading-relaxed mb-6 flex-1">
                  Donate by SWIFT bank transfer directly to Healthy Steps Foundation&apos;s dfcu
                  Bank account.
                </p>
                <ButtonLink href="/donate" size="md" className="w-full">
                  <Heart size={18} />
                  Donate Now
                </ButtonLink>
              </div>
            </FadeUp>

            <FadeUp delay={0.16}>
              <div className="bg-white rounded-2xl p-8 shadow-md h-full flex flex-col">
                <h3 className="font-bold text-warm-gray-900 text-lg mb-2">Give by Check</h3>
                <p className="text-warm-gray-600 text-sm leading-relaxed mb-4">
                  Make checks payable to <strong>{US_CHECK_DETAILS.payableTo}</strong>, with{' '}
                  <strong>{US_CHECK_DETAILS.memo}</strong> on the FOR line, and mail to:
                </p>
                <p className="text-warm-gray-900 text-sm font-medium leading-relaxed">
                  {US_CHECK_DETAILS.mailingAddress}
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-forest-green-900 text-white">
        <div className="container mx-auto max-w-3xl text-center">
          <FadeUp>
            <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4">
              Stay Connected
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif mb-5">
              Have Questions About an Event?
            </h2>
            <p className="text-forest-green-200 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Reach out any time — we would love to share more about what your prayers and
              donations make possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${ORG.email}`}
                className={buttonStyles('primary', 'lg', 'w-full sm:w-auto')}
              >
                <Mail size={20} />
                Email Us
              </a>
              <a
                href={`tel:${ORG.phone[0]}`}
                className={buttonStyles('onDark', 'lg', 'w-full sm:w-auto')}
              >
                <Phone size={20} />
                Call Us
              </a>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
