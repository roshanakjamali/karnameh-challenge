import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Error } from '../components/error';
import { Loading } from '../components/loading';
import QuestionBox from '../components/question/questionBox';
import { initialQuestionsStateProps } from '../features/questionsSlice';

import { useGetQuestions } from '../hooks/useGetQuestions';

export const QuestionsList = () => {
  const { data, error, loading, refetch } = useGetQuestions();
  const invalidate = useSelector<{ questions: initialQuestionsStateProps }>(
    (state) => state.questions.isInvalidate
  );

  useEffect(() => {
    if (invalidate === -1) return;
    refetch();
  }, [invalidate]);

  if (loading) return <Loading />;

  if (error) return <Error message={error} />;

  return data.map((question) => (
    <QuestionBox question={question} key={question.id} />
  ));
};
