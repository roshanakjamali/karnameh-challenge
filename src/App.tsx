import AppBar from './components/appbar';
import QuestionBox, { QuestionProps } from './components/question/questionBox';

import UserImage from './assets/images/user-sample.png';

const sample: QuestionProps = {
  title: 'مشکل در Auth در React',
  date: '15/2/1400',
  time: '16:48',
  question:
    'سلام من میخوام یه authentication ساده تو react بسازم اما این error ر  بهم میده. نمیدونم مشکل از کجاست. عکس خروجی console رو هم گذاشتم که  ببینید دقیقا چه مشکلی وجود داره',
  image: UserImage,
  comments: 20,
};

function App() {
  return (
    <div className='container min-w-full'>
      <AppBar />
      <main>
        <div className='max-w-7xl mx-auto'>
          <QuestionBox question={sample} />
        </div>
      </main>
    </div>
  );
}

export default App;
