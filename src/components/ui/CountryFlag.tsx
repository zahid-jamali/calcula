import React from 'react';
import { CountryCode } from '@/config/site';

interface CountryFlagProps {
  country: CountryCode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function CountryFlag({ country, className = '', size = 'md' }: CountryFlagProps) {
  const sizeClasses = {
    sm: 'w-5 h-3.5 rounded-xs',
    md: 'w-7 h-5 rounded-xs',
    lg: 'w-9 h-6.5 rounded-sm',
    xl: 'w-12 h-8.5 rounded-sm',
  };

  const baseStyle = `inline-block shrink-0 shadow-xs border border-slate-200/80 object-cover overflow-hidden ${sizeClasses[size]} ${className}`;

  switch (country) {
    case 'br':
      return (
        <svg
          viewBox="0 0 720 504"
          className={baseStyle}
          aria-label="Bandeira do Brasil"
          role="img"
        >
          <rect width="720" height="504" fill="#009c3b" />
          <polygon points="360,42 660,252 360,462 60,252" fill="#ffdf00" />
          <circle cx="360" cy="252" r="126" fill="#002776" />
          <path
            d="M 234 252 A 126 126 0 0 1 486 252"
            fill="none"
            stroke="#ffffff"
            strokeWidth="18"
          />
        </svg>
      );

    case 'mx':
      return (
        <svg
          viewBox="0 0 980 560"
          className={baseStyle}
          aria-label="Bandera de México"
          role="img"
        >
          <rect width="326.6" height="560" fill="#006847" />
          <rect x="326.6" width="326.8" height="560" fill="#ffffff" />
          <rect x="653.4" width="326.6" height="560" fill="#ce1126" />
          {/* Central Emblem stylized */}
          <circle cx="490" cy="280" r="48" fill="#c49a45" opacity="0.9" />
          <path
            d="M 450 310 Q 490 325 530 310"
            fill="none"
            stroke="#006847"
            strokeWidth="8"
          />
        </svg>
      );

    case 'co':
      return (
        <svg
          viewBox="0 0 900 600"
          className={baseStyle}
          aria-label="Bandera de Colombia"
          role="img"
        >
          <rect width="900" height="300" fill="#fcd116" />
          <rect y="300" width="900" height="150" fill="#003893" />
          <rect y="450" width="900" height="150" fill="#ce1126" />
        </svg>
      );

    case 'cl':
      return (
        <svg
          viewBox="0 0 900 600"
          className={baseStyle}
          aria-label="Bandera de Chile"
          role="img"
        >
          <rect y="300" width="900" height="300" fill="#d52b1e" />
          <rect x="300" width="600" height="300" fill="#ffffff" />
          <rect width="300" height="300" fill="#0039a6" />
          {/* White Star */}
          <polygon
            points="150,85 168,140 225,140 179,174 196,229 150,195 104,229 121,174 75,140 132,140"
            fill="#ffffff"
          />
        </svg>
      );

    default:
      return null;
  }
}
