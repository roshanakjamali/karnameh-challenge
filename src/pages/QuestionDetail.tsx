import { useParams } from 'react-router-dom';

import { CreateAnswer } from '../components/question/createAnswer';
import AnswerBox, { AnswerProps } from '../components/question/answerBox';
import QuestionBox, { QuestionProps } from '../components/question/questionBox';

import UserImage from '../assets/images/user-sample.png';

const sample: QuestionProps = {
  title: 'مشکل در Auth در React',
  date: '15/2/1400',
  time: '16:48',
  question:
    'سلام من میخوام یه authentication ساده تو react بسازم اما این error ر  بهم میده. نمیدونم مشکل از کجاست. عکس خروجی console رو هم گذاشتم که  ببینید دقیقا چه مشکلی وجود داره',
  image: UserImage,
  comments: 20,
};

const sampleAnswer: AnswerProps = {
  title: 'مشکل در Auth در React',
  date: '15/2/1400',
  time: '16:48',
  answer:
    'سلام من میخوام یه authentication ساده تو react بسازم اما این error ر  بهم میده. نمیدونم مشکل از کجاست. عکس خروجی console رو هم گذاشتم که  ببینید دقیقا چه مشکلی وجود داره',
  image: UserImage,
  like: 50,
  dislike: 20,
};

export const QuestionDetail: React.FC<{}> = () => {
  const params = useParams();
  return (
    <>
      <QuestionBox question={sample} isPreviewMode={true} />
      <div className='mt-6 mb-4'>
        <h1 className='text-black'>پاسخ ها</h1>
      </div>
      <AnswerBox answer={sampleAnswer} />
      <AnswerBox answer={sampleAnswer} />
      <CreateAnswer />
    </>
  );
};
