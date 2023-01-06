import axios from '../utils/axios';

import { useState, useEffect } from 'react';
import { QuestionProps } from '../components/question/questionBox';

export const useGetQuestions = () => {
  const [data, setData] = useState<QuestionProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get('/questions')
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setError(err?.message || 'Try Again');
      })
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
};
