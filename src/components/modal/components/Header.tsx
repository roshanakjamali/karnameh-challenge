import IconButton from '../../buttons/IconButton';
import { CloseIcon } from '../../icons/Close';

interface HeaderProps {
  title: string;
  onClose(): void;
}

export const Header: React.FC<HeaderProps> = ({ title, onClose }) => {
  return (
    <div className='flex justify-between items-center px-4 py-2 shadow-md relative z-10'>
      <h3>{title}</h3>
      <IconButton icon={CloseIcon} onClick={onClose} />
    </div>
  );
};
