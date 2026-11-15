import type { Metadata } from 'next';
import { CountryCode, COUNTRIES, SITE_CONFIG } from '@/config/site';
import { PAGE_REGISTRY } from '@/config/pages';

export interface BuildMetadataParams {
  country?: CountryCode;
  slug: string;
  title?: string;
  description?: string;
  image?: string;
  type?: 'website' | 'article';
  isEquivalent?: boolean;
}

export const OG_LOCALE_MAP: Record<CountryCode, string> = {
  br: 'pt_BR',
  mx: 'es_MX',
  co: 'es_CO',
  cl: 'es_CL',
};

export const DEFAULT_DESCRIPTIONS: Record<CountryCode | 'root', string> = {
  br: 'Calcule sua rescisão CLT 2026 com FGTS, férias e 13º salário com rapidez e precisão. Simule seus direitos trabalhistas gratuitamente agora no Calcula!',
  mx: 'Calcula tu finiquito y liquidación 2026 según la LFT con aguinaldo y vacaciones. ¡Simula tus prestaciones y derechos laborales gratis ahora en Calcula!',
  co: 'Calcula tu liquidación laboral 2026 con cesantías, prima y vacaciones según el CST. ¡Simula tus prestaciones laborales gratis y al instante en Calcula!',
  cl: 'Calcula tu finiquito laboral 2026 con indemnización legal y feriado según el Código del Trabajo. ¡Simula tus montos gratis y al instante en Calcula!',
  root: 'Calculadoras laborales y financieras gratuitas para América Latina con leyes 2026. ¡Simula tus liquidaciones y prestaciones con precisión en Calcula!',
};

/**
 * Builds a canonical absolute URL ending with a trailing slash.
 */
export function buildCanonicalUrl(slug: string, country?: CountryCode): string {
  let cleanSlug = (slug || '').replace(/^\/+|\/+$/g, '');

  if (country) {
    if (!cleanSlug) {
      cleanSlug = country;
    } else if (!cleanSlug.startsWith(`${country}/`) && cleanSlug !== country) {
      cleanSlug = `${country}/${cleanSlug}`;
    }
  }

  return cleanSlug
    ? `${SITE_CONFIG.baseUrl}/${cleanSlug}/`
    : `${SITE_CONFIG.baseUrl}/`;
}

/**
 * Builds a title with max 60 characters: Main keyword first + year + " | Calcula"
 */
export function buildSeoTitle(
  rawTitle?: string,
  country?: CountryCode,
  year: number = SITE_CONFIG.year
): string {
  const brandSuffix = ` | ${SITE_CONFIG.name}`; // " | Calcula" (10 chars)
  const maxLen = 60;

  if (!rawTitle) {
    if (country && COUNTRIES[country]) {
      const base =
        country === 'br'
          ? `Calculadoras Trabalhistas ${year}`
          : country === 'mx'
          ? `Calculadoras Laborales México ${year}`
          : country === 'co'
          ? `Calculadoras Laborales Colombia ${year}`
          : `Calculadoras Laborales Chile ${year}`;
      const title = `${base}${brandSuffix}`;
      return title.length <= maxLen ? title : title.slice(0, maxLen);
    }
    return `Calculadoras Gratuitas ${year}${brandSuffix}`;
  }

  let title = rawTitle.trim();

  // Strip existing brand suffix if present to prevent duplication
  if (title.endsWith(brandSuffix)) {
    title = title.slice(0, -brandSuffix.length).trim();
  } else if (title.toLowerCase().startsWith('calcula')) {
    // e.g. "Calcula Brasil - Calculadoras Trabalhistas 2026"
    title = title
      .replace(/^Calcula\s*([a-zA-ZáéíóúÁÉÍÓÚñÑãõÃÕ]*)\s*[-|–]\s*/i, '')
      .trim();
  }

  // Ensure year is present if space allows and not already included
  const yearStr = `${year}`;
  if (!title.includes(yearStr)) {
    const candidateWithYear = `${title} ${yearStr}`;
    if (candidateWithYear.length + brandSuffix.length <= maxLen) {
      title = candidateWithYear;
    }
  }

  const candidate = `${title}${brandSuffix}`;
  if (candidate.length <= maxLen) {
    return candidate;
  }

  // Truncate main part to keep strict <= 60 characters and preserve brand suffix
  const maxMainLen = maxLen - brandSuffix.length;
  const truncatedMain = title.slice(0, maxMainLen).trimEnd();
  return `${truncatedMain}${brandSuffix}`;
}

/**
 * Builds an SEO description with max 155 characters, benefit and call to action.
 */
export function buildSeoDescription(
  overrideDesc?: string,
  country?: CountryCode
): string {
  const defaultDesc = country
    ? DEFAULT_DESCRIPTIONS[country] || DEFAULT_DESCRIPTIONS.root
    : DEFAULT_DESCRIPTIONS.root;

  const raw = (overrideDesc && overrideDesc.trim()) || defaultDesc;
  if (raw.length <= 155) {
    return raw;
  }

  // Clamp strictly to 155 characters
  return raw.slice(0, 154).trimEnd() + '…';
}

/**
 * Next.js Metadata generator adhering to Calcula SEO guidelines:
 * - Canonical absolute URL ending with trailing slash
 * - Title max 60 chars: Main keyword first + year + " | Calcula"
 * - Description max 155 chars with benefit and call to action
 * - OpenGraph with locale (pt_BR, es_MX, es_CO, es_CL), siteName "Calcula", images
 * - Twitter card summary_large_image
 * - Hreflang logic: Only link true equivalents across pt-BR / es-MX / es-CO / es-CL with x-default
 */
export function buildMetadata({
  country,
  slug,
  title: overrideTitle,
  description: overrideDesc,
  image,
  type = 'website',
  isEquivalent: explicitEquivalent,
}: BuildMetadataParams): Metadata {
  const canonicalUrl = buildCanonicalUrl(slug, country);

  // Normalize slug for registry lookup
  let lookupSlug = (slug || '').replace(/^\/+|\/+$/g, '');
  if (country) {
    if (!lookupSlug) {
      lookupSlug = country;
    } else if (!lookupSlug.startsWith(`${country}/`) && lookupSlug !== country) {
      lookupSlug = `${country}/${lookupSlug}`;
    }
  }

  const registryItem = PAGE_REGISTRY.find(
    (p) => p.slug.replace(/^\/+|\/+$/g, '') === lookupSlug
  );

  const rawTitle = overrideTitle || registryItem?.title;
  const title = buildSeoTitle(rawTitle, country);
  const description = buildSeoDescription(overrideDesc, country);

  const ogLocale = country ? OG_LOCALE_MAP[country] : 'es_LA';
  const imageUrl = image || `${SITE_CONFIG.baseUrl}/images/calcula.jpg`;

  const alternates: {
    canonical: string;
    languages?: Record<string, string>;
  } = {
    canonical: canonicalUrl,
  };

  // Hreflang logic: Only true equivalents (e.g. root home, country home, or marked equivalent)
  const isHomeEquivalent =
    registryItem?.isEquivalentTo === 'country-home' ||
    registryItem?.isEquivalentTo === 'root-home' ||
    lookupSlug === '' ||
    lookupSlug === 'br' ||
    lookupSlug === 'mx' ||
    lookupSlug === 'co' ||
    lookupSlug === 'cl';

  if (isHomeEquivalent || explicitEquivalent) {
    alternates.languages = {
      'pt-BR': `${SITE_CONFIG.baseUrl}/br/`,
      'es-MX': `${SITE_CONFIG.baseUrl}/mx/`,
      'es-CO': `${SITE_CONFIG.baseUrl}/co/`,
      'es-CL': `${SITE_CONFIG.baseUrl}/cl/`,
      'x-default': `${SITE_CONFIG.baseUrl}/`,
    };
  } else if (registryItem?.isEquivalentTo) {
    // If future shared pages exist (e.g. 'privacy', 'about')
    const equivalents = PAGE_REGISTRY.filter(
      (p) => p.isEquivalentTo === registryItem.isEquivalentTo
    );
    if (equivalents.length > 1) {
      const languages: Record<string, string> = {};
      for (const item of equivalents) {
        if (item.country && COUNTRIES[item.country]) {
          const lang = COUNTRIES[item.country].lang;
          const cleanItemSlug = item.slug.replace(/^\/+|\/+$/g, '');
          languages[lang] = `${SITE_CONFIG.baseUrl}/${cleanItemSlug}/`;
        }
      }
      if (registryItem.isEquivalentTo === 'whatsapp-link') {
        languages['x-default'] = `${SITE_CONFIG.baseUrl}/br/gerador-de-link-whatsapp/`;
      }
      alternates.languages = languages;
    }
  }

  return {
    metadataBase: new URL(SITE_CONFIG.baseUrl),
    title,
    description,
    alternates,
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: SITE_CONFIG.name,
      locale: ogLocale,
      type,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  };
}
