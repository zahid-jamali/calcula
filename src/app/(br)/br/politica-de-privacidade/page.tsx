import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/seo/JsonLd';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { buildMetadata } from '@/lib/seo';

export function generateMetadata(): Metadata {
  return buildMetadata({
    country: 'br',
    slug: 'br/politica-de-privacidade',
    title: 'Política de Privacidade e LGPD',
    description:
      'Política de Privacidade do Calcula Brasil: processamento 100% no navegador, cookies do Google AdSense, conformidade com a LGPD e respeito total aos seus dados.',
  });
}

export default function PoliticaPrivacidadePage() {
  const breadcrumbs = [
    { label: 'Calcula', href: '/' },
    { label: 'Brasil', href: '/br/' },
    { label: 'Política de Privacidade', href: '' },
  ];

  return (
    <>
      <JsonLd
        country="br"
        slug="br/politica-de-privacidade"
        type="info"
        title="Política de Privacidade e LGPD | Calcula Brasil"
        description="Política de Privacidade do Calcula Brasil: processamento 100% no navegador, cookies do Google AdSense, conformidade com a LGPD e respeito total aos seus dados."
        breadcrumbs={[
          { name: 'Calcula', path: '/' },
          { name: 'Brasil', path: '/br/' },
          { name: 'Política de Privacidade', path: '/br/politica-de-privacidade/' },
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
            <span>🔒</span>
            <span>Lei nº 13.709/2018 (LGPD) • Atualizado em 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Política de Privacidade e Proteção de Dados
          </h1>
          <p className="text-slate-600 text-base sm:text-xl leading-relaxed max-w-3xl">
            Sua privacidade financeira e pessoal é protegida por princípio arquitetural. Entenda como operamos com transparência e em estrita conformidade com a Lei Geral de Proteção de Dados (LGPD).
          </p>
        </header>

        {/* Highlight Principle Box */}
        <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-2xl mb-10 shadow-sm text-emerald-950">
          <h2 className="text-lg font-bold mb-2 flex items-center gap-2">
            <span>🛡️</span> Processamento 100% Client-Side (No Seu Próprio Navegador)
          </h2>
          <p className="text-sm leading-relaxed">
            Todas as calculadoras e simuladores do Calcula Brasil funcionam <strong>exclusivamente na memória local do seu navegador</strong> (JavaScript Client-Side). Nenhum valor de salário, data de admissão, motivo de demissão ou dado pessoal inserido nos formulários é enviado para nossos servidores, gravado em banco de dados ou compartilhado com terceiros. Ao fechar a aba, os dados somem instantaneamente.
          </p>
        </div>

        {/* Detailed Sections */}
        <article className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-8">
          {/* Section 1 */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span>1.</span> Quem Somos e Controladora dos Dados
            </h2>
            <p className="mb-3">
              O site <strong>Calcula Brasil</strong> (<code>calcula.zetawala.com/br/</code>) é uma plataforma de utilidade pública gratuita pertencente à rede <strong>Zetawala</strong> (
              <a href="https://zetawala.com" target="_blank" rel="noopener noreferrer" className="text-brand-900 underline font-semibold">
                https://zetawala.com
              </a>
              ). Para fins da Lei Federal nº 13.709/2018 (Lei Geral de Proteção de Dados Pessoais - LGPD), a Zetawala atua como controladora das operações técnicas estritamente necessárias para a disponibilização do portal.
            </p>
            <p>
              Qualquer solicitação, dúvida ou comunicação relativa à privacidade deve ser encaminhada ao nosso canal exclusivo de privacidade pelo e-mail{' '}
              <a href="mailto:contato@zetawala.com" className="text-brand-900 underline font-semibold">
                contato@zetawala.com
              </a>
              .
            </p>
          </section>

          {/* Section 2 */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span>2.</span> Inexistência de Coleta de Dados Financeiros e Trabalhistas
            </h2>
            <p className="mb-3">
              Diferente de sistemas tradicionais que solicitam login ou salvam fichas de cálculo em nuvem:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-3">
              <li>Não exigimos criação de conta, nome de usuário, senha ou e-mail para usar qualquer simulador.</li>
              <li>Não solicitamos número de CPF, RG, PIS/PASEP ou Carteira de Trabalho (CTPS).</li>
              <li>Não registramos em logs de acesso os números e datas digitados nos campos de cálculo.</li>
              <li>Não vendemos nem comercializamos dados de usuários para financeiras, seguradoras, bancos ou escritórios de advocacia.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span>3.</span> Google AdSense e Cookies de Terceiros
            </h2>
            <p className="mb-3">
              Para manter o serviço 100% gratuito para toda a população brasileira, o Calcula exibe publicidade digital veiculada pelo <strong>Google AdSense</strong> e parceiros de tecnologia certificados.
            </p>
            <p className="mb-3">
              O Google, como fornecedor terceiro, utiliza cookies (como o cookie DoubleClick) para exibir anúncios aos usuários com base em visitas anteriores a este e a outros sites na Internet.
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 my-4 space-y-2 text-sm">
              <p className="font-semibold text-slate-900">Como desativar a personalização de anúncios:</p>
              <ul className="list-disc pl-5 space-y-1 text-slate-600">
                <li>
                  Você pode desativar os anúncios personalizados acessando as{' '}
                  <a
                    href="https://adssettings.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-900 underline font-semibold"
                  >
                    Configurações de Anúncios do Google (https://adssettings.google.com)
                  </a>
                  .
                </li>
                <li>
                  Para entender detalhadamente como o Google utiliza os dados de sites que utilizam seus serviços de publicidade, consulte{' '}
                  <a
                    href="https://policies.google.com/technologies/partner-sites"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-900 underline font-semibold"
                  >
                    Como o Google usa informações de sites ou apps parceiros
                  </a>
                  .
                </li>
                <li>
                  Você também pode optar por recusar cookies de terceiros para publicidade baseada em interesses visitando o portal{' '}
                  <a
                    href="https://www.aboutads.info/choices/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-900 underline font-semibold"
                  >
                    aboutads.info
                  </a>
                  .
                </li>
              </ul>
            </div>
          </section>

          {/* Section 4 */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span>4.</span> Cloudflare Web Analytics (Sem Cookies de Rastreamento)
            </h2>
            <p className="mb-3">
              Para fins de segurança da infraestrutura, mitigação de ataques DDoS e monitoramento agregado de desempenho de rede, utilizamos o <strong>Cloudflare Web Analytics</strong>.
            </p>
            <p>
              O Cloudflare Web Analytics opera <strong>sem cookies</strong>, não realiza criação de perfis individuais de navegação (profiling) e não rastreia usuários através de múltiplos sites na web. As métricas coletadas são estritamente globais (tais como tempo de carregamento de página e país de origem agregado).
            </p>
          </section>

          {/* Section 5 */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span>5.</span> Uso Estrito de Armazenamento Local (LocalStorage)
            </h2>
            <p className="mb-3">
              O Calcula pode armazenar pequenas preferências no recurso <code>localStorage</code> do seu navegador. Essa utilização é restrita a:
            </p>
            <ul className="list-disc pl-5 space-y-1 mb-3">
              <li>Lembrar a preferência de tema visual (modo claro ou modo escuro, quando aplicável).</li>
              <li>Registrar a dispensa de avisos de cookies ou banners informativos para não exibi-los novamente de forma incômoda.</li>
            </ul>
            <p>
              O conteúdo do <code>localStorage</code> reside exclusivamente em sua máquina e você pode limpá-lo a qualquer momento através das opções de limpeza de histórico do seu navegador.
            </p>
          </section>

          {/* Section 6 */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span>6.</span> Direitos do Titular de Dados (LGPD - Lei nº 13.709/2018)
            </h2>
            <p className="mb-3">
              Em atendimento ao Artigo 18 da LGPD, os usuários têm o direito de confirmar a existência de tratamento, acessar dados, solicitar correção de dados incompletos ou eliminação.
            </p>
            <p className="mb-3">
              Como <strong>não armazenamos registros nominais nem contas</strong> de nossos visitantes, a maioria dessas solicitações resulta na constatação imediata de inexistência de banco de dados cadastrais. No entanto, se você enviou algum e-mail para nossa equipe de suporte e deseja a exclusão do histórico da conversa, atenderemos prontamente.
            </p>
          </section>

          {/* Section 7 */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span>7.</span> Canal de Contato do Encarregado (DPO) e Atualizações
            </h2>
            <p className="mb-3">
              Para quaisquer questões relacionadas a esta política de privacidade ou para exercer os direitos previstos na LGPD, envie um e-mail para:
            </p>
            <p className="font-mono text-sm bg-slate-50 border border-slate-200 rounded-lg p-3 text-brand-900 font-bold mb-4">
              contato@zetawala.com
            </p>
            <p className="text-xs text-slate-500">
              Esta política foi revisada e aprovada para vigorar no ano fiscal e civil de <strong>2026</strong>. Reservamo-nos o direito de atualizar este documento para refletir mudanças regulatórias emitidas pela Autoridade Nacional de Proteção de Dados (ANPD).
            </p>
          </section>
        </article>
      </main>
      <Footer country="br" />
    </>
  );
}
