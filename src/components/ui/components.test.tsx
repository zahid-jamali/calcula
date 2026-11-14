import { describe, it, expect } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  Button,
  MoneyInput,
  NumberInput,
  DateInput,
  Select,
  SegmentedToggle,
  Checkbox,
  ResultSummary,
  CopyButton,
  WhatsAppShareButton,
  PrintButton,
  Breadcrumbs,
  TableOfContents,
  FaqAccordion,
  RelatedTools,
  AdSlot,
  UpdatedBadge,
} from './index';

describe('UI Components Suite', () => {
  it('renders Card with header, content, footer and padding', () => {
    const html = renderToString(
      <Card
        title="Card Title"
        description="Card Description"
        footer={<span>Footer text</span>}
        padding="md"
      >
        <p>Card Body</p>
      </Card>
    );

    expect(html).toContain('Card Title');
    expect(html).toContain('Card Description');
    expect(html).toContain('Card Body');
    expect(html).toContain('Footer text');
    expect(html).toContain('rounded-2xl');
  });

  it('renders Card composable subcomponents', () => {
    const html = renderToString(
      <Card padding="none">
        <CardHeader>
          <CardTitle as="h2">Sub Title</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Sub Content</p>
        </CardContent>
        <CardFooter>
          <span>Sub Footer</span>
        </CardFooter>
      </Card>
    );

    expect(html).toContain('Sub Title');
    expect(html).toContain('Sub Content');
    expect(html).toContain('Sub Footer');
  });

  it('renders Button with brand-900 primary style and min-h-44px', () => {
    const html = renderToString(
      <Button variant="primary" size="md">
        Calcular Rescisão
      </Button>
    );

    expect(html).toContain('bg-brand-900');
    expect(html).toContain('min-h-[44px]');
    expect(html).toContain('Calcular Rescisão');
  });

  it('renders Button outline and secondary variants', () => {
    const htmlOutline = renderToString(
      <Button variant="outline" size="sm">
        Outline
      </Button>
    );
    expect(htmlOutline).toContain('border');
    expect(htmlOutline).toContain('min-h-[44px]');

    const htmlSecondary = renderToString(
      <Button variant="secondary">Secondary</Button>
    );
    expect(htmlSecondary).toContain('bg-slate-100');
  });

  it('renders MoneyInput with currency prefix, label, and min-h-44px', () => {
    const html = renderToString(
      <MoneyInput
        id="salary-input"
        label="Salário Bruto"
        currencySymbol="R$"
        defaultValue="3.500,00"
        hint="Informe seu último salário na carteira"
      />
    );

    expect(html).toContain('Salário Bruto');
    expect(html).toContain('R$');
    expect(html).toContain('3.500,00');
    expect(html).toContain('min-h-[44px]');
    expect(html).toContain('Informe seu último salário');
  });

  it('renders NumberInput with prefix, suffix, and accessibility', () => {
    const html = renderToString(
      <NumberInput
        id="days-worked"
        label="Dias Trabalhados"
        min={0}
        max={30}
        suffix="dias"
        defaultValue={15}
      />
    );

    expect(html).toContain('Dias Trabalhados');
    expect(html).toContain('dias');
    expect(html).toContain('min-h-[44px]');
    expect(html).toContain('value="15"');
  });

  it('renders DateInput with clean native styling and min-h-44px', () => {
    const html = renderToString(
      <DateInput
        id="start-date"
        label="Data de Admissão"
        defaultValue="2024-01-15"
      />
    );

    expect(html).toContain('Data de Admissão');
    expect(html).toContain('type="date"');
    expect(html).toContain('min-h-[44px]');
  });

  it('renders Select with accessible native select and chevron', () => {
    const html = renderToString(
      <Select
        id="motivo"
        label="Motivo do Desligamento"
        options={[
          { value: 'sem-justa-causa', label: 'Sem Justa Causa' },
          { value: 'pedido-demissao', label: 'Pedido de Demissão' },
        ]}
        defaultValue="sem-justa-causa"
      />
    );

    expect(html).toContain('Motivo do Desligamento');
    expect(html).toContain('Sem Justa Causa');
    expect(html).toContain('Pedido de Demissão');
    expect(html).toContain('min-h-[44px]');
  });

  it('renders SegmentedToggle with radio group and active pressed state', () => {
    const html = renderToString(
      <SegmentedToggle
        label="Aviso Prévio"
        options={[
          { value: 'trabalhado', label: 'Trabalhado' },
          { value: 'indenizado', label: 'Indenizado' },
          { value: 'dispensado', label: 'Dispensado' },
        ]}
        value="indenizado"
        onChange={() => {}}
      />
    );

    expect(html).toContain('Aviso Prévio');
    expect(html).toContain('role="radiogroup"');
    expect(html).toContain('aria-checked="true"');
    expect(html).toContain('bg-brand-900');
    expect(html).toContain('min-h-[44px]');
  });

  it('renders Checkbox with label and tooltip', () => {
    const html = renderToString(
      <Checkbox
        id="tem-ferias"
        label="Possui férias vencidas?"
        description="Marque se houver períodos de férias anteriores não gozados"
        tooltip="Férias vencidas acumulam dobra conforme CLT Art. 137"
      />
    );

    expect(html).toContain('Possui férias vencidas?');
    expect(html).toContain('Férias vencidas acumulam dobra');
    expect(html).toContain('min-h-[44px]');
  });

  it('renders ResultSummary with live region, breakdown table, and legal articles', () => {
    const items = [
      {
        key: 'saldo',
        label: 'Saldo de Salário (15 dias)',
        amount: 1500,
        formula: '15 dias × R$ 100,00',
        legalArticle: 'Art. 457 CLT',
      },
      {
        key: 'inss',
        label: 'Desconto INSS',
        amount: 112.5,
        formula: '7.5% sobre saldo',
        legalArticle: 'Tabela INSS',
        isDeduction: true,
      },
    ];

    const html = renderToString(
      <ResultSummary
        totalAmount={1387.5}
        totalGross={1500}
        totalDeductions={112.5}
        items={items}
        country="br"
        badge="CLT Oficial 2026"
      />
    );

    expect(html).toContain('aria-live="polite"');
    expect(html).toContain('CLT Oficial 2026');
    expect(html).toContain('Saldo de Salário');
    expect(html).toContain('Art. 457 CLT');
    expect(html).toContain('Desconto INSS');
    expect(html).toContain('Total Líquido Estimado');
  });

  it('renders CopyButton with tap target', () => {
    const html = renderToString(
      <CopyButton text="Total líquido: R$ 3.500,00" label="Copiar Resumo" />
    );

    expect(html).toContain('Copiar Resumo');
    expect(html).toContain('min-h-[44px]');
  });

  it('renders WhatsAppShareButton with wa.me link and encoded message', () => {
    const html = renderToString(
      <WhatsAppShareButton
        text="Meu cálculo de rescisão no Calcula: R$ 5.200,00"
        label="Enviar via WhatsApp"
      />
    );

    expect(html).toContain('https://wa.me/?text=');
    expect(html).toContain('Enviar via WhatsApp');
    expect(html).toContain('target="_blank"');
    expect(html).toContain('min-h-[44px]');
  });

  it('renders PrintButton with window.print icon', () => {
    const html = renderToString(
      <PrintButton label="Imprimir Resultado" />
    );

    expect(html).toContain('Imprimir Resultado');
    expect(html).toContain('no-print');
    expect(html).toContain('min-h-[44px]');
  });

  it('renders Breadcrumbs with schema.org Microdata', () => {
    const html = renderToString(
      <Breadcrumbs
        items={[
          { label: 'Início', href: '/' },
          { label: 'Brasil', href: '/br/' },
          { label: 'Trabalhista', href: '/br/trabalhista' },
          { label: 'Calculadora de Rescisão' },
        ]}
      />
    );

    expect(html).toContain('itemScope=""');
    expect(html).toContain('https://schema.org/BreadcrumbList');
    expect(html).toContain('https://schema.org/ListItem');
    expect(html).toContain('Calculadora de Rescisão');
    expect(html).toContain('aria-current="page"');
  });

  it('renders TableOfContents with jump links and H2/H3 levels', () => {
    const html = renderToString(
      <TableOfContents
        title="Neste guia"
        items={[
          { id: 'o-que-e', title: 'O que é a rescisão', level: 2 },
          { id: 'tipos', title: 'Tipos de demissão', level: 2 },
          { id: 'aviso-previo', title: 'Aviso prévio proporcional', level: 3 },
        ]}
      />
    );

    expect(html).toContain('Neste guia');
    expect(html).toContain('href="#o-que-e"');
    expect(html).toContain('href="#aviso-previo"');
    expect(html).toContain('ml-4');
  });

  it('renders FaqAccordion with native details and summary', () => {
    const html = renderToString(
      <FaqAccordion
        title="Dúvidas Frequentes"
        items={[
          {
            question: 'Quando recebo a rescisão?',
            answer: 'O pagamento deve ser feito em até 10 dias corridos após o término do contrato.',
          },
        ]}
      />
    );

    expect(html).toContain('<details');
    expect(html).toContain('<summary');
    expect(html).toContain('Quando recebo a rescisão?');
    expect(html).toContain('até 10 dias corridos');
  });

  it('renders RelatedTools grid with links and badges', () => {
    const html = renderToString(
      <RelatedTools
        tools={[
          {
            title: 'Calculadora de Férias',
            description: 'Calcule o valor das férias com 1/3 constitucional',
            href: '/br/calculadora-ferias',
            badge: '2026',
            category: 'Trabalhista',
          },
        ]}
      />
    );

    expect(html).toContain('Calculadora de Férias');
    expect(html).toContain('href="/br/calculadora-ferias"');
    expect(html).toContain('Trabalhista');
    expect(html).toContain('2026');
  });

  it('renders AdSlot with reserved min-height 280px', () => {
    const html = renderToString(
      <AdSlot slotId="test-slot" minHeight="280px" />
    );

    expect(html).toContain('min-height:280px');
    expect(html).toContain('ad-slot');
  });

  it('renders UpdatedBadge with localized text and time tag', () => {
    const htmlPt = renderToString(
      <UpdatedBadge date="2026-01-01" country="br" />
    );
    expect(htmlPt).toContain('Atualizado em');
    expect(htmlPt).toContain('dateTime="2026-01-01"');

    const htmlEs = renderToString(
      <UpdatedBadge date="2026-01-01" country="mx" />
    );
    expect(htmlEs).toContain('Actualizado el');
  });
});
