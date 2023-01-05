import Paper from '../../paper';

import Header from './components/Header';
import { Content } from './components/Content';

export interface QuestionProps {
  title: string;
  date: string;
  time: string;
  question: string;
  image: string;
  comments: number;
}

const QuestionBox: React.FC<{ question: QuestionProps }> = ({
  question: { question, ...headerData },
}) => {
  return (
    <Paper>
      <Header {...headerData} />
      <Content question={question} />
    </Paper>
  );
};

export default QuestionBox;
