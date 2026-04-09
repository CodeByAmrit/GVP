import React from 'react';
import SectionTitle from '../../components/SectionTitle';

const Examinations = () => {
  return (
    <div className="pt-32 pb-20 container mx-auto px-6">
      <SectionTitle subtitle="Mastering HBSE Board Evaluation">Examinations</SectionTitle>
      <div className="grid md:grid-cols-2 gap-12 mt-12">
        <div className="bg-white p-12 rounded-[3rem] shadow-2xl border border-primary/5">
          <h3 className="text-3xl font-heading font-black text-primary mb-6 tracking-tight">Standard Assessment</h3>
          <p className="text-lg text-gray-700 leading-relaxed font-bold border-l-4 border-secondary pl-6 mb-8">
            Continuous Comprehensive Evaluation (CCE) across Foundation and Middle wings ensuring consistent progress monitoring.
          </p>
          <ul className="space-y-4">
            {['Unit Tests', 'Terminal Exams', 'Class Assignments'].map((li) => (
              <li key={li} className="text-sm font-black uppercase tracking-widest text-primary opacity-60">• {li}</li>
            ))}
          </ul>
        </div>
        <div className="bg-primary p-12 rounded-[3rem] shadow-2xl text-white">
          <h3 className="text-3xl font-heading font-black text-secondary font-bold mb-6 tracking-tight">Board Excellence</h3>
          <p className="text-lg opacity-80 leading-relaxed font-bold mb-8">
            Intensive coaching and mock examinations specifically designed for 10th and 12th Board success.
          </p>
          <div className="p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
            <p className="text-sm font-black">100% SUCCESS RECORD IN HBSE BOARD EXAMS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Examinations;
