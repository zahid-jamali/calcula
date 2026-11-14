'use client';

import React, { useState } from 'react';
import { Card, MoneyInput, NumberInput, DateInput, Select, Checkbox, ResultSummary } from '@/components/ui';
import {
  calculateCoLiquidacion,
  CoContractType,
  CoSeparationReason,
} from '@/lib/co/liquidacion';
import { formatCurrency } from '@/lib/format';
import { ShareActions, useTodayState } from './shared';

export interface CoLiquidacionCalculatorProps {
  initialReason?: CoSeparationReason;
  lockReason?: boolean;
  initialContract?: CoContractType;
  lockContract?: boolean;
  pageUrl?: string;
}

const REASONS: Array<{ value: CoSeparationReason; label: string }> = [
  { value: 'renuncia', label: 'Renuncia' },
  { value: 'despido_sin_justa_causa', label: 'Despido sin justa causa' },
  { value: 'despido_justa_causa', label: 'Despido con justa causa' },
  { value: 'fin_contrato', label: 'Terminación del contrato (vencimiento o fin de la obra)' },
];

const CONTRACTS: Array<{ value: CoContractType; label: string }> = [
  { value: 'indefinido', label: 'Término indefinido' },
  { value: 'fijo', label: 'Término fijo' },
  { value: 'obra', label: 'Obra o labor' },
];

export function CoLiquidacionCalculator({
  initialReason = 'renuncia',
  lockReason = false,
  initialContract = 'indefinido',
  lockContract = false,
  pageUrl = 'https://calcula.zetawala.com/co/calculadora-liquidacion/',
}: CoLiquidacionCalculatorProps) {
  const [salary, setSalary] = useState<number>(2000000);
  const [variable, setVariable] = useState<number>(0);
  const [startDate, setStartDate] = useState<string>('2024-03-01');
  const [endDate, setEndDate] = useTodayState('2026-11-14');
  const [contract, setContract] = useState<CoContractType>(initialContract);
  const [fixedEnd, setFixedEnd] = useState<string>('2027-02-28');
  const [obraEnd, setObraEnd] = useState<string>('2026-12-31');
  const [reason, setReason] = useState<CoSeparationReason>(initialReason);
  const [vacTaken, setVacTaken] = useState<number>(15);
  const [cesPaid, setCesPaid] = useState<boolean>(true);
  const [primaPaid, setPrimaPaid] = useState<boolean>(true);
  const [pendingDays, setPendingDays] = useState<number>(14);

  const r = calculateCoLiquidacion({
    monthlySalary: salary,
    variableAverage: variable,
    startDate,
    endDate,
    contractType: contract,
    fixedTermEndDate: fixedEnd,
    obraEndDate: obraEnd,
    reason,
    vacationDaysTaken: vacTaken,
    cesantiasPreviousYearPaid: cesPaid,
    primaPreviousSemesterPaid: primaPaid,
    pendingSalaryDays: pendingDays,
  });

  const shareText = `Mi liquidación laboral en Colombia (Calcula 2026):
Salario: ${formatCurrency(salary, 'co')}
Total prestaciones e indemnización: ${formatCurrency(r.totalGross, 'co')}
Neto estimado: ${formatCurrency(r.totalNet, 'co')}
Calcula la tuya: ${pageUrl}`;

  return (
    <div className="space-y-6">
      <Card className="p-4 sm:p-6 bg-white border-slate-200 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
          <span>🧮</span> Datos del contrato
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <MoneyInput
            id="co-liq-salary"
            name="salary"
            label="Salario básico mensual"
            currencySymbol="$"
            value={salary}
            onChangeValue={(v) => setSalary(v)}
            helpText={r.auxilio ? 'Recibes auxilio de transporte: se suma a cesantías y prima' : 'Sin auxilio de transporte (más de 2 SMMLV)'}
          />
          <MoneyInput
            id="co-liq-variable"
            name="variable"
            label="Promedio mensual de pagos variables (opcional)"
            currencySymbol="$"
            value={variable}
            onChangeValue={(v) => setVariable(v)}
            helpText="Horas extra, recargos o comisiones habituales"
          />
          <DateInput id="co-liq-start" name="startDate" label="Fecha de ingreso" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
          <DateInput id="co-liq-end" name="endDate" label="Fecha de retiro" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
          <Select
            id="co-liq-contract"
            name="contract"
            label="Tipo de contrato"
            value={contract}
            disabled={lockContract}
            onChange={(e) => setContract(e.target.value as CoContractType)}
            options={CONTRACTS}
          />
          <Select
            id="co-liq-reason"
            name="reason"
            label="Motivo de terminación"
            value={reason}
            disabled={lockReason}
            onChange={(e) => setReason(e.target.value as CoSeparationReason)}
            options={REASONS}
          />
          {contract === 'fijo' && (
            <DateInput
              id="co-liq-fixed-end"
              name="fixedEnd"
              label="Fecha pactada de terminación del contrato"
              value={fixedEnd}
              onChange={(e) => setFixedEnd(e.target.value)}
            />
          )}
          {contract === 'obra' && (
            <DateInput
              id="co-liq-obra-end"
              name="obraEnd"
              label="Fecha estimada de terminación de la obra"
              value={obraEnd}
              onChange={(e) => setObraEnd(e.target.value)}
            />
          )}
          <NumberInput
            id="co-liq-pending"
            name="pendingDays"
            label="Días de salario pendientes de pago"
            value={pendingDays}
            min={0}
            max={30}
            onChange={(e) => setPendingDays(Number(e.target.value))}
          />
          <NumberInput
            id="co-liq-vac"
            name="vacTaken"
            label="Días de vacaciones ya disfrutados (todo el contrato)"
            value={vacTaken}
            min={0}
            onChange={(e) => setVacTaken(Number(e.target.value))}
          />
        </div>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Checkbox
            id="co-liq-ces-paid"
            name="cesPaid"
            checked={cesPaid}
            onChange={(e) => setCesPaid(e.target.checked)}
            label="Ya me consignaron las cesantías del año anterior"
            description="Si no, se suman las cesantías y los intereses del año pasado."
          />
          <Checkbox
            id="co-liq-prima-paid"
            name="primaPaid"
            checked={primaPaid}
            onChange={(e) => setPrimaPaid(e.target.checked)}
            label="Ya me pagaron la prima del semestre anterior"
            description="Si no, se suma la prima del semestre pasado."
          />
        </div>
      </Card>

      <ResultSummary
        country="co"
        totalAmount={r.totalNet}
        totalLabel="Liquidación neta estimada"
        totalGross={r.totalGross}
        totalDeductions={r.totalDeductions}
        items={r.items}
        badge="CST 2026"
        subtitle={`${r.workedDays360} días (año de 360) · ${r.serviceYears.toFixed(2)} años · base ${formatCurrency(r.basePrestaciones, 'co')}`}
        footerActions={<ShareActions text={shareText} printLabel="Imprimir liquidación" />}
      />
    </div>
  );
}
