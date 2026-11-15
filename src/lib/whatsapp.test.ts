import { describe, it, expect } from 'vitest';
import {
  cleanPhoneNumber,
  validatePhoneNumber,
  buildWhatsAppLink,
  generateQrCodeSvg,
  generateQrCodeDataUrl,
  generateHtmlSnippet,
} from './whatsapp';

describe('WhatsApp Link & QR Generator', () => {
  it('1. cleans phone number removing dashes, spaces, brackets and leading zero', () => {
    expect(cleanPhoneNumber('(11) 99999-8888')).toBe('11999998888');
    expect(cleanPhoneNumber('+56 09 1234 5678')).toBe('560912345678');
    expect(cleanPhoneNumber('0912345678')).toBe('912345678');
  });

  it('2. validates length for Chile (9 digits)', () => {
    const valid = validatePhoneNumber('912345678', 'cl');
    expect(valid.isValid).toBe(true);
    expect(valid.fullInternationalNumber).toBe('56912345678');

    const invalidShort = validatePhoneNumber('91234567', 'cl');
    expect(invalidShort.isValid).toBe(false);

    const invalidLong = validatePhoneNumber('9123456789', 'cl');
    expect(invalidLong.isValid).toBe(false);
  });

  it('3. validates length for Brazil (10-11 digits) and Mexico (10 digits)', () => {
    const validBr = validatePhoneNumber('11987654321', 'br');
    expect(validBr.isValid).toBe(true);
    expect(validBr.fullInternationalNumber).toBe('5511987654321');

    const validMx = validatePhoneNumber('5512345678', 'mx');
    expect(validMx.isValid).toBe(true);
    expect(validMx.fullInternationalNumber).toBe('525512345678');
  });

  it('4. builds official wa.me link with URL encoded message and emojis', () => {
    const link = buildWhatsAppLink(
      '912345678',
      '¡Hola! Quisiera cotizar un servicio 💼✨',
      'cl'
    );
    expect(link).toContain('https://wa.me/56912345678?text=');
    expect(link).toContain(encodeURIComponent('¡Hola! Quisiera cotizar un servicio 💼✨'));
  });

  it('5. builds link without text parameter when message is empty', () => {
    const link = buildWhatsAppLink('912345678', '   ', 'cl');
    expect(link).toBe('https://wa.me/56912345678');
  });

  it('6. generates SVG string containing valid xml/svg tags', async () => {
    const svg = await generateQrCodeSvg('https://wa.me/56912345678');
    expect(svg).toContain('<svg');
    expect(svg).toContain('</svg>');
  });

  it('7. generates PNG data URL for direct download', async () => {
    const dataUrl = await generateQrCodeDataUrl('https://wa.me/56912345678');
    expect(dataUrl.startsWith('data:image/png;base64,')).toBe(true);
  });

  it('8. creates HTML button snippet for website copy-paste', () => {
    const snippet = generateHtmlSnippet('https://wa.me/56912345678', 'Contáctanos');
    expect(snippet).toContain('href="https://wa.me/56912345678"');
    expect(snippet).toContain('Contáctanos');
  });
});
