import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const OUT_DIR = path.join(process.cwd(), 'public/og');

if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

const COUNTRIES = {
  br: { name: 'Brasil', flag: '🇧🇷', lang: 'pt' },
  mx: { name: 'México', flag: '🇲🇽', lang: 'es' },
  co: { name: 'Colombia', flag: '🇨🇴', lang: 'es' },
  cl: { name: 'Chile', flag: '🇨🇱', lang: 'es' },
};

// Target list of key calculators and guides to generate OG cards for
const OG_PAGES = [
  // Brazil
  { country: 'br', slug: 'br-home', title: 'Calculadoras Trabalhistas e Financeiras Grátis 2026', subtitle: 'Rescisão CLT, 13º Salário, Férias, FGTS e Salário Líquido' },
  { country: 'br', slug: 'br-calculadora-rescisao', title: 'Calculadora de Rescisão Trabalhista CLT 2026', subtitle: 'Simule saldo de salário, aviso prévio, férias, 13º e multa 40% FGTS' },
  { country: 'br', slug: 'br-calculadora-13-salario', title: 'Calculadora do 13º Salário 2026', subtitle: 'Calcule a 1ª e 2ª parcelas com descontos oficiais de INSS e IRRF' },
  { country: 'br', slug: 'br-calculadora-ferias', title: 'Calculadora de Férias CLT 2026', subtitle: 'Valor bruto, 1/3 constitucional, abono pecuniário e adiantamento' },
  { country: 'br', slug: 'br-calculadora-salario-liquido', title: 'Calculadora de Salário Líquido 2026', subtitle: 'Descontos progressivos do INSS e tabela do IRRF Receita Federal' },
  { country: 'br', slug: 'br-calculadora-fgts', title: 'Calculadora de FGTS e Saque-Aniversário', subtitle: 'Depósitos mensais de 8%, rendimento e multa rescisória' },
  { country: 'br', slug: 'br-calculadora-hora-extra', title: 'Calculadora de Horas Extras e DSR', subtitle: 'Adicional de 50%, 100% em domingos e reflexo no DSR' },
  { country: 'br', slug: 'br-calculadora-seguro-desemprego', title: 'Calculadora de Seguro-Desemprego 2026', subtitle: 'Valor e quantidade de parcelas conforme meses trabalhados' },
  { country: 'br', slug: 'br-gerador-de-link-whatsapp', title: 'Gerador de Link do WhatsApp Grátis com QR Code', subtitle: 'Crie links wa.me personalizados e QR Code para bio e redes sociais' },

  // Mexico
  { country: 'mx', slug: 'mx-home', title: 'Calculadoras Laborales y Fiscales en México 2026', subtitle: 'Finiquito, liquidación, aguinaldo, vacaciones dignas y sueldo neto' },
  { country: 'mx', slug: 'mx-calculadora-finiquito', title: 'Calculadora de Finiquito y Liquidación LFT', subtitle: 'Calcula aguinaldo, vacaciones, prima vacacional y 90 días de indemnización' },
  { country: 'mx', slug: 'mx-calculadora-sueldo-neto', title: 'Calculadora de Sueldo Neto México 2026', subtitle: 'Retención de ISR SAT 2026, cuotas obreras IMSS y subsidio' },
  { country: 'mx', slug: 'mx-calculadora-aguinaldo', title: 'Calculadora de Aguinaldo LFT 2026', subtitle: 'Cálculo de 15 días o proporcional con exención de 30 UMA' },
  { country: 'mx', slug: 'mx-calculadora-vacaciones', title: 'Calculadora de Vacaciones Dignas y Prima', subtitle: 'Días por antigüedad y prima del 25% conforme a la reforma laboral' },
  { country: 'mx', slug: 'mx-calculadora-ptu', title: 'Calculadora de Reparto de Utilidades (PTU)', subtitle: 'Simulación del 10% de utilidades fiscales con tope legal de 3 meses' },
  { country: 'mx', slug: 'mx-generador-de-link-whatsapp', title: 'Generador de Enlace de WhatsApp con QR', subtitle: 'Crea tu link personalizado wa.me con código QR gratis' },

  // Colombia
  { country: 'co', slug: 'co-home', title: 'Calculadoras Laborales y Liquidación en Colombia 2026', subtitle: 'Liquidación de contrato CST, cesantías, prima y recargos' },
  { country: 'co', slug: 'co-calculadora-liquidacion', title: 'Calculadora de Liquidación Laboral 2026', subtitle: 'Cesantías, intereses, prima de servicios, vacaciones e indemnización Art. 64' },
  { country: 'co', slug: 'co-calculadora-salario-neto', title: 'Calculadora de Salario Neto Colombia 2026', subtitle: 'Descuentos de salud (4%), pensión (4%) y auxilio de transporte' },
  { country: 'co', slug: 'co-calculadora-prima', title: 'Calculadora de Prima de Servicios 2026', subtitle: 'Pago de junio y diciembre proporcional con auxilio de transporte' },
  { country: 'co', slug: 'co-calculadora-cesantias', title: 'Calculadora de Cesantías e Intereses', subtitle: 'Un mes de salario por año laborado y 12% anual de intereses' },
  { country: 'co', slug: 'co-calculadora-horas-extras', title: 'Calculadora de Horas Extras y Recargos 2026', subtitle: 'Recargo nocturno, dominicales y festivos con Reforma Laboral' },
  { country: 'co', slug: 'co-generador-de-link-whatsapp', title: 'Generador de Link de WhatsApp con Código QR', subtitle: 'Crea enlaces wa.me con mensaje predeterminado y QR descargable' },

  // Chile
  { country: 'cl', slug: 'cl-home', title: 'Calculadoras Laborales e Indicadores en Chile 2026', subtitle: 'Valor UF hoy, finiquito, sueldo líquido, UTM y crédito hipotecario' },
  { country: 'cl', slug: 'cl-valor-uf-hoy', title: 'Valor UF Hoy en Chile en Vivo', subtitle: 'Consulta el valor oficial de hoy, conversión a pesos y gráfico histórico' },
  { country: 'cl', slug: 'cl-calculadora-sueldo-liquido', title: 'Calculadora de Sueldo Líquido Chile 2026', subtitle: 'Descuentos de AFP, Fonasa/Isapre, seguro de cesantía e Impuesto Único' },
  { country: 'cl', slug: 'cl-calculadora-finiquito', title: 'Calculadora de Finiquito Laboral Chile 2026', subtitle: 'Años de servicio, aviso previo, feriado proporcional y tope 90 UF' },
  { country: 'cl', slug: 'cl-valor-utm', title: 'Valor UTM 2026 en Chile y Conversor a Pesos', subtitle: 'Tabla mensual oficial del SII, valor UTA y equivalencia en CLP' },
  { country: 'cl', slug: 'cl-calculadora-arriendo-uf', title: 'Calculadora de Arriendo en UF a Pesos', subtitle: 'Conversión exacta al día de pago y proyección de reajuste anual' },
  { country: 'cl', slug: 'cl-simulador-credito-hipotecario', title: 'Simulador de Crédito Hipotecario en Chile', subtitle: 'Dividendo mensual estimado en UF y pesos según plazo y pie' },
  { country: 'cl', slug: 'cl-generador-de-link-whatsapp', title: 'Generador de Enlaces de WhatsApp con Código QR', subtitle: 'Crea tu link wa.me para Chile con código QR y botón HTML' },
];

function escapeXml(unsafe) {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
    }
  });
}

function wrapText(text, maxCharsPerLine = 38) {
  const words = text.split(' ');
  const lines = [];
  let currentLine = '';

  for (const word of words) {
    if ((currentLine + ' ' + word).trim().length <= maxCharsPerLine) {
      currentLine = (currentLine + ' ' + word).trim();
    } else {
      if (currentLine) lines.push(currentLine);
      currentLine = word;
    }
  }
  if (currentLine) lines.push(currentLine);
  return lines;
}

async function generateOgImage(item) {
  const country = COUNTRIES[item.country] || { name: 'América Latina', flag: '🌎' };
  const titleLines = wrapText(item.title, 32);
  const subtitleLines = wrapText(item.subtitle, 50);

  const titleSvg = titleLines
    .map((line, idx) => `<tspan x="80" dy="${idx === 0 ? 0 : 54}">${escapeXml(line)}</tspan>`)
    .join('');

  const subtitleSvg = subtitleLines
    .map((line, idx) => `<tspan x="80" dy="${idx === 0 ? 0 : 32}">${escapeXml(line)}</tspan>`)
    .join('');

  const svg = `
  <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#021c38" />
        <stop offset="100%" stop-color="#05305c" />
      </linearGradient>
      <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#0ea5e9" />
        <stop offset="100%" stop-color="#38bdf8" />
      </linearGradient>
    </defs>

    <!-- Background -->
    <rect width="1200" height="630" fill="url(#bg)" />

    <!-- Grid Accent pattern -->
    <circle cx="1100" cy="100" r="300" fill="#0369a1" opacity="0.15" />
    <circle cx="100" cy="550" r="200" fill="#0284c7" opacity="0.12" />

    <!-- Top Badge -->
    <rect x="80" y="70" width="360" height="42" rx="21" fill="#073b6e" stroke="#0ea5e9" stroke-width="1.5" />
    <text x="105" y="97" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="18" font-weight="bold" fill="#38bdf8">
      ${country.flag}  CALCULA ${country.name.toUpperCase()}  •  2026
    </text>

    <!-- Main Title -->
    <text x="80" y="210" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="46" font-weight="900" fill="#ffffff" letter-spacing="-1">
      ${titleSvg}
    </text>

    <!-- Subtitle -->
    <text x="80" y="380" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="22" font-weight="normal" fill="#93c5fd" opacity="0.95">
      ${subtitleSvg}
    </text>

    <!-- Bottom Brand Divider -->
    <rect x="80" y="520" width="1040" height="2" fill="#1e4e79" />

    <!-- Brand Logo Text & Domain -->
    <text x="80" y="565" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="28" font-weight="900" fill="#ffffff">
      Calcula<tspan fill="#38bdf8">.</tspan>
    </text>

    <text x="1120" y="565" text-anchor="end" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="18" font-weight="600" fill="#94a3b8">
      calcula.zetawala.com  •  Herramienta Gratuita
    </text>
  </svg>
  `;

  const destPath = path.join(OUT_DIR, `${item.slug}.png`);
  await sharp(Buffer.from(svg))
    .png({ quality: 90, compressionLevel: 8 })
    .toFile(destPath);
}

async function main() {
  console.log(`Generating ${OG_PAGES.length} Open Graph PNG images in ${OUT_DIR}...`);
  for (const page of OG_PAGES) {
    try {
      await generateOgImage(page);
      console.log(`✓ Generated ${page.slug}.png`);
    } catch (err) {
      console.error(`✗ Error generating ${page.slug}.png:`, err);
    }
  }
  console.log('Open Graph generation completed!');
}

main();
