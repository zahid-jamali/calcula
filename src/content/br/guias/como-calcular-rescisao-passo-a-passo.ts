import { PageContent } from '../../types';

export const content: PageContent = {
  metaTitle: 'Como Calcular Rescisão Passo a Passo 2026 CLT',
  metaDescription:
    'Aprenda a calcular a rescisão trabalhista passo a passo em 2026: saldo de salário, aviso prévio, férias com 1/3, 13º, multa do FGTS e deduções da CLT.',
  h1: 'Como Calcular a Rescisão Trabalhista Passo a Passo CLT',
  quickAnswer:
    'Calcular a rescisão trabalhista envolve apurar o saldo de salário dos dias trabalhados, o aviso prévio trabalhado ou indenizado, o décimo terceiro salário proporcional, férias vencidas e proporcionais com um terço, o saque com multa de 40% do FGTS e os descontos oficiais de INSS e IRRF.',
  howItWorks: [
    {
      step: 1,
      title: 'Passo 1: Calcule o Saldo de Salário',
      description:
        'Divida o salário mensal fixo por 30 para encontrar a diária e multiplique pelo número de dias trabalhados no mês do término contratual.',
      formula: '(Salário Mensal ÷ 30) × Dias Trabalhados',
      legalArticle: 'Art. 457 da CLT',
    },
    {
      step: 2,
      title: 'Passo 2: Calcule o Aviso Prévio Proporcional',
      description:
        'Conte 30 dias para o primeiro ano completo e some 3 dias a cada ano completo subsequente (até 90 dias). Se indenizado pela empresa, pague os dias correspondentes.',
      formula: '30 dias + (3 dias × Anos Completos de Serviço)',
      legalArticle: 'Lei nº 12.506/2011',
    },
    {
      step: 3,
      title: 'Passo 3: Apure o 13º Salário Proporcional',
      description:
        'Conte os meses do ano corrente em que houve 15 dias ou mais de trabalho (incluindo a projeção do aviso indenizado) e calcule a fração de 1/12 por mês.',
      formula: '(Salário ÷ 12) × Meses com 15+ Dias',
      legalArticle: 'Lei nº 4.090/1962',
    },
    {
      step: 4,
      title: 'Passo 4: Apure as Férias Vencidas e Proporcionais + 1/3',
      description:
        'Some as férias simples pendentes (se houver) às férias proporcionais do período em curso e acrescente 33,33% referente ao terço constitucional.',
      formula: '[(Salário ÷ 12) × Meses Aquisitivos] + (Férias ÷ 3)',
      legalArticle: 'Art. 146 da CLT e Art. 7º, XVII CF/88',
    },
    {
      step: 5,
      title: 'Passo 5: Calcule a Multa de 40% do FGTS e Deduções',
      description:
        'Aplique 40% sobre o saldo histórico dos depósitos do FGTS (na demissão sem justa causa) e desconte o INSS incidente sobre as verbas salariais.',
      formula: 'Bruto Rescisório - INSS - IRRF = Total Líquido',
      legalArticle: 'Art. 18 Lei 8.036/1990 e Art. 477 CLT',
    },
  ],
  article: `
## Guia Definitivo do Cálculo de Rescisão de Contrato CLT

A rescisão do contrato de trabalho representa o acerto financeiro final entre empregado e empregador. O Termo de Rescisão do Contrato de Trabalho (TRCT) consolida todas as verbas a pagar (proventos) e as retenções autorizadas (descontos).

Para realizar a conferência ou simulação precisa dos valores, siga o roteiro passo a passo detalhado abaixo.

---

## Passo 1: Saldo de Salário
O saldo de salário corresponde à remuneração dos dias que você trabalhou no mês da dispensa:
$$\\text{Saldo de Salário} = \\left(\\frac{\\text{Salário Base}}{30}\\right) \\times \\text{Dias Trabalhados no Mês}$$

*Exemplo*: Empregado com salário de R$ 3.000,00 que trabalhou até o dia 18 do mês:  
Diária = R$ 3.000 ÷ 30 = R$ 100,00  
Saldo de Salário = 18 × R$ 100,00 = **R$ 1.800,00**.

---

## Passo 2: Aviso Prévio (Lei nº 12.506/2011)
A regra do aviso prévio proporcional estipula:
- **30 dias fixos** para quem tem até 1 ano completo de trabalho;
- **Mais 3 dias** por cada novo ano de trabalho completo na empresa;
- **Teto legal máximo**: 90 dias (atingido após 20 anos de contrato).

Se o aviso for **indenizado** (saída imediata decidida pela empresa), você recebe o valor integral dos dias apurados.  
Se o aviso for **trabalhado**, você trabalha o período regular e pode optar por sair 2 horas mais cedo todos os dias ou faltar por 7 dias corridos ao final (Art. 488 da CLT).

---

## Passo 3: 13º Salário Proporcional
Calcula-se quantos meses no ano civil contam com pelo menos 15 dias de serviço prestado:
$$\\text{13º Proporcional} = \\left(\\frac{\\text{Salário}}{12}\\right) \\times \\text{Meses Trabalhados no Ano}$$

> **Importante**: Se o aviso prévio for indenizado, a sua data projeta o término para frente. Se essa projeção ultrapassar 15 dias do mês seguinte, você ganha mais 1/12 avos no décimo terceiro!

---

## Passo 4: Férias Proporcionais + 1/3 Constitucional
Cada mês trabalhado no período aquisitivo (também exigindo 15 dias ou mais) assegura 1/12 avos de férias:
1. Divide-se o salário por 12 e multiplica-se pelos avos adquiridos;
2. Adiciona-se 33,33% (um terço constitucional) sobre o valor obtido.

Se você possuir **férias vencidas** de um período aquisitivo anterior que ainda não tirou, recebe 1 salário integral acrescido do terço. Se essas férias estiverem vencidas há mais de 12 meses (após o período concessivo), a CLT manda pagar em dobro (Art. 137).

---

## Passo 5: FGTS e Multa Rescisória de 40%
Na demissão sem justa causa:
- O trabalhador saca **100% de todo o saldo** existente na conta vinculada na Caixa;
- A empresa é obrigada a pagar a **multa de 40%** calculada sobre todos os depósitos devidos durante todo o contrato.

---

## Passo 6: Descontos Obrigatórios
O INSS e o IRRF não incidem sobre a totalidade da rescisão. Verbas puramente indenizatórias são isentas:
- **Incide INSS e IRRF**: Saldo de salário e 13º salário proporcional;
- **São ISENTOS de INSS e IRRF**: Aviso prévio indenizado, férias indenizadas (proporcionais ou vencidas) com seu 1/3 constitucional e a multa de 40% do FGTS.
`,
  examples: [
    {
      title: 'Exemplo Prático: Demissão sem Justa Causa (2 Anos e Meio de Empresa)',
      scenario:
        'Trabalhador dispensado sem justa causa com aviso indenizado em 10/05/2026. Salário de R$ 3.000,00, 2 anos completos (36 dias de aviso) e saldo acumulado de FGTS de R$ 5.800,00.',
      inputs: {
        'Salário Nominal': 'R$ 3.000,00',
        'Dias Trabalhados no Mês': '10 dias',
        'Tempo de Contrato': '2 anos completos (36 dias de aviso)',
        'Saldo de FGTS': 'R$ 5.800,00',
      },
      breakdown: [
        {
          item: '1. Saldo de Salário (10 dias trabalhados)',
          amount: 'R$ 1.000,00',
          note: '(R$ 3.000 ÷ 30) × 10',
        },
        {
          item: '2. Aviso Prévio Indenizado (36 dias)',
          amount: 'R$ 3.600,00',
          note: '36 dias × R$ 100/dia',
        },
        {
          item: '3. 13º Proporcional Projetado (6/12 avos)',
          amount: 'R$ 1.500,00',
          note: '(R$ 3.000 ÷ 12) × 6 meses com projeção',
        },
        {
          item: '4. Férias Proporcionais Projetadas + 1/3',
          amount: 'R$ 2.000,00',
          note: 'R$ 1.500,00 de férias + R$ 500,00 de 1/3',
        },
        {
          item: '5. Multa de 40% do FGTS',
          amount: 'R$ 2.320,00',
          note: '40% sobre R$ 5.800,00 de FGTS acumulado',
        },
        {
          item: '6. Desconto INSS sobre Saldo de Salário',
          amount: '- R$ 75,00',
          note: '7,5% sobre R$ 1.000,00',
        },
      ],
      total: 'R$ 10.345,00 Valor Líquido Total a Receber da Empresa',
    },
    {
      title: 'Exemplo Prático: Pedido de Demissão com Aviso Cumprido',
      scenario:
        'Empregado com salário de R$ 2.400,00 pede demissão e cumpre o aviso prévio integral de 30 dias com 4 meses de avos no ano.',
      inputs: {
        'Salário Contratual': 'R$ 2.400,00',
        'Aviso Prévio': 'Trabalhado e cumprido (30 dias)',
        'Avos no Ano': '4 meses (4/12 avos)',
      },
      breakdown: [
        {
          item: 'Saldo de Salário (30 dias de aviso)',
          amount: 'R$ 2.400,00',
          note: 'Mês integral trabalhado',
        },
        {
          item: '13º Salário Proporcional (4/12 avos)',
          amount: 'R$ 800,00',
          note: '(R$ 2.400 ÷ 12) × 4 meses',
        },
        {
          item: 'Férias Proporcionais + 1/3 (4/12 avos)',
          amount: 'R$ 1.066,67',
          note: 'R$ 800,00 de férias + R$ 266,67 de 1/3',
        },
        {
          item: 'Desconto Previdenciário (INSS)',
          amount: '- R$ 198,60',
          note: 'Tabela progressiva incidente sobre o salário',
        },
      ],
      total: 'R$ 4.068,07 Líquido em Conta (Sem FGTS e Sem Multa de 40%)',
    },
  ],
  faqs: [
    {
      q: 'Quantos dias trabalhados no mês garantem 1/12 de 13º e férias?',
      a: 'A prestação de trabalho por 15 dias ou mais dentro do mesmo mês civil garante o cômputo de 1/12 proporcional tanto para o 13º salário quanto para as férias.',
    },
    {
      q: 'Como calcular o aviso prévio proporcional da Lei 12.506/2011?',
      a: 'São garantidos 30 dias para contratos com até 1 ano completo de casa, acrescidos de 3 dias para cada ano adicional completo na empresa, até o teto de 90 dias.',
    },
    {
      q: 'Qual é o prazo para a empresa pagar as verbas rescisórias?',
      a: 'Conforme o Artigo 477, § 6º da CLT, o pagamento de qualquer modalidade de rescisão deve ocorrer em até 10 dias corridos a contar da data de término do contrato.',
    },
    {
      q: 'O aviso prévio indenizado sofre desconto de INSS e Imposto de Renda?',
      a: 'Não. Por possuir natureza estritamente indenizatória e reparatória, o aviso prévio indenizado é isento de retenções de INSS e de IRRF.',
    },
    {
      q: 'O que acontece se a empresa atrasar o pagamento da rescisão?',
      a: 'A empresa é penalizada com a multa do Artigo 477, § 8º da CLT, equivalente ao pagamento de um salário nominal integral em favor do trabalhador prejudicado.',
    },
    {
      q: 'Como funciona a multa de 40% do FGTS?',
      a: 'É uma indenização paga pela empresa calculada em 40% sobre todos os depósitos que foram efetuados na conta vinculada do trabalhador durante todo o contrato.',
    },
    {
      q: 'As férias vencidas são pagas com terço constitucional na rescisão?',
      a: 'Sim. Todas as férias, sejam elas simples, proporcionais ou vencidas em dobro, devem ser quitadas obrigatoriamente com o acréscimo de um terço constitucional.',
    },
    {
      q: 'O trabalhador pode conferir o cálculo da rescisão antes de assinar?',
      a: 'Sim. É direito do empregado exigir a apresentação detalhada do Termo de Rescisão (TRCT) com a memória de cálculo de cada verba antes de apor sua assinatura.',
    },
  ],
  sources: [
    {
      label: 'Consolidação das Leis do Trabalho - Rescisão Contratual (Art. 477 CLT)',
      url: 'https://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm',
    },
    {
      label: 'Lei nº 12.506/2011 - Aviso Prévio Proporcional (Planalto)',
      url: 'https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/lei/l12506.htm',
    },
    {
      label: 'Lei nº 8.036/1990 - Fundo de Garantia do Tempo de Serviço',
      url: 'https://www.planalto.gov.br/ccivil_03/leis/l8036.htm',
    },
    {
      label: 'Tribunal Superior do Trabalho - Orientações Rescisórias',
      url: 'https://www.tst.jus.br',
    },
  ],
  relatedTools: [
    {
      title: 'Calculadora de Rescisão Trabalhista',
      path: '/br/calculadora-rescisao',
      description: 'Faça a simulação automática da sua rescisão com cálculo exato.',
    },
    {
      title: 'Calculadora de Férias CLT',
      path: '/br/calculadora-ferias',
      description: 'Simule o cálculo de férias vencidas e proporcionais com o terço.',
    },
    {
      title: 'Calculadora de 13º Salário',
      path: '/br/calculadora-13-salario',
      description: 'Calcule as frações de 1/12 acumuladas no ano corrente.',
    },
  ],
  relatedGuides: [
    {
      title: 'Direitos na Demissão Sem Justa Causa',
      path: '/br/guias/direitos-na-demissao-sem-justa-causa',
      description: 'Conheça todos os direitos garantidos ao trabalhador dispensado imotivadamente.',
    },
    {
      title: 'Aviso Prévio Trabalhado ou Indenizado?',
      path: '/br/guias/aviso-previo-trabalhado-ou-indenizado',
      description: 'Entenda os modelos de aviso, regras de jornada e prazos de pagamento.',
    },
  ],
  updatedAt: '2026-01-01',
};
