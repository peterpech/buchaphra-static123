import { useState } from 'react';
import { useRouter } from 'next/router';

export default function KYCPage() {
  const [name, setName] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const handleSubmit = async () => {
    const res = await fetch('/api/kyc', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, idNumber, address }),
    });
    if (res.ok) {
      setSuccess(true);
      setError('');
      setTimeout(() => router.push('/profile'), 1000);
    } else {
      const data = await res.json();
      setError(data.message || 'Submission failed');
    }
  };

  return (
    <div className="p-6 max-w-sm mx-auto">
      <h1 className="text-xl mb-4">KYC Verification</h1>
      <input className="border mb-2 w-full" placeholder="Full Name" onChange={e => setName(e.target.value)} />
      <input className="border mb-2 w-full" placeholder="ID Number" onChange={e => setIdNumber(e.target.value)} />
      <textarea className="border mb-2 w-full" placeholder="Address" onChange={e => setAddress(e.target.value)} />
      {error && <p className="text-red-500 mb-2">{error}</p>}
      {success && <p className="text-green-600 mb-2">Saved!</p>}
      <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2">Submit</button>
    </div>
  );
}
