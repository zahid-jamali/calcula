export interface RuleValue<T> {
  value: T;
  source: string;
  verifiedOn: string | null;
}

export interface InssBracket {
  max: number;
  rate: number;
  deduction: number;
}

export interface IrrfBracket {
  max: number;
  rate: number;
  deduction: number;
}

export interface SaqueAniversarioBracket {
  upTo: number;
  rate: number;
  additionalParcel: number;
}

export interface SalarioMinimoHistoryItem {
  year: number;
  value: number;
  law: string;
  effectiveDate: string;
}

export interface BrazilRules2026 {
  year: number;
  minimumWage: RuleValue<number>;
  fgtsRate: RuleValue<number>;
  fgtsPenaltyRate: RuleValue<number>;
  inssBrackets: RuleValue<InssBracket[]>;
  inssCeiling: RuleValue<number>;
  irrfBrackets: RuleValue<IrrfBracket[]>;
  irrfDeductionPerDependent: RuleValue<number>;
  irrfSimplifiedDeduction: RuleValue<number>;
  seguroDesemprego: RuleValue<{
    brackets: Array<{
      upTo: number;
      factor: number;
      fixedAdd: number;
    }>;
    maxInstallment: number;
    minInstallment: number;
  }>;
  saqueAniversarioBrackets: RuleValue<SaqueAniversarioBracket[]>;
  salarioMinimoHistory: RuleValue<SalarioMinimoHistoryItem[]>;
}

export interface RateBracket {
  /** Lower limit (inclusive) */
  lower: number;
  /** Upper limit (inclusive); null = no upper limit */
  upper: number | null;
  fixedFee: number;
  /** Marginal rate applied over the lower limit (decimal) */
  rate: number;
}

export interface DatedValue<T> {
  /** ISO date from which this value applies */
  from: string;
  value: T;
}

export interface MinimumWageHistoryItem {
  year: number;
  general: number;
  border: number | null;
  source: string;
}

export interface UmaHistoryItem {
  year: number;
  daily: number;
  monthly: number;
  annual: number;
}

export interface MexicoRules2026 {
  year: number;
  minimumWageGeneralDaily: RuleValue<number>;
  minimumWageBorderDaily: RuleValue<number>;
  minimumWageHistory: RuleValue<MinimumWageHistoryItem[]>;
  /** UMA values by effective date (UMA changes every 1 February) */
  uma: RuleValue<Array<DatedValue<{ daily: number; monthly: number; annual: number }>>>;
  umaHistory: RuleValue<UmaHistoryItem[]>;
  isrMonthlyTable: RuleValue<RateBracket[]>;
  subsidioEmpleo: RuleValue<{
    rateOfMonthlyUma: number;
    monthlyAmount: number;
    incomeLimitMonthly: number;
  }>;
  imssEmployee: RuleValue<{
    enfermedadMaternidadExcedente: number;
    excedenteThresholdUma: number;
    prestacionesDinero: number;
    gastosMedicosPensionados: number;
    invalidezVida: number;
    cesantiaVejez: number;
    sbcCapUma: number;
  }>;
  isrExemptions: RuleValue<{
    aguinaldoUma: number;
    primaVacacionalUma: number;
    ptuUma: number;
    separationUmaPerYear: number;
  }>;
  aguinaldoMinDays: RuleValue<number>;
  primaVacacionalRate: RuleValue<number>;
  /** Vacation days by year of service (LFT art. 76, reform 2023) */
  vacationTable: RuleValue<Array<{ fromYear: number; toYear: number; days: number }>>;
  indemnizacionConstitucionalDays: RuleValue<number>;
  veinteDiasPorAnio: RuleValue<number>;
  primaAntiguedadDaysPerYear: RuleValue<number>;
  primaAntiguedadSalaryCapMultiple: RuleValue<number>;
  primaAntiguedadVoluntaryMinYears: RuleValue<number>;
  aguinaldoDeadline: RuleValue<{ month: number; day: number }>;
  ptuDeadlines: RuleValue<{ companies: { month: number; day: number }; individuals: { month: number; day: number } }>;
}

/** Legacy shape still used by the current /co/ liquidación page. */
export interface ColombiaRules2026 {
  year: number;
  smmlv: RuleValue<number>;
  auxilioTransporte: RuleValue<number>;
  cesantiasRate: RuleValue<number>;
  interesesCesantiasRate: RuleValue<number>;
  primaServiciosDaysPerYear: RuleValue<number>;
  vacacionesDaysPerYear: RuleValue<number>;
}

/** Target shape for the full Colombia section (not wired yet). */
export interface ColombiaRules2026Next {
  year: number;
  smmlv: RuleValue<number>;
  auxilioTransporte: RuleValue<number>;
  smmlvHistory: RuleValue<Array<{ year: number; smmlv: number; auxilio: number; decree: string }>>;
  uvt: RuleValue<number>;
  maxWeeklyHours: RuleValue<Array<DatedValue<number>>>;
  nightWorkStartHour: RuleValue<Array<DatedValue<number>>>;
  nightWorkEndHour: RuleValue<number>;
  dominicalSurcharge: RuleValue<Array<DatedValue<number>>>;
  overtime: RuleValue<{
    extraDiurna: number;
    extraNocturna: number;
    recargoNocturno: number;
  }>;
  employeeContributions: RuleValue<{
    salud: number;
    pension: number;
    ibcMaxSmmlv: number;
    integralSalaryMinSmmlv: number;
    integralSalaryIbcFactor: number;
  }>;
  fondoSolidaridad: RuleValue<Array<{ fromSmmlv: number; rate: number }>>;
  retencionProcedimiento1: RuleValue<RateBracket[]>;
  retencion: RuleValue<{
    rentaExentaRate: number;
    rentaExentaCapUvtAnnual: number;
    globalLimitRate: number;
    globalLimitUvtAnnual: number;
    dependentDeductionRate: number;
    dependentDeductionCapUvtMonthly: number;
  }>;
  cesantiasDaysPerYear: RuleValue<number>;
  interesesCesantiasRate: RuleValue<number>;
  primaServiciosDaysPerYear: RuleValue<number>;
  vacacionesDaysPerYear: RuleValue<number>;
  auxilioMaxSmmlv: RuleValue<number>;
  indemnizacion: RuleValue<{
    highSalaryThresholdSmmlv: number;
    lowFirstYearDays: number;
    lowAdditionalYearDays: number;
    highFirstYearDays: number;
    highAdditionalYearDays: number;
    obraMinDays: number;
  }>;
  deadlines: RuleValue<{
    primaFirst: { month: number; day: number };
    primaSecond: { month: number; day: number };
    cesantiasDeposit: { month: number; day: number };
    interesesPayment: { month: number; day: number };
  }>;
  reformaTimeline: RuleValue<Array<{ date: string; title: string; detail: string; law: string }>>;
}

export interface ChileRules2026 {
  year: number;
  ingresoMinimoMensual: RuleValue<number>;
  feriadoAnualDiasHabiles: RuleValue<number>;
  topeImponibleAfpUf: RuleValue<number>;
  indemnizacionAniosServicioTopeAnios: RuleValue<number>;
  avisoPrevioMeses: RuleValue<number>;
}

export type CountryRulesMap = {
  br: BrazilRules2026;
  mx: MexicoRules2026;
  co: ColombiaRules2026;
  cl: ChileRules2026;
};
