'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Card,
  MoneyInput,
  NumberInput,
  DateInput,
  Select,
  Checkbox,
  ResultSummary,
  CopyButton,
  WhatsAppShareButton,
  PrintButton,
} from '@/components/ui';
import { calculateBrRescisao, BrRescisaoReason, BrNoticeType } from '@/lib/br/rescisao';
import { formatCurrency } from '@/lib/format';

interface BrRescisaoCalculatorProps {
  initialReason?: BrRescisaoReason;
  lockReason?: boolean;
}

export function BrRescisaoCalculator({
  initialReason = 'sem-justa-causa',
  lockReason = false,
}: BrRescisaoCalculatorProps) {
  const [salary, setSalary] = useState<number>(3500);
  const [variablePay, setVariablePay] = useState<number>(0);
  const [startDate, setStartDate] = useState<string>('2024-01-01');
  const [endDate, setEndDate] = useState<string>('2026-06-30');
  const [reason, setReason] = useState<BrRescisaoReason>(initialReason);
  const [noticeType, setNoticeType] = useState<BrNoticeType>('indenizado');
  const [expiredVacations, setExpiredVacations] = useState<number>(0);
  const [vacationsInDouble, setVacationsInDouble] = useState<boolean>(false);
  const [fgtsBalance, setFgtsBalance] = useState<number>(0);
  const [useEstimatedFgts, setUseEstimatedFgts] = useState<boolean>(true);
  const [dependentsCount, setDependentsCount] = useState<number>(0);
  const [remainingContractDays, setRemainingContractDays] = useState<number>(0);

  const result = calculateBrRescisao({
    salary,
    variablePayAverage: variablePay,
    startDate,
    endDate,
    reason,
    noticeType,
    expiredVacations,
    vacationsInDouble,
    fgtsBalance: useEstimatedFgts ? undefined : fgtsBalance,
    dependentsCount,
    remainingContractDays:
      reason === 'rescisao-antecipada-experiencia-empregador' ? remainingContractDays : 0,
  });

  const shareText = `Resultado do Cálculo de Rescisão Trabalhista CLT 2026 na Calcula:
Salário Base: ${formatCurrency(salary + variablePay, 'br')}
Motivo: ${reason}
Total Bruto: ${formatCurrency(result.totalGross, 'br')}
Total Descontos: ${formatCurrency(result.totalDeductions, 'br')}
Total Líquido a Receber: ${formatCurrency(result.totalNet, 'br')}
FGTS Disponível p/ Saque: ${formatCurrency(result.fgtsWithdrawalAmount, 'br')}
Prazo de Pagamento: ${result.paymentDeadline}
Simule grátis em: https://calcula.zetawala.com/br/calculadora-rescisao/`;

  return (
    <div className="space-y-6">
      {/* Calculator Input Form */}
      <Card className="p-4 sm:p-6 bg-white border-slate-200 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
          <span>🧮</span> Preencha os dados do contrato CLT
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <MoneyInput
            id="salary"
            name="salary"
            label="Salário Bruto Mensal"
            currencySymbol="R$"
            value={salary}
            onChangeValue={(val) => setSalary(val)}
            helpText="Salário base registrado na carteira de trabalho"
          />

          <MoneyInput
            id="variable-pay"
            name="variable-pay"
            label="Média de Horas Extras e Comissões (opcional)"
            currencySymbol="R$"
            value={variablePay}
            onChangeValue={(val) => setVariablePay(val)}
            helpText="Média mensal de adicionais variáveis nos últimos 12 meses"
          />

          <DateInput
            id="start-date"
            name="start-date"
            label="Data de Admissão"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />

          <DateInput
            id="end-date"
            name="end-date"
            label="Data do Afastamento (Último dia)"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />

          {!lockReason && (
            <Select
              id="reason"
              name="reason"
              label="Motivo da Demissão / Rescisão"
              value={reason}
              onChange={(e) => setReason(e.target.value as BrRescisaoReason)}
              options={[
                { value: 'sem-justa-causa', label: 'Demissão sem justa causa (pelo empregador)' },
                { value: 'pedido-demissao', label: 'Pedido de demissão (pelo empregado)' },
                { value: 'acordo', label: 'Acordo mútuo (Art. 484-A da CLT)' },
                { value: 'justa-causa', label: 'Demissão com justa causa (Art. 482 CLT)' },
                { value: 'termino-experiencia', label: 'Término de contrato de experiência no prazo' },
                {
                  value: 'rescisao-antecipada-experiencia-empregador',
                  label: 'Rescisão antecipada de experiência (pela empresa - Art. 479)',
                },
              ]}
            />
          )}

          <Select
            id="notice"
            name="notice"
            label="Aviso Prévio"
            value={noticeType}
            onChange={(e) => setNoticeType(e.target.value as BrNoticeType)}
            options={
              reason === 'pedido-demissao'
                ? [
                    { value: 'trabalhado', label: 'Trabalhado pelo funcionário (30 dias)' },
                    { value: 'dispensado', label: 'Dispensado pelo empregador' },
                    { value: 'nao-cumprido', label: 'Não cumprido (desconta 30 dias de salário)' },
                  ]
                : reason === 'sem-justa-causa' || reason === 'acordo'
                ? [
                    { value: 'indenizado', label: 'Indenizado pela empresa (pago em dinheiro)' },
                    { value: 'trabalhado', label: 'Trabalhado (com redução de 2h ou 7 dias)' },
                    { value: 'dispensado', label: 'Dispensado do cumprimento' },
                  ]
                : [{ value: 'dispensado', label: 'Não aplicável neste motivo' }]
            }
          />

          <Select
            id="expired-vacations"
            name="expired-vacations"
            label="Férias Vencidas Não Gozadas"
            value={String(expiredVacations)}
            onChange={(e) => setExpiredVacations(Number(e.target.value))}
            options={[
              { value: '0', label: 'Nenhum período vencido' },
              { value: '1', label: '1 período vencido (1 ano completo)' },
              { value: '2', label: '2 períodos vencidos' },
            ]}
          />

          <NumberInput
            id="dependents"
            name="dependents"
            label="Número de Dependentes (p/ IRRF)"
            value={dependentsCount}
            onChange={(e) => setDependentsCount(Number(e.target.value))}
            min={0}
            max={20}
            helpText="Dedução de R$ 189,59 por dependente na base do imposto"
          />

          {reason === 'rescisao-antecipada-experiencia-empregador' && (
            <NumberInput
              id="remaining-days"
              name="remaining-days"
              label="Dias Faltantes para o Término do Contrato"
              value={remainingContractDays}
              onChange={(e) => setRemainingContractDays(Number(e.target.value))}
              min={1}
              max={90}
              helpText="Indenização do Art. 479 da CLT: metade da remuneração dos dias restantes"
            />
          )}
        </div>

        {expiredVacations > 0 && (
          <div className="mb-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
            <Checkbox
              id="vacations-double"
              name="vacations-double"
              label="Férias vencidas há mais de 1 período concessivo (pagamento em dobro - Art. 137 CLT)"
              checked={vacationsInDouble}
              onChange={(e) => setVacationsInDouble(e.target.checked)}
              helpTooltip="Quando a empresa não concede as férias no prazo legal de 12 meses após o período aquisitivo, deve pagá-las em dobro."
            />
          </div>
        )}

        <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-3">
          <Checkbox
            id="use-estimated-fgts"
            name="use-estimated-fgts"
            label="Estimar saldo do FGTS automaticamente (8% ao mês trabalhado)"
            checked={useEstimatedFgts}
            onChange={(e) => setUseEstimatedFgts(e.target.checked)}
            helpTooltip="Desmarque para informar o saldo exato que consta no extrato do aplicativo FGTS da Caixa."
          />

          {!useEstimatedFgts && (
            <div className="pt-2">
              <MoneyInput
                id="fgts-balance"
                name="fgts-balance"
                label="Saldo Total do FGTS na Caixa (para cálculo da multa rescisória)"
                currencySymbol="R$"
                value={fgtsBalance}
                onChangeValue={(val) => setFgtsBalance(val)}
                helpText="Consulte no aplicativo FGTS da Caixa Econômica Federal"
              />
            </div>
          )}
        </div>
      </Card>

      {/* Informative Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl border border-blue-200 bg-blue-50 text-blue-900">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-700">
            Prazo de Pagamento
          </p>
          <p className="text-base font-bold mt-1">{result.paymentDeadline}</p>
          <p className="text-xs text-blue-600 mt-1">Art. 477, § 6º da CLT</p>
        </div>

        <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-900">
          <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
            FGTS Liberado p/ Saque
          </p>
          <p className="text-xl font-extrabold mt-1 text-emerald-800">
            {formatCurrency(result.fgtsWithdrawalAmount, 'br')}
          </p>
          <p className="text-xs text-emerald-600 mt-1">
            {result.fgtsBalanceEstimated ? 'Saldo estimado + multa rescisória' : 'Saldo informado + multa'}
          </p>
        </div>

        <div className="p-4 rounded-xl border border-slate-200 bg-white text-slate-900">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-600">
            Seguro-Desemprego
          </p>
          <p className="text-base font-bold mt-1">
            {result.rightToSeguroDesemprego ? '✅ Tem direito às parcelas' : '❌ Sem direito ao benefício'}
          </p>
          {result.rightToSeguroDesemprego && (
            <Link
              href="/br/calculadora-seguro-desemprego/"
              className="text-xs font-medium text-emerald-600 hover:text-emerald-700 underline mt-1 block"
            >
              Calcular valor e parcelas do seguro →
            </Link>
          )}
        </div>
      </div>

      {/* Result Breakdown & Actions */}
      <ResultSummary
        country="br"
        totalAmount={result.totalNet}
        totalLabel="Total Líquido a Receber na Rescisão"
        totalGross={result.totalGross}
        totalDeductions={result.totalDeductions}
        items={result.items}
        footerActions={
          <div className="flex flex-wrap items-center gap-3 mt-4 pt-4 border-t border-slate-200">
            <CopyButton text={shareText} label="Copiar resultado" />
            <WhatsAppShareButton text={shareText} label="Compartilhar no WhatsApp" />
            <PrintButton label="Imprimir relatório" />
          </div>
        }
      />
    </div>
  );
}
