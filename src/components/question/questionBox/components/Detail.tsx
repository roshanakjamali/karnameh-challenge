interface DetailProps {
  label: string;
  value: string;
}

export const Detail = ({ label, value }: DetailProps) => {
  return (
    <div className='flex ml-3 pl-3 py-1  border-l border-slate-300'>
      <p className='color-grey-50 text-xs pl-1'>{label}: </p>
      <p className='color-black font-bold text-xs'>{value}</p>
    </div>
  );
};
