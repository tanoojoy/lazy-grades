import Link from 'next/link';
import Head from 'next/head';
import '../app/globals.css';

const contributors = [
  { name: 'Munazir Ramjhun', linesAdded: 6892 },
  { name: 'Tanoo Joyekurun', linesAdded: 10781 }
];


export default function LandingPage() {
  return (
    <>
      <Head>
        <title>Lazy Grades @ Reduit</title>
        <meta name="description" content="Input your coursework marks and exam weightage to calculate the minimum effort needed to score your desired grade. A smart calculator for students." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="grade calculator, student marks, coursework, exam weightage, university tool, university of mauritius, uom, UOM, uom grades" />
        <meta name="author" content="CS 2023" />

        
        <meta property="og:title" content="Minimum Effort, Maximum Grades" />
        <meta property="og:description" content="Quickly calculate the minimum exam scores needed for your desired grades." />
        <meta property="og:image" content="/gro_paress.png" />
        <meta property="og:url" content="https://lazygrades.vercel.app" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Minimum Effort, Maximum Grades" />
        <meta name="twitter:description" content="Aret Panicker pou to resultats. Quickly calculate the minimum exam scores needed for your desired grades." />
        <meta name="twitter:image" content="/gro_paress.png" />
      </Head>

      <main className="min-h-screen bg-[#0d0d0d] text-white font-sans flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-[#1a1a1a] border border-neutral-800 rounded-2xl shadow-md p-8 space-y-6">
          <h1 className="text-2xl sm:text-3xl font-semibold text-center"> CS Exam Tools</h1>
          <p className="text-neutral-400 text-center text-sm">
            Academic tools exclusively for Computer Science students (May be accurate for other courses but don't take our word for it).
          </p>

          <div className="flex flex-col gap-4">
            <Link href="/lazy">
              <div className="w-full bg-white text-black font-medium text-center py-2 rounded-lg hover:bg-neutral-200 transition-all cursor-pointer">
                Minimum Effort Maximum Results
              </div>
            </Link>

            <Link href="/calculator">
              <div className="w-full bg-white text-black font-medium text-center py-2 rounded-lg hover:bg-neutral-200 transition-all cursor-pointer">
                CPA Calculator
              </div>
            </Link>

            <Link href="https://mooneth.vercel.app/">
              <div className="w-full bg-white text-black font-medium text-center py-2 rounded-lg hover:bg-neutral-200 transition-all cursor-pointer">
                Database ERD and B+ Tree
              </div>
            </Link>
          </div>

          <div className="pt-4 text-center text-xs text-neutral-500">
            Built by CS for CS
          </div>
          <section className="pt-2">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-300 mb-3">
              Contributors
            </h2>
            <div className="space-y-2">
              {contributors.map((contributor) => (
                <div
                  key={contributor.name}
                  className="flex items-center justify-between rounded-lg border border-neutral-800 bg-[#121212] px-3 py-2"
                >
                  <span className="text-sm text-neutral-100">{contributor.name}</span>
                  <span className="text-xs font-medium text-emerald-300">
                    +{contributor.linesAdded} LOC
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}


