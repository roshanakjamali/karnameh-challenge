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

export const QuestionsList: React.FC<{}> = () => {
  return <QuestionBox question={sample} />;
};
