import { PageContent } from '../types';

export const content: PageContent = {
  metaTitle: 'Tabela do IRRF 2026: Alíquotas e Deduções | Calcula',
  metaDescription:
    'Consulte a tabela oficial do IRRF 2026: faixas de 7,5% a 27,5%, dedução de dependentes, desconto simplificado de R$ 564,80 e exemplos práticos de cálculo.',
  h1: 'Tabela do IRRF 2026: Faixas, Alíquotas e Deduções',
  quickAnswer:
    'A tabela progressiva do IRRF em 2026 estabelece alíquotas de 7,5% a 27,5% sobre a base salarial após o desconto do INSS. Rendimentos de até R$ 2.259,20 são isentos, permitindo-se deduzir R$ 189,59 por dependente ou aplicar o desconto simplificado opcional de R$ 564,80 mensais para reduzir o tributo retido.',
  howItWorks: [
    {
      step: 1,
      title: 'Determinação da Base de Cálculo Tributável',
      description:
        'Subtrai-se da remuneração bruta total o valor do INSS retido na fonte e as deduções legais admitidas (dependentes e pensão alimentícia).',
      formula: 'Base = Rendimento Bruto - INSS - Dependentes - Pensão',
      legalArticle: 'Art. 7º da Lei nº 7.713/1988',
    },
    {
      step: 2,
      title: 'Opção Pelo Desconto Simplificado Mensal',
      description:
        'A empresa compara a dedução legal com o desconto simplificado alternativo de R$ 564,80 diretamente sobre o bruto, aplicando o que propiciar menor imposto.',
      formula: 'Base Alternativa = Rendimento Bruto - R$ 564,80',
      legalArticle: 'Lei nº 14.663/2023 e Instrução Normativa RFB nº 2.141/2023',
    },
    {
      step: 3,
      title: 'Aplicação da Alíquota e Parcela a Deduzir',
      description:
        'Multiplica-se a base apurada pela alíquota respectiva da faixa (7,5% a 27,5%) e abate-se a parcela a deduzir estabelecida na tabela oficial.',
      formula: '(Base Tributável × Alíquota) - Parcela a Deduzir',
      legalArticle: 'Tabela Progressiva Oficial da Receita Federal',
    },
  ],
  article: `
## Como Funciona o Imposto de Renda Retido na Fonte (IRRF)?

O Imposto sobre a Renda Retido na Fonte (IRRF) é uma antecipação tributária compulsória gerida pela Secretaria Especial da Receita Federal do Brasil, na qual a fonte pagadora (empregador) é responsável por reter mensalmente o tributo devido e repassá-lo ao Tesouro Nacional.

No caso dos trabalhadores regidos pela CLT, a incidência ocorre sob o princípio da capacidade contributiva, utilizando alíquotas progressivas com parcelas redutoras fixas que evitam saltos abruptos de tributação na mudança de faixa.

---

## Tabela Progressiva Mensal do IRRF 2026

A tabela oficial da Receita Federal para o ano de 2026 estabelece os seguintes parâmetros para apuração mensal dos rendimentos do trabalho assalariado:

| Base de Cálculo Mensal (R$) | Alíquota Nominal (%) | Parcela a Deduzir do IR (R$) |
| :--- | :--- | :--- |
| **Até R$ 2.259,20** | **Isento (0,0%)** | R$ 0,00 |
| **De R$ 2.259,21 até R$ 2.826,65** | **7,5%** | R$ 169,44 |
| **De R$ 2.826,66 até R$ 3.751,05** | **15,0%** | R$ 381,44 |
| **De R$ 3.751,06 até R$ 4.664,68** | **22,5%** | R$ 662,77 |
| **Acima de R$ 4.664,68** | **27,5%** | R$ 896,00 |

---

## Deduções Legais Admitidas na Folha Mensal

Para apurar a base líquida sobre a qual incidirá a tabela acima, o empregador deve obrigatoriamente abater:
1. **Contribuição Previdenciária Oficial (INSS)**: Valor integral retido no próprio holerite do mês;
2. **Dedução por Dependente**: **R$ 189,59 por cada dependente legalmente comprovado** (cônjuge ou companheiro, filhos e enteados até 21 anos ou até 24 anos se universitários);
3. **Pensão Alimentícia Homologada**: Valor integral fixado em decisão judicial ou escritura pública;
4. **Previdência Complementar (PGBL ou Previdência Fechada)**: Contribuições a planos patrocinados pela entidade empregadora.

---

## A Sistemática do Desconto Simplificado de R$ 564,80

Instituído pela Lei nº 14.663/2023, o contribuinte pode se valer de um modelo simplificado que consiste no **desconto automático de R$ 564,80** diretamente sobre a remuneração bruta:
- Esse mecanismo é alternativo às deduções convencionais (INSS + dependentes).
- A fonte pagadora é obrigada por lei a aplicar o método mais benéfico para o empregado, isto é, aquele que resultar no menor imposto retido.
- **Isenção Prática Ampliada**: Graças ao desconto simplificado, trabalhadores com rendimentos brutos de até R$ 2.824,00 ficam totalmente isentos de qualquer retenção de Imposto de Renda na fonte (R$ 2.824,00 - R$ 564,80 = R$ 2.259,20, enquadrando-se com base zero de imposto).
`,
  examples: [
    {
      title: 'Exemplo 1: Salário Bruto de R$ 3.800,00 com 1 Dependente',
      scenario:
        'Trabalhador recebe R$ 3.800,00 mensais com retenção previdenciária de R$ 349,41 e 1 dependente declarado à Receita Federal.',
      inputs: {
        'Salário Bruto': 'R$ 3.800,00',
        'Desconto de INSS': 'R$ 349,41',
        'Dependentes Legais': '1 dependente (R$ 189,59)',
      },
      breakdown: [
        {
          item: 'Remuneração Bruta Mensal',
          amount: 'R$ 3.800,00',
          note: 'Base inicial de apuração',
        },
        {
          item: 'Dedução Previdenciária (INSS)',
          amount: '- R$ 349,41',
          note: 'Tabela progressiva do INSS',
        },
        {
          item: 'Dedução Legal de 1 Dependente',
          amount: '- R$ 189,59',
          note: 'Valor legal fixado pela RFB',
        },
        {
          item: 'Base de Cálculo Líquida Tributável',
          amount: 'R$ 3.261,00',
          note: 'R$ 3.800,00 - R$ 349,41 - R$ 189,59 (Faixa de 15%)',
        },
        {
          item: 'Aplicação da Alíquota Nominal (15%)',
          amount: 'R$ 489,15',
          note: 'R$ 3.261,00 × 0,15',
        },
        {
          item: 'Subtração da Parcela a Deduzir da Faixa',
          amount: '- R$ 381,44',
          note: 'Dedução oficial da faixa de 15%',
        },
      ],
      total: 'R$ 107,71 Valor do IRRF Retido na Fonte',
    },
    {
      title: 'Exemplo 2: Salário Bruto de R$ 5.500,00 (Faixa Máxima de 27,5%)',
      scenario:
        'Profissional com salário de R$ 5.500,00 sem dependentes legais e desconto previdenciário de R$ 579,60.',
      inputs: {
        'Salário Bruto': 'R$ 5.500,00',
        'Desconto de INSS': 'R$ 579,60',
        'Dependentes': '0',
      },
      breakdown: [
        {
          item: 'Base de Cálculo Tributável (R$ 5.500 - R$ 579,60)',
          amount: 'R$ 4.920,40',
          note: 'Enquadramento na 5ª faixa (alíquota de 27,5%)',
        },
        {
          item: 'Imposto Bruto Calculado (R$ 4.920,40 × 27,5%)',
          amount: 'R$ 1.353,11',
          note: 'Aplicação da alíquota máxima',
        },
        {
          item: 'Subtração da Parcela a Deduzir',
          amount: '- R$ 896,00',
          note: 'Compensação das faixas progressivas inferiores',
        },
      ],
      total: 'R$ 457,11 Imposto Retido no Holerite (Alíquota Real Efetiva: 8,31%)',
    },
  ],
  faqs: [
    {
      q: 'Qual é o valor da faixa de isenção do Imposto de Renda em 2026?',
      a: 'A faixa com alíquota zero da tabela oficial compreende valores de base tributável de até R$ 2.259,20. Com o desconto simplificado mensal de R$ 564,80, quem ganha até R$ 2.824,00 brutos fica isento.',
    },
    {
      q: 'Quanto cada dependente deduz do Imposto de Renda mensal?',
      a: 'Cada dependente legal cadastrado junto ao departamento de recursos humanos reduz em R$ 189,59 a base de cálculo mensal do imposto retido na fonte.',
    },
    {
      q: 'O que é o desconto simplificado de R$ 564,80?',
      a: 'É um abatimento automático opcional que a empresa aplica sobre o rendimento bruto caso seja mais vantajoso ao trabalhador do que a soma das deduções de INSS e dependentes.',
    },
    {
      q: 'O 13º salário entra na declaração anual ou é tributação exclusiva?',
      a: 'O 13º salário possui tributação exclusiva na fonte. O imposto descontado na 2ª parcela não pode ser restituído nem compensado na Declaração Anual de Ajuste do IRPF.',
    },
    {
      q: 'Quem tem direito a colocar filhos como dependentes no IRRF?',
      a: 'Filhos até 21 anos de idade ou até 24 anos que estejam cursando ensino superior ou escola técnica de segundo grau, além de filhos incapacitados para o trabalho em qualquer idade.',
    },
    {
      q: 'Pensão alimentícia pode ser deduzida na íntegra do imposto retido?',
      a: 'Sim. A totalidade do valor pago a título de pensão alimentícia fixada em acordo judicial homologado ou escritura pública pode ser abatida integralmente da base do IRRF.',
    },
    {
      q: 'O que é alíquota efetiva do Imposto de Renda?',
      a: 'É o percentual real do salário que foi retido como imposto (valor do imposto dividido pelo rendimento bruto), sendo substancialmente inferior à alíquota nominal de topo.',
    },
    {
      q: 'Como conferir o valor do IRRF retido no informe de rendimentos?',
      a: 'O empregador fornece no início de cada ano o Comprovante de Rendimentos Pagos e de Retenção do Imposto de Renda, onde constam os rendimentos tributáveis e o imposto total retido.',
    },
  ],
  sources: [
    {
      label: 'Receita Federal do Brasil - Tabelas de Incidência Mensal do IRPF',
      url: 'https://www.gov.br/receitafederal/pt-br/assuntos/meu-imposto-de-renda/tabelas',
    },
    {
      label: 'Lei nº 7.713/1988 - Altera a Legislação do Imposto de Renda (Planalto)',
      url: 'https://www.planalto.gov.br/ccivil_03/leis/l7713.htm',
    },
    {
      label: 'Lei nº 14.663/2023 - Institui o Desconto Simplificado Mensal (Planalto)',
      url: 'https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2023/lei/l14663.htm',
    },
    {
      label: 'Instrução Normativa RFB nº 1.500/2014 Consolidada',
      url: 'https://normas.receita.fazenda.gov.br',
    },
  ],
  relatedTools: [
    {
      title: 'Calculadora de Salário Líquido',
      path: '/br/calculadora-salario-liquido',
      description: 'Simule o desconto do IRRF e do INSS no cálculo do seu salário líquido.',
    },
    {
      title: 'Calculadora de 13º Salário',
      path: '/br/calculadora-13-salario',
      description: 'Veja quanto de Imposto de Renda é retido na 2ª parcela do décimo terceiro.',
    },
    {
      title: 'Calculadora de Rescisão Trabalhista',
      path: '/br/calculadora-rescisao',
      description: 'Entenda quais verbas rescisórias são tributadas pelo IRRF e quais são isentas.',
    },
  ],
  relatedGuides: [
    {
      title: 'Tabela do INSS 2026: Alíquotas e Faixas',
      path: '/br/tabela-inss',
      description: 'Consulte a tabela oficial de desconto previdenciário e teto de contribuição.',
    },
    {
      title: 'Salário Mínimo 2026 Oficial',
      path: '/br/salario-minimo',
      description: 'Histórico de reajustes, valor da diária e reflexos nos pisos salariais.',
    },
  ],
  updatedAt: '2026-01-01',
};
