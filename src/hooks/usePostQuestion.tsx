import axios from '../utils/axios';

import { useState } from 'react';
import { QuestionProps } from '../components/question/questionBox';

export const usePostQuestions = () => {
  const [data, setData] = useState<QuestionProps>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const create = (question: Omit<QuestionProps, 'id'>) => {
    setLoading(true);
    axios
      .post('/questions', question)
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
