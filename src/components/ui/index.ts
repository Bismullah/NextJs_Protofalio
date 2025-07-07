// UI Components Export Index
// This file provides a centralized export for all UI components

// Core Components
export { default as Button } from './Button';
export { default as Input } from './Input';
export { default as Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardImage } from './Card';

// Feedback Components
export { default as Loading, SkeletonCard, SkeletonText, SkeletonAvatar, PageLoading, SectionLoading } from './Loading';
export { default as Badge, StatusBadge, SkillBadge, NotificationBadge, TrendBadge } from './Badge';
export { default as Progress, CircularProgress, StepProgress } from './Progress';

// Overlay Components
export { default as Modal, ModalHeader, ModalTitle, ModalBody, ModalFooter, ConfirmModal } from './Modal';
export { default as Tooltip, InfoTooltip, HelpTooltip } from './Tooltip';

// Re-export types for TypeScript support
export type {
  ButtonSize,
  ButtonVariant,
  CardVariant,
  CardPadding,
  SpacingSize,
  ShadowType,
  ColorName,
  ColorShade,
} from '@/lib/design-tokens';
