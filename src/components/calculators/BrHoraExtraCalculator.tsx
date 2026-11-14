'use client';

import React, { useState } from 'react';
import {
  Card,
  MoneyInput,
  NumberInput,
  Select,
  ResultSummary,
  CopyButton,
  WhatsAppShareButton,
  PrintButton,
} from '@/components/ui';
import { calculateHoraExtra } from '@/lib/br/horaExtra';
import { formatCurrency } from '@/lib/format';

export function BrHoraExtraCalculator() {
  const [salary, setSalary] = useState<number>(3000);
  const [monthlyHours, setMonthlyHours] = useState<number>(220);
  const [overtime50, setOvertime50] = useState<number>(10);
  const [overtime100, setOvertime100] = useState<number>(0);
  const [nightHours, setNightHours] = useState<number>(0);
  const [dsrWorkingDays, setDsrWorkingDays] = useState<number>(25);
  const [dsrNonWorkingDays, setDsrNonWorkingDays] = useState<number>(5);

  const result = calculateHoraExtra({
    salary,
    monthlyHours,
    overtime50Hours: overtime50,
    overtime100Hours: overtime100,
    nightHours,
    dsrWorkingDays,
    dsrNonWorkingDays,
  });

  const lineItems = result.items.map((i) => ({
    key: i.key,
    label: i.label,
    amount: i.total,
    formula: i.formula,
    legalArticle: i.legalArticle,
  }));

  const shareText = `Resultado do Cálculo de Horas Extras 2026 na Calcula:
Salário Base: ${formatCurrency(salary, 'br')}
Valor da Hora Normal: ${formatCurrency(result.baseHourlyRate, 'br')}/h
Horas Extras 50%: ${formatCurrency(result.overtime50Amount, 'br')}
Horas Extras 100%: ${formatCurrency(result.overtime100Amount, 'br')}
Reflexo no DSR: ${formatCurrency(result.dsrAmount, 'br')}
Total de Adicionais a Receber: ${formatCurrency(result.totalGrossAdditions, 'br')}
Simule grátis em: https://calcula.zetawala.com/br/calculadora-hora-extra/`;

  return (
    <div className="space-y-6">
      <Card className="p-4 sm:p-6 bg-white border-slate-200 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
          <span>⏱️</span> Dados de Horas Trabalhadas
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <MoneyInput
            id="salary"
            name="salary"
            label="Salário Bruto Mensal"
            currencySymbol="R$"
            value={salary}
            onChangeValue={(val) => setSalary(val)}
            helpText="Salário base para apuração do valor-hora"
          />

          <Select
            id="monthly-hours"
            name="monthly-hours"
            label="Jornada Mensal (Divisor CLT)"
            value={String(monthlyHours)}
            onChange={(e) => setMonthlyHours(Number(e.target.value))}
            options={[
              { value: '220', label: '220 horas (Jornada padrão de 44h semanais)' },
              { value: '200', label: '200 horas (Jornada de 40h semanais)' },
              { value: '180', label: '180 horas (Jornada de 36h semanais)' },
              { value: '150', label: '150 horas (Jornada de 30h semanais)' },
            ]}
          />

          <NumberInput
            id="overtime-50"
            name="overtime-50"
            label="Horas Extras a 50% (Dias úteis e sábados)"
            value={overtime50}
            onChange={(e) => setOvertime50(Number(e.target.value))}
            min={0}
            max={100}
            step={0.5}
            helpText="Adicional mínimo constitucional de 50%"
          />

          <NumberInput
            id="overtime-100"
            name="overtime-100"
            label="Horas Extras a 100% (Domingos e feriados)"
            value={overtime100}
            onChange={(e) => setOvertime100(Number(e.target.value))}
            min={0}
            max={100}
            step={0.5}
            helpText="Adicional em dias de repouso remunerado"
          />

          <NumberInput
            id="night-hours"
            name="night-hours"
            label="Horas Noturnas (22h às 5h)"
            value={nightHours}
            onChange={(e) => setNightHours(Number(e.target.value))}
            min={0}
            max={150}
            step={0.5}
            helpText="Hora noturna reduzida (52m30s) + adicional de 20%"
          />

          <div className="grid grid-cols-2 gap-2">
            <NumberInput
              id="dsr-work"
              name="dsr-work"
              label="Dias Úteis no Mês"
              value={dsrWorkingDays}
              onChange={(e) => setDsrWorkingDays(Number(e.target.value))}
              min={15}
              max={28}
            />
            <NumberInput
              id="dsr-rest"
              name="dsr-rest"
              label="DSR (Dom./Feriados)"
              value={dsrNonWorkingDays}
              onChange={(e) => setDsrNonWorkingDays(Number(e.target.value))}
              min={1}
              max={10}
            />
          </div>
        </div>
      </Card>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl border border-slate-200 bg-white">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Valor da Hora Normal
          </p>
          <p className="text-xl font-bold mt-1 text-slate-900">
            {formatCurrency(result.baseHourlyRate, 'br')}/h
          </p>
          <p className="text-xs text-slate-500 mt-1">
            {formatCurrency(salary, 'br')} ÷ {monthlyHours}h
          </p>
        </div>

        <div className="p-4 rounded-xl border border-blue-200 bg-blue-50 text-blue-950">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-700">
            Reflexo no DSR (Repouso)
          </p>
          <p className="text-xl font-black mt-1 text-blue-900">
            {formatCurrency(result.dsrAmount, 'br')}
          </p>
          <p className="text-xs text-blue-700 mt-1">
            Lei 605/1949 e Súmula 172 do TST
          </p>
        </div>

        <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-950">
          <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">
            Total Bruto a Receber
          </p>
          <p className="text-xl font-black mt-1 text-emerald-900">
            {formatCurrency(result.totalGrossAdditions, 'br')}
          </p>
          <p className="text-xs text-emerald-700 mt-1">
            Extras + Adicional Noturno + DSR
          </p>
        </div>
      </div>

      <ResultSummary
        country="br"
        totalAmount={result.totalGrossAdditions}
        totalLabel="Total de Adicionais Brutos de Horas Extras e DSR"
        totalGross={result.totalGrossAdditions}
        totalDeductions={0}
        items={lineItems}
        footerActions={
          <div className="flex flex-wrap items-center gap-3 mt-4 pt-4 border-t border-slate-200">
            <CopyButton text={shareText} label="Copiar resultado" />
            <WhatsAppShareButton text={shareText} label="Compartilhar no WhatsApp" />
            <PrintButton label="Imprimir demonstrativo" />
          </div>
        }
      />
    </div>
  );
}
