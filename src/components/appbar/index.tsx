import { Logo } from './components/logo';
import { Navbar } from './components/navBar';

export default function AppBar() {
  return (
    <header className='grid justify-between items-center py-2 sm:py-1 shadow-sm px-4 sm:px-14'>
      <Logo />
      <Navbar />
    </header>
  );
}
