interface ButtonProps {
  label: string | JSX.Element;
  icon: React.SVGProps<SVGSVGElement>;
  iconPosition?: 'left' | 'right';
  className?: string;
}

export default function IconButton({
  label,
  icon,
  iconPosition = 'left',
  className: customClassName = '',
}: ButtonProps) {
  const defaultClasses =
    'flex flex-nowrap items-center justify-around text-xs px-2 py-2 rounded';

  return (
    <button
      className={`${defaultClasses} ${customClassName} ${
        iconPosition === 'left' ? 'flex-row' : 'flex-row-reverse'
      }`}
    >
      <>
        {icon}
        {label}
      </>
    </button>
  );
}
