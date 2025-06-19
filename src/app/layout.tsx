import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeRegistry } from './ThemeRegistry';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://freshstackstudio.dev'),
  title: 'FreshStack Studio',
  description:
    'Turning bold business ideas into clear, robust digital products.',
  icons: {
    icon: '/logos/freshstack-logo.png',
    apple: '/logos/freshstack-logo.png',
  },
  openGraph: {
    title: 'FreshStack Studio',
    description:
      'Turning bold business ideas into clear, robust digital products.',
    images: [
      {
        url: '/logos/freshstack-logo.png',
        width: 800,
        height: 800,
        alt: 'FreshStack Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FreshStack Studio',
    description:
      'Turning bold business ideas into clear, robust digital products.',
    images: ['/logos/freshstack-logo.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ThemeRegistry>
          <Navbar />
          <main
            style={{
              flex: '1 0 auto',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {children}
          </main>
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
