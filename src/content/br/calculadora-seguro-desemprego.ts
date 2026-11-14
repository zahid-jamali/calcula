import { PageContent } from '../types';

export const content: PageContent = {
  metaTitle: 'Calculadora do Seguro-Desemprego 2026 | Calcula',
  metaDescription:
    'Calcule o valor e a quantidade de parcelas do seguro-desemprego em 2026. Simule com a média dos últimos 3 salários segundo as regras do MTE e Codefat.',
  h1: 'Calculadora de Seguro-Desemprego 2026: Parcelas e Valor',
  quickAnswer:
    'O seguro-desemprego é um benefício assistencial temporário concedido a trabalhadores dispensados sem justa causa. O valor da parcela é calculado com base na média dos últimos três salários recebidos antes da demissão, variando entre o salário mínimo de R$ 1.518,00 e o teto máximo de R$ 2.351,09, pago em 3 a 5 quotas.',
  howItWorks: [
    {
      step: 1,
      title: 'Média Salarial dos Três Últimos Meses',
      description:
        'Soma-se a remuneração bruta dos 3 meses anteriores ao da demissão e divide-se por 3 para obter o salário médio base.',
      formula: '(Salário Mês 1 + Salário Mês 2 + Salário Mês 3) ÷ 3',
      legalArticle: 'Art. 5º, § 2º da Lei nº 7.998/1990',
    },
    {
      step: 2,
      title: 'Enquadramento nas Faixas Oficiais do MTE',
      description:
        'Até R$ 2.074,47 multiplica-se por 80%; de R$ 2.074,48 a R$ 3.457,49 aplica-se 50% sobre o excedente somado a R$ 1.659,58; acima de R$ 3.457,49 o valor é fixo.',
      formula: 'Tabela Progressiva CODEFAT 2026',
      legalArticle: 'Resolução CODEFAT nº 467/2005 e Portarias MTE',
    },
    {
      step: 3,
      title: 'Aplicação do Piso e Teto Legal',
      description:
        'Nenhuma parcela pode ser inferior ao salário mínimo vigente de R$ 1.518,00 nem ultrapassar o teto máximo legal de R$ 2.351,09.',
      formula: 'Min(Max(Parcela, R$ 1.518,00), R$ 2.351,09)',
      legalArticle: 'Art. 5º, § 1º da Lei nº 7.998/1990',
    },
    {
      step: 4,
      title: 'Determinação do Número de Parcelas',
      description:
        'Gera entre 3 e 5 parcelas de acordo com a quantidade de solicitações anteriores e o total de meses com carteira assinada nos últimos 36 meses.',
      formula: '3 a 5 parcelas conforme tempo de serviço comprovado',
      legalArticle: 'Art. 4º da Lei nº 7.998/1990 alterada pela Lei 13.134/2015',
    },
  ],
  article: `
## Quem Tem Direito ao Seguro-Desemprego em 2026?

O seguro-desemprego é um dos benefícios sociais mais relevantes garantidos pela Constituição Federal (Artigo 7º, inciso II) e regulamentado pela Lei nº 7.998/1990. Seu objetivo primordial é propiciar assistência financeira temporária ao trabalhador involuntariamente desempregado em decorrência de:
- **Demissão sem justa causa**, inclusive rescisão indireta imposta por culpa do empregador;
- Rescisão decorrente de falência ou encerramento das atividades empresariais;
- Pescadores profissionais artesanais em período de defeso da pesca (seguro-defeso);
- Empregados resgatados de regime de trabalho análogo à escravidão.

Trabalhadores que solicitam demissão voluntária ou que são dispensados com justa causa não fazem jus ao recebimento de qualquer parcela do benefício.

---

## Critérios de Elegibilidade e Quantidade de Parcelas

As regras vigentes (decorrentes da Lei nº 13.134/2015) estipulam exigências distintas conforme a quantidade de vezes que o benefício foi requerido na trajetória profissional do cidadão:

### 1ª Solicitação:
- **4 parcelas**: Ter trabalhado com carteira assinada entre 12 e 23 meses nos últimos 36 meses;
- **5 parcelas**: Ter trabalhado ao menos 24 meses com carteira assinada nos últimos 36 meses.

### 2ª Solicitação:
- **3 parcelas**: Ter trabalhado entre 9 e 11 meses nos últimos 36 meses;
- **4 parcelas**: Ter trabalhado entre 12 e 23 meses nos últimos 36 meses;
- **5 parcelas**: Ter trabalhado 24 meses ou mais nos últimos 36 meses.

### 3ª Solicitação em Diante:
- **3 parcelas**: Ter trabalhado ao menos 6 meses consecutivos antes do desligamento;
- **4 parcelas**: Ter trabalhado entre 12 e 23 meses nos últimos 36 meses;
- **5 parcelas**: Ter trabalhado 24 meses ou mais nos últimos 36 meses.

---

## Tabela de Cálculo das Parcelas em 2026

Para encontrar o valor de cada parcela mensal, apura-se a média salarial aritmética simples dos três meses imediatamente anteriores à demissão e aplica-se a tabela do Ministério do Trabalho e Emprego:

| Média dos 3 Últimos Salários | Fórmula de Cálculo da Parcela |
| :--- | :--- |
| Até R$ 2.074,47 | Multiplica-se a média salarial por **0,80 (80%)** |
| De R$ 2.074,48 até R$ 3.457,49 | O que exceder a R$ 2.074,47 multiplica-se por **0,50 (50%)** e soma-se a **R$ 1.659,58** |
| Acima de R$ 3.457,49 | Parcela fixa no teto máximo de **R$ 2.351,09** |

O valor da parcela **nunca poderá ser inferior ao salário mínimo nacional vigente (R$ 1.518,00 em 2026)**.

---

## Prazo e Procedimentos para Dar Entrada no Benefício

O prazo decadencial para dar entrada no requerimento de seguro-desemprego é:
- **Trabalhador formal**: Do **7º até o 120º dia corrido** posterior à data formal da dispensa.
- **Empregado doméstico**: Do **7º até o 90º dia corrido** posterior ao término do contrato.

O procedimento pode ser realizado de forma 100% digital e gratuita pelo aplicativo oficial **Carteira de Trabalho Digital** ou pelo portal **Gov.br**, utilizando o número de requerimento impresso no formulário fornecido pelo empregador no ato do desligamento.
`,
  examples: [
    {
      title: 'Exemplo 1: 1ª Solicitação com Média Salarial de R$ 2.500,00',
      scenario:
        'Trabalhador demitido sem justa causa pedindo seguro-desemprego pela primeira vez, com 18 meses de registro em carteira nos últimos 3 anos e salários anteriores de R$ 2.400, R$ 2.500 e R$ 2.600.',
      inputs: {
        'Média Salarial (3 meses)': 'R$ 2.500,00',
        'Número da Solicitação': '1ª vez',
        'Meses Trabalhados': '18 meses',
      },
      breakdown: [
        {
          item: 'Média Aritmética dos 3 Salários',
          amount: 'R$ 2.500,00',
          note: '(R$ 2.400 + R$ 2.500 + R$ 2.600) ÷ 3',
        },
        {
          item: 'Excedente da 1ª Faixa (R$ 2.500,00 - R$ 2.074,47)',
          amount: 'R$ 425,53',
          note: 'Parcela que incide na alíquota de 50%',
        },
        {
          item: 'Cálculo da Parcela (R$ 425,53 × 50% + R$ 1.659,58)',
          amount: 'R$ 1.872,35',
          note: 'Valor mensal a receber',
        },
        {
          item: 'Quantidade de Parcelas Garantidas',
          amount: '4 parcelas mensais',
          note: 'Enquadramento para 1ª solicitação entre 12 e 23 meses',
        },
      ],
      total: 'R$ 7.489,40 Total do Benefício em 4 Parcelas',
    },
    {
      title: 'Exemplo 2: 3ª Solicitação com Salário Acima do Teto Máximo',
      scenario:
        'Profissional dispensado sem justa causa com salário de R$ 4.000,00 e mais de 24 meses consecutivos de carteira assinada, solicitando pela terceira vez.',
      inputs: {
        'Média Salarial (3 meses)': 'R$ 4.000,00',
        'Número da Solicitação': '3ª vez ou mais',
        'Meses Trabalhados': '26 meses',
      },
      breakdown: [
        {
          item: 'Média Aritmética Apurada',
          amount: 'R$ 4.000,00',
          note: 'Superior ao limite da 2ª faixa (R$ 3.457,49)',
        },
        {
          item: 'Valor Mensal da Parcela',
          amount: 'R$ 2.351,09',
          note: 'Fixado no teto máximo nacional do MTE para 2026',
        },
        {
          item: 'Quantidade de Parcelas Liberadas',
          amount: '5 parcelas mensais',
          note: 'Garantidas por possuir mais de 24 meses comprovados',
        },
      ],
      total: 'R$ 11.755,45 Total do Benefício em 5 Parcelas',
    },
  ],
  faqs: [
    {
      q: 'Qual é o prazo para dar entrada no seguro-desemprego após a demissão?',
      a: 'O trabalhador com vínculo formal sob a CLT tem entre o 7º e o 120º dia corrido após a data da demissão para solicitar o benefício através do portal Gov.br ou da Carteira de Trabalho Digital.',
    },
    {
      q: 'Qual é o valor mínimo e máximo da parcela do seguro-desemprego em 2026?',
      a: 'O valor mínimo é equivalente a um salário mínimo nacional vigente (R$ 1.518,00), e o valor máximo legal estipulado pelo Ministério do Trabalho para 2026 é de R$ 2.351,09 por parcela.',
    },
    {
      q: 'Quem pede demissão ou é demitido por justa causa tem direito?',
      a: 'Não. O benefício do seguro-desemprego é exclusivo para trabalhadores dispensados sem justa causa involuntariamente, ou em casos especiais como rescisão indireta e seguro-defeso.',
    },
    {
      q: 'Quantas parcelas de seguro-desemprego posso receber?',
      a: 'O número de parcelas varia de 3 a 5 quotas mensais, dependendo do tempo com carteira assinada nos últimos 36 meses e de quantas vezes o colaborador já solicitou o benefício na vida.',
    },
    {
      q: 'Posso receber seguro-desemprego se abrir um MEI?',
      a: 'Se você possuir um MEI ativo que gere rendimentos tributáveis comprovados, o benefício poderá ser cancelado. Se o MEI estiver inativo e não auferir renda, é possível recorrer demonstrando ausência de rendimentos.',
    },
    {
      q: 'O que acontece se eu conseguir um novo emprego durante o seguro?',
      a: 'O pagamento do seguro-desemprego é imediatamente suspenso pelo Ministério do Trabalho a partir do momento em que a nova contratação for assinada e transmitida ao eSocial.',
    },
    {
      q: 'Como é calculada a média salarial se trabalhei menos de 3 meses?',
      a: 'Se o empregado tiver apenas 2 salários registrados no período, calcula-se a média aritmética simples desses dois. Se tiver trabalhado apenas 1 mês completo, considera-se a remuneração desse mês.',
    },
    {
      q: 'Quanto tempo demora para a primeira parcela ser depositada na conta?',
      a: 'A primeira parcela costuma ser disponibilizada cerca de 30 dias após a aprovação do requerimento administrativo pelo Ministério do Trabalho.',
    },
  ],
  sources: [
    {
      label: 'Lei nº 7.998/1990 - Regula o Seguro-Desemprego e Abono Salarial',
      url: 'https://www.planalto.gov.br/ccivil_03/leis/l7998.htm',
    },
    {
      label: 'Lei nº 13.134/2015 - Altera regras do Seguro-Desemprego (Planalto)',
      url: 'https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13134.htm',
    },
    {
      label: 'Portal Gov.br - Solicitar Seguro-Desemprego do Trabalhador Formal',
      url: 'https://www.gov.br/pt-br/servicos/solicitar-o-seguro-desemprego-do-trabalhador-formal',
    },
    {
      label: 'Conselho Deliberativo do Fundo de Amparo ao Trabalhador (CODEFAT)',
      url: 'https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/codefat',
    },
  ],
  relatedTools: [
    {
      title: 'Calculadora de Rescisão Trabalhista',
      path: '/br/calculadora-rescisao',
      description: 'Simule todas as verbas rescisórias da demissão sem justa causa.',
    },
    {
      title: 'Calculadora do FGTS com Multa de 40%',
      path: '/br/calculadora-fgts',
      description: 'Descubra quanto sacar da conta vinculada e o valor da indenização de 40%.',
    },
    {
      title: 'Calculadora de Salário Líquido',
      path: '/br/calculadora-salario-liquido',
      description: 'Veja quanto sobra do seu salário mensal após retenções de INSS e IRRF.',
    },
  ],
  relatedGuides: [
    {
      title: 'Direitos na Demissão Sem Justa Causa',
      path: '/br/guias/direitos-na-demissao-sem-justa-causa',
      description: 'Guia completo com todos os direitos, seguro-desemprego e saque do FGTS.',
    },
    {
      title: 'Como Calcular Rescisão Passo a Passo',
      path: '/br/guias/como-calcular-rescisao-passo-a-passo',
      description: 'Aprenda detalhadamente a apurar cada verba indenizatória e remuneratória.',
    },
  ],
  updatedAt: '2026-01-01',
};
