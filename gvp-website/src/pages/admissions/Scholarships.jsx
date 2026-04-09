import React from 'react';
import SectionTitle from '../../components/SectionTitle';

const Scholarships = () => {
  return (
    <div className="pt-32 pb-20 container mx-auto px-6">
      <SectionTitle subtitle="Rewarding Merit & Technical Potential">Scholarships</SectionTitle>
      <div className="grid md:grid-cols-2 gap-12 mt-12">
        <div className="bg-white p-12 rounded-[3rem] shadow-2xl border border-primary/5">
          <h3 className="text-3xl font-heading font-black text-primary mb-6 tracking-tight">Merit Scholarship</h3>
          <p className="text-lg text-gray-700 leading-relaxed font-bold border-l-4 border-secondary pl-6 mb-8">
            Available for students securing above 90% in school or state level entrance evaluations.
          </p>
          <div className="p-4 bg-secondary/10 rounded-xl">
             <p className="text-xs font-black uppercase text-primary">UP TO 50% TUITION WAIVER</p>
          </div>
        </div>
        <div className="bg-primary p-12 rounded-[3rem] shadow-2xl text-white">
          <h3 className="text-3xl font-heading font-black text-secondary mb-6 tracking-tight">Technical Prodigy</h3>
          <p className="text-lg opacity-80 leading-relaxed font-bold mb-8">
            Special waiver for students showing exceptional skill in Coding, Robotics, or Science Innovation.
          </p>
          <div className="p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
            <p className="text-sm font-black">"Nurturing the innovators of tomorrow."</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scholarships;
