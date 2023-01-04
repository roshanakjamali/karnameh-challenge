import { Logo } from './components/logo';
import { Navbar } from './components/navBar';

export default function AppBar() {
  return (
    <header>
      <div className='max-w-7xl mx-auto grid justify-between items-center'>
        <Logo />
        <Navbar />
      </div>
    </header>
  );
}
