
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#004d40] text-white p-4 mt-auto">
      <div className="container mx-auto flex justify-between items-center">
        <p>&copy; 2024 Casino App. All rights reserved.</p>
        <ul className="flex space-x-4">
          <li><Link href="/about">About</Link></li>
          <li><Link href="/terms">Terms</Link></li>
          <li><Link href="/privacy">Privacy</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
