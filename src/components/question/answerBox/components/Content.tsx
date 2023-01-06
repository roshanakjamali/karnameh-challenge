import { PropsWithChildren } from 'react';
import Button from '../../../buttons/Button';

import { FaceFrownIcon } from '../../../icons/FaceFrown';
import { SmileIcon } from '../../../icons/FaceSmile';

interface ContentProps {
  answer: string;
}

export const Content: React.FC<PropsWithChildren<ContentProps>> = ({
  answer,
}) => {
  return (
    <div className='grid justify-items-end px-4 py-5'>
      <p className='w-full mb-4 text-sm font-medium'>{answer}</p>
      <div className='flex justify-end'>
        <Button
          label={<>{SmileIcon} پاسخ خوب بود</>}
          onClick={() => console.log('like')}
          varient='outline'
          className='flex justify-center items-center w-28 ml-3'
        />

        <Button
          color='error'
          label={<>{FaceFrownIcon} پاسخ خوب نبود</>}
          onClick={() => console.log('dislike')}
          varient='outline'
          className='flex justify-center items-center w-28'
        />
      </div>
    </div>
  );
};
