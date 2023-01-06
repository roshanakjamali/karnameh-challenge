import { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

import Button from '../../../buttons/Button';

interface ContentProps {
  question: string;
  questionId: string;
  isPreviewMode: boolean;
}

export const Content: React.FC<PropsWithChildren<ContentProps>> = ({
  question,
  isPreviewMode = false,
  questionId,
}) => {
  return (
    <div className='grid justify-items-end px-4 py-5'>
      <p className='w-full mb-4 text-sm font-medium'>{question}</p>
      {!isPreviewMode && (
        <Link to={`/question/${questionId}`}>
          <Button varient='outline' label='مشاهده جزییات' />
        </Link>
      )}
    </div>
  );
};
