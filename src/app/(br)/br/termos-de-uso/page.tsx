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
    slug: 'br/termos-de-uso',
    title: 'Termos de Uso',
    description:
      'Termos e condições de uso da plataforma Calcula Brasil. Regras de utilização gratuita, propriedade intelectual e responsabilidades do usuário.',
  });
}

export default function TermosDeUsoPage() {
  const breadcrumbs = [
    { label: 'Calcula', href: '/' },
    { label: 'Brasil', href: '/br/' },
    { label: 'Termos de Uso', href: '' },
  ];

  return (
    <>
      <JsonLd
        country="br"
        slug="br/termos-de-uso"
        type="info"
        title="Termos de Uso | Calcula Brasil"
        description="Termos e condições de uso da plataforma Calcula Brasil. Regras de utilização gratuita, propriedade intelectual e responsabilidades do usuário."
        breadcrumbs={[
          { name: 'Calcula', path: '/' },
          { name: 'Brasil', path: '/br/' },
          { name: 'Termos de Uso', path: '/br/termos-de-uso/' },
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
            <span>📜</span>
            <span>Condições Gerais de Uso • 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Termos e Condições de Uso
          </h1>
          <p className="text-slate-600 text-base sm:text-xl leading-relaxed max-w-3xl">
            Bem-vindo ao Calcula Brasil. Ao acessar e utilizar nossas ferramentas, você concorda expressamente com os termos e regras descritos a seguir.
          </p>
        </header>

        {/* Content Article */}
        <article className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-8">
          {/* Section 1 */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span>1.</span> Objeto e Acesso Gratuito
            </h2>
            <p className="mb-3">
              O <strong>Calcula Brasil</strong> (<code>calcula.zetawala.com/br/</code>), integrado à rede <strong>Zetawala</strong>, fornece aos usuários ferramentas de simulação matemática online de direitos trabalhistas (como rescisão, férias, 13º salário, FGTS, horas extras e salário líquido), além de tabelas e guias informativos sobre a CLT.
            </p>
            <p>
              O acesso a todas as calculadoras e conteúdos é disponibilizado de forma inteiramente <strong>gratuita e aberta</strong>, sem necessidade de pagamento de mensalidades, cadastros ou licenciamento individual para uso pessoal.
            </p>
          </section>

          {/* Section 2 */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span>2.</span> Propriedade Intelectual
            </h2>
            <p className="mb-3">
              Todo o código-fonte, layout visual, design de interface, marcas, gráficos, textos originais, compilações de dados e logotipos presentes na plataforma são de titularidade exclusiva da Zetawala ou licenciados sob regras aplicáveis.
            </p>
            <p className="mb-3">
              É expressamente proibida a reprodução, engenharia reversa, clonagem de código, raspagem automatizada (scraping) não autorizada ou incorporação das ferramentas em sites terceiros via <em>iframes</em> sem autorização prévia por escrito.
            </p>
            <p className="text-sm text-slate-500">
              É permitido e incentivado o compartilhamento de links diretos para as páginas do Calcula em redes sociais, artigos informativos, trabalhos acadêmicos e comunicações sindicais, desde que indicada a fonte original.
            </p>
          </section>

          {/* Section 3 */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span>3.</span> Responsabilidades do Usuário
            </h2>
            <p className="mb-3">
              Ao utilizar o Calcula Brasil, você se compromete a:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-3">
              <li>Inserir dados verídicos e precisos caso deseje obter estimativas condizentes com a sua situação real.</li>
              <li>Não utilizar a plataforma para fins ilícitos, fraudulentos ou que violem os direitos de terceiros.</li>
              <li>Não tentar sobrecarregar ou comprometer a infraestrutura técnica e de segurança da rede.</li>
              <li>Reconhecer que convenções coletivas de trabalho (CCT) e acordos coletivos (ACT) de sindicatos específicos podem prever benefícios ou regras de cálculo superiores à CLT geral.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span>4.</span> Natureza Informativa e Limitação de Responsabilidade
            </h2>
            <p className="mb-3">
              As estimativas geradas pelas calculadoras possuem finalidade exclusivamente <strong>educativa, informativa e de orientação preliminar</strong>.
            </p>
            <p className="mb-3">
              O Calcula Brasil e a rede Zetawala não prestam assessoria contábil, jurídica ou advocatícia formal. Não nos responsabilizamos por decisões financeiras, acordos extrajudiciais ou disputas trabalhistas baseadas estritamente nos resultados simulados nesta plataforma.
            </p>
            <p>
              Recomendamos expressamente a consulta de um advogado trabalhista, contador registrado no CRC ou ao sindicato de sua categoria para homologações e conferências oficiais. Para mais detalhes, consulte nosso{' '}
              <Link href="/br/aviso-legal/" className="font-bold text-brand-900 underline hover:text-brand-700">
                Aviso Legal e Isenção de Responsabilidade
              </Link>
              .
            </p>
          </section>

          {/* Section 5 */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span>5.</span> Disponibilidade do Serviço e Modificações
            </h2>
            <p className="mb-3">
              Trabalhamos para garantir que as ferramentas estejam disponíveis 24 horas por dia, 7 dias por semana. No entanto, o serviço pode passar por manutenções técnicas programadas ou sofrer instabilidades imprevisíveis na rede mundial de computadores.
            </p>
            <p>
              Podemos modificar estes Termos de Uso a qualquer momento, sem aviso prévio. A continuidade do uso da plataforma após qualquer alteração constituirá sua aceitação tácita das novas condições.
            </p>
          </section>

          {/* Section 6 */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span>6.</span> Legislação Aplicável e Foro
            </h2>
            <p className="mb-3">
              Estes Termos de Uso são regidos e interpretados em conformidade com as Leis da República Federativa do Brasil, em especial o Marco Civil da Internet (Lei nº 12.965/2014) e o Código de Defesa do Consumidor, naquilo que for cabível.
            </p>
            <p>
              Em caso de dúvidas sobre estes termos, entre em contato pelo e-mail{' '}
              <a href="mailto:contato@zetawala.com" className="font-bold text-brand-900 underline">
                contato@zetawala.com
              </a>
              .
            </p>
          </section>
        </article>
      </main>
      <Footer country="br" />
    </>
  );
}
