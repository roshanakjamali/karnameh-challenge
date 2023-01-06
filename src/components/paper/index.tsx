import { ReactNode } from 'react';

interface PaperProps {
  children: ReactNode;
  className?: string;
}

export default function Paper({ children, className = '' }: PaperProps) {
  return (
    <div className={`bg-white w-full shadow-sm rounded-lg mb-5 ${className}`}>
      {children}
    </div>
  );
}
