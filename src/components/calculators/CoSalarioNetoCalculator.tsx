'use client';

import React, { useState } from 'react';
import { Card, MoneyInput, Checkbox, ResultSummary } from '@/components/ui';
import { calculateCoSalarioNeto } from '@/lib/co/salarioNeto';
import { formatCurrency } from '@/lib/format';
import { ShareActions, StatCard } from './shared';

const cop = (n: number) => formatCurrency(n, 'co');

export function CoSalarioNetoCalculator() {
  const [gross, setGross] = useState<number>(3500000);
  const [integral, setIntegral] = useState<boolean>(false);
  const [dependents, setDependents] = useState<boolean>(false);
  const r = calculateCoSalarioNeto({ grossMonthly: gross, integral, hasDependents: dependents });

  const shareText = `Mi salario neto en Colombia 2026 (Calcula):
Salario: ${cop(r.gross)} · Neto mensual: ${cop(r.netMonthly)} · Quincena: ${cop(r.netQuincena)}
Calcula el tuyo: https://calcula.zetawala.com/co/calculadora-salario-neto/`;

  return (
    <div className="space-y-6">
      <Card className="p-4 sm:p-6 bg-white border-slate-200 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
          <span>💵</span> Salario bruto a neto
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <MoneyInput id="co-neto-gross" name="gross" label="Salario mensual" currencySymbol="$" value={gross} onChangeValue={(v) => setGross(v)} />
          <div className="space-y-3">
            <Checkbox
              id="co-neto-integral"
              name="integral"
              checked={integral}
              onChange={(e) => setIntegral(e.target.checked)}
              label="Salario integral"
              description="Mínimo 13 SMMLV; los aportes se calculan sobre el 70%."
            />
            <Checkbox
              id="co-neto-dep"
              name="dependents"
              checked={dependents}
              onChange={(e) => setDependents(e.target.checked)}
              label="Tengo dependientes económicos"
              description="Deducción del 10% del ingreso, máximo 32 UVT al mes, en la retención."
            />
          </div>
        </div>
      </Card>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard label="Salario bruto" value={cop(r.gross)} />
        <StatCard label="Neto mensual" value={cop(r.netMonthly)} tone="emerald" />
        <StatCard label="Neto por quincena" value={cop(r.netQuincena)} tone="blue" />
      </div>
      <ResultSummary
        country="co"
        totalAmount={r.netMonthly}
        totalLabel="Salario neto mensual"
        totalGross={r.gross + r.auxilio}
        totalDeductions={r.salud + r.pension + r.fondoSolidaridad + r.retencion}
        badge="CST · DIAN 2026"
        subtitle={`IBC ${cop(r.ibc)} · base de retención ${r.retencionBaseUvt} UVT`}
        items={[
          { key: 'salario', label: 'Salario mensual', amount: r.gross, formula: 'Salario pactado' },
          ...(r.auxilio
            ? [{ key: 'aux', label: 'Auxilio de transporte', amount: r.auxilio, formula: 'Salario ≤ 2 SMMLV', legalArticle: 'Decreto 1470 de 2025' }]
            : []),
          { key: 'salud', label: 'Salud (4%)', amount: r.salud, formula: `${cop(r.ibc)} × 4%`, legalArticle: 'Ley 100 de 1993', isDeduction: true },
          { key: 'pension', label: 'Pensión (4%)', amount: r.pension, formula: `${cop(r.ibc)} × 4%`, legalArticle: 'Ley 100 de 1993', isDeduction: true },
          ...(r.fondoSolidaridad
            ? [
                {
                  key: 'fsp',
                  label: `Fondo de Solidaridad Pensional (${(r.fondoSolidaridadRate * 100).toFixed(1)}%)`,
                  amount: r.fondoSolidaridad,
                  formula: 'IBC ≥ 4 SMMLV',
                  legalArticle: 'Ley 797 de 2003',
                  isDeduction: true,
                },
              ]
            : []),
          {
            key: 'retencion',
            label: 'Retención en la fuente estimada (procedimiento 1)',
            amount: r.retencion,
            formula: `Base ${cop(r.retencionBase)} tras renta exenta del 25% (${cop(r.rentaExenta)})`,
            legalArticle: 'Arts. 383 y 387 ET',
            isDeduction: true,
          },
        ]}
        footerActions={<ShareActions text={shareText} />}
      />
    </div>
  );
}
