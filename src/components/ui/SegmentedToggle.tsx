'use client';

import React, { useId } from 'react';

export interface SegmentedToggleOption {
  value: string;
  label: string;
  icon?: React.ReactNode;
  description?: string;
  disabled?: boolean;
}

export interface SegmentedToggleProps {
  label?: string;
  options: SegmentedToggleOption[];
  value: string;
  onChange: (value: string) => void;
  name?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  error?: string;
  hint?: string;
  className?: string;
  id?: string;
}

export function SegmentedToggle({
  label,
  options,
  value,
  onChange,
  name,
  disabled = false,
  fullWidth = true,
  error,
  hint,
  className = '',
  id: customId,
}: SegmentedToggleProps) {
  const generatedId = useId();
  const toggleGroupId = customId || generatedId;
  const errorId = `${toggleGroupId}-error`;
  const hintId = `${toggleGroupId}-hint`;

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <span
          id={`${toggleGroupId}-label`}
          className="block text-sm font-semibold text-slate-800 dark:text-slate-200 mb-1.5"
        >
          {label}
        </span>
      )}

      <div
        role="radiogroup"
        aria-labelledby={label ? `${toggleGroupId}-label` : undefined}
        aria-describedby={
          [error ? errorId : null, hint ? hintId : null]
            .filter(Boolean)
            .join(' ') || undefined
        }
        className={`inline-flex p-1 bg-slate-100 dark:bg-slate-800/80 rounded-2xl border border-slate-200/80 dark:border-slate-700/60 gap-1 ${
          fullWidth ? 'w-full' : ''
        }`}
      >
        {options.map((option) => {
          const isSelected = value === option.value;
          const isOptionDisabled = disabled || option.disabled;

          return (
            <button
              key={option.value}
              type="button"
              role="radio"
              aria-checked={isSelected}
              disabled={isOptionDisabled}
              onClick={() => !isOptionDisabled && onChange(option.value)}
              className={`relative flex items-center justify-center gap-2 px-4 py-2 min-h-[44px] rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer select-none
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900
                disabled:opacity-40 disabled:cursor-not-allowed
                ${fullWidth ? 'flex-1' : ''}
                ${
                  isSelected
                    ? 'bg-brand-900 text-white shadow-sm hover:bg-brand-950 active:bg-brand-950'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-white/60 dark:hover:bg-slate-700/50'
                }`}
            >
              {option.icon && (
                <span className="inline-flex shrink-0 text-current" aria-hidden="true">
                  {option.icon}
                </span>
              )}
              <div className="flex flex-col text-center">
                <span>{option.label}</span>
                {option.description && (
                  <span
                    className={`text-[11px] font-normal mt-0.5 ${
                      isSelected
                        ? 'text-brand-100'
                        : 'text-slate-500 dark:text-slate-400'
                    }`}
                  >
                    {option.description}
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {hint && !error && (
        <p id={hintId} className="mt-1.5 text-xs text-slate-500 dark:text-slate-400">
          {hint}
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
