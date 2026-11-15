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
    slug: 'br/sobre',
    title: 'Sobre o Calcula',
    description:
      'Conheça o Calcula, ferramenta gratuita da rede Zetawala para cálculos trabalhistas transparentes conforme a CLT.',
  });
}

export default function SobrePage() {
  const breadcrumbs = [
    { label: 'Calcula', href: '/' },
    { label: 'Brasil', href: '/br/' },
    { label: 'Sobre o Calcula', href: '' },
  ];

  return (
    <>
      <JsonLd
        country="br"
        slug="br/sobre"
        type="info"
        title="Sobre o Calcula Brasil"
        description="Conheça o Calcula, ferramenta gratuita da rede Zetawala para cálculos trabalhistas transparentes conforme a CLT."
        breadcrumbs={[
          { name: 'Calcula', path: '/' },
          { name: 'Brasil', path: '/br/' },
          { name: 'Sobre o Calcula', path: '/br/sobre/' },
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
            <span>🇧🇷</span>
            <span>Rede Zetawala • Sobre o Calcula Brasil</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Sobre o Calcula Brasil
          </h1>
          <p className="text-slate-600 text-base sm:text-xl leading-relaxed max-w-3xl">
            Simulações trabalhistas e financeiras 100% gratuitas, transparentes e rigorosamente alinhadas à Consolidação das Leis do Trabalho (CLT) e às tabelas oficiais vigentes.
          </p>
        </header>

        {/* Value Highlights Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-900 flex items-center justify-center text-xl mb-4">
              ⚖️
            </div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">Rigor Jurídico CLT</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Fórmulas auditadas conforme a CLT, Lei nº 12.506/2011, resoluções do CODEFAT e portarias da Receita Federal e INSS.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center text-xl mb-4">
              🔒
            </div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">Privacidade Total</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              100% de processamento local no seu navegador. Salários, datas e dados pessoais nunca são enviados para servidores externos.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-800 flex items-center justify-center text-xl mb-4">
              🌐
            </div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">100% Gratuito</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Sem assinaturas, sem cadastros obrigatórios e sem cobranças ocultas. Ferramentas abertas para trabalhadores e contadores.
            </p>
          </div>
        </div>

        {/* Article Body */}
        <article className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-8">
          <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span>🎯</span> Nossa Missão e Por Que Existimos
            </h2>
            <p className="mb-4">
              O direito do trabalho brasileiro possui uma riqueza de regras, exceções e atualizações anuais que tornam o cálculo de rescisão, férias, décimo terceiro e deduções tributárias um desafio para milhões de profissionais e departamentos de recursos humanos.
            </p>
            <p>
              O <strong>Calcula Brasil</strong> nasceu com a missão de democratizar o acesso à informação trabalhista confiável. Acreditamos que todo trabalhador tem o direito inalienável de conferir se os valores pagos na folha de pagamento ou no Termo de Rescisão do Contrato de Trabalho (TRCT) correspondem rigorosamente ao que prescreve a lei.
            </p>
          </section>

          <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span>🚀</span> A Rede Zetawala
            </h2>
            <p className="mb-4">
              O Calcula faz parte da rede internacional de ferramentas de utilidade pública mantida pela{' '}
              <a
                href="https://zetawala.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-brand-900 underline hover:text-brand-700"
              >
                Zetawala
              </a>
              . Desenvolvemos soluções focadas em resolver problemas matemáticos, financeiros e operacionais complexos do dia a dia por meio de interfaces ultra-rápidas, intuitivas e de alta precisão.
            </p>
            <p>
              Presente em múltiplos países da América Latina (Brasil, México, Colômbia e Chile), o ecossistema Zetawala prioriza a transparência algorítmica, publicando abertamente as fórmulas matemáticas e referências legais adotadas em cada país.
            </p>
          </section>

          <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span>📖</span> Como Validamos Nossos Cálculos com a CLT
            </h2>
            <p className="mb-4">
              Cada calculadora do Calcula Brasil é desenvolvida a partir do texto literal da legislação brasileira e testada contra cenários práticos de homologação sindical e do Ministério do Trabalho e Emprego:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>
                <strong>Aviso Prévio Proporcional:</strong> Calculado rigorosamente conforme a <em>Lei nº 12.506/2011</em> e Nota Técnica CGRT/SRT nº 184/2012, acrescendo 3 dias por ano completo trabalhado até o teto de 90 dias, com projeção reflexa em férias e 13º.
              </li>
              <li>
                <strong>Rescisão por Acordo Mútuo:</strong> Aplicando integralmente o <em>Art. 484-A da CLT</em> (metade do aviso prévio, multa de 20% do FGTS e saque de até 80%).
              </li>
              <li>
                <strong>INSS Progressivo:</strong> Implementação da fórmula de faixas progressivas estabelecida pela Emenda Constitucional nº 103/2019 e atualizada pela Portaria Interministerial MPS/MF para 2026.
              </li>
              <li>
                <strong>IRRF com Desconto Simplificado:</strong> Comparação automática entre as deduções legais (dependentes e INSS) e a dedução mensal simplificada (Lei nº 14.663/2023), selecionando a opção mais vantajosa para o contribuinte.
              </li>
              <li>
                <strong>Seguro-Desemprego:</strong> Faixas de cálculo e teto atualizados conforme as resoluções vigentes do Conselho Deliberativo do Fundo de Amparo ao Trabalhador (CODEFAT).
              </li>
            </ul>
            <p>
              Para conhecer o detalhamento matemático e as bases jurídicas completas de cada modalidade, consulte nossa página de{' '}
              <Link href="/br/metodologia/" className="font-bold text-brand-900 underline hover:text-brand-700">
                Metodologia e Fórmulas CLT
              </Link>
              .
            </p>
          </section>

          <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span>💬</span> Como Reportar um Erro ou Sugerir Melhorias
            </h2>
            <p className="mb-4">
              Mantemos um compromisso inegociável com a exatidão dos nossos resultados. Caso encontre alguma divergência entre nossos cálculos e sua convenção coletiva, ou se tiver sugestões de novos recursos, sua contribuição é fundamental.
            </p>
            <p className="mb-6">
              Nossa equipe de engenharia e consultoria jurídica revisa todas as mensagens recebidas e atualiza as regras do sistema com agilidade:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <a
                href="mailto:contato@zetawala.com?subject=Calcula%20Brasil%20-%20Sugest%C3%A3o%20ou%20Corre%C3%A7%C3%A3o"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-900 hover:bg-brand-950 text-white font-bold rounded-xl shadow-sm transition-colors"
              >
                <span>✉️</span>
                <span>Enviar E-mail para contato@zetawala.com</span>
              </a>
              <Link
                href="/br/contato/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold rounded-xl transition-colors"
              >
                Página de Contato e Orientações →
              </Link>
            </div>
          </section>
        </article>

        {/* CTA Banner */}
        <div className="mt-12 bg-gradient-to-br from-brand-900 to-slate-900 text-white rounded-3xl p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold mb-2">Pronto para simular seus direitos?</h3>
            <p className="text-brand-100 text-sm sm:text-base max-w-xl">
              Utilize nossas calculadoras atualizadas de rescisão, férias, 13º e FGTS agora mesmo, sem custos.
            </p>
          </div>
          <Link
            href="/br/"
            className="flex-shrink-0 px-6 py-3 bg-white text-brand-900 hover:bg-brand-50 font-bold rounded-xl shadow transition-colors"
          >
            Acessar Calculadoras 2026
          </Link>
        </div>
      </main>
      <Footer country="br" />
    </>
  );
}
