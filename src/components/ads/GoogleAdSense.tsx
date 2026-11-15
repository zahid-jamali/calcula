import React from 'react';
import Script from 'next/script';

export function GoogleAdSense() {
  const adsenseId = process.env.NEXT_PUBLIC_ADSENSE_ID;
  const isProd = process.env.NODE_ENV === 'production';

  // Only load in production and when NEXT_PUBLIC_ADSENSE_ID is explicitly provided
  if (!isProd || !adsenseId) {
    return null;
  }

  return (
    <Script
      id="google-adsense"
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseId}`}
      strategy="afterInteractive"
      crossOrigin="anonymous"
    />
  );
}
