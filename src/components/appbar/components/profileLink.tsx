import { Avatar } from '../../avatar';
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
          <Avatar image={image} name={name} />
          <h6>{name}</h6>
        </div>
      }
      icon={ArrowDownIcon}
      iconPosition='right'
      className='mr-0 pr-10 pl-0'
      onClick={() => console.log(`user name is ${name}`)}
    />
  );
};
