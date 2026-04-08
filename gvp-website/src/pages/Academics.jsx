import React from 'react';
import { motion } from 'framer-motion';
import { Book, Binary, GraduationCap } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const Academics = () => {
  return (
    <div className="pt-32 pb-24">
      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <SectionTitle subtitle="Mastering the HBSE curriculum with a global mindset.">State Board Success</SectionTitle>
            <p className="text-xl text-gray-600 leading-relaxed font-medium mt-[-2rem]">
              At GVP, we don't just follow the HBSE curriculum; we master it. Our students consistently secure state ranks thanks to our "Value-Technical" pedagogical model.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Wings Section */}
      <section className="py-24 bg-slate-hero">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Foundation Wing",
                desc: "Nurturing curiosity from the start. Focus on motor skills, phonics, and initial numeracy in a playful environment.",
                meta: "Pre-Nur to II",
                icon: Book,
                color: "primary"
              },
              {
                title: "Middle Wing",
                desc: "The technical revolution begins. Introduction to basics of coding, advanced science labs, and core social values.",
                meta: "III to VIII",
                icon: Binary,
                color: "secondary"
              },
              {
                title: "Higher Wing",
                desc: "Mastering the Board. Intensive HBSE coaching for 10th and 12th with a 100% success record in board exams.",
                meta: "IX to XII",
                icon: GraduationCap,
                color: "primary",
                dark: true
              }
            ].map((wing, idx) => (
              <motion.div
                key={wing.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`p-10 rounded-[2rem] shadow-xl border-l-8 h-full flex flex-col ${wing.dark ? 'bg-primary text-white border-secondary' : 'bg-white text-primary border-' + wing.color
                  }`}
              >
                <wing.icon className={`w-14 h-14 mb-8 ${wing.dark ? 'text-secondary' : 'text-' + wing.color}`} />
                <h3 className="text-2xl font-black mb-4 tracking-tight">{wing.title}</h3>
                <p className={`text-sm italic leading-relaxed mb-8 ${wing.dark ? 'text-white/70' : 'text-gray-500'}`}>{wing.desc}</p>
                <div className="mt-auto">
                  <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${wing.dark ? 'bg-white/10 text-secondary' : 'bg-primary/10 text-primary'
                    }`}>
                    {wing.meta}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
