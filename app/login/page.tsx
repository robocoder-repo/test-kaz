
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send a request to your backend to authenticate the user
    console.log('Login attempt with:', { email, password });
    // For now, we'll just redirect to the profile page
    router.push('/profile');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-montserrat font-bold mb-6 text-center">Login</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-roboto mb-2">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded font-roboto"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-roboto mb-2">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded font-roboto"
            required
          />
        </div>
        <button type="submit" className="w-full bg-[#004d40] text-white px-4 py-2 rounded hover:bg-[#00695c] transition-colors font-roboto">
          Login
        </button>
      </form>
    </div>
  );
}
