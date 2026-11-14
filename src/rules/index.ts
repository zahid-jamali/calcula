import { CountryCode } from '@/config/site';
import { CountryRulesMap } from './types';
import { br2026 } from './br/2026';
import { mx2026 } from './mx/2026';
import { co2026 } from './co/2026';
import { cl2026 } from './cl/2026';

export * from './types';

export function getRules<C extends CountryCode>(
  country: C,
  date: Date | string = new Date()
): CountryRulesMap[C] {
  const targetDate = typeof date === 'string' ? new Date(date) : date;
  const _year = isNaN(targetDate.getFullYear()) ? 2026 : targetDate.getFullYear();

  // Future years can easily be added here as new versioned rule files
  switch (country) {
    case 'br':
      return br2026 as CountryRulesMap[C];
    case 'mx':
      return mx2026 as CountryRulesMap[C];
    case 'co':
      return co2026 as CountryRulesMap[C];
    case 'cl':
      return cl2026 as CountryRulesMap[C];
    default:
      throw new Error(`Unsupported country code: ${country}`);
  }
}
