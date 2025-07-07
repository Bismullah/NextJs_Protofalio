"use client";

import { useEffect, useState, useCallback } from 'react';

// Hook for managing focus trap
export const useFocusTrap = (isActive: boolean) => {
  const [focusableElements, setFocusableElements] = useState<HTMLElement[]>([]);

  useEffect(() => {
    if (!isActive) return;

    const focusableSelectors = [
      'button:not([disabled])',
      'input:not([disabled])',
      'textarea:not([disabled])',
      'select:not([disabled])',
      'a[href]',
      '[tabindex]:not([tabindex="-1"])',
      '[contenteditable="true"]'
    ].join(', ');

    const elements = Array.from(
      document.querySelectorAll(focusableSelectors)
    ) as HTMLElement[];

    setFocusableElements(elements);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      const firstElement = elements[0];
      const lastElement = elements[elements.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    
    // Focus first element
    elements[0]?.focus();

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isActive]);

  return focusableElements;
};

// Hook for keyboard navigation
export const useKeyboardNavigation = (
  items: any[],
  onSelect?: (index: number) => void,
  isActive: boolean = true
) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isActive) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setActiveIndex(prev => (prev + 1) % items.length);
        break;
      case 'ArrowUp':
        e.preventDefault();
        setActiveIndex(prev => (prev - 1 + items.length) % items.length);
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        if (activeIndex >= 0 && onSelect) {
          onSelect(activeIndex);
        }
        break;
      case 'Escape':
        e.preventDefault();
        setActiveIndex(-1);
        break;
      case 'Home':
        e.preventDefault();
        setActiveIndex(0);
        break;
      case 'End':
        e.preventDefault();
        setActiveIndex(items.length - 1);
        break;
    }
  }, [items.length, activeIndex, onSelect, isActive]);

  useEffect(() => {
    if (isActive) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [handleKeyDown, isActive]);

  return { activeIndex, setActiveIndex };
};

// Hook for screen reader announcements
export const useScreenReader = () => {
  const [announcements, setAnnouncements] = useState<string[]>([]);

  const announce = useCallback((message: string, priority: 'polite' | 'assertive' = 'polite') => {
    setAnnouncements(prev => [...prev, message]);

    // Create temporary element for screen reader
    const element = document.createElement('div');
    element.setAttribute('aria-live', priority);
    element.setAttribute('aria-atomic', 'true');
    element.className = 'sr-only';
    element.textContent = message;

    document.body.appendChild(element);

    // Remove after announcement
    setTimeout(() => {
      document.body.removeChild(element);
      setAnnouncements(prev => prev.filter(msg => msg !== message));
    }, 1000);
  }, []);

  return { announce, announcements };
};

// Hook for reduced motion preference
export const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
};

// Hook for high contrast preference
export const useHighContrast = () => {
  const [prefersHighContrast, setPrefersHighContrast] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-contrast: high)');
    setPrefersHighContrast(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersHighContrast(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersHighContrast;
};

// Hook for managing ARIA attributes
export const useAriaAttributes = () => {
  const generateId = useCallback((prefix: string = 'element') => {
    return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
  }, []);

  const createAriaProps = useCallback((
    options: {
      label?: string;
      labelledBy?: string;
      describedBy?: string;
      expanded?: boolean;
      selected?: boolean;
      disabled?: boolean;
      required?: boolean;
      invalid?: boolean;
      live?: 'polite' | 'assertive' | 'off';
      atomic?: boolean;
      busy?: boolean;
      controls?: string;
      owns?: string;
      role?: string;
    }
  ) => {
    const props: Record<string, any> = {};

    if (options.label) props['aria-label'] = options.label;
    if (options.labelledBy) props['aria-labelledby'] = options.labelledBy;
    if (options.describedBy) props['aria-describedby'] = options.describedBy;
    if (options.expanded !== undefined) props['aria-expanded'] = options.expanded;
    if (options.selected !== undefined) props['aria-selected'] = options.selected;
    if (options.disabled !== undefined) props['aria-disabled'] = options.disabled;
    if (options.required !== undefined) props['aria-required'] = options.required;
    if (options.invalid !== undefined) props['aria-invalid'] = options.invalid;
    if (options.live) props['aria-live'] = options.live;
    if (options.atomic !== undefined) props['aria-atomic'] = options.atomic;
    if (options.busy !== undefined) props['aria-busy'] = options.busy;
    if (options.controls) props['aria-controls'] = options.controls;
    if (options.owns) props['aria-owns'] = options.owns;
    if (options.role) props['role'] = options.role;

    return props;
  }, []);

  return { generateId, createAriaProps };
};

// Hook for skip links
export const useSkipLinks = () => {
  const [skipLinks, setSkipLinks] = useState<Array<{ id: string; label: string }>>([]);

  const addSkipLink = useCallback((id: string, label: string) => {
    setSkipLinks(prev => [...prev.filter(link => link.id !== id), { id, label }]);
  }, []);

  const removeSkipLink = useCallback((id: string) => {
    setSkipLinks(prev => prev.filter(link => link.id !== id));
  }, []);

  const skipTo = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.focus();
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return { skipLinks, addSkipLink, removeSkipLink, skipTo };
};

// Hook for color contrast checking
export const useColorContrast = () => {
  const checkContrast = useCallback((foreground: string, background: string) => {
    // Convert hex to RGB
    const hexToRgb = (hex: string) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : null;
    };

    // Calculate relative luminance
    const getLuminance = (r: number, g: number, b: number) => {
      const [rs, gs, bs] = [r, g, b].map(c => {
        c = c / 255;
        return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
      });
      return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
    };

    const fg = hexToRgb(foreground);
    const bg = hexToRgb(background);

    if (!fg || !bg) return null;

    const fgLuminance = getLuminance(fg.r, fg.g, fg.b);
    const bgLuminance = getLuminance(bg.r, bg.g, bg.b);

    const contrast = (Math.max(fgLuminance, bgLuminance) + 0.05) / 
                    (Math.min(fgLuminance, bgLuminance) + 0.05);

    return {
      ratio: contrast,
      aa: contrast >= 4.5,
      aaa: contrast >= 7,
      aaLarge: contrast >= 3,
      aaaLarge: contrast >= 4.5
    };
  }, []);

  return { checkContrast };
};

// Hook for managing focus visible
export const useFocusVisible = () => {
  const [isFocusVisible, setIsFocusVisible] = useState(false);

  useEffect(() => {
    let hadKeyboardEvent = false;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.metaKey || e.altKey || e.ctrlKey) return;
      hadKeyboardEvent = true;
    };

    const onPointerDown = () => {
      hadKeyboardEvent = false;
    };

    const onFocus = () => {
      setIsFocusVisible(hadKeyboardEvent);
    };

    const onBlur = () => {
      setIsFocusVisible(false);
    };

    document.addEventListener('keydown', onKeyDown, true);
    document.addEventListener('mousedown', onPointerDown, true);
    document.addEventListener('pointerdown', onPointerDown, true);
    document.addEventListener('touchstart', onPointerDown, true);
    document.addEventListener('focus', onFocus, true);
    document.addEventListener('blur', onBlur, true);

    return () => {
      document.removeEventListener('keydown', onKeyDown, true);
      document.removeEventListener('mousedown', onPointerDown, true);
      document.removeEventListener('pointerdown', onPointerDown, true);
      document.removeEventListener('touchstart', onPointerDown, true);
      document.removeEventListener('focus', onFocus, true);
      document.removeEventListener('blur', onBlur, true);
    };
  }, []);

  return isFocusVisible;
};
