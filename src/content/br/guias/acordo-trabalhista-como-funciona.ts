import { PageContent } from '../../types';

export const content: PageContent = {
  metaTitle: 'Acordo Trabalhista: Como Funciona o Art. 484-A CLT',
  metaDescription:
    'Saiba como funciona a demissão por acordo mútuo pela CLT em 2026: saque de 80% do FGTS, multa de 20%, metade do aviso prévio e sem devolução de valores.',
  h1: 'Acordo Trabalhista: Como Funciona a Demissão Consensual CLT',
  quickAnswer:
    'O acordo trabalhista previsto no Artigo 484-A da CLT permite a rescisão consensual entre patrão e empregado. O trabalhador recebe metade do aviso prévio indenizado (50%), metade da multa do FGTS (20%), saque de até 80% do saldo e verbas salariais integrais, sem acesso ao benefício do seguro-desemprego.',
  howItWorks: [
    {
      step: 1,
      title: 'Decisão Bilateral e Consentimento Mútuo',
      description:
        'Empregado e empregador formalizam a vontade conjunta de encerrar a relação de trabalho por meio de documento escrito assinado por ambos.',
      formula: 'Termo de distrato bilateral recíproco',
      legalArticle: 'Art. 484-A da CLT',
    },
    {
      step: 2,
      title: 'Cálculo das Verbas Pela Metade (50%)',
      description:
        'O aviso prévio se for indenizado é pago pela metade (50%) e a indenização compensatória do FGTS recolhida pela empresa é de 20% (metade de 40%).',
      formula: 'Aviso Indenizado × 50% e Multa FGTS × 20%',
      legalArticle: 'Art. 484-A, I da CLT',
    },
    {
      step: 3,
      title: 'Quitação a 100% dos Direitos Remuneratórios',
      description:
        'Saldo de salário, 13º salário proporcional e férias vencidas e proporcionais com o terço constitucional são pagos integralmente.',
      formula: 'Verbas Trabalhistas Remuneratórias Padrão (100%)',
      legalArticle: 'Art. 484-A, II da CLT',
    },
    {
      step: 4,
      title: 'Saque de 80% do FGTS na Caixa Econômica',
      description:
        'A empresa gera a chave de saque que autoriza a retirada de até 80% do saldo total depositado na conta vinculada do FGTS.',
      formula: 'Saldo FGTS Acumulado × 80%',
      legalArticle: 'Art. 484-A, § 1º da CLT',
    },
  ],
  article: `
## O Que É o Acordo Trabalhista da Reforma Trabalhista?

Antes da promulgação da Reforma Trabalhista (Lei nº 13.467/2017), muitos trabalhadores que queriam deixar o emprego recorriam a um "acordo informal" com o patrão: a empresa simulava uma demissão sem justa causa para que o funcionário sacasse o FGTS e recebesse o seguro-desemprego, exigindo que o trabalhador devolvesse em dinheiro vivo a multa rescisória de 40%. Essa prática constituía fraude trabalhista e estelionato contra o FAT.

Para pacificar essa distorção e criar uma via legítima de desligamento consensual, a legislação criou o **Artigo 484-A da CLT**, que disciplina formalmente a **extinção do contrato de trabalho por comum acordo**.

---

## Como Fica a Divisão dos Direitos no Artigo 484-A da CLT?

A sistemática do acordo mútuo busca um equilíbrio financeiro entre as partes:

### 1. O Que o Trabalhador Recebe pela Metade (50%):
- **Aviso Prévio Indenizado**: Se a saída for imediata, a empresa paga **50% do valor do aviso prévio proporcional** apurado pela Lei 12.506/2011. (Se o aviso for trabalhado, deverá ser cumprido por 30 dias e pago a 100%).
- **Multa do FGTS**: Em vez dos 40% tradicionais, o empregador recolhe **20% de multa rescisória** sobre o total dos depósitos.

### 2. O Que o Trabalhador Recebe Integralmente (100%):
- Saldo de salário dos dias laborados no mês;
- 13º salário proporcional ao período trabalhado no ano;
- Férias proporcionais com acréscimo de 1/3 constitucional;
- Férias vencidas simples ou em dobro (se houver) com 1/3.

### 3. As Restrições Cruciais do Modelo:
- **Saque Parcial do FGTS**: O trabalhador pode retirar **até 80% do saldo total** existente em sua conta vinculada na Caixa Econômica. Os 20% restantes continuam aplicados na conta do FGTS.
- **Sem Direito a Seguro-Desemprego**: O Artigo 484-A, § 2º da CLT proíbe expressamente o recebimento de qualquer parcela do seguro-desemprego nessa modalidade.

---

## Quando Vale a Pena Fazer o Acordo Trabalhista?

O acordo mútuo é uma excelente alternativa nas seguintes situações:
- O trabalhador quer trocar de área, empreender ou descansar e possui um bom saldo de FGTS retido que deseja resgatar (80%), o que seria impossível se pedisse demissão normal;
- O trabalhador já tem outra oportunidade engatilhada e prefere sair com 80% do FGTS e 20% de multa, em vez de pedir demissão e sair sem nada da conta vinculada;
- A empresa não tem intenção de demitir o funcionário imotivadamente, mas compreende seu desejo de sair e aceita partilhar custos indenizatórios reduzidos.
`,
  examples: [
    {
      title: 'Exemplo 1: Acordo com Aviso Indenizado e Salário de R$ 3.000,00',
      scenario:
        'Colaborador com 2 anos de casa (36 dias de aviso) e saldo acumulado de FGTS de R$ 8.000,00 celebra distrato consensual com aviso indenizado.',
      inputs: {
        'Salário Contratual': 'R$ 3.000,00',
        'Dias de Aviso': '36 dias (50% = 18 dias)',
        'Saldo de FGTS': 'R$ 8.000,00',
        'Avos no Ano': '6 meses trabalhados',
      },
      breakdown: [
        {
          item: 'Saldo de Salário (10 dias cumpridos)',
          amount: 'R$ 1.000,00',
          note: '(R$ 3.000 ÷ 30) × 10',
        },
        {
          item: 'Metade do Aviso Prévio Indenizado (18 dias)',
          amount: 'R$ 1.800,00',
          note: '36 dias × R$ 100/dia ÷ 2 (Art. 484-A, I)',
        },
        {
          item: '13º Salário Proporcional (6/12 avos)',
          amount: 'R$ 1.500,00',
          note: '(R$ 3.000 ÷ 12) × 6',
        },
        {
          item: 'Férias Proporcionais + 1/3 (6/12 avos)',
          amount: 'R$ 2.000,00',
          note: 'R$ 1.500,00 de férias + R$ 500,00 de terço',
        },
        {
          item: 'Multa Rescisória de 20% do FGTS',
          amount: 'R$ 1.600,00',
          note: '20% sobre R$ 8.000,00 quitado pela empresa',
        },
        {
          item: 'Desconto Previdenciário (INSS sobre saldo)',
          amount: '- R$ 75,00',
          note: '7,5% sobre saldo salarial de R$ 1.000,00',
        },
      ],
      total: 'R$ 7.825,00 Líquido da Empresa + Saque de R$ 6.400 do FGTS (80%)',
    },
    {
      title: 'Exemplo 2: Acordo Trabalhista com Aviso Cumprido (Trabalhado)',
      scenario:
        'Empregado com salário de R$ 2.400,00 cumpre 30 dias de aviso trabalhado na rescisão por acordo mútuo, com saldo de FGTS de R$ 5.000,00.',
      inputs: {
        'Salário Mensal': 'R$ 2.400,00',
        'Aviso Prévio': 'Trabalhado integralmente (100%)',
        'Saldo do FGTS': 'R$ 5.000,00',
      },
      breakdown: [
        {
          item: 'Saldo de Salário do Mês de Aviso (30 dias)',
          amount: 'R$ 2.400,00',
          note: 'Remuneração integral do mês de aviso',
        },
        {
          item: 'Multa Rescisória de 20% do FGTS',
          amount: 'R$ 1.000,00',
          note: '20% sobre saldo de R$ 5.000,00 pago pela empresa',
        },
        {
          item: 'Saque Permitido da Conta do FGTS (80%)',
          amount: 'R$ 4.000,00',
          note: '80% liberado para saque na Caixa',
        },
        {
          item: 'Desconto Previdenciário (INSS s/ salário)',
          amount: '- R$ 198,60',
          note: 'Tabela progressiva incidente sobre o salário',
        },
      ],
      total: 'R$ 3.201,40 Líquido da Empresa + Saque de R$ 4.000 na Caixa',
    },
  ],
  faqs: [
    {
      q: 'Quanto do FGTS posso sacar no acordo de demissão pela CLT?',
      a: 'Pelo Artigo 484-A, § 1º da CLT, o trabalhador é autorizado a movimentar até 80% do saldo total depositado em sua conta do FGTS na Caixa Econômica Federal.',
    },
    {
      q: 'Qual é o valor da multa do FGTS que a empresa paga no acordo?',
      a: 'A empresa recolhe metade da multa rescisória padrão, ou seja, 20% sobre o montante de todos os depósitos devidos ao FGTS durante o contrato.',
    },
    {
      q: 'Quem faz acordo demissional tem direito ao seguro-desemprego?',
      a: 'Não. O Artigo 484-A, § 2º da CLT estabelece de forma categórica que a extinção do contrato por acordo mútuo não confere direito ao seguro-desemprego.',
    },
    {
      q: 'A empresa é obrigada a aceitar o meu pedido de acordo?',
      a: 'Não. O acordo mútuo exige a concordância livre e voluntária de ambas as partes. Nenhuma empresa é obrigada a aceitar a proposta feita pelo empregado.',
    },
    {
      q: 'Como funciona o aviso prévio trabalhado no acordo?',
      a: 'Se o aviso for trabalhado, o colaborador cumpre os 30 dias normalmente e recebe 100% da remuneração. O pagamento de 50% só se aplica se o aviso for indenizado.',
    },
    {
      q: 'O trabalhador precisa devolver dinheiro para a empresa no acordo?',
      a: 'Não! O acordo do Artigo 484-A da CLT é 100% legal e transparente. Não existe devolução de multa nem repasse de valores para a empresa.',
    },
    {
      q: 'Qual é o prazo para a empresa pagar as verbas do acordo?',
      a: 'Pelo Artigo 477, § 6º da CLT, o empregador tem até 10 dias corridos a contar da data de formalização do distrato para depositar o montante líquido.',
    },
    {
      q: 'O que acontece com os 20% do FGTS que ficam na conta?',
      a: 'Os 20% remanescentes continuam rendendo juros e correção monetária na Caixa, podendo ser sacados no futuro para compra de imóvel ou aposentadoria.',
    },
  ],
  sources: [
    {
      label: 'Consolidação das Leis do Trabalho - Rescisão por Acordo (Artigo 484-A)',
      url: 'https://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm',
    },
    {
      label: 'Lei nº 13.467/2017 - Reforma Trabalhista (Planalto)',
      url: 'https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2017/lei/l13467.htm',
    },
    {
      label: 'Caixa Econômica Federal - Movimentação do FGTS por Acordo Mútuo',
      url: 'https://www.caixa.gov.br/beneficios-trabalhador/fgts',
    },
    {
      label: 'Ministério do Trabalho e Emprego - Orientações Trabalhistas',
      url: 'https://www.gov.br/trabalho-e-emprego',
    },
  ],
  relatedTools: [
    {
      title: 'Calculadora de Rescisão Trabalhista',
      path: '/br/calculadora-rescisao',
      description: 'Simule o cálculo rescisório comparando acordo mútuo e pedido de demissão.',
    },
    {
      title: 'Calculadora do FGTS com Multa',
      path: '/br/calculadora-fgts',
      description: 'Veja quanto dá a multa rescisória de 20% e o saque de 80% do saldo.',
    },
    {
      title: 'Calculadora de Salário Líquido',
      path: '/br/calculadora-salario-liquido',
      description: 'Descubra seus rendimentos após deduções de encargos e benefícios.',
    },
  ],
  relatedGuides: [
    {
      title: 'Pedido de Demissão: Quais os Direitos?',
      path: '/br/guias/pedido-de-demissao-quais-os-direitos',
      description: 'Veja o comparativo completo entre pedir demissão e celebrar acordo.',
    },
    {
      title: 'Multa de 40% do FGTS Explicada',
      path: '/br/guias/multa-de-40-do-fgts',
      description: 'Entenda a base de cálculo de todos os depósitos na conta da Caixa.',
    },
  ],
  updatedAt: '2026-01-01',
};
