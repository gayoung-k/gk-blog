import type { Metadata } from 'next';
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import './globals.css';
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';
import Providers from './providers';

export const metadata: Metadata = {
  title: {
    template: '%s | GK Blog',
    default: 'GK Blog',
  },
  description: 'It is a blog for sharing my thoughts and experiences.',
  keywords: ['Next.js', 'frontend', 'web development', 'coding', 'programming', 'react'],
  authors: [{ name: 'Gayoung Kim', url: 'https://github.com/gayoung-k' }],
  creator: 'Gayoung Kim',
  publisher: 'Gayoung Kim',
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  metadataBase: new URL('https://gk-blog-kappa.vercel.app/'),
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased">
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
