import type { Metadata } from 'next';
import { Mail, Phone, MapPin } from 'lucide-react';
import { ORG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Healthy Steps Foundation.',
};

export default function ContactPage(): React.JSX.Element {
  return (
    <>
      <section className="bg-forest-green-500 text-white py-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-black font-serif mb-4">Contact Us</h1>
          <p className="text-forest-green-100 text-lg">
            We&apos;d love to hear from you — whether you need help, want to partner with us, or just want to learn more.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-warm-white">
        <div className="container mx-auto max-w-3xl">
          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md">
              <MapPin size={24} className="text-forest-green-500 mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-warm-gray-900">Location</p>
                <p className="text-warm-gray-600 text-sm">
                  {ORG.location.village}, {ORG.location.ward}, {ORG.location.division},{' '}
                  {ORG.location.district}, {ORG.location.region}, {ORG.location.country}
                </p>
              </div>
            </div>
            <a href={`mailto:${ORG.email}`} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <Mail size={24} className="text-forest-green-500 mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-warm-gray-900">Email</p>
                <p className="text-forest-green-600 text-sm">{ORG.email}</p>
              </div>
            </a>
            {ORG.phone.map((num) => (
              <a key={num} href={`tel:${num}`} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow">
                <Phone size={24} className="text-amber-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-warm-gray-900">Phone</p>
                  <p className="text-amber-600 text-sm">{num}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
