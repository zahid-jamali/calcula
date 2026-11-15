import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/seo/JsonLd';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { buildMetadata } from '@/lib/seo';

export function generateMetadata(): Metadata {
  return buildMetadata({
    country: 'cl',
    slug: 'cl/preguntas-frecuentes',
    title: 'Preguntas Frecuentes sobre Finiquito, Sueldo y UF 2026',
    description:
      'Resuelve más de 30 dudas sobre finiquito laboral, sueldo líquido, valor UF hoy, UTM, arriendos y créditos hipotecarios en Chile con leyes 2026.',
  });
}

interface FaqItemData {
  q: string;
  a: string;
  linkText: string;
  linkHref: string;
}

interface FaqCategory {
  id: string;
  icon: string;
  title: string;
  description: string;
  items: FaqItemData[];
}

const FAQ_CATEGORIES: FaqCategory[] = [
  {
    id: 'finiquito',
    icon: '📑',
    title: 'Finiquito Laboral e Indemnizaciones',
    description: 'Causales de término, tope de 90 UF, aviso previo, feriado legal proporcional y reserva de derechos.',
    items: [
      {
        q: '¿Cuáles son las causales de despido que dan derecho a indemnización por años de servicio en Chile?',
        a: 'En Chile, el pago de indemnización por años de servicio procede cuando el contrato concluye por la causal del Artículo 161 del Código del Trabajo, que corresponde a necesidades de la empresa, establecimiento o servicio o desahucio patronal. Por el contrario, causales como renuncia voluntaria (Art. 159 N° 2) o despido disciplinario con justa causa (Art. 160) no confieren derecho a esta indemnización legal. Puedes estimar el monto exacto de tu compensación en nuestra',
        linkText: 'Calculadora de Finiquito Laboral',
        linkHref: '/cl/calculadora-finiquito/',
      },
      {
        q: '¿Existe un tope legal para el cálculo de la indemnización por años de servicio?',
        a: 'Sí, el Artículo 172 del Código del Trabajo estipula que la remuneración mensual de referencia para calcular indemnizaciones legales no puede superar las 90 Unidades de Fomento (UF) fijadas al último día del mes previo al despido. Asimismo, el Artículo 163 establece un tope cronológico de 11 años de servicio para los contratos firmados a partir del 14 de agosto de 1981. Conoce todos los detalles y excepciones en nuestra',
        linkText: 'Guía de Indemnización por Años de Servicio',
        linkHref: '/cl/guias/indemnizacion-por-anos-de-servicio/',
      },
      {
        q: '¿Qué es la indemnización sustitutiva del aviso previo y cuándo debe pagarse?',
        a: 'La indemnización sustitutiva del aviso previo equivale a un mes de remuneración íntegra y debe pagarse cuando el empleador desvincula a un trabajador por necesidades de la empresa sin darle una comunicación escrita con al menos 30 días de anticipación (Art. 161 y 162). Si el empleador otorga el aviso con 30 días o más y el dependiente continúa laborando ese mes, esta compensación en dinero no se abona. Simula si te corresponde este pago en nuestra',
        linkText: 'Calculadora de Finiquito Laboral',
        linkHref: '/cl/calculadora-finiquito/',
      },
      {
        q: '¿Cómo se calcula el pago de las vacaciones proporcionales al momento del despido?',
        a: 'El feriado proporcional compensa los días de vacaciones que el trabajador acumuló a razón de 1,25 días hábiles por cada mes completo trabajado (Art. 67 y 73). Al terminar la relación contractual, estos días hábiles se proyectan sobre el calendario a partir del día siguiente al cese, incorporando los días inhábiles (sábados, domingos y festivos) con el factor oficial 7/5 de la Dirección del Trabajo. Aprende la metodología paso a paso en nuestra',
        linkText: 'Guía sobre Cómo Calcular el Finiquito',
        linkHref: '/cl/guias/como-calcular-el-finiquito/',
      },
      {
        q: '¿Cuál es el plazo legal que tiene la empresa para pagar y entregar el finiquito?',
        a: 'Conforme al Artículo 177 del Código del Trabajo, el empleador está obligado a poner a disposición del trabajador el finiquito y el pago íntegro de sus dineros dentro de los 10 días hábiles siguientes a la fecha de cese de funciones. En caso de mora injustificada, el empleador puede recibir severas multas de la Inspección del Trabajo y las sumas adeudadas se reajustan según la variación de la UF y el IPC. Revisa los componentes que deben incluirse en nuestra',
        linkText: 'Calculadora de Finiquito Laboral',
        linkHref: '/cl/calculadora-finiquito/',
      },
      {
        q: '¿Qué significa firmar un finiquito laboral con "reserva de derechos"?',
        a: 'La reserva de derechos es una anotación formal manuscrita que el trabajador plasma en el finiquito antes de ratificarlo ante el notario o ministro de fe, indicando expresamente los conceptos en los cuales no está conforme con la liquidación ofrecida. Esta cautela jurídica evita que el finiquito tenga un efecto liberatorio total y le permite al trabajador demandar judicialmente por despido injustificado o diferencias de feriado legal. Obtén más recomendaciones prácticas en nuestra',
        linkText: 'Calculadora de Finiquito Laboral',
        linkHref: '/cl/calculadora-finiquito/',
      },
    ],
  },
  {
    id: 'sueldo',
    icon: '💼',
    title: 'Sueldo Líquido, AFPs y Descuentos Legales',
    description: 'Deducciones obligatorias, topes imponibles de 87,4 UF y 131,4 UF, comisiones de AFPs e Impuesto Único.',
    items: [
      {
        q: '¿Cuál es la diferencia exacta entre el sueldo bruto y el sueldo líquido en Chile?',
        a: 'El sueldo bruto o haber total imponible representa la suma total de las remuneraciones acordadas antes de aplicar cualquier deducción legal (sueldo base, gratificación legal, comisiones y bonos). El sueldo líquido es el importe neto que efectivamente ingresa a la cuenta bancaria del trabajador tras descontar las cotizaciones previsionales obligatorias (AFP, salud y cesantía) y el Impuesto Único de Segunda Categoría. Puedes convertir tu salario fácilmente en nuestra',
        linkText: 'Calculadora de Sueldo Líquido',
        linkHref: '/cl/calculadora-sueldo-liquido/',
      },
      {
        q: '¿Cuáles son los topes imponibles de AFP, Salud y Seguro de Cesantía para 2026?',
        a: 'Para el año calendario 2026, la Superintendencia de Pensiones fijó el tope imponible de cotizaciones de AFP y Salud en 87,4 Unidades de Fomento (UF) mensuales. Por su parte, el tope imponible para el Seguro de Cesantía (AFC) se ubica en 131,4 UF. Quienes perciben ingresos por sobre estos límites sólo cotizan previsionalmente hasta el monto tope respectivo, como puedes comprobar en nuestra',
        linkText: 'Guía de Sueldo Bruto a Líquido',
        linkHref: '/cl/guias/de-sueldo-bruto-a-liquido/',
      },
      {
        q: '¿Cuánto cobran de comisión las distintas AFPs que operan en Chile?',
        a: 'Cada administradora descuenta el 10% obligatorio destinado a la cuenta de capitalización individual más una comisión porcentual fija por administración de fondos. Actualmente, las comisiones varían desde AFP Uno (0,49%) y AFP Modelo (0,58%) hasta AFP Capital (1,44%), Cuprum (1,44%) y Provida (1,45%). Selecciona tu administradora para ver tu descuento exacto en la',
        linkText: 'Calculadora de Sueldo Líquido',
        linkHref: '/cl/calculadora-sueldo-liquido/',
      },
      {
        q: '¿Cómo se calcula la gratificación legal mensual bajo el Artículo 50 del Código del Trabajo?',
        a: 'La modalidad del Artículo 50 faculta al empleador a eximirse de repartir el 30% de las utilidades líquidas de la empresa pagando en su lugar el 25% de lo devengado por el trabajador, con un tope anual de 4,75 Ingresos Mínimos Mensuales (IMM). Para su cálculo mensual, dicho tope se divide entre 12 meses, garantizando un monto regular y predecible en cada liquidación de sueldo. Simula tu gratificación en nuestra',
        linkText: 'Calculadora de Sueldo Líquido',
        linkHref: '/cl/calculadora-sueldo-liquido/',
      },
      {
        q: '¿A partir de qué nivel de ingresos se paga Impuesto Único de Segunda Categoría?',
        a: 'En Chile, el Impuesto Único de Segunda Categoría grava las rentas del trabajo dependiente a través de una tabla progresiva que comienza a regir a partir de las 13,5 Unidades Tributarias Mensuales (UTM). Quienes perciben una renta neta imponible inferior o igual a dicho umbral se encuentran en el tramo exento (tasa del 0%). Consulta el valor vigente de este indicador tributario en la sección de',
        linkText: 'Valor UTM y UTA',
        linkHref: '/cl/valor-utm/',
      },
      {
        q: '¿Cuál es el valor del ingreso mínimo mensual (sueldo mínimo) vigente en Chile?',
        a: 'El ingreso mínimo mensual en Chile para trabajadores mayores de 18 y de hasta 65 años de edad se encuentra fijado en $500.000 CLP conforme a la Ley N° 21.578. Ningún contrato de jornada completa ordinaria (44 horas semanales hacia las 40 horas progresivas) puede estipular un sueldo base inferior a esta cifra legal. Conoce el marco y las asignaciones familiares en la página de',
        linkText: 'Sueldo Mínimo en Chile',
        linkHref: '/cl/sueldo-minimo/',
      },
    ],
  },
  {
    id: 'uf-ipc',
    icon: '📈',
    title: 'Valor UF, IPC y Variación Diaria',
    description: 'Qué es la UF, reajuste geométrico diario por IPC, publicación del Banco Central y conversión a CLP.',
    items: [
      {
        q: '¿Qué es la Unidad de Fomento (UF) y para qué se utiliza principalmente en Chile?',
        a: 'La Unidad de Fomento (UF) es una unidad de cuenta monetaria no circulante, creada en Chile para mantener el poder adquisitivo del dinero frente a la inflación medida por el IPC. Se utiliza de forma masiva en créditos hipotecarios, contratos de arriendo de inmuebles, valores de viviendas, planes de salud en Isapres y seguros de vida. Revisa el valor actualizado de hoy en el portal de',
        linkText: 'Valor UF Hoy',
        linkHref: '/cl/valor-uf-hoy/',
      },
      {
        q: '¿Cómo se determina la variación diaria del valor de la Unidad de Fomento?',
        a: 'El Banco Central de Chile calcula la UF ajustándola diariamente entre el día 10 del mes en curso y el día 9 del mes siguiente de acuerdo a la variación geométrica del IPC del mes inmediatamente anterior informado por el INE. Si el IPC mensual fue positivo, la UF experimenta un incremento fraccionado diario a lo largo de todo ese período. Aprende la fórmula matemática completa en nuestra',
        linkText: 'Guía de la UF y su Cálculo',
        linkHref: '/cl/guias/que-es-la-uf-y-como-se-calcula/',
      },
      {
        q: '¿Qué institución es responsable de calcular y publicar oficialmente el valor de la UF?',
        a: 'La atribución exclusiva y la potestad legal para fijar y difundir el valor diario de la UF reside en el Banco Central de Chile, en conformidad con su Ley Orgánica Constitucional y el D.S. N° 40 de Hacienda. El instituto emisor publica con anticipación la tabla completa de valores diarios para todo el ciclo mensual. Puedes consultar la serie actualizada en nuestra sección de',
        linkText: 'Valor UF Hoy',
        linkHref: '/cl/valor-uf-hoy/',
      },
      {
        q: '¿Por qué el valor de la UF puede experimentar caídas en determinados meses?',
        a: 'La UF disminuye su valor en pesos únicamente cuando el Instituto Nacional de Estadísticas registra una variación negativa en el Índice de Precios al Consumidor (IPC), fenómeno conocido como deflación mensual. En esos meses de IPC negativo, el factor diario es inferior a 1, reduciendo ligeramente el costo en pesos de las deudas y arriendos denominados en UF. Consulta los registros históricos en la herramienta de',
        linkText: 'Valor UF',
        linkHref: '/cl/valor-uf/2026/',
      },
      {
        q: '¿En qué tipos de contratos chilenos es legal y común pactar las obligaciones en UF?',
        a: 'En Chile es plenamente legítimo pactar obligaciones en UF en operaciones de mutuo hipotecario, arriendos de bienes raíces habitacionales o comerciales, primas de seguros y contratos de prestación de servicios a largo plazo. Al pactar en UF, ambas partes aseguran que los valores acordados conserven su valor real a lo largo del tiempo. Simula tu costo de arrendamiento en la',
        linkText: 'Calculadora de Arriendo en UF',
        linkHref: '/cl/calculadora-arriendo-uf/',
      },
      {
        q: '¿Cómo se convierte un monto expresado en UF a pesos chilenos (CLP) el día de hoy?',
        a: 'Para convertir cualquier cifra pactada en UF a pesos chilenos, basta con multiplicar la cantidad de unidades por el valor oficial de la UF certificado por el Banco Central para la fecha respectiva. Por ejemplo, si debes cancelar un canon de 15 UF, multiplicas 15 por el valor de la UF del día de pago. Utiliza nuestro convertidor instantáneo en la página de',
        linkText: 'Valor UF Hoy',
        linkHref: '/cl/valor-uf-hoy/',
      },
    ],
  },
  {
    id: 'utm',
    icon: '🏛️',
    title: 'UTM y Obligaciones Tributarias',
    description: 'Unidad Tributaria Mensual y Anual, multas de la Dirección del Trabajo y tramos impositivos del SII.',
    items: [
      {
        q: '¿Qué es la Unidad Tributaria Mensual (UTM) y en qué se diferencia de la UF?',
        a: 'La Unidad Tributaria Mensual (UTM) es una unidad económica empleada fundamentalmente para fines tributarios, judiciales y arancelarios del Estado chileno. A diferencia de la UF, cuyo valor cambia diariamente, la UTM conserva un valor idéntico durante todo el mes calendario y se ajusta mensualmente según la inflación pasada. Puedes revisar el valor del mes en nuestra sección de',
        linkText: 'Valor UTM',
        linkHref: '/cl/valor-utm/',
      },
      {
        q: '¿Qué es la Unidad Tributaria Anual (UTA) y cómo se calcula su valor?',
        a: 'La Unidad Tributaria Anual (UTA) es un indicador tributario complementario regulado en el Código Tributario chileno que equivale a 12 Unidades Tributarias Mensuales (UTM). Se utiliza para fijar tramos de impuestos anuales a la renta, multas graves y balances contables de empresas al cierre del ejercicio comercial. Conoce todas sus utilidades en nuestra',
        linkText: 'Guía sobre la UTM y UTA',
        linkHref: '/cl/guias/que-es-la-utm/',
      },
      {
        q: '¿Qué pagos y trámites oficiales en Chile se expresan obligatoriamente en UTM?',
        a: 'En Chile, se calculan en UTM las multas de tránsito cursadas por Juzgados de Policía Local, aranceles de conservación de bienes raíces, derechos municipales, sanciones de la Dirección del Trabajo y tramos del Impuesto Único de Segunda Categoría. El uso de la UTM garantiza que las sanciones no pierdan su peso pecuniario con el paso del tiempo. Consulta los tramos en el portal de',
        linkText: 'Valor UTM',
        linkHref: '/cl/valor-utm/',
      },
      {
        q: '¿Con qué periodicidad y bajo qué fórmula se reajusta el valor de la UTM?',
        a: 'El Servicio de Impuestos Internos (SII) reajusta el valor de la UTM el primer día de cada mes conforme a la variación acumulada del IPC en el penúltimo mes anterior. Por ejemplo, el valor de la UTM de marzo se actualiza aplicando al valor de febrero la tasa de inflación registrada en el mes de enero. Revisa el historial de variaciones mensuales en la sección de',
        linkText: 'Valor UTM',
        linkHref: '/cl/valor-utm/',
      },
      {
        q: '¿Dónde se puede consultar la tabla histórica de la UTM y sus equivalencias en pesos?',
        a: 'La tabla histórica de la UTM se encuentra disponible de forma permanente en los registros públicos del SII y en el repositorio unificado de Calcula Chile. Nuestra base histórica te permite chequear los valores de la UTM y UTA mes a mes para fines contables y de auditoría laboral. Explora la serie completa en nuestro visor de',
        linkText: 'Valor UTM',
        linkHref: '/cl/valor-utm/',
      },
    ],
  },
  {
    id: 'arriendo-hipotecario',
    icon: '🏠',
    title: 'Arriendos en UF y Crédito Hipotecario',
    description: 'Legalidad de pactar en UF, cálculo de dividendo francés, seguros obligatorios y reajuste en pesos.',
    items: [
      {
        q: '¿Es legal que el dueño de una propiedad cobre el arriendo pactado en UF en Chile?',
        a: 'Sí, en la República de Chile es plenamente legal y habitual pactar el canon de arrendamiento en Unidades de Fomento al amparo de la Ley N° 18.101 de Arrendamiento de Predios Urbanos y del principio de autonomía de la voluntad del Código Civil. El contrato debe estipular con claridad si se toma el valor de la UF del primer día del mes o de la fecha límite de pago. Simula la cuota en pesos con nuestra',
        linkText: 'Calculadora de Arriendo en UF',
        linkHref: '/cl/calculadora-arriendo-uf/',
      },
      {
        q: '¿Cómo se calcula el pago mensual de un contrato de arriendo pactado en UF?',
        a: 'Para obtener el monto exacto a transferir al arrendador, se multiplica el canon acordado en el contrato por el valor oficial de la UF que rige el día estipulado para el pago. Como la UF sube periódicamente al ritmo de la inflación, el canon en pesos chilenos se irá reajustando automáticamente mes a mes sin necesidad de renegociar el contrato. Realiza la conversión precisa en la',
        linkText: 'Calculadora de Arriendo en UF',
        linkHref: '/cl/calculadora-arriendo-uf/',
      },
      {
        q: '¿Cómo funciona el sistema de amortización de un crédito hipotecario en Chile?',
        a: 'La gran mayoría de los créditos hipotecarios bancarios en Chile operan bajo el sistema de amortización francés en UF, caracterizado por dividendos mensuales fijos a lo largo de todo el plazo convenido. En las primeras cuotas la mayor parte del dividendo se destina al pago de intereses devengados, mientras que hacia el final del préstamo predomina la amortización de capital. Modela tu financiamiento en nuestro',
        linkText: 'Simulador de Crédito Hipotecario',
        linkHref: '/cl/simulador-credito-hipotecario/',
      },
      {
        q: '¿Qué seguros obligatorios se incorporan en el dividendo hipotecario mensual?',
        a: 'En conformidad con la Ley General de Bancos de Chile, todo crédito con garantía hipotecaria debe contar obligatoriamente con un seguro de desgravamen y un seguro de incendio y sismo que proteja la estructura del inmueble. El costo de ambas pólizas se suma mensualmente al dividendo base en UF calculado por la entidad financiera. Proyecta tu cuota con seguros en el',
        linkText: 'Simulador de Crédito Hipotecario',
        linkHref: '/cl/simulador-credito-hipotecario/',
      },
    ],
  },
  {
    id: 'whatsapp',
    icon: '💬',
    title: 'Generador de Enlaces de WhatsApp',
    description: 'Creación de links directos con código de Chile (+56), privacidad y cómo compartir en redes.',
    items: [
      {
        q: '¿Cómo crear un enlace directo de WhatsApp para números telefónicos de Chile (+56)?',
        a: 'Para generar un enlace funcional con el protocolo oficial de WhatsApp para Chile, debes utilizar el código internacional del país (+56) seguido del 9 y de los 8 dígitos del número móvil, sin espacios ni guiones. Adicionalmente, puedes añadir un mensaje de bienvenida predeterminado codificado con la sintaxis URL. Crea tu enlace en segundos con nuestro',
        linkText: 'Generador de Enlaces de WhatsApp',
        linkHref: '/cl/generador-de-link-whatsapp/',
      },
      {
        q: '¿El generador de enlaces de WhatsApp almacena mi número de teléfono o mensajes?',
        a: 'No, el generador opera bajo un estricto principio de confidencialidad y procesamiento exclusivo en tu propio navegador web. Ningún número telefónico, texto de saludo o enlace generado se transmite ni se registra en bases de datos o servidores de Calcula. Puedes comprobarlo y generar tus enlaces de forma 100% segura en nuestro',
        linkText: 'Generador de Enlaces de WhatsApp',
        linkHref: '/cl/generador-de-link-whatsapp/',
      },
      {
        q: '¿Cómo puedo compartir un enlace de WhatsApp personalizado en mis redes sociales o sitio web?',
        a: 'Una vez que la herramienta genera tu enlace seguro con formato wa.me, puedes copiarlo directamente y pegarlo en tu biografía de Instagram, catálogo de productos, botón de soporte web o perfiles comerciales. Cuando un cliente haga clic sobre el enlace, se abrirá la aplicación de WhatsApp con el chat y tu mensaje redactado listo para ser enviado. Diseña tu enlace directo en el',
        linkText: 'Generador de Enlaces de WhatsApp',
        linkHref: '/cl/generador-de-link-whatsapp/',
      },
    ],
  },
];

export default function PreguntasFrecuentesPage() {
  const breadcrumbItems = [
    { label: 'Calcula', href: '/' },
    { label: 'Chile', href: '/cl/' },
    { label: 'Preguntas Frecuentes' },
  ];

  // Flatten all FAQs for Schema.org JSON-LD FAQPage
  const allFaqsForJsonLd = FAQ_CATEGORIES.flatMap((cat) =>
    cat.items.map((item) => ({
      q: item.q,
      a: `${item.a} ${item.linkText} (https://calcula.zetawala.com${item.linkHref}).`,
    }))
  );

  return (
    <>
      <JsonLd
        country="cl"
        slug="cl/preguntas-frecuentes"
        type="info"
        title="Preguntas Frecuentes sobre Finiquito, Sueldo y UF en Chile 2026"
        description="Centro de respuestas legales y financieras: 30 dudas resueltas sobre finiquito laboral, sueldo líquido, valor UF, UTM, arriendos y créditos hipotecarios."
        faqs={allFaqsForJsonLd}
        breadcrumbs={[
          { name: 'Calcula', path: '/' },
          { name: 'Chile', path: '/cl/' },
          { name: 'Preguntas Frecuentes', path: '/cl/preguntas-frecuentes/' },
        ]}
      />
      <Header country="cl" />

      <main className="flex-1 max-w-4xl mx-auto px-4 py-8 sm:py-10 w-full space-y-10">
        <Breadcrumbs items={breadcrumbItems} />

        {/* Hero Section */}
        <header className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-900 bg-blue-50 rounded-full border border-blue-200">
            <span>❓</span>
            <span>Centro de Respuestas • Leyes y Cifras 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Preguntas Frecuentes de Finanzas y Trabajo en Chile
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Hemos reunido y respondido las 30 dudas más habituales sobre cálculo de finiquitos, sueldos imponibles, comisiones de AFPs, valor diario de la UF, UTM tributaria y arriendos inmobiliarios en Chile.
          </p>
        </header>

        {/* Category Navigation Pills */}
        <nav aria-label="Temas de Preguntas Frecuentes" className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
            Navegar por tema:
          </span>
          <div className="flex flex-wrap gap-2">
            {FAQ_CATEGORIES.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-blue-50 hover:text-blue-900 transition-colors"
              >
                <span>{cat.icon}</span>
                <span>{cat.title}</span>
              </a>
            ))}
          </div>
        </nav>

        {/* FAQ Categories & Items */}
        <div className="space-y-12">
          {FAQ_CATEGORIES.map((category) => (
            <section key={category.id} id={category.id} className="scroll-mt-20 space-y-4">
              <div className="border-b border-slate-200 pb-3">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
                  <span>{category.icon}</span> {category.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  {category.description}
                </p>
              </div>

              <div className="space-y-4">
                {category.items.map((faq, index) => (
                  <article
                    key={index}
                    className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 shadow-sm space-y-2 hover:border-slate-300 transition-colors"
                  >
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      {faq.q}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                      {faq.a}{' '}
                      <Link
                        href={faq.linkHref}
                        className="font-semibold text-blue-700 hover:text-blue-900 underline underline-offset-2 inline-flex items-center gap-0.5"
                      >
                        {faq.linkText} →
                      </Link>
                    </p>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Bottom CTA Box */}
        <section className="bg-gradient-to-br from-blue-900 to-indigo-950 text-white rounded-2xl p-6 sm:p-8 text-center space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold">
            ¿No encontraste respuesta a tu caso particular?
          </h2>
          <p className="text-slate-200 text-sm max-w-xl mx-auto leading-relaxed">
            Nuestro equipo revisa continuamente las consultas ciudadanas para incorporar nuevos escenarios normativos. Escríbenos directamente o consulta nuestra metodología detallada.
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <Link
              href="/cl/contacto/"
              className="px-5 py-2.5 rounded-xl bg-white text-blue-900 font-bold text-sm hover:bg-slate-100 transition-colors shadow-sm"
            >
              Contactar Soporte
            </Link>
            <Link
              href="/cl/metodologia/"
              className="px-5 py-2.5 rounded-xl bg-blue-800 text-white font-bold text-sm hover:bg-blue-700 transition-colors"
            >
              Ver Metodología
            </Link>
          </div>
        </section>
      </main>

      <Footer country="cl" />
    </>
  );
}
