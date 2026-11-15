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
  title: 'Calcula Chile - Calculadoras Laborales y Finiquito 2026',
  description:
    'Calculadoras de finiquito laboral, años de servicio, aviso previo y feriado proporcional según el Código del Trabajo en Chile.',
  alternates: {
    canonical: 'https://calcula.zetawala.com/cl/',
  },
  verification: process.env.NEXT_PUBLIC_GSC_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION }
    : undefined,
};

export default function ChileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-CL" className={inter.variable}>
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 antialiased">
        <GoogleAdSense />
        <CloudflareAnalytics />
        {children}
      </body>
    </html>
  );
}
