import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRightCircle, Award, BookOpen, Users,
  GraduationCap, CheckCircle, MapPin, PhoneCall,
  Mail, Facebook, Instagram, Youtube, LayoutDashboard,
  Binary, School, HeartHandshake, Quote
} from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      img: "/images/infrastructure/building.jpg",
      title: "Future Ready.",
      highlight: "Value Grounded."
    },
    {
      img: "/images/infrastructure/building.webp",
      title: "Technical Revolution.",
      highlight: "Academic Excellence."
    },
    {
      img: "/images/infrastructure/upper-primary.avif",
      title: "Leading with.",
      highlight: "Innovation."
    }
  ];

  useEffect(() => {
    const sliderTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(sliderTimer);
  }, []);

  return (
    <div className="bg-slate-hero flex flex-col font-body selection:bg-secondary selection:text-primary">

      <main>
        {/* 2. Hero Section */}
        <section className="relative h-screen flex items-center overflow-hidden">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 z-0"
            >
              <div className="absolute inset-0 bg-primary/40 mix-blend-multiply z-10" />
              <img src={heroSlides[currentSlide].img} className="w-full h-full object-cover" alt="Campus" />
            </motion.div>
          </AnimatePresence>

          <div className="container mx-auto px-6 md:px-12 relative z-20">
            <div className="max-w-4xl text-white">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-block px-5 py-2 bg-secondary/90 text-primary font-black text-xs uppercase tracking-widest rounded-full mb-8 italic shadow-xl"
              >
                Lead • Innovate • Values
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-5xl md:text-7xl font-heading font-black leading-[1.1] mb-8 tracking-tight drop-shadow-2xl"
              >
                {heroSlides[currentSlide].title} <br />
                <span className="text-secondary italic underline decoration-secondary/20 decoration-4 underline-offset-10">{heroSlides[currentSlide].highlight}</span>
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-6 mt-12"
              >
                <a href="#admissions" className="px-10 py-5 bg-secondary text-primary font-black text-lg rounded-full shadow-2xl hover:bg-yellow-500 transition-all flex items-center gap-4 active:scale-95 group">
                  Enroll for 2026-27
                  <ArrowRightCircle className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#tour" className="px-10 py-5 bg-white/10 backdrop-blur-md border border-white/30 text-white font-black text-lg rounded-full hover:bg-white hover:text-primary transition-all active:scale-95">
                  Schedule a Tour
                </a>
              </motion.div>
            </div>
          </div>

          <div className="absolute bottom-10 left-12 z-30 hidden md:flex items-center gap-4">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-1.5 transition-all duration-700 rounded-full ${currentSlide === idx ? 'w-16 bg-secondary' : 'w-6 bg-white/30'}`}
              />
            ))}
          </div>
        </section>

        {/* 3. Topper’s Hall of Fame */}
        <section className="section-pad bg-white relative overflow-hidden">
          <div className="container mx-auto px-6 md:px-12">
            <SectionTitle subtitle="Setting the benchmark for state-level academic distinction.">Academic Hall of Fame</SectionTitle>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute -inset-4 bg-primary/20 blur-3xl opacity-20 group-hover:opacity-40 transition-opacity" />
                <div className="relative bg-secondary/10 rounded-[3rem] p-8 border-2 border-primary/5 overflow-hidden">
                  <img src="/images/toppers/jiya.jpg" alt="Jiya Kumari" className="w-full h-auto rounded-[2rem] shadow-2xl transition duration-700 group-hover:scale-105" />
                  <div className="absolute top-12 right-12 bg-primary text-secondary px-8 py-4 rounded-full font-black shadow-2xl italic tracking-tighter text-xl scale-90 md:scale-100">
                    STATE RANK 8 (98%)
                  </div>
                </div>
              </motion.div>
              <div className="space-y-10">
                <motion.h3
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-6xl font-heading font-black text-primary leading-tight tracking-tight"
                >
                  Legacy of <br /><span className="text-secondary italic underline decoration-secondary/30 decoration-8 underline-offset-8">Distinction.</span>
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-xl text-gray-700 leading-relaxed italic border-l-8 border-secondary pl-8 py-2 font-medium"
                >
                  "The GVP ecosystem taught me that technology isn't just about computers; it's about solving problems with values."
                </motion.p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-8 bg-slate-hero rounded-3xl border-l-4 border-primary shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="text-4xl font-black text-primary">100/100</h4>
                    <p className="text-xs font-bold uppercase text-gray-400 mt-2 tracking-widest">Mathematics State Score</p>
                  </div>
                  <div className="p-8 bg-slate-hero rounded-3xl border-l-4 border-secondary shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="text-4xl font-black text-primary">State Rank</h4>
                    <p className="text-xs font-bold uppercase text-gray-400 mt-2 tracking-widest">Haryana Board Top 10</p>
                  </div>
                </div>
                <button className="btn-green text-lg px-10 py-5">
                  Explore Success Stories
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Leadership Perspective */}
        <section className="section-pad bg-primary text-white relative overflow-hidden">
          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="flex flex-col lg:flex-row gap-20 items-center">
              <div className="lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="p-8 md:p-14 bg-white/5 border border-white/10 rounded-[2rem] backdrop-blur-xl relative"
                >
                  <Quote className="w-12 h-12 text-secondary/40 mb-6" />
                  <h3 className="text-2xl md:text-3xl font-heading font-bold italic mb-10 leading-relaxed tracking-tight">
                    "Creating future leaders using technical revolutions and values is not just our tagline; it is the soul of GVP."
                  </h3>
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center font-black text-primary text-2xl">DS</div>
                    <div>
                      <h4 className="text-xl font-black text-secondary">Mr. Devender Singla</h4>
                      <p className="text-sm font-bold opacity-60 uppercase tracking-widest mt-1">Director, GVP Group</p>
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="lg:w-1/2 space-y-10">
                <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tight leading-tight">Pioneering a <span className="text-secondary italic">New Standard.</span></h2>
                <p className="text-base md:text-lg text-white/80 leading-relaxed font-medium">
                  For over two decades, we have been more than just a school. We are an incubator for the technical minds of tomorrow, grounded in the cultural soil of India.
                </p>
                <div className="space-y-4">
                  {[
                    "HBSE State Board Excellence",
                    "Advanced Technical Integration",
                    "Cultural & Moral Value Education"
                  ].map(item => (
                    <div key={item} className="flex items-center gap-4 text-white/90 font-bold uppercase tracking-wide text-sm">
                      <CheckCircle className="text-secondary w-6 h-6" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Institutional Stats */}
        <section className="py-20 bg-secondary relative">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                { label: "Years of Legacy", val: "24+", sub: "Since 2001" },
                { label: "Current Students", val: "850+", sub: "Dynamic Community" },
                { label: "Dedicated Faculty", val: "25+", sub: "Expert Mentors" },
                { label: "State Result Success", val: "100%", sub: "Board Excellence" }
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="text-4xl md:text-6xl font-black text-primary mb-3 transition-transform group-hover:scale-105 tracking-tighter">{stat.val}</div>
                  <div className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-primary/80">{stat.label}</div>
                  <div className="text-[9px] uppercase tracking-widest text-primary/40 mt-1 font-bold italic">{stat.sub}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Smart Campus Infrastructure */}
        <section id="infrastructure" className="section-pad relative overflow-hidden">
          {/* Scientific Grid Background */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(#2d5a27 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <SectionTitle subtitle="A fusion of expansive greenery and cutting-edge technology.">
              Smart Campus Infrastructure
            </SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-auto lg:h-[700px]">
              {/* Top Left: ICT & Digital Labs (Large) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="md:col-span-12 lg:col-span-7 relative group overflow-hidden rounded-[3rem] shadow-xl"
              >
                <img src="/images/infrastructure/lab.jpg" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="ICT Labs" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
                <div className="absolute bottom-10 left-10 text-white">
                  <h4 className="text-3xl font-black mb-2 tracking-tight">ICT & Digital Labs</h4>
                  <p className="text-secondary font-black text-xs uppercase tracking-widest flex items-center gap-2">
                    Explore Detail <ArrowRightCircle className="w-5 h-5" />
                  </p>
                </div>
              </motion.div>

              {/* Top Right: Modern HBSE Wing (Small) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="md:col-span-6 lg:col-span-5 relative group overflow-hidden rounded-[3rem] shadow-xl"
              >
                <img src="/images/infrastructure/upper-primary.avif" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="HBSE Wing" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
                <div className="absolute bottom-10 left-10 text-white">
                  <h4 className="text-3xl font-black mb-2 tracking-tight">Modern HBSE Wing</h4>
                  <p className="text-secondary font-black text-xs uppercase tracking-widest flex items-center gap-2">
                    Explore Detail <ArrowRightCircle className="w-5 h-5" />
                  </p>
                </div>
              </motion.div>

              {/* Bottom Left: Green Sports Arena (Small) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="md:col-span-6 lg:col-span-5 relative group overflow-hidden rounded-[3rem] shadow-xl"
              >
                <img src="/images/infrastructure/building.jpg" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Sports Arena" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
                <div className="absolute bottom-10 left-10 text-white">
                  <h4 className="text-3xl font-black mb-2 tracking-tight">Green Sports Arena</h4>
                  <p className="text-secondary font-black text-xs uppercase tracking-widest flex items-center gap-2">
                    Explore Detail <ArrowRightCircle className="w-5 h-5" />
                  </p>
                </div>
              </motion.div>

              {/* Bottom Right: Activity Center (Large) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="md:col-span-12 lg:col-span-7 relative group overflow-hidden rounded-[3rem] shadow-xl"
              >
                <img src="/images/infrastructure/building.webp" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Activity Center" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
                <div className="absolute bottom-10 left-10 text-white">
                  <h4 className="text-3xl font-black mb-2 tracking-tight">Activity Center</h4>
                  <p className="text-secondary font-black text-xs uppercase tracking-widest flex items-center gap-2">
                    Explore Detail <ArrowRightCircle className="w-5 h-5" />
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 10. Admission Inquiry */}
        <section id="admissions" className="section-pad bg-primary relative overflow-hidden">
          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="max-w-6xl mx-auto bg-white rounded-[2rem] shadow-2xl overflow-hidden grid lg:grid-cols-2">
              <div className="p-12 md:p-16 bg-secondary flex flex-col justify-center text-primary">
                <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}>
                  <h3 className="text-3xl md:text-5xl font-heading font-black leading-tight mb-8 drop-shadow-sm tracking-tight">Join the <br /><span className="text-white italic">Technical Revolution.</span></h3>
                  <p className="text-base font-bold mb-10 opacity-80 leading-relaxed uppercase tracking-widest italic border-l-4 border-primary pl-6">Admissions Open 2026-27 <br /><span className="text-sm font-black opacity-40">limited seats across wings.</span></p>
                  <ul className="space-y-6">
                    {['Priority Campus Tours', 'Direct Merit Admissions', 'Scholarship Assessment'].map((li) => (
                      <li key={li} className="flex items-center gap-4 text-sm font-black uppercase tracking-widest">
                        <CheckCircle className="w-6 h-6" /> {li}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
              <div className="p-12 md:p-20">
                <h4 className="text-2xl font-black text-primary mb-10 italic">Inquiry for Admission</h4>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-gray-400 pl-4">Parent Name</label>
                      <input type="text" className="w-full px-6 py-4 bg-slate-hero border-2 border-transparent focus:border-primary focus:outline-none rounded-2xl transition-all" placeholder="Enter Full Name" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-gray-400 pl-4">Phone Number</label>
                      <input type="tel" className="w-full px-6 py-4 bg-slate-hero border-2 border-transparent focus:border-primary focus:outline-none rounded-2xl transition-all" placeholder="+91 00000 00000" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-400 pl-4">Applying for Class</label>
                    <select className="w-full px-6 py-4 bg-slate-hero border-2 border-transparent focus:border-primary focus:outline-none rounded-2xl transition-all appearance-none cursor-pointer">
                      <option>Foundation Wing (Pre-Nur to II)</option>
                      <option>Middle Wing (III to VIII)</option>
                      <option>Senior Wing (IX to XII)</option>
                    </select>
                  </div>
                  <button className="cursor-pointer w-full btn-green py-6 text-xl shadow-2xl shadow-primary/20 mt-4 outline-none bg-secondary">
                    Submit Enrollment Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
