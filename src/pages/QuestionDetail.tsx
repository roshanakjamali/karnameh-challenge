import { useParams } from 'react-router-dom';

import { CreateAnswer } from '../components/question/createAnswer';
import AnswerBox, { AnswerProps } from '../components/question/answerBox';
import QuestionBox, { QuestionProps } from '../components/question/questionBox';

import UserImage from '../assets/images/user-sample.png';
import { useGetQuestion } from '../hooks/useGetQuestion';
import { Loading } from '../components/loading';
import { Error } from '../components/error';
import { useGetAnswers } from '../hooks/useGetAnswers';

export const QuestionDetail: React.FC<{}> = () => {
  const params = useParams();
  const { data, loading, error } = useGetQuestion(params.questionId!);
  const {
    data: answers,
    loading: answerLoading,
    error: answerError,
  } = useGetAnswers(params.questionId!);

  if (loading || answerLoading) return <Loading />;
  if (error || !data?.id || answerError)
    return <Error message={error || 'سوال مورد نظر یافت نشد.'} />;

  return (
    <>
      <QuestionBox question={data} isPreviewMode={true} />
      {!!answers.length && (
        <div className='mt-6 mb-4'>
          <h1 className='text-black'>پاسخ ها</h1>
        </div>
      )}
      {answers.map((answer) => (
        <AnswerBox answer={answer} key={answer.id} />
      ))}
      <CreateAnswer />
    </>
  );
};
