import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, Binoculars, Users, History, CheckCircle2 } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const About = () => {
  const milestones = [
    { year: "1990", title: "Founding Foundation", desc: "The first stone laying of the Gyan Vidya Peeth and the national of the giant foundation.", img: "/src/assets/images/infrastructure/building.jpg" },
    { year: "2005", title: "Expansion & New Campus", desc: "Gyan Vidya Peeth is the most unique new campus and new wing is international building architecture.", img: "/src/assets/images/infrastructure/building.webp" },
    { year: "2015", title: "Global Recognition", desc: "Students share an international conference and major students study in the international campuses.", img: "/src/assets/images/toppers/jiya.jpg" },
    { year: "2024", title: "Future-Ready Curriculum", desc: "Robotics lab and advanced technical ecosystems are introduced to develop AI and robotics solution studies.", img: "/src/assets/images/infrastructure/lab.jpg" }
  ];

  const leadership = [
    {
      name: "Dr. Rajesh Sharma",
      role: "Principal",
      img: "/src/assets/images/toppers/jiya.jpg", // Placeholder - Needs actual profile
      bio: "Dr. Rajesh Sharma is a veteran educationist who has shaped leader and students for over two decades. His vision is defined by academic excellence, innovation, and modern standards which integrates traditional values with modern learning styles. He leads with the firm belief that the individual growth of each student and professional is the unique concern of our management."
    },
    { name: "Mrs. Indira Devi", role: "Board Member", img: "/src/assets/images/toppers/jiya.jpg", sub: "Mrs. Indira Devi (Chairperson) leads with focus and determination toward excellence across all institutional areas." },
    { name: "Mr. Arjun Kapoor", role: "Board Member", img: "/src/assets/images/toppers/jiya.jpg", sub: "Mr. Arjun Kapoor (Director) is a visionary leader steering toward better student management and results." },
    { name: "Prof. Vikram Singh", role: "Board Member", img: "/src/assets/images/toppers/jiya.jpg", sub: "Prof. Vikram Singh (Advisory) is a professional academician who focuses on new educational strategies." }
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* 1. Vision & Mission Hero */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/src/assets/images/infrastructure/building.jpg" className="w-full h-full object-cover" alt="Heritage" />
          <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
        </div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-white">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl bg-black/30 backdrop-blur-md p-10 rounded-[2rem] border border-white/10">
            <h2 className="text-4xl md:text-5xl font-heading font-black text-secondary mb-6 italic tracking-tight underline decoration-secondary decoration-8 underline-offset-10">Our Vision & Mission</h2>
            <p className="text-xl font-medium leading-relaxed opacity-90">
              Gyan Vidya Peeth: Bridging Tradition with Future-Ready Education. Nurturing minds with timeless wisdom and modern innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Journey Header */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-black text-primary tracking-tight mb-4 italic">A Journey of Excellence & Growth</h2>
          <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full" />
        </div>
      </section>

      {/* 3. Milestone Timeline */}
      <section className="pb-32 container mx-auto px-6 md:px-12">
        <div className="space-y-32">
          {milestones.map((ms, idx) => (
            <div key={idx} className={`flex flex-col lg:flex-row gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <motion.div
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="lg:w-1/2 relative group"
              >
                <div className="absolute -inset-4 bg-primary/5 rounded-[2rem] group-hover:bg-primary transition-colors duration-700" />
                <img src={ms.img} className="relative z-10 rounded-[3rem] shadow-2xl h-[400px] w-full object-cover" alt={ms.title} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: idx % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="lg:w-1/2 flex gap-10"
              >
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center shrink-0 border-4 border-white shadow-xl">
                    <History className="text-primary w-8 h-8" />
                  </div>
                  <div className="w-1.5 h-full bg-slate-100 flex-grow rounded-full mt-4" />
                </div>
                <div className="pt-2">
                  <span className="text-3xl font-black text-primary/20 block mb-2">{ms.year} -</span>
                  <h3 className="text-3xl font-heading font-black text-primary mb-4 tracking-tighter italic">{ms.title}</h3>
                  <p className="text-lg text-gray-500 font-medium leading-relaxed italic">{ms.desc}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Esteemed Leadership */}
      <section className="section-pad bg-slate-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#2d5a27 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-heading font-black text-primary italic tracking-tight">Our Esteemed Leadership</h2>
            <div className="w-20 h-2 bg-secondary/30 mx-auto mt-6 rounded-full" />
          </div>

          {/* Principal Feature */}
          <div className="max-w-6xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white p-10 md:p-16 rounded-[2rem] shadow-2xl border border-primary/5 flex flex-col md:flex-row gap-16 items-center"
            >
              <img src={leadership[0].img} className="w-80 h-96 object-cover rounded-[3rem] shadow-xl grayscale hover:grayscale-0 transition-all duration-700" alt="Principal" />
              <div className="flex-1">
                <span className="text-secondary font-black text-xs uppercase tracking-widest block mb-2">{leadership[0].role}</span>
                <h3 className="text-4xl font-heading font-black text-primary mb-6 tracking-tight italic underline decoration-secondary/30 decoration-8 underline-offset-10">{leadership[0].name}</h3>
                <p className="text-gray-600 text-lg italic leading-relaxed font-medium">
                  {leadership[0].bio}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Board Members Grid */}
          <div className="grid md:grid-cols-3 gap-10">
            {leadership.slice(1).map((board, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-10 rounded-[2rem] shadow-xl border border-primary/5 group"
              >
                <img src={board.img} className="w-full h-72 object-cover rounded-[2.5rem] mb-8 grayscale group-hover:grayscale-0 transition-all duration-700" alt={board.name} />
                <h4 className="text-xl font-heading font-black text-primary tracking-tight mb-2 italic">{board.name}</h4>
                <p className="text-secondary font-black text-[10px] uppercase tracking-widest mb-4">{board.role}</p>
                <p className="text-gray-500 text-sm italic leading-relaxed">{board.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
