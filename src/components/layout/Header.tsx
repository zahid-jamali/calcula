'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CountryCode, COUNTRIES } from '@/config/site';
import { getDictionary } from '@/i18n';
import { CountryFlag } from '@/components/ui/CountryFlag';

export interface HeaderProps {
  country?: CountryCode;
}

export function Header({ country }: HeaderProps) {
  const dict = getDictionary(country);
  const currentCountry = country ? COUNTRIES[country] : undefined;
  const allCountries = Object.values(COUNTRIES);
  const homePath = currentCountry ? currentCountry.basePath : '/';

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md shadow-xs transition-all">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        {/* Left: Brand Logo Lockup */}
        <div className="flex items-center gap-3">
          <Link
            href={homePath}
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-lg py-1 px-1 -ml-1 transition-transform active:scale-95"
            title={currentCountry ? `Calcula ${currentCountry.name}` : 'Calcula América Latina'}
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 shrink-0 overflow-hidden rounded-xl bg-white shadow-xs flex items-center justify-center p-0.5 border border-slate-200/90">
              <Image
                src="/images/calcula-emblem.png"
                alt="Calcula"
                width={80}
                height={80}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200"
                priority
              />
            </div>
            <div className="flex flex-col text-left">
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-950 group-hover:text-brand-900 transition-colors font-sans leading-none">
                  CALCULA
                </span>
                {currentCountry && (
                  <span className="sm:hidden flex items-center">
                    <CountryFlag country={currentCountry.code} size="sm" />
                  </span>
                )}
              </div>
              <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase leading-none mt-1 hidden sm:inline-flex items-center gap-1.5">
                {currentCountry ? (
                  <>
                    <CountryFlag country={currentCountry.code} size="sm" />
                    <span>{currentCountry.name}</span>
                    <span className="text-slate-300">·</span>
                    <span className="text-emerald-700 font-extrabold">2026</span>
                  </>
                ) : (
                  <span>América Latina</span>
                )}
              </span>
            </div>
          </Link>
        </div>

        {/* Center: Category Nav (Desktop only) */}
        {country && (
          <nav
            aria-label="Categorias de Calculadoras"
            className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-600"
          >
            <Link
              href={`${homePath}#laboral`}
              className="hover:text-brand-900 hover:bg-slate-50 px-2.5 py-1 rounded-md transition-colors"
            >
              {dict.common.categories.laboral}
            </Link>
            <Link
              href={`${homePath}#financeiro`}
              className="hover:text-brand-900 hover:bg-slate-50 px-2.5 py-1 rounded-md transition-colors"
            >
              {dict.common.categories.financeiro}
            </Link>
            <Link
              href={`${homePath}#impostos`}
              className="hover:text-brand-900 hover:bg-slate-50 px-2.5 py-1 rounded-md transition-colors"
            >
              {dict.common.categories.impostos}
            </Link>
            <Link
              href={`${homePath}#guias`}
              className="hover:text-brand-900 hover:bg-slate-50 px-2.5 py-1 rounded-md transition-colors"
            >
              {dict.common.footerSections.guides}
            </Link>
          </nav>
        )}

        {/* Right: Modern Country Switcher (Pills) */}
        <div className="flex items-center gap-2">
          <div
            className="flex items-center gap-1 bg-slate-100/80 p-1 rounded-xl border border-slate-200/80 shadow-2xs"
            role="navigation"
            aria-label="Selección de país"
          >
            {allCountries.map((c) => {
              const isActive = c.code === country;
              return (
                <Link
                  key={c.code}
                  href={c.basePath}
                  title={`Calcula ${c.name}`}
                  aria-current={isActive ? 'page' : undefined}
                  className={`px-2 sm:px-2.5 py-1 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all active:scale-95 ${
                    isActive
                      ? 'bg-white text-slate-900 shadow-sm border border-slate-200/90 font-extrabold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                  }`}
                >
                  <CountryFlag country={c.code} size="sm" />
                  <span className="hidden sm:inline font-mono text-[11px]">
                    {c.code.toUpperCase()}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}
