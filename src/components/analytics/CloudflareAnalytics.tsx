import React from 'react';
import Script from 'next/script';

export function CloudflareAnalytics() {
  const token = process.env.NEXT_PUBLIC_CF_ANALYTICS_TOKEN;

  // Cloudflare Web Analytics is cookieless and respects visitor privacy
  if (!token) {
    return null;
  }

  return (
    <Script
      id="cloudflare-analytics"
      strategy="afterInteractive"
      defer
      src="https://static.cloudflareinsights.com/beacon.min.js"
      data-cf-beacon={JSON.stringify({ token })}
    />
  );
}
