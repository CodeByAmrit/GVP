import React from 'react';
import SectionTitle from '../../components/SectionTitle';

const AdmissionProcess = () => {
  return (
    <div className="pt-32 pb-20 container mx-auto px-6">
      <SectionTitle subtitle="Step-by-step guidance to joining GVP">Admission Process</SectionTitle>
      <div className="grid md:grid-cols-4 gap-8 mt-12">
        {[
          { step: '01', title: 'Inquiry', desc: 'Visit campus or fill inquiry form online.' },
          { step: '02', title: 'Registration', desc: 'Register with documentation for evaluation.' },
          { step: '03', title: 'Interaction', desc: 'Student interaction and parent orientation.' },
          { step: '04', title: 'Admission', desc: 'Fee submission and final enrollment.' }
        ].map((item) => (
          <div key={item.step} className="p-8 bg-white rounded-3xl shadow-xl border border-gray-100 relative group">
            <span className="absolute -top-6 -right-6 text-6xl font-black text-secondary/10 group-hover:text-secondary/20 transition-colors uppercase">{item.step}</span>
            <h3 className="text-2xl font-black text-primary mb-4 tracking-tight">{item.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed font-bold">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdmissionProcess;
