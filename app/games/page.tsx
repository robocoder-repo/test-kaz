
export default function Games() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-montserrat font-bold mb-6 text-center">Casino Games</h1>
      <p className="text-center mb-8 font-roboto">Choose from our selection of exciting casino games.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {['Poker', 'Blackjack', 'Roulette', 'Slots', 'Baccarat', 'Craps'].map((game) => (
          <div key={game} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-montserrat font-bold mb-4">{game}</h2>
            <p className="mb-4 font-roboto">Experience the thrill of {game}.</p>
            <button className="bg-[#004d40] text-white px-4 py-2 rounded hover:bg-[#00695c] transition-colors">
              Play Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
