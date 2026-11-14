import { getRules } from '@/rules';

export interface FgtsInput {
  monthlySalary: number;
  monthsWorked: number;
  currentBalance?: number;
  annualYieldRate?: number; // default: 0.035 (3% a.a. + TR estimada)
  saqueAniversarioBalance?: number; // evaluate saque-aniversário on custom balance
  isApprentice?: boolean; // deposit rate 2% vs standard 8%
  depositRate?: number;
  date?: string | Date;
}

export interface SaqueAniversarioResult {
  balance: number;
  rate: number;
  ratePercentage: number;
  additionalParcel: number;
  saqueAmount: number;
  remainingBalance: number;
  bracketDescription: string;
}

export interface FgtsResult {
  monthlySalary: number;
  monthsWorked: number;
  depositRate: number;
  monthlyDeposit: number;
  initialBalance: number;
  totalDeposited: number;
  totalInterest: number;
  projectedBalance: number;
  fine40: number; // Multa 40% (sem justa causa)
  fine20: number; // Multa 20% (acordo mútuo)
  totalWithFine40: number;
  totalWithFine20: number;
  saqueAniversario: SaqueAniversarioResult;
}

function round(val: number): number {
  return Math.round((val + Number.EPSILON) * 100) / 100;
}

/**
 * Calculates Saque-Aniversário FGTS based on official Caixa brackets.
 * Lei 13.932/2019.
 */
export function calculateSaqueAniversario(balance: number, date?: string | Date): SaqueAniversarioResult {
  const rules = getRules('br', date);
  const brackets = rules.saqueAniversarioBrackets.value;

  if (balance <= 0) {
    return {
      balance: 0,
      rate: 0.5,
      ratePercentage: 50,
      additionalParcel: 0,
      saqueAmount: 0,
      remainingBalance: 0,
      bracketDescription: 'Saldo zero',
    };
  }

  for (let i = 0; i < brackets.length; i++) {
    const bracket = brackets[i];
    if (balance <= bracket.upTo) {
      const saqueAmount = round(balance * bracket.rate + bracket.additionalParcel);
      const remainingBalance = Math.max(0, round(balance - saqueAmount));
      const prevLimit = i === 0 ? 0 : brackets[i - 1].upTo;
      const bracketDescription =
        bracket.upTo === Infinity
          ? `Acima de R$ 20.000,00 (${(bracket.rate * 100).toFixed(0)}% + R$ ${bracket.additionalParcel.toFixed(2)})`
          : `De R$ ${prevLimit.toFixed(2)} a R$ ${bracket.upTo.toFixed(2)} (${(bracket.rate * 100).toFixed(0)}% + R$ ${bracket.additionalParcel.toFixed(2)})`;

      return {
        balance: round(balance),
        rate: bracket.rate,
        ratePercentage: round(bracket.rate * 100),
        additionalParcel: bracket.additionalParcel,
        saqueAmount,
        remainingBalance,
        bracketDescription,
      };
    }
  }

  // Fallback for amounts exceeding last threshold
  const lastBracket = brackets[brackets.length - 1];
  const saqueAmount = round(balance * lastBracket.rate + lastBracket.additionalParcel);
  return {
    balance: round(balance),
    rate: lastBracket.rate,
    ratePercentage: round(lastBracket.rate * 100),
    additionalParcel: lastBracket.additionalParcel,
    saqueAmount,
    remainingBalance: Math.max(0, round(balance - saqueAmount)),
    bracketDescription: `Acima de R$ 20.000,00 (5% + R$ 2.900,00)`,
  };
}

/**
 * Calculates FGTS monthly deposits, projected accumulated balance with interest,
 * rescisão fine simulations (40% and 20%), and saque-aniversário.
 * Complies with Lei 8.036/1990 and Lei 13.932/2019.
 */
export function calculateFgts(input: FgtsInput): FgtsResult {
  const {
    monthlySalary,
    monthsWorked,
    currentBalance = 0,
    annualYieldRate = 0.035, // 3% legal yield + TR
    saqueAniversarioBalance,
    isApprentice = false,
    depositRate: customDepositRate,
    date,
  } = input;

  const rules = getRules('br', date);
  const defaultRate = isApprentice ? 0.02 : rules.fgtsRate.value;
  const depositRate = customDepositRate !== undefined ? customDepositRate : defaultRate;

  const safeSalary = Math.max(0, monthlySalary);
  const safeMonths = Math.max(0, Math.floor(monthsWorked));
  const initialBalance = Math.max(0, currentBalance);

  const monthlyDeposit = round(safeSalary * depositRate);

  // Monthly yield compounding: (1 + annualYield)^(1/12) - 1
  const monthlyYieldRate = annualYieldRate > 0 ? Math.pow(1 + annualYieldRate, 1 / 12) - 1 : 0;

  let balance = initialBalance;
  let totalDeposited = 0;
  let totalInterest = 0;

  for (let m = 1; m <= safeMonths; m++) {
    const interest = balance * monthlyYieldRate;
    balance += interest + monthlyDeposit;
    totalDeposited += monthlyDeposit;
    totalInterest += interest;
  }

  const projectedBalance = round(balance);
  const roundedTotalDeposited = round(totalDeposited);
  const roundedTotalInterest = round(totalInterest);

  // Rescisão fine simulation (Art. 18 Lei 8.036/1990 e Art. 484-A CLT)
  const fine40 = round(projectedBalance * rules.fgtsPenaltyRate.value); // 40%
  const fine20 = round(projectedBalance * (rules.fgtsPenaltyRate.value / 2)); // 20%
  const totalWithFine40 = round(projectedBalance + fine40);
  const totalWithFine20 = round(projectedBalance + fine20);

  // Saque-aniversário
  const balanceForSaque =
    saqueAniversarioBalance !== undefined ? saqueAniversarioBalance : projectedBalance;
  const saqueAniversario = calculateSaqueAniversario(balanceForSaque, date);

  return {
    monthlySalary: round(safeSalary),
    monthsWorked: safeMonths,
    depositRate,
    monthlyDeposit,
    initialBalance: round(initialBalance),
    totalDeposited: roundedTotalDeposited,
    totalInterest: roundedTotalInterest,
    projectedBalance,
    fine40,
    fine20,
    totalWithFine40,
    totalWithFine20,
    saqueAniversario,
  };
}
