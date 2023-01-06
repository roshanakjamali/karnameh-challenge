import { useSelector, useDispatch } from 'react-redux';

import { Avatar } from '../../../avatar';
import { SmileIcon } from '../../../icons/FaceSmile';
import { FaceFrownIcon } from '../../../icons/FaceFrown';
import {
  disLikeAnswer,
  initialAnswerStateProps,
  likeAnswer,
} from '../../../../features/answersSlice';

import { Detail } from './Detail';

export interface HeaderProps {
  username: string;
  date: string;
  time: string;
  image: string;
  like: number;
  dislike: number;
  id: string;
}

export default function Header({
  username,
  date,
  time,
  image,
  like,
  dislike,
  id,
}: HeaderProps) {
  const { like: likeCount = 0, dislike: dislikeCount = 0 } = useSelector<
    { answers: initialAnswerStateProps },
    { like: number; dislike: number }
  >((state) => {
    return state.answers.list[id]
      ? {
          like: state.answers.list[id].like,
          dislike: state.answers.list[id].dislike,
        }
      : { like: 0, dislike: 0 };
  });

  return (
    <div className='grid rounded-lg shadow-sm px-4 py-2'>
      <div className='flex col-start-1 col-end-13 md:col-end-6 items-center'>
        <Avatar image={image} name={'user'} shape='square' size='small' />
        <h3>{username}</h3>
      </div>
      <div className='flex col-start-1 col-end-13 md:col-start-7 justify-start md:justify-end items-center'>
        <Detail label='ساعت' value={time} />
        <Detail label='تاریخ' value={date} />

        <div className='detail-emoji'>
          {SmileIcon} {likeCount}
        </div>

        <div className='detail-emoji text-red-500'>
          {FaceFrownIcon} {dislikeCount}
        </div>
      </div>
    </div>
  );
}
