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
    slug: 'br/mapa-do-site',
    title: 'Mapa do Site Calcula Brasil',
    description:
      'Acesse o índice completo e organizado de todas as calculadoras trabalhistas, tabelas oficiais, guias práticos e páginas do Calcula Brasil.',
  });
}

interface SiteMapSection {
  title: string;
  icon: string;
  description: string;
  links: Array<{
    title: string;
    href: string;
    description: string;
  }>;
}

const SITEMAP_SECTIONS: SiteMapSection[] = [
  {
    title: 'Calculadoras e Ferramentas Principais',
    icon: '🧮',
    description: 'Simuladores trabalhistas interativos com fórmulas atualizadas para 2026.',
    links: [
      {
        title: 'Calculadora de Rescisão Trabalhista CLT 2026',
        href: '/br/calculadora-rescisao/',
        description: 'Simulação completa de saldo de salário, aviso prévio, férias, 13º e multa de 40% do FGTS.',
      },
      {
        title: 'Calculadora de Décimo Terceiro Salário 2026',
        href: '/br/calculadora-13-salario/',
        description: 'Calcule a 1ª parcela (sem descontos) e 2ª parcela (com retenções de INSS e IRRF).',
      },
      {
        title: 'Calculadora de Férias CLT 2026',
        href: '/br/calculadora-ferias/',
        description: 'Simulação de férias regulares, terço constitucional e venda de 10 dias (abono pecuniário).',
      },
      {
        title: 'Calculadora de Salário Líquido 2026',
        href: '/br/calculadora-salario-liquido/',
        description: 'Deduções progressivas de INSS e apuração do IRRF com opção de desconto simplificado.',
      },
      {
        title: 'Calculadora de Seguro-Desemprego 2026',
        href: '/br/calculadora-seguro-desemprego/',
        description: 'Descubra a quantidade de parcelas e o valor exato com base nas novas faixas do CODEFAT.',
      },
      {
        title: 'Calculadora de Horas Extras e DSR 2026',
        href: '/br/calculadora-hora-extra/',
        description: 'Cálculo de adicionais de 50%, 100% e apuração dos reflexos no Descanso Semanal Remunerado.',
      },
      {
        title: 'Calculadora de FGTS 2026',
        href: '/br/calculadora-fgts/',
        description: 'Simulação de depósitos mensais de 8%, evolução patrimonial e faixas do Saque-Aniversário.',
      },
      {
        title: 'Gerador de Link do WhatsApp com Mensagem e QR Code',
        href: '/br/gerador-de-link-whatsapp/',
        description: 'Crie links diretos para conversa no WhatsApp com texto personalizado e código QR.',
      },
    ],
  },
  {
    title: 'Páginas de Tipos de Rescisão',
    icon: '📑',
    description: 'Simulações especializadas por modalidade de encerramento do vínculo empregatício.',
    links: [
      {
        title: 'Calculadora de Rescisão Sem Justa Causa',
        href: '/br/calculadora-rescisao/sem-justa-causa/',
        description: 'Dispensa pelo empregador com direito a aviso prévio, multa de 40% do FGTS e seguro-desemprego.',
      },
      {
        title: 'Calculadora de Pedido de Demissão',
        href: '/br/calculadora-rescisao/pedido-de-demissao/',
        description: 'Simulação das verbas devidas e descontos quando a saída parte da iniciativa do empregado.',
      },
      {
        title: 'Calculadora de Rescisão por Acordo Comum (Art. 484-A CLT)',
        href: '/br/calculadora-rescisao/acordo/',
        description: 'Rescisão consensual: metade do aviso prévio, multa de 20% do FGTS e saque de 80%.',
      },
      {
        title: 'Calculadora de Rescisão com Justa Causa',
        href: '/br/calculadora-rescisao/justa-causa/',
        description: 'Demissão disciplinar (Art. 482 CLT) com verbas restritas a saldo salarial e férias vencidas.',
      },
      {
        title: 'Calculadora de Contrato de Experiência',
        href: '/br/calculadora-rescisao/contrato-de-experiencia/',
        description: 'Encerramento no prazo ou rescisão antecipada com indenizações dos Arts. 479 e 480 da CLT.',
      },
    ],
  },
  {
    title: 'Tabelas e Informações Oficiais',
    icon: '📊',
    description: 'Tabelas vigentes de alíquotas, tetos e parâmetros econômicos oficiais do Brasil.',
    links: [
      {
        title: 'Tabela INSS 2026 Atualizada: Alíquotas e Faixas Progressivas',
        href: '/br/tabela-inss/',
        description: 'Faixas de contribuição previdenciária de 7,5% a 14% e teto do RGPS de R$ 8.157,41.',
      },
      {
        title: 'Tabela IRRF 2026 Atualizada: Faixas do Imposto de Renda e Isenção',
        href: '/br/tabela-irrf/',
        description: 'Alíquotas do imposto de renda retido na fonte e dedução simplificada mensal de R$ 564,80.',
      },
      {
        title: 'Salário Mínimo 2026: Valor Oficial, Diário, Horário e Histórico de 10 Anos',
        href: '/br/salario-minimo/',
        description: 'Valor oficial de R$ 1.518,00, cálculo de diária (R$ 50,60), hora (R$ 6,90) e série histórica.',
      },
    ],
  },
  {
    title: 'Guias e Artigos Explicativos',
    icon: '📚',
    description: 'Artigos pedagógicos aprofundados sobre direitos, prazos e legislação trabalhista.',
    links: [
      {
        title: 'Quando Cai o Décimo Terceiro Salário em 2026? Prazos da 1ª e 2ª Parcela',
        href: '/br/guias/quando-cai-o-13-salario/',
        description: 'Datas limites de pagamento, regras de antecipação e consequências legais para a empresa.',
      },
      {
        title: 'Como Calcular a Rescisão Trabalhista Passo a Passo pela CLT',
        href: '/br/guias/como-calcular-rescisao-passo-a-passo/',
        description: 'Tutorial completo com fórmulas práticas para conferir cada linha do seu termo de rescisão.',
      },
      {
        title: 'Demissão Sem Justa Causa: Conheça Todos os Seus Direitos e Verbas',
        href: '/br/guias/direitos-na-demissao-sem-justa-causa/',
        description: 'Guia completo de direitos, seguro-desemprego, aviso prévio e saque rescisório do FGTS.',
      },
      {
        title: 'Pedido de Demissão: O Que o Trabalhador Recebe e O Que Perde',
        href: '/br/guias/pedido-de-demissao-quais-os-direitos/',
        description: 'Orientações práticas para quem deseja sair do emprego e como proceder com o aviso prévio.',
      },
      {
        title: 'Aviso Prévio Trabalhado ou Indenizado: Diferenças, Regras e Lei 12.506',
        href: '/br/guias/aviso-previo-trabalhado-ou-indenizado/',
        description: 'Como funciona a redução de jornada diária e o acréscimo proporcional de 3 dias por ano.',
      },
      {
        title: 'Acordo Trabalhista Comum (Art. 484-A da CLT): Como Funciona na Prática',
        href: '/br/guias/acordo-trabalhista-como-funciona/',
        description: 'Vantagens, cálculos e formalidades para rescindir o contrato de comum acordo.',
      },
      {
        title: 'Multa de 40% do FGTS: Quem Tem Direito, Como Calcular e Prazos',
        href: '/br/guias/multa-de-40-do-fgts/',
        description: 'Base de incidência histórica, impacto do Saque-Aniversário e prazo de depósito.',
      },
      {
        title: 'Férias Vencidas em Dobro: Quando o Empregador Deve Pagar (Art. 137 CLT)',
        href: '/br/guias/ferias-vencidas-em-dobro/',
        description: 'Período concessivo ultrapassado, atraso no pagamento de férias e direitos do trabalhador.',
      },
    ],
  },
  {
    title: 'Páginas Institucionais e Legais',
    icon: '🏛️',
    description: 'Informações sobre a plataforma, transparência algorítmica, termos de uso e privacidade.',
    links: [
      {
        title: 'Página Inicial - Calcula Brasil',
        href: '/br/',
        description: 'Portal principal com visão unificada de todas as ferramentas e calculadoras CLT 2026.',
      },
      {
        title: 'Sobre o Calcula Brasil',
        href: '/br/sobre/',
        description: 'História do projeto, atuação da rede Zetawala, compromisso com a gratuidade e conformidade.',
      },
      {
        title: 'Metodologia e Fórmulas Oficiais CLT',
        href: '/br/metodologia/',
        description: 'Detalhamento matemático das fórmulas, bases jurídicas e tabela de fontes governamentais.',
      },
      {
        title: 'Perguntas Frequentes sobre Direitos Trabalhistas (FAQ Hub)',
        href: '/br/perguntas-frequentes/',
        description: 'Central com mais de 30 dúvidas respondidas sobre rescisão, FGTS, férias, 13º e salários.',
      },
      {
        title: 'Contato e Suporte',
        href: '/br/contato/',
        description: 'Canal direto de e-mail para sugestões, parcerias e reporte de divergências de cálculo.',
      },
      {
        title: 'Política de Privacidade e LGPD',
        href: '/br/politica-de-privacidade/',
        description: 'Processamento local em memória, uso de cookies Google AdSense e direitos sob a Lei 13.709/2018.',
      },
      {
        title: 'Termos de Uso',
        href: '/br/termos-de-uso/',
        description: 'Regras de utilização gratuita, propriedade intelectual e responsabilidades do usuário.',
      },
      {
        title: 'Aviso Legal e Isenção de Responsabilidade',
        href: '/br/aviso-legal/',
        description: 'Caráter informativo e pedagógico das simulações e prevalência de acordos coletivos sindicais.',
      },
      {
        title: 'Mapa do Site Calcula Brasil',
        href: '/br/mapa-do-site/',
        description: 'Índice completo e navegação de todas as páginas e calculadoras da versão brasileira.',
      },
    ],
  },
];

export default function MapaDoSitePage() {
  const breadcrumbs = [
    { label: 'Calcula', href: '/' },
    { label: 'Brasil', href: '/br/' },
    { label: 'Mapa do Site', href: '' },
  ];

  return (
    <>
      <JsonLd
        country="br"
        slug="br/mapa-do-site"
        type="info"
        title="Mapa do Site Calcula Brasil"
        description="Acesse o índice completo e organizado de todas as calculadoras trabalhistas, tabelas oficiais, guias práticos e páginas do Calcula Brasil."
        breadcrumbs={[
          { name: 'Calcula', path: '/' },
          { name: 'Brasil', path: '/br/' },
          { name: 'Mapa do Site', path: '/br/mapa-do-site/' },
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
            <span>🗺️</span>
            <span>Índice Completo de Páginas • Brasil 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Mapa do Site Calcula Brasil
          </h1>
          <p className="text-slate-600 text-base sm:text-xl leading-relaxed max-w-3xl">
            Acesse rapidamente qualquer calculadora trabalhista, tabela de retenção oficial, guia prático ou documento institucional da plataforma.
          </p>
        </header>

        {/* Sections */}
        <div className="space-y-10">
          {SITEMAP_SECTIONS.map((section, idx) => (
            <section
              key={idx}
              className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{section.icon}</span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  {section.title}
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 mb-6">
                {section.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {section.links.map((link, lIdx) => (
                  <Link
                    key={lIdx}
                    href={link.href}
                    className="p-4 rounded-xl border border-slate-100 hover:border-brand-900/30 hover:bg-brand-50/40 transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <h3 className="font-bold text-slate-900 group-hover:text-brand-900 text-sm transition-colors mb-1">
                        {link.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {link.description}
                      </p>
                    </div>
                    <div className="mt-3 text-xs font-bold text-brand-900 flex items-center gap-1">
                      <span>Acessar página</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer country="br" />
    </>
  );
}
