'use client';

import React, { useState } from 'react';
import { Card, MoneyInput, NumberInput, DateInput, SegmentedToggle, ResultSummary } from '@/components/ui';
import { calculateMxAguinaldo } from '@/lib/mx/aguinaldo';
import { formatCurrency } from '@/lib/format';
import { ShareActions } from './shared';

export function MxAguinaldoCalculator() {
  const [salaryMode, setSalaryMode] = useState<'monthly' | 'daily'>('monthly');
  const [salary, setSalary] = useState<number>(12000);
  const [aguinaldoDays, setAguinaldoDays] = useState<number>(15);
  const [startDate, setStartDate] = useState<string>('2026-01-01');
  const [periodEnd, setPeriodEnd] = useState<string>('2026-12-31');

  const r = calculateMxAguinaldo({ salaryMode, salary, aguinaldoDays, startDate, periodEnd });

  const shareText = `Mi aguinaldo 2026 calculado en Calcula:
Aguinaldo bruto: ${formatCurrency(r.gross, 'mx')}
Parte exenta (30 UMA): ${formatCurrency(r.exempt, 'mx')}
ISR estimado: ${formatCurrency(r.isr, 'mx')}
Aguinaldo neto: ${formatCurrency(r.net, 'mx')}
Calcula el tuyo: https://calcula.zetawala.com/mx/calculadora-aguinaldo/`;

  return (
    <div className="space-y-6">
      <Card className="p-4 sm:p-6 bg-white border-slate-200 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
          <span>🎄</span> Calcula tu aguinaldo
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <SegmentedToggle
            label="¿Cómo capturas tu sueldo?"
            options={[
              { value: 'monthly', label: 'Mensual' },
              { value: 'daily', label: 'Diario' },
            ]}
            value={salaryMode}
            onChange={(v) => setSalaryMode(v as 'monthly' | 'daily')}
          />
          <MoneyInput
            id="mx-agui-salary"
            name="salary"
            label={salaryMode === 'monthly' ? 'Sueldo mensual bruto' : 'Salario diario'}
            currencySymbol="$"
            value={salary}
            onChangeValue={(v) => setSalary(v)}
            helpText={`Salario diario: ${formatCurrency(r.dailySalary, 'mx')}`}
          />
          <NumberInput
            id="mx-agui-days"
            name="aguinaldoDays"
            label="Días de aguinaldo"
            value={aguinaldoDays}
            min={15}
            max={90}
            onChange={(e) => setAguinaldoDays(Number(e.target.value))}
            helpText="Mínimo de ley: 15 días de salario"
          />
          <DateInput
            id="mx-agui-start"
            name="startDate"
            label="Fecha de ingreso (si entraste este año)"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            hint="Si trabajas desde antes del 1 de enero, déjala en 1 de enero"
          />
          <DateInput
            id="mx-agui-end"
            name="periodEnd"
            label="Fin del periodo"
            value={periodEnd}
            onChange={(e) => setPeriodEnd(e.target.value)}
            hint="31 de diciembre, o tu fecha de salida si dejaste el empleo"
          />
        </div>
      </Card>

      <ResultSummary
        country="mx"
        totalAmount={r.net}
        totalLabel="Aguinaldo neto estimado"
        totalGross={r.gross}
        totalDeductions={r.isr}
        badge="Art. 87 LFT"
        subtitle={`${r.daysWorked} días trabajados en el año${r.proportional ? ' (proporcional)' : ''}`}
        items={[
          {
            key: 'bruto',
            label: `Aguinaldo bruto (${r.aguinaldoDays} días)`,
            amount: r.gross,
            formula: `${r.daysWorked} ÷ 365 × ${r.aguinaldoDays} días × ${formatCurrency(r.dailySalary, 'mx')}`,
            legalArticle: 'Art. 87 LFT',
          },
          {
            key: 'exento',
            label: 'Parte exenta de ISR (hasta 30 UMA)',
            amount: r.exempt,
            formula: `Límite: 30 × UMA = ${formatCurrency(r.exemptLimit, 'mx')}`,
            legalArticle: 'Art. 93 fr. XIV LISR',
          },
          {
            key: 'gravado',
            label: 'Parte gravada',
            amount: r.taxable,
            formula: 'Aguinaldo bruto − parte exenta',
            legalArticle: 'Art. 96 LISR',
          },
          {
            key: 'isr',
            label: 'ISR estimado',
            amount: r.isr,
            formula: 'ISR(sueldo + gravado) − ISR(sueldo), tarifa mensual 2026',
            legalArticle: 'Art. 96 LISR',
            isDeduction: true,
          },
        ]}
        footerActions={<ShareActions text={shareText} printLabel="Imprimir aguinaldo" />}
      />
      <p className="text-xs text-slate-600 bg-slate-50 border border-slate-200 rounded-lg p-3">
        📅 El patrón debe pagar el aguinaldo <strong>antes del 20 de diciembre</strong> (art. 87 LFT). Si no lo hace, puedes
        presentar una queja gratuita ante la PROFEDET.
      </p>
    </div>
  );
}
