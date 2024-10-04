import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MNK - Your Trusted Device Repair Service',
  description: 'Fast, reliable, and affordable device repair services for computers, laptops, smartphones, and tablets.',
  openGraph: {
    title: 'MNK - Your Trusted Device Repair Service',
    description: 'Fast, reliable, and affordable device repair services for computers, laptops, smartphones, and tablets.',
    images: [
      {
        url: 'https://yourdomain.com/twitter-image.png', // Replace with your actual domain
        width: 1200,
        height: 630,
        alt: 'MNK Repairs Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MNK - Your Trusted Device Repair Service',
    description: 'Fast, reliable, and affordable device repair services for computers, laptops, smartphones, and tablets.',
    images: ['https://yourdomain.com/twitter-image.png'], // Replace with your actual domain
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
