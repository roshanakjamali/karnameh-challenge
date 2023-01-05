import { useState } from 'react';

import IconButton from '../../buttons/IconButton';
import { PlusIcon } from '../../icons/Plus';
import { ProfileLink } from './ProfileLink';
import { Modal } from '../../modal';

import UserProfileImage from '../../../assets/images/profile-sample.jpg';
import { CreateNewQuestion } from '../../question/createNewQuestion';

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className='flex items-center justify-between sm:justify-end col-start-1 col-end-12 sm:col-start-4'>
        <IconButton
          icon={PlusIcon}
          label='سوال جدید'
          className='px-7 py-2 bg-green-500 hover:bg-green-600 text-white'
          onClick={() => setOpen(true)}
        />

        <ProfileLink
          user={{ name: 'الناز شاکردوست', image: UserProfileImage }}
        />
      </nav>
      <Modal title='ایجاد سوال جدید' open={open} onClose={() => setOpen(false)}>
        <CreateNewQuestion onClose={() => setOpen(false)} />
      </Modal>
    </>
  );
};
