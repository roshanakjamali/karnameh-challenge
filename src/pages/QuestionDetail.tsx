import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { useGetAnswers } from '../hooks/useGetAnswers';
import AnswerBox from '../components/question/answerBox';
import QuestionBox from '../components/question/questionBox';
import { CreateAnswer } from '../components/question/createAnswer';

import { useGetQuestion } from '../hooks/useGetQuestion';

import { Loading } from '../components/loading';
import { Error } from '../components/error';

import { initialAnswerStateProps, setAnswers } from '../features/answersSlice';

export const QuestionDetail: React.FC<{}> = () => {
  const dispatch = useDispatch();
  const { questionId } = useParams();
  const { data, loading, error } = useGetQuestion(questionId!);
  const {
    data: answers,
    loading: answerLoading,
    error: answerError,
    refetch: refetchAnswers,
  } = useGetAnswers(questionId!);

  const { count } = useSelector<
    { answers: initialAnswerStateProps },
    { count: number }
  >((state) => {
    return { count: state.answers.count };
  });

  useEffect(() => {
    if (!answers.length) return;
    dispatch(setAnswers({ answers }));
  }, [answers]);

  if (loading || answerLoading) return <Loading />;
  if (error || !data?.id || answerError)
    return <Error message={error || 'سوال مورد نظر یافت نشد.'} />;

  return (
    <>
      <QuestionBox
        question={{ ...data, 'answer-count': count }}
        isPreviewMode={true}
      />
      {!!answers.length && (
        <div className='mt-6 mb-4'>
          <h1 className='text-black'>پاسخ ها</h1>
        </div>
      )}
      {answers.map((answer) => (
        <AnswerBox answer={answer} key={answer.id} />
      ))}
      <CreateAnswer questionId={questionId!} onSuccess={refetchAnswers} />
    </>
  );
};
