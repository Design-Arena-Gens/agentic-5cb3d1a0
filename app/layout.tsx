import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bungo Notes ? Minimalist Typewriter Blog',
  description: 'A stark black-and-white typewriter blog exploring authors referenced in Bungo Stray Dogs, with grounded insight.',
  openGraph: {
    title: 'Bungo Notes ? Minimalist Typewriter Blog',
    description:
      'A stark black-and-white typewriter blog exploring authors referenced in Bungo Stray Dogs, with grounded insight.',
    url: 'https://agentic-5cb3d1a0.vercel.app',
    siteName: 'Bungo Notes',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Bungo Notes ? Minimalist Typewriter Blog',
    description:
      'A stark black-and-white typewriter blog exploring authors referenced in Bungo Stray Dogs, with grounded insight.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Special+Elite&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
