import Link from 'next/link';
import Head from 'next/head';
import '../app/globals.css';

export default function LandingPage() {
  return (
    <>
      <Head>
        <title>Lazy Grades Portal</title>
        <meta name="description" content="Choose your student tool: calculate your minimum exam effort or track your yearly and cumulative academic performance with ease." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-indigo-100 to-indigo-300 flex items-center justify-center p-6">
        <div className="max-w-xl w-full bg-white shadow-xl rounded-2xl p-8 text-center space-y-6">
          <h1 className="text-3xl font-extrabold text-indigo-700">🎓 Lazy Grades Toolkit</h1>
          <p className="text-gray-700">Your student companion for minimum effort and maximum results. Choose a tool below to get started.</p>

          <div className="space-y-4">
            <Link href="/">
              <div className="block bg-indigo-600 text-white py-3 px-6 rounded-xl font-semibold text-lg hover:bg-indigo-700 transition duration-200 cursor-pointer">
                📊 Minimum Effort Grade Calculator
              </div>
            </Link>

            <Link href="/cpa">
              <div className="block bg-indigo-500 text-white py-3 px-6 rounded-xl font-semibold text-lg hover:bg-indigo-600 transition duration-200 cursor-pointer">
                🧠 CPA + LPA Tracker
              </div>
            </Link>
          </div>

          <footer className="text-sm text-gray-500 mt-6">
            Made with love ❤️ by CS 2023
          </footer>
        </div>
      </main>
    </>
  );
}
