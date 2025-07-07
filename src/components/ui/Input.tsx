"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Eye, EyeOff, AlertCircle, CheckCircle } from 'lucide-react';

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  error?: string;
  success?: string;
  hint?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'filled' | 'underlined';
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ 
    label,
    error,
    success,
    hint,
    leftIcon,
    rightIcon,
    size = 'md',
    variant = 'default',
    type = 'text',
    className,
    disabled,
    ...props 
  }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const sizeClasses = {
      sm: 'px-3 py-2 text-sm',
      md: 'px-4 py-3 text-base',
      lg: 'px-5 py-4 text-lg',
    };

    const variantClasses = {
      default: 'border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 rounded-lg',
      filled: 'border-0 bg-neutral-100 dark:bg-neutral-700 rounded-lg',
      underlined: 'border-0 border-b-2 border-neutral-300 dark:border-neutral-600 bg-transparent rounded-none',
    };

    const baseClasses = [
      'w-full',
      'font-medium',
      'text-neutral-900 dark:text-neutral-100',
      'placeholder-neutral-500 dark:placeholder-neutral-400',
      'transition-all duration-200',
      'focus:outline-none',
      'disabled:opacity-50 disabled:cursor-not-allowed',
    ];

    const focusClasses = {
      default: 'focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20',
      filled: 'focus:bg-white dark:focus:bg-neutral-800 focus:ring-2 focus:ring-primary-500/20',
      underlined: 'focus:border-primary-500',
    };

    const errorClasses = error ? {
      default: 'border-error-500 focus:border-error-500 focus:ring-error-500/20',
      filled: 'bg-error-50 dark:bg-error-900/20 focus:ring-error-500/20',
      underlined: 'border-error-500 focus:border-error-500',
    } : {};

    const successClasses = success ? {
      default: 'border-success-500 focus:border-success-500 focus:ring-success-500/20',
      filled: 'bg-success-50 dark:bg-success-900/20 focus:ring-success-500/20',
      underlined: 'border-success-500 focus:border-success-500',
    } : {};

    const inputClasses = cn(
      baseClasses,
      sizeClasses[size],
      variantClasses[variant],
      !error && !success && focusClasses[variant],
      error && errorClasses[variant],
      success && successClasses[variant],
      leftIcon && 'pl-10',
      (rightIcon || type === 'password') && 'pr-10',
      className
    );

    const inputType = type === 'password' && showPassword ? 'text' : type;

    return (
      <div className="space-y-2">
        {label && (
          <motion.label
            className={cn(
              "block text-sm font-medium",
              error ? "text-error-700 dark:text-error-400" : 
              success ? "text-success-700 dark:text-success-400" :
              "text-neutral-700 dark:text-neutral-300"
            )}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {label}
          </motion.label>
        )}

        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-500 dark:text-neutral-400">
              {leftIcon}
            </div>
          )}

          <input
            ref={ref}
            type={inputType}
            className={inputClasses}
            disabled={disabled}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            {...props}
          />

          {/* Right side icons */}
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
            {error && (
              <AlertCircle className="w-5 h-5 text-error-500" />
            )}
            {success && !error && (
              <CheckCircle className="w-5 h-5 text-success-500" />
            )}
            {type === 'password' && (
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors"
                tabIndex={-1}
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            )}
            {rightIcon && !error && !success && type !== 'password' && (
              <div className="text-neutral-500 dark:text-neutral-400">
                {rightIcon}
              </div>
            )}
          </div>

          {/* Focus indicator for underlined variant */}
          {variant === 'underlined' && (
            <motion.div
              className="absolute bottom-0 left-0 h-0.5 bg-primary-500"
              initial={{ width: 0 }}
              animate={{ width: isFocused ? '100%' : 0 }}
              transition={{ duration: 0.2 }}
            />
          )}
        </div>

        {/* Helper text */}
        {(error || success || hint) && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-start space-x-1"
          >
            {error && (
              <p className="text-sm text-error-600 dark:text-error-400 flex items-center space-x-1">
                <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>{error}</span>
              </p>
            )}
            {success && !error && (
              <p className="text-sm text-success-600 dark:text-success-400 flex items-center space-x-1">
                <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>{success}</span>
              </p>
            )}
            {hint && !error && !success && (
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                {hint}
              </p>
            )}
          </motion.div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
