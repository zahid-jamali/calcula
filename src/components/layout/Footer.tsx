import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CountryCode, SITE_CONFIG } from '@/config/site';
import { getDictionary } from '@/i18n';
import { PAGE_REGISTRY } from '@/config/pages';

export interface FooterProps {
  country?: CountryCode;
}

interface FooterLink {
  label: string;
  href: string;
}

export function Footer({ country }: FooterProps) {
  const dict = getDictionary(country);
  const isPt = country === 'br';
  const prefix = country ? `/${country}` : '';

  // Localized parent-brand text and CTA
  const parentNote = isPt
    ? 'A Calcula faz parte da rede Zetawala de ferramentas gratuitas.'
    : 'Calcula es parte de la red Zetawala de herramientas gratuitas.';

  const parentCta = isPt ? 'Conheça a Zetawala →' : 'Conoce Zetawala →';

  // 1. Column of tools
  const toolsFromRegistry = PAGE_REGISTRY.filter(
    (p) => (!country || p.country === country) && p.type === 'tool'
  );

  const tools: FooterLink[] =
    toolsFromRegistry.length > 0
      ? toolsFromRegistry.map((t) => ({
          label: t.title,
          href: `/${t.slug}/`,
        }))
      : country === 'br'
      ? [
          {
            label: 'Calculadora de Rescisão Trabalhista CLT 2026',
            href: '/br/calculadora-rescisao/',
          },
        ]
      : country === 'mx'
      ? [
          {
            label: 'Calculadora de Finiquito y Liquidación 2026',
            href: '/mx/calculadora-finiquito/',
          },
        ]
      : country === 'co'
      ? [
          {
            label: 'Calculadora de Liquidación Laboral 2026',
            href: '/co/calculadora-liquidacion/',
          },
        ]
      : [
          {
            label: 'Calculadora de Finiquito Laboral 2026',
            href: '/cl/calculadora-finiquito/',
          },
        ];

  // 2. Column of guides (registry first, so links always point to real pages)
  const guidesFromRegistry = PAGE_REGISTRY.filter(
    (p) => country && p.country === country && p.type === 'guide'
  ).slice(0, 6);

  const guides: FooterLink[] = guidesFromRegistry.length > 0
    ? guidesFromRegistry.map((g) => ({ label: g.title, href: `/${g.slug}/` }))
    : isPt
    ? [
        {
          label: 'Guia Completo da Rescisão CLT 2026',
          href: `${prefix}/guia-rescisao-clt/`,
        },
        {
          label: 'Prazos de Pagamento das Verbas Rescisórias',
          href: `${prefix}/prazos-pagamento-rescisao/`,
        },
        {
          label: 'Direitos na Demissão Sem Justa Causa',
          href: `${prefix}/demissao-sem-justa-causa/`,
        },
        {
          label: 'Como Calcular Férias e 13º Salário',
          href: `${prefix}/calculo-ferias-decimo-terceiro/`,
        },
      ]
    : country === 'mx'
    ? [
        {
          label: 'Guía de Finiquito según la Ley Federal del Trabajo',
          href: '/mx/guia-finiquito-lft/',
        },
        {
          label: 'Diferencia entre Finiquito y Liquidación',
          href: '/mx/finiquito-vs-liquidacion/',
        },
        {
          label: 'Plazos de Pago y Derechos Laborales',
          href: '/mx/plazo-pago-liquidacion/',
        },
        {
          label: 'Vacaciones Dignas y Aguinaldo 2026',
          href: '/mx/vacaciones-dignas-aguinaldo/',
        },
      ]
    : country === 'co'
    ? [
        {
          label: 'Guía de Prestaciones Sociales según el CST',
          href: '/co/guia-prestaciones-sociales/',
        },
        {
          label: 'Cómo Calcular Cesantías e Intereses',
          href: '/co/como-calcular-cesantias/',
        },
        {
          label: 'Indemnización por Despido sin Justa Causa',
          href: '/co/indemnizacion-despido/',
        },
        {
          label: 'Prima de Servicios y Vacaciones en Colombia',
          href: '/co/prima-de-servicios/',
        },
      ]
    : country === 'cl'
    ? [
        {
          label: 'Guía de Finiquito según el Código del Trabajo',
          href: '/cl/guia-finiquito-chile/',
        },
        {
          label: 'Indemnización por Años de Servicio',
          href: '/cl/anos-de-servicio/',
        },
        {
          label: 'Mes de Aviso Previo y Feriado Legal',
          href: '/cl/mes-aviso-vacaciones/',
        },
        {
          label: 'Reserva de Derechos en el Finiquito',
          href: '/cl/reserva-de-derechos/',
        },
      ]
    : [
        {
          label: 'Guías Laborales para América Latina',
          href: '/guias/',
        },
        {
          label: 'Cálculo de Liquidaciones y Finiquitos',
          href: '/guias/calculo-liquidaciones/',
        },
      ];

  // 3. Column of info pages
  const infoPages: FooterLink[] = isPt
    ? [
        { label: 'Sobre o Calcula', href: `${prefix}/sobre/` },
        { label: 'Metodologia de Cálculo', href: `${prefix}/metodologia/` },
        { label: 'Fontes Oficiais e Base Legal', href: `${prefix}/fontes/` },
        { label: 'Contato e Suporte', href: `${prefix}/contato/` },
      ]
    : [
        { label: 'Acerca de Calcula', href: `${prefix}/sobre/` },
        { label: 'Metodología de Cálculo', href: `${prefix}/metodologia/` },
        { label: 'Fuentes Oficiales y Normativa', href: `${prefix}/fontes/` },
        { label: 'Contacto y Soporte', href: `${prefix}/contato/` },
      ];

  // 4. Column of site pages
  const sitePages: FooterLink[] = isPt
    ? [
        { label: 'Termos de Uso', href: `${prefix}/termos/` },
        { label: 'Política de Privacidade', href: `${prefix}/privacidade/` },
        { label: 'Aviso Legal', href: `${prefix}/aviso-legal/` },
        { label: 'Mapa do Site', href: `${prefix}/mapa-site/` },
      ]
    : [
        { label: 'Términos de Uso', href: `${prefix}/termos/` },
        { label: 'Política de Privacidad', href: `${prefix}/privacidade/` },
        { label: 'Aviso Legal', href: `${prefix}/aviso-legal/` },
        { label: 'Mapa del Sitio', href: `${prefix}/mapa-site/` },
      ];

  return (
    <footer className="mt-20 border-t border-slate-200 bg-white">
      {/* Top Parent-Brand Block (Zetawala) */}
      <div className="bg-slate-50 border-b border-slate-200 py-5 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/images/zetawala-logo.png"
              alt="Zetawala"
              width={26}
              height={26}
              className="h-6 w-auto object-contain"
            />
            <span className="text-sm font-medium text-slate-700">
              {parentNote}
            </span>
          </div>
          <a
            href={SITE_CONFIG.parentBrand.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-900 hover:text-brand-700 transition-colors"
          >
            {parentCta}
          </a>
        </div>
      </div>

      {/* Main Footer: 4 Columns (tools, guides, info pages, site pages) */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Column 1: Tools */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
            {dict.common.footerSections.tools}
          </h3>
          <ul className="space-y-2.5 text-sm text-slate-600">
            {tools.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="hover:text-brand-900 transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2: Guides */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
            {dict.common.footerSections.guides}
          </h3>
          <ul className="space-y-2.5 text-sm text-slate-600">
            {guides.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="hover:text-brand-900 transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Info Pages */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
            {dict.common.footerSections.info}
          </h3>
          <ul className="space-y-2.5 text-sm text-slate-600">
            {infoPages.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="hover:text-brand-900 transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Site Pages */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
            {isPt ? 'Páginas do Site' : 'Páginas del Sitio'}
          </h3>
          <ul className="space-y-2.5 text-sm text-slate-600">
            {sitePages.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="hover:text-brand-900 transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Disclaimer & Copyright */}
      <div className="border-t border-slate-100 py-6 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p className="max-w-xl text-center sm:text-left text-slate-400">
            {dict.common.labels.disclaimerText}
          </p>
          <div className="font-medium whitespace-nowrap text-slate-600">
            {`© ${SITE_CONFIG.year} ${SITE_CONFIG.parentBrand.name}`}
          </div>
        </div>
      </div>
    </footer>
  );
}
