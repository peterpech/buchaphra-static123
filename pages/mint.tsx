import { useState } from 'react';

export default function MintPage() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [status, setStatus] = useState('');

  const handleMint = async () => {
    // This is a placeholder for minting with ethers.js
    // In a real app you'd connect to MetaMask and send a transaction
    setStatus('Minting...');
    await new Promise((r) => setTimeout(r, 1000));
    setStatus('Minted token with dummy tx hash');
  };

  return (
    <div className="p-6 max-w-sm mx-auto">
      <h1 className="text-2xl mb-4">Mint NFT</h1>
      <input className="border mb-2 w-full" placeholder="Name" onChange={e => setName(e.target.value)} />
      <input className="border mb-2 w-full" placeholder="Image URL" onChange={e => setImage(e.target.value)} />
      <textarea className="border mb-2 w-full" placeholder="Description" onChange={e => setDescription(e.target.value)} />
      <button onClick={handleMint} className="bg-purple-600 text-white px-4 py-2">Mint</button>
      {status && <p className="mt-2">{status}</p>}
    </div>
  );
}
