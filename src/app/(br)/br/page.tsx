import React from 'react';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/seo/JsonLd';
import { FaqAccordion } from '@/components/ui';
import { COUNTRIES } from '@/config/site';
import { BR_GUIDES_LIST } from '@/content/br/guias';

import { buildMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

const TITLE = 'Calculadoras Trabalhistas e Financeiras Grátis 2026 | Calcula';
const DESCRIPTION =
  'Simule de graça rescisão CLT, salário líquido, 13º salário, férias, FGTS, horas extras e seguro-desemprego com as regras e tabelas oficiais de 2026.';

export function generateMetadata(): Metadata {
  return buildMetadata({
    country: 'br',
    slug: 'br',
    title: TITLE,
    description: DESCRIPTION,
  });
}

const BRAZIL_FAQS = [
  {
    q: 'Como calcular a rescisão de contrato de trabalho pela CLT em 2026?',
    a: 'O cálculo depende do motivo da saída. Na demissão sem justa causa, o trabalhador recebe saldo de salário, aviso prévio proporcional indenizado (30 a 90 dias), férias vencidas e proporcionais com 1/3, 13º proporcional e multa de 40% sobre todos os depósitos do FGTS, com direito a saque e seguro-desemprego. Já no pedido de demissão, perde-se a multa rescisória e o saque do FGTS.',
  },
  {
    q: 'Quais são as datas limites de pagamento do 13º salário?',
    a: 'Por lei (Lei 4.749/1965), a 1ª parcela do 13º salário deve ser paga entre 1º de fevereiro e 30 de novembro, sem descontos fiscais ou previdenciários. A 2ª parcela deve ser quitada até 20 de dezembro, quando ocorrem os descontos de INSS e IRRF sobre o valor total da gratificação natalina.',
  },
  {
    q: 'Como funciona a venda de 10 dias de férias (abono pecuniário)?',
    a: 'Conforme o Artigo 143 da CLT, o trabalhador pode converter 1/3 do seu período de férias em dinheiro (abono pecuniário). Esse valor é acrescido do terço constitucional e possui isenção total de encargos sociais (sem desconto de INSS e sem incidência de Imposto de Renda Retido na Fonte).',
  },
  {
    q: 'Qual é o valor oficial do salário mínimo e do teto do INSS em 2026?',
    a: 'Em 2026, o salário mínimo nacional é de R$ 1.518,00 (diária de R$ 50,60 e valor-hora de R$ 6,90). O teto máximo de benefícios da Previdência Social e base máxima para contribuição do INSS é de R$ 8.157,41, resultando em desconto máximo de R$ 951,64 mensais para trabalhadores celetistas.',
  },
  {
    q: 'Quem tem direito a sacar o FGTS e receber a multa de 40%?',
    a: 'Têm direito ao saque integral da conta e à multa rescisória de 40% os trabalhadores dispensados sem justa causa pela empresa e os casos de rescisão indireta. No acordo mútuo (Art. 484-A da CLT), o trabalhador saca até 80% do saldo e recebe 20% de multa. Em pedido de demissão ou demissão com justa causa, não há saque nem multa.',
  },
  {
    q: 'Como o aviso prévio proporcional estende o valor da rescisão?',
    a: 'Pela Lei nº 12.506/2011, cada ano completo de serviço na mesma empresa adiciona 3 dias ao aviso prévio mínimo de 30 dias (até o teto de 90 dias). Quando o aviso é indenizado, esse período projeta a data final do contrato de trabalho no tempo, gerando direito a mais avos de 13º salário e férias proporcionais.',
  },
];

export default function BrazilHomePage() {
  const country = COUNTRIES.br;

  return (
    <>
      <JsonLd
        country="br"
        slug="br"
        type="website"
        title={TITLE}
        description={DESCRIPTION}
        faqs={BRAZIL_FAQS}
        breadcrumbs={[
          { name: 'Calcula', path: '/' },
          { name: 'Brasil', path: '/br/' },
        ]}
      />
      <Header country="br" />
      <main className="flex-1 max-w-5xl mx-auto px-4 py-8 sm:py-12 w-full">
        {/* Country Hero */}
        <div className="mb-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-900 bg-brand-50 rounded-full mb-3">
            <span>{country.flag}</span>
            <span>Brasil • Legislação CLT 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-3">
            Calculadoras Trabalhistas e Financeiras Grátis
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl">
            Simule valores exatos de rescisão de contrato, salário líquido, férias, 13º salário, horas extras e FGTS com as fórmulas e regras oficiais de 2026.
          </p>
        </div>

        {/* Quick Links to 3 Most Used Tools */}
        <section className="mb-12">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4 flex items-center gap-2">
            <span>⚡</span> Ferramentas Mais Acessadas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              href="/br/calculadora-rescisao/"
              className="p-5 bg-gradient-to-br from-brand-50 to-white border-2 border-brand-900/30 hover:border-brand-900 rounded-2xl shadow-sm hover:shadow-md transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl">💼</span>
                <span className="text-xs font-bold text-brand-900 bg-brand-100/60 px-2.5 py-0.5 rounded-full">
                  Mais Popular
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-900 transition-colors">
                Calculadora de Rescisão CLT
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Simule aviso prévio, férias com 1/3, 13º proporcional e multa de 40% do FGTS.
              </p>
              <div className="mt-4 text-xs font-bold text-brand-900 flex items-center gap-1">
                <span>Calcular rescisão</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>

            <Link
              href="/br/calculadora-salario-liquido/"
              className="p-5 bg-gradient-to-br from-emerald-50/50 to-white border border-slate-200 hover:border-emerald-600 rounded-2xl shadow-sm hover:shadow-md transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl">💰</span>
                <span className="text-xs font-semibold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                  Holerite 2026
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                Calculadora de Salário Líquido
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Desconto progressivo de INSS, tabela IRRF 2026 e modo inverso líquido-para-bruto.
              </p>
              <div className="mt-4 text-xs font-bold text-emerald-700 flex items-center gap-1">
                <span>Calcular salário líquido</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>

            <Link
              href="/br/calculadora-13-salario/"
              className="p-5 bg-gradient-to-br from-blue-50/50 to-white border border-slate-200 hover:border-blue-600 rounded-2xl shadow-sm hover:shadow-md transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl">🎁</span>
                <span className="text-xs font-semibold text-blue-800 bg-blue-100 px-2 py-0.5 rounded-full">
                  1ª e 2ª Parcela
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                Calculadora de 13º Salário
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Parcela de novembro sem descontos e parcela de dezembro com deduções legais.
              </p>
              <div className="mt-4 text-xs font-bold text-blue-700 flex items-center gap-1">
                <span>Calcular 13º salário</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          </div>
        </section>

        {/* Section: Category 1 - Trabalhista */}
        <section id="laboral" className="mb-12">
          <div className="flex items-center justify-between mb-4 border-b border-slate-200 pb-2">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span>📋</span> Calculadoras Trabalhistas (CLT)
            </h2>
            <span className="text-xs font-semibold text-slate-500">Regras Oficiais 2026</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              href="/br/calculadora-rescisao/"
              className="p-4 bg-white border border-slate-200 hover:border-brand-900 rounded-xl shadow-sm hover:shadow-md transition-all group"
            >
              <h3 className="text-base font-bold text-slate-900 group-hover:text-brand-900 mb-1">
                Rescisão de Contrato CLT
              </h3>
              <p className="text-xs text-slate-600 mb-3">
                Cálculo completo para demissão sem justa causa, pedido de demissão, acordo e justa causa.
              </p>
              <span className="text-xs font-bold text-brand-900">Acessar simulador →</span>
            </Link>

            <Link
              href="/br/calculadora-ferias/"
              className="p-4 bg-white border border-slate-200 hover:border-brand-900 rounded-xl shadow-sm hover:shadow-md transition-all group"
            >
              <h3 className="text-base font-bold text-slate-900 group-hover:text-brand-900 mb-1">
                Calculadora de Férias CLT
              </h3>
              <p className="text-xs text-slate-600 mb-3">
                Remuneração de descanso com terço constitucional, abono de 10 dias e adiantamento do 13º.
              </p>
              <span className="text-xs font-bold text-brand-900">Acessar simulador →</span>
            </Link>

            <Link
              href="/br/calculadora-13-salario/"
              className="p-4 bg-white border border-slate-200 hover:border-brand-900 rounded-xl shadow-sm hover:shadow-md transition-all group"
            >
              <h3 className="text-base font-bold text-slate-900 group-hover:text-brand-900 mb-1">
                Calculadora de 13º Salário
              </h3>
              <p className="text-xs text-slate-600 mb-3">
                Divisão em 1ª e 2ª parcelas, meses trabalhados (regra de 15 dias) e deduções de IRRF e INSS.
              </p>
              <span className="text-xs font-bold text-brand-900">Acessar simulador →</span>
            </Link>

            <Link
              href="/br/calculadora-salario-liquido/"
              className="p-4 bg-white border border-slate-200 hover:border-brand-900 rounded-xl shadow-sm hover:shadow-md transition-all group"
            >
              <h3 className="text-base font-bold text-slate-900 group-hover:text-brand-900 mb-1">
                Salário Líquido Mensal
              </h3>
              <p className="text-xs text-slate-600 mb-3">
                Holerite detalhado com descontos de previdência, IRPF, vale-transporte e dependentes.
              </p>
              <span className="text-xs font-bold text-brand-900">Acessar simulador →</span>
            </Link>

            <Link
              href="/br/calculadora-seguro-desemprego/"
              className="p-4 bg-white border border-slate-200 hover:border-brand-900 rounded-xl shadow-sm hover:shadow-md transition-all group"
            >
              <h3 className="text-base font-bold text-slate-900 group-hover:text-brand-900 mb-1">
                Seguro-Desemprego 2026
              </h3>
              <p className="text-xs text-slate-600 mb-3">
                Consulta do valor das parcelas (mínimo R$ 1.518 e teto R$ 2.351) e quantidade de quotas.
              </p>
              <span className="text-xs font-bold text-brand-900">Acessar simulador →</span>
            </Link>

            <Link
              href="/br/calculadora-hora-extra/"
              className="p-4 bg-white border border-slate-200 hover:border-brand-900 rounded-xl shadow-sm hover:shadow-md transition-all group"
            >
              <h3 className="text-base font-bold text-slate-900 group-hover:text-brand-900 mb-1">
                Horas Extras e DSR
              </h3>
              <p className="text-xs text-slate-600 mb-3">
                Adicional de 50%, 100%, hora noturna reduzida (52m30s) e reflexo no descanso remunerado.
              </p>
              <span className="text-xs font-bold text-brand-900">Acessar simulador →</span>
            </Link>
          </div>
        </section>

        {/* Section: Category 2 - Financeiro & FGTS */}
        <section id="finanzas" className="mb-12">
          <div className="flex items-center justify-between mb-4 border-b border-slate-200 pb-2">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span>🏦</span> Calculadoras Financeiras e FGTS
            </h2>
            <span className="text-xs font-semibold text-slate-500">Caixa Econômica</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              href="/br/calculadora-fgts/"
              className="p-4 bg-white border border-slate-200 hover:border-brand-900 rounded-xl shadow-sm hover:shadow-md transition-all group"
            >
              <h3 className="text-base font-bold text-slate-900 group-hover:text-brand-900 mb-1">
                Calculadora de FGTS e Saque
              </h3>
              <p className="text-xs text-slate-600 mb-3">
                Depósitos mensais de 8%, rendimento acumulado, multa rescisória e Saque-Aniversário.
              </p>
              <span className="text-xs font-bold text-brand-900">Acessar simulador →</span>
            </Link>
          </div>
        </section>

        {/* Section: Category 3 - Tabelas Oficiais */}
        <section id="tabelas" className="mb-12">
          <div className="flex items-center justify-between mb-4 border-b border-slate-200 pb-2">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span>📊</span> Tabelas Oficiais de 2026
            </h2>
            <span className="text-xs font-semibold text-slate-500">Dados Atualizados</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              href="/br/tabela-inss/"
              className="p-4 bg-white border border-slate-200 hover:border-blue-700 rounded-xl shadow-sm hover:shadow-md transition-all group"
            >
              <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">Previdência</span>
              <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-700 mt-1 mb-1">
                Tabela INSS 2026
              </h3>
              <p className="text-xs text-slate-600 mb-3">
                Faixas progressivas de 7,5% a 14%, teto de R$ 8.157,41 e desconto máximo de R$ 951,64.
              </p>
              <span className="text-xs font-bold text-blue-700">Ver tabela completa →</span>
            </Link>

            <Link
              href="/br/tabela-irrf/"
              className="p-4 bg-white border border-slate-200 hover:border-emerald-700 rounded-xl shadow-sm hover:shadow-md transition-all group"
            >
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Receita Federal</span>
              <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 mt-1 mb-1">
                Tabela IRRF 2026
              </h3>
              <p className="text-xs text-slate-600 mb-3">
                Faixas de isenção, desconto simplificado de R$ 564,80 e dedução de R$ 189,59 por dependente.
              </p>
              <span className="text-xs font-bold text-emerald-700">Ver tabela completa →</span>
            </Link>

            <Link
              href="/br/salario-minimo/"
              className="p-4 bg-white border border-slate-200 hover:border-purple-700 rounded-xl shadow-sm hover:shadow-md transition-all group"
            >
              <span className="text-xs font-bold text-purple-700 uppercase tracking-wider">Histórico Oficial</span>
              <h3 className="text-base font-bold text-slate-900 group-hover:text-purple-700 mt-1 mb-1">
                Salário Mínimo 2026
              </h3>
              <p className="text-xs text-slate-600 mb-3">
                Valor nacional de R$ 1.518,00, cálculo de diária e histórico completo dos últimos 10 anos.
              </p>
              <span className="text-xs font-bold text-purple-700">Ver histórico 10 anos →</span>
            </Link>
          </div>
        </section>

        {/* Section: Sub-pages of Rescisão */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-4 border-b border-slate-200 pb-2">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span>⚖️</span> Modalidades Específicas de Rescisão
            </h2>
            <span className="text-xs font-semibold text-slate-500">Calculadoras Dedicadas</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <Link
              href="/br/calculadora-rescisao/sem-justa-causa/"
              className="p-3.5 bg-slate-50 hover:bg-white border border-slate-200 hover:border-brand-900 rounded-xl transition-all"
            >
              <p className="text-sm font-bold text-slate-900">Demissão Sem Justa Causa</p>
              <p className="text-xs text-slate-500 mt-0.5">Multa 40% FGTS + aviso + seguro</p>
            </Link>

            <Link
              href="/br/calculadora-rescisao/pedido-de-demissao/"
              className="p-3.5 bg-slate-50 hover:bg-white border border-slate-200 hover:border-brand-900 rounded-xl transition-all"
            >
              <p className="text-sm font-bold text-slate-900">Pedido de Demissão</p>
              <p className="text-xs text-slate-500 mt-0.5">Regras de aviso cumprido ou descontado</p>
            </Link>

            <Link
              href="/br/calculadora-rescisao/acordo/"
              className="p-3.5 bg-slate-50 hover:bg-white border border-slate-200 hover:border-brand-900 rounded-xl transition-all"
            >
              <p className="text-sm font-bold text-slate-900">Acordo Mútuo (Art. 484-A)</p>
              <p className="text-xs text-slate-500 mt-0.5">50% aviso + 20% multa + 80% saque</p>
            </Link>

            <Link
              href="/br/calculadora-rescisao/justa-causa/"
              className="p-3.5 bg-slate-50 hover:bg-white border border-slate-200 hover:border-brand-900 rounded-xl transition-all"
            >
              <p className="text-sm font-bold text-slate-900">Demissão Com Justa Causa</p>
              <p className="text-xs text-slate-500 mt-0.5">Saldo e férias vencidas adquiridas</p>
            </Link>

            <Link
              href="/br/calculadora-rescisao/contrato-de-experiencia/"
              className="p-3.5 bg-slate-50 hover:bg-white border border-slate-200 hover:border-brand-900 rounded-xl transition-all"
            >
              <p className="text-sm font-bold text-slate-900">Contrato de Experiência</p>
              <p className="text-xs text-slate-500 mt-0.5">Término no prazo e rescisão antecipada</p>
            </Link>
          </div>
        </section>

        {/* Section: Latest Guides */}
        <section id="guias" className="mb-12">
          <div className="flex items-center justify-between mb-4 border-b border-slate-200 pb-2">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span>📚</span> Guias e Artigos Práticos sobre Direitos CLT
            </h2>
            <span className="text-xs font-semibold text-slate-500">{BR_GUIDES_LIST.length} Artigos</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {BR_GUIDES_LIST.map((guide) => (
              <Link
                key={guide.slug}
                href={guide.path}
                className="p-4 bg-white border border-slate-200 hover:border-brand-900 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-brand-900 transition-colors mb-2 line-clamp-2">
                    {guide.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {guide.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-brand-900 flex items-center justify-between">
                  <span>Ler guia</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Section: Zetawala Network Intro Block */}
        <section className="mb-12 p-6 sm:p-8 bg-slate-900 text-white rounded-2xl shadow-sm">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-800 rounded-full mb-3">
              <span>Rede Zetawala</span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">
              A Calcula faz parte da rede Zetawala de ferramentas gratuitas
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Nossa missão é democratizar o acesso ao conhecimento sobre leis trabalhistas e cálculos financeiros em toda a América Latina. Todas as nossas calculadoras são desenvolvidas com base em fontes legislativas oficiais e são 100% gratuitas.
            </p>
            <a
              href="https://zetawala.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white text-slate-950 hover:bg-slate-100 rounded-lg text-xs font-bold transition-colors"
            >
              <span>Conheça a Zetawala</span>
              <span>→</span>
            </a>
          </div>
        </section>

        {/* Section: FAQs */}
        <section className="mb-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-1">
              Perguntas Frequentes sobre Direitos Trabalhistas (FAQ)
            </h2>
            <p className="text-sm text-slate-600">
              Tire suas principais dúvidas sobre rescisão, prazos da CLT, férias e tributos em 2026.
            </p>
          </div>
          <FaqAccordion items={BRAZIL_FAQS} />
        </section>
      </main>
      <Footer country="br" />
    </>
  );
}
