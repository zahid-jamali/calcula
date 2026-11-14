import { PageContent } from '../types';

export const content: PageContent = {
  metaTitle: 'Pedido de Demissão 2026 CLT | Direitos e Cálculo',
  metaDescription:
    'Saiba o que você recebe ao pedir demissão pela CLT em 2026: saldo de salário, 13º, férias com 1/3, regras do aviso prévio e descontos permitidos.',
  h1: 'Pedido de Demissão CLT 2026: Direitos, Prazos e Cálculo',
  quickAnswer:
    'No pedido de demissão, o trabalhador decide voluntariamente rescindir o contrato de trabalho. Tem direito ao saldo de salário, 13º salário proporcional e férias vencidas e proporcionais com acréscimo de um terço constitucional. Não pode sacar o FGTS, não recebe multa de 40% e não tem direito a seguro-desemprego.',
  howItWorks: [
    {
      step: 1,
      title: 'Saldo de Salário dos Dias Trabalhados',
      description:
        'Remuneração devida pelos dias efetivamente cumpridos no mês do pedido até o último dia de atividade laboral.',
      formula: '(Salário ÷ 30) × Dias Trabalhados no Mês',
      legalArticle: 'Art. 457 da CLT',
    },
    {
      step: 2,
      title: '13º Salário Proporcional',
      description:
        'Cálculo de 1/12 para cada mês do ano corrente em que houve prestação de serviços por 15 dias ou mais.',
      formula: '(Salário ÷ 12) × Meses Trabalhados no Ano',
      legalArticle: 'Art. 3º da Lei nº 4.090/1962',
    },
    {
      step: 3,
      title: 'Férias Vencidas e Proporcionais com 1/3',
      description:
        'Quitação de eventuais períodos de férias já adquiridos e dos avos proporcionais do período aquisitivo em curso com acréscimo de 33,33%.',
      formula: '[(Salário ÷ 12) × Avos Férias] + (Férias ÷ 3)',
      legalArticle: 'Art. 146 e 147 da CLT e Súmula 261 do TST',
    },
    {
      step: 4,
      title: 'Cumprimento ou Desconto do Aviso Prévio',
      description:
        'O trabalhador deve cumprir 30 dias de aviso prévio. Se optar por sair imediatamente sem dispensa da empresa, o valor de 30 dias poderá ser descontado.',
      formula: 'Desconto de até 30 dias de salário se não cumprido',
      legalArticle: 'Art. 487, § 2º da CLT',
    },
  ],
  article: `
## O Que É o Pedido de Demissão pelo Empregado?

O pedido de demissão ocorre quando a iniciativa de pôr fim ao vínculo de emprego parte unicamente da vontade do colaborador. Seja em razão de uma proposta de emprego mais atraente, transição de carreira ou conveniência pessoal, o ato rescisório enseja regras próprias de liquidação de haveres trabalhistas.

Por se tratar de uma ruptura voluntária desfavorável ao planejamento operacional do empregador, o ordenamento jurídico desobriga a empresa de arcar com indenizações punitivas, como a multa rescisória e o suporte de benefícios do governo.

---

## Verbas Devidas no Pedido de Demissão

Ao pedir demissão formalmente por meio de carta de próprio punho ou meio eletrônico corporativo, o empregado faz jus a:
- **Saldo de Salário**: Quitação integral dos dias trabalhados no mês do desligamento;
- **13º Salário Proporcional**: Contagem dos avos devidos no ano civil corrente;
- **Férias Vencidas Simples ou em Dobro**: Se houver período aquisitivo completado e ainda não usufruído, quitado com o terço constitucional;
- **Férias Proporcionais + 1/3**: Pacífico entendimento consolidado pela **Súmula nº 261 do TST** assegura o pagamento de férias proporcionais mesmo quando o desligamento decorre de iniciativa do empregado.

---

## Direitos Que o Empregado Renuncia ao Pedir Demissão

Ao pedir demissão de forma espontânea, o trabalhador abre mão expressamente de:
1. **Saque do FGTS**: O saldo depositado pela empresa permanece retido na conta vinculada da Caixa, podendo ser movimentado apenas em situações excepcionais futuras (compra de imóvel próprio, 3 anos ininterruptos fora do regime CLT ou doenças graves);
2. **Multa de 40% do FGTS**: O empregador fica dispensado de recolher qualquer penalidade compensatória sobre o saldo;
3. **Seguro-Desemprego**: Como a demissão não foi involuntária, o trabalhador não recebe as guias nem tem direito ao benefício concedido pelo Ministério do Trabalho.

---

## Regras Cruciais do Aviso Prévio no Pedido de Demissão

Pelo Artigo 487, § 2º da CLT, o trabalhador que pede demissão tem o dever legal de dar o aviso prévio de **30 dias** ao empregador para que este possa reorganizar suas atividades ou recrutar substituto:

### Cumprindo o Aviso Prévio:
- Trabalha os 30 dias normalmente e recebe o salário integral correspondente na rescisão.
- **Atenção**: No pedido de demissão, o trabalhador **não** tem direito à redução de 2 horas diárias e nem à folga de 7 dias consecutivos (essas vantagens do Art. 488 da CLT aplicam-se apenas quando a dispensa parte da empresa).

### Não Cumprindo o Aviso (Saída Imediata):
- Caso não possa ou não queira cumprir os 30 dias e a empresa não aceite liberar a obrigação, o empregador tem a faculdade jurídica de **descontar o valor correspondente a 30 dias de salário** diretamente do montante total das verbas rescisórias devidas.
- **Importante**: O acréscimo proporcional de 3 dias por ano previsto na Lei 12.506/2011 opera exclusivamente em benefício do trabalhador. A empresa só pode exigir ou descontar 30 dias fixos, nunca 33, 36 ou mais.
`,
  examples: [
    {
      title: 'Exemplo 1: Pedido de Demissão com Aviso Prévio Cumprido',
      scenario:
        'Colaborador com salário contratual de R$ 3.000,00 pede demissão em 01/05/2026, cumpre os 30 dias de aviso até 30/05/2026 e possui 5 meses de trabalho no ano civil.',
      inputs: {
        'Salário Mensal': 'R$ 3.000,00',
        'Data do Pedido': '01/05/2026',
        'Aviso Prévio': 'Cumprido integralmente (30 dias)',
        'Avos no Ano': '5 meses (5/12)',
      },
      breakdown: [
        {
          item: 'Saldo de Salário (30 dias de aviso cumprido)',
          amount: 'R$ 3.000,00',
          note: 'Salário integral do mês de maio trabalhado',
        },
        {
          item: '13º Salário Proporcional (5/12 avos)',
          amount: 'R$ 1.250,00',
          note: '(R$ 3.000 ÷ 12) × 5 meses',
        },
        {
          item: 'Férias Proporcionais (5/12 avos)',
          amount: 'R$ 1.250,00',
          note: '(R$ 3.000 ÷ 12) × 5 meses',
        },
        {
          item: '1/3 Constitucional de Férias',
          amount: 'R$ 416,67',
          note: 'R$ 1.250,00 ÷ 3 (Art. 7º, XVII CF/88)',
        },
        {
          item: 'Desconto Previdenciário (INSS sobre salário)',
          amount: '- R$ 253,41',
          note: 'Tabela progressiva incidente sobre R$ 3.000',
        },
      ],
      total: 'R$ 5.663,26 Líquido Depositado na Conta do Empregado',
    },
    {
      title: 'Exemplo 2: Pedido de Demissão com Aviso Prévio Não Cumprido (Desconto)',
      scenario:
        'Funcionário com salário de R$ 3.000,00 pede demissão para início imediato em outra empresa e tem o aviso prévio de 30 dias descontado pela empregadora atual.',
      inputs: {
        'Salário Mensal': 'R$ 3.000,00',
        'Dias Trabalhados no Mês': '10 dias',
        'Aviso Prévio': 'Não cumprido (desconto integral)',
        'Avos Acumulados': '4 meses de 13º e férias',
      },
      breakdown: [
        {
          item: 'Saldo de Salário (10 dias cumpridos)',
          amount: 'R$ 1.000,00',
          note: '(R$ 3.000 ÷ 30) × 10 dias',
        },
        {
          item: '13º Salário Proporcional (4/12 avos)',
          amount: 'R$ 1.000,00',
          note: '(R$ 3.000 ÷ 12) × 4 meses',
        },
        {
          item: 'Férias Proporcionais + 1/3 (4/12 avos)',
          amount: 'R$ 1.333,33',
          note: 'R$ 1.000,00 de férias + R$ 333,33 de terço',
        },
        {
          item: 'Desconto de Aviso Prévio Não Cumprido',
          amount: '- R$ 3.000,00',
          note: 'Desconto de 30 dias autorizado pelo Art. 487, § 2º CLT',
        },
        {
          item: 'Desconto Previdenciário INSS s/ Saldo',
          amount: '- R$ 75,00',
          note: '7,5% sobre saldo de salário de R$ 1.000,00',
        },
      ],
      total: 'R$ 258,33 Saldo Líquido Remanescente a Receber',
    },
  ],
  faqs: [
    {
      q: 'Quem pede demissão tem direito ao saque do FGTS?',
      a: 'Não. Ao tomar a iniciativa de rescindir o contrato de trabalho, o trabalhador não pode sacar os recursos da conta vinculada do FGTS nem recebe a multa de 40%.',
    },
    {
      q: 'O que o empregado recebe ao pedir demissão pela CLT?',
      a: 'Recebe o saldo de salário dos dias trabalhados no mês, o 13º salário proporcional e as férias proporcionais e vencidas acrescidas do terço constitucional.',
    },
    {
      q: 'A empresa pode descontar o aviso prévio se eu não puder cumprir?',
      a: 'Sim. Se você solicitar saída imediata e a empresa não concordar em dispensar o cumprimento, ela pode descontar o salário correspondente aos 30 dias de aviso das suas verbas rescisórias.',
    },
    {
      q: 'Quem pede demissão tem direito à redução de 2 horas no aviso trabalhado?',
      a: 'Não. O benefício da redução de jornada em 2 horas diárias ou dispensa de 7 dias consecutivos só é concedido nos casos em que a empresa demite o empregado sem justa causa.',
    },
    {
      q: 'A rescisão pode ficar com saldo negativo se eu não cumprir o aviso?',
      a: 'Pelo Artigo 477, § 5º da CLT, qualquer desconto na rescisão não pode ultrapassar o valor equivalente a um mês de remuneração do trabalhador. Logo, o saldo zera, mas não gera dívida civil a pagar.',
    },
    {
      q: 'Quem pede demissão recebe seguro-desemprego?',
      a: 'Não. O seguro-desemprego é um benefício estritamente reservado para situações de demissão involuntária sem justa causa ou rescisão indireta.',
    },
    {
      q: 'Qual é o prazo para a empresa pagar o pedido de demissão?',
      a: 'O prazo de pagamento das verbas rescisórias é de até 10 dias corridos a contar da formalização do término do contrato de trabalho (Art. 477, § 6º da CLT).',
    },
    {
      q: 'A empresa é obrigada a me dispensar do aviso se eu apresentar carta de novo emprego?',
      a: 'Não. A Súmula nº 276 do TST estabelece que o direito ao aviso prévio é irrenunciável pela empresa quando ela é a credora, ficando a dispensa a critério de liberalidade do empregador atual.',
    },
  ],
  sources: [
    {
      label: 'Consolidação das Leis do Trabalho - Aviso Prévio (Art. 487 da CLT)',
      url: 'https://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm',
    },
    {
      label: 'Tribunal Superior do Trabalho - Súmula nº 261 (Férias Proporcionais)',
      url: 'https://www.tst.jus.br/sumulas',
    },
    {
      label: 'Tribunal Superior do Trabalho - Súmula nº 276 (Aviso Prévio)',
      url: 'https://www.tst.jus.br/sumulas',
    },
    {
      label: 'Ministério do Trabalho e Emprego - Normas Rescisórias',
      url: 'https://www.gov.br/trabalho-e-emprego',
    },
  ],
  relatedTools: [
    {
      title: 'Calculadora de Rescisão Trabalhista',
      path: '/br/calculadora-rescisao',
      description: 'Simule o cálculo comparativo de todas as modalidades de rescisão.',
    },
    {
      title: 'Calculadora de Férias CLT',
      path: '/br/calculadora-ferias',
      description: 'Entenda como calcular o valor exato das férias e do terço constitucional.',
    },
    {
      title: 'Calculadora de 13º Salário',
      path: '/br/calculadora-13-salario',
      description: 'Calcule as frações de 1/12 acumuladas no ano corrente.',
    },
  ],
  relatedGuides: [
    {
      title: 'Pedido de Demissão: Quais os Direitos?',
      path: '/br/guias/pedido-de-demissao-quais-os-direitos',
      description: 'Tudo o que você precisa ponderar antes de pedir demissão da empresa.',
    },
    {
      title: 'Aviso Prévio Trabalhado ou Indenizado?',
      path: '/br/guias/aviso-previo-trabalhado-ou-indenizado',
      description: 'Saiba o que acontece com descontos e prazos legais do aviso prévio.',
    },
  ],
  updatedAt: '2026-01-01',
};
