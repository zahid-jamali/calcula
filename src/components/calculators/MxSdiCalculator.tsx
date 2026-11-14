'use client';

import React, { useState } from 'react';
import { Card, MoneyInput, NumberInput } from '@/components/ui';
import { calculateMxSdi } from '@/lib/mx/sdi';
import { formatCurrency } from '@/lib/format';
import { ShareActions, StatCard } from './shared';

export function MxSdiCalculator() {
  const [sd, setSd] = useState<number>(500);
  const [aguinaldoDays, setAguinaldoDays] = useState<number>(15);
  const [vacationDays, setVacationDays] = useState<number>(12);
  const [primaPct, setPrimaPct] = useState<number>(25);
  const [other, setOther] = useState<number>(0);

  const r = calculateMxSdi({
    dailySalary: sd,
    aguinaldoDays,
    vacationDays,
    primaVacacionalRate: primaPct / 100,
    otherDailyBenefits: other,
  });

  const shareText = `Mi salario diario integrado (Calcula):
Salario diario: ${formatCurrency(sd, 'mx')}
Factor de integración: ${r.factor.toFixed(4)}
SDI: ${formatCurrency(r.sdi, 'mx')}
Calcula el tuyo: https://calcula.zetawala.com/mx/calculadora-salario-diario-integrado/`;

  return (
    <div className="space-y-6">
      <Card className="p-4 sm:p-6 bg-white border-slate-200 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
          <span>📐</span> Datos para integrar tu salario
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <MoneyInput
            id="mx-sdi-sd"
            name="sd"
            label="Salario diario (SD)"
            currencySymbol="$"
            value={sd}
            onChangeValue={(v) => setSd(v)}
            helpText="Sueldo mensual ÷ 30"
          />
          <NumberInput
            id="mx-sdi-agui"
            name="aguinaldoDays"
            label="Días de aguinaldo"
            value={aguinaldoDays}
            min={15}
            max={90}
            onChange={(e) => setAguinaldoDays(Number(e.target.value))}
          />
          <NumberInput
            id="mx-sdi-vac"
            name="vacationDays"
            label="Días de vacaciones del año en curso"
            value={vacationDays}
            min={12}
            max={40}
            onChange={(e) => setVacationDays(Number(e.target.value))}
            helpText="12 en el primer año, 14 en el segundo, etc."
          />
          <NumberInput
            id="mx-sdi-prima"
            name="primaPct"
            label="Prima vacacional (%)"
            value={primaPct}
            min={25}
            max={100}
            suffix="%"
            onChange={(e) => setPrimaPct(Number(e.target.value))}
          />
          <MoneyInput
            id="mx-sdi-other"
            name="other"
            label="Otras prestaciones fijas diarias que integran"
            currencySymbol="$"
            value={other}
            onChangeValue={(v) => setOther(v)}
            helpText="Opcional (por ejemplo, la parte gravada de vales o bonos fijos)"
          />
        </div>
      </Card>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard label="Factor de integración" value={r.factor.toFixed(4)} hint={`Mínimo de ley: ${r.minimumFactor}`} />
        <StatCard label="Salario diario integrado" value={formatCurrency(r.sdi, 'mx')} tone="emerald" hint={`≈ ${formatCurrency(r.sdiMonthly, 'mx')} al mes (30.4 días)`} />
        <StatCard
          label="SBC para el IMSS"
          value={formatCurrency(r.sbcCapped, 'mx')}
          tone={r.isCapped ? 'amber' : 'blue'}
          hint={r.isCapped ? `Topado a 25 UMA (${formatCurrency(r.sbcCap, 'mx')})` : 'Por debajo del tope de 25 UMA'}
        />
      </div>

      <Card className="p-4 sm:p-6 bg-white border-slate-200 shadow-sm text-sm text-slate-700 space-y-2">
        <p className="font-mono text-xs bg-slate-50 border border-slate-200 rounded p-2">
          Factor = 1 + ({aguinaldoDays} + {vacationDays} × {primaPct}%) ÷ 365 = {r.factor.toFixed(4)}
        </p>
        <p className="font-mono text-xs bg-slate-50 border border-slate-200 rounded p-2">
          SDI = {formatCurrency(sd, 'mx')} × {r.factor.toFixed(4)}
          {other > 0 ? ` + ${formatCurrency(other, 'mx')}` : ''} = {formatCurrency(r.sdi, 'mx')}
        </p>
        <ShareActions text={shareText} />
      </Card>
    </div>
  );
}
