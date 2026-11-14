import { PageContent } from '../../types';

export const content: PageContent = {
  metaTitle: 'Multa de 40% do FGTS: Como Funciona e Cálculo CLT',
  metaDescription:
    'Entenda como funciona a multa rescisória de 40% do FGTS em 2026: base histórica de depósitos, saque-aniversário, prazos e fórmula exata de cálculo.',
  h1: 'Multa de 40% do FGTS: Como Funciona o Cálculo e Prazos',
  quickAnswer:
    'A multa de 40% do FGTS é uma indenização compensatória devida pela empresa ao trabalhador demitido sem justa causa. O cálculo incide sobre o montante total de todos os depósitos devidos durante o contrato de trabalho, inclusive os valores sacados anteriormente para moradia própria ou na modalidade de saque-aniversário.',
  howItWorks: [
    {
      step: 1,
      title: 'Apuração da Base de Fins Rescisórios',
      description:
        'A Caixa Econômica Federal emite o extrato analítico para fins rescisórios, computando a soma de todos os depósitos de 8% efetuados durante a vigência do contrato.',
      formula: 'Base = Saldo Atual + Valores Sacados Anteriormente + Atualização',
      legalArticle: 'Art. 18, § 1º da Lei nº 8.036/1990',
    },
    {
      step: 2,
      title: 'Aplicação da Alíquota Compensatória de 40%',
      description:
        'Multiplica-se a base histórica integral por 40%, definindo o montante indenizatório líquido que a empresa deverá recolher ao trabalhador.',
      formula: 'Indenização Rescisória = Base de Fins Rescisórios × 40%',
      legalArticle: 'Art. 9º, § 1º do Decreto nº 99.684/1990',
    },
    {
      step: 3,
      title: 'Recolhimento Via FGTS Digital e Liberação da Chave',
      description:
        'A empresa transmite as informações pelo FGTS Digital e recolhe o valor da guia em até 10 dias corridos após a dispensa, gerando a chave de saque.',
      formula: 'Prazo = 10 dias corridos (Art. 477, § 6º CLT)',
      legalArticle: 'Portaria MTE nº 3.211/2023 e Art. 477 CLT',
    },
  ],
  article: `
## O Que É a Multa de 40% do FGTS?

A indenização rescisória de 40% do Fundo de Garantia do Tempo de Serviço (FGTS) é uma compensação financeira obrigatória instituída pelo Artigo 18, § 1º da Lei Federal nº 8.036/1990. Ela foi concebida pelo legislador constituinte como um mecanismo de freio à demissão imotivada, penalizando o empregador que dispensa o funcionário de forma arbitrária.

A indenização é paga com **recursos próprios da empresa** e depositada diretamente na conta vinculada do trabalhador na Caixa Econômica Federal ou quitada através das guias do FGTS Digital.

---

## O Grande Equívoco: Como É Formada a Base de Cálculo?

Um dos erros mais comuns entre os trabalhadores é acreditar que a multa de 40% é calculada apenas sobre o saldo residual visível no aplicativo do FGTS na data da demissão.

A legislação é categórica: a multa incide sobre a **totalidade dos depósitos realizados ou devidos durante a vigência do contrato de trabalho**, devidamente corrigidos:
- **Saques Anteriores para Moradia**: Se o trabalhador sacou R$ 30.000,00 da conta vinculada para amortizar financiamento habitacional da Caixa, esse valor é somado de volta à base de cálculo da multa;
- **Saque-Aniversário**: Se o funcionário retirou parcelas anuais pelo Saque-Aniversário, todos esses valores resgatados são computados na base da multa;
- **Depósitos em Atraso**: Se a empresa deixou de recolher meses anteriores, ela deverá quitar as parcelas faltantes com juros e a multa de 40% incidirá também sobre esses valores pendentes.

---

## O Que Acontece com a Multa no Saque-Aniversário?

Quem aderiu à modalidade do Saque-Aniversário (Lei nº 13.932/2019) e foi demitido sem justa causa tem direitos específicos:
1. **A Multa de 40% É Paga Normalmente**: O trabalhador recebe e saca a **multa integral de 40%** recolhida pela empresa na Caixa;
2. **O Saldo Principal Fica Retido**: O saldo restante dos depósitos mensais acumulados na conta não pode ser sacado de imediato, permanecendo na conta da Caixa para recebimento das parcelas anuais subsequentes no mês de aniversário.

---

## Prazos de Pagamento e Emissão da Chave de Saque

O Artigo 477, § 6º da CLT determina que a empresa tem até **10 dias corridos** contados a partir do término do contrato de trabalho para recolher a guia rescisória do FGTS.

Após a quitação do documento de arrecadação pela empresa:
- A Caixa Econômica Federal leva de **3 a 5 dias úteis** para processar o crédito do saldo;
- O trabalhador pode transferir o dinheiro diretamente para qualquer conta bancária de sua titularidade via aplicativo FGTS, sem tarifas.
`,
  examples: [
    {
      title: 'Exemplo 1: Multa sobre Saldo Integral (Sem Saques Anteriores)',
      scenario:
        'Trabalhador dispensado sem justa causa após 3 anos com saldo acumulado no FGTS de R$ 9.000,00 na Caixa Econômica Federal.',
      inputs: {
        'Saldo Histórico do FGTS': 'R$ 9.000,00',
        'Saques Efetuados no Passado': 'R$ 0,00',
        'Base para Fins Rescisórios': 'R$ 9.000,00',
      },
      breakdown: [
        {
          item: 'Base Integral para Fins Rescisórios',
          amount: 'R$ 9.000,00',
          note: 'Soma total dos depósitos de 8% + correções',
        },
        {
          item: 'Cálculo da Multa Rescisória de 40%',
          amount: 'R$ 3.600,00',
          note: 'R$ 9.000,00 × 0,40 (paga pela empresa)',
        },
      ],
      total: 'R$ 12.600,00 Montante Total Sacado (Saldo de R$ 9.000 + Multa de R$ 3.600)',
    },
    {
      title: 'Exemplo 2: Multa com Saques Prévios do Saque-Aniversário',
      scenario:
        'Colaborador possui saldo remanescente de R$ 4.000,00 na conta, mas já sacou R$ 6.000,00 através de saques-aniversário ao longo do contrato.',
      inputs: {
        'Saldo Remanescente no App': 'R$ 4.000,00',
        'Valores Sacados no Aniversário': 'R$ 6.000,00',
        'Base Recomposta de Fins Rescisórios': 'R$ 10.000,00',
      },
      breakdown: [
        {
          item: 'Saldo Visível Atual na Conta',
          amount: 'R$ 4.000,00',
          note: 'Permanece retido pela regra do saque-aniversário',
        },
        {
          item: 'Recomposição dos Valores Sacados',
          amount: 'R$ 6.000,00',
          note: 'Somado à base conforme a Lei 8.036/1990',
        },
        {
          item: 'Multa Rescisória de 40% Paga pela Empresa',
          amount: 'R$ 4.000,00',
          note: '40% calculado sobre a base total de R$ 10.000,00',
        },
      ],
      total: 'R$ 4.000,00 Valor Imediatamente Sacado (Multa Rescisória de 40%)',
    },
  ],
  faqs: [
    {
      q: 'Quem tem direito a receber a multa de 40% do FGTS?',
      a: 'Apenas os empregados contratados pelo regime CLT dispensados sem justa causa, ou aqueles que obtiverem rescisão indireta do contrato na Justiça do Trabalho.',
    },
    {
      q: 'Se eu usei o FGTS para comprar casa, a multa é menor?',
      a: 'Não. A lei determina que a base de cálculo da multa recomponha todos os valores sacados anteriormente. A empresa pagará 40% sobre o montante histórico integral.',
    },
    {
      q: 'Quem pede demissão recebe a multa de 40%?',
      a: 'Não. Ao pedir demissão espontaneamente, o trabalhador não recebe a multa de 40% e nem tem autorização para sacar o saldo do FGTS.',
    },
    {
      q: 'Qual é a multa do FGTS na demissão por comum acordo?',
      a: 'Na demissão consensual do Artigo 484-A da CLT, a multa recolhida pela empresa é reduzida pela metade, ou seja, 20% sobre o saldo histórico.',
    },
    {
      q: 'Qual é o prazo para a empresa depositar a multa de 40%?',
      a: 'O empregador tem até 10 dias corridos a contar da rescisão do contrato para recolher a multa do FGTS e disponibilizar a chave de saque.',
    },
    {
      q: 'A empresa pode parcelar o pagamento da multa rescisória?',
      a: 'Não. O recolhimento rescisório do FGTS deve ser efetuado de forma integral em guia única, sendo vedado o parcelamento pela legislação trabalhista.',
    },
    {
      q: 'Incide imposto de renda ou INSS sobre a multa de 40% do FGTS?',
      a: 'Não. Por se tratar de verba de natureza estritamente indenizatória com amparo legal, a multa de 40% é totalmente isenta de retenção de INSS e IRRF.',
    },
    {
      q: 'O que fazer se a empresa não pagar a multa rescisória do FGTS?',
      a: 'O empregado pode buscar o sindicato da categoria, formalizar denúncia no Ministério do Trabalho e ajuizar ação na Justiça do Trabalho requerendo a multa com juros e correção.',
    },
  ],
  sources: [
    {
      label: 'Lei nº 8.036/1990 - Fundo de Garantia do Tempo de Serviço (FGTS)',
      url: 'https://www.planalto.gov.br/ccivil_03/leis/l8036.htm',
    },
    {
      label: 'Decreto nº 99.684/1990 - Consolida as Normas Regulamentares do FGTS',
      url: 'https://www.planalto.gov.br/ccivil_03/decreto/d99684.htm',
    },
    {
      label: 'Caixa Econômica Federal - Extrato de Fins Rescisórios',
      url: 'https://www.caixa.gov.br/beneficios-trabalhador/fgts',
    },
    {
      label: 'Ministério do Trabalho e Emprego - FGTS Digital',
      url: 'https://www.gov.br/trabalho-e-emprego/pt-br/servicos/empregador/fgtsdigital',
    },
  ],
  relatedTools: [
    {
      title: 'Calculadora do FGTS com Multa',
      path: '/br/calculadora-fgts/',
      description: 'Simule depósitos mensais, rendimentos e valor da multa de 40% ou 20%.',
    },
    {
      title: 'Calculadora de Rescisão Trabalhista',
      path: '/br/calculadora-rescisao/',
      description: 'Cálculo completo da rescisão CLT com aviso prévio e FGTS.',
    },
    {
      title: 'Calculadora de Seguro-Desemprego',
      path: '/br/calculadora-seguro-desemprego/',
      description: 'Descubra a quantidade de parcelas e os valores a que tem direito.',
    },
  ],
  relatedGuides: [
    {
      title: 'Direitos na Demissão Sem Justa Causa',
      path: '/br/guias/direitos-na-demissao-sem-justa-causa/',
      description: 'Veja tudo o que a empresa deve pagar na dispensa imotivada.',
    },
    {
      title: 'Como Funciona o Acordo Trabalhista',
      path: '/br/guias/acordo-trabalhista-como-funciona/',
      description: 'Entenda por que a multa é reduzida para 20% no acordo do Art. 484-A.',
    },
  ],
  updatedAt: '2026-01-01',
};
