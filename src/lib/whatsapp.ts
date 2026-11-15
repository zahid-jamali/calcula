import QRCode from 'qrcode';

export interface CountryPhoneConfig {
  code: string; // e.g. "55", "56", "52", "57"
  name: string;
  flag: string;
  minLength: number;
  maxLength: number;
  placeholder: string;
  hint: string;
}

export const COUNTRY_PHONE_CONFIGS: Record<string, CountryPhoneConfig> = {
  br: {
    code: '55',
    name: 'Brasil',
    flag: '🇧🇷',
    minLength: 10,
    maxLength: 11,
    placeholder: '11999998888',
    hint: 'DDD + 9 dígitos (ex: 11999998888)',
  },
  mx: {
    code: '52',
    name: 'México',
    flag: '🇲🇽',
    minLength: 10,
    maxLength: 10,
    placeholder: '5512345678',
    hint: '10 dígitos con clave lada (ex: 5512345678)',
  },
  co: {
    code: '57',
    name: 'Colombia',
    flag: '🇨🇴',
    minLength: 10,
    maxLength: 10,
    placeholder: '3001234567',
    hint: '10 dígitos celular (ex: 3001234567)',
  },
  cl: {
    code: '56',
    name: 'Chile',
    flag: '🇨🇱',
    minLength: 9,
    maxLength: 9,
    placeholder: '912345678',
    hint: '9 dígitos celular (ex: 912345678)',
  },
  us: {
    code: '1',
    name: 'Estados Unidos',
    flag: '🇺🇸',
    minLength: 10,
    maxLength: 10,
    placeholder: '2025550123',
    hint: '10 dígitos (area code + número)',
  },
  es: {
    code: '34',
    name: 'España',
    flag: '🇪🇸',
    minLength: 9,
    maxLength: 9,
    placeholder: '612345678',
    hint: '9 dígitos (ex: 612345678)',
  },
  ar: {
    code: '54',
    name: 'Argentina',
    flag: '🇦🇷',
    minLength: 10,
    maxLength: 11,
    placeholder: '91123456789',
    hint: 'Código de área + número',
  },
  pe: {
    code: '51',
    name: 'Perú',
    flag: '🇵🇪',
    minLength: 9,
    maxLength: 9,
    placeholder: '912345678',
    hint: '9 dígitos celular',
  },
};

/**
 * Cleans phone number by stripping spaces, dashes, parentheses, plus signs and leading zero.
 */
export function cleanPhoneNumber(raw: string): string {
  if (!raw) return '';
  // Remove non-digit characters
  let cleaned = raw.replace(/\D/g, '');
  // Remove leading 0 if present (e.g., 0912345678 -> 912345678)
  if (cleaned.startsWith('0')) {
    cleaned = cleaned.substring(1);
  }
  return cleaned;
}

export interface ValidatePhoneResult {
  isValid: boolean;
  cleanedNumber: string;
  fullInternationalNumber: string;
  error?: string;
}

export function validatePhoneNumber(
  rawPhone: string,
  countryKey = 'br'
): ValidatePhoneResult {
  const config = COUNTRY_PHONE_CONFIGS[countryKey] || COUNTRY_PHONE_CONFIGS.br;
  const cleaned = cleanPhoneNumber(rawPhone);

  if (!cleaned) {
    return {
      isValid: false,
      cleanedNumber: '',
      fullInternationalNumber: '',
      error: 'El número de teléfono es obligatorio.',
    };
  }

  if (cleaned.length < config.minLength) {
    return {
      isValid: false,
      cleanedNumber: cleaned,
      fullInternationalNumber: `${config.code}${cleaned}`,
      error: `El número debe tener al menos ${config.minLength} dígitos.`,
    };
  }

  if (cleaned.length > config.maxLength) {
    return {
      isValid: false,
      cleanedNumber: cleaned,
      fullInternationalNumber: `${config.code}${cleaned}`,
      error: `El número no puede exceder ${config.maxLength} dígitos.`,
    };
  }

  return {
    isValid: true,
    cleanedNumber: cleaned,
    fullInternationalNumber: `${config.code}${cleaned}`,
  };
}

/**
 * Generates official WhatsApp wa.me link
 */
export function buildWhatsAppLink(
  rawPhone: string,
  message = '',
  countryKey = 'br'
): string {
  const config = COUNTRY_PHONE_CONFIGS[countryKey] || COUNTRY_PHONE_CONFIGS.br;
  const cleaned = cleanPhoneNumber(rawPhone);
  if (!cleaned) return '';

  const fullNumber = `${config.code}${cleaned}`;
  const trimmedMsg = message.trim();

  if (!trimmedMsg) {
    return `https://wa.me/${fullNumber}`;
  }

  return `https://wa.me/${fullNumber}?text=${encodeURIComponent(trimmedMsg)}`;
}

/**
 * Generates an SVG string representation of the QR code
 */
export async function generateQrCodeSvg(text: string): Promise<string> {
  if (!text) return '';
  return await QRCode.toString(text, {
    type: 'svg',
    margin: 1,
    color: {
      dark: '#0f172a', // slate-900
      light: '#ffffff',
    },
  });
}

/**
 * Generates a data URL (PNG) representation of the QR code for download
 */
export async function generateQrCodeDataUrl(text: string): Promise<string> {
  if (!text) return '';
  return await QRCode.toDataURL(text, {
    margin: 1,
    width: 320,
    color: {
      dark: '#0f172a',
      light: '#ffffff',
    },
  });
}

export function generateHtmlSnippet(
  url: string,
  buttonText = 'Chame no WhatsApp'
): string {
  return `<a href="${url}" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:8px;background-color:#25D366;color:#ffffff;font-weight:bold;padding:12px 24px;border-radius:9999px;text-decoration:none;font-family:sans-serif;">
  <span>💬</span> ${buttonText}
</a>`;
}
