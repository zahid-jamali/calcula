'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { CountryCode, COUNTRIES } from '@/config/site';

interface SuggestionConfig {
  country: CountryCode;
  text: string;
  cta: string;
}

const SUGGESTIONS: Record<CountryCode, SuggestionConfig> = {
  br: {
    country: 'br',
    text: 'Detectamos que seu navegador está em português.',
    cta: 'Ir para o Calcula Brasil 🇧🇷',
  },
  mx: {
    country: 'mx',
    text: '¿Estás consultando desde México?',
    cta: 'Ir a Calcula México 🇲🇽',
  },
  co: {
    country: 'co',
    text: '¿Estás consultando desde Colombia?',
    cta: 'Ir a Calcula Colombia 🇨🇴',
  },
  cl: {
    country: 'cl',
    text: '¿Estás consultando desde Chile?',
    cta: 'Ir a Calcula Chile 🇨🇱',
  },
};

export function CountrySuggestionBar() {
  const [suggestion, setSuggestion] = useState<SuggestionConfig | null>(null);
  const [dismissed, setDismissed] = useState<boolean>(true);

  useEffect(() => {
    try {
      if (typeof window === 'undefined' || !window.navigator) return;
      const isDismissed = localStorage.getItem('calcula_suggestion_dismissed');
      if (isDismissed) return;

      const lang = (window.navigator.language || '').toLowerCase();
      let matchedCountry: CountryCode | null = null;

      if (lang.startsWith('pt')) {
        matchedCountry = 'br';
      } else if (lang === 'es-mx') {
        matchedCountry = 'mx';
      } else if (lang === 'es-co') {
        matchedCountry = 'co';
      } else if (lang === 'es-cl') {
        matchedCountry = 'cl';
      }

      if (matchedCountry) {
        setSuggestion(SUGGESTIONS[matchedCountry]);
        setDismissed(false);
      }
    } catch {
      // localStorage disabled/restricted
    }
  }, []);

  const handleDismiss = () => {
    setDismissed(true);
    try {
      localStorage.setItem('calcula_suggestion_dismissed', 'true');
    } catch {
      // ignore
    }
  };

  if (dismissed || !suggestion) return null;

  const targetCountry = COUNTRIES[suggestion.country];

  return (
    <aside
      aria-label="Sugerencia de país / Sugestão de país"
      className="w-full bg-brand-900 text-white text-xs sm:text-sm py-2 px-4 shadow-inner flex items-center justify-between gap-3 animate-fadeIn"
    >
      <div className="max-w-6xl mx-auto w-full flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span>{targetCountry.flag}</span>
          <span className="font-medium text-slate-100">{suggestion.text}</span>
          <Link
            href={targetCountry.basePath}
            className="ml-2 font-bold underline text-amber-300 hover:text-white transition-colors"
          >
            {suggestion.cta}
          </Link>
        </div>
        <button
          onClick={handleDismiss}
          type="button"
          aria-label="Cerrar sugerencia / Fechar sugestão"
          className="text-slate-300 hover:text-white text-base leading-none p-1 rounded hover:bg-brand-800 transition-colors"
        >
          ✕
        </button>
      </div>
    </aside>
  );
}
