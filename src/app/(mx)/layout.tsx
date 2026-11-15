import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import { SITE_CONFIG } from '@/config/site';
import { GoogleAdSense } from '@/components/ads/GoogleAdSense';
import { CloudflareAnalytics } from '@/components/analytics/CloudflareAnalytics';

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.baseUrl),
  title: 'Calcula México - Calculadoras Laborales y Fiscales 2026',
  description:
    'Calculadoras gratuitas de finiquito, liquidación por despido, aguinaldo y vacaciones dignas conforme a la Ley Federal del Trabajo en México.',
  alternates: {
    canonical: 'https://calcula.zetawala.com/mx/',
  },
  verification: process.env.NEXT_PUBLIC_GSC_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION }
    : undefined,
};

export default function MexicoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-MX" className={inter.variable}>
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 antialiased">
        <GoogleAdSense />
        <CloudflareAnalytics />
        {children}
      </body>
    </html>
  );
}
