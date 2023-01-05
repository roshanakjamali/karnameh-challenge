import React, { PropsWithChildren } from 'react';
import Button from '../../../buttons/Button';

interface ContentProps {
  question: string;
}

export const Content: React.FC<PropsWithChildren<ContentProps>> = ({
  question,
}) => {
  return (
    <div className='grid justify-items-end px-4 py-5'>
      <p className='w-full mb-4 text-sm font-medium'>{question}</p>
      <Button varient='outline' label='مشاهده جزییات' />
    </div>
  );
};
