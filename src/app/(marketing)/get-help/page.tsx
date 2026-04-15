import type { Metadata } from 'next';
import { Phone, Mail } from 'lucide-react';
import { ORG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Get Help',
  description: 'Reach out to Healthy Steps Foundation for support and resources.',
};

export default function GetHelpPage(): React.JSX.Element {
  return (
    <>
      <section className="bg-forest-green-500 text-white py-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-black font-serif mb-4">Get Help</h1>
          <p className="text-forest-green-100 text-lg">
            We&apos;re here for you. Reach out and our team will respond with care and compassion.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-warm-white">
        <div className="container mx-auto max-w-3xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <a
              href={`mailto:${ORG.email}`}
              className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-forest-green-50 rounded-full flex items-center justify-center">
                <Mail size={24} className="text-forest-green-500" />
              </div>
              <div>
                <p className="font-semibold text-warm-gray-900">Email Us</p>
                <p className="text-sm text-forest-green-600">{ORG.email}</p>
              </div>
            </a>
            {ORG.phone.map((num) => (
              <a
                key={num}
                href={`tel:${num}`}
                className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center">
                  <Phone size={24} className="text-amber-500" />
                </div>
                <div>
                  <p className="font-semibold text-warm-gray-900">Call Us</p>
                  <p className="text-sm text-amber-600">{num}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
