
import Head from 'next/head';
import { useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import '../app/globals.css';
import Link from 'next/link';

export default function Home() {
    if (typeof window !== 'undefined') {
        console.log('%cAyo ki to p roder ici? pena nanier pou trouver', 'color: #f59e0b; font-size: 1.2rem; font-weight: bold;');
        console.log('%cGo study instead. Grades don’t calculate themselves 💅📚', 'color: #84cc16; font-size: 1rem;');
        console.log('%cTo ene dimoune curieux selman, dm Mr 🌞 if you interested in business. ', 'color: #84cc16; font-size: 1rem;');
    }
  const [rows, setRows] = useState([
    { moduleName: '', weightage: '', marks: '' }
  ]);
  const [darkMode, setDarkMode] = useState(false);

  const handleChange = (index, field, value) => {
    const newRows = [...rows];
    newRows[index][field] = value;
    setRows(newRows);
  };

  const addRow = () => {
    setRows([...rows, { moduleName: '', weightage: '', marks: '' }]);
  };

  const calculatePoints = (gradeTarget, marks, weightage) => {
    const thresholds = { 'A+': 80, A: 70, B: 60, C: 50, D: 40 };
    if (!weightage || weightage == 0 || marks === '') return '';
    const result = ((thresholds[gradeTarget] - marks) * 100 / weightage);
    return result > 100 ? 'Impossible' : result.toFixed(2);
  };

  const isImpossible = (gradeTarget, marks, weightage) => {
    const thresholds = { 'A+': 80, A: 70, B: 60, C: 50, D: 40 };
    if (!weightage || weightage == 0 || marks === '') return false;
    return ((thresholds[gradeTarget] - marks) * 100 / weightage) > 100;
  };

  return (
    <>
      <Head>
        <title>Lazy Grades @ Reduit</title>
        <meta name="description" content="Aret Panicker pou to resultats. Input your coursework marks and exam weightage to calculate the minimum effort needed to score your desired grade. A smart calculator for students." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="grade calculator, student marks, coursework, exam weightage, university tool, university of mauritius, uom, UOM, uom grades" />
        <meta name="author" content="CS 2023" />

        
        <meta property="og:title" content="Minimum Effort, Maximum Grades" />
        <meta property="og:description" content="Aret Panicker pou to resultats. Quickly calculate the minimum exam scores needed for your desired grades." />
        <meta property="og:image" content="/gro_paress.png" />
        <meta property="og:url" content="https://lazygrades.vercel.app" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Minimum Effort, Maximum Grades" />
        <meta name="twitter:description" content="Aret Panicker pou to resultats. Quickly calculate the minimum exam scores needed for your desired grades." />
        <meta name="twitter:image" content="/gro_paress.png" />
      </Head>

      <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} min-h-screen px-4 py-6 sm:px-6 lg:px-8`}>
        <Link href="/" className="inline-block mb-4 text-sm text-indigo-600 hover:underline font-medium">
          ← Back
        </Link>
        <div className="max-w-4xl mx-auto p-4 sm:p-6 md:p-8 rounded-2xl shadow-2xl">
          <h1 className={`text-xl sm:text-2xl md:text-3xl font-extrabold mb-4 sm:mb-6 ${darkMode ? 'text-indigo-400' : 'text-indigo-700'}`}>Minimum effort, maximum grades</h1>

          <div className={`${darkMode ? 'bg-gray-700 text-gray-200 border-indigo-500' : 'bg-indigo-50 text-gray-800 border-indigo-300'} border-l-4 p-4 mb-6 sm:mb-8 rounded-md text-sm sm:text-base`}>
            <p className="mb-2 font-semibold">Just finished your class tests and finished all assignments?</p>
            <p className="mb-2">Wondering what's the minimum effort you gotta put to receive a grade?</p>
            <br></br>
            <p>Example: If the exam weightage of Algorithms and Complexities is 50%, and your coursework marks is 30. Then you will be shown that you need at least a 70/100 on the exam paper to achieve an A.</p>
          </div>

          <div className="space-y-6">
            {rows.map((row, index) => (
              <div key={index} className={`${darkMode ? 'bg-gray-800' : 'bg-gray-100'} p-4 rounded-lg shadow-md space-y-3`}>
                <input
                  type="text"
                  placeholder='Module Name'
                  className={`w-full p-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 ${darkMode ? 'bg-gray-900 text-white border-gray-600' : 'bg-white text-black border-gray-300'}`}
                  value={row.moduleName}
                  onChange={(e) => handleChange(index, 'moduleName', e.target.value)}
                />
                <input
                  type="number"
                  placeholder='Exam Weightage (%)'
                  className={`w-full p-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 ${darkMode ? 'bg-gray-900 text-white border-gray-600' : 'bg-white text-black border-gray-300'}`}
                  value={row.weightage}
                  onChange={(e) => handleChange(index, 'weightage', e.target.value)}
                />
                <input
                  type="number"
                  placeholder='Coursework Marks'
                  className={`w-full p-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 ${darkMode ? 'bg-gray-900 text-white border-gray-600' : 'bg-white text-black border-gray-300'}`}
                  value={row.marks}
                  onChange={(e) => handleChange(index, 'marks', e.target.value)}
                />
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
                  {['A+', 'A', 'B', 'C', 'D'].map((grade, i) => {
                    const isRed = isImpossible(grade, parseFloat(row.marks), parseFloat(row.weightage));
                    const tooltip = isRed ? 'Achieving this grade is not possible with your current marks and weightage.' : '';
                    return (
                      <div
                        key={i}
                        className={`p-2 rounded-md text-center font-medium ${isRed ? 'bg-red-500 text-white' : darkMode ? 'bg-gray-700 text-indigo-300' : 'bg-white text-indigo-700 border border-gray-300'}`}
                        title={tooltip}
                      >
                        {grade}: {calculatePoints(grade, parseFloat(row.marks), parseFloat(row.weightage))}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-6">
            <button
              onClick={addRow}
              className="px-4 sm:px-6 py-2 sm:py-3 bg-indigo-600 text-white text-sm sm:text-lg rounded-xl shadow hover:bg-indigo-700 transition-all"
            >
              ➕ Add Row
            </button>
          </div>

          <div className={`mt-10 text-xs sm:text-sm pt-6 border-t ${darkMode ? 'text-gray-400 border-gray-600' : 'text-gray-600 border-gray-300'}`}>
            <h2 className={`text-sm sm:text-base font-semibold mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>🔐 Privacy Notice</h2>
            <p>This app is fully client-side. Your data is never sent or stored anywhere — everything stays on your device. No info is collected, logged, or tracked. We respect your privacy 💯.</p>
          </div>

          <p className={`text-xs mt-6 text-right animate-pulse ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>Made with love ❤️ from CS 2023</p>
        </div>
        <div className="mt-8 text-center">
          <Link href="/" className="inline-block text-sm text-indigo-600 hover:underline font-medium">
            ← Back
          </Link>
        </div>
      </div>
    </>
  );
}
