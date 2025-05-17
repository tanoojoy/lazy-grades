// File: pages/riddle.js
import Head from 'next/head';
import '../app/globals.css';
const encoded = `🅱🅶🅴🆁🆆🅷 3289 𝐳𝐯𝐯𝛔 𝛒ν𝑐𝛍𝛋𝛅 𝛌𝛗 𝛋𝛕: 𝑓=𝟙𝟟 𝑜=𝟛𝟚𝟛𝟛 ⬛ 𝕌𝛊𝛗 𝛗𝛐𝛅𝛔𝛛𝛕𝛗 𝛏𝛗𝛕𝛕𝛓𝛈𝛗 𝛋𝛕: 2182 131 1570 131 1570 ⚠️ 𝛘𝛈𝛊𝛖 𝛋𝛕 𝛖𝛊𝛗 𝛒𝛔𝛋𝛈𝛈𝛐𝛌 𝛏𝛕𝛕𝛕𝛓𝛈𝛋?`;

export default function Riddle() {
  return (
    <>

      <style jsx>{`
        .glitchy:hover {
          animation: glitch 1s infinite;
        }

        .obscured {
          filter: blur(6px);
          transition: filter 0.3s ease-in-out;
          cursor: pointer;
        }

        .obscured:hover {
          filter: blur(0);
        }

        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-1px, 1px); }
          40% { transform: translate(-1px, -1px); }
          60% { transform: translate(1px, 1px); }
          80% { transform: translate(1px, -1px); }
          100% { transform: translate(0); }
        }
      `}</style>

      <div className="min-h-screen bg-black text-green-400 flex items-center justify-center px-4 py-12">
        <div className="max-w-xl w-full text-center border border-green-400 p-6 rounded-xl shadow-lg">
        
          <p className="mb-6 text-sm md:text-base whitespace-pre-wrap glitchy obscured">
            {encoded}
          </p>
          <p className="text-xs mt-6 opacity-70 italic">Hover to reveal... but only if you’re meant to know 🤫. Hint: Zeus</p>
        </div>
      </div>
    </>
  );
}
