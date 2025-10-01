import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GovCardProps {
  children: ReactNode;
  className?: string;
  title?: string;
  icon?: ReactNode;
}

export function GovCard({ children, className, title, icon }: GovCardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow',
        className
      )}
    >
      {(title || icon) && (
        <div className="flex items-center gap-3 mb-4">
          {icon && <div className="text-primary">{icon}</div>}
          {title && <h3 className="text-xl font-bold text-primary">{title}</h3>}
        </div>
      )}
      {children}
    </div>
  );
}

interface KPICardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: ReactNode;
  color?: 'primary' | 'success' | 'warning' | 'error';
}

export function KPICard({ title, value, subtitle, icon, color = 'primary' }: KPICardProps) {
  const colorStyles = {
    primary: 'text-primary bg-primary/10',
    success: 'text-govSuccess bg-govSuccess/10',
    warning: 'text-secondary bg-secondary/10',
    error: 'text-govError bg-govError/10',
  };

  return (
    <GovCard className="text-center">
      {icon && (
        <div className={cn('w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center', colorStyles[color])}>
          {icon}
        </div>
      )}
      <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">
        {title}
      </h3>
      <p className={cn('text-4xl font-bold mb-1', colorStyles[color].split(' ')[0])}>
        {value.toLocaleString()}
      </p>
      {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
    </GovCard>
  );
}
