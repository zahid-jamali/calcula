import { PageContent } from '../../types';

export const content: PageContent = {
  metaTitle: 'Aviso Prévio Trabalhado ou Indenizado? Regras CLT',
  metaDescription:
    'Entenda as diferenças entre aviso prévio trabalhado e indenizado em 2026: regras da Lei 12.506, redução de jornada, prazos de pagamento e tabela de dias.',
  h1: 'Aviso Prévio Trabalhado ou Indenizado: Regras e Cálculo CLT',
  quickAnswer:
    'O aviso prévio é a comunicação formal do término do contrato de trabalho. No modelo trabalhado, o empregado cumpre suas funções com redução de 2 horas ou 7 dias de folga; no modelo indenizado, é dispensado imediatamente e recebe o salário proporcional correspondente aos 30 a 90 dias devidos.',
  howItWorks: [
    {
      step: 1,
      title: 'Cálculo da Duração pela Lei nº 12.506/2011',
      description:
        'A base mínima é de 30 dias para quem possui até 1 ano de vínculo. A cada ano completo adicional na mesma empresa, adicionam-se 3 dias, até o limite de 90 dias.',
      formula: '30 dias + (3 dias × Anos Completos)',
      legalArticle: 'Lei nº 12.506/2011 e Nota Técnica CGRT/SRT nº 184/2012',
    },
    {
      step: 2,
      title: 'Escolha da Redução de Jornada (Aviso Trabalhado)',
      description:
        'Sendo demitido sem justa causa, o trabalhador escolhe sair 2 horas mais cedo todos os dias ou ausentar-se nos últimos 7 dias corridos sem desconto salarial.',
      formula: 'Opção: Menos 2h/dia ou 7 dias de folga consecutiva',
      legalArticle: 'Art. 488 da CLT',
    },
    {
      step: 3,
      title: 'Liquidação Financeira (Aviso Indenizado)',
      description:
        'O trabalhador é dispensado imediatamente da obrigação de comparecer à empresa e recebe o valor integral dos dias de aviso como indenização isenta de encargos.',
      formula: 'Diária Salarial × Total de Dias de Aviso Devidos',
      legalArticle: 'Art. 487, § 1º da CLT',
    },
    {
      step: 4,
      title: 'Quitação no Prazo de 10 Dias Corridos',
      description:
        'O pagamento de todas as verbas rescisórias deve ser efetuado no prazo improrrogável de até 10 dias corridos contados do encerramento do contrato.',
      formula: 'Prazo = 10 dias corridos (Art. 477, § 6º)',
      legalArticle: 'Art. 477, § 6º e § 8º da CLT',
    },
  ],
  article: `
## O Que É o Aviso Prévio e Quais os Seus Tipos?

O aviso prévio é o instrumento jurídico pelo qual uma das partes contratantes comunica à outra sua determinação irrevogável de rescindir o contrato de trabalho por prazo indeterminado (Artigos 487 a 491 da CLT).

Sua finalidade social é dupla:
- Se a **empresa demite o empregado**, propicia a este um período remunerado para procurar nova colocação profissional;
- Se o **empregado pede demissão**, concede à empresa tempo hábil para reestruturar suas rotinas produtivas ou recrutar um substituto.

---

## Aviso Prévio Trabalhado vs. Aviso Prévio Indenizado

| Aspecto Analisado | Aviso Prévio Trabalhado | Aviso Prévio Indenizado |
| :--- | :--- | :--- |
| **Atividade do Empregado** | Continua exercendo suas funções na empresa | Liberado de comparecer ao trabalho imediatamente |
| **Remuneração** | Salário normal pago pelos dias cumpridos | Indenização proporcional paga no acerto rescisório |
| **Redução de Jornada** | Direito a sair 2h mais cedo ou folgar 7 dias (Art. 488) | Não aplicável (já está integralmente dispensado) |
| **Tributação (INSS e IR)** | Sofre descontos regulares de INSS e IRRF | **Totalmente isento** de retenção de INSS e IRRF |
| **Prazo de Pagamento** | Até 10 dias corridos após o último dia trabalhado | Até 10 dias corridos após a data da notificação |

---

## Tabela de Dias do Aviso Prévio Proporcional (Lei nº 12.506/2011)

A contagem dos dias de aviso prévio proporcional ao tempo de serviço obedece à seguinte escala progressiva:

| Tempo de Serviço na Mesma Empresa | Dias de Aviso Prévio |
| :--- | :--- |
| Menos de 1 ano completo | 30 dias |
| 1 ano completo | 33 dias |
| 2 anos completos | 36 dias |
| 3 anos completos | 39 dias |
| 4 anos completos | 42 dias |
| 5 anos completos | 45 dias |
| 10 anos completos | 60 dias |
| 15 anos completos | 75 dias |
| **20 anos ou mais** (Teto Máximo) | **90 dias corridos** |

> **Aviso Proporcional é Direito Unilateral do Empregado**: A jurisprudência consolidada dos Tribunais Trabalhistas e a Nota Técnica nº 184/2012 do Ministério do Trabalho fixam que a escala de 3 dias por ano adicional só pode ser exigida pela empresa como indenização a pagar em favor do trabalhador. Caso o empregado peça demissão, a empresa só pode exigir ou descontar 30 dias, jamais os dias proporcionais adicionais.

---

## Como Funciona a Redução de Jornada (Artigo 488 da CLT)?

Quando a empresa demite o funcionário sem justa causa e exige o aviso prévio trabalhado, o colaborador tem o direito legal de escolher entre duas alternativas sem nenhuma redução em seu salário:
1. **Sair 2 horas mais cedo** todos os dias durante os 30 dias de aviso;
2. **Trabalhar a jornada normal e ausentar-se por 7 dias corridos consecutivos** no encerramento do período de aviso.

Se a empresa não conceder essa faculdade de escolha ou impedir a redução de jornada, o aviso prévio trabalhado é juridicamente anulado, sendo o empregador obrigado a pagar o período integral novamente como indenizado (Súmula nº 230 do TST).
`,
  examples: [
    {
      title: 'Exemplo 1: Aviso Prévio Indenizado com 3 Anos de Casa (39 Dias)',
      scenario:
        'Trabalhador dispensado sem justa causa com liberação imediata após 3 anos completos de contrato. Salário base de R$ 3.000,00 (diária de R$ 100,00).',
      inputs: {
        'Salário Mensal': 'R$ 3.000,00',
        'Tempo de Vínculo': '3 anos completos',
        'Tipo de Aviso': 'Indenizado (39 dias)',
      },
      breakdown: [
        {
          item: 'Valor da Diária Contratual (R$ 3.000 ÷ 30)',
          amount: 'R$ 100,00 / dia',
          note: 'Base de cálculo diária',
        },
        {
          item: 'Indenização do Aviso Prévio (39 dias)',
          amount: 'R$ 3.900,00',
          note: '39 dias × R$ 100,00 (30 base + 9 por 3 anos)',
        },
        {
          item: 'Desconto Previdenciário (INSS)',
          amount: 'R$ 0,00 (Isento)',
          note: 'Verba indenizatória isenta de encargos',
        },
        {
          item: 'Retenção de Imposto de Renda (IRRF)',
          amount: 'R$ 0,00 (Isento)',
          note: 'Não incide IR sobre indenização rescisória',
        },
      ],
      total: 'R$ 3.900,00 Valor Líquido do Aviso Prévio Creditado',
    },
    {
      title: 'Exemplo 2: Aviso Prévio Trabalhado de 30 Dias (Salário R$ 2.400)',
      scenario:
        'Colaborador cumpre 30 dias de aviso prévio trabalhado saindo 2 horas mais cedo diariamente até o encerramento do contrato.',
      inputs: {
        'Salário Mensal': 'R$ 2.400,00',
        'Tipo de Aviso': 'Trabalhado (30 dias)',
        'Opção de Jornada': 'Redução de 2 horas diárias',
      },
      breakdown: [
        {
          item: 'Salário dos 30 Dias de Aviso Trabalhado',
          amount: 'R$ 2.400,00',
          note: 'Salário regular referente ao mês de trabalho',
        },
        {
          item: 'Desconto Previdenciário (INSS)',
          amount: '- R$ 198,60',
          note: 'Tabela progressiva incidente sobre salário normal',
        },
      ],
      total: 'R$ 2.201,40 Salário Líquido do Mês de Aviso',
    },
  ],
  faqs: [
    {
      q: 'Qual é o prazo para a empresa pagar o aviso prévio indenizado?',
      a: 'Pelo Artigo 477, § 6º da CLT, o pagamento de toda a rescisão com aviso prévio indenizado deve ocorrer em até 10 dias corridos a contar da data de notificação da dispensa.',
    },
    {
      q: 'Como é calculada a duração do aviso prévio proporcional?',
      a: 'A contagem começa em 30 dias para contratos com até 1 ano de trabalho, somando-se 3 dias para cada novo ano de vínculo completado, com teto legal de 90 dias.',
    },
    {
      q: 'O empregado pode ser obrigado a cumprir aviso trabalhado com mais de 30 dias?',
      a: 'Não. Os dias excedentes aos 30 dias garantidos pela Lei 12.506/2011 devem ser obrigatoriamente indenizados pela empresa, trabalhando-se no máximo até 30 dias.',
    },
    {
      q: 'O aviso prévio trabalhado tem desconto de INSS e Imposto de Renda?',
      a: 'Sim. Por ser salário pelo trabalho efetivamente prestado, o aviso trabalhado sofre desconto regular de INSS e IRRF, diferentemente do aviso indenizado, que é isento.',
    },
    {
      q: 'Quem pede demissão pode ter o aviso proporcional descontado?',
      a: 'Não. O desconto por aviso não cumprido no pedido de demissão é limitado a 30 dias fixos (Art. 487, § 2º CLT), pois a regra proporcional só beneficia o empregado.',
    },
    {
      q: 'A empresa pode substituir as 2 horas diárias de folga por pagamento em dinheiro?',
      a: 'Não. O objetivo da redução de jornada é permitir ao trabalhador buscar outro emprego em horário comercial. A Súmula nº 230 do TST veda a conversão da redução em horas extras.',
    },
    {
      q: 'O aviso prévio indenizado projeta tempo para 13º e férias?',
      a: 'Sim. A projeção temporal do aviso prévio indenizado integra o contrato de trabalho para todos os efeitos, gerando direitos a frações adicionais de 13º e férias proporcionais.',
    },
    {
      q: 'O que acontece se a empresa não conceder a opção de redução da jornada?',
      a: 'Se a empresa impedir a redução de 2 horas ou os 7 dias de folga, o aviso trabalhado torna-se nulo perante a Justiça do Trabalho, devendo ser pago novamente como indenizado.',
    },
  ],
  sources: [
    {
      label: 'Lei nº 12.506/2011 - Regulamenta o Aviso Prévio Proporcional (Planalto)',
      url: 'https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/lei/l12506.htm',
    },
    {
      label: 'Consolidação das Leis do Trabalho - Aviso Prévio (Artigos 487 a 491)',
      url: 'https://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm',
    },
    {
      label: 'Tribunal Superior do Trabalho - Súmula nº 230 (Redução de Jornada)',
      url: 'https://www.tst.jus.br/sumulas',
    },
    {
      label: 'Ministério do Trabalho e Emprego - Nota Técnica CGRT/SRT nº 184/2012',
      url: 'https://www.gov.br/trabalho-e-emprego',
    },
  ],
  relatedTools: [
    {
      title: 'Calculadora de Rescisão Trabalhista',
      path: '/br/calculadora-rescisao',
      description: 'Simule o cálculo rescisório comparando aviso prévio trabalhado e indenizado.',
    },
    {
      title: 'Calculadora de Salário Líquido',
      path: '/br/calculadora-salario-liquido',
      description: 'Descubra os descontos aplicáveis sobre salários do aviso trabalhado.',
    },
    {
      title: 'Calculadora do FGTS',
      path: '/br/calculadora-fgts',
      description: 'Veja quanto o aviso indenizado projeta nos depósitos da sua conta vinculada.',
    },
  ],
  relatedGuides: [
    {
      title: 'Direitos na Demissão Sem Justa Causa',
      path: '/br/guias/direitos-na-demissao-sem-justa-causa',
      description: 'Tudo o que o trabalhador dispensado imotivadamente tem direito a receber.',
    },
    {
      title: 'Como Calcular Rescisão Passo a Passo',
      path: '/br/guias/como-calcular-rescisao-passo-a-passo',
      description: 'Aprenda a conferir cada verba indenizatória no seu termo de rescisão.',
    },
  ],
  updatedAt: '2026-01-01',
};
