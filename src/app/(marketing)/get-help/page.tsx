import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Phone,
  Mail,
  CheckCircle,
  ArrowRight,
  UtensilsCrossed,
  Shirt,
  GraduationCap,
  Briefcase,
  Stethoscope,
  BookOpen,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { ORG, PROGRAMS } from '@/lib/constants';
import FadeUp from '@/components/ui/FadeUp';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Get Help | Healthy Steps Foundation',
  description:
    'Healthy Steps Foundation provides emergency, as-needed support to families in Ndejje, Uganda. Learn about our programs and how to reach out for help.',
};

const PROGRAM_ICONS: Record<string, LucideIcon> = {
  UtensilsCrossed,
  Shirt,
  GraduationCap,
  Briefcase,
  Stethoscope,
  BookOpen,
};

const ELIGIBILITY_ITEMS = [
  'Food insecurity or hunger in the household',
  'Inability to pay school fees for a child',
  'Lack of basic clothing for family members',
  'A medical emergency with no means to pay',
  'Economic hardship affecting mental health',
  'Need for vocational skills to earn income',
  'Need for mental wellness or spiritual resources',
];

const STEPS = [
  {
    title: 'Reach Out',
    description:
      'Call us, email us, or visit us in Ndejje. No complicated application — we respond to need. Urgent cases receive same-day attention.',
  },
  {
    title: 'Compassionate Conversation',
    description:
      "We listen to understand your family's situation — private, judgment-free, and respectful of your dignity from the very first interaction.",
  },
  {
    title: 'Tailored Support',
    description:
      'We match your family with the right program or combination of programs for your specific need — food, clothing, school fees, medical care, and more.',
  },
  {
    title: 'Follow-Up & Stability',
    description:
      "We check in to ensure your situation is stabilising and connect you with other resources as needed, walking alongside you through your crisis period.",
  },
];

const PROMISES = [
  {
    title: 'Private & Confidential',
    description:
      'Your information is handled with discretion. What you share stays with our team.',
  },
  {
    title: 'No Judgment',
    description:
      "Every family faces seasons of hardship. Needing help is not a failure — it's human.",
  },
  {
    title: 'Open to Everyone',
    description:
      'We are faith-rooted but serve all families regardless of background or beliefs.',
  },
  {
    title: 'Dignity First',
    description:
      'Every interaction is designed to honor your worth and preserve your agency as a family.',
  },
];

export default function GetHelpPage(): React.JSX.Element {
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
            Support for Families
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-serif leading-tight mb-6">
            We&apos;re Here to Help
          </h1>
          <p className="text-forest-green-100 text-lg sm:text-xl leading-relaxed max-w-2xl">
            Healthy Steps Foundation walks alongside families facing temporary hardship — with
            faith-grounded care, dignity, and no judgment. Reach out today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <a
              href={`tel:${ORG.phone[0]}`}
              className="inline-flex items-center justify-center gap-2 bg-amber-500 text-white font-semibold px-8 py-4 text-lg rounded-lg hover:bg-amber-600 active:bg-amber-700 transition-colors shadow-md hover:shadow-lg"
            >
              <Phone size={20} />
              Call Us Now
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/70 text-white font-semibold px-8 py-4 text-lg rounded-lg hover:border-white hover:bg-white/10 transition-colors"
            >
              Send a Message
            </Link>
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <FadeUp>
              <p className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-4">
                Who We Serve
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-warm-gray-900 mb-6">
                Families in Temporary Crisis
              </h2>
              <div className="space-y-4 text-warm-gray-600 leading-relaxed">
                <p>
                  We support families in Ndejje Division, Wakiso, who are facing short-term hardship
                  that threatens their mental, physical, or economic wellbeing — on an as-needed,
                  emergency basis.
                </p>
                <p>
                  We are not a long-term welfare programme. We help families through their crisis
                  period — providing the specific support they need, when they need it — so they can
                  stabilise and move forward with dignity and self-sufficiency.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.12}>
              <div className="bg-forest-green-50 rounded-2xl p-8">
                <h3 className="font-bold text-warm-gray-900 text-lg mb-6">
                  We can help if your family is facing:
                </h3>
                <ul className="space-y-3">
                  {ELIGIBILITY_ITEMS.map((item) => (
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

      {/* Programs Available */}
      <section className="py-20 px-6 bg-forest-green-50">
        <div className="container mx-auto max-w-6xl">
          <FadeUp className="text-center mb-12">
            <p className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-3">
              Our Programs
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-warm-gray-900 mb-4">
              How We Can Support You
            </h2>
            <p className="text-warm-gray-500 text-lg max-w-xl mx-auto">
              Six programs working together to address every dimension of a family&apos;s wellbeing.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROGRAMS.map((program, i) => {
              const Icon = PROGRAM_ICONS[program.icon] ?? BookOpen;
              return (
                <FadeUp key={program.slug} delay={i * 0.07}>
                  <Link
                    href={`/programs/${program.slug}`}
                    className="group bg-white rounded-2xl p-7 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col"
                  >
                    <div className="w-12 h-12 bg-forest-green-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-forest-green-100 transition-colors shrink-0">
                      <Icon size={22} className="text-forest-green-500" />
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
            <Link href="/programs">
              <Button variant="secondary" size="lg">
                View All Programs
              </Button>
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="container mx-auto max-w-4xl">
          <FadeUp className="mb-12">
            <p className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-3">
              The Process
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-warm-gray-900">
              How It Works
            </h2>
          </FadeUp>

          <div className="space-y-5">
            {STEPS.map(({ title, description }, i) => (
              <FadeUp key={title} delay={i * 0.09}>
                <div className="flex gap-6 items-start bg-white rounded-2xl p-7 shadow-md">
                  <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center shrink-0 text-white font-black text-lg font-serif">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-warm-gray-900 text-lg mb-1">{title}</h3>
                    <p className="text-warm-gray-600 leading-relaxed">{description}</p>
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
              Our Promise to You
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif">What to Expect</h2>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PROMISES.map(({ title, description }, i) => (
              <FadeUp key={title} delay={i * 0.08}>
                <div className="bg-forest-green-800/60 rounded-2xl p-7 border border-forest-green-700/50 h-full">
                  <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center mb-4">
                    <CheckCircle size={20} className="text-amber-400" />
                  </div>
                  <h3 className="font-bold text-white mb-2">{title}</h3>
                  <p className="text-forest-green-200 text-sm leading-relaxed">{description}</p>
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
              Ready to Reach Out?
            </h2>
            <p className="text-warm-gray-500 text-lg mb-10 max-w-xl mx-auto">
              You don&apos;t need to have everything figured out. Just reach out — we&apos;ll walk
              through everything together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              {ORG.phone.map((num) => (
                <a key={num} href={`tel:${num}`}>
                  <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                    <Phone size={20} />
                    {num}
                  </Button>
                </a>
              ))}
            </div>
            <p className="text-warm-gray-500 text-sm">
              Or email us at{' '}
              <a
                href={`mailto:${ORG.email}`}
                className="text-forest-green-600 font-medium hover:underline"
              >
                {ORG.email}
              </a>
            </p>
            <div className="mt-10 pt-10 border-t border-warm-gray-200">
              <p className="text-warm-gray-500 text-sm mb-4">Want to support families like these?</p>
              <Link href="/donate">
                <Button variant="primary" size="lg">
                  <Mail size={20} />
                  Donate to Our Work
                </Button>
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
