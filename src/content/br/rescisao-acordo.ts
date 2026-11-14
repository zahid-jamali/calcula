import { PageContent } from '../types';

export const content: PageContent = {
  metaTitle: 'Rescisão por Acordo Comum CLT 2026 | Art. 484-A',
  metaDescription:
    'Entenda a demissão em comum acordo pelo Artigo 484-A da CLT em 2026: saque de 80% do FGTS, multa de 20%, metade do aviso prévio e regras de cálculo.',
  h1: 'Rescisão por Acordo Trabalhista 2026: Artigo 484-A CLT',
  quickAnswer:
    'A rescisão por comum acordo é a demissão consensual entre empregado e empregador criada pelo Artigo 484-A da CLT. O trabalhador recebe metade do aviso prévio indenizado (50%), metade da multa do FGTS (20%), saldo de salário, férias e 13º integrais, além de autorização para sacar até 80% do FGTS.',
  howItWorks: [
    {
      step: 1,
      title: 'Consentimento Mútuo Formalizado',
      description:
        'Ambas as partes assinam formalmente o termo de acordo mútuo para encerramento do contrato de trabalho, estabelecendo as bases rescisórias.',
      formula: 'Acordo bilateral escrito e assinado',
      legalArticle: 'Art. 484-A, caput da CLT',
    },
    {
      step: 2,
      title: 'Metade do Aviso Prévio Indenizado (50%)',
      description:
        'Se o aviso for indenizado, o trabalhador recebe 50% do valor do aviso prévio que lhe seria devido. Se o aviso for trabalhado, cumpre 100% dos dias.',
      formula: 'Aviso Prévio Proporcional × 50%',
      legalArticle: 'Art. 484-A, I, "a" da CLT',
    },
    {
      step: 3,
      title: 'Multa Rescisória de 20% do FGTS',
      description:
        'A empresa quita indenização de 20% (metade da penalidade de 40%) calculada sobre a totalidade dos depósitos realizados na conta da Caixa.',
      formula: 'Saldo Total do FGTS × 20%',
      legalArticle: 'Art. 484-A, I, "b" da CLT',
    },
    {
      step: 4,
      title: 'Saque Parcial de 80% do Saldo do FGTS',
      description:
        'O trabalhador obtém a chave da Caixa para sacar até 80% do saldo total existente na conta vinculada do FGTS.',
      formula: 'Saldo FGTS Acumulado × 80%',
      legalArticle: 'Art. 484-A, § 1º da CLT',
    },
    {
      step: 5,
      title: 'Quitação Integral das Demais Verbas',
      description:
        'Saldo de salário, 13º salário proporcional e férias vencidas e proporcionais com o terço constitucional são pagos integralmente a 100%.',
      formula: 'Verbas Remuneratórias Padrão quitadas a 100%',
      legalArticle: 'Art. 484-A, II da CLT',
    },
  ],
  article: `
## Como Funciona a Demissão por Comum Acordo (Artigo 484-A da CLT)?

Instituída pela Reforma Trabalhista (Lei nº 13.467/2017), a rescisão do contrato de trabalho por comum acordo legalizou uma prática que historicamente ocorria de maneira informal e fraudulenta no mercado corporativo brasileiro.

Com a criação do **Artigo 484-A da CLT**, empregador e funcionário que desejam extinguir a relação jurídica de emprego de maneira consensual e harmônica podem fazê-lo formalmente, repartindo direitos e encargos de modo transparente e seguro para ambas as partes.

---

## Direitos Assegurados na Rescisão por Acordo Mútuo

Na modalidade de distrato consensual, as verbas rescisórias são divididas entre parcelas reduzidas pela metade e parcelas quitadas na sua totalidade:

### Verbas Pagas pela Metade (50%):
- **Aviso Prévio Indenizado**: Se a dispensa for imediata sem cumprimento físico do aviso, a empresa indeniza apenas **50% do valor** correspondente ao período do aviso prévio proporcional (Lei 12.506/2011). Caso as partes optem pelo aviso trabalhado, este deverá ser cumprido e pago na sua totalidade (100%).
- **Multa Rescisória do FGTS**: A empresa é obrigada a recolher indenização compensatória de **20%** sobre o montante acumulado dos depósitos do FGTS (metade da multa ordinária de 40%).

### Verbas Pagas Integralmente (100%):
- Saldo de salário dos dias laborados no mês;
- 13º salário proporcional;
- Férias vencidas e proporcionais acrescidas do terço constitucional (1/3).

---

## O Saque do FGTS e o Seguro-Desemprego no Acordo

Duas restrições fundamentais delineiam o modelo de rescisão consensual:
1. **Saque de até 80% do FGTS**: Por força do Artigo 484-A, § 1º da CLT, o trabalhador é autorizado a movimentar **até 80% do saldo total** depositado em sua conta vinculada. Os 20% restantes permanecem depositados na conta rendendo juros e correção na Caixa.
2. **Veda expressa ao Seguro-Desemprego**: O § 2º do Artigo 484-A estipula que a extinção do contrato por acordo mútuo **não autoriza o ingresso no Programa do Seguro-Desemprego**. Como o desligamento resultou de ato bilateral voluntário, o trabalhador não recebe guias para requerer o benefício estatal.

---

## Prazo de Pagamento e Quitação Legal

O prazo para a empresa transferir as verbas devidas e entregar o TRCT com a chave do FGTS segue rigorosamente o disposto no Artigo 477, § 6º da CLT: **até 10 dias corridos** contados a partir da data da rescisão contratual consensual.
`,
  examples: [
    {
      title: 'Exemplo 1: Acordo Mútuo com Aviso Indenizado e 2 Anos de Empresa',
      scenario:
        'Colaborador com salário de R$ 3.000,00 e 2 anos completos de casa firma acordo mútuo com aviso indenizado (36 dias). Saldo FGTS de R$ 6.000,00 e 6 meses trabalhados no ano.',
      inputs: {
        'Salário Mensal': 'R$ 3.000,00',
        'Tempo de Trabalho': '2 anos (36 dias de aviso)',
        'Tipo de Aviso': 'Indenizado (50% no acordo)',
        'Saldo do FGTS': 'R$ 6.000,00',
        'Meses no Ano': '6 meses trabalhados',
      },
      breakdown: [
        {
          item: 'Saldo de Salário (15 dias)',
          amount: 'R$ 1.500,00',
          note: '(R$ 3.000 ÷ 30) × 15 dias',
        },
        {
          item: 'Metade do Aviso Prévio Indenizado (50% de 36 dias)',
          amount: 'R$ 1.800,00',
          note: '(36 dias × R$ 100/dia) ÷ 2',
        },
        {
          item: '13º Salário Proporcional (6/12 avos)',
          amount: 'R$ 1.500,00',
          note: '(R$ 3.000 ÷ 12) × 6 meses',
        },
        {
          item: 'Férias Proporcionais + 1/3 (6/12 avos)',
          amount: 'R$ 2.000,00',
          note: 'R$ 1.500,00 de férias + R$ 500,00 de terço',
        },
        {
          item: 'Multa Rescisória de 20% do FGTS',
          amount: 'R$ 1.200,00',
          note: '20% sobre saldo de R$ 6.000,00 quitado pela empresa',
        },
        {
          item: 'Desconto Previdenciário INSS',
          amount: '- R$ 112,50',
          note: '7,5% incidente sobre saldo de salário',
        },
      ],
      total: 'R$ 7.887,50 Líquido Rescisório + Saque de R$ 4.800 do FGTS (80%)',
    },
    {
      title: 'Exemplo 2: Acordo Trabalhista com Aviso Prévio Trabalhado',
      scenario:
        'Trabalhador com remuneração de R$ 4.000,00 cumpre aviso prévio trabalhado integral de 30 dias na rescisão consensual, possuindo saldo de R$ 12.000,00 de FGTS.',
      inputs: {
        'Salário Mensal': 'R$ 4.000,00',
        'Aviso Prévio': 'Trabalhado (cumprido a 100%)',
        'Saldo de FGTS': 'R$ 12.000,00',
      },
      breakdown: [
        {
          item: 'Saldo de Salário (30 dias cumpridos)',
          amount: 'R$ 4.000,00',
          note: 'Remuneração integral do mês de aviso',
        },
        {
          item: 'Multa Rescisória de 20% do FGTS',
          amount: 'R$ 2.400,00',
          note: '20% sobre saldo de R$ 12.000,00 recolhido pela empresa',
        },
        {
          item: 'Saque Permitido da Conta do FGTS (80%)',
          amount: 'R$ 9.600,00',
          note: '80% sobre saldo de R$ 12.000,00 liberado para saque',
        },
        {
          item: 'Desconto Previdenciário INSS',
          amount: '- R$ 373,41',
          note: 'Contribuição incidente sobre salário mensal',
        },
      ],
      total: 'R$ 6.026,59 Líquido da Empresa + Saque de R$ 9.600 na Caixa',
    },
  ],
  faqs: [
    {
      q: 'O que o trabalhador recebe na demissão por comum acordo?',
      a: 'Recebe metade do aviso prévio indenizado (50%), metade da multa do FGTS (20%), saldo de salário, férias e 13º integrais (100%), além de poder sacar até 80% do saldo do FGTS.',
    },
    {
      q: 'Quem faz acordo de demissão tem direito ao seguro-desemprego?',
      a: 'Não. O Artigo 484-A, § 2º da CLT veda expressamente o pagamento do benefício do seguro-desemprego na modalidade de distrato consensual.',
    },
    {
      q: 'Qual é o percentual do FGTS que posso sacar no acordo mútuo?',
      a: 'O empregado pode sacar até 80% do saldo acumulado em sua conta vinculada do FGTS na Caixa Econômica Federal. Os 20% restantes continuam rendendo na conta.',
    },
    {
      q: 'Qual é a multa do FGTS que a empresa paga no acordo?',
      a: 'A empresa é obrigada a pagar 20% de multa rescisória incidente sobre o total de depósitos efetuados durante a vigência do contrato de trabalho.',
    },
    {
      q: 'A empresa pode me obrigar a fazer a demissão por comum acordo?',
      a: 'Não. A rescisão pelo Artigo 484-A da CLT exige expressa e livre manifestação de vontade de ambas as partes. Se for imposta pelo empregador, pode ser anulada na Justiça do Trabalho.',
    },
    {
      q: 'Como funciona o aviso prévio se for trabalhado no acordo?',
      a: 'Caso o aviso prévio seja trabalhado, o colaborador deve cumpri-lo integralmente (30 dias) e recebe a remuneração de 100%. A regra de 50% só se aplica ao aviso prévio indenizado.',
    },
    {
      q: 'Qual é o prazo para a empresa pagar as verbas da rescisão por acordo?',
      a: 'O prazo é de até 10 dias corridos a contar da data de encerramento do contrato de trabalho, conforme o Artigo 477, § 6º da CLT.',
    },
    {
      q: 'O acordo precisa ser homologado no sindicato?',
      a: 'Não. A rescisão consensual pode ser formalizada diretamente no departamento de recursos humanos da empresa, sem necessidade de assistência sindical, salvo previsão em acordo coletivo.',
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
      label: 'Ministério do Trabalho e Emprego - Perguntas Frequentes',
      url: 'https://www.gov.br/trabalho-e-emprego',
    },
    {
      label: 'Caixa Econômica Federal - Saque do FGTS por Acordo',
      url: 'https://www.caixa.gov.br/beneficios-trabalhador/fgts',
    },
  ],
  relatedTools: [
    {
      title: 'Calculadora de Rescisão Trabalhista',
      path: '/br/calculadora-rescisao',
      description: 'Simule e compare rescisão por acordo, sem justa causa e pedido de demissão.',
    },
    {
      title: 'Calculadora do FGTS',
      path: '/br/calculadora-fgts',
      description: 'Veja quanto dá a multa rescisória de 20% e o saque de 80% do saldo.',
    },
    {
      title: 'Calculadora de Salário Líquido',
      path: '/br/calculadora-salario-liquido',
      description: 'Calcule seus rendimentos após deduções previdenciárias e fiscais.',
    },
  ],
  relatedGuides: [
    {
      title: 'Acordo Trabalhista: Como Funciona?',
      path: '/br/guias/acordo-trabalhista-como-funciona',
      description: 'Guia completo com simulações, vantagens e regras do Artigo 484-A da CLT.',
    },
    {
      title: 'Multa de 40% do FGTS Explicada',
      path: '/br/guias/multa-de-40-do-fgts',
      description: 'Entenda como incide a penalidade do FGTS em cada tipo de demissão.',
    },
  ],
  updatedAt: '2026-01-01',
};
