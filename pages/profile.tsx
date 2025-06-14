import { useSession, signOut } from "next-auth/react";
import { useEffect, useState } from 'react';

export default function ProfilePage() {
  const { data: session } = useSession();
  const [kyc, setKyc] = useState<null | { id: string }>(null);

  useEffect(() => {
    const loadKyc = async () => {
      const res = await fetch('/api/kyc');
      if (res.ok) {
        const data = await res.json();
        setKyc(data.record || null);
      }
    };
    if (session) loadKyc();
  }, [session]);

  if (!session) return <p>Please log in.</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl">Hello, {session.user?.name}</h1>
      <p>Email: {session.user?.email}</p>
      {kyc ? (
        <p className="text-green-600">KYC verified</p>
      ) : (
        <p className="text-yellow-600">KYC pending. <a className="underline" href="/kyc">Submit now</a></p>
      )}
      <button
        onClick={() => signOut()}
        className="mt-4 bg-red-500 text-white px-4 py-2"
      >
        Sign out
      </button>
    </div>
  );
}

