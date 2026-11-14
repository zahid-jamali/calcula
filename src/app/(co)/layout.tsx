import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import { SITE_CONFIG } from '@/config/site';

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.baseUrl),
  title: 'Calcula Colombia - Calculadoras Laborales y Liquidación 2026',
  description:
    'Calculadoras laborales gratis en Colombia: liquidación laboral, cesantías, intereses, prima de servicios y vacaciones conforme al CST.',
  alternates: {
    canonical: 'https://calcula.zetawala.com/co/',
  },
};

export default function ColombiaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-CO" className={inter.variable}>
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
