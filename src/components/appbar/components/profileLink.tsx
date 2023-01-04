import React from 'react';
import IconButton from '../../buttons/IconButton';
import { ArrowDownIcon } from '../../icons/ArrowDown';

interface ProfileProps {
  user: {
    name: string;
    image: string;
  };
}

export const ProfileLink: React.FC<ProfileProps> = ({
  user: { name, image },
}) => {
  return (
    <IconButton
      label={
        <div className='flex items-center'>
          <img
            className='h-10 w-10 rounded-full border border-gray-light ml-3'
            src={image}
            alt='username'
          />
          <h6>{name}</h6>
        </div>
      }
      icon={ArrowDownIcon}
      iconPosition='right'
      className='mr-0 pr-10 pl-0'
    />
  );
};
