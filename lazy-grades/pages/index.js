// File: pages/index.js
import { useState } from 'react';
import { Sun, Moon } from 'lucide-react';
// pages/_app.js
import '../app/globals.css';


export default function Home() {
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
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} min-h-screen px-4 py-6 sm:px-6 lg:px-8`}>
      <div className="max-w-6xl mx-auto p-4 sm:p-6 md:p-8 rounded-2xl shadow-2xl relative">
        <div className="absolute top-4 right-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-600 hover:bg-gray-500 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} className="text-yellow-300" /> : <Moon size={20} className="text-indigo-800" />}
          </button>
        </div>

        <h1 className={`text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 sm:mb-6 ${darkMode ? 'text-indigo-400' : 'text-indigo-700'}`}>Minimum effort, maximum grades</h1>

        <div className={`${darkMode ? 'bg-gray-700 text-gray-200 border-indigo-500' : 'bg-indigo-50 text-gray-800 border-indigo-300'} border-l-4 p-4 mb-6 sm:mb-8 rounded-md text-sm sm:text-base`}>
          <p className="mb-2 font-semibold">Just finished your class tests and finished all assignments?</p>
          <p className="mb-2">Wondering what's the minimum effort you gotta put in exams to receive a grade? We understand (we've been there too).</p>
          <p>Just input your exam's weightage for grading and your total coursemarks for that module - it will calculate the minimum points (/100) required on your exam paper to achieve each grade.</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-xs sm:text-sm">
            <thead className={`${darkMode ? 'bg-indigo-600 text-white' : 'bg-indigo-500 text-white'}`}>
              <tr>
                {['Module Name', 'Exam Weightage (%)', 'Coursework Marks', 'Points for A+', 'Points for A', 'Points for B', 'Points for C', 'Points for D'].map((header, i) => (
                  <th key={i} className="p-2 sm:p-3 text-left font-semibold tracking-wide whitespace-nowrap">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index} className={`${darkMode ? 'odd:bg-gray-800 even:bg-gray-700 hover:bg-gray-600' : 'odd:bg-white even:bg-gray-50 hover:bg-indigo-50'} transition-colors`}>
                  <td className="p-2 sm:p-3">
                    <input
                      type="text"
                      className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 ${darkMode ? 'bg-gray-900 text-white border-gray-600' : 'bg-white text-black border-gray-300'}`}
                      value={row.moduleName}
                      onChange={(e) => handleChange(index, 'moduleName', e.target.value)}
                    />
                  </td>
                  <td className="p-2 sm:p-3">
                    <input
                      type="number"
                      className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 ${darkMode ? 'bg-gray-900 text-white border-gray-600' : 'bg-white text-black border-gray-300'}`}
                      value={row.weightage}
                      onChange={(e) => handleChange(index, 'weightage', e.target.value)}
                    />
                  </td>
                  <td className="p-2 sm:p-3">
                    <input
                      type="number"
                      className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 ${darkMode ? 'bg-gray-900 text-white border-gray-600' : 'bg-white text-black border-gray-300'}`}
                      value={row.marks}
                      onChange={(e) => handleChange(index, 'marks', e.target.value)}
                    />
                  </td>
                  {['A+', 'A', 'B', 'C', 'D'].map((grade, i) => {
                    const isRed = isImpossible(grade, parseFloat(row.marks), parseFloat(row.weightage));
                    const tooltip = isRed ? 'Achieving this grade is not possible with your current marks and weightage.' : '';
                    return (
                      <td
                        key={i}
                        className={`p-2 sm:p-3 text-center font-medium ${isRed ? 'text-white bg-red-500 rounded-md' : darkMode ? 'text-indigo-300' : 'text-indigo-700'}`}
                        title={tooltip}
                      >
                        {calculatePoints(grade, parseFloat(row.marks), parseFloat(row.weightage))}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
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

        <p className={`text-xs mt-6 text-right animate-pulse ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>Made with love ❤️ from CS</p>
      </div>
    </div>
  );
}
