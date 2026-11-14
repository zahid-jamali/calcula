import { PageContent } from '../types';

export const content: PageContent = {
  metaTitle: 'Calculadora do FGTS 2026 com Multa 40% | Calcula',
  metaDescription:
    'Calcule o saldo acumulado do FGTS e o valor da multa rescisória de 40% em 2026. Saiba quanto você tem a receber na demissão ou saque-aniversário.',
  h1: 'Calculadora de FGTS 2026: Saldo e Multa de 40% CLT',
  quickAnswer:
    'O Fundo de Garantia do Tempo de Serviço (FGTS) é um depósito mensal compulsório de 8% da remuneração feito pelo empregador em conta vinculada na Caixa. Na demissão sem justa causa, o trabalhador saca o saldo total acumulado e recebe a multa indenizatória de 40% paga pela empresa contratante.',
  howItWorks: [
    {
      step: 1,
      title: 'Depósito Mensal Obrigatório de 8%',
      description:
        'A empresa deposita até o dia 20 de cada mês o percentual de 8% incidente sobre a remuneração bruta total (salário, comissões, adicionais e 13º). Para contratos de jovem aprendiz, a alíquota é de 2%.',
      formula: 'Remuneração Bruta Mensal × 8%',
      legalArticle: 'Art. 15 da Lei nº 8.036/1990',
    },
    {
      step: 2,
      title: 'Correção Monetária e Rendimento da Conta',
      description:
        'O saldo mantido na Caixa Econômica Federal rende taxa de 3% ao ano acrescida da Taxa Referencial (TR) e da distribuição do resultado anual do FGTS.',
      formula: 'Saldo Atualizado = Depósitos Acumulados + TR + 3% a.a. + Lucros',
      legalArticle: 'Art. 13 da Lei nº 8.036/1990 e STF ADI 5090',
    },
    {
      step: 3,
      title: 'Cálculo da Multa Rescisória de 40%',
      description:
        'Na despedida arbitrária ou sem justa causa, a empresa é obrigada a pagar multa de 40% sobre todos os depósitos devidos durante a vigência do contrato, inclusive os saques efetuados.',
      formula: 'Base Histórica de Depósitos do FGTS × 40%',
      legalArticle: 'Art. 18, § 1º da Lei nº 8.036/1990',
    },
    {
      step: 4,
      title: 'Liberação do Saque Rescisório ou Saque-Aniversário',
      description:
        'No regime convencional de rescisão, o trabalhador levanta 100% do saldo e da multa. No saque-aniversário, levanta anualmente uma fatia progressiva do saldo.',
      formula: 'Conforme modalidade de saque vinculada ao contrato',
      legalArticle: 'Lei nº 13.932/2019 e Art. 20 da Lei 8.036/1990',
    },
  ],
  article: `
## O Que É o FGTS e Quem Tem Direito?

Criado para proteger o trabalhador demitido sem motivo justificado, o Fundo de Garantia do Tempo de Serviço (FGTS) é regulamentado pela Lei nº 8.036/1990. Todos os empregados contratados pelo regime da CLT — incluindo trabalhadores rurais, domésticos, temporários e atletas profissionais — têm direito à abertura de uma conta vinculada individual na Caixa Econômica Federal.

O depósito é uma **obrigação patrimonial exclusiva da empresa** empregadora e nunca pode ser descontado do salário do empregado sob qualquer pretexto:
- **Alíquota Geral (CLT)**: 8% sobre a remuneração integral;
- **Contrato de Aprendizagem**: 2% sobre a remuneração;
- **Empregado Doméstico**: 8% de recolhimento mensal mais 3,2% de antecipação compensatória da rescisão.

---

## Como Calcular a Multa de 40% do FGTS?

A multa indenizatória rescisória de 40% é a principal garantia pecuniária do trabalhador dispensado sem justa causa. 

Um equívoco bastante comum é acreditar que a multa incide apenas sobre o saldo que se encontra no extrato no momento da dispensa. A legislação determina que a multa de 40% incide sobre o **montante de todos os depósitos realizados durante a vigência do contrato de trabalho**, acrescidos das correções e juros legais:
- Se o empregado realizou retiradas anteriores para compra de casa própria ou saques-aniversário, esses valores devem ser recompostos na base de cálculo para a apuração dos 40% da empresa.
- **Rescisão por Comum Acordo (Art. 484-A da CLT)**: A multa devida pelo empregador é reduzida pela metade, correspondendo a **20%** sobre a totalidade dos depósitos.

---

## Saque-Rescisão vs. Saque-Aniversário: O Que Muda?

A Lei nº 13.932/2019 permitiu que o trabalhador opte anualmente pelo Saque-Aniversário em detrimento do Saque-Rescisão tradicional:

### Saque-Rescisão (Modalidade Padrão)
- O trabalhador pode retirar o saldo integral de sua conta vinculada ao ser demitido sem justa causa, além de receber a multa rescisória integral de 40%.

### Saque-Aniversário (Modalidade Opcional)
- O trabalhador retira uma parcela percentual do saldo no mês de seu aniversário (de 5% a 50% mais uma parcela adicional fixa).
- **Atenção na Demissão**: Caso seja dispensado sem justa causa enquanto estiver na modalidade do Saque-Aniversário, o empregado recebe e saca a **multa de 40% paga pela empresa**, mas o saldo principal da conta do FGTS fica retido e continuará sendo liberado apenas anualmente.

---

## Como Consultar o Extrato e Chave de Saque

A conferência da regularidade dos depósitos mensais pode ser realizada pelo trabalhador a qualquer momento através do aplicativo **FGTS Caixa** para smartphones ou pelo portal Cidadão da Caixa Econômica Federal.

Após a formalização da demissão sem justa causa, a empresa tem o prazo de 10 dias corridos para recolher a multa rescisória e gerar a **Chave de Conectividade Social**, que autoriza o trabalhador a retirar os valores na Caixa em até 5 dias úteis.
`,
  examples: [
    {
      title: 'Exemplo 1: Demissão Sem Justa Causa Após 2 Anos de Trabalho',
      scenario:
        'Trabalhador dispensado imotivadamente com salário mensal de R$ 3.000,00, totalizando 24 meses de depósitos regulares e saldo acumulado de R$ 6.500,00 na Caixa.',
      inputs: {
        'Salário Bruto': 'R$ 3.000,00',
        'Tempo de Serviço': '2 anos (24 meses)',
        'Saldo Acumulado no FGTS': 'R$ 6.500,00',
        'Modalidade': 'Saque-Rescisão Padrão',
      },
      breakdown: [
        {
          item: 'Depósito Mensal Pago pela Empresa (8%)',
          amount: 'R$ 240,00 / mês',
          note: 'R$ 3.000,00 × 8% (obrigação da empresa)',
        },
        {
          item: 'Saldo Acumulado na Conta Vinculada',
          amount: 'R$ 6.500,00',
          note: 'Depósitos mensais + 13º + correções da Caixa',
        },
        {
          item: 'Multa Rescisória de 40% (Art. 18 Lei 8.036)',
          amount: 'R$ 2.600,00',
          note: '40% calculado sobre R$ 6.500,00',
        },
      ],
      total: 'R$ 9.100,00 Montante Total Sacado pelo Trabalhador',
    },
    {
      title: 'Exemplo 2: Rescisão por Comum Acordo (Art. 484-A da CLT)',
      scenario:
        'Colaborador encerra contrato por comum acordo mútuo, possuindo saldo histórico depositado de R$ 10.000,00 em sua conta vinculada.',
      inputs: {
        'Saldo Histórico no FGTS': 'R$ 10.000,00',
        'Motivo de Rescisão': 'Comum Acordo (Art. 484-A)',
      },
      breakdown: [
        {
          item: 'Multa Rescisória da Empresa (20%)',
          amount: 'R$ 2.000,00',
          note: 'Metade da multa padrão de 40% quitada pela empresa',
        },
        {
          item: 'Saque Permitido da Conta do FGTS (80%)',
          amount: 'R$ 8.000,00',
          note: '80% sobre o saldo de R$ 10.000,00 depositado',
        },
        {
          item: 'Saldo Retido na Conta Vinculada (20%)',
          amount: 'R$ 2.000,00',
          note: 'Permanece rendendo juros e correção na Caixa',
        },
      ],
      total: 'R$ 10.000,00 Total Liberado Imediatamente',
    },
  ],
  faqs: [
    {
      q: 'O FGTS é descontado do salário do empregado?',
      a: 'Não. O depósito mensal de 8% do FGTS é uma obrigação estritamente patronal custeada pela empresa contratante, sendo vedada qualquer retenção no holerite do trabalhador.',
    },
    {
      q: 'Quem pede demissão recebe a multa de 40% do FGTS?',
      a: 'Não. Quando o funcionário toma a iniciativa de pedir demissão, ele não tem direito ao saque do saldo do FGTS e nem à multa indenizatória de 40%.',
    },
    {
      q: 'Como é calculada a multa de 40% do FGTS?',
      a: 'A multa corresponde a 40% da soma de todos os depósitos realizados pelo empregador durante a vigência do contrato de trabalho, devidamente corrigidos, inclusive os que foram sacados anteriormente.',
    },
    {
      q: 'Qual é o prazo para a empresa depositar a multa do FGTS na rescisão?',
      a: 'O empregador deve pagar a multa de 40% do FGTS e fornecer a respectiva chave de saque em até 10 dias corridos a contar do término do vínculo empregatício (Art. 477 da CLT).',
    },
    {
      q: 'O que acontece com o FGTS de quem optou pelo Saque-Aniversário?',
      a: 'Caso seja dispensado sem justa causa, o trabalhador recebe e levanta a multa rescisória de 40%, porém o saldo principal da conta fica retido para retiradas anuais no mês de aniversário.',
    },
    {
      q: 'Quanto o FGTS rende por ano na Caixa Econômica Federal?',
      a: 'A rentabilidade oficial é fixada em 3% ao ano mais a Taxa Referencial (TR), complementada pela distribuição do lucro anual apurado pelo conselho curador do FGTS.',
    },
    {
      q: 'Menor aprendiz e estagiário têm direito ao depósito do FGTS?',
      a: 'O menor aprendiz contratado sob a CLT tem direito a recolhimento de FGTS na alíquota de 2%. Já o estagiário (regido pela Lei 11.788/2008) não possui vínculo empregatício e não tem direito a FGTS.',
    },
    {
      q: 'O que fazer se a empresa não estiver depositando o FGTS em dia?',
      a: 'O trabalhador pode denunciar a empresa à fiscalização do Ministério do Trabalho e, na via judicial, pleitear a rescisão indireta do contrato de trabalho por descumprimento de obrigação legal (Art. 483 da CLT).',
    },
  ],
  sources: [
    {
      label: 'Lei nº 8.036/1990 - Dispõe sobre o Fundo de Garantia do Tempo de Serviço',
      url: 'https://www.planalto.gov.br/ccivil_03/leis/l8036.htm',
    },
    {
      label: 'Lei nº 13.932/2019 - Institui a Modalidade do Saque-Aniversário',
      url: 'https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2019/lei/l13932.htm',
    },
    {
      label: 'Caixa Econômica Federal - Informações Gerais do FGTS',
      url: 'https://www.caixa.gov.br/beneficios-trabalhador/fgts',
    },
    {
      label: 'Supremo Tribunal Federal - Julgamento da Correção do FGTS (ADI 5090)',
      url: 'https://portal.stf.jus.br',
    },
  ],
  relatedTools: [
    {
      title: 'Calculadora de Rescisão Trabalhista',
      path: '/br/calculadora-rescisao',
      description: 'Simule o valor total da sua rescisão com FGTS, aviso prévio e férias.',
    },
    {
      title: 'Calculadora de Salário Líquido',
      path: '/br/calculadora-salario-liquido',
      description: 'Descubra os descontos mensais da CLT em sua folha de pagamento.',
    },
    {
      title: 'Calculadora de Seguro-Desemprego',
      path: '/br/calculadora-seguro-desemprego',
      description: 'Veja quantas parcelas e qual valor você tem direito a receber.',
    },
  ],
  relatedGuides: [
    {
      title: 'Multa de 40% do FGTS: Como Funciona',
      path: '/br/guias/multa-de-40-do-fgts',
      description: 'Entenda a base de cálculo histórica e prazos para o pagamento da multa rescisória.',
    },
    {
      title: 'Direitos na Demissão Sem Justa Causa',
      path: '/br/guias/direitos-na-demissao-sem-justa-causa',
      description: 'Confira todos os direitos garantidos ao trabalhador demitido imotivadamente.',
    },
  ],
  updatedAt: '2026-01-01',
};
