import { PageContent } from '../types';

export const content: PageContent = {
  metaTitle: 'Tabela do INSS 2026: Alíquotas e Faixas | Calcula',
  metaDescription:
    'Confira a tabela oficial do INSS 2026 com alíquotas progressivas de 7,5% a 14%, teto de R$ 8.157,41, parcelas a deduzir e exemplos práticos de cálculo.',
  h1: 'Tabela do INSS 2026: Alíquotas Progressivas e Teto',
  quickAnswer:
    'A tabela do INSS 2026 adota alíquotas progressivas de 7,5% a 14% aplicadas sobre faixas da remuneração dos trabalhadores com carteira assinada. O teto máximo de contribuição mensal é de R$ 951,64 para salários a partir de R$ 8.157,41, garantindo a proteção previdenciária e aposentadoria.',
  howItWorks: [
    {
      step: 1,
      title: 'Enquadramento na Tabela Progressiva',
      description:
        'A remuneração bruta do segurado é decomposta em faixas salariais sucessivas, aplicando-se o percentual de cada degrau correspondente.',
      formula: 'Contribuição = ∑ (Parcela da Faixa × Alíquota Respectiva)',
      legalArticle: 'Art. 28 da Lei nº 8.212/1991 e EC nº 103/2019',
    },
    {
      step: 2,
      title: 'Aplicação da Parcela a Deduzir',
      description:
        'Para simplificar o cálculo por faixas, multiplica-se o salário bruto pela alíquota nominal máxima da faixa e subtrai-se a dedução pré-fixada oficial.',
      formula: '(Salário Bruto × Alíquota) - Parcela a Deduzir',
      legalArticle: 'Portaria Interministerial MPS/MF de 2026',
    },
    {
      step: 3,
      title: 'Observância do Teto Previdenciário',
      description:
        'Nenhum desconto previdenciário pode exceder R$ 951,64 mensais, que é o montante atingido exatamente no teto salarial de R$ 8.157,41.',
      formula: 'Desconto Máximo = R$ 951,64',
      legalArticle: 'Art. 195 da Constituição Federal de 1988',
    },
  ],
  article: `
## Como Funciona a Tabela Progressiva do INSS em 2026?

A contribuição dos segurados empregados, trabalhadores domésticos e trabalhadores avulsos para o Regime Geral de Previdência Social (RGPS) segue o modelo de alíquotas progressivas determinado pela Reforma da Previdência (Emenda Constitucional nº 103/2019).

Nesse sistema, a alíquota não é cobrada de maneira integral sobre todo o salário. Em vez disso, cada fatia salarial é tributada unicamente pela alíquota respectiva à sua faixa, idêntico à dinâmica do Imposto de Renda. Esse modelo assegura maior justiça fiscal, onerando proporcionalmente menos quem recebe as menores remunerações.

---

## Tabela Oficial de Contribuição Previdenciária 2026

Abaixo constam as faixas salariais, alíquotas nominais e as parcelas a deduzir oficiais para o ano de 2026:

| Faixa Salarial de Remuneração | Alíquota Nominal | Parcela a Deduzir (Cálculo Rápido) |
| :--- | :--- | :--- |
| **Até R$ 1.518,00** (Salário Mínimo) | **7,5%** | R$ 0,00 |
| **De R$ 1.518,01 até R$ 2.793,88** | **9,0%** | R$ 22,77 |
| **De R$ 2.793,89 até R$ 4.190,83** | **12,0%** | R$ 106,59 |
| **De R$ 4.190,84 até R$ 8.157,41** | **14,0%** | R$ 190,40 |
| **Acima de R$ 8.157,41** (Teto) | **Teto Fixo** | Desconto máximo travado em **R$ 951,64** |

---

## Cálculo Prático: Pelo Método das Faixas vs. Parcela a Deduzir

Existem dois caminhos que chegam exatamente ao mesmo resultado centesimal:

### 1. Método Passo a Passo (Degraus):
Para um salário de R$ 3.000,00:
- **1ª faixa**: R$ 1.518,00 × 7,5% = **R$ 113,85**
- **2ª faixa**: (R$ 2.793,88 - R$ 1.518,00 = R$ 1.275,88) × 9% = **R$ 114,83**
- **3ª faixa**: (R$ 3.000,00 - R$ 2.793,88 = R$ 206,12) × 12% = **R$ 24,73**
- **Soma das 3 faixas**: R$ 113,85 + R$ 114,83 + R$ 24,73 = **R$ 253,41**

### 2. Método da Parcela a Deduzir:
- O salário de R$ 3.000,00 enquadra-se na 3ª faixa (alíquota de 12% e dedução de R$ 106,59).
- Cálculo: (R$ 3.000,00 × 0,12) - R$ 106,59 = R$ 360,00 - R$ 106,59 = **R$ 253,41**.
- A **alíquota efetiva real** paga pelo empregado é de R$ 253,41 ÷ R$ 3.000,00 = **8,45%**, bem inferior aos 12% nominais.

---

## Alíquotas para Contribuintes Individuais, Autônomos e Facultativos

Quem não tem carteira assinada mas deseja contribuir por conta própria dispõe de planos específicos:
- **Plano Normal (20%)**: Recolhe 20% sobre qualquer valor entre o piso (R$ 1.518,00 = R$ 303,60) e o teto (R$ 8.157,41 = R$ 1.631,48). Dá direito à aposentadoria por tempo de contribuição (regras de transição) e com valores superiores ao mínimo.
- **Plano Simplificado (11%)**: Recolhe 11% sobre o salário mínimo (R$ 166,98 mensais). Dá direito a benefícios previdenciários e aposentadoria por idade no piso de 1 salário mínimo.
- **Segurado Facultativo Baixa Renda (5%)**: Inscritos no CadÚnico com renda familiar de até 2 salários mínimos recolhem 5% do piso (R$ 75,90 mensais).
`,
  examples: [
    {
      title: 'Exemplo 1: Contribuição sobre Salário Médio de R$ 3.500,00',
      scenario:
        'Trabalhador sob regime CLT com remuneração mensal bruta de R$ 3.500,00 quer apurar o desconto exato do INSS no holerite.',
      inputs: {
        'Salário Bruto': 'R$ 3.500,00',
        'Faixa do Enquadramento': '3ª Faixa (12%)',
        'Parcela a Deduzir Oficial': 'R$ 106,59',
      },
      breakdown: [
        {
          item: 'Aplicação da Alíquota Nominal (12%)',
          amount: 'R$ 420,00',
          note: 'R$ 3.500,00 × 0,12',
        },
        {
          item: 'Subtração da Parcela a Deduzir',
          amount: '- R$ 106,59',
          note: 'Compensação das faixas inferiores (7,5% e 9%)',
        },
      ],
      total: 'R$ 313,41 Valor Líquido Descontado do INSS (Alíquota Efetiva: 8,95%)',
    },
    {
      title: 'Exemplo 2: Salário Acima do Teto Previdenciário (R$ 10.000,00)',
      scenario:
        'Executivo com salário de R$ 10.000,00 ultrapassa o teto máximo de recolhimento da Previdência Social.',
      inputs: {
        'Salário Bruto': 'R$ 10.000,00',
        'Teto Previdenciário 2026': 'R$ 8.157,41',
        'Alíquota da Faixa Máxima': '14%',
      },
      breakdown: [
        {
          item: 'Remuneração Isenta Acima do Teto',
          amount: 'R$ 1.842,59',
          note: 'R$ 10.000,00 - R$ 8.157,41 (não tributado para o INSS)',
        },
        {
          item: 'Contribuição Devida no Teto (R$ 8.157,41 × 14% - R$ 190,40)',
          amount: 'R$ 951,64',
          note: 'Valor limite máximo de desconto para qualquer salário',
        },
      ],
      total: 'R$ 951,64 Desconto Máximo Mensal Permitido por Lei',
    },
  ],
  faqs: [
    {
      q: 'Qual é o teto máximo de recolhimento do INSS em 2026?',
      a: 'O teto previdenciário para 2026 é de R$ 8.157,41, o que gera uma contribuição máxima mensal de R$ 951,64, independentemente de quanto a mais o profissional receba.',
    },
    {
      q: 'O que é a alíquota efetiva do INSS?',
      a: 'É a porcentagem real que foi descontada do seu salário bruto no final do cálculo por faixas, sendo sempre menor que a alíquota nominal máxima da sua faixa.',
    },
    {
      q: 'Como é calculado o desconto do INSS para quem ganha salário mínimo?',
      a: 'Quem recebe exatamente um salário mínimo nacional (R$ 1.518,00 em 2026) recolhe a alíquota de 7,5%, resultando em desconto mensal de R$ 113,85.',
    },
    {
      q: 'Quem tem dois empregos paga INSS em dobro acima do teto?',
      a: 'Não. A soma das contribuições em múltiplos vínculos de trabalho não pode exceder o teto máximo de R$ 951,64. O segurado deve apresentar os holerites para compensar e evitar descontos indevidos.',
    },
    {
      q: 'O INSS é descontado sobre o valor total do 13º salário?',
      a: 'Sim. O décimo terceiro salário sofre desconto de INSS aplicado de forma integral na segunda parcela, apurado exclusivamente sobre o valor total da gratificação.',
    },
    {
      q: 'O valor das horas extras sofre desconto do INSS?',
      a: 'Sim. Horas extras, adicional noturno, gratificações e comissões integram a base de remuneração bruta e sofrem desconto progressivo regular do INSS.',
    },
    {
      q: 'Qual é o código da guia GPS para pagar INSS como autônomo?',
      a: 'Para o plano normal de 20%, o código mais usual é o 1007 (contribuinte individual mensal). Para o plano simplificado de 11%, utiliza-se o código 1163.',
    },
    {
      q: 'Quando a nova tabela do INSS entra em vigor a cada ano?',
      a: 'A tabela de contribuição dos segurados é reajustada anualmente e passa a vigorar a partir de 1º de janeiro, com reflexo prático nos salários pagos no mês de fevereiro.',
    },
  ],
  sources: [
    {
      label: 'Ministério da Previdência Social - Tabela de Contribuição Mensal',
      url: 'https://www.gov.br/inss/pt-br/direitos-e-deveres/tabela-de-contribuicao-mensal',
    },
    {
      label: 'Emenda Constitucional nº 103/2019 - Reforma da Previdência (Planalto)',
      url: 'https://www.planalto.gov.br/ccivil_03/constituicao/emendas/emc/emc103.htm',
    },
    {
      label: 'Lei nº 8.212/1991 - Organização da Seguridade Social e Plano de Custeio',
      url: 'https://www.planalto.gov.br/ccivil_03/leis/l8212cons.htm',
    },
    {
      label: 'Portaria Interministerial MPS/MF Atualizada',
      url: 'https://www.gov.br/inss',
    },
  ],
  relatedTools: [
    {
      title: 'Calculadora de Salário Líquido',
      path: '/br/calculadora-salario-liquido',
      description: 'Simule o desconto do INSS e do Imposto de Renda no seu salário mensal.',
    },
    {
      title: 'Calculadora de Rescisão Trabalhista',
      path: '/br/calculadora-rescisao',
      description: 'Veja quanto de INSS é deduzido do saldo de salário e 13º na rescisão.',
    },
    {
      title: 'Calculadora de 13º Salário',
      path: '/br/calculadora-13-salario',
      description: 'Entenda como o INSS incide sobre a segunda parcela da gratificação natalina.',
    },
  ],
  relatedGuides: [
    {
      title: 'Tabela do Imposto de Renda (IRRF) 2026',
      path: '/br/tabela-irrf',
      description: 'Confira a tabela da Receita Federal, isenção e cálculo simplificado.',
    },
    {
      title: 'Salário Mínimo 2026: Histórico e Impactos',
      path: '/br/salario-minimo',
      description: 'Veja como o novo piso nacional altera os benefícios previdenciários.',
    },
  ],
  updatedAt: '2026-01-01',
};
