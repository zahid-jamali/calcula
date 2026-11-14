'use client';

import React, { useId } from 'react';
import { parseLocalizedNumber } from '@/lib/format';

export interface MoneyInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {
  label: string;
  currencySymbol?: string;
  value?: string | number;
  defaultValue?: string | number;
  onChangeValue?: (numericValue: number, rawString: string) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  hint?: string;
  helpText?: string;
}

export const MoneyInput = React.forwardRef<HTMLInputElement, MoneyInputProps>(
  (
    {
      id: customId,
      label,
      currencySymbol = 'R$',
      value,
      defaultValue,
      onChangeValue,
      onChange,
      error,
      hint,
      helpText,
      disabled,
      required,
      className = '',
      placeholder = '0,00',
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const inputId = customId || generatedId;
    const errorId = `${inputId}-error`;
    const hintId = `${inputId}-hint`;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const raw = e.target.value;
      if (onChange) {
        onChange(e);
      }
      if (onChangeValue) {
        const num = parseLocalizedNumber(raw);
        onChangeValue(num, raw);
      }
    };

    return (
      <div className={`w-full ${className}`}>
        <label
          htmlFor={inputId}
          className="block text-sm font-semibold text-slate-800 dark:text-slate-200 mb-1.5"
        >
          {label}
          {required && (
            <span className="text-red-500 ml-1" aria-hidden="true">
              *
            </span>
          )}
        </label>

        <div className="relative rounded-xl shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 z-10">
            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
              {currencySymbol}
            </span>
          </div>

          <input
            ref={ref}
            id={inputId}
            type="text"
            inputMode="decimal"
            disabled={disabled}
            required={required}
            value={value !== undefined ? String(value) : undefined}
            defaultValue={defaultValue !== undefined ? String(defaultValue) : undefined}
            onChange={handleChange}
            placeholder={placeholder}
            aria-invalid={Boolean(error)}
            aria-describedby={
              [error ? errorId : null, hint ? hintId : null]
                .filter(Boolean)
                .join(' ') || undefined
            }
            className={`block w-full min-h-[44px] rounded-xl pl-16 pr-4 py-2.5 text-base sm:text-sm font-medium
              bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100
              border transition-all duration-150
              placeholder:text-slate-400 dark:placeholder:text-slate-500
              focus:outline-none focus:ring-2 focus:ring-offset-1 dark:focus:ring-offset-slate-900
              disabled:bg-slate-50 dark:disabled:bg-slate-800/50 disabled:text-slate-400 disabled:cursor-not-allowed
              ${
                error
                  ? 'border-red-400 dark:border-red-500 focus:border-red-500 focus:ring-red-400/50'
                  : 'border-slate-300 dark:border-slate-700 focus:border-brand-600 focus:ring-brand-500/30'
              }`}
            {...props}
          />
        </div>

        {(hint || helpText) && !error && (
          <p id={hintId} className="mt-1.5 text-xs text-slate-500 dark:text-slate-400">
            {hint || helpText}
          </p>
        )}

        {error && (
          <p
            id={errorId}
            role="alert"
            className="mt-1.5 text-xs font-medium text-red-600 dark:text-red-400 flex items-center gap-1"
          >
            <svg
              className="w-3.5 h-3.5 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            {error}
          </p>
        )}
      </div>
    );
  }
);

MoneyInput.displayName = 'MoneyInput';
