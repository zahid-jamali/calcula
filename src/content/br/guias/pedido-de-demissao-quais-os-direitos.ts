import { PageContent } from '../../types';

export const content: PageContent = {
  metaTitle: 'Pedido de Demissão: Quais os Direitos? Guia CLT 2026',
  metaDescription:
    'Saiba quais são seus direitos ao pedir demissão pela CLT em 2026: saldo de salário, férias com 1/3, 13º, regras do aviso prévio e o que você não recebe.',
  h1: 'Pedido de Demissão: Quais os Direitos do Trabalhador CLT?',
  quickAnswer:
    'Ao pedir demissão pela CLT, o trabalhador recebe saldo de salário, 13º proporcional e férias vencidas e proporcionais com acréscimo de um terço constitucional. Abre mão do saque do FGTS, da multa de 40% e do seguro-desemprego, devendo cumprir 30 dias de aviso prévio sob pena de desconto rescisório.',
  howItWorks: [
    {
      step: 1,
      title: 'Formalização da Carta de Demissão',
      description:
        'O trabalhador redige de próprio punho ou assina digitalmente a comunicação de rescisão ao empregador, informando se irá cumprir ou não o aviso prévio.',
      formula: 'Comunicação formal por escrito',
      legalArticle: 'Art. 487 da CLT',
    },
    {
      step: 2,
      title: 'Apuração dos Proventos Devidos',
      description:
        'Calculam-se o saldo de salário dos dias trabalhados, o 13º salário proporcional aos meses do ano e as férias com terço constitucional.',
      formula: 'Saldo + 13º Proporcional + Férias com 1/3',
      legalArticle: 'Lei nº 4.090/1962 e Súmula 261 do TST',
    },
    {
      step: 3,
      title: 'Definição do Cumprimento do Aviso Prévio',
      description:
        'Se o colaborador trabalhar os 30 dias, recebe a remuneração normal. Se pedir saída imediata, a empresa pode descontar até 30 dias de salário.',
      formula: 'Desconto de até 30 dias de salário se não cumprido',
      legalArticle: 'Art. 487, § 2º da CLT',
    },
    {
      step: 4,
      title: 'Pagamento das Verbas Rescisórias',
      description:
        'A empresa quita o saldo líquido apurado em até 10 dias corridos a partir do término do contrato de trabalho.',
      formula: 'Prazo = 10 dias corridos',
      legalArticle: 'Art. 477, § 6º da CLT',
    },
  ],
  article: `
## O Que Acontece Quando o Empregado Pede Demissão?

Pedir demissão é um ato jurídico unilateral voluntário por meio do qual o colaborador decide rescindir o contrato de trabalho formal. Seja por aprovação em novo processo seletivo, mudança de cidade ou insatisfação profissional, a iniciativa de rompimento acarreta a perda de determinadas garantias sociais concebidas unicamente para a dispensa imotivada.

Antes de tomar a decisão final, é primordial conhecer exatamente o impacto financeiro dessa escolha.

---

## Comparativo: O Que Você Recebe vs. O Que Você Deixa de Receber

### Verbas Que Você Recebe:
- **Saldo de Salário**: Quitação de todos os dias trabalhados no mês até a data da saída;
- **13º Salário Proporcional**: Contagem dos avos do ano em que trabalhou 15 dias ou mais;
- **Férias Proporcionais + 1/3**: Frações adquiridas no período aquisitivo atual com o terço constitucional (**Súmula nº 261 do TST**);
- **Férias Vencidas + 1/3**: Pagamento integral das férias que já completaram o ciclo aquisitivo e não foram gozadas.

### Direitos Que Você Renuncia:
- **Saque do FGTS**: O montante acumulado permanece retido na Caixa Econômica Federal;
- **Multa Rescisória de 40%**: O empregador não recolhe nenhuma indenização sobre o saldo da conta;
- **Seguro-Desemprego**: Como o rompimento foi voluntário, o trabalhador não recebe o benefício do MTE.

---

## O Aviso Prévio no Pedido de Demissão: Trabalhar ou Ter Desconto?

Ao pedir demissão, o trabalhador tem a obrigação legal de conceder **30 dias de aviso prévio** ao empregador (Artigo 487, § 2º da CLT):

### 1. Aviso Prévio Cumprido (Trabalhado)
- O empregado trabalha normalmente pelos 30 dias subsequentes ao pedido;
- Recebe o salário integral correspondente na rescisão;
- **Importante**: No pedido de demissão, o trabalhador **não tem direito** à redução de jornada em 2 horas diárias nem aos 7 dias corridos de folga no final (essas regalias aplicam-se apenas quando a empresa demite).

### 2. Aviso Prévio Indenizado pelo Empregado (Não Cumprido)
- Se o colaborador quiser sair de imediato e a empresa não aceitar dispensá-lo, o empregador tem o direito legítimo de **descontar até 30 dias de salário** diretamente do valor das verbas rescisórias devidas.
- **Teto do Desconto**: O aviso proporcional da Lei 12.506/2011 (3 dias por ano) é benefício exclusivo do trabalhador. A empresa só pode descontar no máximo 30 dias fixos, jamais dias adicionais.

---

## A Empresa Pode Liberar do Aviso Prévio?

Sim. O empregador tem a faculdade de dispensar o cumprimento do aviso prévio por liberalidade própria. Contudo, conforme consolidado pela **Súmula nº 276 do TST**, o direito ao aviso prévio é irrenunciável pelo empregado, de modo que a apresentação de uma carta de contratação em novo emprego não obriga a empresa atual a abrir mão do desconto, dependendo de consenso amigável entre as partes.
`,
  examples: [
    {
      title: 'Exemplo 1: Pedido de Demissão com Aviso Trabalhado (Salário R$ 3.000)',
      scenario:
        'Trabalhador com remuneração de R$ 3.000,00 pede demissão, cumpre os 30 dias de aviso e possui 6 meses de trabalho no ano civil.',
      inputs: {
        'Salário Contratual': 'R$ 3.000,00',
        'Aviso Prévio': 'Trabalhado e cumprido (30 dias)',
        'Avos no Ano': '6 meses (6/12)',
      },
      breakdown: [
        {
          item: 'Saldo de Salário do Mês de Aviso (30 dias)',
          amount: 'R$ 3.000,00',
          note: 'Salário integral trabalhado',
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
          item: 'Desconto Previdenciário (INSS)',
          amount: '- R$ 253,41',
          note: 'Tabela progressiva incidente sobre R$ 3.000',
        },
      ],
      total: 'R$ 6.246,59 Saldo Líquido Creditado na Conta Bancária',
    },
    {
      title: 'Exemplo 2: Pedido de Demissão com Saída Imediata (Desconto de Aviso)',
      scenario:
        'Colaborador com salário de R$ 3.000,00 pede demissão no dia 15 do mês com saída imediata e tem o aviso de 30 dias descontado.',
      inputs: {
        'Salário Contratual': 'R$ 3.000,00',
        'Dias Trabalhados no Mês': '15 dias',
        'Aviso Prévio': 'Não cumprido (desconto de 30 dias)',
        'Avos no Ano': '5 meses de 13º e férias',
      },
      breakdown: [
        {
          item: 'Saldo de Salário (15 dias)',
          amount: 'R$ 1.500,00',
          note: '(R$ 3.000 ÷ 30) × 15 dias',
        },
        {
          item: '13º Salário Proporcional (5/12 avos)',
          amount: 'R$ 1.250,00',
          note: '(R$ 3.000 ÷ 12) × 5 meses',
        },
        {
          item: 'Férias Proporcionais + 1/3 (5/12 avos)',
          amount: 'R$ 1.666,67',
          note: 'R$ 1.250,00 de férias + R$ 416,67 de terço',
        },
        {
          item: 'Desconto de Aviso Prévio Não Cumprido',
          amount: '- R$ 3.000,00',
          note: 'Desconto integral de 30 dias (Art. 487, § 2º CLT)',
        },
        {
          item: 'Desconto Previdenciário (INSS sobre saldo)',
          amount: '- R$ 112,50',
          note: '7,5% incidente sobre R$ 1.500,00',
        },
      ],
      total: 'R$ 1.304,17 Saldo Líquido Final a Receber',
    },
  ],
  faqs: [
    {
      q: 'Posso sacar meu FGTS se eu pedir demissão?',
      a: 'Não. O saldo do FGTS permanece retido na Caixa Econômica Federal e você não terá direito à multa rescisória de 40%.',
    },
    {
      q: 'Se eu não cumprir o aviso prévio, quanto a empresa pode descontar?',
      a: 'A empresa pode descontar exatamente o valor correspondente a 30 dias do seu salário base contratual das suas verbas rescisórias.',
    },
    {
      q: 'Minha rescisão pode ficar com valor negativo se o desconto for maior?',
      a: 'Não. Pelo Artigo 477, § 5º da CLT, qualquer desconto rescisório não pode exceder o valor de um salário do colaborador. O saldo pode zerar, mas você não fica devendo dinheiro.',
    },
    {
      q: 'Quem pede demissão tem direito à redução de 2 horas no aviso trabalhado?',
      a: 'Não. A redução de 2 horas diárias ou dispensa de 7 dias é um direito exclusivo de quem foi demitido pela empresa sem justa causa.',
    },
    {
      q: 'A empresa é obrigada a me liberar do aviso se eu apresentar carta de novo emprego?',
      a: 'Não. Conforme a Súmula nº 276 do TST, a empresa pode exigir o cumprimento ou aplicar o desconto legal do aviso, salvo acordo bilateral.',
    },
    {
      q: 'Recebo 13º salário e férias proporcionais ao pedir demissão?',
      a: 'Sim. O 13º salário proporcional e as férias proporcionais acrescidas do terço constitucional são direitos garantidos por lei e pela Súmula nº 261 do TST.',
    },
    {
      q: 'Qual é o prazo legal para a empresa pagar o pedido de demissão?',
      a: 'O empregador tem o prazo legal de até 10 dias corridos a contar da rescisão para realizar o depósito do saldo na sua conta bancária.',
    },
    {
      q: 'Como deve ser redigida a carta de pedido de demissão?',
      a: 'Deve ser escrita de preferência de próprio punho ou assinada eletronicamente, informando o encerramento do contrato e declarando expressamente se o aviso será cumprido ou não.',
    },
  ],
  sources: [
    {
      label: 'Consolidação das Leis do Trabalho - Aviso Prévio (Art. 487 CLT)',
      url: 'https://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm',
    },
    {
      label: 'Tribunal Superior do Trabalho - Súmula nº 261 (Férias Proporcionais)',
      url: 'https://www.tst.jus.br/sumulas',
    },
    {
      label: 'Tribunal Superior do Trabalho - Súmula nº 276 (Irrenunciabilidade do Aviso)',
      url: 'https://www.tst.jus.br/sumulas',
    },
    {
      label: 'Ministério do Trabalho e Emprego - Rescisões Trabalhistas',
      url: 'https://www.gov.br/trabalho-e-emprego',
    },
  ],
  relatedTools: [
    {
      title: 'Calculadora de Rescisão Trabalhista',
      path: '/br/calculadora-rescisao',
      description: 'Simule o cálculo do seu pedido de demissão com ou sem cumprimento de aviso.',
    },
    {
      title: 'Calculadora de Salário Líquido',
      path: '/br/calculadora-salario-liquido',
      description: 'Calcule seus rendimentos após deduções previdenciárias e fiscais.',
    },
    {
      title: 'Calculadora de Férias CLT',
      path: '/br/calculadora-ferias',
      description: 'Entenda como calcular o valor exato das férias proporcionais e do terço.',
    },
  ],
  relatedGuides: [
    {
      title: 'Aviso Prévio Trabalhado ou Indenizado?',
      path: '/br/guias/aviso-previo-trabalhado-ou-indenizado',
      description: 'Veja todas as regras, modelos e prazos do aviso prévio pela CLT.',
    },
    {
      title: 'Acordo Trabalhista: Como Funciona?',
      path: '/br/guias/acordo-trabalhista-como-funciona',
      description: 'Descubra a rescisão consensual do Artigo 484-A para sacar 80% do FGTS.',
    },
  ],
  updatedAt: '2026-01-01',
};
