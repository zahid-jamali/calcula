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
    slug: 'br/aviso-legal',
    title: 'Aviso Legal e Isenção',
    description:
      'Aviso legal e isenção de responsabilidade do Calcula Brasil: simulações informativas e educativas baseadas na legislação CLT 2026.',
  });
}

export default function AvisoLegalPage() {
  const breadcrumbs = [
    { label: 'Calcula', href: '/' },
    { label: 'Brasil', href: '/br/' },
    { label: 'Aviso Legal', href: '' },
  ];

  return (
    <>
      <JsonLd
        country="br"
        slug="br/aviso-legal"
        type="info"
        title="Aviso Legal e Isenção de Responsabilidade | Calcula Brasil"
        description="Aviso legal e isenção de responsabilidade do Calcula Brasil: simulações informativas e educativas baseadas na legislação CLT 2026."
        breadcrumbs={[
          { name: 'Calcula', path: '/' },
          { name: 'Brasil', path: '/br/' },
          { name: 'Aviso Legal', path: '/br/aviso-legal/' },
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
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-800 bg-amber-50 rounded-full mb-3">
            <span>⚖️</span>
            <span>Segurança Jurídica • Transparência Institucional</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Aviso Legal e Isenção de Responsabilidade
          </h1>
          <p className="text-slate-600 text-base sm:text-xl leading-relaxed max-w-3xl">
            Entenda o escopo, as premissas e a natureza estritamente informativa e pedagógica das ferramentas disponibilizadas pelo Calcula Brasil.
          </p>
        </header>

        {/* Highlight Alert Box */}
        <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded-r-2xl mb-10 shadow-sm text-amber-950">
          <h2 className="text-lg font-bold mb-2 flex items-center gap-2">
            <span>⚠️</span> Simulações Matemáticas Sem Efeito Vinculante
          </h2>
          <p className="text-sm leading-relaxed">
            Os resultados exibidos em todas as páginas do Calcula Brasil constituem <strong>simulações e estimativas aproximadas</strong> para fins didáticos e de conferência preliminar. Elas <strong>não substituem nem equivalem</strong> a pareceres jurídicos formais, cálculos periciais homologados pela Justiça do Trabalho ou demonstrativos emitidos pelo Ministério do Trabalho e Emprego (MTE).
          </p>
        </div>

        {/* Content Article */}
        <article className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-8">
          {/* Section 1 */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span>1.</span> Ausência de Relação Profissional ou Consultoria
            </h2>
            <p className="mb-3">
              A disponibilização e o uso deste portal não configuram, em nenhuma hipótese, relação de prestação de serviços advocatícios, assessoria contábil ou vínculo de consultoria tributária entre o usuário e a equipe do Calcula ou da rede Zetawala.
            </p>
            <p>
              Nenhuma informação fornecida neste site deve ser interpretada como incentivo à propositura de ações judiciais ou dispensa de conferência técnica profissional especializada.
            </p>
          </section>

          {/* Section 2 */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span>2.</span> Prevalência de Acordos e Convenções Coletivas (CCT e ACT)
            </h2>
            <p className="mb-3">
              No ordenamento jurídico trabalhista brasileiro, as <strong>Convenções Coletivas de Trabalho (CCT)</strong> e os <strong>Acordos Coletivos de Trabalho (ACT)</strong> firmados entre sindicatos de trabalhadores e empregadores possuem força de lei e prevalência sobre a CLT geral em diversos pontos (Princípio da Adequação Setorial Negociada e Art. 611-A da CLT).
            </p>
            <p className="mb-3">
              Nossas calculadoras aplicam as regras gerais da CLT e da legislação federal comum. Cláusulas convencionais específicas, tais como:
            </p>
            <ul className="list-disc pl-5 space-y-1 mb-3 text-sm text-slate-600">
              <li>Pisos salariais regionais ou de categorias diferenciadas;</li>
              <li>Percentuais de horas extras superiores a 50% ou adicionais noturnos diferenciados;</li>
              <li>Estabilidades provisórias pré-aposentadoria ou convencionais;</li>
              <li>Regras de gratificação diferenciadas ou prazos de aviso prévio mais benéficos;</li>
            </ul>
            <p>
              devem ser obrigatoriamente verificadas junto ao sindicato patronal ou laboral correspondente.
            </p>
          </section>

          {/* Section 3 */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span>3.</span> Variação de Médias Variáveis e Extratos do FGTS
            </h2>
            <p className="mb-3">
              Cálculos rescisórios reais dependem de documentos contábeis analíticos, tais como:
            </p>
            <ul className="list-disc pl-5 space-y-1 mb-3 text-sm text-slate-600">
              <li>
                <strong>Extrato Analítico do FGTS para Fins Rescisórios:</strong> emitido pela Caixa Econômica Federal com a totalidade dos depósitos e juros/atualização monetária creditados na conta vinculada ao longo dos anos.
              </li>
              <li>
                <strong>Médias de Horas Extras e Comissões:</strong> o valor de férias e 13º salário na rescisão exige a apuração da média aritmética dos últimos 12 meses das verbas salariais variáveis.
              </li>
              <li>
                <strong>Faltas Injustificadas:</strong> descontos na contagem dos dias de férias em razão de faltas não abonadas durante o período aquisitivo (Art. 130 da CLT).
              </li>
            </ul>
            <p>
              O simulador depende estritamente dos parâmetros e valores que o próprio usuário insere em tela. O sistema não audita a veracidade das variáveis digitadas.
            </p>
          </section>

          {/* Section 4 */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span>4.</span> Recomendação de Orientação Especializada
            </h2>
            <p className="mb-4">
              Antes de assinar termos de rescisão de contrato, termos de quitação anual de obrigações trabalhistas ou tomar decisões financeiras relevantes, consulte sempre:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <span className="text-2xl mb-1 block">👨‍⚖️</span>
                <span className="font-bold text-slate-900 text-sm block">Advogado Trabalhista</span>
                <span className="text-xs text-slate-500">Inscrito na OAB</span>
              </div>
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <span className="text-2xl mb-1 block">📊</span>
                <span className="font-bold text-slate-900 text-sm block">Contador / Perito</span>
                <span className="text-xs text-slate-500">Registrado no CRC</span>
              </div>
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <span className="text-2xl mb-1 block">🏛️</span>
                <span className="font-bold text-slate-900 text-sm block">Sindicato da Categoria</span>
                <span className="text-xs text-slate-500">Ou Ministério do Trabalho</span>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span>5.</span> Fontes Normativas Oficiais
            </h2>
            <p className="mb-3">
              Para conferir o texto literal das leis brasileiras que regem os cálculos presentes nesta plataforma, consulte os portais oficiais governamentais em nossa página de{' '}
              <Link href="/br/metodologia/" className="font-bold text-brand-900 underline hover:text-brand-700">
                Metodologia e Fórmulas CLT
              </Link>
              .
            </p>
          </section>
        </article>
      </main>
      <Footer country="br" />
    </>
  );
}
