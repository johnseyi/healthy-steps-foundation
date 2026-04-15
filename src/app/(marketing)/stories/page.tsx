import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Stories',
  description: 'Real stories from families impacted by Healthy Steps Foundation.',
};

export default function StoriesPage(): React.JSX.Element {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-black font-serif text-warm-gray-900 mb-6">Stories</h1>
        <p className="text-warm-gray-600 text-lg leading-relaxed">
          Testimonials and impact stories will be added here.
        </p>
      </div>
    </section>
  );
}
