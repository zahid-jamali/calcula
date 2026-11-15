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
    country: 'co',
    slug: 'co/preguntas-frecuentes',
    title: 'Preguntas Frecuentes sobre Liquidación y CST 2026 - FAQ Hub | Calcula Colombia',
    description:
      '30 respuestas prácticas y fundamentadas en el Código Sustantivo del Trabajo (CST) sobre liquidación, prima, cesantías, vacaciones, retenciones y reforma laboral en Colombia.',
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

export default function PreguntasFrecuentesCoPage() {
  const faqSections: FaqSection[] = [
    {
      title: 'Liquidación Laboral y Despido',
      icon: '💼',
      items: [
        {
          question: '¿Qué conceptos componen la liquidación laboral en Colombia?',
          answer: (
            <>
              La liquidación laboral definitiva comprende las prestaciones sociales devengadas pendientes (prima de servicios, cesantías e intereses a las cesantías), la compensación de vacaciones no disfrutadas y los días de salario causados en el mes. Además, si el despido ocurrió sin justa causa, se suma la indemnización por terminación unilateral conforme al Artículo 64 del CST. Puedes simular todos los rubros en nuestra{' '}
              <Link href="/co/calculadora-liquidacion/" className="text-brand-900 font-semibold underline hover:text-brand-700">
                Calculadora de Liquidación Laboral
              </Link>.
            </>
          ),
          plainAnswer:
            'La liquidación laboral comprende las prestaciones sociales pendientes (prima, cesantías e intereses), vacaciones no disfrutadas y salarios causados. En caso de despido sin justa causa, se suma la indemnización del Art. 64 del CST. Simula todos los conceptos en la Calculadora de Liquidación Laboral de Calcula Colombia.',
        },
        {
          question: '¿Cómo se calcula la indemnización por despido sin justa causa en contrato indefinido?',
          answer: (
            <>
              Para trabajadores que ganan menos de 10 SMMLV, la indemnización es de 30 días de salario por el primer año de servicio y 20 días adicionales por cada año subsiguiente o fracción proporcional. Para quienes devenguen 10 SMMLV o más, se pagan 20 días por el primer año y 15 días por cada año adicional. Conoce el monto de tu indemnización en la{' '}
              <Link href="/co/calculadora-liquidacion/despido-sin-justa-causa/" className="text-brand-900 font-semibold underline hover:text-brand-700">
                Calculadora de Despido sin Justa Causa
              </Link>.
            </>
          ),
          plainAnswer:
            'Para salarios menores a 10 SMMLV, la indemnización equivale a 30 días de salario por el primer año y 20 días por cada año adicional o fracción. Con salarios iguales o superiores a 10 SMMLV, corresponde a 20 días por el primer año y 15 por los siguientes. Calcúlala en la Calculadora de Despido sin Justa Causa.',
        },
        {
          question: '¿Cómo se calcula la liquidación si el trabajador renuncia voluntariamente?',
          answer: (
            <>
              Cuando presentas tu renuncia voluntaria tienes pleno derecho a recibir el pago del 100% de tus prestaciones sociales acumuladas a la fecha de retiro: prima de servicios, cesantías, intereses sobre cesantías, vacaciones proporcionales y salarios devengados. La única diferencia con un despido es que en la renuncia voluntaria no se causa indemnización por terminación del contrato. Simula tu liquidación en la{' '}
              <Link href="/co/calculadora-liquidacion/renuncia/" className="text-brand-900 font-semibold underline hover:text-brand-700">
                Calculadora de Liquidación por Renuncia
              </Link>.
            </>
          ),
          plainAnswer:
            'Al renunciar voluntariamente conservas el derecho a recibir el pago completo de prima, cesantías, intereses, vacaciones acumuladas y sueldos pendientes. La única diferencia es que no se genera indemnización por despido. Simula tus valores en la Calculadora de Liquidación por Renuncia.',
        },
        {
          question: '¿Cómo se liquida un contrato de trabajo a término fijo que termina anticipadamente?',
          answer: (
            <>
              Conforme al numeral 2 del Artículo 64 del CST, si el empleador rescinde unilateralmente un contrato a término fijo sin justa causa, la indemnización equivale a la totalidad de los salarios correspondientes al tiempo que falte para cumplir el plazo originalmente estipulado. Además se deben liquidar todas las prestaciones sociales causadas hasta el último día laborado. Consulta la simulación en la{' '}
              <Link href="/co/calculadora-liquidacion/contrato-a-termino-fijo/" className="text-brand-900 font-semibold underline hover:text-brand-700">
                Calculadora de Contrato a Término Fijo
              </Link>.
            </>
          ),
          plainAnswer:
            'Si el empleador termina sin justa causa un contrato a término fijo, la indemnización equivale a los salarios que falten para cumplir el plazo pactado, sumado a las prestaciones acumuladas. Simúlala en la Calculadora de Contrato a Término Fijo.',
        },
        {
          question: '¿Qué es la indemnización moratoria del Artículo 65 del CST y cuándo aplica?',
          answer: (
            <>
              El Artículo 65 del CST establece que si el empleador no paga al asalariado los salarios y prestaciones devengadas a la terminación del contrato, debe abonar un día de salario ordinario por cada día de retardo durante los primeros 24 meses. Para que prospere ante un juez laboral, se exige demostrar mala fe en la conducta omisiva del empleador. Conoce los detalles en la{' '}
              <Link href="/co/calculadora-liquidacion/" className="text-brand-900 font-semibold underline hover:text-brand-700">
                Guía de Liquidación CST
              </Link>.
            </>
          ),
          plainAnswer:
            'El Artículo 65 del CST fija que la mora patronal en el pago de salarios y prestaciones causa un día de salario por cada día de retraso hasta por 24 meses cuando se acredite mala fe ante los jueces. Conoce las condiciones en la Guía de Liquidación CST.',
        },
        {
          question: '¿Qué plazo legal tiene el empleador en Colombia para pagar la liquidación?',
          answer: (
            <>
              La legislación laboral colombiana no contempla un periodo de gracia ni plazo de semanas: el pago debe efectuarse inmediatamente al momento de la finalización del vínculo de trabajo o en el siguiente corte ordinario de nómina de la empresa. Las demoras injustificadas facultan al trabajador a reclamar la indemnización moratoria del Art. 65 del CST. Conoce tus derechos en la{' '}
              <Link href="/co/guias/indemnizacion-por-despido-sin-justa-causa/" className="text-brand-900 font-semibold underline hover:text-brand-700">
                Guía de Despido e Indemnización
              </Link>.
            </>
          ),
          plainAnswer:
            'En Colombia el pago de la liquidación debe realizarse al terminar el contrato de trabajo o a más tardar en la fecha habitual del siguiente ciclo de nómina. Demoras no sustentadas habilitan sanciones moratorias. Conoce tus derechos en la Guía de Despido e Indemnización.',
        },
      ],
    },
    {
      title: 'Prima de Servicios',
      icon: '🎁',
      items: [
        {
          question: '¿Cuándo se debe pagar la prima de servicios en Colombia?',
          answer: (
            <>
              El Artículo 306 del CST estipula que la prima de servicios se paga en dos cuotas semestrales: la primera mitad a más tardar el 30 de junio y la segunda mitad dentro de los primeros 20 días del mes de diciembre. Cada entrega equivale a 15 días de salario para quienes laboraron el semestre completo. Conoce el cronograma legal en la{' '}
              <Link href="/co/guias/cuando-se-paga-la-prima/" className="text-brand-900 font-semibold underline hover:text-brand-700">
                Guía de Pago de la Prima de Servicios
              </Link>.
            </>
          ),
          plainAnswer:
            'La prima de servicios se divide en dos pagos anuales obligatorios: el primer desembolso máximo el 30 de junio y el segundo a más tardar el 20 de diciembre. Cada entrega representa 15 días de salario por semestre servido. Consulta la Guía de Pago de la Prima de Servicios.',
        },
        {
          question: '¿Cuál es la fórmula para calcular la prima de servicios semestral?',
          answer: (
            <>
              La fórmula legal para calcular la prima de servicios consiste en multiplicar el salario base mensual por los días laborados durante el semestre respectivo y dividir el resultado entre 360 días contables. Si el colaborador trabajó el semestre completo (180 días), recibirá exactamente medio mes de salario. Calcula tu prima en la{' '}
              <Link href="/co/calculadora-prima/" className="text-brand-900 font-semibold underline hover:text-brand-700">
                Calculadora de Prima de Servicios
              </Link>.
            </>
          ),
          plainAnswer:
            'La prima se calcula multiplicando el salario base por los días trabajados en el semestre y dividiendo entre 360. Si se laboraron los 180 días del semestre, corresponde medio mes de salario base. Haz tu simulación en la Calculadora de Prima de Servicios.',
        },
        {
          question: '¿El auxilio de transporte se suma al salario base para liquidar la prima?',
          answer: (
            <>
              Sí, por expresa disposición del Artículo 7º de la Ley 1ª de 1963, el auxilio de transporte se considera incorporado al salario únicamente para efectos de liquidar la prima de servicios y el auxilio de cesantías. Esto aplica para todos los empleados que devenguen hasta dos salarios mínimos legales mensuales vigentes (2 SMMLV). Consulta el valor vigente en la página del{' '}
              <Link href="/co/auxilio-de-transporte/" className="text-brand-900 font-semibold underline hover:text-brand-700">
                Auxilio de Transporte 2026
              </Link>.
            </>
          ),
          plainAnswer:
            'Sí, por mandato de la Ley 1ra de 1963, el auxilio de transporte forma parte de la base para liquidar la prima y las cesantías de trabajadores que ganan hasta 2 SMMLV. Consulta el monto vigente en la página del Auxilio de Transporte 2026.',
        },
        {
          question: '¿Los trabajadores domésticos tienen derecho a la prima de servicios?',
          answer: (
            <>
              Sí, la Ley 1788 de 2016 universalizó el derecho a la prima de servicios para los trabajadores domésticos, choferes de servicio familiar, trabajadores de fincas de recreo y mayordomos. Se les liquida exactamente bajo las mismas reglas y plazos que a cualquier empleado de empresa privada. Simula este caso en la{' '}
              <Link href="/co/calculadora-prima/" className="text-brand-900 font-semibold underline hover:text-brand-700">
                Calculadora de Prima de Servicios
              </Link>.
            </>
          ),
          plainAnswer:
            'Desde la vigencia de la Ley 1788 de 2016, los trabajadores del servicio doméstico tienen derecho a la prima en las mismas condiciones y plazos que cualquier colaborador empresarial. Simúlala en la Calculadora de Prima de Servicios.',
        },
        {
          question: '¿Qué sucede con la prima si el trabajador laboró menos de un semestre?',
          answer: (
            <>
              Si el empleado no laboró los seis meses completos del semestre, tiene derecho inalienable a que se le reconozca la prima en forma directamente proporcional a los días efectivamente trabajados, sin importar si laboró un mes o una semana. Anteriormente la ley exigía un mínimo de días, requisito declarado inexequible por la Corte Constitucional. Realiza tu cálculo en la{' '}
              <Link href="/co/calculadora-prima/" className="text-brand-900 font-semibold underline hover:text-brand-700">
                Calculadora de Prima Proporcional
              </Link>.
            </>
          ),
          plainAnswer:
            'Quien no trabaje el semestre entero recibe el pago proporcional a los días efectivamente laborados, sin que exista un tiempo mínimo obligatorio de permanencia para adquirir el derecho. Calcula tu suma en la Calculadora de Prima Proporcional.',
        },
      ],
    },
    {
      title: 'Cesantías e Intereses sobre Cesantías',
      icon: '🏦',
      items: [
        {
          question: '¿Qué son las cesantías y cuál es la fecha límite para consignarlas al fondo?',
          answer: (
            <>
              Las cesantías son una prestación social de ahorro obligatorio (Art. 249 CST) cuyo propósito es respaldar al trabajador en caso de quedar desempleado. Las cesantías acumuladas durante el año calendario anterior deben ser consignadas por el empleador en el fondo de cesantías elegido por el trabajador a más tardar el 14 de febrero de cada año. Consulta la guía en{' '}
              <Link href="/co/guias/cesantias-cuando-y-como-retirarlas/" className="text-brand-900 font-semibold underline hover:text-brand-700">
                Guía de Cesantías: Cuándo y Cómo Retirarlas
              </Link>.
            </>
          ),
          plainAnswer:
            'Las cesantías corresponden a un ahorro obligatorio destinado a proteger al empleado en caso de desempleo. El empleador debe depositarlas en el fondo administrador a más tardar el 14 de febrero de cada año. Consulta la Guía de Cesantías: Cuándo y Cómo Retirarlas.',
        },
        {
          question: '¿Cómo se calculan las cesantías de un año de trabajo?',
          answer: (
            <>
              Las cesantías equivalen a un mes de salario completo por cada año laborado o proporcionalmente por fracción de año. La fórmula matemática es: (Salario Base con Auxilio de Transporte × Días Trabajados en el Año) dividido entre 360. Si el salario es variable, se calcula el promedio del último año de servicios. Obtén tu cifra exacta en la{' '}
              <Link href="/co/calculadora-cesantias/" className="text-brand-900 font-semibold underline hover:text-brand-700">
                Calculadora de Cesantías e Intereses
              </Link>.
            </>
          ),
          plainAnswer:
            'Las cesantías equivalen a un mes de salario con auxilio de transporte por cada año de labores. La fórmula divide el producto de salario por días laborados entre 360. Si el salario varía, se utiliza el promedio devengado. Calcúlalas en la Calculadora de Cesantías.',
        },
        {
          question: '¿Qué son los intereses a las cesantías y cuándo se le pagan al empleado?',
          answer: (
            <>
              La Ley 52 de 1975 obliga al empleador a pagar al colaborador intereses legales del 12% anual sobre el saldo de las cesantías causadas al 31 de diciembre. A diferencia de las cesantías que van al fondo, los intereses se pagan directamente en la nómina del trabajador a más tardar el 31 de enero de cada año (o en la liquidación final). Simula los intereses en la{' '}
              <Link href="/co/calculadora-cesantias/" className="text-brand-900 font-semibold underline hover:text-brand-700">
                Calculadora de Intereses sobre Cesantías
              </Link>.
            </>
          ),
          plainAnswer:
            'Por Ley 52 de 1975 el empleador debe cancelar el 12% anual sobre las cesantías acumuladas. Estos intereses se pagan de forma directa en efectivo al trabajador a más tardar el 31 de enero. Simúlalos en la Calculadora de Cesantías.',
        },
        {
          question: '¿En qué casos extraordinarios se pueden retirar anticipadamente las cesantías?',
          answer: (
            <>
              Estando el contrato vigente, el trabajador solo puede solicitar retiros parciales de cesantías para la compra, construcción o mejora de vivienda propia, liberación de hipotecas, o para financiar matrículas de educación superior del trabajador, cónyuge o hijos. En los demás casos deben permanecer custodiadas en el fondo hasta el retiro laboral. Conoce el trámite en la{' '}
              <Link href="/co/guias/cesantias-cuando-y-como-retirarlas/" className="text-brand-900 font-semibold underline hover:text-brand-700">
                Guía de Retiro de Cesantías
              </Link>.
            </>
          ),
          plainAnswer:
            'Durante la vigencia contractual, el retiro parcial procede exclusivamente para compra o remodelación de vivienda, pago de hipotecas o matrícula de estudios superiores del empleado, cónyuge o hijos. Conoce los requisitos en la Guía de Retiro de Cesantías.',
        },
        {
          question: '¿Qué sanción enfrenta el empleador por no consignar las cesantías a tiempo?',
          answer: (
            <>
              Conforme al numeral 3 del Artículo 99 de la Ley 50 de 1990, si el empleador no consigna las cesantías en el fondo antes del vencimiento del 14 de febrero, deberá pagar al trabajador una sanción equivalente a un día de salario por cada día de mora hasta que se verifique la consignación efectiva. Verifica las sanciones aplicables en la{' '}
              <Link href="/co/calculadora-cesantias/" className="text-brand-900 font-semibold underline hover:text-brand-700">
                Calculadora de Cesantías
              </Link>.
            </>
          ),
          plainAnswer:
            'La Ley 50 de 1990 castiga la falta de consignación oportuna de cesantías al 14 de febrero con una sanción equivalente a un día de salario diario por cada día de mora hasta el pago real. Revisa las reglas en la Calculadora de Cesantías.',
        },
      ],
    },
    {
      title: 'Vacaciones Legales',
      icon: '🏖️',
      items: [
        {
          question: '¿Cuántos días de vacaciones remuneradas corresponden por cada año trabajado?',
          answer: (
            <>
              El Artículo 186 del Código Sustantivo del Trabajo establece que todo trabajador tiene derecho a 15 días hábiles consecutivos de descanso remunerado por cada año completo de servicios prestados a una misma empresa. Los días no laborables de la empresa y festivos no se descuentan del cómputo. Conoce tus días acumulados en la{' '}
              <Link href="/co/calculadora-vacaciones/" className="text-brand-900 font-semibold underline hover:text-brand-700">
                Calculadora de Vacaciones en Colombia
              </Link>.
            </>
          ),
          plainAnswer:
            'El Artículo 186 del CST otorga 15 días hábiles consecutivos de vacaciones remuneradas por cada año continuo de servicios. Días feriados y descansos habituales de la empresa no se computan. Conoce tus días en la Calculadora de Vacaciones.',
        },
        {
          question: '¿Cómo se calcula la compensación de vacaciones no disfrutadas en la liquidación?',
          answer: (
            <>
              Cuando el contrato termina y quedan días de vacaciones pendientes de goce, se deben pagar en dinero multiplicando el salario básico por los días trabajados y dividiendo entre 720 (o multiplicando los días de vacaciones adeudados por el salario diario ordinario). Simula tu compensación exacta en la{' '}
              <Link href="/co/calculadora-vacaciones/" className="text-brand-900 font-semibold underline hover:text-brand-700">
                Calculadora de Compensación de Vacaciones
              </Link>.
            </>
          ),
          plainAnswer:
            'Al finalizar el contrato las vacaciones adeudadas se pagan dividiendo el producto de salario básico por días trabajados entre 720, o por el valor de cada día hábil pendiente. Simula la cifra en la Calculadora de Vacaciones.',
        },
        {
          question: '¿El auxilio de transporte se incluye en la base de liquidación de las vacaciones?',
          answer: (
            <>
              No. Por disposición del Artículo 192 del CST, durante las vacaciones el trabajador recibe el salario ordinario devengado, excluyendo el valor de horas extras y del auxilio de transporte, ya que durante el descanso no se incurre en gastos de desplazamiento hacia el puesto de trabajo. Revisa esta regla en la{' '}
              <Link href="/co/calculadora-vacaciones/" className="text-brand-900 font-semibold underline hover:text-brand-700">
                Calculadora de Vacaciones
              </Link>.
            </>
          ),
          plainAnswer:
            'No, el auxilio de transporte se excluye por mandato del Artículo 192 del CST de la liquidación y disfrute de vacaciones, remunerándose exclusivamente sobre el salario base ordinario. Revisa el criterio en la Calculadora de Vacaciones.',
        },
        {
          question: '¿Se pueden compensar en dinero las vacaciones sin que termine el contrato?',
          answer: (
            <>
              Conforme al Artículo 189 del CST (modificado por la Ley 1429 de 2010), trabajador y empleador pueden acordar por escrito la compensación en dinero de hasta la mitad (50%) de las vacaciones causadas, debiendo el trabajador descansar obligatoriamente los días hábiles restantes. Consulta los requisitos en la{' '}
              <Link href="/co/calculadora-vacaciones/" className="text-brand-900 font-semibold underline hover:text-brand-700">
                Calculadora de Vacaciones Laborales
              </Link>.
            </>
          ),
          plainAnswer:
            'Por acuerdo formal escrito entre partes es posible compensar en dinero hasta el 50% de las vacaciones causadas conforme a la Ley 1429 de 2010, disfrutando en tiempo el porcentaje restante. Conoce los detalles en la Calculadora de Vacaciones.',
        },
        {
          question: '¿Cuándo prescriben las vacaciones no disfrutadas por el trabajador en Colombia?',
          answer: (
            <>
              El derecho a solicitar el disfrute de las vacaciones prescribe a los tres años contados a partir de la fecha en que se haya causado el derecho a gozarlas (Art. 488 CST). Sin embargo, al momento de terminar el contrato de trabajo, la compensación en dinero de las vacaciones pendientes de pago también prescribe a los 3 años contados desde la fecha de desvinculación laboral. Conoce los plazos en la{' '}
              <Link href="/co/calculadora-vacaciones/" className="text-brand-900 font-semibold underline hover:text-brand-700">
                Calculadora de Vacaciones
              </Link>.
            </>
          ),
          plainAnswer:
            'El disfrute de vacaciones prescribe a los 3 años desde que se causaron conforme al Artículo 488 del CST. La compensación en dinero de las acumuladas al terminar el contrato prescribe a los 3 años de la terminación. Revisa los términos en la Calculadora de Vacaciones.',
        },
      ],
    },
    {
      title: 'Salario Neto y Deducciones de Salud y Pensión',
      icon: '🏥',
      items: [
        {
          question: '¿Cómo calcular el salario neto mensual a partir del salario bruto?',
          answer: (
            <>
              Para obtener tu salario neto a recibir en cuenta debes deducir del salario básico el 4% obligatorio de cotización a salud (EPS) y el 4% obligatorio a pensión. Si ganas hasta 2 SMMLV, se le adiciona el valor completo del auxilio de transporte no salarial. Realiza la simulación en la{' '}
              <Link href="/co/calculadora-salario-neto/" className="text-brand-900 font-semibold underline hover:text-brand-700">
                Calculadora de Salario Neto Colombia
              </Link>.
            </>
          ),
          plainAnswer:
            'El salario neto resulta de restar al salario básico el 4% de salud y el 4% de pensión obligatoria, sumando el auxilio de transporte para quienes devenguen hasta dos salarios mínimos. Simula tu pago en la Calculadora de Salario Neto Colombia.',
        },
        {
          question: '¿Qué porcentaje de aporte a salud y pensión le descuentan al trabajador en nómina?',
          answer: (
            <>
              En Colombia al colaborador dependiente se le descuenta el 4% para salud y el 4% para pensión sobre su Ingreso Base de Cotización (IBC). El empleador aporta un 8.5% adicional a salud (salvo exoneración del Art. 114-1 del E.T.) y un 12% a pensión, totalizando una contribución del 12.5% en salud y 16% en pensión. Consulta el desglose en la{' '}
              <Link href="/co/calculadora-salario-neto/" className="text-brand-900 font-semibold underline hover:text-brand-700">
                Calculadora de Deducciones Laborales
              </Link>.
            </>
          ),
          plainAnswer:
            'Al trabajador dependiente se le descuenta el 4% para salud y el 4% para pensión sobre su IBC. El resto del aporte (8.5% salud y 12% pensión) es asumido por la empresa. Desglosa los aportes en la Calculadora de Salario Neto.',
        },
        {
          question: '¿Quiénes están obligados a aportar al Fondo de Solidaridad Pensional?',
          answer: (
            <>
              Todos los trabajadores que devenguen un ingreso mensual igual o superior a cuatro salarios mínimos mensuales legales vigentes (4 SMMLV) deben aportar obligatoriamente un 1% adicional a su pensión destinado al Fondo de Solidaridad Pensional. Para sueldos mayores a 16 SMMLV la tarifa escala progresivamente hasta el 2%. Conoce las escalas en la{' '}
              <Link href="/co/calculadora-salario-neto/" className="text-brand-900 font-semibold underline hover:text-brand-700">
                Calculadora de Salario Neto
              </Link>.
            </>
          ),
          plainAnswer:
            'Los trabajadores con ingresos mensuales a partir de 4 SMMLV aportan obligatoriamente un 1% extra a su pensión para el Fondo de Solidaridad Pensional, escalando progresivamente hasta el 2% en ingresos altos. Simúlalo en la Calculadora de Salario Neto.',
        },
        {
          question: '¿A partir de qué monto salarial no se tiene derecho al auxilio de transporte?',
          answer: (
            <>
              El auxilio de transporte (Ley 15 de 1959) se reconoce exclusivamente a los trabajadores que devenguen hasta dos salarios mínimos legales mensuales vigentes (2 SMMLV). Quienes perciban una remuneración básica que supere dicho tope de 2 SMMLV pierden el derecho legal al auxilio. Consulta el umbral en la sección del{' '}
              <Link href="/co/auxilio-de-transporte/" className="text-brand-900 font-semibold underline hover:text-brand-700">
                Auxilio de Transporte y Topes SMMLV
              </Link>.
            </>
          ),
          plainAnswer:
            'El auxilio de transporte se otorga únicamente a quienes ganan hasta 2 salarios mínimos mensuales. Salarios que superen ese tope legal pierden el beneficio. Consulta el valor en Auxilio de Transporte y Topes SMMLV.',
        },
        {
          question: '¿Cuál es el Salario Mínimo Mensual Legal Vigente (SMMLV) en Colombia para 2026?',
          answer: (
            <>
              El Salario Mínimo Mensual Legal Vigente (SMMLV) en Colombia se fija anualmente mediante decreto del Gobierno Nacional o acuerdo tripartito en la Comisión de Concertación de Políticas Salariales y Laborales. Ningún trabajador con contrato de jornada completa puede devengar un salario básico inferior a este estándar. Consulta el histórico y cifra en la{' '}
              <Link href="/co/salario-minimo/" className="text-brand-900 font-semibold underline hover:text-brand-700">
                Tabla del Salario Mínimo Colombia 2026
              </Link>.
            </>
          ),
          plainAnswer:
            'El SMMLV lo decreta el Gobierno Nacional cada año y constituye la remuneración mínima legal para cualquier empleado de jornada completa en Colombia. Consulta la cifra e histórico en la Tabla del Salario Mínimo Colombia 2026.',
        },
      ],
    },
    {
      title: 'Horas Extras, Recargos y Reforma Laboral 2026',
      icon: '⏰',
      items: [
        {
          question: '¿Cómo afecta la reducción gradual de la jornada laboral (Ley 2101) el valor de la hora?',
          answer: (
            <>
              La Ley 2101 de 2021 ordenó reducir paulatinamente la jornada ordinaria máxima semanal de 48 a 42 horas sin reducir los salarios. Al disminuir el número de horas trabajadas en el mes, el valor de la hora ordinaria se incrementa automáticamente, lo que eleva el valor a pagar por concepto de horas extras y recargos nocturnos o festivos. Simula el impacto en la{' '}
              <Link href="/co/reforma-laboral/" className="text-brand-900 font-semibold underline hover:text-brand-700">
                Guía de la Reforma Laboral 2026
              </Link>.
            </>
          ),
          plainAnswer:
            'La Ley 2101 de 2021 reduce de forma progresiva la jornada laboral semanal sin disminuir salarios, encareciendo el valor de la hora ordinaria y aumentando consecuentemente el costo de horas extras y recargos. Consulta la Guía de la Reforma Laboral 2026.',
        },
        {
          question: '¿A qué hora inicia el recargo nocturno con la actualización de la Reforma Laboral 2026?',
          answer: (
            <>
              La actualización legislativa de la reforma laboral en Colombia establece el inicio del trabajo nocturno a partir de las 7:00 pm (anteriormente fijado a las 9:00 pm), extendiéndose hasta las 6:00 am del día siguiente. Todo tiempo laborado dentro de esa franja causa un recargo del 35% sobre la hora ordinaria. Calcula tus recargos en la{' '}
              <Link href="/co/calculadora-horas-extras/" className="text-brand-900 font-semibold underline hover:text-brand-700">
                Calculadora de Horas Extras y Recargos
              </Link>.
            </>
          ),
          plainAnswer:
            'La reforma laboral fija el inicio de la jornada nocturna a partir de las 7:00 pm hasta las 6:00 am, devengando un recargo adicional del 35% sobre la hora diurna. Calcula tus horas en la Calculadora de Horas Extras y Recargos.',
        },
        {
          question: '¿Cómo se liquidan los recargos dominicales y festivos según el CST?',
          answer: (
            <>
              El trabajo ordinario en domingo o festivo se remunera con un recargo adicional del 75% sobre el valor de la hora ordinaria (factor 1.75). Si además se laboran horas extras durante el día dominical, el recargo asciende al 100% (factor 2.00) y si es extra nocturna dominical, al 150% (factor 2.50). Conoce todos los factores en la{' '}
              <Link href="/co/guias/recargos-nocturnos-y-dominicales/" className="text-brand-900 font-semibold underline hover:text-brand-700">
                Guía de Recargos Dominicales y Festivos
              </Link>.
            </>
          ),
          plainAnswer:
            'El trabajo dominical o festivo ordinario genera un recargo del 75% (factor 1.75). Si se ejecutan horas extras diurnas dominicales el recargo es del 100%, y en nocturnas dominicales asciende al 150%. Revisa los detalles en la Guía de Recargos Dominicales.',
        },
        {
          question: '¿Cómo funciona el generador de enlace de WhatsApp de Calcula Colombia?',
          answer: (
            <>
              Nuestra herramienta gratuita te permite crear enlaces directos de WhatsApp con el código de marcación de Colombia (+57) y mensajes predeterminados para atender clientes o compartir cálculos sin necesidad de agregar el número a la agenda telefónica. También genera un código QR listo para imprimir o compartir. Pruébalo en el{' '}
              <Link href="/co/generador-de-link-whatsapp/" className="text-brand-900 font-semibold underline hover:text-brand-700">
                Generador de Link de WhatsApp (+57)
              </Link>.
            </>
          ),
          plainAnswer:
            'Permite generar enlaces de WhatsApp con código de país +57 y mensajes personalizados sin guardar contactos en la agenda, generando además códigos QR instantáneos. Úsalo en el Generador de Link de WhatsApp Colombia.',
        },
      ],
    },
  ];

  const allJsonFaqs: FaqItem[] = faqSections.flatMap((sec) =>
    sec.items.map((it) => ({
      q: it.question,
      a: it.plainAnswer,
    }))
  );

  const breadcrumbs = [
    { name: 'Calcula', path: '/' },
    { name: 'Colombia', path: '/co/' },
    { name: 'Preguntas Frecuentes', path: '/co/preguntas-frecuentes/' },
  ];

  return (
    <>
      <JsonLd
        country="co"
        slug="co/preguntas-frecuentes"
        type="website"
        title="Preguntas Frecuentes sobre Liquidación y CST - FAQ Hub"
        description="Hub de preguntas y respuestas sobre liquidación laboral, prima, cesantías, vacaciones y reforma laboral en Colombia."
        breadcrumbs={breadcrumbs}
        faqs={allJsonFaqs}
      />
      <Header country="co" />
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: 'Calcula', href: '/' },
            { label: 'Colombia', href: '/co/' },
            { label: 'Preguntas Frecuentes' },
          ]}
        />

        <article className="mt-6 space-y-10">
          <header className="border-b border-slate-200 pb-6">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-brand-50 text-brand-900 border border-brand-200 mb-3">
              FAQ Hub · 30 Respuestas Prácticas CST 2026
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Preguntas Frecuentes sobre Derechos Laborales en Colombia
            </h1>
            <p className="mt-3 text-lg text-slate-600 leading-relaxed">
              Respuestas fundamentadas a las dudas más comunes sobre liquidación laboral, despidos, prima de servicios, cesantías, vacaciones, deducciones de nómina y los efectos de la reforma laboral.
            </p>
          </header>

          <div className="flex flex-wrap gap-2 pb-2">
            {faqSections.map((sec, idx) => (
              <a
                key={idx}
                href={`#faq-co-${idx}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-700 transition-colors"
              >
                <span>{sec.icon}</span>
                <span>{sec.title}</span>
              </a>
            ))}
          </div>

          <div className="space-y-12">
            {faqSections.map((section, sIdx) => {
              const sectionOffsets = [0, 6, 11, 16, 21, 26];
              return (
                <section
                  key={sIdx}
                  id={`faq-co-${sIdx}`}
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

          <div className="bg-slate-100 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-3">
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              ¿Requieres consultar la base jurídica de un cálculo?
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Revisa nuestra fundamentación legal completa en la{' '}
              <Link href="/co/metodologia/" className="text-brand-900 font-bold underline">
                Página de Metodología CST
              </Link>{' '}
              o escríbenos a{' '}
              <a href="mailto:contacto@zetawala.com" className="text-brand-900 font-bold underline">
                contacto@zetawala.com
              </a>
              . Te responderemos en un plazo máximo garantizado de 48 horas.
            </p>
          </div>
        </article>
      </main>
      <Footer country="co" />
    </>
  );
}
