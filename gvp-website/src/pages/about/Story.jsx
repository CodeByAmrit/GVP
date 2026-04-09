import React from 'react';
import SectionTitle from '../../components/SectionTitle';

const Story = () => {
  return (
    <div className="pt-32 pb-20 container mx-auto px-6">
      <SectionTitle subtitle="Our Journey Since 2001">Our Story</SectionTitle>
      <div className="max-w-4xl mx-auto space-y-12">
        <p className="text-lg text-gray-700 leading-relaxed font-bold border-l-4 border-secondary pl-6">
          Founded in 2001, GYAN VIDYA PEETH has grown from a visionary idea into a prestigious institution known for academic excellence and technical innovation.
        </p>
        <div className="grid md:grid-cols-2 gap-12">
          <img src="/images/infrastructure/building.jpg" alt="Original Building" className="rounded-3xl shadow-xl border-2 border-primary/10" />
          <div className="flex flex-col justify-center gap-6">
            <h3 className="text-3xl font-heading font-black text-primary">Heritage of Excellence</h3>
            <p className="text-gray-600 leading-relaxed">
              Our heritage is rooted in the belief that education should be a balance of traditional values and modern technological advancement. Over the last two decades, we have consistently produced top-tier graduates who are ready to lead in a globalized world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
