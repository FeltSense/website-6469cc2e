import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Sarah Chen Photography | Award-Winning Architectural Photography',
  description: 'Award-winning architectural photographer capturing the essence of space through timeless black and white imagery. Published in Dezeen and Architectural Digest.',
  keywords: ['architectural photography', 'black and white photography', 'interior design photography', 'real estate photography', 'Sarah Chen'],
  openGraph: {
    title: 'Sarah Chen Photography | Award-Winning Architectural Photography',
    description: 'Award-winning architectural photographer capturing the essence of space through timeless black and white imagery.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sarah Chen Photography | Award-Winning Architectural Photography',
    description: 'Award-winning architectural photographer capturing the essence of space through timeless black and white imagery.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-body text-neutral-900 antialiased">
        {children}
      </body>
    </html>
  );
}