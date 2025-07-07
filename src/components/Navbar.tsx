"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { ThemeToggle } from "@/contexts/ThemeContext";
import SkipLinks from "@/components/ui/SkipLinks";
import { useAriaAttributes } from "@/hooks/useAccessibility";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { generateId, createAriaProps } = useAriaAttributes();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <>
      <SkipLinks />
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md shadow-lg border-b border-slate-200 dark:border-neutral-700"
            : "bg-transparent"
        }`}
        id="navigation"
        role="banner"
      >
      <nav
        className="flex justify-between items-center px-6 md:px-16 py-4"
        role="navigation"
        aria-label="Main navigation"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold font-playfair text-slate-800 dark:text-neutral-100"
        >
          Bismullah
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <ul
            className="flex gap-8 text-sm font-medium"
            role="menubar"
            aria-label="Main menu"
          >
            {links.map((link, index) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                role="none"
              >
                <motion.a
                  href={link.href}
                  className="text-slate-600 dark:text-neutral-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 relative group focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-sm px-2 py-1"
                  whileHover={{ scale: 1.05 }}
                  role="menuitem"
                  {...createAriaProps({
                    label: `Navigate to ${link.name} section`
                  })}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 dark:bg-purple-400 group-hover:w-full transition-all duration-300"></span>
                </motion.a>
              </motion.li>
            ))}
          </ul>

          <ThemeToggle />

          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-lg transition-all duration-300 text-sm font-medium shadow-md hover:shadow-lg"
          >
            <Download size={16} />
            <span>Resume</span>
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-slate-800 dark:text-neutral-100 p-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded"
            aria-label={mobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-64 bg-white dark:bg-neutral-900 shadow-2xl border-l border-slate-200 dark:border-neutral-700 md:hidden"
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
            >
              <div className="flex flex-col pt-20 px-6 space-y-6">
                <nav aria-label="Mobile navigation">
                {links.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-slate-600 dark:text-neutral-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 text-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded px-2 py-1"
                    {...createAriaProps({
                      label: `Navigate to ${link.name} section`
                    })}
                  >
                    {link.name}
                  </motion.a>
                ))}

                <motion.a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: links.length * 0.1 }}
                  className="flex items-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 text-lg font-medium w-fit"
                >
                  <Download size={20} />
                  <span>Resume</span>
                </motion.a>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
    </>
  );
}