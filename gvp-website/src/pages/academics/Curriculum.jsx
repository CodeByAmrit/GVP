import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import { BookOpen, Binary, GraduationCap } from 'lucide-react';

const Curriculum = () => {
  return (
    <div className="pt-32 pb-20 container mx-auto px-6">
      <SectionTitle subtitle="HBSE Alignment & Technical Edge">Our Curriculum</SectionTitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        <div className="p-10 bg-white rounded-[2rem] shadow-xl border-l-8 border-primary">
          <BookOpen className="w-12 h-12 text-primary mb-6" />
          <h3 className="text-2xl font-black text-primary mb-4">Core Academic HBSE</h3>
          <p className="text-gray-500 text-sm leading-relaxed font-bold">
            Focus on mastering the board curriculum with dedicated mentors and rigorous practice sessions.
          </p>
        </div>
        <div className="p-10 bg-white rounded-[2rem] shadow-xl border-l-8 border-secondary">
          <Binary className="w-12 h-12 text-secondary mb-6" />
          <p className="text-gray-500 text-sm leading-relaxed font-bold">
            Digital learning and coding basics integrated within the standard board subjects to make learning future-ready.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
