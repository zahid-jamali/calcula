import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CountryGuidePage } from '@/components/templates/CountryPage';
import { CO_GUIDES_MAP } from '@/content/co/guias';
import { buildMetadata } from '@/lib/seo';

interface GuidePageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return Object.keys(CO_GUIDES_MAP).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = CO_GUIDES_MAP[slug];
  if (!guide) return {};
  return buildMetadata({
    country: 'co',
    slug: `co/guias/${slug}`,
    title: guide.metaTitle,
    description: guide.metaDescription,
    type: 'article',
  });
}

export default async function CoGuidePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = CO_GUIDES_MAP[slug];
  if (!guide) notFound();

  return (
    <CountryGuidePage
      country="co"
      slug={`co/guias/${slug}`}
      content={guide}
      breadcrumbs={[
        { name: 'Calcula', path: '/' },
        { name: 'Colombia', path: '/co/' },
        { name: 'Guías', path: '/co/#guias' },
        { name: guide.h1, path: `/co/guias/${slug}/` },
      ]}
    />
  );
}
