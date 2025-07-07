"use client";

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ScrollProgressProps {
  className?: string;
  height?: number;
  color?: string;
  position?: 'top' | 'bottom';
}

const ScrollProgress: React.FC<ScrollProgressProps> = ({
  className,
  height = 3,
  color = '#3b82f6',
  position = 'top',
}) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const positionClasses = {
    top: 'top-0',
    bottom: 'bottom-0',
  };

  return (
    <motion.div
      className={cn(
        'fixed left-0 right-0 z-50 origin-left',
        positionClasses[position],
        className
      )}
      style={{
        scaleX,
        height: `${height}px`,
        backgroundColor: color,
      }}
    />
  );
};

// Circular scroll progress
export const CircularScrollProgress: React.FC<{
  size?: number;
  strokeWidth?: number;
  className?: string;
  showPercentage?: boolean;
}> = ({
  size = 60,
  strokeWidth = 4,
  className,
  showPercentage = false,
}) => {
  const { scrollYProgress } = useScroll();
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      setScrollPercentage(Math.round(latest * 100));
    });
    return unsubscribe;
  }, [scrollYProgress]);

  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (scrollPercentage / 100) * circumference;

  return (
    <div className={cn("fixed bottom-8 right-8 z-50", className)}>
      <div className="relative">
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
            stroke="#3b82f6"
            strokeWidth={strokeWidth}
            fill="none"
            strokeLinecap="round"
            strokeDasharray={strokeDasharray}
            style={{ strokeDashoffset }}
            className="transition-all duration-300"
          />
        </svg>
        
        {/* Center content */}
        {showPercentage && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-bold text-neutral-900 dark:text-neutral-100">
              {scrollPercentage}%
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

// Section progress indicator
export const SectionProgress: React.FC<{
  sections: string[];
  className?: string;
}> = ({ sections, className }) => {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(id => document.getElementById(id));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const element = sectionElements[i];
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(i);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (index: number) => {
    const element = document.getElementById(sections[index]);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={cn("fixed right-8 top-1/2 transform -translate-y-1/2 z-50", className)}>
      <div className="flex flex-col space-y-3">
        {sections.map((section, index) => (
          <button
            key={section}
            onClick={() => scrollToSection(index)}
            className={cn(
              "w-3 h-3 rounded-full border-2 transition-all duration-300 hover:scale-125",
              index === activeSection
                ? "bg-primary-600 border-primary-600 scale-110"
                : "bg-transparent border-neutral-400 dark:border-neutral-600 hover:border-primary-600"
            )}
            aria-label={`Go to ${section} section`}
          />
        ))}
      </div>
    </div>
  );
};

// Reading progress for articles
export const ReadingProgress: React.FC<{
  target: string; // ID of the content container
  className?: string;
}> = ({ target, className }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const element = document.getElementById(target);
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const elementTop = rect.top + window.scrollY;
      const elementHeight = rect.height;
      const windowHeight = window.innerHeight;
      const scrollTop = window.scrollY;

      // Calculate how much of the element has been scrolled past
      const scrolled = Math.max(0, scrollTop + windowHeight - elementTop);
      const total = elementHeight + windowHeight;
      const percentage = Math.min(100, (scrolled / total) * 100);

      setProgress(percentage);
    };

    window.addEventListener('scroll', updateProgress);
    updateProgress(); // Initial calculation

    return () => window.removeEventListener('scroll', updateProgress);
  }, [target]);

  return (
    <div className={cn("fixed top-0 left-0 right-0 z-50", className)}>
      <div className="h-1 bg-neutral-200 dark:bg-neutral-700">
        <motion.div
          className="h-full bg-primary-600"
          style={{ width: `${progress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>
    </div>
  );
};

// Scroll to top button with progress
export const ScrollToTop: React.FC<{
  showAfter?: number;
  className?: string;
}> = ({ showAfter = 300, className }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > showAfter);
    };

    const unsubscribe = scrollYProgress.onChange((latest) => {
      setScrollPercentage(latest * 100);
    });

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      unsubscribe();
    };
  }, [showAfter, scrollYProgress]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-8 right-8 w-12 h-12 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50",
        className
      )}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0,
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Scroll to top"
    >
      {/* Progress ring */}
      <svg className="absolute inset-0 w-full h-full transform -rotate-90">
        <circle
          cx="24"
          cy="24"
          r="20"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-white/20"
        />
        <circle
          cx="24"
          cy="24"
          r="20"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          className="text-white"
          strokeDasharray={`${2 * Math.PI * 20}`}
          strokeDashoffset={`${2 * Math.PI * 20 * (1 - scrollPercentage / 100)}`}
          style={{ transition: 'stroke-dashoffset 0.1s ease' }}
        />
      </svg>
      
      {/* Arrow icon */}
      <svg
        className="w-5 h-5 relative z-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </motion.button>
  );
};

export default ScrollProgress;
