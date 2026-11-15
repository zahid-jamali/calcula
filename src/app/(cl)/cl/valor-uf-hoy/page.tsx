import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/seo/JsonLd';
import { ToolPageTemplate } from '@/components/templates/ToolPageTemplate';
import { ClValorUfHoy } from '@/components/calculators/cl/ClValorUfHoy';
import { content as valorUfContent } from '@/content/cl/valor-uf-hoy';
import { getStaticIndicators, getStaticUfHistory } from '@/lib/cl/indicators';
import { buildMetadata } from '@/lib/seo';

export function generateMetadata(): Metadata {
  return buildMetadata({
    country: 'cl',
    slug: 'cl/valor-uf-hoy',
    title: valorUfContent.metaTitle,
    description: valorUfContent.metaDescription,
  });
}

export default function ClValorUfHoyPage() {
  const indicators = getStaticIndicators();
  const history = getStaticUfHistory().slice(-45);

  return (
    <>
      <JsonLd
        country="cl"
        slug="cl/valor-uf-hoy"
        type="calculator"
        title={valorUfContent.h1}
        description={valorUfContent.metaDescription}
        faqs={valorUfContent.faqs}
        breadcrumbs={[
          { name: 'Calcula', path: '/' },
          { name: 'Chile', path: '/cl/' },
          { name: 'Finanzas', path: '/cl/#finanzas' },
          { name: valorUfContent.h1, path: '/cl/valor-uf-hoy/' },
        ]}
      />
      <Header country="cl" />
      <main className="flex-1 w-full">
        <ToolPageTemplate
          country="cl"
          category="financeiro"
          categoryLabel="Indicadores Oficiales"
          content={valorUfContent}
          calculatorSlot={
            <ClValorUfHoy
              initialIndicators={indicators}
              recentHistory={history}
            />
          }
        />
      </main>
      <Footer country="cl" />
    </>
  );
}
