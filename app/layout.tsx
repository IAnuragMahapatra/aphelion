import './globals.css';
import type { Metadata } from 'next';
import { LanguageProvider } from '@/lib/LanguageContext';
import { Header } from '@/components/layout/Header';
import { NavBar } from '@/components/layout/NavBar';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'FRA Digital Platform | वन अधिकार डिजिटल मंच',
  description: 'Forest Rights Act Digital Platform - WebGIS-powered decision support system for digitizing FRA claims and generating actionable policy recommendations',
  keywords: 'FRA, Forest Rights Act, Digital Platform, WebGIS, India, Tribal Affairs',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </head>
      <body className="flex flex-col min-h-screen">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <LanguageProvider>
          <Header />
          <NavBar />

          <main id="main-content" className="flex-grow" tabIndex={-1}>
            {children}
          </main>

          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
