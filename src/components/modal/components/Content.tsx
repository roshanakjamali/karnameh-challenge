import { PropsWithChildren } from 'react';

export const Content: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className='px-6 py-4 bg-slate-50'>{children}</div>;
};
