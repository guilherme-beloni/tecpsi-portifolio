import React from 'react';

interface CardProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  shadow?: 'sm' | 'md' | 'lg' | 'xl';
}

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  children,
  className = '',
  hover = false,
  shadow = 'md'
}) => {
  const baseClasses = 'bg-gray-800 rounded-lg border border-gray-600 overflow-hidden';
  const hoverClasses = hover ? 'hover:shadow-lg transition-shadow duration-200' : '';
  const shadowClasses = `shadow-${shadow}`;
  
  return (
    <div className={`${baseClasses} ${shadowClasses} ${hoverClasses} ${className}`}>
      {(title || subtitle) && (
        <div className="px-6 py-4 border-b border-gray-600">
          {title && <h3 className="text-lg font-semibold text-white">{title}</h3>}
          {subtitle && <p className="text-sm text-gray-300 mt-1">{subtitle}</p>}
        </div>
      )}
      <div className="px-6 py-4">
        {children}
      </div>
    </div>
  );
};

export default Card;
