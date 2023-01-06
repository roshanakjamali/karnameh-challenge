import { Error } from '../components/error';
import { Loading } from '../components/loading';
import QuestionBox from '../components/question/questionBox';

import { useGetQuestions } from '../hooks/useGetQuestions';

export const QuestionsList = () => {
  const { data, error, loading } = useGetQuestions();

  if (loading) return <Loading />;

  if (error) return <Error message={error} />;

  return data.map((question) => (
    <QuestionBox question={question} key={question.id} />
  ));
};
