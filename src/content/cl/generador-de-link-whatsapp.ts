import { PageContent } from '../types';

export const content: PageContent = {
  metaTitle: 'Generador de Link WhatsApp con Mensaje y QR Chile',
  metaDescription:
    'Crea tu link wa.me para WhatsApp en Chile con mensaje predefinido, código QR en alta resolución para imprimir y botón para tu web o Instagram. 100% gratis.',
  h1: 'Generador de Enlaces para WhatsApp con Mensaje y Código QR',
  quickAnswer:
    'El generador de enlaces de WhatsApp crea una URL corta oficial (wa.me) para que tus clientes y contactos en Chile inicien un chat con solo hacer clic, sin tener que guardar tu número en el teléfono móvil. Incluye mensaje personalizado y código QR descargable en PNG gratis.',
  howItWorks: [
    {
      step: 1,
      title: 'Ingresa tu número celular de 9 dígitos',
      description:
        'Digita tu número móvil en Chile (ej: 912345678). El código internacional de Chile (+56) se agrega automáticamente al enlace.',
      formula: 'https://wa.me/56[9-dígitos]',
    },
    {
      step: 2,
      title: 'Escribe un mensaje de inicio (opcional)',
      description:
        'Personaliza el texto inicial que tu cliente enviará al abrir la conversación o utiliza una de nuestras plantillas comerciales.',
      formula: '?text=Mensaje+Codificado',
    },
    {
      step: 3,
      title: 'Copia el link o descarga el QR',
      description:
        'Usa el enlace en la biografía de Instagram o TikTok, inserta el botón en tu página web o descarga el código QR para imprimir en tarjetas.',
    },
  ],
  article: `## ¿Qué es el enlace de WhatsApp (wa.me) y cómo funciona?

El enlace directo de WhatsApp es una solución tecnológica desarrollada oficialmente por WhatsApp y Meta bajo la especificación conocida como **Click to Chat** (Clic para Chatear). Esta funcionalidad permite crear una dirección web corta y estandarizada que, al ser pulsada por cualquier usuario en un teléfono inteligente o en un computador, abre de manera inmediata una conversación directa en la aplicación de WhatsApp o en WhatsApp Web, sin que la otra persona necesite agregar o guardar previamente el número telefónico en sus contactos.

El formato base oficial de estos enlaces adopta la siguiente estructura universal:
\`https://wa.me/<número_internacional_completo>\`

Para que el enlace funcione sin fallas en cualquier país, el número de teléfono debe ingresarse en estricto formato internacional, incluyendo el código de país (por ejemplo, **56** para Chile, **55** para Brasil, **52** para México o **57** para Colombia), prescindiendo de símbolos especiales como el signo más (+), guiones, espacios o paréntesis.

Además de enlazar directamente al número, la herramienta permite añadir un parámetro de texto codificado (\`?text=...\`) que precarga de forma automática un **mensaje personalizado de bienvenida o consulta**, de modo que el cliente solo tenga que pulsar el botón de envío para iniciar la interacción.

---

## Ventajas del enlace directo de WhatsApp para empresas y profesionales

En el dinámico ecosistema digital de América Latina, WhatsApp es el canal preferido de comunicación y ventas con clientes. Implementar enlaces directos ofrece beneficios tangibles inmediatos:

### 1. Eliminación radical de la fricción de contacto
El método tradicional de obligar al usuario a copiar un número, abrir la agenda de su teléfono, crear un nuevo contacto, esperar a que la aplicación lo sincronice y luego buscarlo para escribirle provoca que más del 60% de los interesados desistan en el camino. El enlace wa.me reduce todo ese engorroso proceso a un solo clic instantáneo, multiplicando las tasas de conversión de prospectos a clientes reales.

### 2. Segmentación precisa de canales de captación
Al configurar mensajes predefinidos diferentes para cada campaña, anuncio o publicación (por ejemplo: "Hola, vi su aviso en Instagram y quiero cotizar el plan A" frente a "Hola, vi su anuncio en Google y requiero asistencia técnica"), el equipo de atención al cliente identifica de inmediato desde qué plataforma llegó el contacto y qué producto le interesa, optimizando el tiempo de respuesta.

### 3. Presencia impecable y profesional en redes sociales
En lugar de mostrar números largos y desordenados en el perfil de Instagram, TikTok, LinkedIn o Facebook, un enlace corto y limpio \`wa.me/...\` proyecta seriedad, modernidad y confiabilidad en la biografía digital.

---

## Usos del Código QR de WhatsApp para el mundo físico

Nuestra herramienta genera simultáneamente un **código QR vectorial de alta definición** descargable en formato PNG, facilitando la conexión inmediata entre el mundo físico y digital:

- **Locales comerciales, vitrinas y restaurantes:** Permite a los transeúntes y comensales escanear con la cámara de su teléfono para revisar cartas digitales, hacer reservas o pedir asesoría sin esperar a ser atendidos.
- **Tarjetas de presentación y folletos publicitarios:** Sustituye la tediosa digitación manual de números en conferencias, ferias de negocios y eventos corporativos por un escaneo de un segundo.
- **Empaques de productos y cajas de despacho:** Ideal para tiendas de comercio electrónico que desean brindar soporte posventa expedito, incentivar reseñas o fomentar compras recurrentes.

---

## Medición y seguimiento de campañas publicitarias con enlaces directos

Para las empresas que invierten en publicidad digital a través de Meta Ads (Facebook e Instagram), Google Ads o TikTok Ads, el enlace wa.me es la herramienta de conversión por excelencia. Al vincular el enlace a tus anuncios de mensajería directa, los clientes potenciales aterrizan en tu chat con un solo toque desde su dispositivo móvil.

Además, si utilizas acortadores de URL o parámetros de seguimiento estadístico, puedes monitorear en tiempo real cuántas personas hacen clic en el botón de tu página web frente a cuántas escanean el código QR en un folleto impreso o en una feria comercial. Esta granularidad de datos permite calcular con rigurosidad el retorno sobre la inversión (ROI) de cada peso invertido en marketing digital y material físico publicitario.

---

## Cómo integrar el botón HTML en tu sitio web

La herramienta proporciona un fragmento de código HTML prediseñado y optimizado con estilos en línea que puedes copiar e insertar directamente en cualquier página web, blog de WordPress, tienda de Shopify o WooCommerce. El botón incluye el color verde oficial de WhatsApp, texto personalizable y atributos de seguridad (\`target="_blank" rel="noopener noreferrer"\`), asegurando una experiencia de usuario segura y responsiva en dispositivos móviles y de escritorio.

---

## Recomendaciones para optimizar la atención por WhatsApp

1. **Mantén mensajes predeterminados breves y claros:** Facilita que el cliente inicie la conversación sin intimidarlo con textos extensos.
2. **Utiliza WhatsApp Business:** Asocia el enlace generado a una cuenta de WhatsApp Business para configurar respuestas rápidas automáticas, horarios comerciales de atención y catálogos de productos.
3. **Privacidad garantizada:** Nuestro generador opera de forma 100% local en tu navegador web. Ningún número telefónico ni mensaje es almacenado en servidores externos, asegurando total confidencialidad.`,
  examples: [
    {
      title: 'Enlace para Emprendimiento en Instagram',
      scenario: 'Tienda de diseño en Santiago que atiende ventas por Instagram y WhatsApp.',
      inputs: {
        'Número': '9 8765 4321 (9 dígitos)',
        'Mensaje': '¡Hola! Quisiera consultar precios y opciones de envío.',
      },
      breakdown: [
        { item: 'Prefijo Chile', amount: '+56', note: 'Código de país' },
        { item: 'Formato wa.me', amount: 'wa.me/56987654321', note: 'Enlace corto directo' },
      ],
      total: 'https://wa.me/56987654321?text=%C2%A1Hola!%20...',
    },
    {
      title: 'Código QR para Local Comercial en Viña del Mar',
      scenario: 'Cafetería que coloca un código QR en las mesas para recibir pedidos y reservas.',
      inputs: {
        'Número': '9 1234 5678',
        'Mensaje': '¡Hola! Quisiera reservar una mesa para el fin de semana.',
      },
      breakdown: [
        { item: 'Formato', amount: 'Imagen PNG descargable', note: 'Resolución para impresión' },
        { item: 'Lectura', amount: 'Cámara estándar de iOS y Android', note: 'Sin instalar apps' },
      ],
      total: 'Código QR listo para imprimir en menú y mesas',
    },
  ],
  faqs: [
    {
      q: '¿El generador de enlaces de WhatsApp es gratuito?',
      a: 'Sí, la herramienta de Calcula es 100% gratuita, sin costo, sin registros y sin límite de enlaces generados.',
    },
    {
      q: '¿El link de WhatsApp tiene fecha de vencimiento?',
      a: 'No. Los enlaces oficiales wa.me son permanentes y siguen funcionando mientras tu número continúe registrado en WhatsApp.',
    },
    {
      q: '¿Funciona con números personales y con WhatsApp Business?',
      a: 'Sí, es compatible tanto con cuentas personales de WhatsApp como con cuentas comerciales de WhatsApp Business.',
    },
    {
      q: '¿Cómo colocar el enlace en la biografía de Instagram?',
      a: 'Ingresa a tu perfil en Instagram, toca en "Editar perfil", ve a "Enlaces" > "Agregar enlace externo" y pega el link wa.me obtenido.',
    },
    {
      q: '¿Se guarda mi número o mensaje en este sitio?',
      a: 'No. Todo el proceso ocurre en tu navegador web. Ningún número telefónico ni mensaje es almacenado en servidores.',
    },
    {
      q: '¿Cómo integrar el botón de WhatsApp en mi sitio web?',
      a: 'Copia el código HTML que aparece abajo y pégalo en tu página web, tienda Shopify, WooCommerce o WordPress.',
    },
    {
      q: '¿El código QR sirve para imprimir en alta resolución?',
      a: 'Sí. El botón "Descargar QR Code" te entrega un archivo PNG nítido perfecto para imprimir en tarjetas de visita, vitrinas o catálogos.',
    },
    {
      q: '¿Puedo usar el enlace en anuncios de Google o redes sociales?',
      a: 'Sí. Puedes utilizar la URL wa.me como página de destino en tus campañas para que los usuarios inicien una conversación de inmediato.',
    },
  ],
  sources: [
    { label: 'Centro de ayuda de WhatsApp: Cómo usar el clic para chatear', url: 'https://faq.whatsapp.com/591339899867296/' },
    { label: 'WhatsApp Business: Información para pequeñas y medianas empresas', url: 'https://business.whatsapp.com/' },
  ],
  relatedTools: [
    { title: 'Calculadora de Finiquito Chile', path: '/cl/calculadora-finiquito/', description: 'Años de servicio, feriado proporcional y tope 90 UF.' },
    { title: 'Calculadora de Sueldo Líquido', path: '/cl/calculadora-sueldo-liquido/', description: 'Descuentos de AFP, Fonasa/Isapre e Impuesto Único de Segunda Categoría.' },
    { title: 'Valor UF Hoy en Chile', path: '/cl/valor-uf-hoy/', description: 'Valor actualizado hoy, conversor a pesos y gráfico histórico.' },
  ],
  relatedGuides: [
    { title: 'Cómo Calcular el Finiquito en Chile', path: '/cl/guias/como-calcular-el-finiquito/', description: 'Guía paso a paso según causal de término del Código del Trabajo.' },
    { title: 'Qué es la UF y Cómo se Calcula', path: '/cl/guias/que-es-la-uf-y-como-se-calcula/', description: 'Historia, reajuste por IPC y aplicaciones en contratos y créditos.' },
  ],
  updatedAt: '2026-03-01',
};
