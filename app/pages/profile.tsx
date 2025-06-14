import { useSession, signOut } from "next-auth/react";

export default function ProfilePage() {
  const { data: session } = useSession();

  if (!session) return <p>Please log in.</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl">Hello, {session.user?.name}</h1>
      <p>Email: {session.user?.email}</p>
      <button
        onClick={() => signOut()}
        className="mt-4 bg-red-500 text-white px-4 py-2"
      >
        Sign out
      </button>
    </div>
  );
}

export async function getServerSideProps() {
  return { props: {} };
}
