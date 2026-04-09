import React from 'react';
import SectionTitle from '../../components/SectionTitle';

const FeeStructure = () => {
  return (
    <div className="pt-32 pb-20 container mx-auto px-6">
      <SectionTitle subtitle="Transparent & Fair Pricing">Fee Structure</SectionTitle>
      <div className="max-w-4xl mx-auto mt-12 bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100">
        <table className="w-full text-left">
          <thead className="bg-primary text-white">
            <tr>
              <th className="px-8 py-6 uppercase tracking-widest text-xs font-black">Wing</th>
              <th className="px-8 py-6 uppercase tracking-widest text-xs font-black">Fee Details</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 font-bold text-gray-700">
            {[
              { wing: 'Foundation Wing', fee: 'Competitive annual scholarship-linked fees.' },
              { wing: 'Middle Wing', fee: 'Standard board-aligned fee structure.' },
              { wing: 'Senior Wing', fee: 'Academic & technical focused fees for Board years.' }
            ].map((row, idx) => (
              <tr key={idx} className="hover:bg-slate-50 transition-colors">
                <td className="px-8 py-6 text-gray-700 font-bold">{row.wing}</td>
                <td className="px-8 py-6 text-secondary font-black">{row.fee}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="p-8 bg-slate-50 text-center">
          <p className="text-xs text-secondary font-black uppercase tracking-widest leading-relaxed">
            Note: All fees are subject to institutional policies and wing-wise requirements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeeStructure;
