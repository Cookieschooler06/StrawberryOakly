import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'StrawberryOakly',
  description: 'Your next favorite gaming hub for home, profiles, leaderboards, and fun online games.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
