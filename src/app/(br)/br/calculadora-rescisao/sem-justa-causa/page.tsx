import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/seo/JsonLd';
import { ToolPageTemplate } from '@/components/templates/ToolPageTemplate';
import { BrRescisaoCalculator } from '@/components/calculators/BrRescisaoCalculator';
import { content } from '@/content/br/rescisao-sem-justa-causa';
import { buildMetadata } from '@/lib/seo';

export function generateMetadata(): Metadata {
  return buildMetadata({
    country: 'br',
    slug: 'br/calculadora-rescisao/sem-justa-causa',
    title: content.metaTitle,
    description: content.metaDescription,
  });
}

export default function BrRescisaoSemJustaCausaPage() {
  return (
    <>
      <JsonLd
        country="br"
        slug="br/calculadora-rescisao/sem-justa-causa"
        type="calculator"
        title={content.h1}
        description={content.metaDescription}
        faqs={content.faqs}
        breadcrumbs={[
          { name: 'Calcula', path: '/' },
          { name: 'Brasil', path: '/br/' },
          { name: 'Rescisão CLT', path: '/br/calculadora-rescisao/' },
          { name: 'Sem Justa Causa', path: '/br/calculadora-rescisao/sem-justa-causa/' },
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
            <BrRescisaoCalculator initialReason="sem-justa-causa" lockReason={true} />
          }
        />
      </main>
      <Footer country="br" />
    </>
  );
}
