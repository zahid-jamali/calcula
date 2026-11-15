import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { buildMetadata } from '@/lib/seo';
import { FaqItem } from '@/content/types';

export function generateMetadata(): Metadata {
  return buildMetadata({
    country: 'mx',
    slug: 'mx/preguntas-frecuentes',
    title: 'Preguntas Frecuentes de la Ley Federal del Trabajo 2026 - FAQ Hub | Calcula México',
    description:
      'Respuestas claras y fundamentadas a las 30 dudas más comunes sobre finiquito, liquidación, aguinaldo, vacaciones dignas, ISR, IMSS y PTU en México.',
  });
}

interface FaqSection {
  title: string;
  icon: string;
  items: {
    question: string;
    answer: React.ReactNode;
    plainAnswer: string;
  }[];
}

export default function PreguntasFrecuentesMxPage() {
  const faqSections: FaqSection[] = [
    {
      title: 'Finiquito y Liquidación Laboral',
      icon: '💼',
      items: [
        {
          question: '¿Cuál es la diferencia principal entre finiquito y liquidación en México?',
          answer: (
            <>
              El finiquito corresponde a las prestaciones devengadas y pendientes de pago (días trabajados, aguinaldo y vacaciones proporcionales) cuando la relación laboral termina por renuncia voluntaria o causa justificada. Por su parte, la liquidación es una indemnización legal que procede cuando el despido es injustificado e incluye adicionalmente 90 días de salario integrado y prima de antigüedad. Puedes calcular ambos supuestos en nuestra{' '}
              <Link href="/mx/calculadora-finiquito/" className="text-brand-900 font-semibold underline hover:text-brand-700">
                Calculadora de Finiquito y Liquidación
              </Link>.
            </>
          ),
          plainAnswer:
            'El finiquito corresponde a las prestaciones devengadas pendientes (días trabajados, aguinaldo y vacaciones proporcionales) cuando la relación laboral termina por renuncia voluntaria o causa justificada. Por su parte, la liquidación es una indemnización legal por despido injustificado que incluye adicionalmente 90 días de salario integrado y prima de antigüedad. Puedes simularlo en la Calculadora de Finiquito y Liquidación de Calcula México.',
        },
        {
          question: '¿Qué conceptos integran el finiquito si renuncio voluntariamente?',
          answer: (
            <>
              Al presentar una renuncia voluntaria tienes derecho al pago de los salarios devengados no cobrados, la parte proporcional de tu aguinaldo anual, tus vacaciones acumuladas no disfrutadas y su prima vacacional correspondiente del 25%. Además, si cumpliste 15 o más años de antigüedad continua en la empresa, te corresponde por ley la prima de antigüedad de 12 días por año. Conoce cuánto te corresponde en la{' '}
              <Link href="/mx/calculadora-finiquito/renuncia-voluntaria/" className="text-brand-900 font-semibold underline hover:text-brand-700">
                Calculadora de Renuncia Voluntaria
              </Link>.
            </>
          ),
          plainAnswer:
            'Al presentar una renuncia voluntaria tienes derecho al pago de salarios pendientes, aguinaldo proporcional, vacaciones devengadas no disfrutadas y su prima vacacional del 25%. Si cumpliste 15 o más años de antigüedad continua, recibes además prima de antigüedad. Conoce tu monto en la Calculadora de Renuncia Voluntaria.',
        },
        {
          question: '¿Cuántos días de indemnización corresponden por despido injustificado?',
          answer: (
            <>
              Conforme a los Artículos 48 y 50 de la Ley Federal del Trabajo, el patrón debe pagar 90 días (tres meses) de Salario Diario Integrado por concepto de indemnización constitucional. Adicionalmente, ante una negativa patronal de reinstalación decretada por un tribunal laboral, corresponden 20 días de salario integrado por cada año de servicios prestados. Simula tu indemnización completa en la{' '}
              <Link href="/mx/calculadora-liquidacion/" className="text-brand-900 font-semibold underline hover:text-brand-700">
                Calculadora de Liquidación por Despido
              </Link>.
            </>
          ),
          plainAnswer:
            'Conforme a los Artículos 48 y 50 de la LFT, el patrón debe cubrir 90 días de Salario Diario Integrado como indemnización constitucional. Ante negativa patronal de reinstalación decretada judicialmente, corresponden además 20 días por cada año laborado. Simula tu compensación en la Calculadora de Liquidación por Despido.',
        },
        {
          question: '¿Cómo se calcula la prima de antigüedad en la liquidación?',
          answer: (
            <>
              La prima de antigüedad (Art. 162 LFT) equivale a 12 días de salario por cada año completo de servicios prestados o su parte proporcional. Su cálculo tiene un tope legal estipulado en el Artículo 486 de la LFT, equivalente al doble del salario mínimo general vigente en la zona geográfica. Revisa los detalles en la{' '}
              <Link href="/mx/guias/que-es-la-prima-de-antiguedad/" className="text-brand-900 font-semibold underline hover:text-brand-700">
                Guía de Prima de Antigüedad
              </Link>.
            </>
          ),
          plainAnswer:
            'La prima de antigüedad (Art. 162 LFT) equivale a 12 días de salario por cada año de servicio o fracción proporcional. Su cálculo está topado a dos veces el salario mínimo general vigente conforme al Artículo 486 de la LFT. Revisa los detalles en la Guía de Prima de Antigüedad.',
        },
        {
          question: '¿Qué salario se utiliza para calcular los 90 días de liquidación?',
          answer: (
            <>
              La indemnización de 90 días y los 20 días por año se calculan utilizando el Salario Diario Integrado (SDI) y no el salario base cuota diaria. El SDI incluye el salario ordinario más la proporción diaria de aguinaldo, prima vacacional y cualquier otra prestación fija o variable que perciba el trabajador. Calcula tu factor de integración en la{' '}
              <Link href="/mx/calculadora-salario-diario-integrado/" className="text-brand-900 font-semibold underline hover:text-brand-700">
                Calculadora de Salario Diario Integrado (SDI)
              </Link>.
            </>
          ),
          plainAnswer:
            'La indemnización constitucional de 90 días se calcula con el Salario Diario Integrado (SDI) y no con el salario base nominal. El SDI contempla la cuota diaria más las proporciones de aguinaldo, prima vacacional y prestaciones fijas. Obtén tu factor en la Calculadora de Salario Diario Integrado.',
        },
        {
          question: '¿Qué plazo tiene el patrón para pagar el finiquito o la liquidación?',
          answer: (
            <>
              La Ley Federal del Trabajo establece que el pago del finiquito o liquidación debe efectuarse inmediatamente al momento de la terminación del vínculo laboral o en la fecha concertada ante el Centro de Conciliación. Si el patrón incurre en mora o se niega a pagar, el trabajador cuenta con un plazo de prescripción de dos meses para entablar su demanda. Conoce los pasos a seguir en la{' '}
              <Link href="/mx/guias/despido-injustificado-que-hacer/" className="text-brand-900 font-semibold underline hover:text-brand-700">
                Guía de Despido Injustificado
              </Link>.
            </>
          ),
          plainAnswer:
            'El finiquito o liquidación debe cubrirse al momento de concluir la relación o en la cita pactada ante el Centro de Conciliación. En caso de negativa patronal, el trabajador dispone de dos meses para ejercer su acción legal. Conoce los pasos en la Guía de Despido Injustificado.',
        },
      ],
    },
    {
      title: 'Aguinaldo según la LFT',
      icon: '🎁',
      items: [
        {
          question: '¿Cuántos días de aguinaldo me corresponden por ley como mínimo?',
          answer: (
            <>
              El Artículo 87 de la Ley Federal del Trabajo establece que los trabajadores tienen derecho a un aguinaldo anual equivalente a por lo menos 15 días de salario. Los contratos colectivos o contratos individuales pueden fijar legalmente un número mayor de días como prestación superior a la ley. Calcula el valor de tu prestación en la{' '}
              <Link href="/mx/calculadora-aguinaldo/" className="text-brand-900 font-semibold underline hover:text-brand-700">
                Calculadora de Aguinaldo
              </Link>.
            </>
          ),
          plainAnswer:
            'El Artículo 87 de la LFT fija un mínimo de 15 días de salario por concepto de aguinaldo anual para trabajadores del sector privado. Contratos colectivos pueden pactar montos superiores como beneficio extralegal. Calcula tu prestación en la Calculadora de Aguinaldo.',
        },
        {
          question: '¿Hasta qué fecha límite debe pagarse el aguinaldo en México?',
          answer: (
            <>
              La fecha límite legal ineludible para el pago del aguinaldo es el 20 de diciembre de cada año calendario. Si el patrón no entrega el aguinaldo antes de que expire dicha fecha, se expone a sanciones y multas económicas impuestas por la Secretaría del Trabajo y Previsión Social (STPS). Consulta el calendario y sanciones en la{' '}
              <Link href="/mx/guias/cuando-se-paga-el-aguinaldo/" className="text-brand-900 font-semibold underline hover:text-brand-700">
                Guía de Fechas del Aguinaldo
              </Link>.
            </>
          ),
          plainAnswer:
            'La fecha límite legal para pagar el aguinaldo en México es el 20 de diciembre de cada año. El incumplimiento patronal acarrea multas por parte de la STPS e inspecciones laborales. Consulta el calendario en la Guía de Fechas del Aguinaldo.',
        },
        {
          question: '¿Cómo se calcula el aguinaldo si no trabajé todo el año completo?',
          answer: (
            <>
              Si no laboraste los 365 días del año, tienes derecho a percibir la parte proporcional exacta al tiempo efectivamente trabajado. La fórmula consiste en dividir los 15 días de aguinaldo entre 365 días del año y multiplicar el factor resultante por los días laborados y por tu salario diario. Obtén tu cálculo proporcional directo en la{' '}
              <Link href="/mx/calculadora-aguinaldo/" className="text-brand-900 font-semibold underline hover:text-brand-700">
                Calculadora de Aguinaldo Proporcional
              </Link>.
            </>
          ),
          plainAnswer:
            'Quienes no laboraron el año completo reciben una fracción proporcional al tiempo trabajado. La fórmula divide los días de aguinaldo entre 365 y multiplica por los días laborados y el salario diario. Obtén tu monto en la Calculadora de Aguinaldo.',
        },
        {
          question: '¿El aguinaldo paga impuestos de ISR ante el SAT?',
          answer: (
            <>
              El aguinaldo está parcialmente exento del Impuesto sobre la Renta (ISR) hasta por una cantidad equivalente a 30 Unidades de Medida y Actualización (UMA). Únicamente el monto que exceda de ese límite de 30 UMAs formará parte de la base gravable mensual y estará sujeto a retención fiscal del SAT. Verifica el valor de la UMA aplicable en nuestra{' '}
              <Link href="/mx/uma/" className="text-brand-900 font-semibold underline hover:text-brand-700">
                Tabla de la UMA 2026
              </Link>.
            </>
          ),
          plainAnswer:
            'El aguinaldo goza de una exención de ISR hasta por 30 Unidades de Medida y Actualización (UMA) conforme a la LISR. Solo la cantidad que exceda este umbral genera retención de impuestos. Revisa el valor en la Tabla de la UMA 2026.',
        },
        {
          question: '¿Los trabajadores por honorarios o asimilados tienen derecho a aguinaldo?',
          answer: (
            <>
              Los prestadores de servicios por honorarios independientes no tienen derecho a aguinaldo, salvo que exista una relación laboral subordinada encubierta con horario fijo, instrucciones directas y lugar de trabajo asignado. En ese caso se presume legalmente una relación de trabajo protegida por la LFT. Revisa los criterios de subordinación en la{' '}
              <Link href="/mx/calculadora-aguinaldo/" className="text-brand-900 font-semibold underline hover:text-brand-700">
                Calculadora de Aguinaldo
              </Link>.
            </>
          ),
          plainAnswer:
            'Los prestadores independientes por honorarios no reciben aguinaldo a menos que exista una relación laboral subordinada encubierta con horario y dependencia directa. En tales casos la ley presume relación de trabajo. Consulta los criterios en la Calculadora de Aguinaldo.',
        },
      ],
    },
    {
      title: 'Vacaciones Dignas y Prima Vacacional',
      icon: '🏖️',
      items: [
        {
          question: '¿Cuántos días de vacaciones me corresponden en mi primer año de trabajo?',
          answer: (
            <>
              Gracias a la reforma laboral de &quot;Vacaciones Dignas&quot; a los Artículos 76 y 78 de la LFT, al cumplir tu primer año completo de servicios te corresponden 12 días laborables continuos de descanso pagado. Con la ley anterior correspondían únicamente 6 días. Consulta la escala por antigüedad en la{' '}
              <Link href="/mx/tabla-de-vacaciones/" className="text-brand-900 font-semibold underline hover:text-brand-700">
                Tabla Oficial de Vacaciones Dignas
              </Link>.
            </>
          ),
          plainAnswer:
            'Tras la reforma de Vacaciones Dignas a la LFT, los trabajadores tienen derecho a 12 días hábiles continuos de descanso pagado al cumplir el primer año de servicios. Consulta los días por año en la Tabla Oficial de Vacaciones Dignas.',
        },
        {
          question: '¿Cómo funciona la escala progresiva de la reforma de Vacaciones Dignas?',
          answer: (
            <>
              El periodo vacacional aumenta en 2 días laborables por cada año subsecuente hasta llegar a 20 días al quinto año (14 días en el año 2, 16 en el año 3, 18 en el año 4 y 20 en el año 5). A partir del sexto año, el periodo se incrementa en 2 días por cada bloque de 5 años de servicio. Lee la explicación detallada en la{' '}
              <Link href="/mx/guias/vacaciones-dignas-como-funcionan/" className="text-brand-900 font-semibold underline hover:text-brand-700">
                Guía de Vacaciones Dignas
              </Link>.
            </>
          ),
          plainAnswer:
            'El periodo vacacional aumenta 2 días hábiles cada año hasta alcanzar 20 días en el año 5. Del sexto año en adelante, aumenta 2 días por cada bloque de 5 años de servicio. Consulta la progresión en la Guía de Vacaciones Dignas.',
        },
        {
          question: '¿Qué porcentaje mínimo legal corresponde a la prima vacacional?',
          answer: (
            <>
              El Artículo 80 de la Ley Federal del Trabajo fija una prima vacacional mínima no menor al 25% sobre los salarios que le correspondan al trabajador durante su periodo vacacional. Si un colaborador tiene 12 días de vacaciones, recibirá el salario completo de esos 12 días más un 25% adicional en dinero. Calcula tu prima en la{' '}
              <Link href="/mx/calculadora-vacaciones/" className="text-brand-900 font-semibold underline hover:text-brand-700">
                Calculadora de Vacaciones y Prima
              </Link>.
            </>
          ),
          plainAnswer:
            'El Artículo 80 de la LFT dispone una prima vacacional obligatoria no menor al 25% sobre el sueldo devengado durante el periodo de vacaciones. El empleador puede pactar porcentajes mayores. Simula tu importe en la Calculadora de Vacaciones y Prima.',
        },
        {
          question: '¿Las vacaciones no disfrutadas se pueden pagar en dinero sin que termine el contrato?',
          answer: (
            <>
              El Artículo 79 de la Ley Federal del Trabajo prohíbe terminantemente compensar las vacaciones con una remuneración económica mientras la relación de trabajo esté vigente. El descanso es un derecho humano irrenunciable para salvaguardar la salud física y mental del trabajador. Las vacaciones solo se pagan en dinero si concluye el contrato y quedaron días pendientes, tal como muestra la{' '}
              <Link href="/mx/calculadora-vacaciones/" className="text-brand-900 font-semibold underline hover:text-brand-700">
                Calculadora de Vacaciones
              </Link>.
            </>
          ),
          plainAnswer:
            'El Artículo 79 de la LFT prohíbe compensar las vacaciones con dinero mientras la relación laboral se encuentre activa. Solo se compensan económicamente cuando el contrato se extingue y quedan días pendientes de goce. Simúlalas en la Calculadora de Vacaciones.',
        },
        {
          question: '¿Qué parte de la prima vacacional está exenta del pago de ISR?',
          answer: (
            <>
              Conforme al Artículo 93 fracción XIV de la Ley del Impuesto sobre la Renta, la prima vacacional goza de una exención fiscal de hasta 15 Unidades de Medida y Actualización (UMA). La porción del pago que sobrepase este límite de 15 UMAs se sumará a los demás ingresos gravables del mes para el cálculo del ISR. Consulta los valores en la{' '}
              <Link href="/mx/uma/" className="text-brand-900 font-semibold underline hover:text-brand-700">
                Página de Valores UMA 2026
              </Link>.
            </>
          ),
          plainAnswer:
            'La prima vacacional está exenta de ISR hasta por 15 Unidades de Medida y Actualización (UMA) conforme al Art. 93 fracc. XIV de la LISR. La parte que supere este límite causa impuesto sobre la renta. Revisa el valor en la Página de Valores UMA 2026.',
        },
      ],
    },
    {
      title: 'Impuestos ISR y UMA 2026',
      icon: '📊',
      items: [
        {
          question: '¿Qué es la UMA y por qué se utiliza en lugar del salario mínimo?',
          answer: (
            <>
              La Unidad de Medida y Actualización (UMA) es la referencia económica en pesos establecida por el INEGI para determinar el pago de obligaciones, multas, créditos y exenciones fiscales. Se creó mediante reforma constitucional para desindexar el salario mínimo, permitiendo que este aumente anualmente sin generar un efecto inflacionario en créditos o sanciones. Conoce su historia en la sección de{' '}
              <Link href="/mx/uma/" className="text-brand-900 font-semibold underline hover:text-brand-700">
                Valores Históricos de la UMA
              </Link>.
            </>
          ),
          plainAnswer:
            'La UMA es la unidad económica certificada por el INEGI para calcular multas, topes y exenciones tributarias. Se creó para desvincular el salario mínimo y permitir que este se incremente sin encarecer obligaciones legales. Revisa su historial en Valores Históricos de la UMA.',
        },
        {
          question: '¿Cómo afecta el valor de la UMA 2026 a mis prestaciones laborales?',
          answer: (
            <>
              La UMA vigente en 2026 determina las cantidades exactas de dinero exentas de ISR en prestaciones clave como el aguinaldo (30 UMAs), la prima vacacional (15 UMAs) y el PTU (15 UMAs). Además, fija el tope máximo de cotización ante el Instituto Mexicano del Seguro Social, fijado en 25 veces el valor de la UMA diaria. Revisa todas las equivalencias en nuestra{' '}
              <Link href="/mx/uma/" className="text-brand-900 font-semibold underline hover:text-brand-700">
                Guía de la UMA 2026
              </Link>.
            </>
          ),
          plainAnswer:
            'La UMA 2026 define las sumas exentas de ISR en aguinaldo (30 UMAs), prima vacacional (15 UMAs) y utilidades (15 UMAs), además del tope de 25 UMAs del salario base de cotización en el IMSS. Conoce las equivalencias en la Guía de la UMA 2026.',
        },
        {
          question: '¿Dónde se consulta la tabla oficial de retención de ISR para sueldos?',
          answer: (
            <>
              La tabla oficial de retención periódica de ISR sobre salarios se encuentra en el Artículo 96 de la Ley del Impuesto sobre la Renta y en el Anexo 8 de la Resolución Miscelánea Fiscal emitida por el SAT. En ella se establecen los límites inferiores, límites superiores, cuotas fijas y porcentajes aplicables sobre excedentes. Consulta los tramos vigentes en la{' '}
              <Link href="/mx/tabla-isr/" className="text-brand-900 font-semibold underline hover:text-brand-700">
                Tabla de Retención de ISR 2026
              </Link>.
            </>
          ),
          plainAnswer:
            'La tarifa de retención de ISR para salarios se publica en el Artículo 96 de la LISR y el Anexo 8 de la Resolución Miscelánea Fiscal del SAT. En ella se detallan límites inferiores, cuotas fijas y tasas marginales. Consúltala en la Tabla de Retención de ISR 2026.',
        },
        {
          question: '¿Qué es el subsidio para el empleo y a quiénes beneficia en 2026?',
          answer: (
            <>
              El subsidio para el empleo es un beneficio fiscal federal dirigido a los colaboradores que perciben menores ingresos salariales mensuales, diseñado para reducir su carga tributaria e incluso otorgarles un saldo a favor en su nómina. El esquema vigente se ajusta para alinearse con los incrementos al salario mínimo general. Simula tu subsidio neto en la{' '}
              <Link href="/mx/calculadora-sueldo-neto/" className="text-brand-900 font-semibold underline hover:text-brand-700">
                Calculadora de Sueldo Neto
              </Link>.
            </>
          ),
          plainAnswer:
            'El subsidio para el empleo es un alivio tributario otorgado a trabajadores con menores ingresos para reducir la retención de ISR y proteger su remuneración disponible. Simula tu impacto personal en la Calculadora de Sueldo Neto.',
        },
        {
          question: '¿Las indemnizaciones por despido pagan Impuesto sobre la Renta?',
          answer: (
            <>
              Las indemnizaciones por despido injustificado (los 90 días constitucionales, los 20 días por año y la prima de antigüedad) gozan de una amplia exención fiscal conforme al Artículo 93 fracción XIII de la LISR. La exención cubre hasta 90 veces el valor diario de la UMA por cada año completo de servicios prestados a la empresa. Realiza tu cálculo fiscal en la{' '}
              <Link href="/mx/calculadora-liquidacion/" className="text-brand-900 font-semibold underline hover:text-brand-700">
                Calculadora de Liquidación
              </Link>.
            </>
          ),
          plainAnswer:
            'Las indemnizaciones por despido cuentan con una exención de ISR equivalente a 90 veces la UMA por cada año de servicios prestados, conforme al Artículo 93 fracción XIII de la LISR. Calcula la parte gravada en la Calculadora de Liquidación.',
        },
      ],
    },
    {
      title: 'Salario Neto y Cuotas IMSS',
      icon: '🏥',
      items: [
        {
          question: '¿Cómo calcular mi sueldo neto a partir del sueldo bruto mensual?',
          answer: (
            <>
              Para obtener tu salario neto a partir del salario bruto pactado en tu contrato, debes restar la retención de ISR calculada con la tarifa mensual del SAT y deducir las cuotas de seguridad social a cargo del trabajador para el IMSS (enfermedad, maternidad, invalidez y vejez). Realiza el cálculo automático al instante en la{' '}
              <Link href="/mx/calculadora-sueldo-neto/" className="text-brand-900 font-semibold underline hover:text-brand-700">
                Calculadora de Sueldo Neto México
              </Link>.
            </>
          ),
          plainAnswer:
            'Para calcular tu sueldo neto debes deducir del sueldo bruto la retención del ISR conforme a las tarifas del SAT y las aportaciones obreras del IMSS. Obtén tu desglose automático en la Calculadora de Sueldo Neto México.',
        },
        {
          question: '¿Qué porcentaje de aportación al IMSS se descuenta al trabajador?',
          answer: (
            <>
              Al trabajador se le descuenta en promedio entre el 2.375% y el 2.75% de su Salario Base de Cotización (SBC), distribuido en los ramos de Enfermedades y Maternidad, Invalidez y Vida (0.625%), y Cesantía en Edad Avanzada y Vejez (1.125%). La mayor parte de la seguridad social en México es cubierta directamente por el patrón. Consulta las cuotas en la{' '}
              <Link href="/mx/calculadora-sueldo-neto/" className="text-brand-900 font-semibold underline hover:text-brand-700">
                Calculadora de Retenciones IMSS
              </Link>.
            </>
          ),
          plainAnswer:
            'Al colaborador se le descuenta aproximadamente entre 2.375% y 2.75% de su SBC por conceptos de Enfermedades, Invalidez y Cesantía/Vejez, siendo el empleador quien cubre la mayor porción contributiva. Simula tus cuotas en la Calculadora de Sueldo Neto.',
        },
        {
          question: '¿Cuál es el tope máximo de cotización ante el IMSS en 2026?',
          answer: (
            <>
              El Artículo 28 de la Ley del Seguro Social establece que el límite superior para el Salario Base de Cotización (SBC) de los trabajadores es el equivalente a 25 veces el valor diario de la UMA. Ninguna empresa puede retener cuotas de seguridad social sobre un monto diario superior a este límite legal. Conoce los topes en nuestra sección de{' '}
              <Link href="/mx/salario-minimo/" className="text-brand-900 font-semibold underline hover:text-brand-700">
                Salario Mínimo y Límites IMSS
              </Link>.
            </>
          ),
          plainAnswer:
            'El Artículo 28 de la Ley del Seguro Social fija el tope máximo de cotización en 25 veces la UMA diaria. Ninguna cotización al IMSS se cobra sobre un excedente a ese techo legal. Conoce los topes en Salario Mínimo y Límites IMSS.',
        },
        {
          question: '¿Cuál es la diferencia entre Salario Base de Cotización (SBC) y Salario Diario Integrado (SDI)?',
          answer: (
            <>
              Aunque en la práctica común se utilizan como sinónimos, el Salario Diario Integrado (SDI) es el concepto regulado por el Artículo 84 de la LFT para el pago de indemnizaciones laborales, mientras que el Salario Base de Cotización (SBC) está regulado por el Artículo 27 de la Ley del Seguro Social con reglas y topes específicos de 25 UMAs. Obtén tu factor en la{' '}
              <Link href="/mx/calculadora-salario-diario-integrado/" className="text-brand-900 font-semibold underline hover:text-brand-700">
                Calculadora de SDI / SBC
              </Link>.
            </>
          ),
          plainAnswer:
            'El Salario Diario Integrado (SDI) es la métrica de la LFT para liquidaciones e indemnizaciones, mientras que el Salario Base de Cotización (SBC) se rige por la Ley del Seguro Social con tope de 25 UMAs para calcular aportes. Calcúlalo en la Calculadora de SDI.',
        },
        {
          question: '¿Cuál es el salario mínimo legal vigente en México en 2026?',
          answer: (
            <>
              La Comisión Nacional de los Salarios Mínimos (CONASAMI) divide a México en dos áreas geográficas: la Zona Libre de la Frontera Norte (ZLFN), con un salario mínimo diferenciado superior, y la Zona General que rige para el resto del territorio nacional. Ningún trabajador de jornada completa puede percibir un ingreso diario inferior a estos montos. Consulta las cifras exactas en la{' '}
              <Link href="/mx/salario-minimo/" className="text-brand-900 font-semibold underline hover:text-brand-700">
                Tabla del Salario Mínimo 2026
              </Link>.
            </>
          ),
          plainAnswer:
            'La CONASAMI fija salarios mínimos distintos para la Zona Libre de la Frontera Norte y el resto del país. Ningún colaborador de jornada completa puede recibir un pago diario inferior a dicho piso legal. Consulta los valores en la Tabla del Salario Mínimo 2026.',
        },
      ],
    },
    {
      title: 'Reparto de Utilidades (PTU) y Herramientas WhatsApp',
      icon: '💬',
      items: [
        {
          question: '¿Qué es el PTU y qué empresas están obligadas a repartir utilidades?',
          answer: (
            <>
              La Participación de los Trabajadores en las Utilidades (PTU) es el derecho constitucional (Art. 123 apartado A y Arts. 117-127 LFT) por el cual los empleados reciben el 10% de las ganancias netas declaradas por su empresa. Están obligadas todas las personas morales y físicas con actividad empresarial que generen una utilidad fiscal superior a $300,000 pesos anuales. Simula tu estimación en la{' '}
              <Link href="/mx/calculadora-ptu/" className="text-brand-900 font-semibold underline hover:text-brand-700">
                Calculadora de Utilidades (PTU)
              </Link>.
            </>
          ),
          plainAnswer:
            'El PTU es el derecho constitucional de los trabajadores a recibir el 10% de las utilidades fiscales anuales reportadas por la empresa ante el SAT. Aplica para empresas con utilidades netas superiores a $300,000 pesos. Simula tu reparto en la Calculadora de Utilidades.',
        },
        {
          question: '¿Cuándo es la fecha límite para el pago del reparto de utilidades en México?',
          answer: (
            <>
              Las empresas constituidas como personas morales (sociedades mercantiles) tienen como fecha límite improrrogable el 30 de mayo para efectuar el pago del PTU a sus colaboradores. Para los patrones personas físicas con actividad empresarial o profesional, el plazo legal de pago concluye el 29 de junio. Revisa el procedimiento en la{' '}
              <Link href="/mx/calculadora-ptu/" className="text-brand-900 font-semibold underline hover:text-brand-700">
                Calculadora de PTU 2026
              </Link>.
            </>
          ),
          plainAnswer:
            'Las empresas (personas morales) deben pagar las utilidades a más tardar el 30 de mayo, mientras que los patrones personas físicas tienen hasta el 29 de junio. Revisa los plazos en la Calculadora de PTU 2026.',
        },
        {
          question: '¿Existe un límite máximo o tope legal para el reparto de utilidades?',
          answer: (
            <>
              Sí, la reforma al Artículo 127 fracción VIII de la LFT estableció un tope legal máximo: el monto del PTU pagado al trabajador no podrá exceder el equivalente a tres meses de su salario actual o el promedio de la participación recibida en los últimos tres años, aplicándose el monto que resulte más favorable para el trabajador. Conoce las reglas en la{' '}
              <Link href="/mx/calculadora-ptu/" className="text-brand-900 font-semibold underline hover:text-brand-700">
                Calculadora de Reparto de Utilidades
              </Link>.
            </>
          ),
          plainAnswer:
            'El Artículo 127 fracción VIII de la LFT fija como tope de PTU el mayor entre tres meses del salario del trabajador o el promedio de las utilidades recibidas en los últimos tres años. Simula tu tope en la Calculadora de PTU.',
        },
        {
          question: '¿Cómo funciona el generador de enlace de WhatsApp de Calcula México?',
          answer: (
            <>
              Nuestra herramienta gratuita te permite crear links directos con código de país mexicano (+52) y mensajes predefinidos para iniciar chats de WhatsApp sin necesidad de guardar el contacto en tu libreta telefónica. Además, genera códigos QR listos para descargar o imprimir en tu negocio o tarjetas de presentación. Crea tu enlace en el{' '}
              <Link href="/mx/generador-de-link-whatsapp/" className="text-brand-900 font-semibold underline hover:text-brand-700">
                Generador de Link de WhatsApp
              </Link>.
            </>
          ),
          plainAnswer:
            'Nuestra herramienta genera enlaces directos con código +52 y mensajes predefinidos para WhatsApp, sin necesidad de guardar contactos en la agenda, incluyendo códigos QR para descargar. Crea tu enlace en el Generador de Link de WhatsApp.',
        },
      ],
    },
  ];

  // Flatten all FAQs for Schema.org JSON-LD FAQPage
  const allJsonFaqs: FaqItem[] = faqSections.flatMap((sec) =>
    sec.items.map((it) => ({
      q: it.question,
      a: it.plainAnswer,
    }))
  );

  const breadcrumbs = [
    { name: 'Calcula', path: '/' },
    { name: 'México', path: '/mx/' },
    { name: 'Preguntas Frecuentes', path: '/mx/preguntas-frecuentes/' },
  ];

  return (
    <>
      <JsonLd
        country="mx"
        slug="mx/preguntas-frecuentes"
        type="website"
        title="Preguntas Frecuentes de la Ley Federal del Trabajo - FAQ Hub"
        description="Hub de preguntas y respuestas sobre la Ley Federal del Trabajo, finiquito, liquidación, vacaciones e impuestos en México."
        breadcrumbs={breadcrumbs}
        faqs={allJsonFaqs}
      />
      <Header country="mx" />
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: 'Calcula', href: '/' },
            { label: 'México', href: '/mx/' },
            { label: 'Preguntas Frecuentes' },
          ]}
        />

        <article className="mt-6 space-y-10">
          <header className="border-b border-slate-200 pb-6">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-brand-50 text-brand-900 border border-brand-200 mb-3">
              FAQ Hub · 30 Respuestas Prácticas LFT 2026
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Preguntas Frecuentes sobre Derechos Laborales en México
            </h1>
            <p className="mt-3 text-lg text-slate-600 leading-relaxed">
              Resolvemos de forma clara y directa las dudas más recurrentes sobre finiquitos, liquidaciones por despido, aguinaldos, vacaciones dignas, retenciones de ISR y cuotas de seguridad social del IMSS.
            </p>
          </header>

          {/* Quick Category Navigation Pill Bar */}
          <div className="flex flex-wrap gap-2 pb-2">
            {faqSections.map((sec, idx) => (
              <a
                key={idx}
                href={`#faq-cat-${idx}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-700 transition-colors"
              >
                <span>{sec.icon}</span>
                <span>{sec.title}</span>
              </a>
            ))}
          </div>

          {/* FAQ Sections */}
          <div className="space-y-12">
            {faqSections.map((section, sIdx) => {
              const sectionOffsets = [0, 6, 11, 16, 21, 26];
              return (
                <section
                  key={sIdx}
                  id={`faq-cat-${sIdx}`}
                  className="scroll-mt-20 space-y-4"
                >
                  <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
                    <span className="text-2xl">{section.icon}</span>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                      {section.title}
                    </h2>
                    <span className="ml-auto text-xs font-semibold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">
                      {section.items.length} preguntas
                    </span>
                  </div>

                  <div className="space-y-4">
                    {section.items.map((faq, fIdx) => (
                      <div
                        key={fIdx}
                        className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2.5 transition-all hover:border-slate-300"
                      >
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-start gap-2">
                          <span className="text-brand-900 flex-shrink-0 font-mono text-sm mt-0.5">
                            {`Q${sectionOffsets[sIdx] + fIdx + 1}.`}
                          </span>
                          <span>{faq.question}</span>
                        </h3>
                        <p className="text-sm text-slate-700 leading-relaxed pl-6">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>

          {/* Footer Callout */}
          <div className="bg-slate-100 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-3">
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              ¿No encontraste la respuesta a tu caso particular?
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Consulta nuestra fundamentación jurídica en la{' '}
              <Link href="/mx/metodologia/" className="text-brand-900 font-bold underline">
                Página de Metodología LFT
              </Link>{' '}
              o escríbenos a{' '}
              <a href="mailto:contacto@zetawala.com" className="text-brand-900 font-bold underline">
                contacto@zetawala.com
              </a>
              . Te responderemos en un plazo máximo de 48 horas.
            </p>
          </div>
        </article>
      </main>
      <Footer country="mx" />
    </>
  );
}
