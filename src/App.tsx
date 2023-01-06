import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AppBar from './components/appbar';

import NotFound from './pages/NotFound';
import { QuestionsList } from './pages/QuestionsList';
import { QuestionDetail } from './pages/QuestionDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <QuestionsList />,
    errorElement: <NotFound />,
  },
  {
    path: 'question/:questionId',
    element: <QuestionDetail />,
  },
]);

function App() {
  return (
    <div className='container min-w-full'>
      <AppBar />
      <main>
        <div className='max-w-7xl mx-auto'>
          <RouterProvider router={router} />
        </div>
      </main>
    </div>
  );
}

export default App;
