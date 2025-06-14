export default function Home() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold">Welcome to Buchaphra</h1>
      <p className="mt-4">
        Visit <a className="underline" href="/login">Login</a> to sign in or 
        <a className="underline" href="/signup">create an account</a>.
      </p>
      <p className="mt-2">
        Browse NFTs on our <a className="underline" href="/marketplace">Marketplace</a>.
      </p>
      <p className="mt-2">
        Mint a new NFT from the <a className="underline" href="/mint">Mint</a> page
        and verify your identity at <a className="underline" href="/kyc">KYC</a>.
      </p>
    </div>
  );
}
