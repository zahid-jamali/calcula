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
    slug: 'br/metodologia',
    title: 'Metodologia e Fórmulas CLT',
    description:
      'Metodologia transparente e embasamento jurídico dos cálculos trabalhistas do Calcula Brasil segundo a CLT e legislação oficial 2026.',
  });
}

const OFFICIAL_SOURCES = [
  {
    institution: 'Presidência da República / Casa Civil',
    document: 'Consolidação das Leis do Trabalho (CLT) - Decreto-Lei nº 5.452/1943',
    url: 'https://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm',
    domain: 'planalto.gov.br',
  },
  {
    institution: 'Presidência da República / Casa Civil',
    document: 'Lei nº 12.506/2011 (Aviso Prévio Proporcional até 90 dias)',
    url: 'https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/lei/l12506.htm',
    domain: 'planalto.gov.br',
  },
  {
    institution: 'Presidência da República / Casa Civil',
    document: 'Lei nº 8.036/1990 (Fundo de Garantia do Tempo de Serviço - FGTS)',
    url: 'https://www.planalto.gov.br/ccivil_03/leis/l8036.htm',
    domain: 'planalto.gov.br',
  },
  {
    institution: 'Presidência da República / Casa Civil',
    document: 'Lei nº 4.090/1962 e Lei nº 4.749/1965 (Gratificação de Natal / 13º Salário)',
    url: 'https://www.planalto.gov.br/ccivil_03/leis/l4090.htm',
    domain: 'planalto.gov.br',
  },
  {
    institution: 'Presidência da República / Casa Civil',
    document: 'Lei nº 7.998/1990 (Programa do Seguro-Desemprego)',
    url: 'https://www.planalto.gov.br/ccivil_03/leis/l7998.htm',
    domain: 'planalto.gov.br',
  },
  {
    institution: 'Ministério da Previdência Social / MF',
    document: 'Portaria Interministerial MPS/MF (Tabela Progressiva de Contribuição do INSS)',
    url: 'https://www.gov.br/inss/pt-br/direitos-e-deveres/tabela-de-contribuicao-mensal',
    domain: 'gov.br/inss',
  },
  {
    institution: 'Secretaria da Receita Federal do Brasil',
    document: 'Tabela Progressiva Mensal do IRRF e Desconto Simplificado (Lei nº 14.663/2023)',
    url: 'https://www.gov.br/receitafederal/pt-br/assuntos/meu-imposto-de-renda/tabelas',
    domain: 'gov.br/receitafederal',
  },
  {
    institution: 'Ministério do Trabalho e Emprego / CODEFAT',
    document: 'Resoluções CODEFAT (Tabela de Faixas e Parcelas do Seguro-Desemprego)',
    url: 'https://www.gov.br/trabalho-e-emprego/pt-br/servicos/trabalhador/seguro-desemprego',
    domain: 'gov.br/trabalho-e-emprego',
  },
  {
    institution: 'Caixa Econômica Federal',
    document: 'Circulares e Tabelas de Alíquotas do Saque-Aniversário do FGTS',
    url: 'https://www.caixa.gov.br/beneficios-trabalhador/fgts/saque-FGTS/saque-aniversario',
    domain: 'caixa.gov.br',
  },
];

export default function MetodologiaPage() {
  const breadcrumbs = [
    { label: 'Calcula', href: '/' },
    { label: 'Brasil', href: '/br/' },
    { label: 'Metodologia e Fórmulas CLT', href: '' },
  ];

  return (
    <>
      <JsonLd
        country="br"
        slug="br/metodologia"
        type="info"
        title="Metodologia e Fórmulas Oficiais CLT | Calcula Brasil"
        description="Metodologia transparente e embasamento jurídico dos cálculos trabalhistas do Calcula Brasil segundo a CLT e legislação oficial 2026."
        breadcrumbs={[
          { name: 'Calcula', path: '/' },
          { name: 'Brasil', path: '/br/' },
          { name: 'Metodologia', path: '/br/metodologia/' },
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
            <span>⚖️</span>
            <span>E-E-A-T • Transparência Algorítmica</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Metodologia e Fórmulas Oficiais CLT
          </h1>
          <p className="text-slate-600 text-base sm:text-xl leading-relaxed max-w-3xl">
            Entenda como cada cálculo é construído. Nossas simulações seguem a letra exata da lei trabalhista brasileira, portarias interministeriais e resoluções dos órgãos reguladores.
          </p>
        </header>

        {/* Policy Summary Box */}
        <div className="bg-amber-50 border-l-4 border-amber-600 p-5 sm:p-6 rounded-r-2xl mb-10 shadow-sm text-amber-950">
          <h2 className="text-lg font-bold mb-2 flex items-center gap-2">
            <span>🛡️</span> Política de Revisão e Atualização Contínua
          </h2>
          <p className="text-sm leading-relaxed mb-3">
            Todas as tabelas de alíquotas (INSS, IRRF, faixas do seguro-desemprego e salário mínimo) são atualizadas todo mês de <strong>janeiro</strong> de cada ano civil e <strong>imediatamente revisadas</strong> sempre que o Governo Federal ou o Congresso Nacional publica novas medidas provisórias, leis ou portarias.
          </p>
          <p className="text-xs text-amber-800 font-mono">
            Última verificação de conformidade jurídica: Janeiro de 2026 • Versão das regras: 2026.1
          </p>
        </div>

        {/* Calculators Methodology Sections */}
        <div className="space-y-10">
          {/* 1. Rescisão de Contrato */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                1. Rescisão de Contrato de Trabalho
              </h2>
              <Link
                href="/br/calculadora-rescisao/"
                className="text-xs font-bold text-brand-900 bg-brand-50 hover:bg-brand-100 px-3 py-1 rounded-full transition-colors"
              >
                Ver Calculadora →
              </Link>
            </div>
            <p className="text-sm text-slate-600 mb-4">
              <strong>Bases Legais:</strong> CLT Art. 477 (prazos e homologação), Art. 484-A (acordo mútuo), Art. 487 (aviso prévio) e Lei nº 12.506/2011.
            </p>
            <div className="space-y-4 text-sm text-slate-700">
              <div>
                <h3 className="font-bold text-slate-900">Saldo de Salário:</h3>
                <code className="block bg-slate-50 border border-slate-200 rounded-lg p-3 font-mono text-xs text-slate-800 mt-1">
                  Saldo de Salário = (Salário Base / 30) × Dias Trabalhados no Mês da Rescisão
                </code>
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Aviso Prévio Proporcional Indenizado (Lei 12.506/2011):</h3>
                <code className="block bg-slate-50 border border-slate-200 rounded-lg p-3 font-mono text-xs text-slate-800 mt-1">
                  Dias de Aviso = min(90, 30 + (Anos Completos de Serviço × 3))
                  <br />
                  Valor do Aviso = (Salário Base / 30) × Dias de Aviso
                </code>
                <p className="text-xs text-slate-500 mt-1">
                  <em>Projeção do Aviso:</em> Quando indenizado, os dias do aviso prévio somam-se ao tempo de serviço para efeito de cômputo dos avos de 13º salário e férias proporcionais (Art. 487, § 1º, da CLT).
                </p>
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Rescisão por Acordo Comum (Art. 484-A da CLT):</h3>
                <ul className="list-disc pl-5 text-xs space-y-1 mt-1 text-slate-600">
                  <li>Aviso prévio indenizado pago pela metade (50%).</li>
                  <li>Multa rescisória do FGTS reduzida para 20% sobre o saldo.</li>
                  <li>Saque autorizado de até 80% dos valores depositados na conta vinculada do FGTS.</li>
                  <li>Sem direito ao recebimento do benefício do Seguro-Desemprego.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 2. 13º Salário */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                2. Gratificação de Natal (13º Salário)
              </h2>
              <Link
                href="/br/calculadora-13-salario/"
                className="text-xs font-bold text-brand-900 bg-brand-50 hover:bg-brand-100 px-3 py-1 rounded-full transition-colors"
              >
                Ver Calculadora →
              </Link>
            </div>
            <p className="text-sm text-slate-600 mb-4">
              <strong>Bases Legais:</strong> Lei nº 4.090/1962, Lei nº 4.749/1965 e Decreto nº 57.155/1965.
            </p>
            <div className="space-y-4 text-sm text-slate-700">
              <div>
                <h3 className="font-bold text-slate-900">Regra de Avos (Fração de 15 Dias):</h3>
                <p className="text-xs text-slate-600 mb-2">
                  A fração igual ou superior a 15 dias trabalhados em um mesmo mês civil dá direito a 1/12 avo da gratificação natalina integral.
                </p>
                <code className="block bg-slate-50 border border-slate-200 rounded-lg p-3 font-mono text-xs text-slate-800">
                  13º Integral = (Salário Bruto + Médias de Horas Extras e Adicionais / 12) × Meses Trabalhados
                  <br />
                  1ª Parcela (Adiantamento até 30/Nov) = 50% do valor bruto proporcional (sem deduções fiscais)
                  <br />
                  2ª Parcela (Quitação até 20/Dez) = Valor Bruto Total - 1ª Parcela - INSS Integral - IRRF Integral
                </code>
              </div>
            </div>
          </section>

          {/* 3. Férias e Abono Pecuniário */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                3. Férias e Abono Pecuniário (Venda de 1/3)
              </h2>
              <Link
                href="/br/calculadora-ferias/"
                className="text-xs font-bold text-brand-900 bg-brand-50 hover:bg-brand-100 px-3 py-1 rounded-full transition-colors"
              >
                Ver Calculadora →
              </Link>
            </div>
            <p className="text-sm text-slate-600 mb-4">
              <strong>Bases Legais:</strong> Artigos 129 a 145 da CLT e Art. 7º, inciso XVII, da Constituição Federal (1/3 Constitucional).
            </p>
            <div className="space-y-4 text-sm text-slate-700">
              <div>
                <h3 className="font-bold text-slate-900">Fórmula de Férias com Terço Constitucional:</h3>
                <code className="block bg-slate-50 border border-slate-200 rounded-lg p-3 font-mono text-xs text-slate-800 mt-1">
                  Remuneração de Férias = (Salário Base / 30) × Dias de Gozo
                  <br />
                  Terço Constitucional = Remuneração de Férias / 3
                  <br />
                  Férias Brutas = Remuneração de Férias + Terço Constitucional
                </code>
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Abono Pecuniário (Venda de 10 dias - Art. 143 CLT):</h3>
                <code className="block bg-slate-50 border border-slate-200 rounded-lg p-3 font-mono text-xs text-slate-800 mt-1">
                  Abono Pecuniário = (Salário Base / 30) × 10
                  <br />
                  Terço do Abono = Abono Pecuniário / 3
                  <br />
                  Total do Abono = Abono Pecuniário + Terço do Abono (Isento de INSS e IRRF)
                </code>
              </div>
            </div>
          </section>

          {/* 4. Salário Líquido, INSS e IRRF */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                4. Salário Líquido, Descontos de INSS e IRRF
              </h2>
              <Link
                href="/br/calculadora-salario-liquido/"
                className="text-xs font-bold text-brand-900 bg-brand-50 hover:bg-brand-100 px-3 py-1 rounded-full transition-colors"
              >
                Ver Calculadora →
              </Link>
            </div>
            <p className="text-sm text-slate-600 mb-4">
              <strong>Bases Legais:</strong> Emenda Constitucional nº 103/2019, Portaria Interministerial MPS/MF vigente e Lei nº 14.663/2023 (Desconto Simplificado do IRRF).
            </p>
            <div className="space-y-4 text-sm text-slate-700">
              <div>
                <h3 className="font-bold text-slate-900">Cálculo Progressivo do INSS:</h3>
                <p className="text-xs text-slate-600 mb-2">
                  O desconto não é mais calculado pela aplicação de uma única alíquota sobre o total. O cálculo é segregado por faixas remuneratórias até o teto previdenciário (R$ 8.157,41 em 2026), com desconto máximo de R$ 951,64.
                </p>
                <code className="block bg-slate-50 border border-slate-200 rounded-lg p-3 font-mono text-xs text-slate-800">
                  Desconto INSS = ∑ (Valor na Faixa i × Alíquota i)
                </code>
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Cálculo do IRRF e Dedução Simplificada:</h3>
                <code className="block bg-slate-50 border border-slate-200 rounded-lg p-3 font-mono text-xs text-slate-800 mt-1">
                  Dedução Tradicional = Desconto INSS + (Dependentes × R$ 189,59) + Pensão Alimentícia
                  <br />
                  Dedução Aplicável = max(Dedução Tradicional, Desconto Simplificado R$ 564,80)
                  <br />
                  Base de Cálculo IRRF = Salário Bruto - Dedução Aplicável
                  <br />
                  IRRF a Reter = max(0, (Base de Cálculo × Alíquota Faixa) - Parcela a Deduzir)
                </code>
              </div>
            </div>
          </section>

          {/* 5. FGTS e Multa Rescisória */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                5. FGTS e Multa Rescisória de 40%
              </h2>
              <Link
                href="/br/calculadora-fgts/"
                className="text-xs font-bold text-brand-900 bg-brand-50 hover:bg-brand-100 px-3 py-1 rounded-full transition-colors"
              >
                Ver Calculadora →
              </Link>
            </div>
            <p className="text-sm text-slate-600 mb-4">
              <strong>Bases Legais:</strong> Lei nº 8.036/1990 e Art. 18 da Lei do FGTS.
            </p>
            <div className="space-y-4 text-sm text-slate-700">
              <div>
                <h3 className="font-bold text-slate-900">Depósito Mensal e Multa Rescisória:</h3>
                <code className="block bg-slate-50 border border-slate-200 rounded-lg p-3 font-mono text-xs text-slate-800 mt-1">
                  Depósito Mensal = 8% sobre a remuneração bruta (salário + adicionais + horas extras + gratificações)
                  <br />
                  Multa Rescisória Sem Justa Causa = 40% sobre o saldo histórico total de depósitos corrigidos
                  <br />
                  Multa em Rescisão por Acordo (Art. 484-A) = 20% sobre o saldo total
                </code>
              </div>
            </div>
          </section>

          {/* 6. Horas Extras e DSR */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                6. Horas Extras e Reflexo no DSR
              </h2>
              <Link
                href="/br/calculadora-hora-extra/"
                className="text-xs font-bold text-brand-900 bg-brand-50 hover:bg-brand-100 px-3 py-1 rounded-full transition-colors"
              >
                Ver Calculadora →
              </Link>
            </div>
            <p className="text-sm text-slate-600 mb-4">
              <strong>Bases Legais:</strong> Art. 59 da CLT, Art. 7º, inciso XVI, da CF/88, Lei nº 605/1949 e Súmula 172 do TST.
            </p>
            <div className="space-y-4 text-sm text-slate-700">
              <div>
                <h3 className="font-bold text-slate-900">Valor da Hora Extra e Divisor Padrão:</h3>
                <code className="block bg-slate-50 border border-slate-200 rounded-lg p-3 font-mono text-xs text-slate-800 mt-1">
                  Valor da Hora Normal = Salário Base / Divisor (ex: 220 horas para 44h semanais)
                  <br />
                  Hora Extra 50% = Valor da Hora Normal × 1,50
                  <br />
                  Hora Extra 100% = Valor da Hora Normal × 2,00
                  <br />
                  Reflexo no DSR = (Total das Horas Extras do Mês / Dias Úteis do Mês) × Domingos e Feriados
                </code>
              </div>
            </div>
          </section>

          {/* 7. Seguro-Desemprego */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                7. Seguro-Desemprego
              </h2>
              <Link
                href="/br/calculadora-seguro-desemprego/"
                className="text-xs font-bold text-brand-900 bg-brand-50 hover:bg-brand-100 px-3 py-1 rounded-full transition-colors"
              >
                Ver Calculadora →
              </Link>
            </div>
            <p className="text-sm text-slate-600 mb-4">
              <strong>Bases Legais:</strong> Lei nº 7.998/1990 com alterações da Lei nº 13.134/2015 e Resoluções CODEFAT 2026.
            </p>
            <div className="space-y-4 text-sm text-slate-700">
              <div>
                <h3 className="font-bold text-slate-900">Cálculo das Parcelas por Média Salarial dos Últimos 3 Meses:</h3>
                <code className="block bg-slate-50 border border-slate-200 rounded-lg p-3 font-mono text-xs text-slate-800 mt-1">
                  Se Média Salarial ≤ R$ 2.074,47: Parcela = Média × 0,80
                  <br />
                  Se Média entre R$ 2.074,48 e R$ 3.457,49: Parcela = R$ 1.659,58 + ((Média - 2.074,47) × 0,50)
                  <br />
                  Se Média &gt; R$ 3.457,49: Parcela Fixa no Teto de R$ 2.351,09
                  <br />
                  Piso Nacional: Nenhuma parcela pode ser inferior ao salário mínimo (R$ 1.518,00 em 2026).
                </code>
              </div>
            </div>
          </section>
        </div>

        {/* Official Sources Table */}
        <section className="mt-12 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <span>🏛️</span> Tabela de Fontes Oficiais Governamentais
          </h2>
          <p className="text-sm text-slate-600 mb-6">
            O Calcula Brasil audita suas regras exclusivamente através de portais oficiais com domínio <code>.gov.br</code> e do Diário Oficial da União:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-700">
              <thead className="bg-slate-50 text-xs uppercase font-semibold text-slate-700 border-b border-slate-200">
                <tr>
                  <th scope="col" className="px-4 py-3">Órgão Regulador</th>
                  <th scope="col" className="px-4 py-3">Norma / Base Legal</th>
                  <th scope="col" className="px-4 py-3">Fonte Oficial</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-xs sm:text-sm">
                {OFFICIAL_SOURCES.map((source, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50">
                    <td className="px-4 py-3 font-semibold text-slate-900">{source.institution}</td>
                    <td className="px-4 py-3 text-slate-700">{source.document}</td>
                    <td className="px-4 py-3">
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-mono text-brand-900 underline hover:text-brand-700 text-xs"
                      >
                        <span>{source.domain}</span>
                        <span aria-hidden="true">↗</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Reporting discrepancies link */}
        <div className="mt-8 text-center text-sm text-slate-500">
          Encontrou uma convenção coletiva ou atualização legislativa recente?{' '}
          <Link href="/br/contato/" className="font-semibold text-brand-900 underline hover:text-brand-700">
            Avise nossa equipe de revisão jurídica
          </Link>
          .
        </div>
      </main>
      <Footer country="br" />
    </>
  );
}
