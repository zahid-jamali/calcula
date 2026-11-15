import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/seo/JsonLd';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { buildMetadata } from '@/lib/seo';

export function generateMetadata(): Metadata {
  return buildMetadata({
    country: 'br',
    slug: 'br/perguntas-frequentes',
    title: 'Perguntas Frequentes CLT',
    description:
      'Tire suas dúvidas sobre rescisão, 13º salário, férias, FGTS, horas extras e salário líquido com respostas diretas e fundamentadas na CLT 2026.',
  });
}

interface FaqDefinition {
  question: string;
  answerText: string;
  answerNode: React.ReactNode;
}

interface FaqCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  items: FaqDefinition[];
}

const FAQ_CATEGORIES: FaqCategory[] = [
  {
    id: 'rescisao',
    title: 'Rescisão Contratual CLT',
    icon: '💼',
    description: 'Direitos, prazos, verbas devidas e regras de demissão na CLT.',
    items: [
      {
        question: 'Quais são os direitos do trabalhador demitido sem justa causa?',
        answerText:
          'Na demissão sem justa causa pelo empregador, o trabalhador celetista tem direito ao saldo de salário, aviso prévio indenizado ou trabalhado, 13º salário proporcional, férias vencidas e proporcionais com acréscimo de 1/3 e multa rescisória de 40% sobre o saldo total do FGTS. Além disso, recebe as guias para saque integral do FGTS e habilitação no Seguro-Desemprego. Você pode simular o valor exato na Calculadora de Rescisão Sem Justa Causa.',
        answerNode: (
          <p>
            Na demissão sem justa causa pelo empregador, o trabalhador celetista tem direito ao saldo de salário, aviso prévio indenizado ou trabalhado, 13º salário proporcional, férias vencidas e proporcionais com acréscimo de 1/3 e multa rescisória de 40% sobre o saldo total do FGTS. Além disso, recebe as guias para saque integral do FGTS e habilitação no Seguro-Desemprego. Faça sua simulação completa na{' '}
            <Link href="/br/calculadora-rescisao/sem-justa-causa/" className="font-bold text-brand-900 underline hover:text-brand-700">
              Calculadora de Rescisão Sem Justa Causa
            </Link>
            .
          </p>
        ),
      },
      {
        question: 'Se eu pedir demissão, o que perco e o que recebo?',
        answerText:
          'Ao pedir demissão por iniciativa própria, o colaborador recebe saldo de salário, 13º proporcional e férias vencidas e proporcionais com 1/3 constitucional. No entanto, perde o direito ao saque do saldo do FGTS, não recebe a multa de 40% e não tem acesso às parcelas do Seguro-Desemprego. Caso não cumpra o aviso prévio de 30 dias trabalhado, o valor pode ser descontado na rescisão. Confira todos os descontos na Calculadora de Pedido de Demissão.',
        answerNode: (
          <p>
            Ao pedir demissão por iniciativa própria, o colaborador recebe saldo de salário, 13º proporcional e férias vencidas e proporcionais com 1/3 constitucional. No entanto, perde o direito ao saque do saldo do FGTS, não recebe a multa de 40% e não tem acesso às parcelas do Seguro-Desemprego. Caso não cumpra o aviso prévio de 30 dias trabalhado, o valor pode ser descontado pelo empregador. Saiba os valores líquidos na{' '}
            <Link href="/br/calculadora-rescisao/pedido-de-demissao/" className="font-bold text-brand-900 underline hover:text-brand-700">
              Calculadora de Pedido de Demissão
            </Link>
            .
          </p>
        ),
      },
      {
        question: 'Como funciona a rescisão de contrato por acordo mútuo (Art. 484-A CLT)?',
        answerText:
          'Instituído pela Reforma Trabalhista, o acordo comum permite a rescisão consensual com pagamento de 50% do aviso prévio indenizado e multa de 20% sobre os depósitos do FGTS. O empregado tem direito a sacar até 80% do saldo depositado em sua conta vinculada da Caixa Econômica Federal. Entretanto, essa modalidade não concede direito ao recebimento do benefício do Seguro-Desemprego. Simule os valores autorizados na Calculadora de Rescisão por Acordo.',
        answerNode: (
          <p>
            Instituído pela Reforma Trabalhista, o acordo comum permite a rescisão consensual com pagamento de 50% do aviso prévio indenizado e multa de 20% sobre os depósitos do FGTS. O empregado tem direito a sacar até 80% do saldo depositado em sua conta vinculada da Caixa Econômica Federal. Entretanto, essa modalidade não concede direito ao recebimento do benefício do Seguro-Desemprego. Simule os valores autorizados na{' '}
            <Link href="/br/calculadora-rescisao/acordo/" className="font-bold text-brand-900 underline hover:text-brand-700">
              Calculadora de Rescisão por Acordo Comum
            </Link>
            .
          </p>
        ),
      },
      {
        question: 'O que acontece se a empresa atrasar o pagamento das verbas rescisórias?',
        answerText:
          'Pelo Artigo 477, § 6º, da CLT, o prazo para pagamento integral da rescisão e entrega de documentos é de até 10 dias corridos após o término do contrato. Se o empregador descumprir esse prazo legal, fica obrigado a pagar uma multa no valor equivalente a um salário mensal nominal do empregado (Art. 477, § 8º). Consulte o guia passo a passo em Como Calcular a Rescisão Passo a Passo.',
        answerNode: (
          <p>
            Pelo Artigo 477, § 6º, da CLT, o prazo para pagamento integral da rescisão e entrega de documentos é de até 10 dias corridos após o término do contrato de trabalho. Se o empregador descumprir esse prazo legal, fica obrigado a pagar uma multa indenizatória no valor equivalente a um salário integral do empregado (Art. 477, § 8º). Veja os prazos e exceções no{' '}
            <Link href="/br/guias/como-calcular-rescisao-passo-a-passo/" className="font-bold text-brand-900 underline hover:text-brand-700">
              Guia de Cálculo da Rescisão Passo a Passo
            </Link>
            .
          </p>
        ),
      },
      {
        question: 'Como funciona o aviso prévio proporcional pela Lei 12.506/2011?',
        answerText:
          'A Lei Federal nº 12.506/2011 garante a todo trabalhador um aviso prévio mínimo de 30 dias para contratos com até 1 ano de duração. A cada ano completo de serviço na mesma empresa, são acrescentados 3 dias ao aviso, até o limite máximo de 90 dias (atingido com 20 anos de casa). Quando indenizado, esse período estende a data do contrato e reflete no 13º e férias. Entenda as regras no Guia de Aviso Prévio Trabalhado ou Indenizado.',
        answerNode: (
          <p>
            A Lei Federal nº 12.506/2011 garante a todo trabalhador um aviso prévio mínimo de 30 dias para contratos com até 1 ano de duração. A cada ano completo de serviço na mesma empresa, são acrescentados 3 dias ao aviso, até o limite máximo de 90 dias (atingido com 20 anos de casa). Quando indenizado, esse período projeta o contrato e gera avos adicionais de 13º e férias. Entenda a tabela no{' '}
            <Link href="/br/guias/aviso-previo-trabalhado-ou-indenizado/" className="font-bold text-brand-900 underline hover:text-brand-700">
              Guia de Aviso Prévio Trabalhado ou Indenizado
            </Link>
            .
          </p>
        ),
      },
      {
        question: 'Como funciona a rescisão durante o contrato de experiência?',
        answerText:
          'Se a dispensa ou o término ocorrer exatamente na data fixada do contrato de experiência, não há aviso prévio nem multa de 40%, mas sim 13º e férias proporcionais e saque do FGTS. Se o empregador rescindir antes do prazo sem justa causa, deve pagar indenização de metade dos dias que faltavam para o encerramento (Art. 479 CLT) além da multa de 40%. Se o empregado pedir demissão antecipada, indeniza os prejuízos causados até o teto do Art. 480 da CLT. Calcule na Calculadora de Contrato de Experiência.',
        answerNode: (
          <p>
            Se o término ocorrer na data final combinada do contrato de experiência, não há aviso prévio nem multa de 40%, mas sim saque do FGTS e verbas proporcionais. Caso o empregador rescinda antes do prazo pactuado sem justa causa, deve pagar 50% dos dias faltantes (Art. 479 da CLT) e multa do FGTS. Se o empregado pedir demissão antes do término, pode ter que indenizar a empresa pelos prejuízos (Art. 480 da CLT). Simule na{' '}
            <Link href="/br/calculadora-rescisao/contrato-de-experiencia/" className="font-bold text-brand-900 underline hover:text-brand-700">
              Calculadora de Contrato de Experiência
            </Link>
            .
          </p>
        ),
      },
    ],
  },
  {
    id: 'decimo-terceiro',
    title: '13º Salário e Gratificações',
    icon: '🎁',
    description: 'Prazos legais, regras de cálculo da 1ª e 2ª parcela e deduções.',
    items: [
      {
        question: 'Quais são as datas limites para pagamento da 1ª e 2ª parcela do 13º salário?',
        answerText:
          'A primeira parcela do 13º salário (adiantamento de 50%) deve ser quitada entre 1º de fevereiro e 30 de novembro, sem descontos de INSS ou IRRF. A segunda parcela deve ser depositada impreterivelmente até o dia 20 de dezembro de cada ano, quando ocorrem todas as retenções tributárias sobre o valor integral da gratificação. Caso a data coincida com fim de semana, o depósito deve ser antecipado. Acompanhe os prazos no Guia de Prazos do 13º Salário.',
        answerNode: (
          <p>
            A primeira parcela do 13º salário (adiantamento de 50%) deve ser quitada entre 1º de fevereiro e 30 de novembro, sem descontos de INSS ou IRRF. A segunda parcela deve ser depositada impreterivelmente até o dia 20 de dezembro de cada ano, quando ocorrem todas as retenções tributárias sobre o valor integral da gratificação. Caso a data coincida com fim de semana, o depósito deve ser antecipado para o dia útil anterior. Acompanhe o cronograma no{' '}
            <Link href="/br/guias/quando-cai-o-13-salario/" className="font-bold text-brand-900 underline hover:text-brand-700">
              Guia de Prazos do 13º Salário
            </Link>
            .
          </p>
        ),
      },
      {
        question: 'O empregador pode pagar o 13º salário em parcela única em dezembro?',
        answerText:
          'Não, o pagamento do 13º salário em parcela única em dezembro é ilegal perante a Lei nº 4.749/1965. A legislação trabalhista brasileira determina expressamente o desmembramento obrigatório em duas parcelas para oxigenar as finanças do trabalhador. As empresas que pagam apenas em dezembro ficam sujeitas a multas administrativas aplicadas pela fiscalização do Ministério do Trabalho. Simule os valores de cada parcela na Calculadora de 13º Salário.',
        answerNode: (
          <p>
            Não, o pagamento do 13º salário em parcela única em dezembro é ilegal perante a Lei nº 4.749/1965. A legislação trabalhista brasileira determina expressamente o desmembramento obrigatório em duas parcelas para oxigenar as finanças do trabalhador. As empresas que pagam apenas em dezembro ficam sujeitas a autuações e multas administrativas aplicadas pelo Ministério do Trabalho. Simule os valores de cada cota na{' '}
            <Link href="/br/calculadora-13-salario/" className="font-bold text-brand-900 underline hover:text-brand-700">
              Calculadora de Décimo Terceiro Salário
            </Link>
            .
          </p>
        ),
      },
      {
        question: 'Quantos dias no mês preciso trabalhar para ter direito a 1 avo de 13º?',
        answerText:
          'Para adquirir direito a 1/12 (um avo) do décimo terceiro salário em um determinado mês, o trabalhador precisa ter cumprido pelo menos 15 dias trabalhados nesse mesmo mês civil. Dias com faltas injustificadas que reduzam o total de dias trabalhados para 14 ou menos no mês provocam a perda do avo correspondente. Calcule os seus avos proporcionais na Calculadora de Rescisão CLT.',
        answerNode: (
          <p>
            Para adquirir direito a 1/12 (um avo) do décimo terceiro salário em um determinado mês, o trabalhador precisa ter cumprido pelo menos 15 dias trabalhados nesse mesmo mês civil. Dias com faltas injustificadas que reduzam o total de dias trabalhados para 14 ou menos no mês provocam a perda do avo correspondente àquele período. Calcule seus avos proporcionais na{' '}
            <Link href="/br/calculadora-rescisao/" className="font-bold text-brand-900 underline hover:text-brand-700">
              Calculadora de Rescisão Trabalhista CLT
            </Link>
            .
          </p>
        ),
      },
      {
        question: 'Horas extras, adicional noturno e comissões entram no 13º salário?',
        answerText:
          'Sim, todas as parcelas remuneratórias habituais integram a base de cálculo da gratificação de Natal por força da Súmula 45 do Tribunal Superior do Trabalho (TST). Para apurar o valor correto, calcula-se a média aritmética das horas extras e dos adicionais recebidos ao longo do ano civil e adiciona-se ao salário nominal. Confira como calcular horas e reflexos na Calculadora de Horas Extras.',
        answerNode: (
          <p>
            Sim, todas as parcelas remuneratórias habituais integram a base de cálculo da gratificação de Natal por força da Súmula 45 do Tribunal Superior do Trabalho (TST). Para apurar o valor correto, calcula-se a média aritmética das horas extras e dos adicionais recebidos ao longo do ano civil e adiciona-se ao salário nominal. Confira a apuração de adicionais na{' '}
            <Link href="/br/calculadora-hora-extra/" className="font-bold text-brand-900 underline hover:text-brand-700">
              Calculadora de Horas Extras CLT
            </Link>
            .
          </p>
        ),
      },
      {
        question: 'Quem é demitido por justa causa tem direito a receber 13º salário?',
        answerText:
          'O empregado dispensado com justa causa perde totalmente o direito ao 13º salário proporcional do ano corrente, conforme estipulado pelo Artigo 3º da Lei nº 4.090/1962. Ele apenas mantém o direito a receber 13º de anos anteriores que já tenham vencido e não foram pagos. Para verificar as verbas restritas nessa modalidade de dispensa grave, acesse a Calculadora de Rescisão com Justa Causa.',
        answerNode: (
          <p>
            O empregado dispensado com justa causa perde totalmente o direito ao 13º salário proporcional do ano corrente, conforme estipulado pelo Artigo 3º da Lei nº 4.090/1962. Ele apenas mantém o direito a receber eventual 13º de anos anteriores que já tenham vencido e não foram pagos. Para verificar as verbas restritas nessa modalidade de dispensa grave, acesse a{' '}
            <Link href="/br/calculadora-rescisao/justa-causa/" className="font-bold text-brand-900 underline hover:text-brand-700">
              Calculadora de Rescisão com Justa Causa
            </Link>
            .
          </p>
        ),
      },
    ],
  },
  {
    id: 'ferias',
    title: 'Férias e Abono Pecuniário',
    icon: '🏖️',
    description: 'Terço constitucional, venda de 10 dias, períodos e prazos de concessão.',
    items: [
      {
        question: 'O que é o terço constitucional de férias e como ele é calculado?',
        answerText:
          'O terço constitucional é um acréscimo obrigatório garantido pelo Artigo 7º, inciso XVII, da Constituição Federal de 1988 a todo trabalhador que entra em período de descanso. O cálculo é feito dividindo a remuneração normal devida pelas férias por três e somando esse valor ao pagamento. Esse adicional incide tanto sobre férias normais de 30 dias quanto sobre férias fracionadas ou proporcionais. Simule na Calculadora de Férias CLT.',
        answerNode: (
          <p>
            O terço constitucional é um acréscimo obrigatório garantido pelo Artigo 7º, inciso XVII, da Constituição Federal de 1988 a todo trabalhador que entra em período de descanso. O cálculo é feito dividindo a remuneração devida pelas férias por três e somando esse valor ao pagamento total. Esse adicional incide tanto sobre férias normais de 30 dias quanto sobre férias fracionadas ou proporcionais. Simule os valores brutos e líquidos na{' '}
            <Link href="/br/calculadora-ferias/" className="font-bold text-brand-900 underline hover:text-brand-700">
              Calculadora de Férias CLT
            </Link>
            .
          </p>
        ),
      },
      {
        question: 'Como funciona a venda de 10 dias de férias (abono pecuniário)?',
        answerText:
          'O Artigo 143 da CLT autoriza o trabalhador a converter 1/3 do seu período de férias a que tem direito em abono pecuniário (dinheiro). A solicitação deve ser feita formalmente pelo colaborador à empresa até 15 dias antes de completar o período aquisitivo. A grande vantagem financeira é que sobre o valor do abono pecuniário não há desconto de INSS nem de Imposto de Renda. Simule a opção de venda na Calculadora de Férias.',
        answerNode: (
          <p>
            O Artigo 143 da CLT autoriza o trabalhador a converter 1/3 do seu período de férias a que tem direito em abono pecuniário (dinheiro). A solicitação deve ser feita formalmente pelo colaborador à empresa até 15 dias antes de completar o período aquisitivo. A grande vantagem financeira é que sobre o valor do abono pecuniário e seu terço não há incidência de INSS nem de Imposto de Renda Retido na Fonte. Simule a venda de 10 dias na{' '}
            <Link href="/br/calculadora-ferias/" className="font-bold text-brand-900 underline hover:text-brand-700">
              Calculadora de Férias CLT
            </Link>
            .
          </p>
        ),
      },
      {
        question: 'Quando as férias devem ser pagas em dobro pelo empregador?',
        answerText:
          'Pelo Artigo 137 da CLT, sempre que as férias forem concedidas ou pagas após o término do período concessivo (os 12 meses subsequentes ao período em que o trabalhador adquiriu o direito), a empresa deve pagar a remuneração em dobro. O mesmo entendimento se aplica segundo a jurisprudência quando o pagamento é feito após o prazo legal de dois dias antes do início do descanso. Conheça as regras detalhadas no Guia de Férias Vencidas em Dobro.',
        answerNode: (
          <p>
            Pelo Artigo 137 da CLT, sempre que as férias forem concedidas após o término do período concessivo (os 12 meses subsequentes ao período em que o trabalhador adquiriu o direito), a empresa é obrigada a pagar a remuneração respectiva em dobro. Esse direito protege o descanso físico e psicológico do trabalhador contra adiamentos abusivos. Conheça todas as hipóteses no{' '}
            <Link href="/br/guias/ferias-vencidas-em-dobro/" className="font-bold text-brand-900 underline hover:text-brand-700">
              Guia de Férias Vencidas em Dobro
            </Link>
            .
          </p>
        ),
      },
      {
        question: 'As férias podem ser divididas em até três períodos na CLT?',
        answerText:
          'Sim, desde a Reforma Trabalhista (Art. 134, § 1º, da CLT), as férias podem ser usufruídas em até três períodos, desde que haja a concordância do empregado. Um dos períodos não pode ser inferior a 14 dias corridos e nenhum dos outros dois pode ser inferior a 5 dias corridos cada um. Além disso, o início das férias não pode ocorrer nos dois dias que antecedem feriados ou dias de descanso remunerado. Confira os cálculos na Calculadora de Férias.',
        answerNode: (
          <p>
            Sim, desde a Reforma Trabalhista (Art. 134, § 1º, da CLT), as férias podem ser usufruídas em até três períodos, desde que haja a concordância expressa do empregado. Um dos períodos não pode ser inferior a 14 dias corridos e nenhum dos outros dois pode ser menor que 5 dias corridos. Além disso, o início das férias é vedado nos dois dias que antecedem feriados ou dias de descanso semanal remunerado. Faça sua simulação na{' '}
            <Link href="/br/calculadora-ferias/" className="font-bold text-brand-900 underline hover:text-brand-700">
              Calculadora de Férias CLT
            </Link>
            .
          </p>
        ),
      },
      {
        question: 'Faltas injustificadas reduzem a quantidade de dias de férias?',
        answerText:
          'Sim, a tabela do Artigo 130 da CLT estabelece que o empregado que acumular mais de 5 faltas injustificadas durante o período aquisitivo tem sua quantidade de dias de férias reduzida proporcionalmente. Por exemplo, de 6 a 14 faltas o direito cai para 24 dias; de 15 a 23 faltas, cai para 18 dias; e com mais de 32 faltas perde-se o direito integral ao descanso daquele período. Consulte as fórmulas na Metodologia Oficial CLT.',
        answerNode: (
          <p>
            Sim, a tabela do Artigo 130 da CLT estabelece que o empregado que acumular mais de 5 faltas injustificadas durante o período aquisitivo tem sua quantidade de dias de férias reduzida gradativamente. De 6 a 14 faltas o direito cai para 24 dias de descanso; de 15 a 23 faltas reduz-se para 18 dias; e acima de 32 faltas perde-se o direito integral às férias daquele ciclo. Consulte todas as faixas na página de{' '}
            <Link href="/br/metodologia/" className="font-bold text-brand-900 underline hover:text-brand-700">
              Metodologia e Fórmulas CLT
            </Link>
            .
          </p>
        ),
      },
    ],
  },
  {
    id: 'fgts',
    title: 'FGTS e Multa de 40%',
    icon: '🏦',
    description: 'Depósitos mensais, base de cálculo da multa e modalidades de saque.',
    items: [
      {
        question: 'Quem tem direito à multa de 40% do FGTS na demissão?',
        answerText:
          'Têm direito à multa rescisória de 40% sobre o saldo integral do FGTS os trabalhadores dispensados sem justa causa por iniciativa do empregador e os casos de rescisão indireta (falta grave cometida pela empresa). A multa não é devida no pedido de demissão, na demissão com justa causa ou no término normal de contrato por prazo determinado. Saiba tudo sobre a multa no Guia da Multa de 40% do FGTS.',
        answerNode: (
          <p>
            Têm direito à multa rescisória de 40% sobre o saldo integral do FGTS os trabalhadores dispensados sem justa causa por iniciativa do empregador e os casos de rescisão indireta (falta grave cometida pela empresa). A multa não é devida no pedido de demissão, na demissão com justa causa ou no término normal de contrato por prazo determinado. Entenda quem pode receber e os prazos no{' '}
            <Link href="/br/guias/multa-de-40-do-fgts/" className="font-bold text-brand-900 underline hover:text-brand-700">
              Guia da Multa de 40% do FGTS
            </Link>
            .
          </p>
        ),
      },
      {
        question: 'Como a empresa calcula a base da multa rescisória de 40%?',
        answerText:
          'A base para o cálculo dos 40% é a totalidade de todos os depósitos que a empresa realizou (ou deveria ter realizado) durante todo o contrato, corrigidos monetariamente pela Caixa. Mesmo que o trabalhador tenha realizado saques anteriores para compra de imóvel ou Saque-Aniversário, a multa incide sobre o saldo histórico global reconstituído, e não sobre o saldo remanescente na conta. Simule o valor exato na Calculadora de FGTS.',
        answerNode: (
          <p>
            A base para o cálculo dos 40% é a totalidade de todos os depósitos que a empresa realizou durante o contrato, corrigidos monetariamente pela Caixa Econômica Federal. Mesmo que o trabalhador tenha realizado saques anteriores para compra de casa própria ou pelo Saque-Aniversário, a multa incide sobre o saldo histórico acumulado reconstituído, e não sobre o saldo remanescente. Simule o valor devido na{' '}
            <Link href="/br/calculadora-fgts/" className="font-bold text-brand-900 underline hover:text-brand-700">
              Calculadora de FGTS 2026
            </Link>
            .
          </p>
        ),
      },
      {
        question: 'Quem opta pelo Saque-Aniversário perde o direito à multa de 40% do FGTS?',
        answerText:
          'Não, o trabalhador que aderiu ao Saque-Aniversário não perde a multa de 40% se for demitido sem justa causa; a empresa continua obrigada a pagar os 40% integrais sobre o montante depositado. O que o trabalhador não pode é sacar o restante do saldo que ficou retido na conta vinculada do FGTS, ficando sujeito ao período de carência da Caixa para retornar à modalidade Saque-Rescisão. Simule as parcelas do Saque-Aniversário na Calculadora de FGTS.',
        answerNode: (
          <p>
            Não, o trabalhador que aderiu ao Saque-Aniversário não perde a multa de 40% se for demitido sem justa causa; a empresa continua obrigada a pagar os 40% integrais sobre todo o saldo histórico depositado. A restrição é que o trabalhador não pode sacar o restante do saldo retido na conta vinculada, podendo apenas sacar a multa rescisória. Simule as parcelas e alíquotas na{' '}
            <Link href="/br/calculadora-fgts/" className="font-bold text-brand-900 underline hover:text-brand-700">
              Calculadora de FGTS e Saque-Aniversário
            </Link>
            .
          </p>
        ),
      },
      {
        question: 'Qual é a porcentagem mensal que a empresa deve depositar no FGTS?',
        answerText:
          'Para a grande maioria dos trabalhadores regidos pela CLT, o valor do depósito mensal do FGTS é de 8% da remuneração bruta total (salário, comissões, horas extras e adicionais). No caso de jovens admitidos pelo contrato de Jovem Aprendiz, a alíquota especial de depósito é reduzida para 2%. Esse recolhimento é obrigação exclusiva do empregador e não pode ser descontado do contracheque do funcionário. Confira as alíquotas na Calculadora de Salário Líquido.',
        answerNode: (
          <p>
            Para a grande maioria dos trabalhadores regidos pela CLT, o valor do depósito mensal do FGTS é de 8% da remuneração bruta total (salário, comissões, horas extras e adicionais). No caso de contratos de Jovem Aprendiz, a alíquota especial de depósito é de 2%. Esse recolhimento é obrigação exclusiva da empresa e não pode sofrer qualquer desconto do contracheque. Simule o custo e benefícios na{' '}
            <Link href="/br/calculadora-salario-liquido/" className="font-bold text-brand-900 underline hover:text-brand-700">
              Calculadora de Salário Líquido CLT
            </Link>
            .
          </p>
        ),
      },
      {
        question: 'Como consultar se a empresa está depositando o FGTS corretamente?',
        answerText:
          'O trabalhador pode verificar o extrato completo de depósitos do FGTS gratuitamente através do aplicativo oficial do FGTS da Caixa Econômica Federal ou pelo portal gov.br. Caso a empresa não esteja recolhendo mensalmente até o prazo legal, o funcionário pode cobrar o setor de RH, acionar a fiscalização do Ministério do Trabalho ou ingressar com pedido de rescisão indireta na Justiça. Veja mais detalhes sobre irregularidades no Guia de Direitos na Demissão.',
        answerNode: (
          <p>
            O trabalhador pode verificar o extrato completo de depósitos do FGTS gratuitamente através do aplicativo oficial do FGTS da Caixa Econômica Federal ou pelo portal gov.br. Caso a empresa não esteja recolhendo mensalmente até o prazo legal, o funcionário pode cobrar o setor de RH, acionar a fiscalização do Ministério do Trabalho ou até solicitar rescisão indireta. Veja seus direitos resguardados no{' '}
            <Link href="/br/guias/direitos-na-demissao-sem-justa-causa/" className="font-bold text-brand-900 underline hover:text-brand-700">
              Guia de Direitos na Demissão Sem Justa Causa
            </Link>
            .
          </p>
        ),
      },
    ],
  },
  {
    id: 'salario-liquido',
    title: 'Salário Líquido, INSS e IRRF',
    icon: '💰',
    description: 'Tabela de retenções do INSS, alíquotas do IRRF e desconto simplificado.',
    items: [
      {
        question: 'Como funciona o cálculo progressivo do INSS em 2026?',
        answerText:
          'Desde a Reforma da Previdência, o desconto do INSS é progressivo e fatiado em 4 faixas de alíquotas (7,5%, 9%, 12% e 14%), incidindo apenas sobre a parcela do salário que se enquadra em cada fatia. Isso assegura que quem ganha menos recolha percentuais menores e quem ganha salários maiores contribua com alíquotas maiores até o teto previdenciário. Consulte as fatias detalhadas na Tabela INSS 2026.',
        answerNode: (
          <p>
            Desde a Reforma da Previdência, o desconto do INSS é progressivo e fatiado em 4 faixas de alíquotas (7,5%, 9%, 12% e 14%), incidindo apenas sobre a parcela salarial que se enquadra em cada fatia. Isso garante justiça fiscal, fazendo com que salários menores paguem taxas médias mais baixas até o teto de contribuição. Consulte os valores exatos de cada faixa na{' '}
            <Link href="/br/tabela-inss/" className="font-bold text-brand-900 underline hover:text-brand-700">
              Tabela INSS 2026 Atualizada
            </Link>
            .
          </p>
        ),
      },
      {
        question: 'Qual é o valor do teto do INSS e desconto máximo mensal em 2026?',
        answerText:
          'Em 2026, o teto máximo de remuneração para fins de benefício e recolhimento previdenciário do RGPS é de R$ 8.157,41. Em virtude do cálculo progressivo por faixas, o desconto mensal máximo de INSS que pode ser retido do contracheque do empregado celetista é de R$ 951,64. Qualquer parcela de remuneração acima desse valor é isenta de retenção previdenciária. Calcule seu salário líquido na Calculadora de Salário Líquido.',
        answerNode: (
          <p>
            Em 2026, o teto máximo de remuneração para fins de benefício e recolhimento previdenciário do RGPS é de R$ 8.157,41. Em virtude do cálculo progressivo por faixas, o desconto mensal máximo de INSS que pode ser retido do contracheque do empregado celetista é de R$ 951,64. Qualquer parcela salarial acima desse valor teto é isenta de retenção previdenciária do INSS. Veja a simulação completa na{' '}
            <Link href="/br/calculadora-salario-liquido/" className="font-bold text-brand-900 underline hover:text-brand-700">
              Calculadora de Salário Líquido 2026
            </Link>
            .
          </p>
        ),
      },
      {
        question: 'O que é o desconto simplificado do Imposto de Renda (IRRF) e como funciona?',
        answerText:
          'Instituído pela Lei nº 14.663/2023, o desconto simplificado mensal permite abater um valor padrão fixo (R$ 564,80) da base de cálculo do IRRF em substituição às deduções legais tradicionais. Na prática, o sistema da folha ou a calculadora compara automaticamente a soma do INSS e dependentes com o abatimento fixo e aplica o que gerar o menor imposto para o trabalhador. Consulte as alíquotas e faixas na Tabela IRRF 2026.',
        answerNode: (
          <p>
            Instituído pela Lei nº 14.663/2023, o desconto simplificado mensal permite abater um valor padrão fixo (R$ 564,80) da base de cálculo do IRRF em substituição às deduções legais tradicionais (INSS e dependentes). O sistema compara automaticamente qual das duas regras é mais vantajosa para o contribuinte, aplicando a menor cobrança tributária possível. Consulte as faixas vigentes na{' '}
            <Link href="/br/tabela-irrf/" className="font-bold text-brand-900 underline hover:text-brand-700">
              Tabela IRRF 2026 Atualizada
            </Link>
            .
          </p>
        ),
      },
      {
        question: 'Qual o valor da dedução por dependente no Imposto de Renda em 2026?',
        answerText:
          'O valor legal permitido pela Receita Federal para abatimento mensal por dependente legal comprovado (filhos até 21 anos, cônjuge, etc.) é de R$ 189,59 na base de cálculo do IRRF da folha de pagamento. Essa dedução é considerada no modelo tradicional de deduções para reduzir a alíquota efetiva paga pelo contribuinte. Simule os dependentes na Calculadora de Salário Líquido.',
        answerNode: (
          <p>
            O valor legal fixado pela Receita Federal para abatimento mensal por dependente legal (filhos até 21 anos ou até 24 anos se universitários, cônjuge, etc.) é de R$ 189,59 na base de cálculo do imposto na fonte. Essa dedução é aplicada na opção tradicional para reduzir a retenção de imposto retido. Adicione seus dependentes e confira o impacto na{' '}
            <Link href="/br/calculadora-salario-liquido/" className="font-bold text-brand-900 underline hover:text-brand-700">
              Calculadora de Salário Líquido
            </Link>
            .
          </p>
        ),
      },
      {
        question: 'Vale-transporte e alimentação podem ser descontados do salário líquido?',
        answerText:
          'Sim, a Lei nº 7.418/1985 permite o desconto de até 6% do salário base do trabalhador a título de fornecimento de vale-transporte (ou o custo real das passagens, o que for menor). Já para o vale-refeição ou alimentação vinculado ao Programa de Alimentação do Trabalhador (PAT), a empresa pode descontar até 20% do valor do benefício, conforme estipulado na convenção coletiva. Verifique todos os descontos na Calculadora de Salário Líquido.',
        answerNode: (
          <p>
            Sim, a Lei nº 7.418/1985 permite o desconto de até 6% do salário base do trabalhador a título de fornecimento de vale-transporte (ou o custo real das passagens, o que for menor). Já para o vale-refeição ou alimentação vinculado ao PAT, a empresa pode descontar até 20% do valor do benefício, conforme previsto na convenção da categoria. Calcule seu salário em mãos na{' '}
            <Link href="/br/calculadora-salario-liquido/" className="font-bold text-brand-900 underline hover:text-brand-700">
              Calculadora de Salário Líquido
            </Link>
            .
          </p>
        ),
      },
    ],
  },
  {
    id: 'horas-extras',
    title: 'Horas Extras, Adicional Noturno e DSR',
    icon: '⏰',
    description: 'Percentuais, reflexos no descanso remunerado e limites de jornada.',
    items: [
      {
        question: 'Qual é o percentual mínimo da hora extra durante a semana e aos domingos?',
        answerText:
          'Pelo Artigo 59 da CLT e Artigo 7º, inciso XVI, da Constituição, as horas extras prestadas de segunda a sábado devem ser pagas com acréscimo mínimo de 50% sobre o valor da hora normal. Já as horas trabalhadas em domingos e feriados em que não houver folga compensatória prevista na escala devem ser pagas com acréscimo de 100% (em dobro). Simule a remuneração das horas na Calculadora de Horas Extras.',
        answerNode: (
          <p>
            Pelo Artigo 59 da CLT e Artigo 7º, inciso XVI, da Constituição, as horas extras prestadas de segunda a sábado devem ser pagas com acréscimo mínimo de 50% sobre o valor da hora comum. Já as horas laboradas em domingos e feriados em que não houver folga compensatória na semana devem ser remuneradas com 100% de adicional (em dobro). Simule os valores por hora na{' '}
            <Link href="/br/calculadora-hora-extra/" className="font-bold text-brand-900 underline hover:text-brand-700">
              Calculadora de Horas Extras 2026
            </Link>
            .
          </p>
        ),
      },
      {
        question: 'Como calcular o reflexo das horas extras no DSR (Descanso Semanal Remunerado)?',
        answerText:
          'Conforme a Lei nº 605/1949 e a Súmula 172 do TST, as horas extras habituais geram reflexo obrigatório no DSR. A fórmula consagrada consiste em somar o valor total das horas extras do mês, dividir pelo número de dias úteis daquele mês civil e multiplicar pelo número de domingos e feriados do mesmo período. Faça esse cálculo automático na Calculadora de Horas Extras.',
        answerNode: (
          <p>
            Conforme a Lei nº 605/1949 e a Súmula 172 do TST, as horas extras habituais geram reflexo obrigatório no Descanso Semanal Remunerado (DSR). A fórmula consagrada consiste em somar o valor das horas extras do mês, dividir pelo número de dias úteis e multiplicar pelo número de domingos e feriados do mês apurado. Faça a apuração precisa na{' '}
            <Link href="/br/calculadora-hora-extra/" className="font-bold text-brand-900 underline hover:text-brand-700">
              Calculadora de Horas Extras e DSR
            </Link>
            .
          </p>
        ),
      },
      {
        question: 'Qual é o percentual do adicional noturno e como funciona a hora reduzida?',
        answerText:
          'Para o trabalhador urbano, o trabalho executado entre 22h de um dia e 5h do dia seguinte tem adicional noturno de no mínimo 20% sobre a hora diurna (Art. 73 da CLT). Além disso, a hora noturna é legalmente reduzida, sendo computada como tendo 52 minutos e 30 segundos em vez de 60 minutos normais. Saiba mais sobre as bases na Metodologia e Fórmulas CLT.',
        answerNode: (
          <p>
            Para o trabalhador urbano celetista, o trabalho executado entre as 22h de um dia e as 5h do dia seguinte gera direito ao adicional noturno de no mínimo 20% sobre a hora diurna (Art. 73 da CLT). Além disso, a hora noturna é legalmente reduzida, sendo computada a cada 52 minutos e 30 segundos (ficção legal protetiva). Consulte a fundamentação completa na{' '}
            <Link href="/br/metodologia/" className="font-bold text-brand-900 underline hover:text-brand-700">
              Metodologia e Fórmulas Oficiais CLT
            </Link>
            .
          </p>
        ),
      },
      {
        question: 'Quem ocupa cargo de confiança ou gerência tem direito a horas extras?',
        answerText:
          'Pelo Artigo 62, inciso II, da CLT, os empregados que exercem cargos de gestão ou confiança (diretores, gerentes gerais e chefes de departamento) com padrão salarial diferenciado (gratificação de função de no mínimo 40% do salário efetivo) não estão submetidos ao controle estrito de ponto e, portanto, não recebem horas extras. Caso não recebam a gratificação exigida por lei ou sofram controle de horário rígido, têm direito ao pagamento. Simule na Calculadora de Rescisão.',
        answerNode: (
          <p>
            Pelo Artigo 62, inciso II, da CLT, os empregados que exercem cargos de gestão ou confiança com padrão salarial diferenciado (gratificação de função de pelo menos 40% do salário efetivo) não estão submetidos a controle de ponto e não recebem horas extras. Se a empresa mantiver controle estrito de horário ou não pagar a gratificação mínima, o direito às horas extras pode ser reconhecido judicialmente. Simule seus direitos na{' '}
            <Link href="/br/calculadora-rescisao/" className="font-bold text-brand-900 underline hover:text-brand-700">
              Calculadora de Rescisão Trabalhista CLT
            </Link>
            .
          </p>
        ),
      },
    ],
  },
];

export default function PerguntasFrequentesPage() {
  const breadcrumbs = [
    { label: 'Calcula', href: '/' },
    { label: 'Brasil', href: '/br/' },
    { label: 'Perguntas Frequentes CLT', href: '' },
  ];

  // Flatten all FAQs into plain string format for JsonLd FAQPage schema
  const flatFaqsForJsonLd = FAQ_CATEGORIES.flatMap((cat) =>
    cat.items.map((item) => ({
      q: item.question,
      a: item.answerText,
    }))
  );

  return (
    <>
      <JsonLd
        country="br"
        slug="br/perguntas-frequentes"
        type="info"
        title="Perguntas Frequentes sobre Direitos Trabalhistas CLT 2026 | Calcula Brasil"
        description="Tire suas dúvidas sobre rescisão, 13º salário, férias, FGTS, horas extras e salário líquido com respostas diretas e fundamentadas na CLT 2026."
        faqs={flatFaqsForJsonLd}
        breadcrumbs={[
          { name: 'Calcula', path: '/' },
          { name: 'Brasil', path: '/br/' },
          { name: 'Perguntas Frequentes', path: '/br/perguntas-frequentes/' },
        ]}
      />
      <Header country="br" />
      <main className="flex-1 max-w-4xl mx-auto px-4 py-8 sm:py-12 w-full">
        {/* Breadcrumbs */}
        <div className="mb-6">
          <Breadcrumbs items={breadcrumbs} />
        </div>

        {/* Hero Header */}
        <header className="mb-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-900 bg-brand-50 rounded-full mb-3">
            <span>❓</span>
            <span>Central de Dúvidas Trabalhistas • 30+ Respostas Explicadas</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Perguntas Frequentes sobre a CLT 2026
          </h1>
          <p className="text-slate-600 text-base sm:text-xl leading-relaxed max-w-3xl">
            Respostas práticas e embasadas na legislação para as dúvidas mais comuns sobre rescisão contratual, 13º salário, férias, FGTS, adicionais e descontos da folha de pagamento.
          </p>
        </header>

        {/* Quick Category Jump Navigation */}
        <nav aria-label="Navegação rápida por tema" className="mb-12">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
            Navegar por Categoria
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {FAQ_CATEGORIES.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="flex items-center gap-2 p-3 bg-white border border-slate-200 rounded-xl hover:border-brand-900 hover:bg-brand-50/50 transition-all text-xs font-semibold text-slate-800"
              >
                <span>{cat.icon}</span>
                <span className="truncate">{cat.title}</span>
              </a>
            ))}
          </div>
        </nav>

        {/* FAQ Category Sections */}
        <div className="space-y-12">
          {FAQ_CATEGORIES.map((cat) => (
            <section key={cat.id} id={cat.id} className="scroll-mt-20">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{cat.icon}</span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  {cat.title}
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 mb-4">
                {cat.description}
              </p>

              <div className="space-y-3">
                {cat.items.map((item, index) => (
                  <details
                    key={`${cat.id}-${index}`}
                    className="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm transition-all duration-200 open:border-brand-300"
                  >
                    <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden font-semibold text-slate-900 group-hover:text-brand-900 focus:outline-none">
                      <span className="text-base sm:text-lg leading-snug">
                        {item.question}
                      </span>
                      <span
                        className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-brand-50 group-hover:text-brand-900 transition-colors"
                        aria-hidden="true"
                      >
                        <svg
                          className="w-4 h-4 transform group-open:rotate-180 transition-transform duration-200"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </summary>
                    <div className="px-5 pb-5 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-100 mt-1">
                      <div className="pt-3">{item.answerNode}</div>
                    </div>
                  </details>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Footer Guidance Box */}
        <div className="mt-12 bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-bold text-slate-900 text-sm">Não encontrou sua dúvida?</h3>
            <p className="text-xs text-slate-600">
              Entre em contato com nossa equipe técnica ou consulte nossa metodologia jurídica completa.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/br/contato/"
              className="text-xs font-semibold px-4 py-2 bg-brand-900 hover:bg-brand-950 text-white rounded-xl shadow-sm transition-colors"
            >
              Falar Conosco →
            </Link>
            <Link
              href="/br/metodologia/"
              className="text-xs font-semibold px-4 py-2 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 rounded-xl transition-colors"
            >
              Ver Metodologia CLT →
            </Link>
          </div>
        </div>
      </main>
      <Footer country="br" />
    </>
  );
}
