"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: React.ReactNode;
  removable?: boolean;
  onRemove?: () => void;
  animate?: boolean;
}

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  className,
  icon,
  removable = false,
  onRemove,
  animate = true,
}) => {
  const baseClasses = [
    'inline-flex items-center gap-1.5',
    'font-medium rounded-full',
    'transition-all duration-200',
    'whitespace-nowrap',
  ];

  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base',
  };

  const variantClasses = {
    default: 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300',
    primary: 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300',
    secondary: 'bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300',
    success: 'bg-success-100 dark:bg-success-900/30 text-success-700 dark:text-success-300',
    warning: 'bg-warning-100 dark:bg-warning-900/30 text-warning-700 dark:text-warning-300',
    error: 'bg-error-100 dark:bg-error-900/30 text-error-700 dark:text-error-300',
    outline: 'border border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 bg-transparent',
  };

  const badgeClasses = cn(
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    className
  );

  const BadgeContent = () => (
    <>
      {icon && (
        <span className="flex-shrink-0">
          {icon}
        </span>
      )}
      <span>{children}</span>
      {removable && (
        <button
          onClick={onRemove}
          className="flex-shrink-0 ml-1 hover:bg-black/10 dark:hover:bg-white/10 rounded-full p-0.5 transition-colors"
          aria-label="Remove badge"
        >
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </>
  );

  if (animate) {
    return (
      <motion.span
        className={badgeClasses}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <BadgeContent />
      </motion.span>
    );
  }

  return (
    <span className={badgeClasses}>
      <BadgeContent />
    </span>
  );
};

// Specialized badge components
export const StatusBadge: React.FC<{
  status: 'online' | 'offline' | 'busy' | 'away';
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}> = ({ status, showText = true, size = 'md' }) => {
  const statusConfig = {
    online: { color: 'success', text: 'Online', icon: '●' },
    offline: { color: 'default', text: 'Offline', icon: '●' },
    busy: { color: 'error', text: 'Busy', icon: '●' },
    away: { color: 'warning', text: 'Away', icon: '●' },
  };

  const config = statusConfig[status];

  return (
    <Badge
      variant={config.color as any}
      size={size}
      icon={<span className="text-current">{config.icon}</span>}
    >
      {showText ? config.text : ''}
    </Badge>
  );
};

export const SkillBadge: React.FC<{
  skill: string;
  level?: number;
  size?: 'sm' | 'md' | 'lg';
  showLevel?: boolean;
}> = ({ skill, level, size = 'md', showLevel = false }) => {
  const getLevelColor = (level: number) => {
    if (level >= 90) return 'success';
    if (level >= 70) return 'primary';
    if (level >= 50) return 'warning';
    return 'default';
  };

  return (
    <Badge
      variant={level ? getLevelColor(level) : 'default'}
      size={size}
    >
      {skill}
      {showLevel && level && (
        <span className="ml-1 text-xs opacity-75">
          {level}%
        </span>
      )}
    </Badge>
  );
};

export const NotificationBadge: React.FC<{
  count: number;
  max?: number;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}> = ({ count, max = 99, size = 'sm', className }) => {
  const displayCount = count > max ? `${max}+` : count.toString();

  if (count === 0) return null;

  return (
    <Badge
      variant="error"
      size={size}
      className={cn("absolute -top-1 -right-1 min-w-[1.25rem] h-5 px-1", className)}
    >
      {displayCount}
    </Badge>
  );
};

export const TrendBadge: React.FC<{
  trend: 'up' | 'down' | 'neutral';
  value?: string | number;
  size?: 'sm' | 'md' | 'lg';
}> = ({ trend, value, size = 'md' }) => {
  const trendConfig = {
    up: { color: 'success', icon: '↗', text: 'Up' },
    down: { color: 'error', icon: '↘', text: 'Down' },
    neutral: { color: 'default', icon: '→', text: 'Neutral' },
  };

  const config = trendConfig[trend];

  return (
    <Badge
      variant={config.color as any}
      size={size}
      icon={<span className="text-current font-bold">{config.icon}</span>}
    >
      {value || config.text}
    </Badge>
  );
};

export default Badge;
