export type CountryCode = 'br' | 'mx' | 'co' | 'cl';

export interface CountryInfo {
  code: CountryCode;
  name: string;
  nativeName: string;
  lang: string;
  locale: string;
  flag: string;
  currency: string;
  currencySymbol: string;
  basePath: string;
  dateFormat: string;
  tagline: string;
}

export const COUNTRIES: Record<CountryCode, CountryInfo> = {
  br: {
    code: 'br',
    name: 'Brasil',
    nativeName: 'Brasil',
    lang: 'pt-BR',
    locale: 'pt-BR',
    flag: '🇧🇷',
    currency: 'BRL',
    currencySymbol: 'R$',
    basePath: '/br/',
    dateFormat: 'DD/MM/YYYY',
    tagline: 'Calculadoras trabalhistas e financeiras gratuitas atualizadas pelas regras da CLT.',
  },
  mx: {
    code: 'mx',
    name: 'México',
    nativeName: 'México',
    lang: 'es-MX',
    locale: 'es-MX',
    flag: '🇲🇽',
    currency: 'MXN',
    currencySymbol: '$',
    basePath: '/mx/',
    dateFormat: 'DD/MM/YYYY',
    tagline: 'Calculadoras laborales y fiscales gratuitas conforme a la Ley Federal del Trabajo.',
  },
  co: {
    code: 'co',
    name: 'Colombia',
    nativeName: 'Colombia',
    lang: 'es-CO',
    locale: 'es-CO',
    flag: '🇨🇴',
    currency: 'COP',
    currencySymbol: '$',
    basePath: '/co/',
    dateFormat: 'DD/MM/YYYY',
    tagline: 'Calculadoras laborales y de liquidación gratuitas con las normas del CST.',
  },
  cl: {
    code: 'cl',
    name: 'Chile',
    nativeName: 'Chile',
    lang: 'es-CL',
    locale: 'es-CL',
    flag: '🇨🇱',
    currency: 'CLP',
    currencySymbol: '$',
    basePath: '/cl/',
    dateFormat: 'DD/MM/YYYY',
    tagline: 'Calculadoras de remuneraciones y finiquito según el Código del Trabajo.',
  },
};

export const SITE_CONFIG = {
  name: 'Calcula',
  baseUrl: 'https://calcula.zetawala.com',
  logo: '/images/calcula-logo.png',
  year: 2026,
  parentBrand: {
    name: 'Zetawala',
    url: 'https://zetawala.com',
    logo: '/images/zetawala-logo.png',
    text: {
      'pt-BR': 'A Calcula faz parte da rede Zetawala de ferramentas gratuitas.',
      'es': 'Calcula es parte de la red Zetawala de herramientas gratuitas.',
    },
    cta: {
      'pt-BR': 'Conheça a Zetawala →',
      'es': 'Conoce Zetawala →',
    },
  },
  adSlotDefaults: {
    slot1MinHeight: '280px',
    slot2MinHeight: '280px',
  },
};
