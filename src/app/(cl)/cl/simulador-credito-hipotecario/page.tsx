import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/seo/JsonLd';
import { ToolPageTemplate } from '@/components/templates/ToolPageTemplate';
import { ClHipotecarioSimulator } from '@/components/calculators/cl/ClHipotecarioSimulator';
import { content as hipotecarioContent } from '@/content/cl/simulador-credito-hipotecario';
import { buildMetadata } from '@/lib/seo';

export function generateMetadata(): Metadata {
  return buildMetadata({
    country: 'cl',
    slug: 'cl/simulador-credito-hipotecario',
    title: hipotecarioContent.metaTitle,
    description: hipotecarioContent.metaDescription,
  });
}

export default function ClHipotecarioPage() {
  return (
    <>
      <JsonLd
        country="cl"
        slug="cl/simulador-credito-hipotecario"
        type="calculator"
        title={hipotecarioContent.h1}
        description={hipotecarioContent.metaDescription}
        faqs={hipotecarioContent.faqs}
        breadcrumbs={[
          { name: 'Calcula', path: '/' },
          { name: 'Chile', path: '/cl/' },
          { name: 'Finanzas', path: '/cl/#finanzas' },
          { name: hipotecarioContent.h1, path: '/cl/simulador-credito-hipotecario/' },
        ]}
      />
      <Header country="cl" />
      <main className="flex-1 w-full">
        <ToolPageTemplate
          country="cl"
          category="financeiro"
          categoryLabel="Financiamiento"
          content={hipotecarioContent}
          calculatorSlot={<ClHipotecarioSimulator />}
        />
      </main>
      <Footer country="cl" />
    </>
  );
}
