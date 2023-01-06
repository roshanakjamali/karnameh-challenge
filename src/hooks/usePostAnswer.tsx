import axios from '../utils/axios';

import { useState } from 'react';
import { AnswerProps } from '../components/question/answerBox';

export const usePostAnswer = () => {
  const [data, setData] = useState<AnswerProps>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const create = (answer: Omit<AnswerProps, 'id'>) => {
    setLoading(true);
    axios
      .post('/answers', answer)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setError(err?.message || 'Try Again');
      })
      .finally(() => setLoading(false));
  };

  return { data, loading, error, create };
};
