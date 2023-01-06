import Paper from '../components/paper';
import { SpinIcon } from '../components/icons/Spin';
import QuestionBox from '../components/question/questionBox';

import { useGetQuestions } from '../hooks/useGetQuestions';

export const QuestionsList = () => {
  const { data, error, loading } = useGetQuestions();

  if (loading)
    return (
      <Paper className='p-3'>
        <h3 className='flex gap-4'>
          {SpinIcon}
          منتظر بمانید...
        </h3>
      </Paper>
    );

  if (error)
    return (
      <Paper className='p-3'>
        <h1 className='text-red-500'>خطا</h1>
        <p>{error}</p>
      </Paper>
    );

  return data.map((question) => (
    <QuestionBox question={question} key={question.id} />
  ));
};
