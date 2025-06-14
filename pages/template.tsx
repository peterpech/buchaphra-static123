import Link from 'next/link';

export default function TemplatePage() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold mb-4">Template Page</h1>
      <p className="mb-2">This page demonstrates a simple layout you can copy for new pages.</p>
      <p><Link className="underline" href="/">Back to home</Link></p>
    </div>
  );
}

