import { PageContent } from '../../types';

export const content: PageContent = {
  metaTitle: 'Quando Cai o 13º Salário em 2026? Datas e Prazos CLT',
  metaDescription:
    'Descubra as datas de pagamento do 13º salário em 2026: prazos da 1ª e 2ª parcela, adiantamento nas férias, regras da CLT e multas da empresa por atraso.',
  h1: 'Quando Cai o 13º Salário em 2026: Datas Oficiais CLT',
  quickAnswer:
    'O décimo terceiro salário de 2026 é pago obrigatoriamente em duas parcelas pela CLT: a primeira parcela cai na conta entre 1º de fevereiro e 30 de novembro, sem descontos; a segunda parcela deve ser quitada até o dia 20 de dezembro, com as deduções de INSS e Imposto de Renda.',
  howItWorks: [
    {
      step: 1,
      title: 'Calendário da 1ª Parcela (Adiantamento)',
      description:
        'A empresa deve pagar 50% do valor bruto do salário contratual entre 1º de fevereiro e 30 de novembro, de forma integral sem deduções fiscais ou previdenciárias.',
      formula: 'Prazo Limite: 30 de Novembro de 2026',
      legalArticle: 'Art. 2º da Lei nº 4.749/1965',
    },
    {
      step: 2,
      title: 'Calendário da 2ª Parcela (Quitação Definitiva)',
      description:
        'A quitação final ocorre impreterivelmente até o dia 20 de dezembro. Caso recaia em fim de semana ou feriado, deve ser antecipada para o dia útil anterior.',
      formula: 'Prazo Limite: 20 de Dezembro de 2026',
      legalArticle: 'Art. 1º do Decreto nº 57.155/1965',
    },
    {
      step: 3,
      title: 'Adiantamento Solicitado com as Férias',
      description:
        'O trabalhador pode antecipar a 1ª parcela do 13º para a época de suas férias, desde que faça a solicitação formal por escrito até 31 de janeiro.',
      formula: 'Requerimento formal até 31/01',
      legalArticle: 'Art. 2º, § 2º da Lei nº 4.749/1965',
    },
    {
      step: 4,
      title: 'Fiscalização e Penalidades por Atraso',
      description:
        'Atrasos nos depósitos ensejam autuação pela auditoria fiscal do trabalho com multa de R$ 170,25 por colaborador prejudicado, além de juros e correção monetária.',
      formula: 'Multa Administrativa do MTE',
      legalArticle: 'Lei nº 7.855/1989',
    },
  ],
  article: `
## Calendário Oficial de Pagamento do 13º Salário em 2026

O pagamento da Gratificação Natalina (conhecida popularmente como 13º salário) é regido pela Lei Federal nº 4.090/1962 e pela Lei Federal nº 4.749/1965. A legislação veda categoricamente o pagamento em parcela única no mês de dezembro, determinando a divisão obrigatória em duas parcelas cronológicas:

### 1ª Parcela do 13º Salário:
- **Janela Legal**: De 1º de fevereiro até **30 de novembro de 2026**;
- **Composição**: Corresponde a 50% exatos do salário bruto a que o funcionário tem direito no mês anterior ao pagamento;
- **Sem Descontos**: Nesta primeira metade, é estritamente proibido efetuar qualquer dedução de INSS ou de Imposto de Renda Retido na Fonte (IRRF).

### 2ª Parcela do 13º Salário:
- **Data Limite**: Até o dia **20 de dezembro de 2026**;
- **Regra de Antecipação**: Se o dia 20 de dezembro coincidir com um domingo ou feriado nacional, o depósito bancário deve ser obrigatoriamente creditado na conta no último dia útil imediatamente anterior (sexta-feira);
- **Concentração dos Descontos**: Nesta etapa, a empresa calcula o tributo do INSS e do IRRF sobre o valor bruto total do décimo terceiro e deduz a totalidade desses encargos e o valor já adiantado na 1ª parcela.

---

## Como Solicitar o 13º Salário Antecipado nas Férias?

Muitos trabalhadores desconhecem a faculdade prevista no Artigo 2º, § 2º da Lei nº 4.749/1965: o empregado tem o direito assegurado de receber o adiantamento da 1ª parcela do décimo terceiro junto com a remuneração de suas férias anuais.

Para exercer esse direito, o trabalhador deve protocolar uma **carta de solicitação escrita junto ao setor de Recursos Humanos até o dia 31 de janeiro** do ano corrente. Feito isso no prazo, a empresa é obrigada a antecipar os 50% na data de concessão das férias, sem margem para recusa discricionária.

---

## A Empresa Pode Pagar em Parcela Única?

Não. O pagamento do 13º salário em parcela única somente em dezembro constitui **infração trabalhista formal**. Mesmo que haja termo assinado ou solicitação informal do próprio funcionário, o Ministério do Trabalho entende que o direito ao adiantamento até novembro é norma de ordem pública indisponível.

A empresa que descumprir o fracionamento legal fica sujeita a autuações e multas administrativas aplicadas pela Auditoria Fiscal do Trabalho, calculadas por empregado ativo na folha.

---

## O Que Fazer se a Empresa Atrasar o Pagamento?

Se a empresa não pagar a 1ª parcela até 30 de novembro ou a 2ª parcela até 20 de dezembro:
1. Notifique formalmente o setor de Recursos Humanos ou o gestor imediato por e-mail registrado;
2. Procure o sindicato representativo da categoria profissional, que pode fiscalizar e exigir multas convencionais;
3. Registre uma denúncia anônima ou identificada perante o portal do Ministério do Trabalho e Emprego (Gov.br);
4. Em ações trabalhistas, o empregado tem direito ao pagamento corrigido com juros moratórios e correção pelo índice IPCA-E / SELIC.
`,
  examples: [
    {
      title: 'Exemplo 1: Empregado com Salário de R$ 2.800,00 e 12 Meses de Casa',
      scenario:
        'Trabalhador que atuou o ano de 2026 inteiro com remuneração de R$ 2.800,00 recebe as duas parcelas nos prazos legais.',
      inputs: {
        'Salário Bruto': 'R$ 2.800,00',
        'Meses Trabalhados': '12 meses (integral)',
        'Data 1ª Parcela': '30/11/2026',
        'Data 2ª Parcela': '18/12/2026 (dia útil)',
      },
      breakdown: [
        {
          item: '1ª Parcela Recebida em Novembro (50% Bruto)',
          amount: 'R$ 1.400,00',
          note: 'R$ 2.800,00 ÷ 2 (sem qualquer retenção de impostos)',
        },
        {
          item: 'Desconto Previdenciário (INSS sobre R$ 2.800)',
          amount: '- R$ 229,41',
          note: 'Tabela progressiva incidente sobre a totalidade',
        },
        {
          item: 'Desconto de IRRF Retido na Fonte',
          amount: '- R$ 23,35',
          note: 'Base de R$ 2.570,59 na alíquota de 7,5%',
        },
        {
          item: '2ª Parcela Recebida em Dezembro',
          amount: 'R$ 1.147,24',
          note: 'R$ 2.800,00 - R$ 1.400,00 - R$ 229,41 - R$ 23,35',
        },
      ],
      total: 'R$ 2.547,24 Total Líquido Pago nas Duas Datas',
    },
    {
      title: 'Exemplo 2: Adiantamento da 1ª Parcela Junto com Férias em Julho',
      scenario:
        'Profissional com salário de R$ 4.000,00 solicitou adiantamento em janeiro e saiu de férias no mês de julho de 2026.',
      inputs: {
        'Salário Contratual': 'R$ 4.000,00',
        'Mês de Gozo de Férias': 'Julho de 2026',
        'Requerimento Feito': 'Até 31 de janeiro de 2026',
      },
      breakdown: [
        {
          item: '1ª Parcela do 13º Adiantada nas Férias (Julho)',
          amount: 'R$ 2.000,00',
          note: 'Creditada 2 dias antes do início do descanso',
        },
        {
          item: 'Desconto Previdenciário INSS Total (em Dezembro)',
          amount: '- R$ 373,41',
          note: 'Incidência sobre o total anual de R$ 4.000',
        },
        {
          item: 'Desconto de IRRF Total (em Dezembro)',
          amount: '- R$ 162,55',
          note: 'Base de R$ 3.626,59 na faixa de 15%',
        },
        {
          item: '2ª Parcela Paga em Dezembro',
          amount: 'R$ 1.464,04',
          note: 'R$ 4.000,00 - R$ 2.000,00 - R$ 373,41 - R$ 162,55',
        },
      ],
      total: 'R$ 3.464,04 Soma Líquida das Duas Parcelas no Ano',
    },
  ],
  faqs: [
    {
      q: 'Qual é o último dia para a empresa pagar a primeira parcela do 13º?',
      a: 'A data limite improrrogável estabelecida por lei para pagamento da primeira parcela é o dia 30 de novembro de 2026.',
    },
    {
      q: 'Até quando a empresa deve depositar a segunda parcela do 13º?',
      a: 'A segunda parcela deve ser quitada até o dia 20 de dezembro de 2026, com antecipação obrigatória caso a data coincida com final de semana ou feriado.',
    },
    {
      q: 'Quem tem direito a receber o décimo terceiro salário?',
      a: 'Todos os trabalhadores sob o regime da CLT que tenham trabalhado ao menos 15 dias no ano, além de aposentados e pensionistas do INSS.',
    },
    {
      q: 'A empresa pode pagar a primeira parcela antes de novembro?',
      a: 'Sim. A legislação autoriza que o pagamento do adiantamento ocorra a qualquer momento entre os meses de fevereiro e novembro.',
    },
    {
      q: 'Como funciona o pedido para receber a 1ª parcela nas férias?',
      a: 'O empregado deve fazer uma solicitação formal por escrito ao departamento de RH até o dia 31 de janeiro para garantir o adiantamento no mês de suas férias.',
    },
    {
      q: 'Qual é a multa para a empresa que atrasa o pagamento do 13º?',
      a: 'A empresa comete infração e pode sofrer multa administrativa de R$ 170,25 por trabalhador, além de multas fixadas em acordos coletivos do sindicato.',
    },
    {
      q: 'A 1ª parcela do décimo terceiro tem desconto de INSS?',
      a: 'Não. A primeira parcela é creditada de forma integral e bruta (50% do salário). Todos os descontos tributários ocorrem na segunda parcela.',
    },
    {
      q: 'Quem foi contratado no meio do ano recebe décimo terceiro?',
      a: 'Sim. Recebe o valor proporcional calculado à razão de 1/12 por mês trabalhado por 15 dias ou mais a partir da data de admissão.',
    },
  ],
  sources: [
    {
      label: 'Lei nº 4.090/1962 - Institui a Gratificação de Natal (Planalto)',
      url: 'https://www.planalto.gov.br/ccivil_03/leis/l4090.htm',
    },
    {
      label: 'Lei nº 4.749/1965 - Fixa Prazos para Pagamento do 13º Salário',
      url: 'https://www.planalto.gov.br/ccivil_03/leis/l4749.htm',
    },
    {
      label: 'Decreto nº 57.155/1965 - Regulamentação do 13º Salário (Planalto)',
      url: 'https://www.planalto.gov.br/ccivil_03/decreto/d57155.htm',
    },
    {
      label: 'Ministério do Trabalho e Emprego - Orientações Trabalhistas',
      url: 'https://www.gov.br/trabalho-e-emprego',
    },
  ],
  relatedTools: [
    {
      title: 'Calculadora de 13º Salário',
      path: '/br/calculadora-13-salario',
      description: 'Simule os valores exatos da 1ª e da 2ª parcela com descontos oficiais.',
    },
    {
      title: 'Calculadora de Férias CLT',
      path: '/br/calculadora-ferias',
      description: 'Calcule o valor do descanso remunerado com terço e abono pecuniário.',
    },
    {
      title: 'Calculadora de Salário Líquido',
      path: '/br/calculadora-salario-liquido',
      description: 'Veja quanto sobra do seu salário mensal após retenções de INSS e IRRF.',
    },
  ],
  relatedGuides: [
    {
      title: 'Tabela do INSS 2026: Alíquotas e Faixas',
      path: '/br/tabela-inss',
      description: 'Entenda como o desconto previdenciário incide na 2ª parcela do 13º.',
    },
    {
      title: 'Tabela do Imposto de Renda 2026',
      path: '/br/tabela-irrf',
      description: 'Veja como a Receita Federal tributa o décimo terceiro de forma exclusiva.',
    },
  ],
  updatedAt: '2026-01-01',
};
