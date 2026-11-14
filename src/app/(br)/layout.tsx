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
  title: 'Calcula Brasil - Calculadoras Trabalhistas e Financeiras 2026',
  description:
    'Calculadoras de rescisão CLT, FGTS, férias e 13º salário 100% gratuitas e atualizadas pelas regras da legislação brasileira 2026.',
  alternates: {
    canonical: 'https://calcula.zetawala.com/br/',
  },
};

export default function BrazilLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
