import React, { useState } from 'react';

interface InputProps {
  label?: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'password' | 'number';
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  type = 'text',
  value = '',
  onChange,
  error,
  disabled = false,
  required = false,
  className = ''
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange?.(newValue);
  };
  
  const inputClasses = `
    w-full px-3 py-2 border rounded-md transition-colors duration-200
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
    ${error ? 'border-red-500' : 'border-gray-500'}
    ${disabled ? 'bg-gray-700 cursor-not-allowed text-gray-400' : 'bg-gray-700 text-white'}
    ${className}
  `;
  
  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-gray-200">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        disabled={disabled}
        required={required}
        className={inputClasses}
      />
      {error && (
        <p className="text-sm text-red-400">{error}</p>
      )}
    </div>
  );
};

export default Input;
