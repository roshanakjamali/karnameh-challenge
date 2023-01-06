import { useState, useEffect } from 'react';

import axios from '../utils/axios';
import { AnswerProps } from '../components/question/answerBox';

export const useGetAnswers = (questionId: string) => {
  const [data, setData] = useState<AnswerProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const refetch = () => {
    axios
      .get(`/answers?_sort=id&_order=desc&questionId=${questionId}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setError(err?.message || 'Try Again');
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    refetch();
  }, []);

  return { data, loading, error, refetch };
};
