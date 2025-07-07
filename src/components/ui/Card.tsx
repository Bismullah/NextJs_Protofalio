"use client";

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';
import { componentVariants, type CardVariant, type CardPadding } from '@/lib/design-tokens';

interface CardProps extends HTMLMotionProps<"div"> {
  variant?: CardVariant;
  padding?: CardPadding;
  hover?: boolean;
  children: React.ReactNode;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ 
    variant = 'default', 
    padding = 'md', 
    hover = true, 
    children, 
    className, 
    ...props 
  }, ref) => {
    const baseClasses = [
      'rounded-2xl',
      'transition-all duration-300',
      'relative overflow-hidden',
    ];

    const variantClasses = componentVariants.card.variant[variant];
    const paddingClasses = componentVariants.card.padding[padding];

    const cardClasses = cn(
      baseClasses,
      variantClasses,
      paddingClasses,
      className
    );

    const hoverAnimation = hover ? {
      whileHover: {
        y: -4,
        scale: 1.02,
        boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.15)",
      },
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    } : {};

    return (
      <motion.div
        ref={ref}
        className={cardClasses}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        {...hoverAnimation}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = 'Card';

// Card Header component
interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ children, className }) => (
  <div className={cn("mb-4", className)}>
    {children}
  </div>
);

// Card Title component
interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export const CardTitle: React.FC<CardTitleProps> = ({ 
  children, 
  className, 
  as: Component = 'h3' 
}) => (
  <Component className={cn(
    "text-xl font-bold text-neutral-900 dark:text-neutral-100 font-playfair",
    className
  )}>
    {children}
  </Component>
);

// Card Description component
interface CardDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export const CardDescription: React.FC<CardDescriptionProps> = ({ children, className }) => (
  <p className={cn(
    "text-neutral-600 dark:text-neutral-400 leading-relaxed",
    className
  )}>
    {children}
  </p>
);

// Card Content component
interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export const CardContent: React.FC<CardContentProps> = ({ children, className }) => (
  <div className={cn("space-y-4", className)}>
    {children}
  </div>
);

// Card Footer component
interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

export const CardFooter: React.FC<CardFooterProps> = ({ children, className }) => (
  <div className={cn(
    "mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-700 flex items-center justify-between",
    className
  )}>
    {children}
  </div>
);

// Card Image component
interface CardImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: 'square' | 'video' | 'wide';
}

export const CardImage: React.FC<CardImageProps> = ({ 
  src, 
  alt, 
  className, 
  aspectRatio = 'video' 
}) => {
  const aspectClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    wide: 'aspect-[21/9]'
  };

  return (
    <div className={cn(
      "relative overflow-hidden rounded-lg mb-4",
      aspectClasses[aspectRatio],
      className
    )}>
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>
  );
};

export default Card;
