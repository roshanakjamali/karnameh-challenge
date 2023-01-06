import { Avatar } from '../../../avatar';
import { SmileIcon } from '../../../icons/FaceSmile';
import { FaceFrownIcon } from '../../../icons/FaceFrown';

import { Detail } from './Detail';

export interface HeaderProps {
  title: string;
  date: string;
  time: string;
  image: string;
  like: number;
  dislike: number;
}

export default function Header({
  title,
  date,
  time,
  image,
  like,
  dislike,
}: HeaderProps) {
  return (
    <div className='grid rounded-lg shadow-sm px-4 py-2'>
      <div className='flex col-start-1 col-end-13 md:col-end-6 items-center'>
        <Avatar image={image} name={'user'} shape='square' size='small' />
        <h3>{title}</h3>
      </div>
      <div className='flex col-start-1 col-end-13 md:col-start-7 justify-start md:justify-end items-center'>
        <Detail label='ساعت' value={time} />
        <Detail label='تاریخ' value={date} />

        <div className='detail-emoji'>
          {SmileIcon} {like}
        </div>

        <div className='detail-emoji text-red-500'>
          {FaceFrownIcon} {dislike}
        </div>
      </div>
    </div>
  );
}
