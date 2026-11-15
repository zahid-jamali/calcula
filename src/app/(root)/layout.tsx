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
  title: 'Calcula – Calculadoras laborales y financieras gratis | Calculadoras trabalhistas grátis',
  description:
    'Calculadoras laborales, legales y financieras gratuitas para América Latina: Brasil, México, Colombia y Chile. Cálculos precisos y actualizados.',
  alternates: {
    canonical: 'https://calcula.zetawala.com/',
    languages: {
      'pt-BR': 'https://calcula.zetawala.com/br/',
      'es-MX': 'https://calcula.zetawala.com/mx/',
      'es-CO': 'https://calcula.zetawala.com/co/',
      'es-CL': 'https://calcula.zetawala.com/cl/',
      'x-default': 'https://calcula.zetawala.com/',
    },
  },
  verification: process.env.NEXT_PUBLIC_GSC_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION }
    : undefined,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 antialiased">
        <GoogleAdSense />
        <CloudflareAnalytics />
        {children}
      </body>
    </html>
  );
}
