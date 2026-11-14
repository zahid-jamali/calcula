'use client';

import React, { useState } from 'react';
import {
  Card,
  MoneyInput,
  DateInput,
  Select,
  Checkbox,
  ResultSummary,
  CopyButton,
  WhatsAppShareButton,
  PrintButton,
} from '@/components/ui';
import { calculateCoLiquidacion, CoSeparationReason } from '@/lib/co/liquidacion';
import { formatCurrency } from '@/lib/format';

export function CoLiquidacionCalculator() {
  const [salary, setSalary] = useState<number>(1500000);
  const [startDate, setStartDate] = useState<string>('2025-01-01');
  const [endDate, setEndDate] = useState<string>('2026-06-30');
  const [reason, setReason] = useState<CoSeparationReason>('renuncia');
  const [hasAuxilio, setHasAuxilio] = useState<boolean>(true);

  const result = calculateCoLiquidacion({
    monthlySalary: salary,
    startDate,
    endDate,
    reason,
    hasAuxilioTransporte: hasAuxilio,
  });

  const shareText = `Resultado de Liquidación Laboral CST 2026 en Calcula:
Salario básico: ${formatCurrency(salary, 'co')}
Total Liquidación: ${formatCurrency(result.totalGross, 'co')}
Simula gratis en: https://calcula.zetawala.com/co/calculadora-liquidacion/`;

  return (
    <div className="space-y-6">
      <Card className="p-4 sm:p-6 bg-white border-slate-200 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
          <span>🧮</span> Datos del contrato de trabajo
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <MoneyInput
            id="monthly-salary"
            name="monthlySalary"
            label="Salario Básico Mensual"
            currencySymbol="$"
            value={salary}
            onChangeValue={(val) => setSalary(val)}
          />

          <Select
            id="reason"
            name="reason"
            label="Motivo de Retiro"
            value={reason}
            onChange={(e) => setReason(e.target.value as CoSeparationReason)}
            options={[
              { value: 'renuncia', label: 'Renuncia voluntaria del trabajador' },
              { value: 'despido_sin_justa_causa', label: 'Despido sin justa causa (con indemnización Art. 64)' },
              { value: 'despido_justa_causa', label: 'Despido con justa causa comprobada' },
            ]}
          />

          <DateInput
            id="start-date"
            name="startDate"
            label="Fecha de Ingreso"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />

          <DateInput
            id="end-date"
            name="endDate"
            label="Fecha de Terminación"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>

        <div className="pt-2">
          <Checkbox
            id="auxilio"
            name="auxilio"
            label="Incluir Auxilio de Transporte ($200.000)"
            checked={hasAuxilio}
            onChange={(e) => setHasAuxilio(e.target.checked)}
            description="Aplica por ley a trabajadores que devenguen hasta 2 salarios mínimos (SMMLV 2026)."
          />
        </div>
      </Card>

      <ResultSummary
        country="co"
        totalAmount={result.totalGross}
        totalLabel="Total Liquidación Estimada"
        totalGross={result.totalGross}
        items={result.items}
        badge="CST Colombia 2026"
        footerActions={
          <div className="flex flex-wrap items-center gap-3 mt-4 pt-4 border-t border-slate-200">
            <CopyButton text={shareText} label="Copiar liquidación" />
            <WhatsAppShareButton text={shareText} label="Compartir en WhatsApp" />
            <PrintButton label="Imprimir certificado" />
          </div>
        }
      />
    </div>
  );
}
