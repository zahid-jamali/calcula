import { getStaticIndicators } from './indicators';

export interface CreditoHipotecarioInput {
  propertyPriceUf: number;
  piePercentage: number; // e.g. 20 for 20%
  annualRatePercentage: number; // e.g. 4.5 for 4.5%
  years: number; // e.g. 20, 25, 30
  ufValue?: number;
}

export interface CreditoHipotecarioResult {
  propertyPriceUf: number;
  propertyPricePesos: number;
  piePercentage: number;
  pieUf: number;
  piePesos: number;
  loanAmountUf: number;
  loanAmountPesos: number;
  annualRatePercentage: number;
  monthlyRatePercentage: number;
  totalPayments: number;
  monthlyDividendoUf: number;
  monthlyDividendoPesos: number;
  totalPaidUf: number;
  totalPaidPesos: number;
  totalInterestUf: number;
  totalInterestPesos: number;
  ufValue: number;
  insuranceDisclaimer: string;
}

function round(val: number): number {
  return Math.round((val + Number.EPSILON) * 100) / 100;
}

export function calculateCreditoHipotecario(
  input: CreditoHipotecarioInput
): CreditoHipotecarioResult {
  const {
    propertyPriceUf,
    piePercentage,
    annualRatePercentage,
    years,
  } = input;

  const indicators = getStaticIndicators();
  const ufValue = input.ufValue || indicators.uf.value;

  const propertyPricePesos = Math.round(propertyPriceUf * ufValue);
  const pieUf = round(propertyPriceUf * (piePercentage / 100));
  const piePesos = Math.round(pieUf * ufValue);

  const loanAmountUf = round(propertyPriceUf - pieUf);
  const loanAmountPesos = Math.round(loanAmountUf * ufValue);

  const totalPayments = Math.max(12, years * 12);
  const annualRate = annualRatePercentage / 100;
  const monthlyRate = annualRate / 12;

  let monthlyDividendoUf = 0;
  if (monthlyRate > 0) {
    const factor = Math.pow(1 + monthlyRate, totalPayments);
    monthlyDividendoUf = round(loanAmountUf * ((monthlyRate * factor) / (factor - 1)));
  } else {
    monthlyDividendoUf = round(loanAmountUf / totalPayments);
  }

  const monthlyDividendoPesos = Math.round(monthlyDividendoUf * ufValue);
  const totalPaidUf = round(monthlyDividendoUf * totalPayments);
  const totalPaidPesos = Math.round(totalPaidUf * ufValue);
  const totalInterestUf = Math.max(0, round(totalPaidUf - loanAmountUf));
  const totalInterestPesos = Math.round(totalInterestUf * ufValue);

  return {
    propertyPriceUf,
    propertyPricePesos,
    piePercentage,
    pieUf,
    piePesos,
    loanAmountUf,
    loanAmountPesos,
    annualRatePercentage,
    monthlyRatePercentage: round(monthlyRate * 100),
    totalPayments,
    monthlyDividendoUf,
    monthlyDividendoPesos,
    totalPaidUf,
    totalPaidPesos,
    totalInterestUf,
    totalInterestPesos,
    ufValue,
    insuranceDisclaimer:
      'El cálculo del dividendo no incluye los seguros obligatorios de desgravamen ni de incendio/sismo exigidos por las instituciones financieras.',
  };
}
