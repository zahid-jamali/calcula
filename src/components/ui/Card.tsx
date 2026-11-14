import React from 'react';

export interface CardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  as?: React.ElementType;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  header?: React.ReactNode;
  footer?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
}

const paddingStyles = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

export function Card({
  as: Component = 'div',
  padding = 'md',
  header,
  footer,
  title,
  description,
  children,
  className = '',
  ...props
}: CardProps) {
  const hasDedicatedHeader = header || title || description;

  return (
    <Component
      className={`bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm overflow-hidden transition-colors ${className}`}
      {...props}
    >
      {hasDedicatedHeader && (
        <div className={`border-b border-slate-100 dark:border-slate-800/80 ${padding === 'none' ? 'p-4' : paddingStyles[padding]}`}>
          {header ? (
            header
          ) : (
            <div>
              {title && (
                typeof title === 'string' ? (
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                    {title}
                  </h3>
                ) : (
                  title
                )
              )}
              {description && (
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  {description}
                </p>
              )}
            </div>
          )}
        </div>
      )}

      {children && (
        <div className={paddingStyles[padding]}>
          {children}
        </div>
      )}

      {footer && (
        <div className={`bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800 px-6 py-4 ${className.includes('p-') ? '' : ''}`}>
          {footer}
        </div>
      )}
    </Component>
  );
}

export function CardHeader({
  className = '',
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`px-6 pt-6 pb-4 border-b border-slate-100 dark:border-slate-800 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardTitle({
  as: Comp = 'h3',
  className = '',
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement> & { as?: React.ElementType }) {
  return (
    <Comp
      className={`text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-100 ${className}`}
      {...props}
    >
      {children}
    </Comp>
  );
}

export function CardDescription({
  className = '',
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={`mt-1 text-sm text-slate-500 dark:text-slate-400 ${className}`}
      {...props}
    >
      {children}
    </p>
  );
}

export function CardContent({
  className = '',
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`p-6 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({
  className = '',
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`px-6 py-4 bg-slate-50/80 dark:bg-slate-800/40 border-t border-slate-100 dark:border-slate-800 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
