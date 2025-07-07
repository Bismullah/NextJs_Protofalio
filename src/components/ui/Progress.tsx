"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ProgressProps {
  value: number;
  max?: number;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'success' | 'warning' | 'error';
  showValue?: boolean;
  showPercentage?: boolean;
  animated?: boolean;
  className?: string;
  label?: string;
}

const Progress: React.FC<ProgressProps> = ({
  value,
  max = 100,
  size = 'md',
  variant = 'default',
  showValue = false,
  showPercentage = false,
  animated = true,
  className,
  label,
}) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  const sizeClasses = {
    sm: 'h-2',
    md: 'h-3',
    lg: 'h-4',
  };

  const variantClasses = {
    default: 'bg-primary-600',
    success: 'bg-success-600',
    warning: 'bg-warning-600',
    error: 'bg-error-600',
  };

  const getVariantByValue = () => {
    if (percentage >= 80) return 'success';
    if (percentage >= 60) return 'default';
    if (percentage >= 40) return 'warning';
    return 'error';
  };

  const actualVariant = variant === 'default' && percentage > 0 ? getVariantByValue() : variant;

  return (
    <div className={cn("w-full", className)}>
      {/* Label and value */}
      {(label || showValue || showPercentage) && (
        <div className="flex items-center justify-between mb-2">
          {label && (
            <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
              {label}
            </span>
          )}
          {(showValue || showPercentage) && (
            <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
              {showPercentage ? `${Math.round(percentage)}%` : `${value}/${max}`}
            </span>
          )}
        </div>
      )}

      {/* Progress bar */}
      <div className={cn(
        "relative w-full bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden",
        sizeClasses[size]
      )}>
        <motion.div
          className={cn(
            "h-full rounded-full transition-colors duration-300",
            variantClasses[actualVariant]
          )}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{
            duration: animated ? 1 : 0,
            ease: "easeOut",
            delay: animated ? 0.2 : 0,
          }}
        >
          {/* Shimmer effect */}
          {animated && percentage > 0 && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 1,
                ease: "linear",
              }}
            />
          )}
        </motion.div>
      </div>
    </div>
  );
};

// Circular progress component
export const CircularProgress: React.FC<{
  value: number;
  max?: number;
  size?: number;
  strokeWidth?: number;
  variant?: 'default' | 'success' | 'warning' | 'error';
  showValue?: boolean;
  className?: string;
}> = ({
  value,
  max = 100,
  size = 120,
  strokeWidth = 8,
  variant = 'default',
  showValue = true,
  className,
}) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  const variantColors = {
    default: '#2563eb',
    success: '#16a34a',
    warning: '#d97706',
    error: '#dc2626',
  };

  return (
    <div className={cn("relative inline-flex items-center justify-center", className)}>
      <svg
        width={size}
        height={size}
        className="transform -rotate-90"
      >
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="none"
          className="text-neutral-200 dark:text-neutral-700"
        />
        
        {/* Progress circle */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={variantColors[variant]}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={strokeDasharray}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </svg>
      
      {/* Center value */}
      {showValue && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
            {Math.round(percentage)}%
          </span>
        </div>
      )}
    </div>
  );
};

// Multi-step progress component
export const StepProgress: React.FC<{
  steps: string[];
  currentStep: number;
  variant?: 'default' | 'success' | 'warning' | 'error';
  className?: string;
}> = ({ steps, currentStep, variant = 'default', className }) => {
  const variantClasses = {
    default: 'bg-primary-600 border-primary-600',
    success: 'bg-success-600 border-success-600',
    warning: 'bg-warning-600 border-warning-600',
    error: 'bg-error-600 border-error-600',
  };

  return (
    <div className={cn("w-full", className)}>
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={step} className="flex items-center">
            {/* Step circle */}
            <div className="relative">
              <div
                className={cn(
                  "w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-medium transition-all duration-300",
                  index <= currentStep
                    ? `text-white ${variantClasses[variant]}`
                    : "text-neutral-400 border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800"
                )}
              >
                {index < currentStep ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  index + 1
                )}
              </div>
              
              {/* Step label */}
              <div className="absolute top-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                <span className={cn(
                  "text-xs font-medium",
                  index <= currentStep
                    ? "text-neutral-900 dark:text-neutral-100"
                    : "text-neutral-500 dark:text-neutral-400"
                )}>
                  {step}
                </span>
              </div>
            </div>

            {/* Connector line */}
            {index < steps.length - 1 && (
              <div className="flex-1 h-0.5 mx-4 bg-neutral-200 dark:bg-neutral-700">
                <motion.div
                  className={cn("h-full", variantClasses[variant].split(' ')[0])}
                  initial={{ width: 0 }}
                  animate={{ width: index < currentStep ? '100%' : '0%' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Progress;
