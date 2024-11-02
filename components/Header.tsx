
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-[#004d40] text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">Casino App</Link>
        <ul className="flex space-x-4">
          <li><Link href="/games">Games</Link></li>
          <li><Link href="/tournaments">Tournaments</Link></li>
          <li><Link href="/profile">Profile</Link></li>
          <li><Link href="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
