import React from 'react';
import SectionTitle from '../components/SectionTitle';

const Infrastructure = () => {
  return (
    <div className="pt-32 pb-20 container mx-auto px-6">
      <SectionTitle subtitle="World-class Facilities">Infrastructure</SectionTitle>
      <div className="grid md:grid-cols-2 gap-12 mt-12">
        <div className="relative rounded-[3rem] overflow-hidden group shadow-2xl">
          <img src="/images/infrastructure/lab.jpg" className="w-full h-[500px] object-cover group-hover:scale-110 transition-transform duration-1000" alt="Tech Lab" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
          <div className="absolute bottom-10 left-10 text-white">
            <h4 className="text-3xl font-black mb-2">Scientific & ICT Labs</h4>
            <p className="text-secondary font-black text-xs uppercase tracking-widest">State-of-the-art Equipment</p>
          </div>
        </div>
        <div className="relative rounded-[3rem] overflow-hidden group shadow-2xl">
          <img src="/images/infrastructure/building.jpg" className="w-full h-[500px] object-cover group-hover:scale-110 transition-transform duration-1000" alt="Campus" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
          <div className="absolute bottom-10 left-10 text-white">
            <h4 className="text-3xl font-black mb-2">Green Campus</h4>
            <p className="text-secondary font-black text-xs uppercase tracking-widest">Eco-friendly Learning Environment</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infrastructure;
