import React from 'react';
import SectionTitle from '../components/SectionTitle';

const CampusLife = () => {
  return (
    <div className="pt-32 pb-20 container mx-auto px-6">
      <SectionTitle subtitle="Beyond the Classroom">Campus Life</SectionTitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden group">
          <img src="/images/infrastructure/building.jpg" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700" alt="Sports" />
          <div className="p-8">
            <h3 className="text-2xl font-black text-primary mb-4">Sports Arena</h3>
            <p className="text-gray-500 text-sm font-bold">Developing teamwork and physical excellence through competitive sports.</p>
          </div>
        </div>
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden group">
          <img src="/images/infrastructure/building.webp" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700" alt="Culture" />
          <div className="p-8">
            <h3 className="text-2xl font-black text-primary mb-4">Cultural Events</h3>
            <p className="text-gray-500 text-sm font-bold">Celebrating India's rich heritage through music, dance, and arts.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampusLife;
