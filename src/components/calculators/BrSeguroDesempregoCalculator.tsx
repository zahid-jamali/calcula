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
import { calculateSeguroDesemprego } from '@/lib/br/seguroDesemprego';
import { formatCurrency } from '@/lib/format';

export function BrSeguroDesempregoCalculator() {
  const [salary1, setSalary1] = useState<number>(3200);
  const [salary2, setSalary2] = useState<number>(3200);
  const [salary3, setSalary3] = useState<number>(3200);
  const [requestNumber, setRequestNumber] = useState<1 | 2 | 3>(1);
  const [monthsWorked, setMonthsWorked] = useState<number>(18);

  const result = calculateSeguroDesemprego({
    lastThreeSalaries: [salary1, salary2, salary3],
    requestNumber,
    monthsWorked,
  });

  const shareText = `Resultado do Cálculo de Seguro-Desemprego 2026 na Calcula:
Situação: ${result.isEligible ? 'Elegível ao benefício' : 'Não elegível'}
Média dos Últimos 3 Salários: ${formatCurrency(result.averageSalary, 'br')}
Valor de Cada Parcela: ${formatCurrency(result.installmentValue, 'br')}
Número de Parcelas: ${result.installmentsCount} parcelas
Total a Receber: ${formatCurrency(result.totalBenefit, 'br')}
Simule grátis em: https://calcula.zetawala.com/br/calculadora-seguro-desemprego/`;

  const installmentItems = Array.from({ length: result.installmentsCount }, (_, i) => ({
    key: `parcela_${i + 1}`,
    label: `${i + 1}ª Parcela do Seguro-Desemprego`,
    amount: result.installmentValue,
    formula: `Média salarial de ${formatCurrency(result.averageSalary, 'br')} aplicada à tabela oficial 2026`,
    legalArticle: 'Lei 7.998/1990 e Resolução CODEFAT',
  }));

  return (
    <div className="space-y-6">
      <Card className="p-4 sm:p-6 bg-white border-slate-200 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
          <span>🛡️</span> Dados para o Seguro-Desemprego
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <MoneyInput
            id="sal-1"
            name="sal-1"
            label="Último Salário (Mês da Saída)"
            currencySymbol="R$"
            value={salary1}
            onChangeValue={(val) => setSalary1(val)}
          />

          <MoneyInput
            id="sal-2"
            name="sal-2"
            label="Penúltimo Salário"
            currencySymbol="R$"
            value={salary2}
            onChangeValue={(val) => setSalary2(val)}
          />

          <MoneyInput
            id="sal-3"
            name="sal-3"
            label="Antepenúltimo Salário"
            currencySymbol="R$"
            value={salary3}
            onChangeValue={(val) => setSalary3(val)}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Select
            id="request-num"
            name="request-num"
            label="Quantas vezes você já pediu seguro-desemprego?"
            value={String(requestNumber)}
            onChange={(e) => setRequestNumber(Number(e.target.value) as 1 | 2 | 3)}
            options={[
              { value: '1', label: '1ª vez (precisa de pelo menos 12 meses trabalhados)' },
              { value: '2', label: '2ª vez (precisa de pelo menos 9 meses trabalhados)' },
              { value: '3', label: '3ª vez ou mais (precisa de pelo menos 6 meses)' },
            ]}
          />

          <NumberInput
            id="months-worked"
            name="months-worked"
            label="Meses Trabalhados com Carteira Assinada (últimos 36 meses)"
            value={monthsWorked}
            onChange={(e) => setMonthsWorked(Number(e.target.value))}
            min={0}
            max={36}
            helpText="Total de meses com vínculo CLT no período de apuração"
          />
        </div>
      </Card>

      {/* Eligibility Banner */}
      {result.isEligible ? (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-950">
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">
              Valor de Cada Parcela
            </p>
            <p className="text-2xl font-black mt-1 text-emerald-900">
              {formatCurrency(result.installmentValue, 'br')}
            </p>
            <p className="text-xs text-emerald-700 mt-1">
              Piso: R$ 1.518,00 | Teto: R$ 2.351,09
            </p>
          </div>

          <div className="p-4 rounded-xl border border-blue-200 bg-blue-50 text-blue-950">
            <p className="text-xs font-bold uppercase tracking-wider text-blue-700">
              Quantidade de Parcelas
            </p>
            <p className="text-2xl font-black mt-1 text-blue-900">
              {result.installmentsCount} parcelas
            </p>
            <p className="text-xs text-blue-700 mt-1">
              Com base em {monthsWorked} meses comprovados
            </p>
          </div>

          <div className="p-4 rounded-xl border border-purple-200 bg-purple-50 text-purple-950">
            <p className="text-xs font-bold uppercase tracking-wider text-purple-700">
              Total Acumulado do Benefício
            </p>
            <p className="text-2xl font-black mt-1 text-purple-900">
              {formatCurrency(result.totalBenefit, 'br')}
            </p>
            <p className="text-xs text-purple-700 mt-1">
              {result.installmentsCount} parcelas mensais consecutivas
            </p>
          </div>
        </div>
      ) : (
        <div className="p-5 rounded-xl border border-amber-200 bg-amber-50 text-amber-950">
          <h3 className="font-bold text-amber-900 text-base flex items-center gap-2">
            <span>⚠️</span> Requisitos de carência não atendidos
          </h3>
          <p className="text-sm mt-1 text-amber-800">{result.reasonIfNotEligible}</p>
        </div>
      )}

      {result.isEligible && (
        <ResultSummary
          country="br"
          totalAmount={result.totalBenefit}
          totalLabel="Total Estimado do Seguro-Desemprego"
          totalGross={result.totalBenefit}
          totalDeductions={0}
          items={installmentItems}
          footerActions={
            <div className="flex flex-wrap items-center gap-3 mt-4 pt-4 border-t border-slate-200">
              <CopyButton text={shareText} label="Copiar resultado" />
              <WhatsAppShareButton text={shareText} label="Compartilhar no WhatsApp" />
              <PrintButton label="Imprimir comprovante" />
            </div>
          }
        />
      )}
    </div>
  );
}
