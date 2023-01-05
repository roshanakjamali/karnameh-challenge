interface ButtonProps {
  label?: string | JSX.Element;
  icon: React.SVGProps<SVGSVGElement>;
  iconPosition?: 'left' | 'right';
  className?: string;
  onClick(): void;
}

export default function IconButton({
  icon,
  label = '',
  iconPosition = 'left',
  className: customClassName = '',
  onClick: clickHandler,
}: ButtonProps) {
  const defaultClasses =
    'flex flex-nowrap items-center justify-around text-xs px-2 py-2 rounded transition-all';

  return (
    <button
      className={`${defaultClasses} ${customClassName} ${
        iconPosition === 'left' ? 'flex-row' : 'flex-row-reverse'
      }`}
      onClick={clickHandler}
    >
      <>
        {icon}
        {label}
      </>
    </button>
  );
}
