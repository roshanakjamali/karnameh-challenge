import React from 'react';
import { Avatar } from '../../avatar';
import IconButton from '../../buttons/IconButton';
import { CommentsIcon } from '../../icons/Comments';
import { Detail } from './detail';

export interface HeaderProps {
  title: string;
  date: string;
  time: string;
  image: string;
  comments: number;
}

export default function Header({
  title,
  date,
  time,
  image,
  comments,
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
        <IconButton
          label={
            <p className='color-grey-50 text-xs font-bold pr-1'>{comments}</p>
          }
          icon={CommentsIcon}
        />
      </div>
    </div>
  );
}
