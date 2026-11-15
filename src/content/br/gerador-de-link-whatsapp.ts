import { PageContent } from '../types';

export const content: PageContent = {
  metaTitle: 'Gerador de Link WhatsApp Grátis com Mensagem e QR Code',
  metaDescription:
    'Crie seu link personalizado de WhatsApp wa.me com mensagem pronta, QR Code em alta resolução e botão para site ou Instagram. 100% grátis.',
  h1: 'Gerador de Link WhatsApp com Mensagem e QR Code',
  quickAnswer:
    'O gerador de link do WhatsApp cria um endereço curto (wa.me) que permite aos clientes iniciarem uma conversa com sua empresa em apenas um clique, sem precisar salvar o número na agenda telefônica. Inclui mensagem personalizada pré-definida e QR Code gratuito para impressão.',
  howItWorks: [
    {
      step: 1,
      title: 'Digite seu número com DDD',
      description:
        'Insira o DDD e o número do celular (ex: 11999998888). O código do país (+55) é adicionado automaticamente.',
      formula: 'https://wa.me/55[DDD][Número]',
    },
    {
      step: 2,
      title: 'Defina a mensagem padrão (opcional)',
      description:
        'Escreva o texto inicial que seu cliente enviará ao abrir o chat ou escolha um dos nossos modelos prontos de atendimento.',
      formula: '?text=Mensagem+Codificada',
    },
    {
      step: 3,
      title: 'Copie o link ou baixe o QR Code',
      description:
        'Use o link curto na bio do Instagram ou TikTok, incorpore o botão HTML no seu site ou baixe o QR Code em PNG para cartões.',
    },
  ],
  article: `## O que é um link de WhatsApp (wa.me) e para que serve?

O recurso oficial de links diretos do WhatsApp (tecnologia chamada *Click to Chat*) permite iniciar uma conversa com qualquer conta do WhatsApp ou WhatsApp Business sem que o usuário precise salvar o contato previamente no catálogo do smartphone.

Quando um cliente em potencial clica no link gerado, o aplicativo do WhatsApp abre instantaneamente no celular ou no computador (WhatsApp Web / Desktop) com o campo de texto preenchido com a mensagem personalizada que você definiu.

### Principais vantagens para empresas e profissionais autônomos

1. **Aumento imediato nas taxas de conversão:** Eliminar a etapa de salvar o contato remove a maior barreira de atrito entre ver um anúncio e falar com o vendedor.
2. **Organização dos canais de captação:** Ao usar mensagens diferentes para cada produto, anúncio ou rede social, você sabe exatamente de onde o cliente veio.
3. **Profissionalismo na biografia das redes:** Substitui números longos e confusos por um link curto e seguro (*wa.me*).
4. **Agilidade no atendimento:** O cliente já envia o assunto exato que procura, acelerando a resposta da sua equipe comercial.

### Como usar o QR Code gerado

O QR Code gerado nesta ferramenta utiliza a especificação vetorial direta do padrão wa.me. Você pode:
- Imprimir em **cartões de visita**, folhetos, cardápios e balcões de atendimento.
- Inserir na **embalagem de produtos** para facilitar o suporte pós-venda e avaliações.
- Usar em **apresentações e vídeos** para que a audiência aponte a câmera e fale com você na hora.`,
  examples: [
    {
      title: 'Link para Loja de Roupas no Instagram',
      scenario: 'Lojista em São Paulo quer colocar link na bio com mensagem para dúvidas de catálogo.',
      inputs: {
        'Número': '(11) 98765-4321',
        'Mensagem': 'Olá! Gostaria de consultar os tamanhos disponíveis do catálogo.',
      },
      breakdown: [
        { item: 'Formato internacional', amount: '5511987654321', note: 'Código do Brasil (55) + DDD (11)' },
        { item: 'Texto codificado', amount: '%20 (espaços convertidos)', note: 'Padrão RFC 3986' },
      ],
      total: 'https://wa.me/5511987654321?text=Ol%C3%A1!%20Gostaria...',
    },
    {
      title: 'QR Code para Balcão de Consultório',
      scenario: 'Clínica odontológica quer QR Code no balcão para agendamentos rápidos.',
      inputs: {
        'Número': '(21) 97654-3210',
        'Mensagem': 'Olá! Gostaria de agendar uma consulta odontológica.',
      },
      breakdown: [
        { item: 'Destino', amount: 'WhatsApp Business da clínica' },
        { item: 'Recurso', amount: 'Download de QR Code PNG em alta resolução' },
      ],
      total: 'QR Code pronto para impressão imediata',
    },
  ],
  faqs: [
    {
      q: 'O gerador de link de WhatsApp é gratuito?',
      a: 'Sim, a ferramenta do Calcula é 100% gratuita, sem limite de links, sem necessidade de cadastro e sem expiração dos links criados.',
    },
    {
      q: 'O link criado expira com o tempo?',
      a: 'Não. Os links diretos do WhatsApp (wa.me) são permanentes e não expiram, desde que seu número de telefone permaneça ativo.',
    },
    {
      q: 'Preciso ter WhatsApp Business para usar o link?',
      a: 'Não. O link funciona perfeitamente tanto no WhatsApp comum pessoal quanto no WhatsApp Business corporativo.',
    },
    {
      q: 'Como colocar o link do WhatsApp na bio do Instagram?',
      a: 'Acesse seu perfil no Instagram, clique em "Editar perfil", vá na seção "Links" > "Adicionar link externo", e cole a URL gerada (ex: wa.me/5511999998888).',
    },
    {
      q: 'Meus dados e número ficam salvos no site?',
      a: 'Não. Toda a geração do link e do QR Code é processada de forma 100% local no seu navegador. Nenhum número ou mensagem é armazenado em servidores.',
    },
    {
      q: 'Como colocar o botão de WhatsApp no meu site ou blog?',
      a: 'Basta copiar o trecho de código HTML fornecido na ferramenta e colar no código-fonte da sua página ou widget de rodapé.',
    },
    {
      q: 'Posso usar o link em anúncios do Facebook e Google Ads?',
      a: 'Sim. Você pode inserir o link wa.me diretamente como URL final ou nas extensões de anúncio para atrair conversas de vendas.',
    },
    {
      q: 'O QR Code funciona na câmera de qualquer celular?',
      a: 'Sim. Praticamente todos os smartphones Android e iOS lêem o QR Code diretamente pelo aplicativo nativo de câmera, abrindo o WhatsApp na mesma hora.',
    },
  ],
  sources: [
    { label: 'WhatsApp FAQ Oficial: Como usar o recurso Conversar com um clique', url: 'https://faq.whatsapp.com/591339899867296/' },
    { label: 'WhatsApp Business: Guia de Recursos e Links Curtos', url: 'https://business.whatsapp.com/' },
  ],
  relatedTools: [
    { title: 'Calculadora de Rescisão CLT', path: '/br/calculadora-rescisao/', description: 'Calcule aviso prévio, férias, 13º e multa do FGTS.' },
    { title: 'Calculadora de Salário Líquido', path: '/br/calculadora-salario-liquido/', description: 'Descontos de INSS e IRRF 2026 no contracheque.' },
    { title: 'Calculadora de Hora Extra', path: '/br/calculadora-hora-extra/', description: 'Cálculo de adicionais 50%, 100% e reflexo no DSR.' },
  ],
  relatedGuides: [
    { title: 'Como Calcular Rescisão Passo a Passo', path: '/br/guias/como-calcular-rescisao-passo-a-passo/', description: 'Guia completo de direitos trabalhistas na demissão.' },
    { title: 'Quando Cai o 13º Salário?', path: '/br/guias/quando-cai-o-13-salario/', description: 'Prazos legais da 1ª e 2ª parcelas do décimo terceiro.' },
  ],
  updatedAt: '2026-03-01',
};
