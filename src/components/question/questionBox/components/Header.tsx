import { Avatar } from '../../../avatar';
import IconButton from '../../../buttons/IconButton';
import { CommentsIcon } from '../../../icons/Comments';

import { Detail } from './Detail';

export interface HeaderProps {
  title: string;
  date: string;
  time: string;
  image: string;
  'answer-count': number;
}

export default function Header({
  title,
  date,
  time,
  image,
  'answer-count': answerCount,
}: HeaderProps) {
  return (
    <div className='grid rounded-lg shadow-sm px-4 py-2'>
      <div className='flex col-start-1 col-end-13 md:col-end-6 items-center'>
        <Avatar image={image} name={'user'} shape='square' size='small' />
        <h3 className='truncate max-w-[250px]'>{title}</h3>
      </div>
      <div className='flex col-start-1 col-end-13 md:col-start-7 justify-start md:justify-end items-center'>
        <Detail label='ساعت' value={time} />
        <Detail label='تاریخ' value={date} />
        <IconButton
          label={
            <p className='color-grey-50 text-xs font-bold pr-1'>
              {answerCount}
            </p>
          }
          icon={CommentsIcon}
          onClick={() => console.log('Dropdown menus')}
        />
      </div>
    </div>
  );
}
