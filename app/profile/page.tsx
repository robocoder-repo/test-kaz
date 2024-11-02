
export default function Profile() {
  // This is a mock user data. In a real application, this would come from a database or API
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    balance: 1000,
    gamesPlayed: 50,
    winRate: '60%'
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-montserrat font-bold mb-6 text-center">User Profile</h1>
      <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
        <h2 className="text-2xl font-montserrat font-bold mb-4">{user.name}</h2>
        <p className="mb-2 font-roboto"><strong>Email:</strong> {user.email}</p>
        <p className="mb-2 font-roboto"><strong>Balance:</strong> ${user.balance}</p>
        <p className="mb-2 font-roboto"><strong>Games Played:</strong> {user.gamesPlayed}</p>
        <p className="mb-4 font-roboto"><strong>Win Rate:</strong> {user.winRate}</p>
        <button className="bg-[#004d40] text-white px-4 py-2 rounded hover:bg-[#00695c] transition-colors w-full">
          Edit Profile
        </button>
      </div>
    </div>
  );
}
