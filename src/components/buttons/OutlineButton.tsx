interface ButtonProps {
  label: string | JSX.Element;
  className?: string;
}

export default function OutlineButton({ label, className = '' }: ButtonProps) {
  const defaultClasses =
    'w-24 text-xs font-bold border rounded-md p-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white';

  return <button className={`${defaultClasses} ${className}`}>{label}</button>;
}
