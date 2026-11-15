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
            label: 'Calculadora de Finiquito e Indemnización 2026',
            href: '/cl/calculadora-finiquito/',
          },
        ];

  // 2. Column of guides
  const guidesFromRegistry = PAGE_REGISTRY.filter(
    (p) => (!country || p.country === country) && p.type === 'guide'
  );

  const guides: FooterLink[] =
    guidesFromRegistry.length > 0
      ? guidesFromRegistry.map((g) => ({
          label: g.title,
          href: `/${g.slug}/`,
        }))
      : [];

  // 3. Column of info pages
  const infoPages: FooterLink[] = isPt
    ? [
        { label: 'Sobre o Calcula', href: `${prefix}/sobre/` },
        { label: 'Metodologia de Cálculo', href: `${prefix}/metodologia/` },
        { label: 'Perguntas Frequentes', href: `${prefix}/perguntas-frequentes/` },
        { label: 'Contato e Suporte', href: `${prefix}/contato/` },
      ]
    : [
        { label: 'Acerca de Calcula', href: `${prefix}/acerca-de/` },
        { label: 'Metodología de Cálculo', href: `${prefix}/metodologia/` },
        { label: 'Preguntas Frecuentes', href: `${prefix}/preguntas-frecuentes/` },
        { label: 'Contacto y Soporte', href: `${prefix}/contacto/` },
      ];

  // 4. Column of site pages
  const sitePages: FooterLink[] = isPt
    ? [
        { label: 'Termos de Uso', href: `${prefix}/termos-de-uso/` },
        { label: 'Política de Privacidade', href: `${prefix}/politica-de-privacidade/` },
        { label: 'Aviso Legal', href: `${prefix}/aviso-legal/` },
        { label: 'Mapa do Site', href: `${prefix}/mapa-do-site/` },
      ]
    : [
        { label: 'Términos de Uso', href: `${prefix}/terminos-de-uso/` },
        { label: 'Política de Privacidad', href: `${prefix}/politica-de-privacidad/` },
        { label: 'Aviso Legal', href: `${prefix}/aviso-legal/` },
        { label: 'Mapa del Sitio', href: `${prefix}/mapa-del-sitio/` },
      ];

  return (
    <footer className="mt-20 border-t border-slate-200 bg-white">
      {/* Main Footer: 4 Columns (tools, guides, info pages, site pages) */}
      <div className="max-w-6xl mx-auto px-4 py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Column 1: Tools */}
        <div>
          <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-900"></span>
            {dict.common.footerSections.tools}
          </h3>
          <ul className="space-y-2.5 text-sm text-slate-600">
            {tools.slice(0, 8).map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="hover:text-brand-900 transition-colors line-clamp-1"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2: Guides */}
        <div>
          <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
            {dict.common.footerSections.guides}
          </h3>
          <ul className="space-y-2.5 text-sm text-slate-600">
            {guides.slice(0, 8).map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="hover:text-brand-900 transition-colors line-clamp-1"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Methodology & E-E-A-T */}
        <div>
          <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
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

        {/* Column 4: Institutional & Legal */}
        <div>
          <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500"></span>
            {dict.common.footerSections.legal}
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

      {/* Bottom Legal & Single Zetawala Credit */}
      <div className="border-t border-slate-100 py-6 px-4 bg-slate-50/70">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-slate-900 flex items-center justify-center p-1 shrink-0">
              <Image
                src="/images/calcula-emblem.png"
                alt="Calcula"
                width={28}
                height={28}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <span className="font-bold text-slate-800">Calcula</span>
              <span className="mx-2 text-slate-300">·</span>
              <span>
                {isPt
                  ? 'Simulações e ferramentas trabalhistas gratuitas da rede Zetawala.'
                  : 'Simuladores y herramientas laborales gratuitas de la red Zetawala.'}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-slate-400">
            <span>© 2026 Calcula · Todos los derechos reservados</span>
            <span>·</span>
            <a
              href={SITE_CONFIG.parentBrand.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-brand-900 transition-colors font-semibold"
            >
              Zetawala
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
