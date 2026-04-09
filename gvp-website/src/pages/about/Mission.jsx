import React from 'react';
import SectionTitle from '../../components/SectionTitle';

const Mission = () => {
  return (
    <div className="pt-32 pb-20 container mx-auto px-6">
      <SectionTitle subtitle="Vision, Mission & Core Values">Our Purpose</SectionTitle>
      <div className="grid md:grid-cols-2 gap-16 items-start mt-12">
        <div className="space-y-8 bg-primary/5 p-12 rounded-[3rem]">
          <h3 className="text-3xl font-heading font-black text-primary mb-6 tracking-tight">Our Vision</h3>
          <p className="text-lg text-gray-700 leading-relaxed font-bold">
            "To be a global leader in education, fostering an environment where innovation, technical excellence, and traditional Indian values converge to create the leaders of tomorrow."
          </p>
        </div>
        <div className="space-y-8 bg-secondary/10 p-12 rounded-[3rem]">
          <h3 className="text-3xl font-heading font-black text-primary mb-6 tracking-tight">Our Mission</h3>
          <p className="text-lg text-gray-700 leading-relaxed font-bold">
            "We strive to provide holistic education that empowers students with critical thinking, technical prowess, and a strong moral compass through cutting-edge HBSE curriculum integration."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
