'use client';

import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui';
import {
  COUNTRY_PHONE_CONFIGS,
  validatePhoneNumber,
  buildWhatsAppLink,
  generateQrCodeSvg,
  generateQrCodeDataUrl,
  generateHtmlSnippet,
} from '@/lib/whatsapp';

export interface WhatsAppLinkGeneratorProps {
  country: 'br' | 'mx' | 'co' | 'cl';
}

const TEMPLATES: Record<
  'pt' | 'es',
  Array<{ label: string; text: string }>
> = {
  pt: [
    { label: 'Informações gerais', text: 'Olá! Gostaria de mais informações sobre seus serviços.' },
    { label: 'Solicitar orçamento', text: 'Olá! Gostaria de solicitar um orçamento personalizado.' },
    { label: 'Agendar horário', text: 'Olá! Gostaria de agendar um horário de atendimento.' },
    { label: 'Suporte e dúvidas', text: 'Olá! Preciso de ajuda ou suporte técnico.' },
  ],
  es: [
    { label: 'Información general', text: '¡Hola! Quisiera más información sobre sus servicios.' },
    { label: 'Cotización o presupuesto', text: '¡Hola! Me gustaría solicitar una cotización.' },
    { label: 'Agendar cita', text: '¡Hola! Quisiera agendar una cita de atención.' },
    { label: 'Soporte y atención', text: '¡Hola! Necesito asistencia con mi consulta o pedido.' },
  ],
};

const LABELS = {
  br: {
    countryLabel: 'País do número',
    phoneLabel: 'Número do WhatsApp',
    messageLabel: 'Mensagem personalizada (opcional)',
    templatesLabel: 'Modelos de mensagem rápidos',
    selectTemplate: '-- Escolha um modelo ou digite abaixo --',
    bioLabel: 'Link curto para biografia do Instagram / TikTok',
    generatedLinkLabel: 'Seu link do WhatsApp pronto',
    qrCodeTitle: 'QR Code para impressão ou compartilhamento',
    downloadQr: 'Baixar QR Code (PNG)',
    testLink: 'Testar link no WhatsApp',
    copyLink: 'Copiar link',
    copied: 'Copiado!',
    htmlLabel: 'Código HTML para botão no seu site',
    copyHtml: 'Copiar código HTML',
    buttonText: 'Fale Conosco pelo WhatsApp',
  },
  es: {
    countryLabel: 'País del número',
    phoneLabel: 'Número de WhatsApp',
    messageLabel: 'Mensaje predeterminado (opcional)',
    templatesLabel: 'Plantillas rápidas de mensaje',
    selectTemplate: '-- Elige una plantilla o escribe abajo --',
    bioLabel: 'Enlace corto para biografía de Instagram / TikTok',
    generatedLinkLabel: 'Tu enlace de WhatsApp listo',
    qrCodeTitle: 'Código QR para imprimir o escanear',
    downloadQr: 'Descargar QR Code (PNG)',
    testLink: 'Probar enlace en WhatsApp',
    copyLink: 'Copiar enlace',
    copied: '¡Copiado!',
    htmlLabel: 'Código HTML para botón en tu sitio web',
    copyHtml: 'Copiar código HTML',
    buttonText: 'Contáctanos por WhatsApp',
  },
};

export function WhatsAppLinkGenerator({ country }: WhatsAppLinkGeneratorProps) {
  const lang = country === 'br' ? 'pt' : 'es';
  const t = LABELS[country === 'br' ? 'br' : 'es'];
  const templates = TEMPLATES[lang];

  const [selectedCountry, setSelectedCountry] = useState<string>(country);
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [qrSvg, setQrSvg] = useState<string>('');
  const [copiedLink, setCopiedLink] = useState<boolean>(false);
  const [copiedBio, setCopiedBio] = useState<boolean>(false);
  const [copiedHtml, setCopiedHtml] = useState<boolean>(false);

  const phoneConfig = COUNTRY_PHONE_CONFIGS[selectedCountry] || COUNTRY_PHONE_CONFIGS[country];
  const validation = validatePhoneNumber(phoneNumber, selectedCountry);
  const waLink = validation.isValid ? buildWhatsAppLink(phoneNumber, message, selectedCountry) : '';
  const bioLink = validation.isValid ? `wa.me/${validation.fullInternationalNumber}` : '';
  const htmlCode = waLink ? generateHtmlSnippet(waLink, t.buttonText) : '';

  useEffect(() => {
    let isCancelled = false;
    if (waLink) {
      generateQrCodeSvg(waLink).then((svg) => {
        if (!isCancelled) setQrSvg(svg);
      });
    } else {
      setQrSvg('');
    }
    return () => {
      isCancelled = true;
    };
  }, [waLink]);

  const handleCopy = async (text: string, type: 'link' | 'bio' | 'html') => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === 'link') {
        setCopiedLink(true);
        setTimeout(() => setCopiedLink(false), 2000);
      } else if (type === 'bio') {
        setCopiedBio(true);
        setTimeout(() => setCopiedBio(false), 2000);
      } else if (type === 'html') {
        setCopiedHtml(true);
        setTimeout(() => setCopiedHtml(false), 2000);
      }
    } catch {
      // fallback
    }
  };

  const handleDownloadQr = async () => {
    if (!waLink) return;
    const dataUrl = await generateQrCodeDataUrl(waLink);
    const downloadAnchor = document.createElement('a');
    downloadAnchor.href = dataUrl;
    downloadAnchor.download = `whatsapp-qr-${validation.fullInternationalNumber || 'link'}.png`;
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    document.body.removeChild(downloadAnchor);
  };

  return (
    <div className="space-y-6">
      <Card className="p-4 sm:p-6 bg-white border-slate-200 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
          <span>📲</span> {t.phoneLabel}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              {t.countryLabel}
            </label>
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
            >
              <option value="br">🇧🇷 Brasil (+55)</option>
              <option value="mx">🇲🇽 México (+52)</option>
              <option value="co">🇨🇴 Colombia (+57)</option>
              <option value="cl">🇨🇱 Chile (+56)</option>
              <option value="pe">🇵🇪 Perú (+51)</option>
              <option value="ar">🇦🇷 Argentina (+54)</option>
              <option value="es">🇪🇸 España (+34)</option>
              <option value="us">🇺🇸 USA / Canadá (+1)</option>
            </select>
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              {t.phoneLabel}
            </label>
            <div className="relative flex rounded-md shadow-sm">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-slate-300 bg-slate-50 text-slate-600 text-sm font-medium">
                +{phoneConfig.code}
              </span>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder={phoneConfig.placeholder}
                className="flex-1 block w-full min-w-0 rounded-none rounded-r-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
              />
            </div>
            <p className="text-xs text-slate-500 mt-1">{phoneConfig.hint}</p>
            {phoneNumber && !validation.isValid && validation.error && (
              <p className="text-xs text-amber-600 font-medium mt-1">⚠️ {validation.error}</p>
            )}
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-slate-700 mb-1">
            {t.templatesLabel}
          </label>
          <select
            defaultValue=""
            onChange={(e) => {
              if (e.target.value) {
                setMessage(e.target.value);
              }
            }}
            className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
          >
            <option value="">{t.selectTemplate}</option>
            {templates.map((tpl, i) => (
              <option key={i} value={tpl.text}>
                {tpl.label}: &quot;{tpl.text}&quot;
              </option>
            ))}
          </select>
        </div>

        <div>
          <div className="flex justify-between items-center mb-1">
            <label className="block text-sm font-semibold text-slate-700">
              {t.messageLabel}
            </label>
            <span className="text-xs text-slate-400">{message.length} caracteres</span>
          </div>
          <textarea
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={
              lang === 'pt'
                ? 'Ex: Olá! Vi seu anúncio e gostaria de agendar uma consulta.'
                : 'Ej: ¡Hola! Vi su publicación y me gustaría solicitar una cotización.'
            }
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
          />
        </div>
      </Card>

      {/* Results / Link output */}
      {validation.isValid && waLink && (
        <Card className="p-4 sm:p-6 bg-emerald-50/50 border-emerald-200 shadow-sm space-y-6">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-bold text-emerald-950 flex items-center gap-1.5">
                <span>🔗</span> {t.generatedLinkLabel}
              </span>
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-100 text-emerald-800">
                100% Gratuito
              </span>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                readOnly
                value={waLink}
                className="flex-1 bg-white border border-emerald-300 rounded px-3 py-2 text-sm text-slate-800 font-mono select-all focus:outline-none"
              />
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => handleCopy(waLink, 'link')}
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm rounded shadow-sm transition-colors flex items-center justify-center gap-1.5 min-w-[120px]"
                >
                  {copiedLink ? '✓ ' + t.copied : '📋 ' + t.copyLink}
                </button>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm rounded shadow-sm transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap"
                >
                  ↗ {t.testLink}
                </a>
              </div>
            </div>
          </div>

          {/* Social Bio link */}
          <div className="pt-4 border-t border-emerald-200/80">
            <label className="block text-xs font-semibold text-emerald-900 mb-1">
              📱 {t.bioLabel}
            </label>
            <div className="flex items-center gap-2">
              <code className="bg-white px-3 py-1.5 rounded border border-emerald-300 text-xs text-slate-800 font-mono flex-1">
                {bioLink}
              </code>
              <button
                type="button"
                onClick={() => handleCopy(bioLink, 'bio')}
                className="px-3 py-1.5 bg-white hover:bg-emerald-100 text-emerald-900 border border-emerald-300 font-medium text-xs rounded transition-colors"
              >
                {copiedBio ? '✓ ' + t.copied : t.copyLink}
              </button>
            </div>
          </div>

          {/* QR Code and Web Embed */}
          <div className="pt-4 border-t border-emerald-200/80 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* QR Code */}
            <div className="flex flex-col sm:flex-row items-center gap-4 bg-white p-4 rounded-lg border border-emerald-200">
              {qrSvg ? (
                <div
                  className="w-32 h-32 flex-shrink-0 bg-white p-1 rounded border border-slate-200 shadow-sm"
                  dangerouslySetInnerHTML={{ __html: qrSvg }}
                />
              ) : (
                <div className="w-32 h-32 bg-slate-100 animate-pulse rounded" />
              )}
              <div className="space-y-2 text-center sm:text-left">
                <h4 className="text-xs font-bold text-slate-900">{t.qrCodeTitle}</h4>
                <p className="text-xs text-slate-600">
                  {lang === 'pt'
                    ? 'Escaneie com a câmera do celular ou baixe em alta resolução para imprimir em panfletos e cartões.'
                    : 'Escanea con la cámara del celular o descárgalo en alta resolución para folletos y tarjetas de presentación.'}
                </p>
                <button
                  type="button"
                  onClick={handleDownloadQr}
                  className="inline-flex items-center gap-1 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-medium rounded shadow-sm transition-colors"
                >
                  📥 {t.downloadQr}
                </button>
              </div>
            </div>

            {/* HTML Button snippet */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-slate-900">🌐 {t.htmlLabel}</span>
                <button
                  type="button"
                  onClick={() => handleCopy(htmlCode, 'html')}
                  className="text-xs text-emerald-700 hover:underline font-medium"
                >
                  {copiedHtml ? '✓ ' + t.copied : t.copyHtml}
                </button>
              </div>
              <textarea
                readOnly
                rows={4}
                value={htmlCode}
                className="w-full bg-slate-900 text-slate-100 p-2 text-xs font-mono rounded border border-slate-700 select-all"
              />
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}
