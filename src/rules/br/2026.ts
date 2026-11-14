import { BrazilRules2026 } from '../types';

export const br2026: BrazilRules2026 = {
  year: 2026,
  minimumWage: {
    value: 1518.0,
    source: 'https://www.gov.br/trabalho-e-emprego/pt-br/noticias-e-conteudo/salario-minimo',
    verifiedOn: '2026-01-01',
  },
  fgtsRate: {
    value: 0.08,
    source: 'https://www.planalto.gov.br/ccivil_03/leis/l8036.htm',
    verifiedOn: '2026-01-01',
  },
  fgtsPenaltyRate: {
    value: 0.4,
    source: 'https://www.planalto.gov.br/ccivil_03/leis/l8036.htm',
    verifiedOn: '2026-01-01',
  },
  inssBrackets: {
    value: [
      { max: 1518.0, rate: 0.075, deduction: 0 },
      { max: 2793.88, rate: 0.09, deduction: 22.77 },
      { max: 4190.83, rate: 0.12, deduction: 106.59 },
      { max: 8157.41, rate: 0.14, deduction: 190.4 },
    ],
    source: 'https://www.gov.br/inss/pt-br/direitos-e-deveres/tabela-de-contribuicao-mensal',
    verifiedOn: '2026-01-01',
  },
  inssCeiling: {
    value: 8157.41,
    source: 'https://www.gov.br/inss/pt-br/direitos-e-deveres/tabela-de-contribuicao-mensal',
    verifiedOn: '2026-01-01',
  },
  irrfBrackets: {
    value: [
      { max: 2259.2, rate: 0.0, deduction: 0 },
      { max: 2826.65, rate: 0.075, deduction: 169.44 },
      { max: 3751.05, rate: 0.15, deduction: 381.44 },
      { max: 4664.68, rate: 0.225, deduction: 662.77 },
      { max: Infinity, rate: 0.275, deduction: 896.0 },
    ],
    source: 'https://www.gov.br/receitafederal/pt-br/assuntos/meu-imposto-de-renda/tabelas',
    verifiedOn: '2026-01-01',
  },
  irrfDeductionPerDependent: {
    value: 189.59,
    source: 'https://www.gov.br/receitafederal/pt-br/assuntos/meu-imposto-de-renda/tabelas',
    verifiedOn: '2026-01-01',
  },
  irrfSimplifiedDeduction: {
    value: 564.8,
    source: 'https://www.gov.br/receitafederal/pt-br/assuntos/meu-imposto-de-renda/tabelas',
    verifiedOn: '2026-01-01',
  },
  seguroDesemprego: {
    value: {
      brackets: [
        { upTo: 2074.47, factor: 0.8, fixedAdd: 0 },
        { upTo: 3457.49, factor: 0.5, fixedAdd: 1659.58 },
      ],
      maxInstallment: 2351.09,
      minInstallment: 1518.0,
    },
    source: 'https://www.gov.br/trabalho-e-emprego/pt-br/servicos/trabalhador/seguro-desemprego',
    verifiedOn: '2026-01-01',
  },
  saqueAniversarioBrackets: {
    value: [
      { upTo: 500.0, rate: 0.5, additionalParcel: 0 },
      { upTo: 1000.0, rate: 0.4, additionalParcel: 50.0 },
      { upTo: 5000.0, rate: 0.3, additionalParcel: 150.0 },
      { upTo: 10000.0, rate: 0.2, additionalParcel: 650.0 },
      { upTo: 15000.0, rate: 0.15, additionalParcel: 1150.0 },
      { upTo: 20000.0, rate: 0.1, additionalParcel: 1900.0 },
      { upTo: Infinity, rate: 0.05, additionalParcel: 2900.0 },
    ],
    source: 'https://www.caixa.gov.br/beneficios-trabalhador/fgts/saque-FGTS/saque-aniversario',
    verifiedOn: '2026-01-01',
  },
  salarioMinimoHistory: {
    value: [
      { year: 2026, value: 1518.0, law: 'LDO / Decreto Presidencial 2026', effectiveDate: '01/01/2026' },
      { year: 2025, value: 1412.0, law: 'Decreto Federal 11.864/2023', effectiveDate: '01/01/2025' },
      { year: 2024, value: 1412.0, law: 'Decreto Federal 11.864/2023', effectiveDate: '01/01/2024' },
      { year: 2023, value: 1320.0, law: 'Lei 14.663/2023 (MP 1.172)', effectiveDate: '01/05/2023' },
      { year: 2022, value: 1212.0, law: 'Medida Provisória 1.091/2021', effectiveDate: '01/01/2022' },
      { year: 2021, value: 1100.0, law: 'Medida Provisória 1.021/2020', effectiveDate: '01/01/2021' },
      { year: 2020, value: 1045.0, law: 'Medida Provisória 919/2020', effectiveDate: '01/02/2020' },
      { year: 2019, value: 998.0, law: 'Decreto 9.661/2019', effectiveDate: '01/01/2019' },
      { year: 2018, value: 954.0, law: 'Decreto 9.255/2017', effectiveDate: '01/01/2018' },
      { year: 2017, value: 937.0, law: 'Decreto 8.948/2016', effectiveDate: '01/01/2017' },
    ],
    source: 'https://www.planalto.gov.br/ccivil_03/leis/lim/historico.htm',
    verifiedOn: '2026-01-01',
  },
};
