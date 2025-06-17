import type { Metadata } from 'next';
import { ThemeRegistry } from './ThemeRegistry';
import './globals.css';

export const metadata: Metadata = {
  title: 'FreshStack Studio',
  description: 'Modern web application built with Next.js and Material-UI',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
