import { ButtonHTMLAttributes } from 'react';

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> {
  label: string | JSX.Element;
  className?: string;
  varient?: 'contained' | 'text' | 'outline';
  color?: 'primary' | 'error';
}

export default function Button({
  label,
  className = '',
  varient = 'contained',
  color = 'primary',
  ...buttonProps
}: ButtonProps) {
  const baseClass = 'text-xs font-bold rounded-md p-2 transition-all';
  const buttonStyle = `button-${varient}-${color}`;

  return (
    <button
      className={`${baseClass} ${buttonStyle} ${className}`}
      {...buttonProps}
    >
      {label}
    </button>
  );
}
