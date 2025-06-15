import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { CONTRACT_ADDRESS, CONTRACT_ABI } from '../lib/contract';

interface NFTItem {
  id: number;
  name: string;
  image: string;
}

declare global {
  interface Window {
    ethereum?: any;
  }
}

export default function MarketplacePage() {
  const [items, setItems] = useState<NFTItem[]>([]);

  useEffect(() => {
    const load = async () => {
      if (!window.ethereum) return;
      const provider = new ethers.BrowserProvider(window.ethereum);
      const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider);
      const total = await contract.tokenIdCounter();
      const arr: NFTItem[] = [];
      for (let i = 1; i <= Number(total); i++) {
        try {
          const uri = await contract.tokenURI(i);
          const resp = await fetch(`https://nftstorage.link/ipfs/${uri.replace('ipfs://', '')}`);
          const meta = await resp.json();
          arr.push({ id: i, name: meta.name, image: meta.image.replace('ipfs://', 'https://nftstorage.link/ipfs/') });
        } catch (e) {
          console.error(e);
        }
      }
      setItems(arr);
    };
    load();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Marketplace</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {items.map((item) => (
          <div key={item.id} className="border p-4 text-center">
            <img src={item.image} alt={item.name} className="mx-auto mb-2" />
            <h2 className="font-semibold">{item.name}</h2>
            <button className="bg-blue-600 text-white px-3 py-1">Buy</button>
          </div>
        ))}
      </div>
    </div>
  );
}

