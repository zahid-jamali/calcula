'use client';

import React, { useId, useState } from 'react';

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: React.ReactNode;
  description?: React.ReactNode;
  tooltip?: string;
  helpTooltip?: string;
  error?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      id: customId,
      label,
      description,
      tooltip,
      helpTooltip,
      error,
      disabled,
      className = '',
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const checkboxId = customId || generatedId;
    const descriptionId = `${checkboxId}-desc`;
    const tooltipId = `${checkboxId}-tooltip`;
    const [showTooltip, setShowTooltip] = useState(false);
    const effectiveTooltip = tooltip || helpTooltip;

    return (
      <div className={`w-full ${className}`}>
        <div className="relative flex items-start gap-3 min-h-[44px] py-1.5 cursor-pointer">
          <div className="flex items-center h-6">
            <input
              ref={ref}
              id={checkboxId}
              type="checkbox"
              disabled={disabled}
              aria-describedby={
                [description ? descriptionId : null, effectiveTooltip ? tooltipId : null]
                  .filter(Boolean)
                  .join(' ') || undefined
              }
              aria-invalid={Boolean(error)}
              className="w-5 h-5 rounded-md border-slate-300 dark:border-slate-700 text-brand-900 
                focus:ring-2 focus:ring-brand-600 focus:ring-offset-2 dark:focus:ring-offset-slate-900 
                disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              {...props}
            />
          </div>

          <div className="flex-1 select-none">
            <div className="flex items-center gap-1.5 flex-wrap">
              <label
                htmlFor={checkboxId}
                className={`text-sm font-medium cursor-pointer ${
                  disabled
                    ? 'text-slate-400 dark:text-slate-500'
                    : 'text-slate-800 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {label}
              </label>

              {effectiveTooltip && (
                <div className="relative inline-block">
                  <button
                    type="button"
                    aria-label="Ajuda e detalhes"
                    aria-describedby={tooltipId}
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                    onFocus={() => setShowTooltip(true)}
                    onBlur={() => setShowTooltip(false)}
                    className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-brand-500 rounded-full"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>

                  <div
                    id={tooltipId}
                    role="tooltip"
                    className={
                      showTooltip
                        ? 'absolute z-30 bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-2.5 bg-slate-900 text-white text-xs rounded-xl shadow-lg leading-relaxed pointer-events-none'
                        : 'sr-only'
                    }
                  >
                    {effectiveTooltip}
                    {showTooltip && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900" />
                    )}
                  </div>
                </div>
              )}
            </div>

            {description && (
              <p
                id={descriptionId}
                className="mt-0.5 text-xs text-slate-500 dark:text-slate-400 leading-normal"
              >
                {description}
              </p>
            )}

            {error && (
              <p
                role="alert"
                className="mt-1 text-xs font-medium text-red-600 dark:text-red-400"
              >
                {error}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';
