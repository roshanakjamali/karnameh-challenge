import { Logo } from './components/Logo';
import { Navbar } from './components/NavBar';

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
