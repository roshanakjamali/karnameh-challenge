import { ReactNode } from 'react';

type PaperProps = { children: ReactNode };

export default function Paper({ children }: PaperProps) {
  return (
    <div className='bg-white w-full shadow-sm rounded-lg mb-5'>{children}</div>
  );
}
