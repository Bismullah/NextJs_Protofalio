"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SkipLink {
  href: string;
  label: string;
}

interface SkipLinksProps {
  links?: SkipLink[];
  className?: string;
}

const defaultLinks: SkipLink[] = [
  { href: '#main-content', label: 'Skip to main content' },
  { href: '#navigation', label: 'Skip to navigation' },
  { href: '#footer', label: 'Skip to footer' },
];

const SkipLinks: React.FC<SkipLinksProps> = ({ 
  links = defaultLinks, 
  className 
}) => {
  const [isVisible, setIsVisible] = React.useState(false);

  const handleFocus = () => setIsVisible(true);
  const handleBlur = () => setIsVisible(false);

  const handleClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      // Make element focusable if it's not already
      if (!element.hasAttribute('tabindex')) {
        element.setAttribute('tabindex', '-1');
      }
      
      // Focus the element
      (element as HTMLElement).focus();
      
      // Scroll to element
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={cn("fixed top-0 left-0 z-[9999]", className)}>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-primary-600 text-white shadow-lg rounded-br-lg"
          >
            <nav aria-label="Skip navigation links">
              <ul className="flex flex-col p-2 space-y-1">
                {links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      onClick={(e) => {
                        e.preventDefault();
                        handleClick(link.href);
                      }}
                      className="block px-4 py-2 text-sm font-medium hover:bg-primary-700 focus:bg-primary-700 focus:outline-none rounded transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Hidden focusable element to trigger visibility */}
      <a
        href="#main-content"
        onFocus={handleFocus}
        onBlur={handleBlur}
        onClick={(e) => {
          e.preventDefault();
          handleClick('#main-content');
        }}
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-primary-600 focus:text-white focus:rounded focus:shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>
    </div>
  );
};

export default SkipLinks;
