'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Button, ButtonProps } from './Button';

export interface CopyButtonProps {
  text: string | (() => string);
  label?: string;
  copiedLabel?: string;
  variant?: ButtonProps['variant'];
  size?: ButtonProps['size'];
  className?: string;
  onCopy?: () => void;
}

export function CopyButton({
  text,
  label = 'Copiar resultado',
  copiedLabel = 'Copiado!',
  variant = 'outline',
  size = 'sm',
  className = '',
  onCopy,
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleCopy = async () => {
    const content = typeof text === 'function' ? text() : text;

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(content);
      } else {
        // Fallback for non-https or older browsers
        const textArea = document.createElement('textarea');
        textArea.value = content;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
      }

      setCopied(true);
      if (onCopy) onCopy();

      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy to clipboard', err);
    }
  };

  return (
    <div className="relative inline-flex">
      <Button
        variant={copied ? 'secondary' : variant}
        size={size}
        onClick={handleCopy}
        className={`transition-all duration-200 ${
          copied
            ? '!bg-emerald-50 !text-emerald-700 !border-emerald-300 dark:!bg-emerald-950/60 dark:!text-emerald-300 dark:!border-emerald-800'
            : ''
        } ${className}`}
        aria-label={copied ? copiedLabel : label}
        leftIcon={
          copied ? (
            <svg
              className="w-4 h-4 text-emerald-600 dark:text-emerald-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          ) : (
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
                d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
              />
            </svg>
          )
        }
      >
        <span>{copied ? copiedLabel : label}</span>
      </Button>

      {/* Screen reader live notification */}
      <span className="sr-only" role="status" aria-live="polite">
        {copied ? copiedLabel : ''}
      </span>
    </div>
  );
}
