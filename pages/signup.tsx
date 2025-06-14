import { useState } from 'react';
import { useRouter } from 'next/router';

export default function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSignup = async () => {
    const res = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    });
    if (res.ok) {
      router.push('/login');
    } else {
      const data = await res.json();
      setError(data.message || 'Failed to register');
    }
  };

  return (
    <div className="p-6 max-w-sm mx-auto">
      <h1 className="text-xl mb-4">Sign Up</h1>
      <input
        className="border mb-2 w-full"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="border mb-2 w-full"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="border mb-2 w-full"
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <button onClick={handleSignup} className="bg-green-600 text-white px-4 py-2">
        Sign Up
      </button>
    </div>
  );
}

