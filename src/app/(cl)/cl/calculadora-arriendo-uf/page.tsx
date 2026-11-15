import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/seo/JsonLd';
import { ToolPageTemplate } from '@/components/templates/ToolPageTemplate';
import { ClArriendoUfCalculator } from '@/components/calculators/cl/ClArriendoUfCalculator';
import { content as arriendoContent } from '@/content/cl/calculadora-arriendo-uf';
import { buildMetadata } from '@/lib/seo';

export function generateMetadata(): Metadata {
  return buildMetadata({
    country: 'cl',
    slug: 'cl/calculadora-arriendo-uf',
    title: arriendoContent.metaTitle,
    description: arriendoContent.metaDescription,
  });
}

export default function ClArriendoUfPage() {
  return (
    <>
      <JsonLd
        country="cl"
        slug="cl/calculadora-arriendo-uf"
        type="calculator"
        title={arriendoContent.h1}
        description={arriendoContent.metaDescription}
        faqs={arriendoContent.faqs}
        breadcrumbs={[
          { name: 'Calcula', path: '/' },
          { name: 'Chile', path: '/cl/' },
          { name: 'Inmobiliario', path: '/cl/#finanzas' },
          { name: arriendoContent.h1, path: '/cl/calculadora-arriendo-uf/' },
        ]}
      />
      <Header country="cl" />
      <main className="flex-1 w-full">
        <ToolPageTemplate
          country="cl"
          category="financeiro"
          categoryLabel="Inmobiliario"
          content={arriendoContent}
          calculatorSlot={<ClArriendoUfCalculator />}
        />
      </main>
      <Footer country="cl" />
    </>
  );
}
