import { SpinIcon } from '../icons/Spin';
import Paper from '../paper';

export const Loading: React.FC<{}> = () => {
  return (
    <Paper className='p-3'>
      <h3 className='flex gap-4'>
        {SpinIcon}
        منتظر بمانید...
      </h3>
    </Paper>
  );
};
