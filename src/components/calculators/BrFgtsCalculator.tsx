'use client';

import React, { useState } from 'react';
import {
  Card,
  MoneyInput,
  NumberInput,
  Checkbox,
  ResultSummary,
  CopyButton,
  WhatsAppShareButton,
  PrintButton,
} from '@/components/ui';
import { calculateFgts, calculateSaqueAniversario } from '@/lib/br/fgts';
import { formatCurrency } from '@/lib/format';

export function BrFgtsCalculator() {
  const [monthlySalary, setMonthlySalary] = useState<number>(3000);
  const [monthsWorked, setMonthsWorked] = useState<number>(24);
  const [currentBalance, setCurrentBalance] = useState<number>(0);
  const [isApprentice, setIsApprentice] = useState<boolean>(false);
  const [customSaqueBalance, setCustomSaqueBalance] = useState<number>(0);

  const result = calculateFgts({
    monthlySalary,
    monthsWorked,
    currentBalance: currentBalance > 0 ? currentBalance : undefined,
    isApprentice,
    saqueAniversarioBalance: customSaqueBalance > 0 ? customSaqueBalance : undefined,
  });

  const saqueResult = customSaqueBalance > 0
    ? calculateSaqueAniversario(customSaqueBalance)
    : result.saqueAniversario;

  const lineItems = [
    {
      key: 'deposito_mensal',
      label: `Depósito Mensal da Empresa (${(result.depositRate * 100).toFixed(0)}%)`,
      amount: result.monthlyDeposit,
      formula: `${(result.depositRate * 100).toFixed(0)}% de ${formatCurrency(monthlySalary, 'br')} pago pelo empregador`,
      legalArticle: 'Art. 15 da Lei 8.036/1990',
    },
    {
      key: 'total_depositado',
      label: `Total Depositado (${monthsWorked} meses)`,
      amount: result.totalDeposited,
      formula: `${monthsWorked} meses × ${formatCurrency(result.monthlyDeposit, 'br')}`,
      legalArticle: 'Lei 8.036/1990',
    },
    {
      key: 'rendimento_projetado',
      label: 'Rendimento Estimado (3% a.a. + TR)',
      amount: result.totalInterest,
      formula: 'Juros capitalizados mensalmente sobre o saldo',
      legalArticle: 'Art. 13 da Lei 8.036/1990',
    },
    {
      key: 'multa_40',
      label: 'Multa Rescisória de 40% (Demissão sem Justa Causa)',
      amount: result.fine40,
      formula: `40% sobre o saldo acumulado de ${formatCurrency(result.projectedBalance, 'br')}`,
      legalArticle: 'Art. 18, § 1º da Lei 8.036/1990',
    },
    {
      key: 'multa_20',
      label: 'Multa Rescisória de 20% (Acordo Mútuo CLT Art. 484-A)',
      amount: result.fine20,
      formula: `20% sobre o saldo acumulado de ${formatCurrency(result.projectedBalance, 'br')}`,
      legalArticle: 'Art. 484-A da CLT',
    },
  ];

  const shareText = `Simulação de FGTS 2026 na Calcula:
Salário: ${formatCurrency(monthlySalary, 'br')}
Depósito Mensal (8%): ${formatCurrency(result.monthlyDeposit, 'br')}
Saldo Projetado (${monthsWorked} meses): ${formatCurrency(result.projectedBalance, 'br')}
Multa de 40%: ${formatCurrency(result.fine40, 'br')}
Total Rescisão sem Justa Causa: ${formatCurrency(result.totalWithFine40, 'br')}
Saque-Aniversário Estimado: ${formatCurrency(saqueResult.saqueAmount, 'br')}
Simule grátis em: https://calcula.zetawala.com/br/calculadora-fgts/`;

  return (
    <div className="space-y-6">
      <Card className="p-4 sm:p-6 bg-white border-slate-200 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
          <span>🏦</span> Dados da Conta FGTS
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <MoneyInput
            id="salary"
            name="salary"
            label="Salário Bruto Mensal"
            currencySymbol="R$"
            value={monthlySalary}
            onChangeValue={(val) => setMonthlySalary(val)}
            helpText="Base para o recolhimento do FGTS"
          />

          <NumberInput
            id="months"
            name="months"
            label="Meses Trabalhados no Contrato"
            value={monthsWorked}
            onChange={(e) => setMonthsWorked(Number(e.target.value))}
            min={1}
            max={480}
            helpText="Tempo de recolhimento contínuo para a projeção"
          />

          <MoneyInput
            id="current-balance"
            name="current-balance"
            label="Saldo Atual na Caixa (opcional)"
            currencySymbol="R$"
            value={currentBalance}
            onChangeValue={(val) => setCurrentBalance(val)}
            helpText="Deixe zerado para projetar a partir do salário e tempo"
          />

          <MoneyInput
            id="saque-balance"
            name="saque-balance"
            label="Saldo Específico para Saque-Aniversário (opcional)"
            currencySymbol="R$"
            value={customSaqueBalance}
            onChangeValue={(val) => setCustomSaqueBalance(val)}
            helpText="Deixe zerado para calcular sobre o saldo projetado"
          />
        </div>

        <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
          <Checkbox
            id="is-apprentice"
            name="is-apprentice"
            label="Contrato de Menor Aprendiz (alíquota especial de 2% de FGTS)"
            checked={isApprentice}
            onChange={(e) => setIsApprentice(e.target.checked)}
            helpTooltip="Art. 15, § 7º da Lei 8.036/1990: o contrato de aprendizagem tem alíquota de FGTS de 2% em vez dos 8% normais."
          />
        </div>
      </Card>

      {/* Highlights Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl border border-slate-200 bg-white">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Saldo Acumulado Projetado
          </p>
          <p className="text-2xl font-black mt-1 text-slate-900">
            {formatCurrency(result.projectedBalance, 'br')}
          </p>
          <p className="text-xs text-slate-500 mt-1">
            Depósitos ({formatCurrency(result.totalDeposited, 'br')}) + Juros
          </p>
        </div>

        <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-950">
          <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">
            Rescisão sem Justa Causa (+40%)
          </p>
          <p className="text-2xl font-black mt-1 text-emerald-900">
            {formatCurrency(result.totalWithFine40, 'br')}
          </p>
          <p className="text-xs text-emerald-700 mt-1">
            Saldo total + Multa de {formatCurrency(result.fine40, 'br')}
          </p>
        </div>

        <div className="p-4 rounded-xl border border-purple-200 bg-purple-50 text-purple-950">
          <p className="text-xs font-bold uppercase tracking-wider text-purple-700">
            Saque-Aniversário Estimado
          </p>
          <p className="text-2xl font-black mt-1 text-purple-900">
            {formatCurrency(saqueResult.saqueAmount, 'br')}
          </p>
          <p className="text-xs text-purple-700 mt-1">
            Faixa: {saqueResult.ratePercentage}% + {formatCurrency(saqueResult.additionalParcel, 'br')}
          </p>
        </div>
      </div>

      <ResultSummary
        country="br"
        totalAmount={result.projectedBalance}
        totalLabel="Saldo Total Acumulado no FGTS"
        totalGross={result.projectedBalance}
        totalDeductions={0}
        items={lineItems}
        footerActions={
          <div className="flex flex-wrap items-center gap-3 mt-4 pt-4 border-t border-slate-200">
            <CopyButton text={shareText} label="Copiar resultado" />
            <WhatsAppShareButton text={shareText} label="Compartilhar no WhatsApp" />
            <PrintButton label="Imprimir simulação" />
          </div>
        }
      />
    </div>
  );
}
