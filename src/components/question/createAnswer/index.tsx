import { useState, useEffect } from 'react';

import Button from '../../buttons/Button';
import { SpinIcon } from '../../icons/Spin';

import { usePostAnswer } from '../../../hooks/usePostAnswer';
import { AnswerProps } from '../answerBox';

export const CreateAnswer: React.FC<{ questionId: string }> = ({
  questionId,
}) => {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState('');

  const { create, data, error: responseError, loading } = usePostAnswer();

  const submitAnswer = () => {
    if (!answer) {
      setError('لطفا تمامی فیلد ها را وارد نمایید.');
      return;
    }

    setError('');
    const today = new Date();
    const time = `${today.getHours()}:${today.getMinutes()}`;
    const date = today.toISOString().split('T')[0].replaceAll('-', '/');

    const newAnswer: Omit<AnswerProps, 'id'> = {
      time,
      date,
      answer,
      questionId,
      username: 'علی کیا',
      like: 0,
      dislike: 0,
      image:
        'https://www.cerkamed.com/wp-content/uploads/2020/07/Face-Shield-Woman_CE.jpg',
    };

    create(newAnswer);
  };

  useEffect(() => {
    if (!data?.id) return;
    console.log(data);
    setAnswer('');
  }, [data]);

  return (
    <>
      <div className='mt-6 mb-4'>
        <h1 className='text-black'>پاسخ خود را ثبت کنید.</h1>
      </div>
      <div className='grid gap-4'>
        <div>
          <label htmlFor='problem'>پاسخ خود را بنویسید.</label>
          <textarea
            value={answer}
            id='problem'
            placeholder='متن پاسخ ...'
            onChange={(e) => setAnswer(e.target.value)}
          />
        </div>
        {(error || responseError) && (
          <p className='text-red-500 text-sm'>{error || responseError}</p>
        )}
        {loading && (
          <p className='flex gap-4 text-green-500 text-sm'>
            {SpinIcon}
            منتظر بمانید...
          </p>
        )}
        <div>
          <Button
            label='ارسال پاسخ'
            className='px-16 w-auto'
            onClick={submitAnswer}
          />
        </div>
      </div>
    </>
  );
};
