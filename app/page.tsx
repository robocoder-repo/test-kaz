
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-montserrat font-bold mb-6 text-center">Welcome to Casino App</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-montserrat font-bold mb-4">Games</h2>
          <p className="mb-4 font-roboto">Choose from a variety of exciting casino games.</p>
          <Link href="/games" className="bg-[#004d40] text-white px-4 py-2 rounded hover:bg-[#00695c] transition-colors">
            Browse Games
          </Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-montserrat font-bold mb-4">Tournaments</h2>
          <p className="mb-4 font-roboto">Participate in thrilling tournaments and win big prizes.</p>
          <Link href="/tournaments" className="bg-[#004d40] text-white px-4 py-2 rounded hover:bg-[#00695c] transition-colors">
            View Tournaments
          </Link>
        </div>
      </div>
    </div>
  );
}
