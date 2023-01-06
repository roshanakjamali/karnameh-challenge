import { useState, useEffect } from 'react';

import axios from '../utils/axios';
import { QuestionProps } from '../components/question/questionBox';

export const useGetQuestions = () => {
  const [data, setData] = useState<QuestionProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const refetch = () => {
    axios
      .get('/questions?_sort=id&_order=desc')
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
