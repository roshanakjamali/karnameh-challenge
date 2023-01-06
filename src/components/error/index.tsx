import Paper from '../paper';

export const Error: React.FC<{ message: string }> = ({ message }) => {
  return (
    <Paper className='p-3'>
      <h1 className='text-red-500'>خطا</h1>
      <p>{message}</p>
    </Paper>
  );
};
