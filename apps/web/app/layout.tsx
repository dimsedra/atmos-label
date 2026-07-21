import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ATMOS — Independent Frequency | Seoul',
  description: 'A Seoul-born music and lifestyle label shaping sound, image, and objects beyond the expected. We don\'t build artists. We find people who already are one.',
  keywords: ['ATMOS', 'Music Label', 'Seoul', 'VALLEY', 'PRIX', 'Lifestyle Objects', 'Independent Music'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
