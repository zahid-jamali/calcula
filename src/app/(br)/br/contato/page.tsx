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
    slug: 'br/contato',
    title: 'Contato e Suporte',
    description:
      'Fale com a equipe do Calcula Brasil. Envie dúvidas, sugestões ou reporte divergências de cálculos trabalhistas.',
  });
}

export default function ContatoPage() {
  const breadcrumbs = [
    { label: 'Calcula', href: '/' },
    { label: 'Brasil', href: '/br/' },
    { label: 'Contato e Suporte', href: '' },
  ];

  return (
    <>
      <JsonLd
        country="br"
        slug="br/contato"
        type="info"
        title="Contato e Suporte | Calcula Brasil"
        description="Fale com a equipe do Calcula Brasil. Envie dúvidas, sugestões ou reporte divergências de cálculos trabalhistas."
        breadcrumbs={[
          { name: 'Calcula', path: '/' },
          { name: 'Brasil', path: '/br/' },
          { name: 'Contato', path: '/br/contato/' },
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
            <span>📬</span>
            <span>Atendimento Direto • Sem Formulários Complexos</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Contato e Suporte
          </h1>
          <p className="text-slate-600 text-base sm:text-xl leading-relaxed max-w-3xl">
            Tem alguma dúvida sobre nossas calculadoras, identificou alguma divergência em um cálculo ou quer sugerir um novo recurso? Fale diretamente com a equipe técnica da rede Zetawala.
          </p>
        </header>

        {/* Main Contact Card */}
        <div className="bg-white border-2 border-brand-900/20 rounded-3xl p-6 sm:p-10 shadow-sm mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8 border-b border-slate-200">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-900 bg-brand-50 px-3 py-1 rounded-full">
                Canal Oficial de Atendimento
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3">
                contato@zetawala.com
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                Tempo estimado de resposta: <strong className="text-slate-900">até 48 horas úteis</strong> (segunda a sexta-feira).
              </p>
            </div>
            <a
              href="mailto:contato@zetawala.com?subject=Calcula%20Brasil%20-%20Contato"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-900 hover:bg-brand-950 text-white font-bold rounded-2xl shadow transition-colors text-base"
            >
              <span>✉️</span>
              <span>Escrever E-mail Agora</span>
            </a>
          </div>

          <div className="pt-8">
            <h3 className="text-lg font-bold text-slate-900 mb-3">
              Por que não utilizamos formulário de contato no site?
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Para garantir a sua privacidade e segurança máxima, não coletamos dados pessoais nem armazenamos mensagens em bancos de dados no servidor. Ao clicar no link acima, sua mensagem é redigida diretamente pelo seu cliente de e-mail de preferência (Gmail, Outlook, Apple Mail, etc.), sem intermediários.
            </p>
          </div>
        </div>

        {/* Guidance on How to Report */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Bug / Discrepancy Reporting */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-700 flex items-center justify-center text-xl mb-4">
              🐞
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Reportar Divergência de Cálculo ou Bug
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Para que nossa equipe de desenvolvimento e consultoria trabalhista possa reproduzir e corrigir com rapidez, inclua em seu e-mail:
            </p>
            <ul className="list-disc pl-5 text-xs text-slate-600 space-y-2">
              <li>Qual calculadora você estava utilizando (URL da página).</li>
              <li>Os valores simulados (salário, data de admissão e demissão, motivo da saída).</li>
              <li>O resultado que você esperava e a fundamentação legal (ex: convenção coletiva ou artigo da CLT).</li>
              <li>Captura de tela (opcional, ocultando qualquer dado pessoal confidencial).</li>
            </ul>
          </div>

          {/* Suggestions and General Enquiries */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center text-xl mb-4">
              💡
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Sugestões, Parcerias e Imprensa
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Tem ideias para novas calculadoras, guias ou deseja citar o Calcula Brasil em seu veículo de imprensa ou portal contábil?
            </p>
            <ul className="list-disc pl-5 text-xs text-slate-600 space-y-2">
              <li>Sugestões de novas calculadoras e ferramentas gratuitas.</li>
              <li>Dúvidas sobre o funcionamento e metodologia do portal.</li>
              <li>Direitos do titular de dados e privacidade LGPD (veja também nossa política).</li>
              <li>Propostas de colaboração técnica com universidades e entidades de classe.</li>
            </ul>
          </div>
        </div>

        {/* Quick Links */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-bold text-slate-900 text-sm">Antes de enviar um e-mail:</h4>
            <p className="text-xs text-slate-600">
              Sua dúvida pode já estar respondida em nossa central de perguntas frequentes ou na metodologia.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/br/perguntas-frequentes/"
              className="text-xs font-semibold px-4 py-2 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 rounded-xl transition-colors"
            >
              Perguntas Frequentes →
            </Link>
            <Link
              href="/br/metodologia/"
              className="text-xs font-semibold px-4 py-2 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 rounded-xl transition-colors"
            >
              Metodologia CLT →
            </Link>
          </div>
        </div>
      </main>
      <Footer country="br" />
    </>
  );
}
