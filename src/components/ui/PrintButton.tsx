'use client';

import React from 'react';
import { Button, ButtonProps } from './Button';

export interface PrintButtonProps {
  label?: string;
  variant?: ButtonProps['variant'];
  size?: ButtonProps['size'];
  className?: string;
}

export function PrintButton({
  label = 'Imprimir cálculo',
  variant = 'outline',
  size = 'sm',
  className = '',
}: PrintButtonProps) {
  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handlePrint}
      className={`no-print ${className}`}
      aria-label={`${label} (abre janela de impressão)`}
      leftIcon={
        <svg
          className="w-4 h-4 text-current"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
          />
        </svg>
      }
    >
      <span>{label}</span>
    </Button>
  );
}
