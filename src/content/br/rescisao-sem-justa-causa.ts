import { PageContent } from '../types';

export const content: PageContent = {
  metaTitle: 'Rescisão Sem Justa Causa 2026 CLT | Direitos e Cálculo',
  metaDescription:
    'Guia completo da rescisão sem justa causa em 2026: aviso prévio proporcional, saque e multa de 40% do FGTS, férias, 13º e seguro-desemprego.',
  h1: 'Rescisão Sem Justa Causa CLT 2026: Direitos e Cálculo',
  quickAnswer:
    'A rescisão sem justa causa ocorre quando a empresa demite o funcionário sem motivo disciplinar. O trabalhador recebe saldo de salário, aviso prévio indenizado ou trabalhado, 13º salário e férias proporcionais com acréscimo de um terço, saque de 100% do saldo do FGTS com multa de 40% e seguro-desemprego.',
  howItWorks: [
    {
      step: 1,
      title: 'Saldo de Salário dos Dias Trabalhados',
      description:
        'Pagamento referente aos dias efetivamente trabalhados no mês do desligamento, dividindo o salário contratual por 30.',
      formula: '(Salário Mensal ÷ 30) × Dias Trabalhados',
      legalArticle: 'Art. 457 da CLT',
    },
    {
      step: 2,
      title: 'Aviso Prévio Proporcional ao Tempo de Serviço',
      description:
        'Garante 30 dias de salário para o primeiro ano, com acréscimo de 3 dias para cada ano completo adicional de trabalho, limitado ao teto de 90 dias.',
      formula: '30 dias + (3 dias × Anos Completos)',
      legalArticle: 'Lei nº 12.506/2011 e Art. 487 da CLT',
    },
    {
      step: 3,
      title: '13º Salário e Férias Proporcionais com 1/3',
      description:
        'Apuração das frações de 1/12 para cada mês trabalhado por 15 dias ou mais, inclusive projetando o período do aviso prévio indenizado.',
      formula: '(Salário ÷ 12 × Meses) + Terço Constitucional',
      legalArticle: 'Art. 146 da CLT e Lei nº 4.090/1962',
    },
    {
      step: 4,
      title: 'Multa de 40% do FGTS e Guias do Seguro-Desemprego',
      description:
        'Liberação integral do saldo acumulado do FGTS, quitação da indenização rescisória de 40% pela empresa e fornecimento do requerimento de seguro-desemprego.',
      formula: 'Saldo FGTS Acumulado × 40%',
      legalArticle: 'Art. 18, § 1º da Lei 8.036/1990 e Lei 7.998/1990',
    },
  ],
  article: `
## O Que Caracteriza a Demissão Sem Justa Causa?

A dispensa imotivada ou demissão sem justa causa ocorre quando o empregador opta por rescindir unilateralmente o contrato individual de trabalho sem que o empregado tenha praticado qualquer das faltas graves enumeradas no rol taxativo do Artigo 482 da CLT.

Trata-se da hipótese de rescisão que confere o maior grau de proteção social e financeira ao trabalhador brasileiro, visando assegurar estabilidade econômica temporária durante a transição para uma nova oportunidade no mercado de trabalho.

---

## Rol Completo de Direitos na Demissão Imotivada

Ao ser comunicado da dispensa sem justa causa, o trabalhador celetista adquire o direito inalienável às seguintes verbas:

1. **Saldo de Salário**: Quitação dos dias trabalhados no mês do rompimento contratual, acrescido de eventuais horas extras e adicionais auferidos no período.
2. **Aviso Prévio (Indenizado ou Trabalhado)**: Remuneração proporcional garantida pela Lei nº 12.506/2011, que parte de 30 dias e atinge até 90 dias conforme a longevidade do vínculo funcional.
3. **13º Salário Proporcional**: Contagem dos avos adquiridos no ano corrente (cada mês com 15 dias ou mais de labor equivale a 1/12). O aviso prévio indenizado projeta a contagem de mais um mês se ultrapassar o 15º dia do mês seguinte.
4. **Férias Vencidas e Proporcionais + 1/3**: Quitação das férias pendentes com o adicional obrigatório de um terço assegurado pelo Artigo 7º, inciso XVII da Carta Magna.
5. **Saque Integral do FGTS**: Levantamento de 100% dos recursos depositados na conta vinculada na Caixa Econômica Federal.
6. **Multa Rescisória de 40%**: Indenização pecuniária suplementar custeada pela empresa calculada sobre o saldo histórico dos depósitos do FGTS.
7. **Guias para Seguro-Desemprego**: Emissão do formulário para habilitação nas 3 a 5 parcelas do benefício assistencial pago pelo Ministério do Trabalho.

---

## Projeção do Aviso Prévio Indenizado

Quando a empresa opta por dispensar o empregado imediatamente sem exigir o cumprimento físico do aviso prévio, ocorre o chamado **aviso prévio indenizado**:
- A data de término oficial anotada na Carteira de Trabalho Digital deve projetar o final do período do aviso prévio (Orientação Jurisprudencial nº 82 da SDI-1 do TST).
- Essa projeção conta legalmente como tempo de serviço para efeito de aquisição de 13º salário e férias proporcionais.

---

## Prazo Legal de Pagamento e Penalidades

O Artigo 477, § 6º da CLT estabelece que a quitação total de todas as verbas rescisórias e a entrega dos documentos rescisórios (TRCT, chave de conectividade da Caixa e guias do seguro-desemprego) devem ocorrer no **prazo peremptório de até 10 (dez) dias corridos** contados do término do contrato.

O descumprimento injustificado desse prazo obriga o empregador a arcar com a multa do **Artigo 477, § 8º da CLT**, equivalente ao valor de um salário nominal integral do trabalhador.
`,
  examples: [
    {
      title: 'Exemplo 1: Demissão sem Justa Causa com 3 Anos de Empresa',
      scenario:
        'Trabalhador dispensado imotivadamente com aviso prévio indenizado em 15/06/2026 após 3 anos completos de contrato. Salário fixo de R$ 3.600,00 e saldo acumulado de FGTS de R$ 9.800,00.',
      inputs: {
        'Salário Mensal': 'R$ 3.600,00',
        'Tempo de Vínculo': '3 anos completos',
        'Tipo de Aviso': 'Indenizado (39 dias: 30 + 9 dias)',
        'Saldo de FGTS': 'R$ 9.800,00',
      },
      breakdown: [
        {
          item: 'Saldo de Salário (15 dias)',
          amount: 'R$ 1.800,00',
          note: '(R$ 3.600 ÷ 30) × 15 dias',
        },
        {
          item: 'Aviso Prévio Indenizado (39 dias)',
          amount: 'R$ 4.680,00',
          note: '39 dias × R$ 120,00/dia',
        },
        {
          item: '13º Salário Proporcional com Projeção (7/12 avos)',
          amount: 'R$ 2.100,00',
          note: '(R$ 3.600 ÷ 12) × 7 meses projetados',
        },
        {
          item: 'Férias Proporcionais com Projeção (7/12 avos)',
          amount: 'R$ 2.100,00',
          note: '(R$ 3.600 ÷ 12) × 7 meses',
        },
        {
          item: '1/3 Constitucional sobre as Férias',
          amount: 'R$ 700,00',
          note: 'R$ 2.100,00 ÷ 3',
        },
        {
          item: 'Multa Rescisória de 40% do FGTS',
          amount: 'R$ 3.920,00',
          note: '40% sobre saldo de R$ 9.800,00 pago pela empresa',
        },
        {
          item: 'Dedução Previdenciária INSS (sobre saldo)',
          amount: '- R$ 135,00',
          note: '7,5% sobre saldo salarial de R$ 1.800,00',
        },
      ],
      total: 'R$ 15.165,00 Líquido a Receber + Saque do FGTS e Seguro',
    },
    {
      title: 'Exemplo 2: Dispensa com Aviso Prévio Trabalhado (1 Ano de Casa)',
      scenario:
        'Colaborador com salário de R$ 2.400,00 cumpre aviso prévio trabalhado de 30 dias com redução de 2 horas na jornada diária até 31/03/2026. Saldo FGTS de R$ 2.300,00.',
      inputs: {
        'Salário Mensal': 'R$ 2.400,00',
        'Tempo de Vínculo': '1 ano completo',
        'Aviso Prévio': 'Trabalhado (30 dias)',
        'Saldo de FGTS': 'R$ 2.300,00',
      },
      breakdown: [
        {
          item: 'Saldo de Salário Integral do Mês de Aviso',
          amount: 'R$ 2.400,00',
          note: 'Mês integral cumprido',
        },
        {
          item: '13º Salário Proporcional (3/12 avos)',
          amount: 'R$ 600,00',
          note: '(R$ 2.400 ÷ 12) × 3 meses',
        },
        {
          item: 'Férias Proporcionais (3/12 avos)',
          amount: 'R$ 600,00',
          note: '(R$ 2.400 ÷ 12) × 3 meses',
        },
        {
          item: '1/3 Constitucional de Férias',
          amount: 'R$ 200,00',
          note: 'R$ 600,00 ÷ 3',
        },
        {
          item: 'Multa Rescisória do FGTS (40%)',
          amount: 'R$ 920,00',
          note: '40% sobre R$ 2.300,00',
        },
        {
          item: 'Desconto Previdenciário INSS',
          amount: '- R$ 198,60',
          note: 'Incidência sobre salário do mês',
        },
      ],
      total: 'R$ 4.521,40 Líquido Depositado na Conta Rescisória',
    },
  ],
  faqs: [
    {
      q: 'Quem é demitido sem justa causa tem direito a quais verbas?',
      a: 'Recebe saldo de salário, aviso prévio (trabalhado ou indenizado), 13º salário proporcional, férias vencidas e proporcionais com 1/3, saque do FGTS com multa rescisória de 40% e acesso ao seguro-desemprego.',
    },
    {
      q: 'Qual é o prazo para a empresa pagar a rescisão sem justa causa?',
      a: 'Pelo Artigo 477, § 6º da CLT, a quitação dos valores e a entrega de documentos devem ocorrer em até 10 dias corridos contados da rescisão do contrato.',
    },
    {
      q: 'Como é calculada a multa de 40% do FGTS?',
      a: 'A empresa é obrigada a recolher 40% calculados sobre a soma de todos os depósitos devidos ao FGTS durante o período de trabalho, acrescidos da correção monetária legal.',
    },
    {
      q: 'Como funciona o aviso prévio trabalhado com redução de jornada?',
      a: 'Pelo Artigo 488 da CLT, o empregado demitido sem justa causa pode optar por sair 2 horas mais cedo todos os dias ou faltar ao serviço nos últimos 7 dias corridos, sem desconto no salário.',
    },
    {
      q: 'Como funciona a contagem do aviso prévio proporcional?',
      a: 'A Lei nº 12.506/2011 prevê 30 dias para quem tem até 1 ano de trabalho na empresa, adicionando 3 dias por ano completo subsequente, limitado ao teto de 90 dias.',
    },
    {
      q: 'O que acontece se a empresa atrasar o pagamento rescisório?',
      a: 'O empregador deve pagar a multa do Artigo 477, § 8º da CLT, que corresponde ao valor de um salário contratual integral do colaborador prejudicado.',
    },
    {
      q: 'O aviso prévio indenizado conta para 13º e férias?',
      a: 'Sim. A projeção do aviso prévio indenizado integra o tempo de serviço para todos os efeitos legais, gerando mais 1/12 de 13º e férias proporcionais quando o período alcançar 15 dias ou mais.',
    },
    {
      q: 'Quem tem estabilidade provisória pode ser demitido sem justa causa?',
      a: 'Não. Gestantes, acidentados no trabalho com auxílio por incapacidade temporária (B91) e dirigentes sindicais possuem estabilidade e não podem ser demitidos sem justa causa salvo indenização total do período de garantia.',
    },
  ],
  sources: [
    {
      label: 'Consolidação das Leis do Trabalho - Rescisão Contratual (Art. 477 da CLT)',
      url: 'https://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm',
    },
    {
      label: 'Lei nº 12.506/2011 - Regulamenta o Aviso Prévio Proporcional (Planalto)',
      url: 'https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/lei/l12506.htm',
    },
    {
      label: 'Lei nº 8.036/1990 - Fundo de Garantia do Tempo de Serviço (FGTS)',
      url: 'https://www.planalto.gov.br/ccivil_03/leis/l8036.htm',
    },
    {
      label: 'Ministério do Trabalho e Emprego - Normas de Rescisão',
      url: 'https://www.gov.br/trabalho-e-emprego',
    },
  ],
  relatedTools: [
    {
      title: 'Calculadora de Rescisão Trabalhista',
      path: '/br/calculadora-rescisao',
      description: 'Simule o cálculo completo com todas as modalidades e parâmetros.',
    },
    {
      title: 'Calculadora do FGTS com Multa de 40%',
      path: '/br/calculadora-fgts',
      description: 'Verifique os valores devidos à conta da Caixa e indenização rescisória.',
    },
    {
      title: 'Calculadora de Seguro-Desemprego',
      path: '/br/calculadora-seguro-desemprego',
      description: 'Descubra a quantidade de parcelas e o valor mensal que você irá receber.',
    },
  ],
  relatedGuides: [
    {
      title: 'Guia Completo da Demissão sem Justa Causa',
      path: '/br/guias/direitos-na-demissao-sem-justa-causa',
      description: 'Entenda em detalhes cada um dos direitos e regras da dispensa imotivada.',
    },
    {
      title: 'Aviso Prévio Trabalhado ou Indenizado?',
      path: '/br/guias/aviso-previo-trabalhado-ou-indenizado',
      description: 'Veja as diferenças práticas, prazos e descontos de cada modalidade de aviso.',
    },
  ],
  updatedAt: '2026-01-01',
};
