import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Modal } from '../../modal';
import { PlusIcon } from '../../icons/Plus';
import IconButton from '../../buttons/IconButton';
import { CreateNewQuestion } from '../../question/createNewQuestion';

import { invalidateList } from '../../../features/questionsSlice';

import { ProfileLink } from './profileLink';
import UserProfileImage from '../../../assets/images/profile-sample.jpg';

export const Navbar: React.FC = () => {
  const dispatch = useDispatch();
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
        <CreateNewQuestion
          onClose={() => setOpen(false)}
          onSuccess={() => dispatch(invalidateList())}
        />
      </Modal>
    </>
  );
};
