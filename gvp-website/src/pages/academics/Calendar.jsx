import React from 'react';
import SectionTitle from '../../components/SectionTitle';

const AcademicCalendar = () => {
  return (
    <div className="pt-32 pb-20 container mx-auto px-6">
      <SectionTitle subtitle="Key Academic Dates 2026-27">Academic Calendar</SectionTitle>
      <div className="max-w-4xl mx-auto mt-12 bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100">
        <table className="w-full text-left">
          <thead className="bg-primary text-white">
            <tr>
              <th className="px-8 py-6 uppercase tracking-widest text-xs font-black">Event</th>
              <th className="px-8 py-6 uppercase tracking-widest text-xs font-black">Dates</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 font-bold text-gray-700">
            {[
              { event: 'New Session 2026-27 Begins', date: 'April 01, 2026' },
              { event: 'Summer Vacation', date: 'June 01 - June 30, 2026' },
              { event: 'Mid-Term Examinations', date: 'September 2026' },
              { event: 'Winter Break', date: 'December 25 - January 05, 2027' },
              { event: 'Final Board Preparations', date: 'February 2027' }
            ].map((row, idx) => (
              <tr key={idx} className="hover:bg-slate-50 transition-colors">
                <td className="px-8 py-6 text-gray-700 font-bold">{row.event}</td>
                <td className="px-8 py-6 text-secondary font-black">{row.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AcademicCalendar;
