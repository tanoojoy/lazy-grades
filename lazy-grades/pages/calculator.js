// File: pages/cpa.js
import { useState } from 'react';
import '../app/globals.css';


export default function CPA() {
  const initRow = () => ({ name: '', percentage: '' });
  const [year1, setYear1] = useState([initRow()]);
  const [year2, setYear2] = useState([initRow()]);
  const [year3, setYear3] = useState([initRow()]);

  const handleChange = (yearSetter, index, field, value) => {
    yearSetter(prev => {
      const updated = [...prev];
      updated[index][field] = value;
      return updated;
    });
  };

  const addRow = (yearSetter) => {
    yearSetter(prev => [...prev, initRow()]);
  };

  const computeTotal = (rows, weight) => {
    return rows.reduce((acc, row) => {
      const percent = parseFloat(row.percentage);
      const credits = 12;
      if (isNaN(percent)) return acc;
      return acc + percent * credits * weight;
    }, 0);
  };

  const computeMax = (rows, weight) => rows.length * 100 * 12 * weight;

  const totalScore = computeTotal(year1, 1) + computeTotal(year2, 3) + computeTotal(year3, 5);
  const totalWeightedCredits = (
    year1.filter(r => r.percentage !== '' && !isNaN(parseFloat(r.percentage))).length * 12 * 1 +
    year2.filter(r => r.percentage !== '' && !isNaN(parseFloat(r.percentage))).length * 12 * 3 +
    year3.filter(r => r.percentage !== '' && !isNaN(parseFloat(r.percentage))).length * 12 * 5
);
  
  const maxScore = totalWeightedCredits;
  const cpa = totalWeightedCredits > 0 ? (totalScore / totalWeightedCredits).toFixed(2) : '0.00';

  const computeLPA = (rows, weight) => {
    const total = computeTotal(rows, weight);
    const credits = rows.filter(r => r.percentage !== '' && !isNaN(parseFloat(r.percentage))).length * 12 * weight;
    return credits > 0 ? (total / credits).toFixed(2) : '0.00';
  };

  const renderYear = (label, year, setter, weight) => {
    const lpa = computeLPA(year, weight);
    return (
      <div className="bg-white p-4 rounded shadow mb-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
          <h2 className="text-xl font-bold flex-shrink-0">{label}</h2>
          <div className="flex gap-4 text-sm text-indigo-700 font-semibold">
            <span className="bg-indigo-100 px-3 py-1 rounded">LPA: {lpa}</span>
            <span className="bg-indigo-100 px-3 py-1 rounded">CPA: {cpa}</span>
          </div>
        </div>
        {year.map((mod, i) => (
          <div key={i} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-3">
            <input placeholder="Module Name" value={mod.name} onChange={e => handleChange(setter, i, 'name', e.target.value)} className="border p-2 rounded" />
            <div className="flex flex-col">
  <input type="range" min="0" max="100" value={mod.percentage || 0} onChange={e => handleChange(setter, i, 'percentage', e.target.value)} className="w-full accent-indigo-600" />
  <span className={`text-sm text-center mt-1 font-medium ${mod.percentage < 40 ? 'text-red-600' : mod.percentage < 60 ? 'text-yellow-600' : 'text-green-700'}`}>{mod.percentage || 0}%</span>
</div>
          </div>
        ))}
        <button onClick={() => addRow(setter)} className="mt-2 px-4 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700">+ Add Row</button>
      </div>
    );
  };
  
  return (
    <>

      <main className="min-h-screen bg-gray-50 text-gray-900 p-6 pb-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">CPA Calculator</h1>

          {renderYear('Year 1', year1, setYear1, 1)}
          {renderYear('Year 2', year2, setYear2, 3)}
          {renderYear('Year 3', year3, setYear3, 5)}

          <div className="mt-8 bg-white p-4 rounded shadow">
            <p className="text-lg font-bold text-indigo-700 mt-2">CPA: {cpa}</p>
          </div>
        </div>
            
    </main>
    </>
  );
}
