import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/seo/JsonLd';
import { ToolPageTemplate } from '@/components/templates/ToolPageTemplate';
import { BrRescisaoCalculator } from '@/components/calculators/BrRescisaoCalculator';
import { content } from '@/content/br/rescisao-contrato-de-experiencia';
import { buildMetadata } from '@/lib/seo';

export function generateMetadata(): Metadata {
  return buildMetadata({
    country: 'br',
    slug: 'br/calculadora-rescisao/contrato-de-experiencia',
    title: content.metaTitle,
    description: content.metaDescription,
  });
}

export default function BrRescisaoContratoExperienciaPage() {
  return (
    <>
      <JsonLd
        country="br"
        slug="br/calculadora-rescisao/contrato-de-experiencia"
        type="calculator"
        title={content.h1}
        description={content.metaDescription}
        faqs={content.faqs}
        breadcrumbs={[
          { name: 'Calcula', path: '/' },
          { name: 'Brasil', path: '/br/' },
          { name: 'Rescisão CLT', path: '/br/calculadora-rescisao/' },
          { name: 'Contrato de Experiência', path: '/br/calculadora-rescisao/contrato-de-experiencia/' },
        ]}
      />
      <Header country="br" />
      <main className="flex-1 w-full">
        <ToolPageTemplate
          country="br"
          category="laboral"
          categoryLabel="Trabalhista"
          content={content}
          calculatorSlot={
            <BrRescisaoCalculator initialReason="termino-experiencia" lockReason={false} />
          }
        />
      </main>
      <Footer country="br" />
    </>
  );
}
