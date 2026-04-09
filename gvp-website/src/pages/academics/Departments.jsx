import React from 'react';
import SectionTitle from '../../components/SectionTitle';

const Departments = () => {
  return (
    <div className="pt-32 pb-20 container mx-auto px-6">
      <SectionTitle subtitle="Expertise across disciplines">Our Departments</SectionTitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        {['Science', 'Mathematics', 'ICT & Digital', 'Languages', 'Humanities', 'Sports & Wellness'].map((dept) => (
          <div key={dept} className="p-8 bg-white rounded-3xl shadow-lg border border-gray-100 hover:border-secondary transition-all group">
            <h3 className="text-xl font-black text-primary group-hover:text-secondary transition-colors">{dept}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Departments;
