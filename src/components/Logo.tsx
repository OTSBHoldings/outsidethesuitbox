
import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo = ({ className = '', size = 'md' }: LogoProps) => {
  const sizeClasses = {
    sm: 'h-10',
    md: 'h-16',
    lg: 'h-24'
  };

  return (
    <img 
      src="/lovable-uploads/b20c775d-6744-493e-81b3-bfa2f554d8ed.png" 
      alt="Outside the Suitbox" 
      className={`${sizeClasses[size]} w-auto ${className}`}
    />
  );
};

export default Logo;
