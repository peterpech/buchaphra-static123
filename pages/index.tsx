import Head from "next/head";

export default function Home() {
    <>
      <Head>
        <title>Buchaphra NFT Marketplace</title>
        <meta name="description" content="NFT พระเครื่อง ตลาดซื้อขาย Web3 ของแท้" />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-orange-100 flex flex-col items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-orange-700 drop-shadow-lg">
            Buchaphra NFT
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-xl mx-auto">
            ตลาด NFT พระเครื่องแท้แห่งแรกของไทย
            เชื่อมต่อวัตถุมงคลกับโลก Web3 ได้ที่นี่
          </p>

          <div className="mt-8">
            <a
              href="/marketplace"
              className="inline-block px-6 py-3 bg-orange-600 text-white rounded-2xl shadow hover:bg-orange-700 transition"
            >
              เข้าสู่ตลาดพระ
            </a>
          </div>
        </div>

        <div className="mt-10">
          <img
            src="/amulet.svg"
            alt="Amulet NFT"
            className="w-64 md:w-96 rounded-xl shadow-xl border-4 border-orange-300"
          />
        </div>
      </main>
    </>
      <Head>
        <title>Buchaphra NFT Marketplace</title>
        <meta name="description" content="NFT พระเครื่อง ตลาดซื้อขาย Web3 ของแท้" />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-orange-100 flex flex-col items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-orange-700 drop-shadow-lg">
            Buchaphra NFT
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-xl mx-auto">
            ตลาด NFT พระเครื่องแท้แห่งแรกของไทย
            เชื่อมต่อวัตถุมงคลกับโลก Web3 ได้ที่นี่
          </p>

          <div className="mt-8">
            <a
              href="/marketplace"
              className="inline-block px-6 py-3 bg-orange-600 text-white rounded-2xl shadow hover:bg-orange-700 transition"
            >
              เข้าสู่ตลาดพระ
            </a>
          </div>
        </div>

        <div className="mt-10">
          <img
            src="/amulet.svg"
            alt="Amulet NFT"
            className="w-64 md:w-96 rounded-xl shadow-xl border-4 border-orange-300"
          />
        </div>
      </main>
    </>
  );
}
