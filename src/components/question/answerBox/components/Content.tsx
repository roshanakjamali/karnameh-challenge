import { PropsWithChildren } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  disLikeAnswer,
  initialAnswerStateProps,
  likeAnswer,
} from '../../../../features/answersSlice';

import { FaceFrownIcon } from '../../../icons/FaceFrown';
import { SmileIcon } from '../../../icons/FaceSmile';
import Button from '../../../buttons/Button';

interface ContentProps {
  answer: string;
  id: string;
}

export const Content: React.FC<PropsWithChildren<ContentProps>> = ({
  answer,
  id,
}) => {
  const dispatch = useDispatch();

  return (
    <div className='grid justify-items-end px-4 py-5'>
      <p className='w-full mb-4 text-sm font-medium'>{answer}</p>
      <div className='flex justify-end'>
        <Button
          label={<>{SmileIcon} پاسخ خوب بود</>}
          onClick={() => dispatch(likeAnswer({ answerId: id }))}
          varient='outline'
          className='flex justify-center items-center w-28 ml-3'
        />

        <Button
          color='error'
          label={<>{FaceFrownIcon} پاسخ خوب نبود</>}
          onClick={() => dispatch(disLikeAnswer({ answerId: id }))}
          varient='outline'
          className='flex justify-center items-center w-28'
        />
      </div>
    </div>
  );
};
