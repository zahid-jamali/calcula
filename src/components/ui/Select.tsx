'use client';

import React, { useId } from 'react';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options?: SelectOption[];
  placeholder?: string;
  error?: string;
  hint?: string;
  helpText?: string;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      id: customId,
      label,
      options,
      placeholder,
      error,
      hint,
      helpText,
      disabled,
      required,
      children,
      className = '',
      value,
      defaultValue,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const selectId = customId || generatedId;
    const errorId = `${selectId}-error`;
    const hintId = `${selectId}-hint`;

    return (
      <div className={`w-full ${className}`}>
        <label
          htmlFor={selectId}
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
          <select
            ref={ref}
            id={selectId}
            disabled={disabled}
            required={required}
            value={value}
            defaultValue={defaultValue}
            aria-invalid={Boolean(error)}
            aria-describedby={
              [error ? errorId : null, hint ? hintId : null]
                .filter(Boolean)
                .join(' ') || undefined
            }
            className={`block w-full min-h-[44px] rounded-xl pl-4 pr-10 py-2.5 text-base sm:text-sm font-medium
              bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100
              border transition-all duration-150 appearance-none cursor-pointer
              focus:outline-none focus:ring-2 focus:ring-offset-1 dark:focus:ring-offset-slate-900
              disabled:bg-slate-50 dark:disabled:bg-slate-800/50 disabled:text-slate-400 disabled:cursor-not-allowed
              ${
                error
                  ? 'border-red-400 dark:border-red-500 focus:border-red-500 focus:ring-red-400/50'
                  : 'border-slate-300 dark:border-slate-700 focus:border-brand-600 focus:ring-brand-500/30'
              }`}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options
              ? options.map((opt) => (
                  <option key={opt.value} value={opt.value} disabled={opt.disabled}>
                    {opt.label}
                  </option>
                ))
              : children}
          </select>

          {/* Custom Chevron Arrow */}
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 dark:text-slate-500">
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </div>
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

Select.displayName = 'Select';
