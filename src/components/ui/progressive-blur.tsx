'use client';

import { cn } from '@/lib/utils';

interface ProgressiveBlurProps {
  className?: string;
  direction: 'left' | 'right' | 'top' | 'bottom';
  blurIntensity?: number;
}

export function ProgressiveBlur({
  className,
  direction,
  blurIntensity = 1,
}: ProgressiveBlurProps) {
  const getGradientDirection = () => {
    switch (direction) {
      case 'left':
        return 'to right';
      case 'right':
        return 'to left';
      case 'top':
        return 'to bottom';
      case 'bottom':
        return 'to top';
      default:
        return 'to right';
    }
  };

  const blurStyle = {
    background: `linear-gradient(${getGradientDirection()}, rgba(255,255,255,0) 0%, rgba(255,255,255,${blurIntensity}) 100%)`,
    backdropFilter: `blur(${blurIntensity * 4}px)`,
    WebkitBackdropFilter: `blur(${blurIntensity * 4}px)`,
  };

  return (
    <div
      className={cn('absolute inset-0', className)}
      style={blurStyle}
    />
  );
} 