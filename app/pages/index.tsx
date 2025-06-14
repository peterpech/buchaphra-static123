export default function Home() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold">Welcome to Buchaphra</h1>
      <p className="mt-4">Visit <a className="underline" href="/login">Login</a> to sign in.</p>
      <p className="mt-2">Browse NFTs on our <a className="underline" href="/marketplace">Marketplace</a>.</p>
    </div>
  );
}
