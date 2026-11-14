'use client';

import React, { useState } from 'react';
import {
  Card,
  MoneyInput,
  NumberInput,
  DateInput,
  Select,
  Checkbox,
  SegmentedToggle,
  ResultSummary,
} from '@/components/ui';
import { calculateMxFiniquito, MxSeparationReason } from '@/lib/mx/finiquito';
import { formatCurrency } from '@/lib/format';
import { ShareActions, useTodayState } from './shared';

export interface MxFiniquitoCalculatorProps {
  initialReason?: MxSeparationReason;
  lockReason?: boolean;
  pageUrl?: string;
}

const REASONS: Array<{ value: MxSeparationReason; label: string }> = [
  { value: 'renuncia', label: 'Renuncia voluntaria (finiquito)' },
  { value: 'despido_injustificado', label: 'Despido injustificado (liquidación)' },
  { value: 'despido_justificado', label: 'Despido justificado (art. 47 LFT)' },
  { value: 'fin_contrato', label: 'Fin de contrato por tiempo u obra determinada' },
];

export function MxFiniquitoCalculator({
  initialReason = 'renuncia',
  lockReason = false,
  pageUrl = 'https://calcula.zetawala.com/mx/calculadora-finiquito/',
}: MxFiniquitoCalculatorProps) {
  const [salaryMode, setSalaryMode] = useState<'monthly' | 'daily'>('monthly');
  const [salary, setSalary] = useState<number>(15000);
  const [startDate, setStartDate] = useState<string>('2023-03-01');
  const [endDate, setEndDate] = useTodayState('2026-11-14');
  const [reason, setReason] = useState<MxSeparationReason>(initialReason);
  const [owedDays, setOwedDays] = useState<number>(10);
  const [vacationDaysTaken, setVacationDaysTaken] = useState<number>(0);
  const [pendingPrior, setPendingPrior] = useState<number>(0);
  const [aguinaldoDays, setAguinaldoDays] = useState<number>(15);
  const [primaPct, setPrimaPct] = useState<number>(25);
  const [include20Days, setInclude20Days] = useState<boolean>(false);
  const [zone, setZone] = useState<'general' | 'frontera'>('general');

  const result = calculateMxFiniquito({
    salaryMode,
    salary,
    startDate,
    endDate,
    reason,
    owedDays,
    vacationDaysTaken,
    pendingPriorVacationDays: pendingPrior,
    aguinaldoDays,
    primaVacacionalRate: primaPct / 100,
    include20Days,
    zone,
  });

  const items = [
    ...result.items,
    ...(result.isrTotal > 0
      ? [
          {
            key: 'isr',
            label: 'ISR estimado (retención)',
            amount: result.isrTotal,
            formula: `Gravado ${formatCurrency(result.totalTaxable, 'mx')} · exento ${formatCurrency(result.totalExempt, 'mx')}`,
            legalArticle: 'Arts. 93 y 96 LISR',
            isDeduction: true,
          },
        ]
      : []),
  ];

  const shareText = `Mi cálculo de ${result.totalLiquidacion > 0 ? 'finiquito y liquidación' : 'finiquito'} en Calcula (México 2026):
Salario diario: ${formatCurrency(result.dailySalary, 'mx')}
Finiquito: ${formatCurrency(result.totalFiniquito, 'mx')}
Liquidación: ${formatCurrency(result.totalLiquidacion, 'mx')}
ISR estimado: ${formatCurrency(result.isrTotal, 'mx')}
Neto estimado: ${formatCurrency(result.totalNet, 'mx')}
Calcula el tuyo: ${pageUrl}`;

  return (
    <div className="space-y-6">
      <Card className="p-4 sm:p-6 bg-white border-slate-200 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
          <span>🧮</span> Datos de tu relación laboral
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
            id="mx-fin-salary"
            name="salary"
            label={salaryMode === 'monthly' ? 'Sueldo mensual bruto' : 'Salario diario'}
            currencySymbol="$"
            value={salary}
            onChangeValue={(v) => setSalary(v)}
            helpText={
              salaryMode === 'monthly'
                ? `Salario diario = sueldo ÷ 30 = ${formatCurrency(result.dailySalary, 'mx')}`
                : 'El salario diario que aparece en tu recibo de nómina'
            }
          />
          <DateInput
            id="mx-fin-start"
            name="startDate"
            label="Fecha de ingreso"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <DateInput
            id="mx-fin-end"
            name="endDate"
            label="Fecha de salida (baja)"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
          <Select
            id="mx-fin-reason"
            name="reason"
            label="Motivo de la separación"
            value={reason}
            disabled={lockReason}
            onChange={(e) => setReason(e.target.value as MxSeparationReason)}
            options={REASONS}
          />
          <NumberInput
            id="mx-fin-owed"
            name="owedDays"
            label="Días trabajados que no te han pagado"
            value={owedDays}
            min={0}
            max={31}
            onChange={(e) => setOwedDays(Number(e.target.value))}
            helpText="Por ejemplo, los días de la quincena en curso"
          />
          <NumberInput
            id="mx-fin-vac-taken"
            name="vacationDaysTaken"
            label="Días de vacaciones ya tomados este año de servicio"
            value={vacationDaysTaken}
            min={0}
            max={40}
            onChange={(e) => setVacationDaysTaken(Number(e.target.value))}
          />
          <NumberInput
            id="mx-fin-vac-prior"
            name="pendingPrior"
            label="Vacaciones pendientes de años anteriores"
            value={pendingPrior}
            min={0}
            max={60}
            onChange={(e) => setPendingPrior(Number(e.target.value))}
            helpText="Días que ya habías ganado y no disfrutaste"
          />
          <NumberInput
            id="mx-fin-agui"
            name="aguinaldoDays"
            label="Días de aguinaldo al año"
            value={aguinaldoDays}
            min={15}
            max={90}
            onChange={(e) => setAguinaldoDays(Number(e.target.value))}
            helpText="Mínimo de ley: 15 días. Pon más si tu empresa los da."
          />
          <NumberInput
            id="mx-fin-prima"
            name="primaPct"
            label="Prima vacacional (%)"
            value={primaPct}
            min={25}
            max={100}
            suffix="%"
            onChange={(e) => setPrimaPct(Number(e.target.value))}
            helpText="Mínimo de ley: 25%"
          />
          <Select
            id="mx-fin-zone"
            name="zone"
            label="Zona salarial (para el tope de la prima de antigüedad)"
            value={zone}
            onChange={(e) => setZone(e.target.value as 'general' | 'frontera')}
            options={[
              { value: 'general', label: 'Resto del país ($315.04 diarios)' },
              { value: 'frontera', label: 'Zona Libre de la Frontera Norte ($440.87)' },
            ]}
          />
        </div>

        {reason === 'despido_injustificado' && (
          <div className="mt-5 rounded-xl border border-blue-200 bg-blue-50 p-4">
            <Checkbox
              id="mx-fin-20dias"
              name="include20Days"
              checked={include20Days}
              onChange={(e) => setInclude20Days(e.target.checked)}
              label="Incluir 20 días de salario por año trabajado (art. 50 LFT)"
              description="Aplica cuando tú pediste la reinstalación ante el Tribunal Laboral y el patrón se negó a reinstalarte (arts. 49 y 50), o cuando tú terminaste la relación por una falta grave del patrón (art. 52). En un despido injustificado común sin juicio, la indemnización base es de 3 meses. Muchas empresas lo pagan en un convenio, pero no siempre es obligatorio."
            />
          </div>
        )}
      </Card>

      <ResultSummary
        country="mx"
        totalAmount={result.totalNet}
        totalLabel={
          result.totalLiquidacion > 0
            ? 'Finiquito + liquidación neta estimada'
            : 'Finiquito neto estimado'
        }
        totalGross={result.totalGross}
        totalDeductions={result.isrTotal}
        items={items}
        badge="LFT 2026"
        subtitle={`SD ${formatCurrency(result.dailySalary, 'mx')} · SDI ${formatCurrency(result.sdi, 'mx')} · ${result.serviceYears.toFixed(2)} años`}
        footerActions={<ShareActions text={shareText} printLabel="Imprimir finiquito" />}
      />

      <Card className="p-4 sm:p-6 bg-white border-slate-200 shadow-sm">
        <h3 className="text-base font-bold text-slate-900 mb-3">Parte exenta y gravada de ISR por concepto</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs uppercase text-slate-500 border-b border-slate-200">
              <tr>
                <th className="py-2 pr-3">Concepto</th>
                <th className="py-2 pr-3 text-right">Total</th>
                <th className="py-2 pr-3 text-right">Exento</th>
                <th className="py-2 text-right">Gravado</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {result.items.map((i) => (
                <tr key={i.key}>
                  <td className="py-2 pr-3 text-slate-700">{i.label}</td>
                  <td className="py-2 pr-3 text-right font-mono">{formatCurrency(i.amount, 'mx')}</td>
                  <td className="py-2 pr-3 text-right font-mono text-emerald-700">{formatCurrency(i.exempt, 'mx')}</td>
                  <td className="py-2 text-right font-mono text-amber-700">{formatCurrency(i.taxable, 'mx')}</td>
                </tr>
              ))}
              <tr className="font-bold">
                <td className="py-2 pr-3">Totales</td>
                <td className="py-2 pr-3 text-right font-mono">{formatCurrency(result.totalGross, 'mx')}</td>
                <td className="py-2 pr-3 text-right font-mono text-emerald-700">{formatCurrency(result.totalExempt, 'mx')}</td>
                <td className="py-2 text-right font-mono text-amber-700">{formatCurrency(result.totalTaxable, 'mx')}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-500 mt-3 leading-relaxed">
          Exenciones con UMA de {formatCurrency(result.uma, 'mx')}: aguinaldo hasta 30 UMA, prima vacacional hasta 15 UMA y
          pagos por separación hasta 90 UMA por año de servicio. ISR de conceptos ordinarios calculado con la tarifa mensual
          sobre tu sueldo; el de la indemnización, con la tasa efectiva de tu último sueldo mensual (art. 96 LISR).
        </p>
      </Card>
    </div>
  );
}
