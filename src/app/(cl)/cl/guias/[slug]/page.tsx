import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CountryGuidePage } from '@/components/templates/CountryPage';
import { CHILE_GUIDES } from '@/content/cl/guias';
import { buildMetadata } from '@/lib/seo';

interface GuidePageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return Object.keys(CHILE_GUIDES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = CHILE_GUIDES[slug];
  if (!guide) return {};
  return buildMetadata({
    country: 'cl',
    slug: `cl/guias/${slug}`,
    title: guide.metaTitle,
    description: guide.metaDescription,
    type: 'article',
  });
}

export default async function ClGuidePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = CHILE_GUIDES[slug];
  if (!guide) notFound();

  return (
    <CountryGuidePage
      country="cl"
      slug={`cl/guias/${slug}`}
      content={guide}
      breadcrumbs={[
        { name: 'Calcula', path: '/' },
        { name: 'Chile', path: '/cl/' },
        { name: 'Guías', path: '/cl/#guias' },
        { name: guide.h1, path: `/cl/guias/${slug}/` },
      ]}
    />
  );
}
