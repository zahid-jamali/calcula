'use client';

import React, { useState } from 'react';
import { Card, MoneyInput, NumberInput, ResultSummary } from '@/components/ui';
import { calculateMxPtu } from '@/lib/mx/ptu';
import { formatCurrency } from '@/lib/format';
import { ShareActions } from './shared';

export function MxPtuCalculator() {
  const [totalPtu, setTotalPtu] = useState<number>(500000);
  const [employeeDays, setEmployeeDays] = useState<number>(365);
  const [employeeSalary, setEmployeeSalary] = useState<number>(146000);
  const [companyDays, setCompanyDays] = useState<number>(18250);
  const [companySalaries, setCompanySalaries] = useState<number>(9500000);
  const [monthlySalary, setMonthlySalary] = useState<number>(12000);
  const [avg3, setAvg3] = useState<number>(0);

  const r = calculateMxPtu({
    totalPtu,
    employeeDays,
    employeeSalary,
    companyTotalDays: companyDays,
    companyTotalSalaries: companySalaries,
    monthlySalary,
    averageLast3Years: avg3,
  });

  const shareText = `Mi reparto de utilidades (PTU) en Calcula:
Por días trabajados: ${formatCurrency(r.byDays, 'mx')}
Por salario: ${formatCurrency(r.bySalary, 'mx')}
PTU a recibir: ${formatCurrency(r.payable, 'mx')} · Neto estimado: ${formatCurrency(r.net, 'mx')}
Calcula la tuya: https://calcula.zetawala.com/mx/calculadora-ptu/`;

  return (
    <div className="space-y-6">
      <Card className="p-4 sm:p-6 bg-white border-slate-200 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
          <span>📊</span> Datos del reparto de utilidades
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <MoneyInput
            id="mx-ptu-total"
            name="totalPtu"
            label="PTU total a repartir por la empresa"
            currencySymbol="$"
            value={totalPtu}
            onChangeValue={(v) => setTotalPtu(v)}
            helpText="10% de la utilidad fiscal; aparece en el proyecto de reparto"
          />
          <MoneyInput
            id="mx-ptu-monthly"
            name="monthlySalary"
            label="Tu sueldo mensual"
            currencySymbol="$"
            value={monthlySalary}
            onChangeValue={(v) => setMonthlySalary(v)}
            helpText="Se usa para el tope de 3 meses y el ISR"
          />
          <NumberInput
            id="mx-ptu-days"
            name="employeeDays"
            label="Tus días trabajados en el año"
            value={employeeDays}
            min={0}
            max={366}
            onChange={(e) => setEmployeeDays(Number(e.target.value))}
          />
          <MoneyInput
            id="mx-ptu-salary"
            name="employeeSalary"
            label="Tu salario devengado en el año"
            currencySymbol="$"
            value={employeeSalary}
            onChangeValue={(v) => setEmployeeSalary(v)}
            helpText="Cuota diaria × días, sin horas extra ni bonos"
          />
          <NumberInput
            id="mx-ptu-cdays"
            name="companyDays"
            label="Total de días trabajados de todos los empleados"
            value={companyDays}
            min={0}
            onChange={(e) => setCompanyDays(Number(e.target.value))}
          />
          <MoneyInput
            id="mx-ptu-csal"
            name="companySalaries"
            label="Total de salarios de todos los empleados"
            currencySymbol="$"
            value={companySalaries}
            onChangeValue={(v) => setCompanySalaries(v)}
          />
          <MoneyInput
            id="mx-ptu-avg"
            name="avg3"
            label="Promedio de PTU recibida en los últimos 3 años (opcional)"
            currencySymbol="$"
            value={avg3}
            onChangeValue={(v) => setAvg3(v)}
          />
        </div>
      </Card>

      <ResultSummary
        country="mx"
        totalAmount={r.net}
        totalLabel="PTU neta estimada"
        totalGross={r.payable}
        totalDeductions={r.isr}
        badge="Arts. 117-127 LFT"
        subtitle={
          r.capped
            ? `Tope aplicado: ${r.capRule === 'tres_meses' ? '3 meses de salario' : 'promedio de los últimos 3 años'}`
            : undefined
        }
        items={[
          {
            key: 'dias',
            label: '50% repartido por días trabajados',
            amount: r.byDays,
            formula: `(PTU ÷ 2) × ${employeeDays} ÷ ${companyDays.toLocaleString('es-MX')} días`,
            legalArticle: 'Art. 123 LFT',
          },
          {
            key: 'salario',
            label: '50% repartido por salario',
            amount: r.bySalary,
            formula: `(PTU ÷ 2) × ${formatCurrency(employeeSalary, 'mx')} ÷ ${formatCurrency(companySalaries, 'mx')}`,
            legalArticle: 'Arts. 123 y 124 LFT',
          },
          ...(r.capped
            ? [
                {
                  key: 'tope',
                  label: 'Ajuste por tope del art. 127',
                  amount: Math.round((r.share - r.payable) * 100) / 100,
                  formula: `Tope: ${formatCurrency(r.cap, 'mx')}`,
                  legalArticle: 'Art. 127 fr. VIII LFT',
                  isDeduction: true,
                },
              ]
            : []),
          {
            key: 'isr',
            label: `ISR estimado (exento 15 UMA: ${formatCurrency(r.exempt, 'mx')})`,
            amount: r.isr,
            formula: `Gravado: ${formatCurrency(r.taxable, 'mx')}`,
            legalArticle: 'Art. 93 fr. XIV LISR',
            isDeduction: true,
          },
        ]}
        footerActions={<ShareActions text={shareText} />}
      />
      <p className="text-xs text-slate-600 bg-slate-50 border border-slate-200 rounded-lg p-3">
        📅 Fechas límite de pago: <strong>30 de mayo</strong> si la empresa es persona moral y{' '}
        <strong>29 de junio</strong> si el patrón es persona física (art. 122 LFT).
      </p>
    </div>
  );
}
