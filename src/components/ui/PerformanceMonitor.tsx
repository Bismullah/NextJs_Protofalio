"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Wifi, Battery, Cpu, HardDrive, Eye, EyeOff } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  usePerformanceMetrics,
  useNetworkStatus,
  useBatteryStatus,
  useMemoryUsage,
} from '@/hooks/usePerformance';

interface PerformanceMonitorProps {
  className?: string;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  showInProduction?: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  className,
  position = 'bottom-right',
  showInProduction = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const metrics = usePerformanceMetrics();
  const { isOnline, connectionType } = useNetworkStatus();
  const batteryInfo = useBatteryStatus();
  const memoryInfo = useMemoryUsage();

  // Only show in development unless explicitly enabled for production
  const shouldShow = process.env.NODE_ENV === 'development' || showInProduction;

  useEffect(() => {
    if (shouldShow) {
      setIsVisible(true);
    }
  }, [shouldShow]);

  if (!shouldShow || !isVisible) {
    return null;
  }

  const positionClasses = {
    'top-left': 'top-4 left-4',
    'top-right': 'top-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'bottom-right': 'bottom-4 right-4',
  };

  const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const formatTime = (ms: number) => {
    if (ms < 1000) return `${ms.toFixed(0)}ms`;
    return `${(ms / 1000).toFixed(2)}s`;
  };

  const getConnectionColor = () => {
    if (!isOnline) return 'text-red-500';
    switch (connectionType) {
      case '4g':
      case 'wifi':
        return 'text-green-500';
      case '3g':
        return 'text-yellow-500';
      case '2g':
      case 'slow-2g':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };

  const getBatteryColor = () => {
    if (!batteryInfo.level) return 'text-gray-500';
    if (batteryInfo.level > 0.5) return 'text-green-500';
    if (batteryInfo.level > 0.2) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getMemoryUsage = () => {
    if (!memoryInfo.usedJSHeapSize || !memoryInfo.jsHeapSizeLimit) return 0;
    return (memoryInfo.usedJSHeapSize / memoryInfo.jsHeapSizeLimit) * 100;
  };

  return (
    <div className={cn('fixed z-[9999]', positionClasses[position], className)}>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="bg-black/90 backdrop-blur-sm text-white rounded-lg shadow-2xl border border-white/10"
        >
          {/* Toggle Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 p-3 w-full text-left hover:bg-white/10 transition-colors rounded-lg"
            aria-label={isExpanded ? 'Collapse performance monitor' : 'Expand performance monitor'}
          >
            <Activity className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium">Performance</span>
            {isExpanded ? (
              <EyeOff className="w-4 h-4 ml-auto" />
            ) : (
              <Eye className="w-4 h-4 ml-auto" />
            )}
          </button>

          {/* Expanded Content */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="p-3 pt-0 space-y-3 min-w-[280px]">
                  {/* Load Metrics */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-semibold text-gray-300 uppercase tracking-wide">
                      Load Metrics
                    </h4>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Load Time:</span>
                        <span className="text-green-400">
                          {metrics.loadTime ? formatTime(metrics.loadTime) : 'N/A'}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Render Time:</span>
                        <span className="text-blue-400">
                          {metrics.renderTime ? formatTime(metrics.renderTime) : 'N/A'}
                        </span>
                      </div>
                      <div className="flex justify-between col-span-2">
                        <span className="text-gray-400">First Input Delay:</span>
                        <span className="text-purple-400">
                          {metrics.interactionTime ? formatTime(metrics.interactionTime) : 'N/A'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Network Status */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-semibold text-gray-300 uppercase tracking-wide flex items-center gap-2">
                      <Wifi className={cn('w-3 h-3', getConnectionColor())} />
                      Network
                    </h4>
                    <div className="text-xs space-y-1">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Status:</span>
                        <span className={cn('font-medium', isOnline ? 'text-green-400' : 'text-red-400')}>
                          {isOnline ? 'Online' : 'Offline'}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Connection:</span>
                        <span className={cn('font-medium', getConnectionColor())}>
                          {connectionType.toUpperCase()}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Memory Usage */}
                  {memoryInfo.usedJSHeapSize && (
                    <div className="space-y-2">
                      <h4 className="text-xs font-semibold text-gray-300 uppercase tracking-wide flex items-center gap-2">
                        <HardDrive className="w-3 h-3 text-orange-400" />
                        Memory
                      </h4>
                      <div className="text-xs space-y-1">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Used:</span>
                          <span className="text-orange-400">
                            {formatBytes(memoryInfo.usedJSHeapSize)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Total:</span>
                          <span className="text-gray-300">
                            {formatBytes(memoryInfo.totalJSHeapSize || 0)}
                          </span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-1.5 mt-1">
                          <div
                            className="bg-orange-400 h-1.5 rounded-full transition-all duration-300"
                            style={{ width: `${getMemoryUsage()}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Battery Status */}
                  {batteryInfo.level !== undefined && (
                    <div className="space-y-2">
                      <h4 className="text-xs font-semibold text-gray-300 uppercase tracking-wide flex items-center gap-2">
                        <Battery className={cn('w-3 h-3', getBatteryColor())} />
                        Battery
                      </h4>
                      <div className="text-xs space-y-1">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Level:</span>
                          <span className={cn('font-medium', getBatteryColor())}>
                            {Math.round(batteryInfo.level * 100)}%
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Status:</span>
                          <span className={cn('font-medium', batteryInfo.charging ? 'text-green-400' : 'text-gray-300')}>
                            {batteryInfo.charging ? 'Charging' : 'Discharging'}
                          </span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-1.5 mt-1">
                          <div
                            className={cn('h-1.5 rounded-full transition-all duration-300', getBatteryColor().replace('text-', 'bg-'))}
                            style={{ width: `${(batteryInfo.level || 0) * 100}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* FPS Counter */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-semibold text-gray-300 uppercase tracking-wide flex items-center gap-2">
                      <Cpu className="w-3 h-3 text-cyan-400" />
                      Performance
                    </h4>
                    <div className="text-xs">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Viewport:</span>
                        <span className="text-cyan-400">
                          {typeof window !== 'undefined' ? `${window.innerWidth}×${window.innerHeight}` : 'N/A'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default PerformanceMonitor;
