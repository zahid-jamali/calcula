import { PageContent } from '../types';

export const content: PageContent = {
  metaTitle: 'Calculadora de 13º Salário 2026 CLT | Calcula',
  metaDescription:
    'Calcule o décimo terceiro salário de 2026. Simule a 1ª e a 2ª parcela com descontos de INSS e IRRF conforme a CLT de forma simples e precisa.',
  h1: 'Calculadora de 13º Salário 2026: 1ª e 2ª Parcela CLT',
  quickAnswer:
    'O décimo terceiro salário é uma gratificação natalina compulsória garantida pela CLT. É pago em duas parcelas: a primeira entre 1º de fevereiro e 30 de novembro, correspondente a 50% do salário sem descontos; a segunda até 20 de dezembro, com deduções oficiais progressivas de INSS e Imposto de Renda.',
  howItWorks: [
    {
      step: 1,
      title: 'Apuração dos Meses Trabalhados (Avos)',
      description:
        'Cada mês civil em que o empregado trabalhou 15 dias ou mais garante o direito a 1/12 da remuneração integral.',
      formula: 'Avos = Meses com 15+ Dias Trabalhados',
      legalArticle: 'Art. 1º, § 2º da Lei nº 4.090/1962',
    },
    {
      step: 2,
      title: 'Composição da Remuneração Base',
      description:
        'A base de cálculo compreende o salário contratual de dezembro acrescido da média anual de horas extras, adicional noturno, periculosidade e comissões.',
      formula: 'Salário Base + Médias de Adicionais no Ano',
      legalArticle: 'Art. 457 da CLT e Súmula 45 do TST',
    },
    {
      step: 3,
      title: 'Cálculo da 1ª Parcela (Adiantamento)',
      description:
        'Corresponde exatamente à metade do valor apurado, creditada sem nenhuma retenção de tributos previdenciários ou fiscais.',
      formula: '(Remuneração Integral ÷ 12 × Avos) × 50%',
      legalArticle: 'Art. 2º da Lei nº 4.749/1965',
    },
    {
      step: 4,
      title: 'Cálculo da 2ª Parcela e Descontos',
      description:
        'Calcula-se o total integral do 13º, aplicam-se as deduções oficiais de INSS e IRRF sobre o valor integral e subtrai-se o adiantamento já pago.',
      formula: '13º Total - 1ª Parcela - INSS Total - IRRF Total',
      legalArticle: 'Decreto nº 57.155/1965 e Art. 16 da Lei 8.134/1996',
    },
  ],
  article: `
## O Que É o 13º Salário e Quem Tem Direito?

O décimo terceiro salário, formalmente denominado Gratificação de Natal pela Lei nº 4.090/1962, é um direito trabalhista fundamental assegurado a todos os trabalhadores urbanos, rurais, avulsos e domésticos contratados sob o regime da Consolidação das Leis do Trabalho (CLT), conforme expressamente ratificado pelo Artigo 7º, inciso VIII, da Constituição Federal de 1988.

Para ter direito à gratificação integral ou proporcional, o colaborador deve manter vínculo empregatício ativo e ter trabalhado pelo menos 15 dias em um mês civil. A cada período igual ou superior a 15 dias trabalhados dentro do mesmo mês, adquire-se a fração de 1/12 (um doze avos) do salário mensal.

---

## Datas Limite de Pagamento em 2026

O pagamento da gratificação natalina é estritamente regulamentado pela Lei nº 4.749/1965 e pelo Decreto nº 57.155/1965, devendo ocorrer em duas quotas com prazos inegociáveis:

### 1ª Parcela (Adiantamento)
- **Período de pagamento**: Entre 1º de fevereiro e **30 de novembro de 2026**.
- **Valor**: Equivale a exatamente 50% da remuneração devida no mês anterior ao do pagamento.
- **Tributação**: **Nenhum desconto** pode incidir sobre a 1ª parcela. O empregado recebe o valor bruto integral.
- **Antecipação com férias**: O trabalhador tem o direito de requerer o adiantamento da 1ª parcela do 13º junto com o gozo de suas férias, desde que protocole o pedido formalmente junto ao empregador até o dia 31 de janeiro do ano corrente (Art. 2º, § 2º da Lei 4.749/1965).

### 2ª Parcela (Quitação e Ajuste)
- **Data limite**: Até o dia **20 de dezembro de 2026** (caso a data caia em domingo ou feriado bancário, o depósito deve ser antecipado para o último dia útil imediatamente anterior).
- **Valor**: Corresponde à remuneração total de dezembro menos o adiantamento concedido na 1ª parcela.
- **Tributação**: Nesta fase incidem as retenções obrigatórias de **INSS** e de **Imposto de Renda Retido na Fonte (IRRF)**, calculadas com base no valor bruto total do décimo terceiro.

---

## Médias de Horas Extras, Comissões e Adicionais

A gratificação de fim de ano não se limita ao salário base contratual fixo. Conforme estabelece a Súmula nº 45 do Tribunal Superior do Trabalho (TST) e o Artigo 457 da CLT:
- **Horas extras**: Calcula-se a soma de todas as horas extras realizadas entre janeiro e novembro (ou dezembro) e divide-se pelo número de meses trabalhados no ano, multiplicando pelo valor da hora extra com o adicional vigente.
- **Adicional Noturno e Insalubridade/Periculosidade**: Adicionais habituais integram a base de cálculo. O adicional de periculosidade (30%) e de insalubridade incidem sobre a remuneração integral de forma proporcional.
- **Comissões e Gorjetas**: Divide-se a somatória de todas as comissões auferidas no período aquisitivo pelo total de meses trabalhados para apurar a média mensal a ser incorporada ao benefício.

---

## Como São Aplicados os Descontos de INSS e IRRF?

A tributação do décimo terceiro salário possui regime de **tributação exclusiva na fonte**, o que significa que o cálculo não se mistura com a folha de pagamento ordinária do mês de dezembro:

1. **INSS Progressivo**: É aplicada a tabela oficial da Previdência Social para 2026 (alíquotas progressivas de 7,5%, 9%, 12% e 14%), respeitando o teto de contribuição previdenciária de R$ 8.157,41.
2. **Imposto de Renda Retido na Fonte (IRRF)**: Aplicam-se as alíquotas da Receita Federal sobre a base após dedução do INSS e eventuais dependentes legais (R$ 189,59 por dependente) ou a dedução simplificada mensal de R$ 564,80, aplicando-se aquela que for mais vantajosa ao contribuinte.
3. **Pensão Alimentícia**: Se houver ordem judicial averbada, a dedução de alimentos sobre o 13º incidirá conforme estipulado pelo magistrado na decisão.
`,
  examples: [
    {
      title: 'Exemplo 1: Salário de R$ 3.000,00 e 12 Meses Trabalhados',
      scenario:
        'Trabalhador com carteira assinada durante todo o ano de 2026, com salário fixo mensal de R$ 3.000,00 e sem dependentes.',
      inputs: {
        'Salário Mensal': 'R$ 3.000,00',
        'Meses Trabalhados': '12 meses (12/12 avos)',
        'Dependentes': '0',
      },
      breakdown: [
        {
          item: 'Valor Bruto Total do 13º Salário',
          amount: 'R$ 3.000,00',
          note: 'Salário integral contratual',
        },
        {
          item: '1ª Parcela Paga em Novembro (50% Bruto)',
          amount: 'R$ 1.500,00',
          note: 'Metade do salário sem qualquer desconto',
        },
        {
          item: 'Desconto Previdenciário (INSS sobre R$ 3.000)',
          amount: '- R$ 253,41',
          note: 'Tabela progressiva 2026 (12% menos R$ 106,59)',
        },
        {
          item: 'Desconto de IRRF na Fonte',
          amount: '- R$ 36,55',
          note: 'Base de cálculo líquida de R$ 2.746,59',
        },
        {
          item: '2ª Parcela Líquida Paga em Dezembro',
          amount: 'R$ 1.210,04',
          note: 'R$ 3.000,00 - R$ 1.500,00 - R$ 253,41 - R$ 36,55',
        },
      ],
      total: 'R$ 2.710,04 Líquido Total das Duas Parcelas',
    },
    {
      title: 'Exemplo 2: Salário de R$ 4.200,00 e 8 Meses Trabalhados no Ano',
      scenario:
        'Colaborador admitido em 15/05/2026 com remuneração mensal de R$ 4.200,00, completando 8 meses trabalhados até dezembro.',
      inputs: {
        'Salário Mensal': 'R$ 4.200,00',
        'Data de Admissão': '15/05/2026',
        'Meses Trabalhados': '8 meses (8/12 avos)',
        'Dependentes': '1',
      },
      breakdown: [
        {
          item: '13º Salário Bruto Proporcional (8/12 avos)',
          amount: 'R$ 2.800,00',
          note: '(R$ 4.200 ÷ 12) × 8 meses',
        },
        {
          item: '1ª Parcela Paga em Novembro (50% do Proporcional)',
          amount: 'R$ 1.400,00',
          note: 'R$ 2.800,00 ÷ 2',
        },
        {
          item: 'Desconto de INSS (sobre R$ 2.800)',
          amount: '- R$ 229,41',
          note: 'Faixa de 12% da tabela progressiva',
        },
        {
          item: 'Desconto de IRRF (Dedução de 1 Dependente)',
          amount: '- R$ 9,13',
          note: 'Base R$ 2.800 - R$ 229,41 - R$ 189,59 = R$ 2.381,00',
        },
        {
          item: '2ª Parcela Líquida Paga em Dezembro',
          amount: 'R$ 1.161,46',
          note: 'R$ 2.800,00 - R$ 1.400,00 - R$ 229,41 - R$ 9,13',
        },
      ],
      total: 'R$ 2.561,46 Líquido Total Acumulado',
    },
  ],
  faqs: [
    {
      q: 'Quem tem direito a receber o décimo terceiro salário?',
      a: 'Todos os trabalhadores com carteira assinada sob o regime CLT (urbanos, rurais, avulsos e domésticos), aposentados e pensionistas do INSS que tenham completado pelo menos 15 dias de atividade laboral no ano.',
    },
    {
      q: 'Quais são as datas limites para pagamento do 13º salário em 2026?',
      a: 'A primeira parcela deve ser quitada obrigatoriamente entre 1º de fevereiro e 30 de novembro de 2026. A segunda parcela deve ser paga até o dia 20 de dezembro de 2026.',
    },
    {
      q: 'A empresa pode pagar o 13º salário em parcela única?',
      a: 'Não. A legislação trabalhista brasileira (Lei 4.749/1965) não autoriza o pagamento em parcela única no mês de dezembro. A empresa que pagar tudo apenas no final do ano está sujeita a autuações e multas administrativas pelo Ministério do Trabalho.',
    },
    {
      q: 'O que acontece se a empresa atrasar o pagamento do 13º?',
      a: 'O empregador comete infração trabalhista e fica sujeito a multa de R$ 170,25 por empregado prejudicado, dobrada em caso de reincidência, além de possíveis penalidades previstas na convenção coletiva da categoria.',
    },
    {
      q: 'Como calcular os avos de quem trabalhou menos de um ano?',
      a: 'Divide-se o salário por 12 e multiplica-se pelo número de meses em que o empregado trabalhou 15 dias ou mais. Períodos inferiores a 15 dias dentro do mesmo mês civil não são computados na contagem.',
    },
    {
      q: 'As horas extras e adicional noturno entram no cálculo do 13º salário?',
      a: 'Sim. Todas as parcelas de natureza estritamente salarial pagas com habitualidade (horas extras, adicional noturno, adicional de periculosidade e insalubridade) integram o 13º pela sua média apurada no ano.',
    },
    {
      q: 'A primeira parcela do 13º salário sofre descontos?',
      a: 'Não. A primeira parcela do décimo terceiro é depositada de forma integral e sem nenhum desconto. Todas as retenções legais de INSS e IRRF incidem cumulativamente na segunda parcela.',
    },
    {
      q: 'O trabalhador demitido por justa causa recebe 13º salário?',
      a: 'Não. Na rescisão de contrato por demissão com justa causa (Artigo 482 da CLT), o trabalhador perde o direito a receber a gratificação natalina proporcional.',
    },
    {
      q: 'Posso solicitar a 1ª parcela do 13º junto com as férias?',
      a: 'Sim. O empregado tem direito a receber o adiantamento do 13º no início de suas férias, desde que faça a solicitação por escrito à empresa até o dia 31 de janeiro daquele ano.',
    },
  ],
  sources: [
    {
      label: 'Lei nº 4.090/1962 - Institui a Gratificação de Natal (Planalto)',
      url: 'https://www.planalto.gov.br/ccivil_03/leis/l4090.htm',
    },
    {
      label: 'Lei nº 4.749/1965 - Pagamento do 13º em Duas Parcelas (Planalto)',
      url: 'https://www.planalto.gov.br/ccivil_03/leis/l4749.htm',
    },
    {
      label: 'Decreto nº 57.155/1965 - Regulamentação do 13º Salário (Planalto)',
      url: 'https://www.planalto.gov.br/ccivil_03/decreto/d57155.htm',
    },
    {
      label: 'Tribunal Superior do Trabalho - Súmula nº 45 (TST)',
      url: 'https://www.tst.jus.br/sumulas',
    },
    {
      label: 'Ministério do Trabalho e Emprego - Orientações Oficiais',
      url: 'https://www.gov.br/trabalho-e-emprego',
    },
  ],
  relatedTools: [
    {
      title: 'Calculadora de Salário Líquido 2026',
      path: '/br/calculadora-salario-liquido',
      description: 'Descubra quanto você recebe após as deduções oficiais de INSS e IRRF.',
    },
    {
      title: 'Calculadora de Férias CLT',
      path: '/br/calculadora-ferias',
      description: 'Simule o cálculo das suas férias com o terço constitucional e abono pecuniário.',
    },
    {
      title: 'Calculadora de Rescisão Trabalhista',
      path: '/br/calculadora-rescisao',
      description: 'Calcule seus direitos em caso de demissão, aviso prévio e multa do FGTS.',
    },
  ],
  relatedGuides: [
    {
      title: 'Quando Cai o 13º Salário em 2026?',
      path: '/br/guias/quando-cai-o-13-salario',
      description: 'Confira as datas limites oficiais e regras para receber a 1ª e a 2ª parcela.',
    },
    {
      title: 'Tabela do INSS 2026 Atualizada',
      path: '/br/tabela-inss',
      description: 'Veja as alíquotas progressivas e faixas salariais para cálculo do desconto.',
    },
  ],
  updatedAt: '2026-01-01',
};
