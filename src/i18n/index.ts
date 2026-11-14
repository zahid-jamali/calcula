import { CountryCode } from '@/config/site';
import { Translations } from './types';
import { ptBR } from './pt-BR';
import { esBase } from './es';
import { esMX } from './es-MX';
import { esCO } from './es-CO';
import { esCL } from './es-CL';

export * from './types';

export function getDictionary(country?: CountryCode): Translations {
  switch (country) {
    case 'br':
      return ptBR;
    case 'mx':
      return esMX;
    case 'co':
      return esCO;
    case 'cl':
      return esCL;
    default:
      return esBase;
  }
}
