import { useState, useEffect } from 'react';
import { usePostQuestions } from '../../../hooks/usePostQuestion';
import Button from '../../buttons/Button';
import { SpinIcon } from '../../icons/Spin';
import { QuestionProps } from '../questionBox';

interface CreateNewQuestionProps {
  onClose(): void;
}

export const CreateNewQuestion: React.FC<CreateNewQuestionProps> = ({
  onClose,
}) => {
  const [subject, setSubject] = useState('');
  const [problem, setProblem] = useState('');
  const [error, setError] = useState('');

  const { create, data, error: responseError, loading } = usePostQuestions();

  const submitQuestion = () => {
    if (!subject || !problem) {
      setError('لطفا تمامی فیلد ها را وارد نمایید.');
      return;
    }

    setError('');
    const today = new Date();
    const time = `${today.getHours()}:${today.getMinutes()}`;
    const date = today.toISOString().split('T')[0].replaceAll('-', '/');

    const newQuestion: Omit<QuestionProps, 'id'> = {
      time,
      date,
      title: subject,
      question: problem,
      comments: 0,
      image:
        'data:image/jpeg;base64,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',
    };
    create(newQuestion);
  };

  useEffect(() => {
    if (!data?.id) return;
    onClose();
  }, [data]);

  return (
    <div className='grid gap-4'>
      <div>
        <label htmlFor='subject'>موضوع</label>
        <input
          type='text'
          id='subject'
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor='problem'>متن سوال</label>
        <textarea id='problem' onChange={(e) => setProblem(e.target.value)} />
      </div>
      {error ||
        (responseError && (
          <p className='text-red-500 text-sm'>{error || responseError}</p>
        ))}
      {loading && (
        <p className='flex gap-4 text-green-500 text-sm'>
          {SpinIcon}
          منتظر بمانید...
        </p>
      )}
      <div className='flex justify-end'>
        <Button
          label='انصراف'
          varient='text'
          onClick={onClose}
          className='px-7'
        />
        <Button label='ایجاد سوال' onClick={submitQuestion} />
      </div>
    </div>
  );
};
