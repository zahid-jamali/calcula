import React from 'react';
import { CountryCode } from '@/config/site';
import { formatCurrency } from '@/lib/format';
import { Card } from './Card';

export interface CalculationLineItem {
  key?: string;
  label: string;
  amount: number;
  formula?: string;
  legalArticle?: string;
  isDeduction?: boolean;
}

export interface ResultSummaryProps {
  totalAmount: number;
  totalLabel?: string;
  title?: string;
  totalGross?: number;
  totalDeductions?: number;
  items: CalculationLineItem[];
  country?: CountryCode;
  currencySymbol?: string;
  badge?: string;
  subtitle?: string;
  disclaimer?: string;
  headerActions?: React.ReactNode;
  footerActions?: React.ReactNode;
  className?: string;
}

const RESULT_LABELS = {
  pt: {
    totalLabel: 'Total Líquido Estimado',
    badge: 'Cálculo Oficial 2026',
    disclaimer:
      'Este cálculo é uma simulação estimada com base na legislação vigente em 2026 e não substitui a homologação jurídica ou contábil oficial.',
    gross: 'Total Bruto (Proventos)',
    deductions: 'Total Descontos',
    net: 'Total Líquido',
    breakdown: 'Detalhamento Item por Item',
    one: 'verba',
    many: 'verbas apuradas',
    concept: 'Verba / Conceito',
    formula: 'Fórmula / Memória de Cálculo',
    legal: 'Base Legal',
    value: 'Valor',
    notice: 'Aviso',
  },
  es: {
    totalLabel: 'Total Neto Estimado',
    badge: 'Cálculo 2026',
    disclaimer:
      'Este cálculo es una estimación basada en la normativa vigente en 2026 y no sustituye la revisión de un abogado laboral, contador o la autoridad del trabajo.',
    gross: 'Total Bruto',
    deductions: 'Total Descuentos',
    net: 'Total Neto',
    breakdown: 'Desglose concepto por concepto',
    one: 'concepto',
    many: 'conceptos',
    concept: 'Concepto',
    formula: 'Fórmula / Cálculo',
    legal: 'Fundamento legal',
    value: 'Monto',
    notice: 'Aviso',
  },
};

export function ResultSummary({
  totalAmount,
  totalLabel,
  title,
  totalGross,
  totalDeductions,
  items,
  country = 'br',
  currencySymbol,
  badge,
  subtitle,
  disclaimer,
  headerActions,
  footerActions,
  className = '',
}: ResultSummaryProps) {
  const t = country === 'br' ? RESULT_LABELS.pt : RESULT_LABELS.es;
  const effectiveTotalLabel = totalLabel ?? title ?? t.totalLabel;
  const effectiveBadge = badge ?? t.badge;
  const effectiveDisclaimer = disclaimer ?? t.disclaimer;

  const formatVal = (val: number) => {
    if (currencySymbol) {
      return `${currencySymbol} ${val.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}`;
    }
    return formatCurrency(val, country);
  };

  const computedGross =
    totalGross !== undefined
      ? totalGross
      : items.filter((i) => !i.isDeduction).reduce((acc, i) => acc + i.amount, 0);

  const computedDeductions =
    totalDeductions !== undefined
      ? totalDeductions
      : items.filter((i) => i.isDeduction).reduce((acc, i) => acc + i.amount, 0);

  return (
    <Card
      padding="none"
      className={`border-brand-100 dark:border-brand-900/40 shadow-md ${className}`}
    >
      {/* Top Banner / Total Amount Hero */}
      <div className="bg-gradient-to-b from-brand-50/60 to-white dark:from-brand-950/40 dark:to-slate-900 p-6 sm:p-8 border-b border-slate-200/80 dark:border-slate-800">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              {effectiveBadge && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-brand-100 text-brand-900 dark:bg-brand-900/60 dark:text-brand-200 border border-brand-200/60 dark:border-brand-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  {effectiveBadge}
                </span>
              )}
              {subtitle && (
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {subtitle}
                </span>
              )}
            </div>

            <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
              {effectiveTotalLabel}
            </h2>

            {/* Big Total with aria-live="polite" */}
            <div
              aria-live="polite"
              aria-atomic="true"
              className="mt-1 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-brand-900 dark:text-brand-300"
            >
              {formatVal(totalAmount)}
            </div>
          </div>

          {headerActions && (
            <div className="flex flex-wrap items-center gap-2 mt-2 sm:mt-0">
              {headerActions}
            </div>
          )}
        </div>

        {/* Subtotal metrics summary */}
        {(computedGross > 0 || computedDeductions > 0) && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6 pt-5 border-t border-slate-200/80 dark:border-slate-800/80">
            <div className="p-3 bg-white dark:bg-slate-800/60 rounded-xl border border-slate-200/60 dark:border-slate-700/60">
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400 block">
                {t.gross}
              </span>
              <span className="text-base sm:text-lg font-bold text-slate-800 dark:text-slate-200">
                {formatVal(computedGross)}
              </span>
            </div>

            <div className="p-3 bg-white dark:bg-slate-800/60 rounded-xl border border-slate-200/60 dark:border-slate-700/60">
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400 block">
                {t.deductions}
              </span>
              <span className="text-base sm:text-lg font-bold text-amber-700 dark:text-amber-400">
                {computedDeductions > 0 ? `-${formatVal(computedDeductions)}` : formatVal(0)}
              </span>
            </div>

            <div className="col-span-2 sm:col-span-1 p-3 bg-brand-50/70 dark:bg-brand-950/40 rounded-xl border border-brand-200/60 dark:border-brand-800/60">
              <span className="text-xs font-medium text-brand-800 dark:text-brand-300 block">
                {t.net}
              </span>
              <span className="text-base sm:text-lg font-extrabold text-brand-900 dark:text-brand-200">
                {formatVal(totalAmount)}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Line-item breakdown table */}
      <div className="p-6">
        <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center justify-between">
          <span>{t.breakdown}</span>
          <span className="text-xs font-normal text-slate-500 dark:text-slate-400">
            {items.length} {items.length === 1 ? t.one : t.many}
          </span>
        </h3>

        <div className="overflow-x-auto -mx-6 sm:mx-0">
          <div className="inline-block min-w-full align-middle px-6 sm:px-0">
            <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-800 text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 text-xs font-semibold uppercase text-slate-500 dark:text-slate-400 bg-slate-50/80 dark:bg-slate-800/40">
                  <th scope="col" className="py-3 px-3.5 rounded-l-lg">
                    {t.concept}
                  </th>
                  <th scope="col" className="py-3 px-3.5 hidden md:table-cell">
                    {t.formula}
                  </th>
                  <th scope="col" className="py-3 px-3.5">
                    {t.legal}
                  </th>
                  <th scope="col" className="py-3 px-3.5 text-right rounded-r-lg">
                    {t.value}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {items.map((item, index) => (
                  <tr
                    key={item.key || `${item.label}-${index}`}
                    className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors"
                  >
                    <td className="py-3.5 px-3.5 font-medium text-slate-900 dark:text-slate-100">
                      <div>{item.label}</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 md:hidden mt-0.5 font-mono">
                        {item.formula || '—'}
                      </div>
                    </td>
                    <td className="py-3.5 px-3.5 text-xs text-slate-600 dark:text-slate-300 font-mono hidden md:table-cell">
                      {item.formula || '—'}
                    </td>
                    <td className="py-3.5 px-3.5 whitespace-nowrap">
                      {item.legalArticle ? (
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                          {item.legalArticle}
                        </span>
                      ) : (
                        <span className="text-xs text-slate-400">-</span>
                      )}
                    </td>
                    <td
                      className={`py-3.5 px-3.5 text-right font-bold whitespace-nowrap ${
                        item.isDeduction
                          ? 'text-amber-700 dark:text-amber-400'
                          : 'text-slate-900 dark:text-slate-100'
                      }`}
                    >
                      {item.isDeduction ? `-${formatVal(item.amount)}` : formatVal(item.amount)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {effectiveDisclaimer && (
          <p className="mt-6 text-xs text-slate-500 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-4">
            <span className="font-semibold text-slate-600 dark:text-slate-300">{t.notice}: </span>
            {effectiveDisclaimer}
          </p>
        )}

        {footerActions && (
          <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-end gap-3">
            {footerActions}
          </div>
        )}
      </div>
    </Card>
  );
}
