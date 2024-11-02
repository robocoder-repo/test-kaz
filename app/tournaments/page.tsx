
export default function Tournaments() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-montserrat font-bold mb-6 text-center">Casino Tournaments</h1>
      <p className="text-center mb-8 font-roboto">Participate in our exciting tournaments and win big prizes!</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { name: 'Weekly Poker Championship', prize: '$10,000', date: 'Every Sunday' },
          { name: 'Blackjack Bonanza', prize: '$5,000', date: 'Every Friday' },
          { name: 'Slot Spectacular', prize: '$7,500', date: 'Last Saturday of the month' },
          { name: 'Roulette Royale', prize: '$3,000', date: 'First Tuesday of the month' }
        ].map((tournament) => (
          <div key={tournament.name} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-montserrat font-bold mb-4">{tournament.name}</h2>
            <p className="mb-2 font-roboto">Prize Pool: {tournament.prize}</p>
            <p className="mb-4 font-roboto">Date: {tournament.date}</p>
            <button className="bg-[#004d40] text-white px-4 py-2 rounded hover:bg-[#00695c] transition-colors">
              Register Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
