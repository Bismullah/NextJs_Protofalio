"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useKeyboardNavigation, useFocusTrap, useAriaAttributes } from '@/hooks/useAccessibility';

interface DropdownOption {
  value: string;
  label: string;
  disabled?: boolean;
  icon?: React.ReactNode;
}

interface DropdownProps {
  options: DropdownOption[];
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  error?: string;
  className?: string;
  multiple?: boolean;
  searchable?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  value,
  placeholder = 'Select an option',
  onChange,
  disabled = false,
  error,
  className,
  multiple = false,
  searchable = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedValues, setSelectedValues] = useState<string[]>(
    multiple ? (Array.isArray(value) ? value : value ? [value] : []) : []
  );

  const triggerRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  const { generateId, createAriaProps } = useAriaAttributes();
  const dropdownId = generateId('dropdown');
  const listboxId = generateId('listbox');

  // Filter options based on search term
  const filteredOptions = searchable
    ? options.filter(option =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : options;

  const { activeIndex, setActiveIndex } = useKeyboardNavigation(
    filteredOptions,
    (index) => {
      const option = filteredOptions[index];
      if (option && !option.disabled) {
        handleSelect(option.value);
      }
    },
    isOpen
  );

  useFocusTrap(isOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && searchable && searchRef.current) {
      searchRef.current.focus();
    }
  }, [isOpen, searchable]);

  const handleSelect = (optionValue: string) => {
    if (multiple) {
      const newValues = selectedValues.includes(optionValue)
        ? selectedValues.filter(v => v !== optionValue)
        : [...selectedValues, optionValue];
      setSelectedValues(newValues);
      onChange?.(newValues.join(','));
    } else {
      onChange?.(optionValue);
      setIsOpen(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'Enter':
      case ' ':
        e.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
        }
        break;
      case 'Escape':
        e.preventDefault();
        setIsOpen(false);
        triggerRef.current?.focus();
        break;
      case 'ArrowDown':
        e.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
        }
        break;
      case 'ArrowUp':
        e.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
        }
        break;
    }
  };

  const getDisplayValue = () => {
    if (multiple) {
      if (selectedValues.length === 0) return placeholder;
      if (selectedValues.length === 1) {
        const option = options.find(opt => opt.value === selectedValues[0]);
        return option?.label || selectedValues[0];
      }
      return `${selectedValues.length} selected`;
    } else {
      const option = options.find(opt => opt.value === value);
      return option?.label || placeholder;
    }
  };

  const isSelected = (optionValue: string) => {
    return multiple ? selectedValues.includes(optionValue) : value === optionValue;
  };

  return (
    <div className={cn("relative", className)}>
      {/* Trigger Button */}
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        className={cn(
          "w-full flex items-center justify-between px-4 py-3 text-left bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-600 rounded-lg shadow-sm transition-all duration-200",
          "hover:border-primary-500 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none",
          disabled && "opacity-50 cursor-not-allowed",
          error && "border-error-500 focus:border-error-500 focus:ring-error-500/20",
          isOpen && "border-primary-500 ring-2 ring-primary-500/20"
        )}
        {...createAriaProps({
          expanded: isOpen,
          controls: listboxId,
          label: placeholder,
          invalid: !!error,
          disabled,
        })}
      >
        <span className={cn(
          "block truncate",
          value || selectedValues.length > 0 
            ? "text-neutral-900 dark:text-neutral-100" 
            : "text-neutral-500 dark:text-neutral-400"
        )}>
          {getDisplayValue()}
        </span>
        <ChevronDown
          className={cn(
            "w-5 h-5 text-neutral-400 transition-transform duration-200",
            isOpen && "transform rotate-180"
          )}
        />
      </button>

      {/* Error Message */}
      {error && (
        <p className="mt-1 text-sm text-error-600 dark:text-error-400">
          {error}
        </p>
      )}

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={dropdownRef}
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 w-full mt-1 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg shadow-lg max-h-60 overflow-auto"
          >
            {/* Search Input */}
            {searchable && (
              <div className="p-2 border-b border-neutral-200 dark:border-neutral-700">
                <input
                  ref={searchRef}
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search options..."
                  className="w-full px-3 py-2 text-sm bg-transparent border-0 focus:outline-none text-neutral-900 dark:text-neutral-100 placeholder-neutral-500 dark:placeholder-neutral-400"
                  {...createAriaProps({
                    label: 'Search options',
                  })}
                />
              </div>
            )}

            {/* Options List */}
            <ul
              id={listboxId}
              role="listbox"
              aria-multiselectable={multiple}
              className="py-1"
            >
              {filteredOptions.length === 0 ? (
                <li className="px-4 py-2 text-sm text-neutral-500 dark:text-neutral-400">
                  No options found
                </li>
              ) : (
                filteredOptions.map((option, index) => (
                  <li
                    key={option.value}
                    role="option"
                    aria-selected={isSelected(option.value)}
                    aria-disabled={option.disabled}
                    onClick={() => !option.disabled && handleSelect(option.value)}
                    className={cn(
                      "flex items-center px-4 py-2 text-sm cursor-pointer transition-colors duration-150",
                      option.disabled
                        ? "text-neutral-400 dark:text-neutral-600 cursor-not-allowed"
                        : "text-neutral-900 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-700",
                      index === activeIndex && !option.disabled && "bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300",
                      isSelected(option.value) && "bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-200"
                    )}
                  >
                    {option.icon && (
                      <span className="mr-3 flex-shrink-0">
                        {option.icon}
                      </span>
                    )}
                    <span className="flex-1 truncate">{option.label}</span>
                    {isSelected(option.value) && (
                      <Check className="w-4 h-4 text-primary-600 dark:text-primary-400 ml-2 flex-shrink-0" />
                    )}
                  </li>
                ))
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;
