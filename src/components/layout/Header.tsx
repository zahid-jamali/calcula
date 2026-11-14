import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CountryCode, COUNTRIES, SITE_CONFIG } from '@/config/site';
import { getDictionary } from '@/i18n';

export interface HeaderProps {
  country?: CountryCode;
}

export function Header({ country }: HeaderProps) {
  const dict = getDictionary(country);
  const currentCountry = country ? COUNTRIES[country] : undefined;
  const allCountries = Object.values(COUNTRIES);
  const homePath = currentCountry ? currentCountry.basePath : '/';

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between gap-4">
        {/* Left: Brand Logo & Optional Flag */}
        <div className="flex items-center gap-3">
          <Link
            href={homePath}
            className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-brand-500 rounded-md"
            title={currentCountry ? `Calcula ${currentCountry.name}` : 'Calcula'}
          >
            <Image
              src="/images/calcula-logo.png"
              alt="Calcula"
              width={100}
              height={28}
              className="h-6 sm:h-7 w-auto object-contain"
              priority
            />
            {currentCountry && (
              <span
                className="text-lg leading-none"
                role="img"
                aria-label={currentCountry.name}
              >
                {currentCountry.flag}
              </span>
            )}
          </Link>
        </div>

        {/* Center: Category Nav */}
        <nav
          aria-label="Categorias"
          className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600"
        >
          <Link
            href={`${homePath}#laboral`}
            className="hover:text-brand-900 transition-colors"
          >
            {dict.common.categories.laboral}
          </Link>
          <Link
            href={`${homePath}#financeiro`}
            className="hover:text-brand-900 transition-colors"
          >
            {dict.common.categories.financeiro}
          </Link>
          <Link
            href={`${homePath}#impostos`}
            className="hover:text-brand-900 transition-colors"
          >
            {dict.common.categories.impostos}
          </Link>
          <Link
            href={`${homePath}#guias`}
            className="hover:text-brand-900 transition-colors"
          >
            {dict.common.footerSections.guides}
          </Link>
        </nav>

        {/* Right: Country Switcher & Zetawala badge */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Country Switcher (🇧🇷 BR, 🇲🇽 MX, 🇨🇴 CO, 🇨🇱 CL) */}
          <div
            className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200"
            role="navigation"
            aria-label="Seleção de país"
          >
            {allCountries.map((c) => {
              const isActive = c.code === country;
              return (
                <Link
                  key={c.code}
                  href={c.basePath}
                  title={c.name}
                  aria-current={isActive ? 'page' : undefined}
                  className={`px-2 py-0.5 rounded text-xs font-semibold flex items-center gap-1 transition-all ${
                    isActive
                      ? 'bg-white text-brand-900 shadow-sm border border-slate-200/60'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                  }`}
                >
                  <span className="text-sm leading-none">{c.flag}</span>
                  <span className="hidden sm:inline">{c.code.toUpperCase()}</span>
                </Link>
              );
            })}
          </div>

          {/* Small Badge: "por Zetawala" */}
          <a
            href={SITE_CONFIG.parentBrand.url}
            target="_blank"
            rel="noopener noreferrer"
            title="Zetawala Network"
            className="flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-brand-900 transition-colors border-l border-slate-200 pl-3 sm:pl-4 py-1"
          >
            <span className="hidden sm:inline">{dict.common.byZetawala}</span>
            <Image
              src="/images/zetawala-logo.png"
              alt="Zetawala"
              width={16}
              height={16}
              className="h-4 w-auto object-contain"
            />
          </a>
        </div>
      </div>
    </header>
  );
}
