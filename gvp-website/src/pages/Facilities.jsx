import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRightCircle, Monitor, Microscope, Trophy, Music, Binary } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const Facilities = () => {
  const facilityGrid = [
    {
      title: "ICT & Digital Labs",
      desc: "State-of-the-art computing modules with high-speed internet and AI-ready workstations.",
      img: "/images/infrastructure/lab.jpg",
      span: "lg:col-span-7",
      icon: Binary
    },
    {
      title: "Modern HBSE Wing",
      desc: "Dedicated primary and senior wings designed for standard-compliant academic focus.",
      img: "/images/infrastructure/upper-primary.avif",
      span: "lg:col-span-5",
      icon: Monitor
    },
    {
      title: "Green Sports Arena",
      desc: "Expansive outdoor play area with professional coaching for cricket, football, and athletics.",
      img: "/images/infrastructure/building.jpg",
      span: "lg:col-span-5",
      icon: Trophy
    },
    {
      title: "Activity Center",
      desc: "A creative hub for performing arts, music, and cultural development.",
      img: "/images/infrastructure/building.webp",
      span: "lg:col-span-7",
      icon: Music
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-white font-body selection:bg-secondary selection:text-primary">
      {/* 1. Page Header */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-heading font-black tracking-tight mb-6 font-bold"
          >
            Infrastructure for <span className="text-secondary underline decoration-secondary/30 underline-offset-8">Leaders.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/70 max-w-2xl mx-auto text-lg font-medium leading-relaxed"
          >
            At GVP, our campus is a fusion of heritage aesthetics and 21st-century technology. Every brick is a building block for a brighter future.
          </motion.p>
        </div>
      </section>

      {/* 2. Masonry Smart Campus Grid */}
      <section className="section-pad relative overflow-hidden">
        {/* Scientific Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(#2d5a27 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <SectionTitle subtitle="A detailed mapping of our high-fidelity technical and physical resources.">
            Campus Inventory & Resources
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mt-16">
            {facilityGrid.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`${item.span} md:col-span-12 relative group rounded-[2rem] overflow-hidden shadow-2xl h-[450px] md:h-[500px] lg:h-[550px]`}
              >
                <img src={item.img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={item.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent" />

                <div className="absolute top-10 right-10 w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
                  <item.icon className="text-secondary w-8 h-8" />
                </div>

                <div className="absolute bottom-12 left-12 right-12 text-white">
                  <h4 className="text-3xl md:text-4xl font-heading font-black mb-4 tracking-tighter">{item.title}</h4>
                  <p className="text-white/70 text-base md:text-lg font-bold leading-relaxed mb-8 max-w-xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700">
                    {item.description}
                  </p>
                  <p className="text-secondary font-black text-xs uppercase tracking-[0.2em] flex items-center gap-3">
                    <CheckCircle className="w-4 h-4" />
                    Advanced Feature Active
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Safety & Security Banner (The Shield) */}
      <section className="pb-32 container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-primary p-12 md:p-24 rounded-[4.5rem] text-white flex flex-col lg:flex-row items-center justify-between gap-16 overflow-hidden relative border-l-[1rem] border-secondary shadow-2xl shadow-primary/30"
        >
          <div className="relative z-10 flex-1">
            <span className="text-secondary font-black text-xs uppercase tracking-widest block mb-6 font-bold border-l-4 border-secondary pl-4">The Student Guard</span>
            <h3 className="text-4xl md:text-6xl font-heading font-black mb-8 tracking-tight leading-tight">A Shield for Every <br /><span className="text-secondary">Student Journey.</span></h3>
            <p className="text-white/60 max-w-xl text-lg md:text-xl font-bold leading-relaxed mb-12">
              Physical safety is our foundation. From high-definition monitoring to real-time transport tracking, we ensure total peace of mind for every parent.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                "24/7 CCTV Surveillance",
                "GPS Real-time Bus Tracking",
                "RFID Authorized Gate Entry",
                "Campus-wide Medical Support"
              ].map(point => (
                <div key={point} className="flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.15em] text-secondary/80">
                  <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center border border-secondary/20 shrink-0">
                    <ShieldCheck className="w-4 h-4 text-secondary" />
                  </div>
                  {point}
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/3 relative z-10 text-center lg:text-right">
            <div className="bg-white/5 backdrop-blur-3xl p-10 rounded-[3rem] border border-white/10 shadow-inner">
              <p className="text-6xl font-black text-secondary leading-none mb-2 tracking-tighter">100%</p>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">Safety Compliance</p>
              <button className="mt-10 px-10 py-5 bg-secondary text-primary font-black rounded hover:bg-white transition-all w-full text-xs tracking-widest uppercase">
                View Safety Specs
              </button>
            </div>
          </div>
          {/* Absolute Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-full bg-white/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
        </motion.div>
      </section>
    </div>
  );
};

export default Facilities;
