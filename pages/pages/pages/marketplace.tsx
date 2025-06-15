const mockNFTs = [
  { id: 1, name: "พระสมเด็จ", image: "/images/amulet1.png" },
  { id: 2, name: "พระรอด", image: "/images/amulet2.png" },
  { id: 3, name: "หลวงปู่ทวด", image: "/images/amulet3.png" }
];

export default function Marketplace() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Marketplace NFT พระเครื่อง</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {mockNFTs.map(nft => (
          <div key={nft.id} className="bg-white p-4 rounded shadow text-center">
            <img src={nft.image} alt={nft.name} className="w-full rounded mb-2" />
            <h2 className="text-xl font-semibold">{nft.name}</h2>
            <button className="mt-2 bg-orange-600 text-white px-4 py-2 rounded">ซื้อ</button>
          </div>
        ))}
      </div>
    </div>
  );
}
