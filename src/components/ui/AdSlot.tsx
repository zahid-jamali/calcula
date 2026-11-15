'use client';

export interface AdSlotProps {
  id?: string;
  slotId?: string;
  name?: string;
  slotName?: string;
  adClient?: string;
  format?: 'auto' | 'rectangle' | 'horizontal' | 'vertical';
  responsive?: boolean;
  minHeight?: string;
  className?: string;
  showPlaceholderInDev?: boolean;
}

/**
 * AdSlot component.
 * Currently disabled to ensure a 100% clean, professional, distraction-free
 * launch experience. When ready to activate ads (e.g. Adsterra or direct network),
 * place the ad tag code inside this component.
 */
export function AdSlot(_props: AdSlotProps) {
  // Ads are currently disabled per product requirements
  return null;
}
