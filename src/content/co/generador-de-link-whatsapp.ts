import { PageContent } from '../types';

export const content: PageContent = {
  metaTitle: 'Generador de Link de WhatsApp con Mensaje y QR Colombia',
  metaDescription:
    'Crea tu enlace wa.me para WhatsApp en Colombia con mensaje predeterminado, código QR descargable en PNG y botón para tu web o redes sociales. Gratis.',
  h1: 'Generador de Enlaces para WhatsApp con Mensaje y Código QR',
  quickAnswer:
    'El generador de enlaces de WhatsApp crea una dirección corta oficial (wa.me) para que tus clientes y contactos en Colombia inicien un chat con un solo clic, sin guardar el número en el celular. Incluye mensaje predeterminado y código QR descargable gratis en alta resolución.',
  howItWorks: [
    {
      step: 1,
      title: 'Escribe tu número celular de 10 dígitos',
      description:
        'Digita tu número celular en Colombia (ej: 3001234567). La herramienta antepone el indicativo internacional +57 automáticamente.',
      formula: 'https://wa.me/57[10-dígitos]',
    },
    {
      step: 2,
      title: 'Agrega un mensaje predeterminado (opcional)',
      description:
        'Configura el texto con el que tus clientes iniciarán la conversación o selecciona una de nuestras plantillas comerciales recomendadas.',
      formula: '?text=Mensaje+Predeterminado',
    },
    {
      step: 3,
      title: 'Copia el link o descarga el QR',
      description:
        'Pégalo en la biografía de Instagram o TikTok, inserta el botón HTML en tu sitio web o imprime el código QR en volantes y empaques.',
    },
  ],
  article: `## ¿Qué es el enlace de WhatsApp (wa.me) y cómo ayuda a tu negocio en Colombia?

La función oficial *Clic para chatear* (*Click to Chat*) de WhatsApp permite que cualquier usuario inicie una conversación de chat con tu línea celular sin tener que registrarte previamente en su lista de contactos de WhatsApp.

Al oprimir el enlace, se abre la aplicación de WhatsApp o la versión web en su computador con el mensaje personalizado que programaste, listo para ser enviado con un toque.

### Ventajas para empresas, comercios y trabajadores independientes

1. **Mayor conversión de clientes:** Eliminar la molestia de digitar y guardar el número incrementa drásticamente los contactos comerciales desde redes sociales y páginas web.
2. **Medición clara de campañas:** Puedes crear enlaces distintos para Instagram, anuncios o folletos con mensajes específicos, identificando de inmediato el origen del prospecto.
3. **Presentación impecable en redes:** En lugar de poner un número suelto, muestras un enlace oficial y seguro \`wa.me/57...\` en tu perfil de Instagram, TikTok o Facebook.
4. **Agilidad en la respuesta comercial:** Recibes mensajes estructurados donde el usuario ya te indica qué producto, servicio o cotización requiere.

### Código QR para comercios y establecimientos en Colombia

Nuestra herramienta crea un código QR de alta definición listo para imprimir:
- **Locales comerciales y vitrinas:** Colócalo en la entrada o mostrador de pago para que los clientes consulten promociones o catálogos digitales.
- **Empaques y domicilios:** Ideal para restaurantes y tiendas que despachan pedidos y desean recibir retroalimentación o nuevos pedidos directos.
- **Tarjetas de presentación:** Permite a tus prospectos contactarte inmediatamente en ferias y eventos de negocios sin escribir el número manual.`,
  examples: [
    {
      title: 'Enlace para Emprendimiento en Instagram',
      scenario: 'Tienda de ropa en Medellín que vende a través de historias de Instagram.',
      inputs: {
        'Celular': '310 123 4567',
        'Mensaje': '¡Hola! Quisiera información y catálogo de productos disponibles.',
      },
      breakdown: [
        { item: 'Indicativo Colombia', amount: '+57', note: 'Código de país' },
        { item: 'Enlace corto', amount: 'wa.me/573101234567', note: 'Apto para Instagram Bio' },
      ],
      total: 'https://wa.me/573101234567?text=%C2%A1Hola!%20...',
    },
    {
      title: 'Código QR para Restaurante y Domicilios',
      scenario: 'Restaurante en Bogotá que reparte volantes con código QR directo a pedidos de WhatsApp.',
      inputs: {
        'Celular': '320 987 6543',
        'Mensaje': '¡Hola! Quisiera consultar la carta del día para hacer un pedido.',
      },
      breakdown: [
        { item: 'Formato de descarga', amount: 'Archivo PNG en alta definición', note: 'Descarga gratuita' },
        { item: 'Lectura', amount: 'Compatible con cámara de cualquier celular', note: 'Sin apps externas' },
      ],
      total: 'Código QR listo para impresión de volantes',
    },
  ],
  faqs: [
    {
      q: '¿Generar el link de WhatsApp tiene algún costo?',
      a: 'No. Esta herramienta de Calcula es 100% gratuita, sin límites en la cantidad de links que puedes crear y sin registro de usuario.',
    },
    {
      q: '¿El enlace creado tiene fecha de vencimiento?',
      a: 'No. El link wa.me es permanente y funcionará de manera indefinida mientras la línea celular asociada permanezca activa en WhatsApp.',
    },
    {
      q: '¿Funciona con números personales o solo con WhatsApp Business?',
      a: 'Funciona exactamente igual tanto con cuentas personales de WhatsApp como con cuentas profesionales de WhatsApp Business.',
    },
    {
      q: '¿Cómo pongo el enlace en la biografía de Instagram?',
      a: 'Abre tu perfil de Instagram en el celular, presiona "Editar perfil", selecciona "Enlaces" > "Agregar enlace externo" y pega el link wa.me generado.',
    },
    {
      q: '¿Mis datos personales o el número quedan guardados en la web?',
      a: 'No. El cálculo y armado del enlace y del código QR se realiza exclusivamente en tu navegador de internet. Ningún dato se guarda en servidores.',
    },
    {
      q: '¿Cómo añado un botón de WhatsApp en mi sitio web?',
      a: 'Simplemente copia el código HTML que aparece abajo del generador y pégalo en el editor de tu página web, tienda de Shopify o WordPress.',
    },
    {
      q: '¿El código QR se puede escanear con cualquier celular?',
      a: 'Sí. Todos los teléfonos Android e iPhone modernos pueden escanear el código QR directamente usando su cámara fotográfica habitual.',
    },
    {
      q: '¿Puedo usar el enlace en anuncios de Meta (Facebook e Instagram)?',
      a: 'Sí. Puedes pegar la URL directa en el campo de enlace de destino en tus anuncios para captar clientes en tu WhatsApp de forma directa.',
    },
  ],
  sources: [
    { label: 'Centro de ayuda de WhatsApp: Cómo usar el clic para chatear', url: 'https://faq.whatsapp.com/591339899867296/' },
    { label: 'WhatsApp Business: Plataforma oficial para empresas', url: 'https://business.whatsapp.com/' },
  ],
  relatedTools: [
    { title: 'Calculadora de Liquidación Laboral', path: '/co/calculadora-liquidacion/', description: 'Cálculo de cesantías, intereses, prima y vacaciones.' },
    { title: 'Calculadora de Salario Neto', path: '/co/calculadora-salario-neto/', description: 'Descuentos de salud, pensión y retención en la fuente.' },
    { title: 'Calculadora de Horas Extras Colombia', path: '/co/calculadora-horas-extras/', description: 'Recargos nocturnos, dominicales y festivos CST.' },
  ],
  relatedGuides: [
    { title: 'Cómo Calcular la Liquidación Laboral', path: '/co/calculadora-liquidacion/', description: 'Guía práctica con fórmulas y normativa del Código Sustantivo del Trabajo.' },
    { title: 'Reforma Laboral en Colombia: Cambios', path: '/co/reforma-laboral/', description: 'Novedades sobre recargos dominicales y reducción de jornada máxima.' },
  ],
  updatedAt: '2026-03-01',
};
