import { PageContent } from '../types';

export const content: PageContent = {
  metaTitle: 'Calculadora de Rescisão 2026 CLT | Calcula',
  metaDescription:
    'Calcule a rescisão trabalhista CLT 2026: saldo de salário, aviso prévio, férias e multa do FGTS de forma rápida e gratuita. Simule agora!',
  h1: 'Calculadora de Rescisão Trabalhista CLT 2026',
  quickAnswer:
    'A rescisão de contrato pela CLT representa o acerto final de contas entre trabalhador e empregador. Conforme o motivo da demissão, são pagos o saldo de salário, aviso prévio, férias proporcionais com acréscimo de um terço, décimo terceiro salário proporcional, saque dos depósitos do FGTS e multa rescisória de até 40%.',
  howItWorks: [
    {
      step: 1,
      title: 'Saldo de Salário',
      description:
        'Remuneração proporcional aos dias efetivamente trabalhados no mês da rescisão, calculada pela divisão do salário mensal por 30.',
      formula: '(Salário ÷ 30) × Dias Trabalhados',
      legalArticle: 'Art. 457 e 462 da CLT',
    },
    {
      step: 2,
      title: 'Aviso Prévio Proporcional',
      description:
        'Garante 30 dias de remuneração acrescidos de 3 dias para cada ano completo de serviço na mesma empresa, até o teto de 90 dias.',
      formula: '30 dias + (3 dias × Anos de Serviço)',
      legalArticle: 'Lei 12.506/2011 e Art. 487 da CLT',
    },
    {
      step: 3,
      title: '13º Salário Proporcional',
      description:
        'Calculado na proporção de 1/12 por mês civil ou fração igual ou superior a 15 dias de serviço prestado no ano corrente.',
      formula: '(Salário ÷ 12) × Meses com 15+ Dias',
      legalArticle: 'Lei 4.090/1962 e Lei 4.749/1965',
    },
    {
      step: 4,
      title: 'Férias Proporcionais + 1/3 Constitucional',
      description:
        'Pagamento das férias devidas no período aquisitivo incompleto, obrigatoriamente acrescidas de um terço constitucional.',
      formula: '[(Salário ÷ 12) × Meses Aquisitivos] + (Férias ÷ 3)',
      legalArticle: 'Art. 146 da CLT e Art. 7º, XVII da CF/88',
    },
    {
      step: 5,
      title: 'Multa Rescisória do FGTS (40%)',
      description:
        'Indenização compensatória incidente sobre o montante de todos os depósitos devidos ao Fundo de Garantia durante a vigência do contrato.',
      formula: 'Saldo Total FGTS Acumulado × 40%',
      legalArticle: 'Art. 18, § 1º da Lei 8.036/1990',
    },
  ],
  article: `
## O Que É a Rescisão Trabalhista CLT?

A rescisão do contrato de trabalho é a formalização jurídica do encerramento do vínculo empregatício entre o empregado e a empresa empregadora, regida pela Consolidação das Leis do Trabalho (CLT - Decreto-Lei nº 5.452/1943). O cálculo rescisório consolida todas as verbas remuneratórias e indenizatórias devidas ao trabalhador, assegurando a quitação correta das obrigações legais contraídas durante a prestação de serviços.

Em 2026, com o salário mínimo nacional fixado em R$ 1.518,00 e as novas tabelas progressivas da Previdência Social (INSS) e da Receita Federal (IRRF), é fundamental compreender como cada modalidade de desligamento afeta diretamente os valores a receber.

---

## Principais Modalidades de Demissão e Seus Direitos

A causa do término contratual é o elemento determinante para definir quais verbas rescisórias serão pagas ao colaborador. A legislação trabalhista brasileira prevê quatro modalidades principais:

### 1. Demissão sem Justa Causa
Ocorre por decisão unilateral do empregador sem que o funcionário tenha cometido falta grave. É a modalidade mais protetiva ao trabalhador, que faz jus a:
- Saldo de salário correspondente aos dias trabalhados no mês do encerramento;
- Aviso prévio (trabalhado ou indenizado pela empresa);
- 13º salário proporcional aos meses laborados no ano civil;
- Férias vencidas (se houver) e férias proporcionais, ambas acrescidas do terço constitucional (1/3);
- Saque integral dos valores depositados na conta vinculada do FGTS;
- Multa rescisória de 40% sobre o saldo total dos depósitos do FGTS;
- Guias para solicitação do benefício do Seguro-Desemprego.

### 2. Pedido de Demissão pelo Empregado
Acontece quando o colaborador decide voluntariamente deixar a empresa. Seus direitos incluem:
- Saldo de salário;
- 13º salário proporcional;
- Férias vencidas e proporcionais com acréscimo de 1/3 constitucional.

Nessa modalidade, o trabalhador **não** tem direito ao saque do FGTS, à multa rescisória de 40% e ao seguro-desemprego. Caso não cumpra o aviso prévio de 30 dias em benefício da empresa, o valor correspondente ao período poderá ser legalmente descontado de suas verbas rescisórias (Art. 487, § 2º da CLT).

### 3. Demissão com Justa Causa
Aplicada quando o empregado comete falta de gravidade extrema prevista taxativamente no Artigo 482 da CLT, como ato de improbidade, desídia, embriaguez em serviço, indisciplina ou abandono de emprego. O trabalhador recebe apenas:
- Saldo de salário dos dias trabalhados no mês;
- Férias vencidas simples ou em dobro (se já tiverem período concessivo expirado) com o terço constitucional.

Perde expressamente o direito a aviso prévio, 13º proporcional, férias proporcionais, saque do FGTS, multa de 40% e seguro-desemprego.

### 4. Rescisão por Comum Acordo (Artigo 484-A da CLT)
Introduzida pela Reforma Trabalhista (Lei nº 13.467/2017), permite o encerramento do contrato em consenso mútuo entre as partes. O empregado recebe:
- Metade do aviso prévio indenizado (50%);
- Metade da multa rescisória do FGTS (20% sobre o saldo da conta vinculada);
- Saldo de salário, 13º proporcional e férias integrais com 1/3 quitados a 100%;
- Autorização para sacar até 80% do saldo do FGTS depositado.

Ressalta-se que nesta modalidade não há concessão de seguro-desemprego.

---

## Como Calcular o Aviso Prévio Proporcional (Lei 12.506/2011)

O aviso prévio proporcional ao tempo de serviço é regulamentado pela Lei nº 12.506/2011 e pelo Artigo 487 da CLT. A regra estipula:
- **Até 1 ano completo de serviço**: o trabalhador tem direito a 30 dias de aviso prévio.
- **A cada ano completo subsequente**: somam-se 3 dias adicionais à contagem.
- **Teto legal máximo**: 90 dias corridos de aviso prévio (atingido após 20 anos completos de casa).

Quando o aviso é trabalhado e a dispensa parte da empresa, o empregado pode escolher entre reduzir sua jornada diária em 2 horas diárias durante todo o período ou faltar ao serviço por 7 dias corridos consecutivos ao final do aviso, sem prejuízo salarial (Art. 488 da CLT). Se o aviso for indenizado, o valor correspondente é pago integralmente no acerto rescisório.

---

## Prazos Legais de Pagamento: Artigo 477, § 6º da CLT

Após a publicação da Reforma Trabalhista, o prazo para pagamento das verbas rescisórias foi unificado para qualquer tipo de término contratual:

> **O prazo legal é de até 10 (dez) dias corridos**, contados a partir do término formal do contrato de trabalho, independentemente de o aviso prévio ter sido trabalhado, indenizado ou dispensado.

Dentro desse prazo de 10 dias corridos, o empregador deve não apenas transferir os recursos financeiros para a conta bancária do empregado, como também fornecer os documentos comprobatórios de rescisão (TRCT assinado, chave de conectividade do FGTS e guias do seguro-desemprego).

### Multa por Atraso no Pagamento (Artigo 477, § 8º da CLT)
Se a empresa descumprir o prazo de 10 dias corridos, incorre na penalidade automática do Artigo 477, § 8º da CLT: o pagamento de uma multa pecuniária equivalente a **um salário nominal integral do empregado**, revertida diretamente em benefício do trabalhador prejudicado.

---

## Descontos Permitidos na Rescisão Trabalhista

O cálculo líquido da rescisão desconta retenções autorizadas pela legislação e pelo contrato de trabalho:
1. **INSS (Previdência Social)**: Incide sobre o saldo de salário e sobre o 13º salário proporcional com as alíquotas progressivas de 2026 (7,5% a 14%). Verbas de natureza puramente indenizatória (aviso prévio indenizado, férias indenizadas e multa do FGTS) são isentas de recolhimento previdenciário.
2. **IRRF (Imposto de Renda Retido na Fonte)**: Calculado separadamente sobre as verbas tributáveis conforme a tabela oficial da Receita Federal. As indenizações de desligamento contam com isenção expressa da lei.
3. **Faltas e Atrasos Injustificados**: Descontados do saldo de salário proporcional.
4. **Adiantamentos Salariais e Benefícios**: Valores previamente antecipados ou quotas proporcionais de vale-transporte e alimentação.

Conforme determina o Artigo 477, § 5º da CLT, qualquer compensação ou desconto realizado no termo de rescisão não poderá exceder o valor equivalente a um mês de remuneração do empregado, salvo disposições judiciais específicas.
`,
  examples: [
    {
      title: 'Exemplo 1: Demissão Sem Justa Causa com Aviso Prévio Indenizado',
      scenario:
        'Trabalhador contratado em 10/01/2024 e dispensado sem justa causa em 20/07/2026 (2 anos completos de casa), com salário mensal de R$ 3.000,00 e saldo acumulado de FGTS de R$ 6.200,00.',
      inputs: {
        'Salário Mensal': 'R$ 3.000,00',
        'Data de Admissão': '10/01/2024',
        'Data de Saída': '20/07/2026',
        'Motivo': 'Demissão sem justa causa',
        'Aviso Prévio': 'Indenizado (36 dias)',
        'Saldo FGTS': 'R$ 6.200,00',
      },
      breakdown: [
        {
          item: 'Saldo de Salário (20 dias trabalhados)',
          amount: 'R$ 2.000,00',
          note: '(R$ 3.000 ÷ 30) × 20 dias',
        },
        {
          item: 'Aviso Prévio Indenizado (36 dias: 30 base + 6 anos)',
          amount: 'R$ 3.600,00',
          note: '36 dias × R$ 100,00 diária',
        },
        {
          item: '13º Salário Proporcional (7/12 meses)',
          amount: 'R$ 1.750,00',
          note: '(R$ 3.000 ÷ 12) × 7 meses',
        },
        {
          item: 'Férias Proporcionais (7/12 meses)',
          amount: 'R$ 1.750,00',
          note: '(R$ 3.000 ÷ 12) × 7 meses',
        },
        {
          item: '1/3 Constitucional de Férias',
          amount: 'R$ 583,33',
          note: 'R$ 1.750,00 ÷ 3',
        },
        {
          item: 'Multa Rescisória do FGTS (40%)',
          amount: 'R$ 2.480,00',
          note: '40% sobre R$ 6.200,00 de FGTS',
        },
        {
          item: 'Desconto Previdenciário (INSS s/ saldo)',
          amount: '- R$ 150,00',
          note: 'Alíquota progressiva s/ saldo de salário',
        },
      ],
      total: 'R$ 12.013,33 Total Líquido a Receber',
    },
    {
      title: 'Exemplo 2: Pedido de Demissão com Aviso Prévio Trabalhado',
      scenario:
        'Colaborador com salário contratual de R$ 2.400,00 pede demissão e cumpre o aviso prévio integral até 30/04/2026 (4 meses trabalhados no ano corrente).',
      inputs: {
        'Salário Mensal': 'R$ 2.400,00',
        'Data de Saída': '30/04/2026',
        'Motivo': 'Pedido de demissão',
        'Aviso Prévio': 'Trabalhado (cumprido)',
      },
      breakdown: [
        {
          item: 'Saldo de Salário (30 dias)',
          amount: 'R$ 2.400,00',
          note: 'Salário integral do mês de abril',
        },
        {
          item: '13º Salário Proporcional (4/12 meses)',
          amount: 'R$ 800,00',
          note: '(R$ 2.400 ÷ 12) × 4 meses',
        },
        {
          item: 'Férias Proporcionais (4/12 meses)',
          amount: 'R$ 800,00',
          note: '(R$ 2.400 ÷ 12) × 4 meses',
        },
        {
          item: '1/3 Constitucional de Férias',
          amount: 'R$ 266,67',
          note: 'R$ 800,00 ÷ 3',
        },
        {
          item: 'Desconto INSS (Saldo de Salário)',
          amount: '- R$ 198,60',
          note: 'Contribuição previdenciária oficial',
        },
      ],
      total: 'R$ 4.068,07 Líquido em Conta',
    },
  ],
  faqs: [
    {
      q: 'Qual é o prazo legal para a empresa pagar a rescisão em 2026?',
      a: 'Pelo Artigo 477, § 6º da CLT, a empresa tem até 10 dias corridos a partir do término do contrato para pagar as verbas rescisórias e entregar a documentação, independentemente de o aviso prévio ter sido trabalhado ou indenizado.',
    },
    {
      q: 'O que acontece se o empregador atrasar o pagamento da rescisão?',
      a: 'Caso ultrapasse o prazo improrrogável de 10 dias corridos, o empregador deve pagar a multa do Artigo 477, § 8º da CLT, equivalente a um salário nominal integral do trabalhador, creditada diretamente a favor do empregado.',
    },
    {
      q: 'Como calcular o aviso prévio proporcional pela Lei 12.506/2011?',
      a: 'O aviso prévio tem base de 30 dias para contratos com até 1 ano de trabalho. A cada ano adicional completo na mesma empresa, somam-se 3 dias corridos, com teto legal de 90 dias (atingido com 20 anos completos de casa).',
    },
    {
      q: 'Quem pede demissão tem direito à multa de 40% do FGTS e seguro-desemprego?',
      a: 'Não. Ao pedir demissão voluntária, o colaborador renuncia ao saque do FGTS, à multa indenizatória de 40% e às parcelas do benefício do Seguro-Desemprego.',
    },
    {
      q: 'Como funciona a demissão por comum acordo (Artigo 484-A da CLT)?',
      a: 'Na rescisão por acordo mútuo, o trabalhador recebe 50% do aviso prévio indenizado e 20% de multa do FGTS. Saldo de salário, 13º e férias são quitados a 100%. É possível sacar até 80% do saldo do FGTS, sem direito ao seguro-desemprego.',
    },
    {
      q: 'Quantos dias trabalhados no mês dão direito a 1/12 de 13º e férias?',
      a: 'A prestação de serviços por 15 dias ou mais dentro do mesmo mês civil assegura o direito a 1/12 de 13º salário proporcional e a 1/12 de férias proporcionais, conforme dispõe a Lei nº 4.090/1962.',
    },
    {
      q: 'Quais verbas rescisórias sofrem desconto de INSS e Imposto de Renda?',
      a: 'O INSS e o IRRF incidem apenas sobre parcelas salariais de natureza remuneratória, como o saldo de salário e o 13º proporcional. As indenizações rescisórias — como aviso prévio indenizado, férias indenizadas com 1/3 e a multa de 40% do FGTS — são isentas por lei.',
    },
    {
      q: 'O que o empregado recebe se for dispensado por justa causa?',
      a: 'Na demissão fundamentada no Artigo 482 da CLT, o trabalhador tem direito somente ao saldo de salário dos dias trabalhados no mês e a eventuais férias vencidas com 1/3. Férias proporcionais, 13º proporcional, FGTS e aviso prévio não são pagos.',
    },
    {
      q: 'Férias vencidas há mais de 12 meses devem ser pagas em dobro?',
      a: 'Sim. Se o período concessivo legal (12 meses após adquirir o direito às férias) tiver expirado sem usufruto, a remuneração das férias vencidas deve ser quitada em dobro com o terço constitucional, conforme prevê o Artigo 137 da CLT.',
    },
    {
      q: 'A rescisão ainda precisa ser homologada perante o sindicato?',
      a: 'Desde a vigência da Reforma Trabalhista (Lei 13.467/2017), a homologação em entidade sindical deixou de ser obrigatória por lei geral, sendo formalizada na própria empresa, salvo previsão em contrário na Convenção Coletiva de Trabalho da categoria.',
    },
  ],
  sources: [
    {
      label: 'Consolidação das Leis do Trabalho (Decreto-Lei nº 5.452/1943 - Planalto)',
      url: 'https://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm',
    },
    {
      label: 'Lei do Aviso Prévio Proporcional (Lei nº 12.506/2011 - Planalto)',
      url: 'https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/lei/l12506.htm',
    },
    {
      label: 'Lei do Fundo de Garantia do Tempo de Serviço (Lei nº 8.036/1990 - Planalto)',
      url: 'https://www.planalto.gov.br/ccivil_03/leis/l8036.htm',
    },
    {
      label: 'Ministério do Trabalho e Emprego (Portal Gov.br)',
      url: 'https://www.gov.br/trabalho-e-emprego',
    },
    {
      label: 'Instituto Nacional do Seguro Social (INSS - Tabela 2026)',
      url: 'https://www.gov.br/inss',
    },
  ],
  relatedTools: [
    {
      title: 'Calculadora de Férias CLT',
      path: '/br/calculadora-ferias',
      description: 'Simule o valor das férias com abono pecuniário e terço constitucional.',
    },
    {
      title: 'Calculadora de 13º Salário',
      path: '/br/calculadora-13-salario/',
      description: 'Calcule as duas parcelas do décimo terceiro com deduções de INSS e IRRF.',
    },
    {
      title: 'Calculadora de Salário Líquido',
      path: '/br/calculadora-salario-liquido',
      description: 'Descubra seu salário líquido mensal após descontos de previdência e imposto.',
    },
  ],
  relatedGuides: [
    {
      title: 'Guia Completo da Demissão sem Justa Causa',
      path: '/br/guias/direitos-na-demissao-sem-justa-causa/',
      description: 'Passo a passo com todos os direitos, prazos e saques permitidos na demissão imotivada.',
    },
    {
      title: 'Prazos do Artigo 477 da CLT e Multas por Atraso',
      path: '/br/guias/como-calcular-rescisao-passo-a-passo/',
      description: 'Entenda como funciona a penalidade de um salário caso a empresa atrase o pagamento em 10 dias.',
    },
  ],
  updatedAt: '2026-01-01',
};
