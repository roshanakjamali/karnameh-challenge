import Paper from '../../paper';

import { Content } from './components/Content';
import Header from './components/Header';

export interface QuestionProps {
  id: string;
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
}> = ({ question: { question, id, ...headerData }, isPreviewMode = false }) => {
  return (
    <Paper>
      <Header {...headerData} />
      <Content
        questionId={id}
        question={question}
        isPreviewMode={isPreviewMode}
      />
    </Paper>
  );
};

export default QuestionBox;
