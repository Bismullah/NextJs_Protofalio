"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ColorShowcaseProps {
  className?: string;
}

const ColorShowcase: React.FC<ColorShowcaseProps> = ({ className }) => {
  const colorPalettes = [
    {
      name: 'Primary',
      description: 'Modern Purple - Main brand color',
      colors: [
        { shade: '50', value: '#faf5ff', hex: 'faf5ff' },
        { shade: '100', value: '#f3e8ff', hex: 'f3e8ff' },
        { shade: '200', value: '#e9d5ff', hex: 'e9d5ff' },
        { shade: '300', value: '#d8b4fe', hex: 'd8b4fe' },
        { shade: '400', value: '#c084fc', hex: 'c084fc' },
        { shade: '500', value: '#a855f7', hex: 'a855f7' },
        { shade: '600', value: '#9333ea', hex: '9333ea' },
        { shade: '700', value: '#7c3aed', hex: '7c3aed' },
        { shade: '800', value: '#6b21a8', hex: '6b21a8' },
        { shade: '900', value: '#581c87', hex: '581c87' },
        { shade: '950', value: '#3b0764', hex: '3b0764' },
      ]
    },
    {
      name: 'Accent',
      description: 'Vibrant Teal - Secondary brand color',
      colors: [
        { shade: '50', value: '#f0fdfa', hex: 'f0fdfa' },
        { shade: '100', value: '#ccfbf1', hex: 'ccfbf1' },
        { shade: '200', value: '#99f6e4', hex: '99f6e4' },
        { shade: '300', value: '#5eead4', hex: '5eead4' },
        { shade: '400', value: '#2dd4bf', hex: '2dd4bf' },
        { shade: '500', value: '#14b8a6', hex: '14b8a6' },
        { shade: '600', value: '#0d9488', hex: '0d9488' },
        { shade: '700', value: '#0f766e', hex: '0f766e' },
        { shade: '800', value: '#115e59', hex: '115e59' },
        { shade: '900', value: '#134e4a', hex: '134e4a' },
        { shade: '950', value: '#042f2e', hex: '042f2e' },
      ]
    },
    {
      name: 'Success',
      description: 'Fresh Green - Success states',
      colors: [
        { shade: '50', value: '#ecfdf5', hex: 'ecfdf5' },
        { shade: '100', value: '#d1fae5', hex: 'd1fae5' },
        { shade: '200', value: '#a7f3d0', hex: 'a7f3d0' },
        { shade: '300', value: '#6ee7b7', hex: '6ee7b7' },
        { shade: '400', value: '#34d399', hex: '34d399' },
        { shade: '500', value: '#10b981', hex: '10b981' },
        { shade: '600', value: '#059669', hex: '059669' },
        { shade: '700', value: '#047857', hex: '047857' },
        { shade: '800', value: '#065f46', hex: '065f46' },
        { shade: '900', value: '#064e3b', hex: '064e3b' },
        { shade: '950', value: '#022c22', hex: '022c22' },
      ]
    }
  ];

  const gradients = [
    {
      name: 'Primary Gradient',
      class: 'bg-gradient-to-r from-purple-500 to-purple-700',
      description: 'Main brand gradient'
    },
    {
      name: 'Accent Gradient',
      class: 'bg-gradient-to-r from-teal-500 to-teal-700',
      description: 'Secondary gradient'
    },
    {
      name: 'Hero Gradient',
      class: 'bg-gradient-to-r from-purple-500 via-teal-500 to-purple-600',
      description: 'Multi-color hero gradient'
    },
    {
      name: 'Success Gradient',
      class: 'bg-gradient-to-r from-emerald-500 to-green-600',
      description: 'Success state gradient'
    }
  ];

  return (
    <div className={cn('space-y-12', className)}>
      {/* Header */}
      <div className="text-center space-y-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold font-playfair bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent"
        >
          Beautiful Color Palette
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto"
        >
          Modern, vibrant colors designed for excellent contrast and accessibility
        </motion.p>
      </div>

      {/* Color Palettes */}
      <div className="space-y-8">
        {colorPalettes.map((palette, paletteIndex) => (
          <motion.div
            key={palette.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: paletteIndex * 0.1 }}
            className="space-y-4"
          >
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
                {palette.name}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                {palette.description}
              </p>
            </div>
            
            <div className="grid grid-cols-11 gap-2 rounded-xl overflow-hidden shadow-lg">
              {palette.colors.map((color, colorIndex) => (
                <motion.div
                  key={color.shade}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: paletteIndex * 0.1 + colorIndex * 0.05 }}
                  whileHover={{ scale: 1.1, zIndex: 10 }}
                  className="group relative aspect-square cursor-pointer"
                  style={{ backgroundColor: color.value }}
                >
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div className="bg-black/80 text-white text-xs px-2 py-1 rounded shadow-lg">
                      <div className="font-mono">{color.shade}</div>
                      <div className="font-mono">#{color.hex}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Gradients */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="space-y-6"
      >
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
            Gradient Collection
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400">
            Beautiful gradients for backgrounds and accents
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {gradients.map((gradient, index) => (
            <motion.div
              key={gradient.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group relative h-32 rounded-xl overflow-hidden shadow-lg cursor-pointer"
            >
              <div className={cn('absolute inset-0', gradient.class)} />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-semibold">{gradient.name}</h4>
                <p className="text-sm opacity-90">{gradient.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Usage Examples */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="space-y-6"
      >
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
            Usage Examples
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400">
            See how these colors work in real components
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Button Examples */}
          <div className="space-y-4">
            <h4 className="font-medium text-neutral-900 dark:text-neutral-100">Buttons</h4>
            <div className="space-y-3">
              <button className="w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors">
                Primary Button
              </button>
              <button className="w-full px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-colors">
                Accent Button
              </button>
              <button className="w-full px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors">
                Success Button
              </button>
            </div>
          </div>

          {/* Card Examples */}
          <div className="space-y-4">
            <h4 className="font-medium text-neutral-900 dark:text-neutral-100">Cards</h4>
            <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-lg border border-purple-200 dark:border-purple-700">
              <div className="w-8 h-8 bg-purple-600 rounded-lg mb-3"></div>
              <h5 className="font-semibold text-purple-900 dark:text-purple-100">Purple Card</h5>
              <p className="text-sm text-purple-700 dark:text-purple-300">Beautiful purple themed card</p>
            </div>
          </div>

          {/* Badge Examples */}
          <div className="space-y-4">
            <h4 className="font-medium text-neutral-900 dark:text-neutral-100">Badges</h4>
            <div className="space-y-2">
              <span className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 text-sm rounded-full">
                Primary
              </span>
              <span className="inline-block px-3 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-200 text-sm rounded-full">
                Accent
              </span>
              <span className="inline-block px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-200 text-sm rounded-full">
                Success
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ColorShowcase;
