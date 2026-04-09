import React from 'react';
import SectionTitle from '../../components/SectionTitle';

const Leadership = () => {
  return (
    <div className="pt-32 pb-20 container mx-auto px-6">
      <SectionTitle subtitle="Meet the visionaries behind GVP">Our Leadership</SectionTitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
        <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-gray-100 p-8">
          <img src="/images/toppers/jiya.jpg" className="w-full h-64 object-cover rounded-2xl mb-6" alt="Director" />
          <h3 className="text-2xl font-black text-primary mb-2">Mr. Devender Singla</h3>
          <p className="text-secondary font-black text-xs uppercase tracking-widest mb-4">Founder & Chairman</p>
          <p className="text-gray-600 font-bold">"GVP is the soul of technical revolution and values."</p>
        </div>
        <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-gray-100 p-8">
          <img src="/images/toppers/jiya.jpg" className="w-full h-64 object-cover rounded-2xl mb-6" alt="Principal" />
          <h3 className="text-2xl font-black text-primary mb-2">Dr. Rajesh Sharma</h3>
          <p className="text-secondary font-black text-xs uppercase tracking-widest mb-4">Educational Director</p>
          <p className="text-gray-600 font-bold">"Academic excellence is our tradition."</p>
        </div>
      </div>
    </div>
  );
};

export default Leadership;
