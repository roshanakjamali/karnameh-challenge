import { ButtonHTMLAttributes } from 'react';

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> {
  label: string | JSX.Element;
  className?: string;
  varient?: 'contained' | 'text' | 'outline';
}

export default function Button({
  label,
  className = '',
  varient = 'contained',
  ...buttonProps
}: ButtonProps) {
  const baseClass = 'w-24 text-xs font-bold rounded-md p-2 transition-all';
  const textClass = 'bg-transparent text-green-500 hover:text-green-700';
  const containedClass =
    'bg-green-500 text-white hover:bg-green-600 hover:text-white ';
  const outlineClasses =
    'border border-green-500 text-green-500 hover:bg-green-500 hover:text-white';

  return (
    <button
      className={`${baseClass} ${
        varient === 'contained'
          ? containedClass
          : varient === 'outline'
          ? outlineClasses
          : textClass
      } ${className}`}
      {...buttonProps}
    >
      {label}
    </button>
  );
}
