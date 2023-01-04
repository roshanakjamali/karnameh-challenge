import React, { PropsWithChildren } from 'react';
import OutlineButton from '../../buttons/OutlineButton';

interface ContentProps {
  question: string;
}

export const Content: React.FC<PropsWithChildren<ContentProps>> = ({
  question,
}) => {
  return (
    <div className='grid justify-items-end px-4 py-5'>
      <p className='w-full mb-4 text-sm font-medium'>{question}</p>
      <OutlineButton label='مشاهده جزییات' />
    </div>
  );
};
