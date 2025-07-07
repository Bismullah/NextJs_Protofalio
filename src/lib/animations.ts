// Animation Library - Reusable Framer Motion animations

import { Variants } from 'framer-motion';

// Fade animations
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// Scale animations
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export const scaleInSpring: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      type: "spring", 
      stiffness: 300, 
      damping: 20 
    }
  }
};

// Slide animations
export const slideInUp: Variants = {
  hidden: { y: "100%" },
  visible: { 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const slideInDown: Variants = {
  hidden: { y: "-100%" },
  visible: { 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const slideInLeft: Variants = {
  hidden: { x: "-100%" },
  visible: { 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const slideInRight: Variants = {
  hidden: { x: "100%" },
  visible: { 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// Rotation animations
export const rotateIn: Variants = {
  hidden: { opacity: 0, rotate: -180 },
  visible: { 
    opacity: 1, 
    rotate: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

// Container animations for staggered children
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

// Hover animations
export const hoverScale = {
  scale: 1.05,
  transition: { type: "spring", stiffness: 300, damping: 20 }
};

export const hoverLift = {
  y: -5,
  scale: 1.02,
  transition: { type: "spring", stiffness: 300, damping: 20 }
};

export const hoverGlow = {
  boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
  transition: { duration: 0.3 }
};

// Page transition animations
export const pageTransition: Variants = {
  hidden: { opacity: 0, x: -200, scale: 0.8 },
  visible: { 
    opacity: 1, 
    x: 0, 
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  },
  exit: { 
    opacity: 0, 
    x: 200, 
    scale: 0.8,
    transition: { duration: 0.4, ease: "easeIn" }
  }
};

// Loading animations
export const pulseAnimation: Variants = {
  pulse: {
    scale: [1, 1.05, 1],
    opacity: [0.8, 1, 0.8],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const bounceAnimation: Variants = {
  bounce: {
    y: [0, -10, 0],
    transition: {
      duration: 0.6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Text animations
export const typewriter = {
  hidden: { width: 0 },
  visible: {
    width: "auto",
    transition: {
      duration: 2,
      ease: "linear"
    }
  }
};

export const letterAnimation: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

// Card animations
export const cardHover = {
  y: -8,
  scale: 1.02,
  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
  transition: { type: "spring", stiffness: 300, damping: 20 }
};

export const cardTap = {
  scale: 0.98,
  transition: { duration: 0.1 }
};

// Navigation animations
export const navItemHover = {
  scale: 1.1,
  color: "#3b82f6",
  transition: { duration: 0.2 }
};

export const mobileMenuSlide: Variants = {
  hidden: { x: "100%", opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" }
  },
  exit: { 
    x: "100%", 
    opacity: 0,
    transition: { duration: 0.3, ease: "easeIn" }
  }
};

// Utility functions for creating custom animations
export const createStaggerAnimation = (staggerDelay: number = 0.1) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: 0.2
    }
  }
});

export const createFadeInAnimation = (
  direction: 'up' | 'down' | 'left' | 'right' = 'up',
  distance: number = 30,
  duration: number = 0.6
) => {
  const getInitialPosition = () => {
    switch (direction) {
      case 'up': return { y: distance };
      case 'down': return { y: -distance };
      case 'left': return { x: -distance };
      case 'right': return { x: distance };
      default: return { y: distance };
    }
  };

  return {
    hidden: { opacity: 0, ...getInitialPosition() },
    visible: { 
      opacity: 1, 
      x: 0, 
      y: 0,
      transition: { duration, ease: "easeOut" }
    }
  };
};

export const createHoverAnimation = (
  scale: number = 1.05,
  y: number = -2,
  duration: number = 0.2
) => ({
  scale,
  y,
  transition: { duration, ease: "easeOut" }
});

// Animation presets for common use cases
export const animationPresets = {
  // Hero section
  hero: {
    container: staggerContainer,
    item: fadeInUp,
    title: createFadeInAnimation('up', 50, 0.8),
    subtitle: createFadeInAnimation('up', 30, 0.6),
    cta: scaleInSpring
  },
  
  // Card grids
  cardGrid: {
    container: createStaggerAnimation(0.15),
    card: {
      ...fadeInUp,
      whileHover: cardHover,
      whileTap: cardTap
    }
  },
  
  // Navigation
  navigation: {
    item: {
      whileHover: navItemHover,
      whileTap: { scale: 0.95 }
    },
    mobileMenu: mobileMenuSlide
  },
  
  // Forms
  form: {
    container: staggerContainer,
    field: fadeInUp,
    button: {
      whileHover: hoverLift,
      whileTap: { scale: 0.95 }
    }
  }
};
