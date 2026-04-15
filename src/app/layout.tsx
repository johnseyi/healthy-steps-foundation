import type { Metadata } from 'next';
import { Inter, Merriweather } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const merriweather = Merriweather({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-merriweather',
});

export const metadata: Metadata = {
  title: {
    default: 'Healthy Steps Foundation',
    template: '%s | Healthy Steps Foundation',
  },
  description:
    'A Uganda-based NGO providing mental health support, education, and essential resources to families in Wakiso, Ndejje Division.',
  keywords: ['mental health', 'Uganda', 'NGO', 'family support', 'Wakiso', 'Ndejje'],
  openGraph: {
    title: 'Healthy Steps Foundation',
    description: 'Supporting families in Uganda with mental health, education, and essential resources.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.JSX.Element {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${merriweather.variable} h-full`}
    >
      <body className="min-h-full flex flex-col font-sans antialiased bg-warm-white text-warm-gray-900">
        {children}
      </body>
    </html>
  );
}
