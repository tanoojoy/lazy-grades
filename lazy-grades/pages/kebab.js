import Head from 'next/head';
import '../app/globals.css';

export default function Kebab() {
  return (
    <>
      

      <main className="min-h-screen flex items-center justify-center px-4 bg-white text-black">
        <div className="max-w-lg text-center">
          <h1 className="text-4xl font-bold mb-4">🎉 Congratulations!</h1>
          <p className="text-lg">You found it. You solved the riddle. You’re not just smart — you’re elite 💻🧠</p>
          <p className="mt-6 text-sm text-gray-600">(psst... now go flex it on your friends)</p>
        </div>
      </main>
    </>
  );
}