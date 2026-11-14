import { PageContent } from '../types';

export const content: PageContent = {
  metaTitle: 'Rescisão de Contrato de Experiência 2026 CLT',
  metaDescription:
    'Calcule a rescisão do contrato de experiência em 2026: término de prazo, rescisão antecipada da empresa (Art. 479) ou pelo empregado (Art. 480).',
  h1: 'Rescisão de Contrato de Experiência CLT 2026: Regras',
  quickAnswer:
    'O contrato de experiência é um pacto por prazo determinado de até 90 dias. No término normal, o trabalhador recebe saldo de salário, 13º e férias proporcionais com um terço, sacando o FGTS sem multa de 40%. Na rescisão antecipada pelo empregador, recebe indenização de metade dos dias restantes.',
  howItWorks: [
    {
      step: 1,
      title: 'Enquadramento da Hipótese de Término',
      description:
        'Verifica-se se a rescisão ocorreu no término natural do prazo contratado (até 90 dias) ou por quebra antecipada unilateral por uma das partes.',
      formula: 'Término de Prazo vs. Rescisão Antecipada (Art. 479 ou 480)',
      legalArticle: 'Art. 443 e 445, parágrafo único da CLT',
    },
    {
      step: 2,
      title: 'Saldo de Salário dos Dias Cumpridos',
      description:
        'Remuneração devida referente aos dias trabalhados no mês do desligamento, dividindo-se o salário por 30.',
      formula: '(Salário Mensal ÷ 30) × Dias Trabalhados',
      legalArticle: 'Art. 457 da CLT',
    },
    {
      step: 3,
      title: '13º e Férias Proporcionais com Terço',
      description:
        'Apuração das frações de 1/12 para cada 15 dias de serviço prestado durante a vigência do contrato de experiência.',
      formula: '[(Salário ÷ 12) × Meses] + 1/3 Constitucional',
      legalArticle: 'Art. 146 da CLT e Lei nº 4.090/1962',
    },
    {
      step: 4,
      title: 'Indenização do Artigo 479 da CLT (Se Antecipada pela Empresa)',
      description:
        'Se o empregador rescindir antes do termo final sem justa causa, deve pagar 50% da remuneração a que o trabalhador teria direito até o fim do contrato, mais 40% do FGTS.',
      formula: '(Dias Restantes × Diária) ÷ 2',
      legalArticle: 'Art. 479 da CLT e Art. 18 da Lei 8.036/1990',
    },
  ],
  article: `
## O Que É o Contrato de Experiência na CLT?

O contrato de experiência é uma modalidade especial de contrato de trabalho por prazo determinado, regulamentada pelos Artigos 443 e 445 da Consolidação das Leis do Trabalho. Sua finalidade precípua é propiciar um período probatório mútuo: para o empregador, avaliar as aptidões técnicas e comportamentais do contratado; para o trabalhador, verificar as condições de trabalho e adaptação ao ambiente corporativo.

A legislação impõe que o contrato de experiência tenha duração **máxima de 90 dias corridos**. Dentro desse limite de 90 dias, é permitida **uma única prorrogação** (por exemplo, 45 dias prorrogáveis por mais 45 dias, ou 30 dias prorrogados por 60 dias). Caso ultrapasse o 90º dia ou seja prorrogado mais de uma vez, transforma-se compulsoriamente em contrato por prazo indeterminado (Art. 451 da CLT).

---

## Verbas Rescisórias no Término Normal do Prazo

Quando o contrato de experiência atinge sua data de término pré-fixada e uma das partes opta por não dar continuidade ao vínculo empregatício:
- **Saldo de Salário**: Quitação dos dias trabalhados no último mês;
- **13º Salário Proporcional**: Contagem dos avos adquiridos durante os meses de vigência;
- **Férias Proporcionais + 1/3**: Quitação das férias correspondentes ao período probatório com acréscimo constitucional de um terço;
- **Saque do FGTS**: O trabalhador tem autorização para sacar integralmente os depósitos do FGTS efetuados pela empresa (código de movimentação 04);
- **Sem Multa de 40% e Sem Aviso Prévio**: Como o término decorreu do cumprimento natural do prazo previamente ajustado, não é devido aviso prévio nem a multa rescisória de 40%;
- **Sem Seguro-Desemprego**: O término de contrato por prazo determinado não confere direito ao benefício.

---

## Quebra Antecipada pelo Empregador: O Artigo 479 da CLT

Se a empresa decidir demitir o funcionário sem justa causa antes do dia de encerramento do contrato de experiência, a legislação estipula compensações protetivas adicionais:
1. **Indenização de 50% dos Salários Restantes (Art. 479 da CLT)**: A empresa é obrigada a pagar, a título de indenização pura, a metade da remuneração a que o empregado teria direito até o termo final ajustado.
2. **Multa de 40% do FGTS**: O colaborador passa a ter direito à multa indenizatória de 40% sobre todos os depósitos da conta vinculada.
3. **Cláusula Assecuratória de Direito Recíproco (Art. 481 da CLT)**: Se constar expressamente no contrato escrito que as partes têm direito recíproco de rescisão, a indenização do Art. 479 é substituída pela aplicação das regras ordinárias do aviso prévio comum.

---

## Quebra Antecipada pelo Empregado: O Artigo 480 da CLT

Caso o trabalhador decida deixar a empresa antes do término da experiência sem motivo de falta patronal grave:
- Recebe saldo de salário, 13º e férias proporcionais com o terço constitucional;
- **Não** pode sacar o saldo do FGTS;
- **Indenização do Artigo 480 da CLT**: O empregado deve indenizar o empregador caso a saída cause prejuízos materiais comprovados à empresa, com limite fixado no valor correspondente a 50% dos salários a que teria direito até o fim do contrato.
`,
  examples: [
    {
      title: 'Exemplo 1: Término Natural de 90 Dias de Experiência',
      scenario:
        'Colaborador com salário contratual de R$ 2.400,00 cumpre os 90 dias integrais de experiência (3 meses) e é desligado ao final do prazo acordado.',
      inputs: {
        'Salário Mensal': 'R$ 2.400,00',
        'Duração do Contrato': '90 dias completos (3 meses)',
        'Tipo de Rescisão': 'Término de contrato a termo',
      },
      breakdown: [
        {
          item: 'Saldo de Salário do Último Mês (30 dias)',
          amount: 'R$ 2.400,00',
          note: 'Salário integral do mês trabalhado',
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
          note: 'R$ 600,00 ÷ 3 (Art. 7º, XVII CF/88)',
        },
        {
          item: 'Desconto Previdenciário (INSS sobre salário)',
          amount: '- R$ 198,60',
          note: 'Tabela progressiva 2026',
        },
      ],
      total: 'R$ 3.601,40 Líquido a Receber + Saque do FGTS sem Multa de 40%',
    },
    {
      title: 'Exemplo 2: Rescisão Antecipada pela Empresa (Artigo 479 CLT)',
      scenario:
        'Trabalhador com salário de R$ 3.000,00 demitido sem justa causa no 60º dia de um contrato de experiência de 90 dias (faltando 30 dias para o encerramento).',
      inputs: {
        'Salário Mensal': 'R$ 3.000,00',
        'Dias Faltantes até o Termo': '30 dias',
        'Tipo de Rescisão': 'Antecipada pela empresa sem justa causa',
        'Saldo de FGTS': 'R$ 480,00',
      },
      breakdown: [
        {
          item: 'Indenização do Artigo 479 da CLT (50% dos dias restantes)',
          amount: 'R$ 1.500,00',
          note: '(30 dias restantes × R$ 100/dia) ÷ 2',
        },
        {
          item: '13º Salário Proporcional (2/12 avos)',
          amount: 'R$ 500,00',
          note: '(R$ 3.000 ÷ 12) × 2 meses',
        },
        {
          item: 'Férias Proporcionais + 1/3 (2/12 avos)',
          amount: 'R$ 666,67',
          note: 'R$ 500,00 de férias + R$ 166,67 de terço',
        },
        {
          item: 'Multa Rescisória de 40% do FGTS',
          amount: 'R$ 192,00',
          note: '40% sobre depósitos do período',
        },
      ],
      total: 'R$ 2.858,67 Total Líquido + Saque Integral do FGTS',
    },
  ],
  faqs: [
    {
      q: 'Qual é o prazo máximo de duração do contrato de experiência pela CLT?',
      a: 'O contrato de experiência pode durar no máximo 90 dias corridos (Art. 445 da CLT), podendo ser prorrogado apenas uma única vez dentro desse limite máximo.',
    },
    {
      q: 'O trabalhador pode sacar o FGTS no término do contrato de experiência?',
      a: 'Sim. Ao término regular do prazo contratado, o empregado pode sacar 100% dos valores depositados em sua conta do FGTS, embora não haja pagamento da multa de 40%.',
    },
    {
      q: 'Como funciona a indenização do Artigo 479 da CLT?',
      a: 'Se a empresa rescindir o contrato antes do prazo sem justa causa, deverá pagar ao trabalhador a metade dos salários que ele receberia até o término previsto.',
    },
    {
      q: 'O empregado pode pedir demissão no contrato de experiência?',
      a: 'Sim. Nesse caso, receberá saldo de salário, 13º e férias proporcionais com 1/3, mas não saca o FGTS e pode ter de indenizar a empresa caso haja comprovação de prejuízo (Art. 480 da CLT).',
    },
    {
      q: 'Existe aviso prévio no término do contrato de experiência?',
      a: 'Não. Como as partes já conheciam de antemão a data final do contrato, não há concessão nem desconto de aviso prévio no término natural do prazo.',
    },
    {
      q: 'O que é a cláusula assecuratória de direito recíproco?',
      a: 'Prevista no Artigo 481 da CLT, é uma cláusula contratual que substitui a indenização de 50% pelas regras tradicionais de concessão do aviso prévio ordinário caso haja quebra antecipada.',
    },
    {
      q: 'A mulher gestante tem estabilidade no contrato de experiência?',
      a: 'Sim. A jurisprudência consolidada pela Súmula nº 244, III do TST garante estabilidade provisória da concepção até 5 meses após o parto mesmo em contrato de experiência.',
    },
    {
      q: 'Qual é o prazo para a empresa pagar a rescisão da experiência?',
      a: 'Conforme o Artigo 477, § 6º da CLT, o prazo é de até 10 dias corridos a contar da rescisão ou do encerramento do contrato de trabalho.',
    },
  ],
  sources: [
    {
      label: 'Consolidação das Leis do Trabalho - Contrato por Prazo Determinado (Artigos 443 a 452)',
      url: 'https://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm',
    },
    {
      label: 'Tribunal Superior do Trabalho - Súmula nº 244 (Estabilidade da Gestante)',
      url: 'https://www.tst.jus.br/sumulas',
    },
    {
      label: 'Caixa Econômica Federal - Saque do FGTS por Término de Contrato',
      url: 'https://www.caixa.gov.br/beneficios-trabalhador/fgts',
    },
    {
      label: 'Ministério do Trabalho e Emprego - Normas Contratuais',
      url: 'https://www.gov.br/trabalho-e-emprego',
    },
  ],
  relatedTools: [
    {
      title: 'Calculadora de Rescisão Trabalhista',
      path: '/br/calculadora-rescisao',
      description: 'Simule todas as hipóteses de cálculo rescisório pela CLT.',
    },
    {
      title: 'Calculadora de Férias CLT',
      path: '/br/calculadora-ferias',
      description: 'Calcule o valor proporcional das férias e do terço constitucional.',
    },
    {
      title: 'Calculadora de 13º Salário',
      path: '/br/calculadora-13-salario',
      description: 'Descubra o valor dos avos proporcionais do décimo terceiro.',
    },
  ],
  relatedGuides: [
    {
      title: 'Como Calcular Rescisão Passo a Passo',
      path: '/br/guias/como-calcular-rescisao-passo-a-passo',
      description: 'Entenda detalhadamente o cálculo de cada verba rescisória da CLT.',
    },
    {
      title: 'Aviso Prévio Trabalhado ou Indenizado?',
      path: '/br/guias/aviso-previo-trabalhado-ou-indenizado',
      description: 'Saiba tudo sobre os tipos e prazos do aviso prévio.',
    },
  ],
  updatedAt: '2026-01-01',
};
