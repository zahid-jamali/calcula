import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/seo/JsonLd';
import { ToolPageTemplate } from '@/components/templates/ToolPageTemplate';
import { WhatsAppLinkGenerator } from '@/components/calculators/WhatsAppLinkGenerator';
import { content as waContent } from '@/content/br/gerador-de-link-whatsapp';
import { buildMetadata } from '@/lib/seo';

export function generateMetadata(): Metadata {
  return buildMetadata({
    country: 'br',
    slug: 'br/gerador-de-link-whatsapp',
    title: waContent.metaTitle,
    description: waContent.metaDescription,
  });
}

export default function BrWhatsAppPage() {
  return (
    <>
      <JsonLd
        country="br"
        slug="br/gerador-de-link-whatsapp"
        type="calculator"
        title={waContent.h1}
        description={waContent.metaDescription}
        faqs={waContent.faqs}
        breadcrumbs={[
          { name: 'Calcula', path: '/' },
          { name: 'Brasil', path: '/br/' },
          { name: 'Ferramentas', path: '/br/#ferramentas' },
          { name: waContent.h1, path: '/br/gerador-de-link-whatsapp/' },
        ]}
      />
      <Header country="br" />
      <main className="flex-1 w-full">
        <ToolPageTemplate
          country="br"
          category="geral"
          categoryLabel="Ferramentas Úteis"
          content={waContent}
          calculatorSlot={<WhatsAppLinkGenerator country="br" />}
        />
      </main>
      <Footer country="br" />
    </>
  );
}
