"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useLazyImage } from '@/hooks/usePerformance';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  placeholder?: string;
  blurDataURL?: string;
  priority?: boolean;
  quality?: number;
  sizes?: string;
  fill?: boolean;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  objectPosition?: string;
  onLoad?: () => void;
  onError?: () => void;
  loading?: 'lazy' | 'eager';
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  placeholder,
  blurDataURL,
  priority = false,
  quality = 75,
  sizes,
  fill = false,
  objectFit = 'cover',
  objectPosition = 'center',
  onLoad,
  onError,
  loading = 'lazy',
}) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Use lazy loading hook if not priority
  const { elementRef, imageSrc, isLoaded, isError } = useLazyImage(
    priority ? src : src,
    blurDataURL || placeholder
  );

  const handleLoad = () => {
    setImageLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setImageError(true);
    onError?.();
  };

  // Generate responsive image URLs
  const generateSrcSet = (baseSrc: string) => {
    const widths = [320, 640, 768, 1024, 1280, 1536];
    return widths
      .map(w => `${baseSrc}?w=${w}&q=${quality} ${w}w`)
      .join(', ');
  };

  const imageProps = {
    alt,
    onLoad: handleLoad,
    onError: handleError,
    loading: priority ? 'eager' as const : loading,
    decoding: 'async' as const,
    ...(sizes && { sizes }),
    ...(width && { width }),
    ...(height && { height }),
  };

  const containerClasses = cn(
    'relative overflow-hidden',
    fill && 'absolute inset-0',
    className
  );

  const imageClasses = cn(
    'transition-all duration-300',
    fill ? 'absolute inset-0 w-full h-full' : 'w-full h-auto',
    `object-${objectFit}`,
    objectPosition && `object-${objectPosition}`,
    imageLoaded ? 'opacity-100' : 'opacity-0'
  );

  if (imageError || isError) {
    return (
      <div className={containerClasses}>
        <div className="flex items-center justify-center w-full h-full bg-neutral-200 dark:bg-neutral-700 text-neutral-500 dark:text-neutral-400">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div ref={priority ? undefined : elementRef} className={containerClasses}>
      {/* Placeholder/Blur */}
      {(blurDataURL || placeholder) && !imageLoaded && (
        <div className="absolute inset-0">
          {blurDataURL ? (
            <img
              src={blurDataURL}
              alt=""
              className={cn(
                'w-full h-full object-cover filter blur-sm scale-110',
                fill && 'absolute inset-0'
              )}
              aria-hidden="true"
            />
          ) : (
            <div className="w-full h-full bg-neutral-200 dark:bg-neutral-700 animate-pulse" />
          )}
        </div>
      )}

      {/* Loading skeleton */}
      {!imageLoaded && !blurDataURL && !placeholder && (
        <div className="absolute inset-0 bg-neutral-200 dark:bg-neutral-700 animate-pulse">
          <div className="flex items-center justify-center w-full h-full">
            <svg className="w-8 h-8 text-neutral-400 dark:text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
      )}

      {/* Main Image */}
      <motion.img
        src={priority ? src : imageSrc || src}
        srcSet={generateSrcSet(src)}
        className={imageClasses}
        initial={{ opacity: 0 }}
        animate={{ opacity: imageLoaded ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        {...imageProps}
      />

      {/* Loading indicator */}
      {!imageLoaded && (priority || isLoaded) && (
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-8 h-8 border-2 border-primary-200 border-t-primary-600 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </div>
      )}
    </div>
  );
};

// Gallery component with optimized images
export const ImageGallery: React.FC<{
  images: Array<{
    src: string;
    alt: string;
    caption?: string;
  }>;
  columns?: number;
  gap?: number;
  className?: string;
}> = ({ images, columns = 3, gap = 4, className }) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const gridClasses = cn(
    'grid',
    `grid-cols-1 md:grid-cols-${Math.min(columns, 3)} lg:grid-cols-${columns}`,
    `gap-${gap}`,
    className
  );

  return (
    <>
      <div className={gridClasses}>
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative aspect-square cursor-pointer group"
            whileHover={{ scale: 1.02 }}
            onClick={() => setSelectedImage(index)}
          >
            <OptimizedImage
              src={image.src}
              alt={image.alt}
              fill
              className="rounded-lg overflow-hidden"
              objectFit="cover"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-lg" />
            {image.caption && (
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent rounded-b-lg">
                <p className="text-white text-sm font-medium">{image.caption}</p>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center p-4"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            onClick={(e) => e.stopPropagation()}
          >
            <OptimizedImage
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="max-w-full max-h-full object-contain"
              priority
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
              aria-label="Close lightbox"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default OptimizedImage;
