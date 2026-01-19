'use client';

import { ReactNode } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'fade' | 'zoom-in' | 'scale-expand';
  delay?: number;
}

export default function AnimatedSection({ 
  children, 
  className = '', 
  animation = 'fade-up',
  delay = 0 
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation(0.1, true);

  const animationClasses = {
    'fade-up': 'translate-y-20 opacity-0',
    'fade-down': '-translate-y-20 opacity-0',
    'fade-left': 'translate-x-20 opacity-0',
    'fade-right': '-translate-x-20 opacity-0',
    'fade': 'opacity-0',
    'zoom-in': 'scale-95 opacity-0',
    'scale-expand': 'scale-[0.85] opacity-70',
  };

  const visibleClasses = {
    'fade-up': 'translate-y-0 opacity-100',
    'fade-down': 'translate-y-0 opacity-100',
    'fade-left': 'translate-x-0 opacity-100',
    'fade-right': 'translate-x-0 opacity-100',
    'fade': 'opacity-100',
    'zoom-in': 'scale-100 opacity-100',
    'scale-expand': 'scale-100 opacity-100',
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? visibleClasses[animation] : animationClasses[animation]
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

