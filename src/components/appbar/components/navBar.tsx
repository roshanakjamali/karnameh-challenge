import IconButton from '../../buttons/IconButton';
import { PlusIcon } from '../../icons/Plus';
import { ProfileLink } from './profileLink';

import UserProfileImage from '../../../assets/images/profile-sample.jpg';

export const Navbar: React.FC = () => {
  return (
    <nav className='flex items-center justify-between sm:justify-end col-start-1 col-end-12 sm:col-start-4'>
      <IconButton
        icon={PlusIcon}
        label='سوال جدید'
        className='px-7 py-2 bg-green-500 hover:bg-green-600 text-white'
      />

      <ProfileLink user={{ name: 'الناز شاکردوست', image: UserProfileImage }} />
    </nav>
  );
};
