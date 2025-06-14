export default function MarketplacePage() {
  const items = [
    {
      id: 1,
      name: 'Amulet #1',
      price: '1000 THB',
      image: 'https://picsum.photos/seed/amulet1/200',
    },
    {
      id: 2,
      name: 'Amulet #2',
      price: '1500 THB',
      image: 'https://picsum.photos/seed/amulet2/200',
    },
    {
      id: 3,
      name: 'Amulet #3',
      price: '2000 THB',
      image: 'https://picsum.photos/seed/amulet3/200',
    },
  ];
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Marketplace</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {items.map((item) => (
          <div key={item.id} className="border p-4 text-center">
            <img src={item.image} alt={item.name} className="mx-auto mb-2" />
            <h2 className="font-semibold">{item.name}</h2>
            <p className="text-sm mb-2">{item.price}</p>
            <button className="bg-blue-600 text-white px-3 py-1">Buy</button>
          </div>
        ))}
      </div>
    </div>
  );
}

