import Paper from '../../paper';

import { Content } from './components/Content';
import Header from './components/Header';

export interface QuestionProps {
  title: string;
  date: string;
  time: string;
  question: string;
  image: string;
  comments: number;
}

const QuestionBox: React.FC<{
  question: QuestionProps;
  isPreviewMode?: boolean;
}> = ({ question: { question, ...headerData }, isPreviewMode = false }) => {
  return (
    <Paper>
      <Header {...headerData} />
      <Content question={question} isPreviewMode={isPreviewMode} />
    </Paper>
  );
};

export default QuestionBox;
