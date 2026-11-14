'use client';

import React, { useState } from 'react';
import { Card, MoneyInput, Select, SegmentedToggle, ResultSummary } from '@/components/ui';
import { calculateMxSueldoNeto, grossFromNetMx } from '@/lib/mx/sueldoNeto';
import { formatCurrency } from '@/lib/format';
import { ShareActions, StatCard } from './shared';

export function MxSueldoNetoCalculator() {
  const [mode, setMode] = useState<'bruto' | 'neto'>('bruto');
  const [amount, setAmount] = useState<number>(15000);
  const [zone, setZone] = useState<'general' | 'frontera'>('general');

  const r =
    mode === 'bruto'
      ? calculateMxSueldoNeto({ grossMonthly: amount, zone })
      : grossFromNetMx(amount, { zone });

  const shareText = `Mi sueldo neto en México 2026 (Calcula):
Sueldo bruto mensual: ${formatCurrency(r.grossMonthly, 'mx')}
ISR: ${formatCurrency(r.isr, 'mx')} · IMSS: ${formatCurrency(r.imss, 'mx')}
Neto mensual: ${formatCurrency(r.netMonthly, 'mx')} · Neto quincenal: ${formatCurrency(r.netQuincena, 'mx')}
Calcula el tuyo: https://calcula.zetawala.com/mx/calculadora-sueldo-neto/`;

  return (
    <div className="space-y-6">
      <Card className="p-4 sm:p-6 bg-white border-slate-200 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
          <span>💵</span> Sueldo bruto a neto
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <SegmentedToggle
            label="¿Qué dato tienes?"
            options={[
              { value: 'bruto', label: 'Bruto → Neto' },
              { value: 'neto', label: 'Neto → Bruto' },
            ]}
            value={mode}
            onChange={(v) => setMode(v as 'bruto' | 'neto')}
          />
          <MoneyInput
            id="mx-neto-amount"
            name="amount"
            label={mode === 'bruto' ? 'Sueldo mensual bruto' : 'Sueldo mensual neto que quieres recibir'}
            currencySymbol="$"
            value={amount}
            onChangeValue={(v) => setAmount(v)}
          />
          <Select
            id="mx-neto-zone"
            name="zone"
            label="Zona salarial"
            value={zone}
            onChange={(e) => setZone(e.target.value as 'general' | 'frontera')}
            options={[
              { value: 'general', label: 'Resto del país' },
              { value: 'frontera', label: 'Zona Libre de la Frontera Norte' },
            ]}
          />
        </div>
      </Card>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard label="Sueldo bruto mensual" value={formatCurrency(r.grossMonthly, 'mx')} />
        <StatCard label="Neto mensual" value={formatCurrency(r.netMonthly, 'mx')} tone="emerald" />
        <StatCard label="Neto por quincena" value={formatCurrency(r.netQuincena, 'mx')} tone="blue" />
      </div>

      <ResultSummary
        country="mx"
        totalAmount={r.netMonthly}
        totalLabel="Sueldo neto mensual"
        totalGross={r.grossMonthly}
        totalDeductions={r.isr + r.imss}
        badge="SAT · IMSS 2026"
        subtitle={r.isMinimumWage ? 'Salario mínimo: sin retención de ISR ni cuota obrera' : undefined}
        items={[
          {
            key: 'bruto',
            label: 'Sueldo mensual bruto',
            amount: r.grossMonthly,
            formula: 'Sueldo pactado',
          },
          {
            key: 'isr_tarifa',
            label: 'ISR según tarifa mensual',
            amount: r.isrBeforeSubsidy,
            formula: 'Cuota fija + % sobre excedente del límite inferior',
            legalArticle: 'Art. 96 LISR / Anexo 8 RMF 2026',
            isDeduction: true,
          },
          ...(r.subsidy > 0
            ? [
                {
                  key: 'subsidio',
                  label: 'Subsidio para el empleo (se resta del ISR)',
                  amount: r.subsidy,
                  formula: '15.02% de la UMA mensual, ingresos hasta $11,492.66',
                  legalArticle: 'Decreto DOF 31-dic-2025',
                },
              ]
            : []),
          ...r.imssBreakdown
            .filter((b) => b.amount > 0)
            .map((b) => ({
              key: `imss_${b.key}`,
              label: `IMSS: ${b.label}`,
              amount: b.amount,
              formula: `SBC diario ${formatCurrency(r.sbcDaily, 'mx')} × 30.4 días`,
              legalArticle: 'LSS',
              isDeduction: true,
            })),
        ]}
        footerActions={<ShareActions text={shareText} />}
      />
    </div>
  );
}
