'use client';

import React, { useState } from 'react';
import { Card, MoneyInput, NumberInput, DateInput, ResultSummary } from '@/components/ui';
import { calculateCoHorasExtras, CO_HOUR_TYPES, CoHourType } from '@/lib/co/horasExtras';
import { formatCurrency } from '@/lib/format';
import { ShareActions, StatCard, useTodayState } from './shared';

const cop = (n: number) => formatCurrency(n, 'co');

export function CoHorasExtrasCalculator() {
  const [salary, setSalary] = useState<number>(2100000);
  const [date, setDate] = useTodayState('2026-11-14');
  const [hours, setHours] = useState<Partial<Record<CoHourType, number>>>({ extra_diurna: 6, recargo_nocturno: 4, dominical_diurno: 8 });
  const r = calculateCoHorasExtras({ monthlySalary: salary, date, hours });

  const shareText = `Mis horas extras y recargos (Calcula Colombia):
Valor hora ordinaria: ${cop(r.hourlyValue)} · Total: ${cop(r.total)}
Calcula las tuyas: https://calcula.zetawala.com/co/calculadora-horas-extras/`;

  return (
    <div className="space-y-6">
      <Card className="p-4 sm:p-6 bg-white border-slate-200 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
          <span>⏱️</span> Horas extras y recargos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <MoneyInput id="co-he-salary" name="salary" label="Salario mensual" currencySymbol="$" value={salary} onChangeValue={(v) => setSalary(v)} />
          <DateInput
            id="co-he-date"
            name="date"
            label="Fecha del trabajo"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            hint="Define la jornada máxima y los recargos vigentes"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {CO_HOUR_TYPES.map((t) => (
            <NumberInput
              key={t.key}
              id={`co-he-${t.key}`}
              name={t.key}
              label={`${t.label} (horas)`}
              value={hours[t.key] ?? 0}
              min={0}
              step={0.5}
              onChange={(e) => setHours((h) => ({ ...h, [t.key]: Number(e.target.value) }))}
            />
          ))}
        </div>
      </Card>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard label="Jornada vigente" value={`${r.weeklyHours} h/semana`} hint={`${r.monthlyHours} horas al mes`} />
        <StatCard label="Valor hora ordinaria" value={cop(r.hourlyValue)} tone="emerald" />
        <StatCard
          label="Recargo dominical vigente"
          value={`${Math.round(r.dominicalRate * 100)}%`}
          hint={`Jornada nocturna desde las ${r.nightStartHour === 19 ? '7:00 p. m.' : '9:00 p. m.'}`}
          tone="blue"
        />
      </div>
      <ResultSummary
        country="co"
        totalAmount={r.total}
        totalLabel="Total horas extras y recargos"
        totalGross={r.total}
        totalDeductions={0}
        badge="CST arts. 168 y 179"
        items={r.lines
          .filter((l) => l.hours > 0)
          .map((l) => ({
            key: l.key,
            label: `${l.label} (${l.hours} h)`,
            amount: l.total,
            formula: `${l.hours} h × ${cop(r.hourlyValue)} × ${l.surchargeOnly ? `${Math.round(l.factor * 100)}% (solo recargo)` : `${(l.factor * 100).toFixed(0)}%`}`,
            legalArticle: l.key.includes('dominical') ? 'CST art. 179 (Ley 2466 de 2025)' : 'CST art. 168',
          }))}
        footerActions={<ShareActions text={shareText} />}
      />
      <p className="text-xs text-slate-600 bg-slate-50 border border-slate-200 rounded-lg p-3">
        Los recargos (nocturno y dominical) pagan solo el porcentaje adicional, porque la hora ordinaria ya está incluida en tu salario.
        Las horas extra pagan la hora completa más el recargo.
      </p>
    </div>
  );
}
