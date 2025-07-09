import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tyna Marketing - Social Media Marketing Agency',
  description: 'We empower small businesses to succeed through social media marketing. Professional social media management, creative design, and paid advertising services.',
  keywords: 'social media marketing, digital marketing, small business marketing, social media management, brand design, paid advertising, content creation',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}