import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/seo/JsonLd';
import { GuidePageTemplate } from '@/components/templates/GuidePageTemplate';
import { BR_GUIDES_MAP } from '@/content/br/guias';
import { buildMetadata } from '@/lib/seo';

interface GuidePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(BR_GUIDES_MAP).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = BR_GUIDES_MAP[slug];

  if (!guide) {
    return {};
  }

  return buildMetadata({
    country: 'br',
    slug: `br/guias/${slug}`,
    title: guide.metaTitle,
    description: guide.metaDescription,
  });
}

export default async function BrGuidePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = BR_GUIDES_MAP[slug];

  if (!guide) {
    notFound();
  }

  return (
    <>
      <JsonLd
        country="br"
        slug={`br/guias/${slug}`}
        type="guide"
        title={guide.h1}
        description={guide.metaDescription}
        faqs={guide.faqs}
        breadcrumbs={[
          { name: 'Calcula', path: '/' },
          { name: 'Brasil', path: '/br/' },
          { name: 'Guias e Direitos', path: '/br/#guias' },
          { name: guide.h1, path: `/br/guias/${slug}/` },
        ]}
      />
      <Header country="br" />
      <main className="flex-1 w-full">
        <GuidePageTemplate country="br" content={guide} />
      </main>
      <Footer country="br" />
    </>
  );
}
