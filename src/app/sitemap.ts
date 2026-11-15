import { MetadataRoute } from 'next';
import { SITE_CONFIG, COUNTRIES } from '@/config/site';
import { PAGE_REGISTRY } from '@/config/pages';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.baseUrl;
  const sitemapItems: MetadataRoute.Sitemap = [];

  // Group equivalent pages for hreflang alternates
  const equivalentsMap = new Map<string, { lang: string; url: string }[]>();

  for (const page of PAGE_REGISTRY) {
    if (page.isEquivalentTo) {
      const cleanSlug = page.slug.replace(/^\/+|\/+$/g, '');
      const fullUrl = cleanSlug ? `${baseUrl}/${cleanSlug}/` : `${baseUrl}/`;
      const lang = page.country ? COUNTRIES[page.country]?.lang : 'es';

      if (!equivalentsMap.has(page.isEquivalentTo)) {
        equivalentsMap.set(page.isEquivalentTo, []);
      }
      equivalentsMap.get(page.isEquivalentTo)!.push({ lang, url: fullUrl });
    }
  }

  // 1. Process all pages from PAGE_REGISTRY
  for (const page of PAGE_REGISTRY) {
    const cleanSlug = page.slug.replace(/^\/+|\/+$/g, '');
    const fullUrl = cleanSlug ? `${baseUrl}/${cleanSlug}/` : `${baseUrl}/`;

    let alternates: { languages: Record<string, string> } | undefined;

    if (page.isEquivalentTo) {
      if (
        page.isEquivalentTo === 'country-home' ||
        page.isEquivalentTo === 'root-home'
      ) {
        alternates = {
          languages: {
            'pt-BR': `${baseUrl}/br/`,
            'es-MX': `${baseUrl}/mx/`,
            'es-CO': `${baseUrl}/co/`,
            'es-CL': `${baseUrl}/cl/`,
            'x-default': `${baseUrl}/`,
          },
        };
      } else {
        const matches = equivalentsMap.get(page.isEquivalentTo) || [];
        if (matches.length > 1) {
          const langMap: Record<string, string> = {};
          for (const m of matches) {
            langMap[m.lang] = m.url;
          }
          if (page.isEquivalentTo === 'whatsapp-link') {
            langMap['x-default'] = `${baseUrl}/br/gerador-de-link-whatsapp/`;
          } else {
            langMap['x-default'] = `${baseUrl}/`;
          }
          alternates = { languages: langMap };
        }
      }
    }

    let changeFreq: 'daily' | 'weekly' | 'monthly' = 'monthly';
    if (page.type === 'tool' || page.slug === '' || page.isEquivalentTo === 'country-home') {
      changeFreq = 'daily';
    } else if (page.type === 'guide' || page.type === 'info') {
      changeFreq = 'weekly';
    }

    sitemapItems.push({
      url: fullUrl,
      lastModified: new Date(page.updatedAt || '2026-01-01'),
      changeFrequency: changeFreq,
      priority: page.priority || 0.5,
      ...(alternates ? { alternates } : {}),
    });
  }

  // 2. Programmatic Chile UF pages: yearly (/cl/valor-uf/[year]/) and monthly (/cl/valor-uf/[year]/[month]/)
  const currentYear = 2026;
  const startYear = 2020;

  for (let y = startYear; y <= currentYear; y++) {
    // Annual summary
    sitemapItems.push({
      url: `${baseUrl}/cl/valor-uf/${y}/`,
      lastModified: new Date(`${y}-12-31`),
      changeFrequency: y === currentYear ? 'daily' : 'monthly',
      priority: 0.7,
    });

    // Monthly pages
    for (let m = 1; m <= 12; m++) {
      const monthStr = String(m).padStart(2, '0');
      sitemapItems.push({
        url: `${baseUrl}/cl/valor-uf/${y}/${monthStr}/`,
        lastModified: new Date(`${y}-${monthStr}-01`),
        changeFrequency: y === currentYear ? 'daily' : 'monthly',
        priority: 0.6,
      });
    }
  }

  return sitemapItems;
}
