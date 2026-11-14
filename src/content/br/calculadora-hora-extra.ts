import { PageContent } from '../types';

export const content: PageContent = {
  metaTitle: 'Calculadora de Horas Extras 2026 CLT | Calcula',
  metaDescription:
    'Calcule o valor das horas extras a 50%, 100% e o reflexo no DSR pela CLT. Simule o adicional noturno e saiba quanto receber no salário de 2026.',
  h1: 'Calculadora de Horas Extras CLT 2026: 50%, 100% e DSR',
  quickAnswer:
    'As horas extras remuneram o trabalho executado além da jornada contratual prevista na CLT. O adicional obrigatório é de no mínimo 50% em dias úteis e 100% aos domingos e feriados. As horas extraordinárias também geram reflexo financeiro proporcional no Descanso Semanal Remunerado (DSR) e nas demais verbas rescisórias.',
  howItWorks: [
    {
      step: 1,
      title: 'Determinação do Valor da Hora Normal',
      description:
        'Divide-se o salário base contratual pelo divisor da jornada mensal de trabalho (220 horas para contratos normais de 44h semanais ou 200 horas para jornadas de 40h).',
      formula: 'Salário Base ÷ Divisor de Horas Mensais',
      legalArticle: 'Art. 64 da CLT',
    },
    {
      step: 2,
      title: 'Aplicação do Adicional de Horas Extras',
      description:
        'Aplica-se o percentual de acréscimo legal: 50% para horas realizadas de segunda a sábado e 100% para trabalho realizado em domingos e feriados sem folga compensatória.',
      formula: 'Hora Normal × (1 + Percentual Adicional)',
      legalArticle: 'Art. 7º, XVI da CF/88 e Art. 59 da CLT',
    },
    {
      step: 3,
      title: 'Cálculo do Reflexo no DSR (Repouso Semanal)',
      description:
        'Soma-se o valor das horas extras do mês, divide-se pelo número de dias úteis trabalhados e multiplica-se pelos domingos e feriados daquele período.',
      formula: '(Total de Horas Extras ÷ Dias Úteis) × Domingos e Feriados',
      legalArticle: 'Lei nº 605/1949 e Súmula 172 do TST',
    },
    {
      step: 4,
      title: 'Integração em 13º Salário, Férias e FGTS',
      description:
        'Por possuírem natureza estritamente salarial habitual, as médias de horas extras geram reflexos obrigatórios no 13º salário, férias remuneradas e depósitos de FGTS.',
      formula: 'Média Anual de Horas Extras incorporada aos proventos',
      legalArticle: 'Súmulas 45, 151 e 376 do TST',
    },
  ],
  article: `
## Como Funciona o Pagamento de Horas Extras na CLT?

A Consolidação das Leis do Trabalho e a Constituição Federal fixam a duração normal da jornada laboral em até **8 horas diárias e 44 horas semanais**. Qualquer tempo despendido a serviço do empregador além desse limite estipulado em contrato caracteriza hora extraordinária.

A legislação autoriza a realização de no máximo **2 horas extras por dia**, mediante acordo individual escrito ou convenção coletiva (Art. 59 da CLT). A realização habitual de horas suplementares confere reflexos imediatos no repouso semanal remunerado e na base de cálculo de todos os demais direitos trabalhistas.

---

## Adicionais Legais: 50%, 100% e Convenções Coletivas

O ordenamento jurídico brasileiro fixa patamares mínimos de compensação financeira para o trabalho extraordinário:
- **Adicional de 50% (Dias Úteis)**: Previsto no Artigo 7º, inciso XVI da Constituição Federal de 1988, aplica-se a serviços prestados além da jornada contratual de segunda-feira a sábado.
- **Adicional de 100% (Domingos e Feriados)**: Quando o colaborador é escalado para trabalhar em domingos ou feriados civis e religiosos sem a concessão de folga compensatória equivalente na mesma semana (Súmula nº 146 do TST).
- **Normas Coletivas da Categoria**: Acordos Coletivos de Trabalho (ACT) e Convenções Coletivas (CCT) firmadas por sindicatos podem estabelecer adicionais superiores, como 60%, 70%, 80% ou até 120%.

---

## Como Calcular o Reflexo no DSR (Súmula 172 do TST)?

O trabalhador que recebe salário mensal tem o Descanso Semanal Remunerado embutido em sua remuneração fixa. Todavia, quando realiza horas extras, as horas de descanso semanal também devem ser remuneradas proporcionalmente ao esforço adicional despendido.

A fórmula pacificada pela **Lei nº 605/1949 e Súmula nº 172 do TST** é:
$$\\text{DSR sobre Horas Extras} = \\left(\\frac{\\text{Valor Total das Horas Extras do Mês}}{\\text{Número de Dias Úteis do Mês}}\\right) \\times \\text{Número de Domingos e Feriados}$$

> *Nota importante sobre sábado*: Para fins de cálculo do DSR trabalhista, o sábado é considerado dia útil não trabalhado, exceto se houver cláusula expressa em convenção coletiva dispondo em sentido diverso.

---

## Horas Extras Noturnas: Acúmulo de Adicionais

Quando a hora extra é executada entre as **22h de um dia e as 5h do dia seguinte** em área urbana:
1. Aplica-se a **hora noturna reduzida** ficcionada pelo Artigo 73, § 1º da CLT, em que cada hora equivale a 52 minutos e 30 segundos (um fator multiplicador de 1,142857);
2. Aplica-se o **adicional noturno mínimo de 20%** sobre o valor da hora normal;
3. Sobre esse resultado acrescido do adicional noturno, incide cumulativamente o adicional de horas extras (50% ou 100%), conforme prevê expressamente a **Súmula nº 60 do TST**.
`,
  examples: [
    {
      title: 'Exemplo 1: 20 Horas Extras a 50% (Jornada Padrão de 220h)',
      scenario:
        'Colaborador com salário fixo de R$ 3.300,00 cumpre jornada semanal de 44 horas (divisor 220) e realizou 20 horas extras em dias úteis no mês (25 dias úteis e 5 domingos/feriados).',
      inputs: {
        'Salário Base': 'R$ 3.300,00',
        'Divisor Mensal': '220 horas',
        'Horas Extras (50%)': '20 horas',
        'Calendário do Mês': '25 dias úteis e 5 domingos/feriados',
      },
      breakdown: [
        {
          item: 'Valor da Hora Normal de Trabalho',
          amount: 'R$ 15,00',
          note: 'R$ 3.300,00 ÷ 220 horas',
        },
        {
          item: 'Valor da Hora Extra com Adicional de 50%',
          amount: 'R$ 22,50',
          note: 'R$ 15,00 × 1,50',
        },
        {
          item: 'Subtotal de 20 Horas Extras Realizadas',
          amount: 'R$ 450,00',
          note: '20 horas × R$ 22,50',
        },
        {
          item: 'Reflexo no DSR (Lei nº 605/1949)',
          amount: 'R$ 90,00',
          note: '(R$ 450,00 ÷ 25 dias úteis) × 5 domingos',
        },
      ],
      total: 'R$ 540,00 Total Bruto de Horas Extras e DSR',
    },
    {
      title: 'Exemplo 2: Horas Extras Mistas (50% e 100% no Domingo)',
      scenario:
        'Funcionário com salário de R$ 2.640,00 (divisor 220) fez 15 horas extras comuns (50%) e 8 horas extras em domingo não compensado (100%) em mês de 24 dias úteis e 6 repousos.',
      inputs: {
        'Salário Base': 'R$ 2.640,00',
        'Divisor Mensal': '220 horas',
        'Horas a 50%': '15 horas',
        'Horas a 100%': '8 horas',
        'Dias Úteis / Descansos': '24 dias úteis e 6 repousos',
      },
      breakdown: [
        {
          item: 'Valor da Hora Normal (R$ 2.640 ÷ 220)',
          amount: 'R$ 12,00',
          note: 'Salário base da hora comum',
        },
        {
          item: '15 Horas Extras a 50% (R$ 12 × 1,50 × 15)',
          amount: 'R$ 270,00',
          note: '15 horas extraordinárias em dias de semana',
        },
        {
          item: '8 Horas Extras a 100% (R$ 12 × 2,00 × 8)',
          amount: 'R$ 192,00',
          note: '8 horas extraordinárias prestadas em feriado/domingo',
        },
        {
          item: 'Subtotal de Horas Extras Brutas',
          amount: 'R$ 462,00',
          note: 'R$ 270,00 + R$ 192,00',
        },
        {
          item: 'Reflexo do DSR sobre o Total',
          amount: 'R$ 115,50',
          note: '(R$ 462,00 ÷ 24 dias úteis) × 6 descansos',
        },
      ],
      total: 'R$ 577,50 Total Adicional na Folha de Pagamento',
    },
  ],
  faqs: [
    {
      q: 'Quantas horas extras o trabalhador pode fazer por dia pela CLT?',
      a: 'O Artigo 59 da CLT limita a prestação de horas extras a no máximo 2 horas suplementares diárias, mediante acordo individual firmado ou convenção coletiva de trabalho.',
    },
    {
      q: 'Qual é o valor mínimo do adicional de hora extra em dias normais?',
      a: 'Pelo Artigo 7º, inciso XVI da Constituição Federal, o acréscimo obrigatório para horas prestadas em dias normais (segunda a sábado) é de no mínimo 50% sobre a hora regular.',
    },
    {
      q: 'Quanto vale a hora extra trabalhada em domingos e feriados?',
      a: 'Trabalho em feriados ou domingos sem concessão de folga compensatória alternativa enseja o pagamento com adicional de 100%, ou seja, o valor da hora em dobro (Súmula 146 TST).',
    },
    {
      q: 'O que é o reflexo de DSR sobre as horas extras?',
      a: 'O DSR (Descanso Semanal Remunerado) reflete o direito de receber o valor proporcional das horas extras também no dia de descanso, calculado conforme a Lei 605/1949 e Súmula 172 do TST.',
    },
    {
      q: 'Como encontrar o divisor correto da minha jornada de trabalho?',
      a: 'Multiplica-se a carga horária semanal por 5. Para 44h semanais, utiliza-se o divisor 220; para 40h semanais, o divisor é 200; e para jornadas de 36h semanais, o divisor é 180.',
    },
    {
      q: 'As horas extras aumentam o valor do 13º salário e das férias?',
      a: 'Sim. As horas extras habituais entram no cálculo do 13º salário, férias com terço constitucional, aviso prévio indenizado e depósitos do FGTS pela sua média anual.',
    },
    {
      q: 'A empresa pode trocar o pagamento de horas extras por folga?',
      a: 'Sim, desde que exista um regime formal de Banco de Horas pactuado por acordo individual escrito (compensação em até 6 meses) ou convenção coletiva (compensação em até 1 ano).',
    },
    {
      q: 'Como é calculada a hora extra noturna?',
      a: 'Aplica-se primeiro o redutor da hora ficta noturna (52min30s), acresce-se o adicional noturno mínimo de 20% e, sobre essa base majorada, incide o adicional de 50% ou 100% de hora extra.',
    },
  ],
  sources: [
    {
      label: 'Consolidação das Leis do Trabalho - Duração do Trabalho (Art. 58 a 65 da CLT)',
      url: 'https://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm',
    },
    {
      label: 'Constituição Federal de 1988 - Artigo 7º, Inciso XVI (Planalto)',
      url: 'https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm',
    },
    {
      label: 'Lei nº 605/1949 - Repouso Semanal Remunerado e Feriados',
      url: 'https://www.planalto.gov.br/ccivil_03/leis/l0605.htm',
    },
    {
      label: 'Tribunal Superior do Trabalho - Súmulas 60, 146 e 172 (TST)',
      url: 'https://www.tst.jus.br/sumulas',
    },
  ],
  relatedTools: [
    {
      title: 'Calculadora de Salário Líquido',
      path: '/br/calculadora-salario-liquido',
      description: 'Simule o desconto de INSS e IRRF incidentes sobre seus ganhos com horas extras.',
    },
    {
      title: 'Calculadora de 13º Salário',
      path: '/br/calculadora-13-salario',
      description: 'Veja como a média das suas horas extras turbina o valor do décimo terceiro.',
    },
    {
      title: 'Calculadora de Rescisão Trabalhista',
      path: '/br/calculadora-rescisao',
      description: 'Calcule as verbas rescisórias integrando médias de adicionais e aviso prévio.',
    },
  ],
  relatedGuides: [
    {
      title: 'Como Calcular Rescisão Passo a Passo',
      path: '/br/guias/como-calcular-rescisao-passo-a-passo',
      description: 'Entenda como as horas extras habituais são integradas ao saldo final de rescisão.',
    },
    {
      title: 'Tabela Progressiva do INSS 2026',
      path: '/br/tabela-inss',
      description: 'Consulte as faixas tributárias de desconto previdenciário no seu holerite.',
    },
  ],
  updatedAt: '2026-01-01',
};
