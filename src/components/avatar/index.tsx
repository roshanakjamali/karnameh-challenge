interface AvatarProps {
  image: string;
  name: string;
  shape?: 'circle' | 'square';
  size?: 'large' | 'small';
}

export const Avatar: React.FC<AvatarProps> = ({
  image,
  name,
  shape = 'circle',
  size = 'large',
}) => {
  return (
    <div
      className={`ml-3 overflow-hidden ring-1 ring-slate-200 ${
        shape === 'circle' ? 'rounded-full' : 'rounded-lg'
      } ${size === 'large' ? 'h-10 w-10' : 'h-8 w-8'}`}
    >
      <img src={image} alt={name} />
    </div>
  );
};
