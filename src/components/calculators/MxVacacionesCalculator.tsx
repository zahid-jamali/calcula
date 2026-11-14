'use client';

import React, { useState } from 'react';
import { Card, MoneyInput, NumberInput, DateInput, ResultSummary } from '@/components/ui';
import { calculateMxVacaciones } from '@/lib/mx/vacaciones';
import { formatCurrency } from '@/lib/format';
import { ShareActions, StatCard, useTodayState } from './shared';

export function MxVacacionesCalculator() {
  const [salary, setSalary] = useState<number>(15000);
  const [startDate, setStartDate] = useState<string>('2021-05-10');
  const [referenceDate, setReferenceDate] = useTodayState('2026-11-14');
  const [primaPct, setPrimaPct] = useState<number>(25);

  const r = calculateMxVacaciones({
    salary,
    startDate,
    referenceDate,
    primaVacacionalRate: primaPct / 100,
  });

  const shareText = `Mis vacaciones según la LFT (Calcula):
Años cumplidos: ${r.completedYears}
Días de vacaciones ganados: ${r.daysEarned}
Prima vacacional: ${formatCurrency(r.primaVacacional, 'mx')}
Calcula las tuyas: https://calcula.zetawala.com/mx/calculadora-vacaciones/`;

  return (
    <div className="space-y-6">
      <Card className="p-4 sm:p-6 bg-white border-slate-200 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
          <span>🏖️</span> Tus vacaciones y prima vacacional
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <MoneyInput
            id="mx-vac-salary"
            name="salary"
            label="Sueldo mensual bruto"
            currencySymbol="$"
            value={salary}
            onChangeValue={(v) => setSalary(v)}
          />
          <NumberInput
            id="mx-vac-prima"
            name="primaPct"
            label="Prima vacacional (%)"
            value={primaPct}
            min={25}
            max={100}
            suffix="%"
            onChange={(e) => setPrimaPct(Number(e.target.value))}
            helpText="Mínimo de ley: 25% (art. 80 LFT)"
          />
          <DateInput
            id="mx-vac-start"
            name="startDate"
            label="Fecha de ingreso"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <DateInput
            id="mx-vac-ref"
            name="referenceDate"
            label="Fecha de consulta"
            value={referenceDate}
            onChange={(e) => setReferenceDate(e.target.value)}
          />
        </div>
      </Card>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard label="Años cumplidos" value={String(r.completedYears)} tone="slate" />
        <StatCard
          label="Días ganados (último aniversario)"
          value={`${r.daysEarned} días`}
          hint={r.completedYears === 0 ? 'Se ganan al cumplir el primer año' : undefined}
          tone="emerald"
        />
        <StatCard
          label="En tu próximo aniversario"
          value={`${r.nextYearDays} días`}
          hint={`Llevas ${r.proportionalDays.toFixed(2)} días proporcionales`}
          tone="blue"
        />
      </div>

      <ResultSummary
        country="mx"
        totalAmount={r.total}
        totalLabel="Pago de vacaciones + prima vacacional"
        totalGross={r.total}
        totalDeductions={0}
        badge="Vacaciones Dignas"
        items={[
          {
            key: 'vacaciones',
            label: `Salario de ${r.daysEarned} días de vacaciones`,
            amount: r.vacationPay,
            formula: `${r.daysEarned} días × ${formatCurrency(r.dailySalary, 'mx')}`,
            legalArticle: 'Art. 76 LFT',
          },
          {
            key: 'prima',
            label: `Prima vacacional (${Math.round(r.primaRate * 100)}%)`,
            amount: r.primaVacacional,
            formula: `${formatCurrency(r.vacationPay, 'mx')} × ${Math.round(r.primaRate * 100)}%`,
            legalArticle: 'Art. 80 LFT',
          },
        ]}
        footerActions={<ShareActions text={shareText} />}
      />

      <Card className="p-4 sm:p-6 bg-white border-slate-200 shadow-sm">
        <h3 className="text-base font-bold text-slate-900 mb-3">Días de vacaciones por año de servicio</h3>
        <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-7 gap-2 text-center text-xs">
          {r.table.map((row) => (
            <div
              key={row.year}
              className={`rounded-lg border p-2 ${
                row.isCurrent ? 'border-brand-900 bg-brand-50 font-bold' : 'border-slate-200'
              }`}
            >
              <div className="text-slate-500">Año {row.year}</div>
              <div className="text-sm text-slate-900">{row.days} días</div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
