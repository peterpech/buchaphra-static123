import { useState } from 'react';
import { ethers } from 'ethers';
import { CONTRACT_ADDRESS, CONTRACT_ABI } from '../lib/contract';

declare global {
  interface Window {
    ethereum?: any;
  }
}

export default function MintPage() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [status, setStatus] = useState('');

  const handleMint = async () => {
    if (!window.ethereum) {
      alert('MetaMask is required');
      return;
    }

    const provider = new ethers.BrowserProvider(window.ethereum);
    await provider.send('eth_requestAccounts', []);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);

    setStatus('Uploading to IPFS...');
    const metadata = { name, description, image };
    const res = await fetch('https://api.nft.storage/upload', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NFT_STORAGE_KEY}` || '',
      },
      body: new Blob([JSON.stringify(metadata)], { type: 'application/json' }),
    });

    if (!res.ok) {
      setStatus('Failed to upload metadata');
      return;
    }
    const { value } = await res.json();
    const uri = `ipfs://${value.cid}`;

    setStatus('Minting on chain...');
    const tx = await contract.mint(await signer.getAddress(), uri);
    await tx.wait();
    setStatus(`Minted token. Tx: ${tx.hash}`);
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
