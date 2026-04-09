import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import { Award, ShieldCheck, CheckCircle } from 'lucide-react';

const Accreditations = () => {
  return (
    <div className="pt-32 pb-20 container mx-auto px-6">
      <SectionTitle subtitle="Certified Excellence & Standards">Accreditations</SectionTitle>
      <div className="grid md:grid-cols-2 gap-12 mt-12">
        <div className="bg-white p-12 rounded-[3rem] shadow-2xl border border-primary/5">
          <Award className="w-16 h-16 text-secondary mb-8" />
          <h3 className="text-3xl font-heading font-black text-primary mb-6 tracking-tight">CBSE Affiliation</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            GYAN VIDYA PEETH is proudly affiliated with the Central Board of Secondary Education (CBSE), New Delhi. Affiliation No: 530041.
          </p>
          <ul className="space-y-4">
            {['Affiliation No: 530041', 'School Code: 40059', 'Certified Since 2001'].map((li) => (
              <li key={li} className="flex items-center gap-4 text-sm font-black uppercase tracking-widest text-primary/60">
                <CheckCircle className="w-6 h-6 text-secondary" /> {li}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-primary p-12 rounded-[3rem] shadow-2xl text-white">
          <ShieldCheck className="w-16 h-16 text-secondary mb-8" />
          <h3 className="text-3xl font-heading font-black text-secondary mb-6 tracking-tight">Quality Standards</h3>
          <p className="text-lg opacity-80 leading-relaxed mb-8">
            We maintain the highest standards of safety, hygiene, and academic delivery as prescribed by the national guidelines.
          </p>
          <div className="p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
            <p className="text-sm font-bold">"Committed to excellence in every dimension of educational delivery."</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accreditations;
