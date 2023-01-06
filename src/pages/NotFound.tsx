import { useNavigate, useRouteError } from 'react-router-dom';
import Button from '../components/buttons/Button';

type RouteErrorProps = {
  statusText?: string;
  message?: string;
  data?: string;
};

export default function NotFound() {
  const error = useRouteError() as RouteErrorProps;
  const navigate = useNavigate();

  return (
    <div className='container min-w-full'>
      <main>
        <div className='max-w-7xl mx-auto'>
          <h1>خطا!</h1>
          <p className='mb-3'>متاسفانه مشکلی پبش آمده است.</p>
          <pre className='text-xs'>
            {error.data || error.statusText || error.message}
          </pre>
          <div className='w-full my-2 border-t-2 border-slate-300' />
          <Button
            label='بازگشت'
            varient='text'
            className='m-0 p-0 mt-5 w-auto text-xl'
            onClick={() => navigate(-1)}
          />
        </div>
      </main>
    </div>
  );
}
