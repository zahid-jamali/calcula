import { PageContent } from '../types';

export const content: PageContent = {
  metaTitle: 'Calculadora de Salário Líquido 2026 CLT | Calcula',
  metaDescription:
    'Calcule seu salário líquido de 2026 com base nas tabelas progressivas de INSS e IRRF, dedução de dependentes, vale-transporte e pensão alimentícia.',
  h1: 'Calculadora de Salário Líquido 2026: Descontos CLT',
  quickAnswer:
    'O salário líquido é a quantia efetivamente creditada na conta do trabalhador após a dedução obrigatória de encargos legais da folha de pagamento. O cálculo subtrai do salário bruto as alíquotas progressivas do INSS (7,5% a 14%), o Imposto de Renda Retido na Fonte (IRRF) e eventuais benefícios como vale-transporte.',
  howItWorks: [
    {
      step: 1,
      title: 'Determinação do Salário Bruto',
      description:
        'Soma-se o salário contratual nominal a todos os rendimentos tributáveis do mês, incluindo horas extras com adicionais, gratificações, comissões e adicional noturno.',
      formula: 'Salário Base + Adicionais e Horas Extras',
      legalArticle: 'Art. 457 da CLT',
    },
    {
      step: 2,
      title: 'Dedução do INSS Progressivo',
      description:
        'Aplica-se a tabela progressiva da Previdência Social para 2026, com faixas de 7,5% a 14% incidentes em cada degrau, respeitando o teto máximo de contribuição de R$ 8.157,41.',
      formula: '(Salário × Alíquota da Faixa) - Parcela a Deduzir',
      legalArticle: 'Art. 28 da Lei 8.212/1991 e EC 103/2019',
    },
    {
      step: 3,
      title: 'Apuração da Base de Cálculo do IRRF',
      description:
        'Subtrai-se do salário bruto o INSS retido e o desconto legal por dependente (R$ 189,59 cada) ou aplica-se o desconto simplificado mensal de R$ 564,80.',
      formula: 'Bruto - INSS - (Dependentes × R$ 189,59) ou Bruto - R$ 564,80',
      legalArticle: 'Art. 7º da Lei 7.713/1988 e Lei 14.663/2023',
    },
    {
      step: 4,
      title: 'Cálculo do IRRF Retido na Fonte',
      description:
        'Compara-se a base tributável com a tabela progressiva oficial da Receita Federal (isento até R$ 2.259,20 e alíquotas de 7,5% a 27,5%), subtraindo a parcela dedutível.',
      formula: '(Base IRRF × Alíquota) - Dedução da Faixa',
      legalArticle: 'Instrução Normativa RFB nº 1.500/2014',
    },
    {
      step: 5,
      title: 'Desconto de Benefícios e Outras Retenções',
      description:
        'Descontam-se itens contratualmente autorizados, como até 6% de vale-transporte sobre o salário base, coparticipação em plano de saúde e pensão judicial.',
      formula: 'Bruto - INSS - IRRF - VT - Outros Descontos',
      legalArticle: 'Lei nº 7.418/1985 e Art. 462 da CLT',
    },
  ],
  article: `
## Diferença Entre Salário Bruto e Salário Líquido

O **salário bruto** (também denominado remuneração nominal) é o montante total ajustado no contrato de trabalho celebrado entre empregado e empregador, antes da aplicação de quaisquer retenções fiscais ou previdenciárias.

Já o **salário líquido** representa o montante que é creditado na conta bancária do profissional no quinto dia útil de cada mês. Ele reflete o resultado final da apuração mensal após as deduções imperativas determinadas pela legislação federal (CLT, Previdência Social e Receita Federal) e pelos benefícios contratados pelo trabalhador.

---

## Como Funciona a Tabela Progressiva do INSS 2026?

A contribuição devida pelos segurados empregados ao Instituto Nacional do Seguro Social (INSS) obedece à sistemática de alíquotas progressivas instituída pela Emenda Constitucional nº 103/2019:

- **1ª Faixa (até R$ 1.518,00)**: alíquota de 7,5% (dedução de R$ 0,00);
- **2ª Faixa (de R$ 1.518,01 até R$ 2.793,88)**: alíquota de 9,0% (dedução de R$ 22,77);
- **3ª Faixa (de R$ 2.793,89 até R$ 4.190,83)**: alíquota de 12,0% (dedução de R$ 106,59);
- **4ª Faixa (de R$ 4.190,84 até R$ 8.157,41)**: alíquota de 14,0% (dedução de R$ 190,40);
- **Teto Previdenciário**: Para salários superiores ao teto de R$ 8.157,41, a retenção fica fixada no valor máximo de R$ 951,64 mensais.

---

## Regras de Tributação do IRRF e Desconto Simplificado

O Imposto de Renda Retido na Fonte (IRRF) é administrado pela Secretaria Especial da Receita Federal do Brasil. Para calcular a quantia retida, o trabalhador pode se beneficiar do modelo que propiciar a menor tributação:

1. **Deduções Legais Tradicionais**: Subtrai-se a contribuição previdenciária (INSS), a quantia de **R$ 189,59 por cada dependente legal informado**, além de eventuais pensões alimentícias fixadas por decisão judicial.
2. **Dedução Simplificada Mensal**: A legislação autoriza o abatimento alternativo fixo de **R$ 564,80** diretamente sobre o rendimento bruto, dispensando a comprovação de despesas ou dependentes quando essa opção resultar em retenção menor.

A faixa de isenção da tabela oficial atinge rendimentos tributáveis de até **R$ 2.259,20**. Quem ganha até 2 salários mínimos nacionais (R$ 3.036,00) usufrui de isenção prática total graças à combinação da tabela com o desconto simplificado.

---

## Principais Descontos Autorizados em Folha de Pagamento

Além dos tributos estatais, o Artigo 462 da CLT prevê descontos legítimos na folha mensal:
- **Vale-Transporte (VT)**: Limitado ao teto de **6% do salário base** (excluídos adicionais e gratificações), conforme preconiza a Lei nº 7.418/1985. Caso o custo real das passagens seja inferior a 6%, desconta-se apenas o valor gasto.
- **Vale-Alimentação e Refeição (PAT)**: Quando a empresa está inscrita no Programa de Alimentação do Trabalhador, o desconto legal máximo é limitado a 20% do custo do benefício concedido.
- **Faltas e DSR**: Faltas não justificadas por atestado médico ocasionam a perda dos dias de ausência mais o desconto correspondente ao Descanso Semanal Remunerado (Lei 605/1949).
`,
  examples: [
    {
      title: 'Exemplo 1: Salário Bruto de R$ 3.500,00 sem Dependentes',
      scenario:
        'Trabalhador contratado via CLT com remuneração mensal de R$ 3.500,00, sem dependentes legais e optante pelo benefício do vale-transporte integral.',
      inputs: {
        'Salário Bruto': 'R$ 3.500,00',
        'Dependentes': '0',
        'Desconto de Vale-Transporte': '6% (R$ 210,00)',
      },
      breakdown: [
        {
          item: 'Salário Bruto Contratual',
          amount: 'R$ 3.500,00',
          note: 'Base total de proventos',
        },
        {
          item: 'Desconto Previdenciário (INSS)',
          amount: '- R$ 313,41',
          note: '(R$ 3.500,00 × 12%) - R$ 106,59',
        },
        {
          item: 'Desconto de IRRF Retido na Fonte',
          amount: '- R$ 58,84',
          note: 'Aplicação da dedução simplificada mensal de R$ 564,80',
        },
        {
          item: 'Desconto de Vale-Transporte (6%)',
          amount: '- R$ 210,00',
          note: '6% sobre R$ 3.500,00 (Lei nº 7.418/1985)',
        },
      ],
      total: 'R$ 2.917,75 Valor Líquido em Conta Bancária',
    },
    {
      title: 'Exemplo 2: Salário Bruto de R$ 6.000,00 com 2 Dependentes e Pensão',
      scenario:
        'Profissional com salário de R$ 6.000,00, dois dependentes declarados no RH e pensão alimentícia judicial de R$ 600,00 descontada em folha.',
      inputs: {
        'Salário Bruto': 'R$ 6.000,00',
        'Dependentes': '2 (R$ 379,18 dedução)',
        'Pensão Alimentícia': 'R$ 600,00',
      },
      breakdown: [
        {
          item: 'Salário Bruto Contratual',
          amount: 'R$ 6.000,00',
          note: 'Base total de proventos',
        },
        {
          item: 'Desconto Previdenciário (INSS)',
          amount: '- R$ 649,60',
          note: '(R$ 6.000,00 × 14%) - R$ 190,40',
        },
        {
          item: 'Pensão Alimentícia Fixada Judicialmente',
          amount: '- R$ 600,00',
          note: 'Dedução autorizada da base tributária',
        },
        {
          item: 'Desconto de IRRF Retido na Fonte',
          amount: '- R$ 320,75',
          note: 'Base R$ 4.371,22 na alíquota de 22,5% menos R$ 662,77',
        },
      ],
      total: 'R$ 4.429,65 Salário Líquido Creditado',
    },
  ],
  faqs: [
    {
      q: 'Qual é a diferença entre salário bruto e salário líquido?',
      a: 'Salário bruto é o valor total registrado em carteira sem nenhum desconto. Salário líquido é o montante que sobra após as deduções legais obrigatórias de INSS, Imposto de Renda e benefícios.',
    },
    {
      q: 'Como é calculado o desconto do INSS no salário de 2026?',
      a: 'O INSS adota alíquotas progressivas distribuídas por faixas salariais: 7,5% até R$ 1.518,00; 9% até R$ 2.793,88; 12% até R$ 4.190,83; e 14% até o teto de R$ 8.157,41.',
    },
    {
      q: 'Quem tem direito à isenção do Imposto de Renda no salário?',
      a: 'Trabalhadores com base tributável de até R$ 2.259,20 pela tabela tradicional ou até R$ 2.824,00 com aplicação do desconto simplificado de R$ 564,80 são isentos de retenção na fonte.',
    },
    {
      q: 'Quanto pode ser descontado de vale-transporte do salário?',
      a: 'Conforme a Lei nº 7.418/1985, o empregador pode descontar no máximo até 6% do salário básico do empregado, sendo vedado o desconto se a despesa real de deslocamento for inferior.',
    },
    {
      q: 'Como os dependentes reduzem o valor do Imposto de Renda retido?',
      a: 'Cada dependente legal (cônjuge, filhos até 21 anos ou 24 anos cursando ensino superior) reduz em R$ 189,59 a base de cálculo mensal do imposto retido na fonte.',
    },
    {
      q: 'O que é o desconto simplificado mensal de R$ 564,80?',
      a: 'É um abatimento automático facultativo que a empresa pode aplicar diretamente sobre o rendimento bruto, substituindo as deduções de INSS e dependentes caso propicie menor desconto ao empregado.',
    },
    {
      q: 'Qual é a data limite para a empresa pagar o salário mensal?',
      a: 'Pelo Artigo 459, § 1º da CLT, o pagamento do salário mensal deve ser efetuado, no mais tardar, até o 5º dia útil do mês subsequente ao vencido.',
    },
    {
      q: 'O vale-refeição pode ser descontado integralmente do salário?',
      a: 'Não. Pelo Programa de Alimentação do Trabalhador (PAT), a empresa pode descontar uma coparticipação máxima de 20% sobre o valor do benefício alimentação ou refeição fornecido.',
    },
  ],
  sources: [
    {
      label: 'Ministério da Previdência Social - Tabela de Contribuição 2026',
      url: 'https://www.gov.br/inss',
    },
    {
      label: 'Receita Federal do Brasil - Tabelas de Incidência do IRPF',
      url: 'https://www.gov.br/receitafederal/pt-br/assuntos/meu-imposto-de-renda/tabelas',
    },
    {
      label: 'Consolidação das Leis do Trabalho (Decreto-Lei nº 5.452/1943)',
      url: 'https://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm',
    },
    {
      label: 'Lei nº 7.418/1985 - Instituição do Vale-Transporte (Planalto)',
      url: 'https://www.planalto.gov.br/ccivil_03/leis/l7418.htm',
    },
  ],
  relatedTools: [
    {
      title: 'Calculadora de Horas Extras CLT',
      path: '/br/calculadora-hora-extra',
      description: 'Simule o valor das horas extras com adicional de 50%, 100% e reflexo no DSR.',
    },
    {
      title: 'Calculadora de 13º Salário',
      path: '/br/calculadora-13-salario',
      description: 'Calcule o décimo terceiro líquido com as deduções de INSS e IRRF.',
    },
    {
      title: 'Calculadora de Férias CLT',
      path: '/br/calculadora-ferias',
      description: 'Descubra quanto você recebe de férias líquidas com abono e terço constitucional.',
    },
  ],
  relatedGuides: [
    {
      title: 'Tabela do INSS 2026: Alíquotas e Faixas',
      path: '/br/tabela-inss',
      description: 'Entenda como funcionam os descontos progressivos da Previdência Social.',
    },
    {
      title: 'Tabela do Imposto de Renda 2026 Atualizada',
      path: '/br/tabela-irrf',
      description: 'Guia completo com faixas, deduções por dependente e desconto simplificado.',
    },
  ],
  updatedAt: '2026-01-01',
};
