import { PageContent } from '../../types';

export const content: PageContent = {
  metaTitle: 'Férias Vencidas em Dobro: Regras e Cálculo CLT',
  metaDescription:
    'Saiba quando as férias vencidas devem ser pagas em dobro pela CLT em 2026: período concessivo, Súmula 81 do TST, terço constitucional e cálculo prático.',
  h1: 'Férias Vencidas em Dobro: Regras, Prazos e Cálculo CLT',
  quickAnswer:
    'As férias em dobro ocorrem quando o empregador não concede o descanso anual remunerado dentro dos 12 meses subsequentes ao período de aquisição. Conforme o Artigo 137 da CLT, a empresa é obrigada a pagar a remuneração das férias e o respectivo terço constitucional duplicados ao trabalhador prejudicado.',
  howItWorks: [
    {
      step: 1,
      title: 'Compreensão do Ciclo Aquisitivo e Concessivo',
      description:
        'A cada 12 meses de trabalho (período aquisitivo), abre-se a janela de 12 meses subsequentes (período concessivo) para a empresa conceder e pagar as férias.',
      formula: 'Período Concessivo = 12 meses após Período Aquisitivo',
      legalArticle: 'Art. 134 da CLT',
    },
    {
      step: 2,
      title: 'Constatação do Vencimento do Prazo Concessivo',
      description:
        'Se o período concessivo expirar sem que o trabalhador tenha gozado o descanso, aplica-se compulsoriamente a sanção da dobra legal.',
      formula: 'Férias não usufruídas após 12 meses concessivos',
      legalArticle: 'Art. 137 da CLT',
    },
    {
      step: 3,
      title: 'Cálculo da Dobra Salarial e do Terço Constitucional',
      description:
        'Multiplica-se por 2 o valor do salário base e o valor do terço constitucional referente aos dias usufruídos com atraso ou não gozados.',
      formula: '(Salário de Férias × 2) + [(Salário × 2) ÷ 3]',
      legalArticle: 'Súmula 328 do TST e Art. 7º, XVII da CF/88',
    },
    {
      step: 4,
      title: 'Regra de Fracionamento e Dias em Dobro',
      description:
        'Caso apenas parte dos dias de férias ultrapasse o término do período concessivo, a dobra incidirá estritamente sobre os dias gozados fora do prazo.',
      formula: 'Apenas os dias excedentes são dobrados',
      legalArticle: 'Súmula nº 81 do TST',
    },
  ],
  article: `
## O Que São Férias Vencidas e Férias em Dobro?

Todo trabalhador regido pela CLT tem direito a 30 dias de descanso remunerado a cada ano de vigência do contrato. Para que esse direito seja plenamente usufruído, a legislação estrutura o calendário em dois ciclos sucessivos:

1. **Período Aquisitivo**: O intervalo de 12 meses de trabalho em que o colaborador adquire o direito ao descanso (Art. 130 da CLT).
2. **Período Concessivo**: O intervalo de 12 meses imediatamente posteriores ao período aquisitivo, no qual o empregador deve obrigatoriamente agendar e conceder o gozo das férias ao empregado (Art. 134 da CLT).

Se a empresa deixar transcorrer todo o período concessivo sem que o trabalhador desfrute das suas férias, ocorre o fenômeno das **férias vencidas**, atraindo a aplicação imperativa do **Artigo 137 da CLT: a obrigação de pagar a remuneração em dobro**.

---

## Como Calcular o Valor das Férias em Dobro?

O cálculo da dobra abrange tanto a remuneração principal quanto o acréscimo constitucional de um terço:
$$\\text{Total de Férias em Dobro} = (\\text{Salário Base} \\times 2) + \\left(\\frac{\\text{Salário Base} \\times 2}{3}\\right)$$

*Exemplo*: Empregado com salário contratual de R$ 3.000,00 que não tirou férias no prazo legal:
- Salário em dobro: R$ 3.000,00 × 2 = **R$ 6.000,00**
- 1/3 Constitucional em dobro: R$ 6.000,00 ÷ 3 = **R$ 2.000,00**
- Valor Bruto Total das Férias em Dobro: **R$ 8.000,00**.

> Conforme consolidado pela jurisprudência do TST (**Súmula nº 328**), o terço constitucional incide obrigatoriamente sobre a remuneração dobrada das férias.

---

## E se Apenas Alguns Dias Passarem do Prazo? (Súmula 81 do TST)

Uma dúvida recorrente ocorre quando o trabalhador entra em férias no finalzinho do período concessivo, de modo que parte dos dias é usufruída no prazo e o restante ultrapassa o limite legal.

O Tribunal Superior do Trabalho pacificou essa situação na **Súmula nº 81**:
> *"Os dias de férias gozados após o período concessivo deverão ser remunerados em dobro."*

Assim, se o período concessivo vencia no dia 10 e as férias de 30 dias começaram no dia 1º:
- Os primeiros 10 dias (gozados dentro do prazo) são pagos de forma **simples**;
- Os 20 dias restantes (gozados fora do prazo legal) são pagos em **dobro**.

---

## O Pagamento Fora do Prazo de 2 Dias Gera Dobra? (Julgamento do STF na ADPF 501)

Historicamente, o TST aplicava a Súmula nº 457, que mandava pagar férias em dobro mesmo quando o trabalhador descansava na época certa, caso a empresa atrasasse o depósito financeiro previsto no Artigo 145 da CLT (pagamento até 2 dias antes do início do descanso).

**Atenção à mudança de entendimento**: O Supremo Tribunal Federal (STF), no julgamento vinculante da **ADPF 501**, declarou a Súmula 457 inconstitucional. Portanto, hoje em dia:
- A **remuneração em dobro** só é exigível quando o trabalhador **não usufruir o descanso** dentro do período concessivo de 12 meses;
- O atraso no pagamento das férias quando o descanso foi devidamente gozado não gera pagamento em dobro automático, sujeitando a empresa a correção monetária, juros e sanções administrativas do Ministério do Trabalho.
`,
  examples: [
    {
      title: 'Exemplo 1: 30 Dias Integrais de Férias Não Gozadas no Concessivo',
      scenario:
        'Colaborador com salário contratual de R$ 3.600,00 teve o período concessivo inteiramente expirado sem que a empresa agendasse o descanso.',
      inputs: {
        'Salário Contratual': 'R$ 3.600,00',
        'Dias Vencidos': '30 dias corridos',
        'Situação': 'Período concessivo expirado (Art. 137 CLT)',
      },
      breakdown: [
        {
          item: 'Remuneração das Férias em Dobro (R$ 3.600 × 2)',
          amount: 'R$ 7.200,00',
          note: 'Salário base multiplicado por dois',
        },
        {
          item: '1/3 Constitucional sobre a Dobra (Súmula 328 TST)',
          amount: 'R$ 2.400,00',
          note: 'R$ 7.200,00 ÷ 3 (Art. 7º, XVII CF/88)',
        },
      ],
      total: 'R$ 9.600,00 Valor Bruto das Férias em Dobro',
    },
    {
      title: 'Exemplo 2: Aplicação da Súmula 81 do TST (Apenas 10 Dias em Atraso)',
      scenario:
        'Trabalhador com salário de R$ 3.000,00 (R$ 100/dia) goza férias onde 20 dias ocorreram dentro do prazo concessivo e 10 dias após o vencimento.',
      inputs: {
        'Salário Mensal': 'R$ 3.000,00 (R$ 100,00/dia)',
        'Dias no Prazo': '20 dias (pagamento simples)',
        'Dias Fora do Prazo': '10 dias (pagamento dobrado)',
      },
      breakdown: [
        {
          item: '20 Dias no Prazo com 1/3 (Simples)',
          amount: 'R$ 2.666,67',
          note: '(20 × R$ 100) + R$ 666,67 de terço',
        },
        {
          item: '10 Dias em Dobro com 1/3 (Súmula 81 TST)',
          amount: 'R$ 2.666,67',
          note: '(10 × R$ 100 × 2) + R$ 666,67 de terço',
        },
      ],
      total: 'R$ 5.333,34 Total da Remuneração de Férias',
    },
  ],
  faqs: [
    {
      q: 'Quando as férias devem ser pagas em dobro?',
      a: 'As férias devem ser pagas em dobro quando a empresa não concede o período de descanso nos 12 meses seguintes ao término do período aquisitivo (período concessivo), conforme o Artigo 137 da CLT.',
    },
    {
      q: 'O terço constitucional também é pago em dobro nas férias vencidas?',
      a: 'Sim. A jurisprudência pacífica do Tribunal Superior do Trabalho (Súmula nº 328) determina que o terço constitucional de férias incide obrigatoriamente sobre a remuneração dobrada.',
    },
    {
      q: 'O que diz a Súmula 81 do TST sobre dias de férias em atraso?',
      a: 'A Súmula nº 81 do TST estabelece que, se as férias forem concedidas em período que ultrapasse o prazo concessivo, apenas os dias usufruídos fora do prazo deverão ser pagos em dobro.',
    },
    {
      q: 'Se a empresa atrasar o depósito das férias em 2 dias, paga em dobro?',
      a: 'Não mais. O Supremo Tribunal Federal (STF) julgou a ADPF 501 e derrubou a antiga regra da dobra por mero atraso financeiro, desde que o descanso tenha ocorrido dentro do prazo legal.',
    },
    {
      q: 'Como são pagas as férias vencidas na rescisão do contrato?',
      a: 'Na rescisão contratual, as férias vencidas são pagas integralmente com o terço constitucional. Se já tiverem ultrapassado o período concessivo, devem ser quitadas em dobro.',
    },
    {
      q: 'O empregado pode se recusar a tirar férias se estiverem vencidas?',
      a: 'Não. A época da concessão das férias é prerrogativa do empregador (Art. 136 da CLT), cabendo ao trabalhador receber a remuneração correspondente e gozar o período de descanso.',
    },
    {
      q: 'A empresa pode comprar férias vencidas em dobro?',
      a: 'O empregado pode converter até 1/3 das férias em abono pecuniário (Art. 143 da CLT), mas a venda integral das férias ("trabalhar nas férias") é terminantemente proibida pela lei.',
    },
    {
      q: 'Qual é o prazo prescricional para cobrar férias em dobro na Justiça?',
      a: 'O prazo prescricional para reclamar a dobra das férias começa a contar apenas a partir do término do respectivo período concessivo (Artigo 149 da CLT).',
    },
  ],
  sources: [
    {
      label: 'Consolidação das Leis do Trabalho - Férias em Dobro (Artigo 137 da CLT)',
      url: 'https://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm',
    },
    {
      label: 'Tribunal Superior do Trabalho - Súmula nº 81 (Férias Fora do Prazo)',
      url: 'https://www.tst.jus.br/sumulas',
    },
    {
      label: 'Tribunal Superior do Trabalho - Súmula nº 328 (Terço sobre Férias Dobradas)',
      url: 'https://www.tst.jus.br/sumulas',
    },
    {
      label: 'Supremo Tribunal Federal - Julgamento da ADPF 501 (Pagamento de Férias)',
      url: 'https://portal.stf.jus.br',
    },
  ],
  relatedTools: [
    {
      title: 'Calculadora de Férias CLT',
      path: '/br/calculadora-ferias/',
      description: 'Simule o cálculo das férias regulares, abono pecuniário e terço.',
    },
    {
      title: 'Calculadora de Rescisão Trabalhista',
      path: '/br/calculadora-rescisao/',
      description: 'Veja como as férias vencidas e proporcionais entram no acerto de contas.',
    },
    {
      title: 'Calculadora de Salário Líquido',
      path: '/br/calculadora-salario-liquido/',
      description: 'Descubra os descontos aplicados sobre remunerações de férias.',
    },
  ],
  relatedGuides: [
    {
      title: 'Como Calcular Rescisão Passo a Passo',
      path: '/br/guias/como-calcular-rescisao-passo-a-passo/',
      description: 'Aprenda a conferir cada verba rescisória da rescisão de contrato.',
    },
    {
      title: 'Direitos na Demissão Sem Justa Causa',
      path: '/br/guias/direitos-na-demissao-sem-justa-causa/',
      description: 'Confira todos os direitos garantidos na rescisão imotivada pela CLT.',
    },
  ],
  updatedAt: '2026-01-01',
};
