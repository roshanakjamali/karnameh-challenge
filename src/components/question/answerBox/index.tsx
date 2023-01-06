import Paper from '../../paper';

import { Content } from './components/Content';
import Header from './components/Header';

export interface AnswerProps {
  id: string;
  questionId: string;
  username: string;
  date: string;
  time: string;
  answer: string;
  image: string;
  like: number;
  dislike: number;
}

const AnswerBox: React.FC<{
  answer: AnswerProps;
}> = ({ answer: { answer, id, ...headerData } }) => {
  return (
    <Paper>
      <Header {...{ ...headerData, id }} />
      <Content answer={answer} id={id} />
    </Paper>
  );
};

export default AnswerBox;
