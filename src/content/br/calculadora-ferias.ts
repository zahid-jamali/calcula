import { PageContent } from '../types';

export const content: PageContent = {
  metaTitle: 'Calculadora de Férias 2026 CLT | Calcula',
  metaDescription:
    'Calcule o valor das suas férias CLT em 2026: salário, terço constitucional, abono pecuniário e descontos de INSS e IRRF de forma simples e precisa.',
  h1: 'Calculadora de Férias CLT 2026: Terço e Abono Pecuniário',
  quickAnswer:
    'As férias remuneradas são um direito anual garantido pelo Artigo 129 da CLT após 12 meses de trabalho. O trabalhador recebe a remuneração regular acrescida do terço constitucional (1/3), com a opção de converter até 10 dias em abono pecuniário, devendo o pagamento ocorrer até 2 dias antes do início do descanso.',
  howItWorks: [
    {
      step: 1,
      title: 'Identificação dos Dias de Direito',
      description:
        'A cada 12 meses de trabalho (período aquisitivo), o empregado ganha direito a até 30 dias corridos de férias, desde que não tenha mais de 5 faltas injustificadas.',
      formula: 'Tabela do Artigo 130 da CLT conforme faltas',
      legalArticle: 'Art. 130 da CLT',
    },
    {
      step: 2,
      title: 'Cálculo do Salário dos Dias de Gozo',
      description:
        'Calcula-se o valor diário do salário e multiplica-se pela quantidade de dias que serão efetivamente usufruídos de descanso.',
      formula: '(Salário Base ÷ 30) × Dias de Férias',
      legalArticle: 'Art. 142 da CLT',
    },
    {
      step: 3,
      title: 'Acréscimo do 1/3 Constitucional',
      description:
        'Garante adicional de um terço sobre o total dos dias de descanso, assegurado pela Constituição Federal para subsidiar o lazer.',
      formula: 'Remuneração das Férias ÷ 3',
      legalArticle: 'Art. 7º, XVII da CF/88',
    },
    {
      step: 4,
      title: 'Abono Pecuniário (Venda de 10 Dias)',
      description:
        'Se o colaborador optar por vender até 10 dias de suas férias, recebe a indenização dos dias correspondentes mais o terço referente ao abono.',
      formula: '[(Salário ÷ 30) × Dias Vendidos] + (Abono ÷ 3)',
      legalArticle: 'Art. 143 da CLT',
    },
    {
      step: 5,
      title: 'Deduções Obrigatórias de INSS e IRRF',
      description:
        'O INSS e o IRRF incidem estritamente sobre a remuneração dos dias de férias e seu terço respectivo. O abono pecuniário é isento.',
      formula: 'Bruto Tributável - INSS - IRRF',
      legalArticle: 'Lei nº 8.212/1991 e Parecer SEI nº 16.120/2020',
    },
  ],
  article: `
## Como Funcionam as Férias Trabalhistas pela CLT?

O direito a férias anuais remuneradas está consagrado no Artigo 129 da Consolidação das Leis do Trabalho e no Artigo 7º, inciso XVII, da Constituição Federal de 1988. Trata-se de uma medida imperativa de medicina e segurança do trabalho, concebida para garantir a higidez física e mental do colaborador.

O ciclo das férias opera em dois períodos bem definidos:
1. **Período Aquisitivo**: Cada ciclo de 12 meses completos de vigência do contrato de trabalho a partir da data de admissão.
2. **Período Concessivo**: Os 12 meses subsequentes ao término do período aquisitivo, intervalo no qual o empregador é obrigado a conceder e pagar as férias ao funcionário (Art. 134 da CLT).

---

## O Impacto das Faltas Injustificadas no Direito a Férias

A CLT estipula no Artigo 130 uma escala que reduz a quantidade de dias de férias com base no número de faltas não justificadas cometidas pelo empregado durante o respectivo período aquisitivo:

| Faltas Injustificadas no Ano | Dias Corridos de Férias |
| :--- | :--- |
| Até 5 faltas | 30 dias corridos |
| De 6 a 14 faltas | 24 dias corridos |
| De 15 a 23 faltas | 18 dias corridos |
| De 24 a 32 faltas | 12 dias corridos |
| Mais de 32 faltas | Perde integralmente o direito às férias |

---

## Regras de Fracionamento e Início das Férias

A Reforma Trabalhista (Lei nº 13.467/2017) autorizou a divisão do período de férias em até **três períodos**, mediante prévia concordância entre empresa e colaborador, desde que:
- Um dos períodos não seja inferior a **14 dias corridos**;
- Nenhum dos outros dois períodos seja inferior a **5 dias corridos** cada um.

### Proibição de Início em Véspera de Descanso
Conforme determina o Artigo 134, § 3º da CLT, é expressamente **vedado o início das férias nos dois dias que antecedem feriado ou dia de repouso semanal remunerado (RSR)**. Assim, para quem folga aos sábados e domingos, as férias jamais podem começar em uma quinta-feira ou sexta-feira.

---

## O Que É o Abono Pecuniário ("Venda de Férias")?

O Artigo 143 da CLT confere ao trabalhador a prerrogativa de converter até um terço (1/3) do período de férias ao qual tem direito em **abono pecuniário** — popularmente conhecido como a "venda de 10 dias" de férias:
- A decisão cabe exclusivamente ao trabalhador, não podendo ser imposta pela empresa.
- O requerimento deve ser formalizado pelo empregado em até 15 dias antes do término do seu período aquisitivo.
- **Isenção Tributária**: O valor recebido a título de abono pecuniário e seu respectivo terço constitucional tem caráter puramente indenizatório, não sofrendo descontos de INSS nem de Imposto de Renda.

---

## Prazo Legal de Pagamento e Férias em Dobro

O Artigo 145 da CLT impõe que o pagamento da remuneração das férias e, se for o caso, do abono pecuniário, deve ser efetuado **até 2 (dois) dias antes do início do respectivo período de descanso**.

Caso a empresa não conceda as férias dentro do período concessivo (12 meses posteriores ao período aquisitivo), incorre na aplicação do Artigo 137 da CLT: a remuneração deve ser quitada **em dobro**. Se a empresa conceder as férias no prazo mas descumprir o pagamento com 2 dias de antecedência, jurisprudência pacificada do TST e STF pode ensejar reparações morais e multas cabíveis.
`,
  examples: [
    {
      title: 'Exemplo 1: Férias Completas de 30 Dias (Sem Abono Pecuniário)',
      scenario:
        'Colaborador com salário de R$ 3.000,00 tira 30 dias de férias integrais, sem faltas no período aquisitivo e sem dependentes legais.',
      inputs: {
        'Salário Bruto': 'R$ 3.000,00',
        'Dias de Gozo': '30 dias',
        'Venda de Férias': 'Não (0 dias de abono)',
        'Dependentes': '0',
      },
      breakdown: [
        {
          item: 'Remuneração dos 30 Dias de Férias',
          amount: 'R$ 3.000,00',
          note: 'Salário integral do mês de descanso',
        },
        {
          item: '1/3 Constitucional de Férias',
          amount: 'R$ 1.000,00',
          note: 'R$ 3.000,00 ÷ 3 (Art. 7º, XVII CF/88)',
        },
        {
          item: 'Desconto Previdenciário (INSS sobre R$ 4.000)',
          amount: '- R$ 373,41',
          note: 'Tabela progressiva 2026 (12% deduzindo R$ 106,59)',
        },
        {
          item: 'Desconto de IRRF Retido na Fonte',
          amount: '- R$ 162,55',
          note: 'Base de R$ 3.626,59 na faixa de 15%',
        },
      ],
      total: 'R$ 3.464,04 Líquido Pago 2 Dias Antes do Início',
    },
    {
      title: 'Exemplo 2: Férias de 20 Dias com Venda de 10 Dias (Abono Pecuniário)',
      scenario:
        'Trabalhador com remuneração de R$ 3.600,00 opta por gozar 20 dias de descanso e converter 10 dias em abono pecuniário com 1 dependente.',
      inputs: {
        'Salário Bruto': 'R$ 3.600,00',
        'Dias de Descanso': '20 dias',
        'Dias de Abono': '10 dias vendidos',
        'Dependentes': '1',
      },
      breakdown: [
        {
          item: 'Salário dos 20 Dias de Descanso',
          amount: 'R$ 2.400,00',
          note: '(R$ 3.600 ÷ 30) × 20 dias',
        },
        {
          item: '1/3 Constitucional dos Dias de Descanso',
          amount: 'R$ 800,00',
          note: 'R$ 2.400,00 ÷ 3',
        },
        {
          item: 'Abono Pecuniário (10 Dias Indenizados)',
          amount: 'R$ 1.200,00',
          note: '(R$ 3.600 ÷ 30) × 10 dias (isento de INSS e IR)',
        },
        {
          item: '1/3 Constitucional sobre o Abono Pecuniário',
          amount: 'R$ 400,00',
          note: 'R$ 1.200,00 ÷ 3 (isento de INSS e IR)',
        },
        {
          item: 'Desconto INSS (apenas sobre descanso + 1/3)',
          amount: '- R$ 277,41',
          note: 'Incidência sobre R$ 3.200,00 tributáveis',
        },
        {
          item: 'Desconto IRRF Retido na Fonte',
          amount: '- R$ 35,54',
          note: 'Base R$ 3.200 - R$ 277,41 - R$ 189,59 = R$ 2.733,00',
        },
      ],
      total: 'R$ 4.487,05 Valor Total Líquido Depositado',
    },
  ],
  faqs: [
    {
      q: 'Qual é o prazo obrigatório para pagamento das férias pela empresa?',
      a: 'Conforme o Artigo 145 da CLT, o pagamento da remuneração de férias e do abono pecuniário deve ser feito até 2 dias antes do início do respectivo período de descanso do trabalhador.',
    },
    {
      q: 'Como é calculada a remuneração das férias com o terço constitucional?',
      a: 'O valor equivale ao salário mensal devido na data da concessão acrescido obrigatoriamente de 33,33% (um terço), previsto no Artigo 7º, inciso XVII da Constituição Federal.',
    },
    {
      q: 'O empregado é obrigado a vender 10 dias de férias?',
      a: 'Não. A conversão de até 10 dias em abono pecuniário é uma opção e prerrogativa exclusiva do trabalhador (Art. 143 da CLT). O empregador não pode obrigar nem proibir a venda tempestiva.',
    },
    {
      q: 'Quando deve ser feito o pedido de venda de 10 dias das férias?',
      a: 'O requerimento do abono pecuniário deve ser comunicado por escrito pelo empregado com antecedência mínima de 15 dias antes de completar o período aquisitivo.',
    },
    {
      q: 'É permitido dividir as férias em mais de uma vez?',
      a: 'Sim. Desde a Reforma Trabalhista, as férias podem ser usufruídas em até três períodos, desde que um deles tenha no mínimo 14 dias corridos e os demais ao menos 5 dias cada.',
    },
    {
      q: 'Em quais dias da semana as férias NÃO podem começar?',
      a: 'O Artigo 134, § 3º da CLT veda expressamente o início das férias nos dois dias que antecedem dia de repouso semanal remunerado (RSR) ou feriado nacional, estadual ou municipal.',
    },
    {
      q: 'O que acontece se a empresa não conceder as férias dentro do prazo?',
      a: 'Se as férias não forem concedidas nos 12 meses seguintes ao término do período aquisitivo (período concessivo), a empresa é obrigada a pagar a remuneração em dobro (Art. 137 da CLT).',
    },
    {
      q: 'As faltas no trabalho reduzem os dias de férias?',
      a: 'Sim. Mais de 5 faltas injustificadas no período aquisitivo reduzem proporcionalmente os dias de direito a férias conforme a escala progressiva do Artigo 130 da CLT.',
    },
    {
      q: 'Incide desconto de INSS e Imposto de Renda sobre o abono pecuniário?',
      a: 'Não. O valor pago a título de abono pecuniário (venda de férias) e o seu respectivo 1/3 constitucional possuem natureza indenizatória, sendo livres de descontos de INSS e IRRF.',
    },
  ],
  sources: [
    {
      label: 'Consolidação das Leis do Trabalho - Férias (Artigos 129 a 153 da CLT)',
      url: 'https://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm',
    },
    {
      label: 'Constituição Federal de 1988 - Artigo 7º, Inciso XVII (Planalto)',
      url: 'https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm',
    },
    {
      label: 'Tribunal Superior do Trabalho - Súmula nº 81 (Férias)',
      url: 'https://www.tst.jus.br/sumulas',
    },
    {
      label: 'Ministério do Trabalho e Emprego - Normas Regulamentadoras',
      url: 'https://www.gov.br/trabalho-e-emprego',
    },
  ],
  relatedTools: [
    {
      title: 'Calculadora de 13º Salário',
      path: '/br/calculadora-13-salario',
      description: 'Simule o pagamento das duas parcelas com descontos oficiais de INSS e IRRF.',
    },
    {
      title: 'Calculadora de Salário Líquido',
      path: '/br/calculadora-salario-liquido',
      description: 'Calcule seus rendimentos mensais descontando impostos e previdência.',
    },
    {
      title: 'Calculadora de Rescisão Trabalhista',
      path: '/br/calculadora-rescisao',
      description: 'Descubra o valor total de férias vencidas e proporcionais na rescisão.',
    },
  ],
  relatedGuides: [
    {
      title: 'Férias Vencidas em Dobro: Regras e Cálculo',
      path: '/br/guias/ferias-vencidas-em-dobro',
      description: 'Saiba quando as férias devem ser pagas com valor duplicado e quais os seus direitos.',
    },
    {
      title: 'Tabela Oficial do INSS 2026',
      path: '/br/tabela-inss',
      description: 'Tabela de contribuição previdenciária e alíquotas progressivas atualizadas.',
    },
  ],
  updatedAt: '2026-01-01',
};
