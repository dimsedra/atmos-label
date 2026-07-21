import type { Metadata } from 'next';
import { Syne, Plus_Jakarta_Sans, Space_Mono } from 'next/font/google';
import { CartProvider } from '../context/CartContext';
import './globals.css';

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ATMOS — Independent Frequency | Seoul',
  description:
    "A Seoul-born music and lifestyle label shaping sound, image, and objects beyond the expected. We don't build artists. We find people who already are one.",
  keywords: [
    'ATMOS',
    'Music Label',
    'Seoul',
    'VALLEY',
    'PRIX',
    'Lifestyle Objects',
    'Independent Music',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${jakarta.variable} ${spaceMono.variable}`}
    >
      <body className="bg-[#f4f4f1] text-[#111] antialiased">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
