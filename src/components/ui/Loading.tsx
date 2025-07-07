"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'spinner' | 'dots' | 'pulse' | 'skeleton';
  className?: string;
  text?: string;
}

const Loading: React.FC<LoadingProps> = ({ 
  size = 'md', 
  variant = 'spinner', 
  className,
  text 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12',
  };

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
  };

  if (variant === 'spinner') {
    return (
      <div className={cn("flex flex-col items-center justify-center gap-3", className)}>
        <motion.div
          className={cn(
            "border-2 border-neutral-200 dark:border-neutral-700 border-t-primary-600 rounded-full",
            sizeClasses[size]
          )}
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        {text && (
          <motion.p
            className={cn(
              "text-neutral-600 dark:text-neutral-400 font-medium",
              textSizeClasses[size]
            )}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {text}
          </motion.p>
        )}
      </div>
    );
  }

  if (variant === 'dots') {
    return (
      <div className={cn("flex flex-col items-center justify-center gap-3", className)}>
        <div className="flex space-x-1">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className={cn(
                "bg-primary-600 rounded-full",
                size === 'sm' ? 'w-2 h-2' :
                size === 'md' ? 'w-3 h-3' :
                size === 'lg' ? 'w-4 h-4' : 'w-5 h-5'
              )}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: index * 0.2,
              }}
            />
          ))}
        </div>
        {text && (
          <motion.p
            className={cn(
              "text-neutral-600 dark:text-neutral-400 font-medium",
              textSizeClasses[size]
            )}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {text}
          </motion.p>
        )}
      </div>
    );
  }

  if (variant === 'pulse') {
    return (
      <div className={cn("flex flex-col items-center justify-center gap-3", className)}>
        <motion.div
          className={cn(
            "bg-primary-600 rounded-full",
            sizeClasses[size]
          )}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {text && (
          <motion.p
            className={cn(
              "text-neutral-600 dark:text-neutral-400 font-medium",
              textSizeClasses[size]
            )}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {text}
          </motion.p>
        )}
      </div>
    );
  }

  if (variant === 'skeleton') {
    return (
      <div className={cn("space-y-3", className)}>
        <div className="animate-pulse space-y-3">
          <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded w-3/4"></div>
          <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded w-1/2"></div>
          <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded w-5/6"></div>
        </div>
      </div>
    );
  }

  return null;
};

// Skeleton components for specific use cases
export const SkeletonCard: React.FC<{ className?: string }> = ({ className }) => (
  <div className={cn("animate-pulse space-y-4 p-6 bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700", className)}>
    <div className="flex items-center space-x-4">
      <div className="w-12 h-12 bg-neutral-200 dark:bg-neutral-700 rounded-xl"></div>
      <div className="space-y-2 flex-1">
        <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded w-3/4"></div>
        <div className="h-3 bg-neutral-200 dark:bg-neutral-700 rounded w-1/2"></div>
      </div>
    </div>
    <div className="space-y-2">
      <div className="h-3 bg-neutral-200 dark:bg-neutral-700 rounded"></div>
      <div className="h-3 bg-neutral-200 dark:bg-neutral-700 rounded w-5/6"></div>
      <div className="h-3 bg-neutral-200 dark:bg-neutral-700 rounded w-4/6"></div>
    </div>
  </div>
);

export const SkeletonText: React.FC<{ 
  lines?: number; 
  className?: string;
}> = ({ lines = 3, className }) => (
  <div className={cn("animate-pulse space-y-2", className)}>
    {Array.from({ length: lines }).map((_, index) => (
      <div
        key={index}
        className={cn(
          "h-4 bg-neutral-200 dark:bg-neutral-700 rounded",
          index === lines - 1 ? "w-3/4" : "w-full"
        )}
      />
    ))}
  </div>
);

export const SkeletonAvatar: React.FC<{ 
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}> = ({ size = 'md', className }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  return (
    <div className={cn(
      "animate-pulse bg-neutral-200 dark:bg-neutral-700 rounded-full",
      sizeClasses[size],
      className
    )} />
  );
};

// Page loading component
export const PageLoading: React.FC<{ text?: string }> = ({ text = "Loading..." }) => (
  <div className="min-h-screen flex items-center justify-center bg-white dark:bg-neutral-900">
    <Loading variant="spinner" size="lg" text={text} />
  </div>
);

// Section loading component
export const SectionLoading: React.FC<{ 
  height?: string;
  text?: string;
}> = ({ height = "h-64", text = "Loading content..." }) => (
  <div className={cn("flex items-center justify-center", height)}>
    <Loading variant="dots" size="md" text={text} />
  </div>
);

export default Loading;
