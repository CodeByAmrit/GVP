import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRightCircle, Award, BookOpen, Users,
  GraduationCap, CheckCircle, MapPin, PhoneCall,
  Mail, Facebook, Instagram, Youtube, LayoutDashboard,
  Binary, School, HeartHandshake, Quote, Eye,
  Clock, TrendingUp, Sparkles, Shield, Globe, Cpu
} from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      img: "/images/infrastructure/building.jpg",
      title: "Future Ready.",
      highlight: "Value Grounded.",
      description: "Empowering young minds with cutting-edge technology and timeless values"
    },
    {
      img: "/images/infrastructure/0D4A0416.JPG",
      title: "Modern Vision.",
      highlight: "Digital Growth.",
      description: "Preparing students for a tech-driven world with smart campus solutions."
    },
    {
      img: "/images/infrastructure/lab.jpg",
      title: "Science & Tech.",
      highlight: "Innovative Labs.",
      description: "Exploring the frontiers of knowledge with state-of-the-art laboratory facilities."
    },
    {
      img: "/images/infrastructure/2025-05-28.jpg",
      title: "Campus Life.",
      highlight: "Vibrant Culture.",
      description: "Nurturing students in a dynamic environment that celebrates every achievement."
    },
    {
      img: "/images/infrastructure/unnamed.jpg",
      title: "Creative Minds.",
      highlight: "Artistic Expression.",
      description: "Encouraging creativity and self-expression through diverse arts programs."
    },
    {
      img: "/images/infrastructure/upper-primary.avif",
      title: "Academic Excellence.",
      highlight: "Strong Foundation.",
      description: "Building a solid educational base for the leaders of tomorrow."
    },
    {
      img: "/images/infrastructure/building.webp",
      title: "Strategic Vision.",
      highlight: "Global Leaders.",
      description: "Cultivating a global mindset with traditional Indian leadership values."
    }
  ];

  useEffect(() => {
    const sliderTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(sliderTimer);
  }, [heroSlides.length]);

  // Animation variants for the slider
  const slideVariants = {
    enter: { x: '100%', opacity: 1 },
    center: { x: 0, opacity: 1 },
    exit: { x: '-100%', opacity: 1 }
  };

  // Statistics data
  const stats = [
    { label: "Years of Excellence", value: "24+", icon: Award, sub: "Since 2001" },
    { label: "Happy Students", value: "850+", icon: Users, sub: "Thriving Community" },
    { label: "Expert Faculty", value: "45+", icon: GraduationCap, sub: "Qualified Mentors" },
    { label: "Success Rate", value: "100%", icon: TrendingUp, sub: "Board Results" }
  ];

  // Features data
  const features = [
    { icon: Cpu, title: "Smart Classrooms", description: "Interactive digital learning environments", color: "from-blue-500 to-cyan-500" },
    { icon: Binary, title: "Computer Labs", description: "State-of-the-art computing facilities", color: "from-purple-500 to-pink-500" },
    { icon: Shield, title: "Safe Campus", description: "24/7 security & CCTV surveillance", color: "from-green-500 to-emerald-500" },
    { icon: Globe, title: "Global Exposure", description: "International collaborations & events", color: "from-orange-500 to-red-500" }
  ];

  return (
    <div className="bg-slate-hero font-body overflow-x-hidden">
      <main>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center overflow-hidden">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentSlide}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.5 }
              }}
              className="absolute inset-0 z-0"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/50 to-transparent z-10" />
              <img
                src={heroSlides[currentSlide].img}
                className="w-full h-full object-cover"
                alt="Campus"
              />
            </motion.div>
          </AnimatePresence>

          <div className="container mx-auto px-6 md:px-12 relative z-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Column: Hero Content */}
              <div className="text-white">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 mb-6"
                >
                  <span className="px-4 py-1.5 bg-secondary text-primary font-bold text-xs uppercase tracking-widest rounded-full">
                    Since 2001
                  </span>
                  <span className="px-4 py-1.5 bg-white/20 backdrop-blur-sm text-white font-bold text-xs uppercase tracking-widest rounded-full">
                    CBSE Affiliated
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-4xl md:text-6xl lg:text-7xl font-heading font-black leading-[1.1] mb-6 tracking-tighter"
                >
                  {heroSlides[currentSlide].title} <br />
                  <span className="text-secondary font-bold inline-block">
                    {heroSlides[currentSlide].highlight}
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-base md:text-lg text-white/90 mb-10 max-w-xl leading-relaxed"
                >
                  {heroSlides[currentSlide].description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-wrap gap-5"
                >
                  <a href="#admissions" className="group px-8 py-4 bg-secondary text-primary font-bold text-lg rounded-full shadow-2xl hover:bg-secondary-dark transition-all flex items-center gap-3 hover:gap-4">
                    Enroll for 2026-27
                    <ArrowRightCircle className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a href="#infrastructure" className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold text-lg rounded-full hover:bg-white hover:text-primary transition-all">
                    Virtual Tour
                  </a>
                </motion.div>
              </div>

              {/* Right Column: Smart Hub Dashboard */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: 50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="hidden lg:block relative"
              >
                {/* Floating Decorative Elements */}
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-secondary/20 rounded-full blur-3xl animate-pulse-slow" />
                <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />

                <div className="glass-premium p-8 rounded-[3rem] border border-white/20 relative z-10 shadow-2xl overflow-hidden group bg-primary/40 backdrop-blur-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50" />
                  
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center">
                        <Cpu className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-sm drop-shadow-md">GVP Smart Hub</h4>
                        <p className="text-white/60 text-[10px] uppercase tracking-widest font-black">Active Session: 2026-27</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                       <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
                       <span className="text-[10px] text-white/80 font-mono font-bold">LIVE</span>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {/* Stat Item */}
                    <div className="flex items-center justify-between p-4 bg-white/10 rounded-2xl border border-white/10">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-primary/40 rounded-lg flex items-center justify-center border border-white/10">
                          <Globe className="w-5 h-5 text-secondary" />
                        </div>
                        <span className="text-sm text-white font-bold tracking-tight drop-shadow-sm">Technical Proficiency</span>
                      </div>
                      <span className="text-secondary font-black drop-shadow-sm">100%</span>
                    </div>

                    {/* Notice Board Preview */}
                    <div className="p-6 bg-white/10 rounded-2xl border border-white/10">
                      <div className="flex items-center gap-2 mb-4">
                        <Clock className="w-4 h-4 text-secondary drop-shadow-md" />
                        <h5 className="text-xs font-black uppercase tracking-widest text-white">Upcoming Events</h5>
                      </div>
                      <div className="space-y-3">
                        <div className="flex gap-3">
                          <div className="w-1 h-8 bg-secondary rounded-full" />
                          <div>
                            <p className="text-xs text-white font-bold drop-shadow-sm">Annual Tech Expo 2026</p>
                            <p className="text-[9px] text-white/60 font-mono font-bold">MARCH 24, 2026</p>
                          </div>
                        </div>
                        <div className="flex gap-3 opacity-60">
                          <div className="w-1 h-8 bg-white/40 rounded-full" />
                          <div>
                            <p className="text-xs text-white font-bold">Parent Orientation Wing-A</p>
                            <p className="text-[9px] text-white/50 font-mono font-bold">APRIL 02, 2026</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Interaction Button Preview */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-gradient-to-br from-primary/60 to-primary-dark/60 rounded-2xl text-center border border-white/10 shadow-lg">
                        <Sparkles className="w-5 h-5 text-secondary mx-auto mb-2 drop-shadow-glow" />
                        <p className="text-[10px] font-black uppercase text-white tracking-widest">Smart Results</p>
                      </div>
                      <div className="p-4 bg-white/10 rounded-2xl text-center border border-white/10">
                        <Shield className="w-5 h-5 text-white/60 mx-auto mb-2" />
                        <p className="text-[10px] font-black uppercase text-white/60 tracking-widest">Safe Campus</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-1.5 transition-all duration-700 rounded-full ${currentSlide === idx ? 'w-12 bg-secondary' : 'w-6 bg-white/40 hover:bg-white/60'
                  }`}
              />
            ))}
          </div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-10 right-10 hidden lg:block"
          >
            <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2" />
            </div>
          </motion.div>
        </section>


        {/* Topper's Hall of Fame */}
        <section className="section-pad bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
          <div className="container mx-auto px-6 md:px-12 relative">
            <SectionTitle subtitle="Setting the benchmark for state-level academic distinction">
              Academic Hall of Fame
            </SectionTitle>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-secondary/20 to-primary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative bg-white rounded-3xl p-4 shadow-2xl overflow-hidden">
                  <img
                    src="/images/toppers/jiya.jpg"
                    alt="Jiya Kumari"
                    className="w-full h-auto rounded-2xl transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-6 right-6 bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-3 rounded-full font-bold shadow-xl">
                    <div className="text-2xl">98%</div>
                    <div className="text-[10px] uppercase tracking-wider">State Rank 8</div>
                  </div>
                </div>
              </motion.div>

              <div className="space-y-8">
                <motion.h2
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl font-heading font-black text-primary leading-tight"
                >
                  Legacy of <br />
                  <span className="text-secondary font-bold">Distinction.</span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-lg text-gray-700 leading-relaxed border-l-4 border-secondary pl-6 font-bold font-serif"
                >
                  "The GVP ecosystem taught me that technology isn't just about computers; it's about solving problems with values."
                </motion.p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="p-6 bg-gradient-to-br from-amber-50 to-white rounded-2xl border border-amber-100">
                    <div className="text-3xl font-black text-primary mb-1">100/100</div>
                    <div className="text-xs font-bold uppercase text-gray-500 tracking-wider">Mathematics</div>
                    <div className="text-[10px] text-secondary mt-1 font-semibold">State Topper</div>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-green-50 to-white rounded-2xl border border-green-100">
                    <div className="text-3xl font-black text-primary mb-1">Top 10</div>
                    <div className="text-xs font-bold uppercase text-gray-500 tracking-wider">Haryana Board</div>
                    <div className="text-[10px] text-secondary mt-1 font-semibold">Overall Rank</div>
                  </div>
                </div>

                <button className="group bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-primary-dark transition-all flex items-center gap-3">
                  Explore Success Stories
                  <ArrowRightCircle className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Perspective */}
        <section className="section-pad bg-primary text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="container mx-auto px-6 md:px-12 relative">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary/20 rounded-full blur-2xl" />
                  <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10">
                    <Quote className="w-12 h-12 text-secondary mb-6" />
                    <h3 className="text-2xl md:text-3xl font-heading font-bold mb-8 leading-relaxed">
                      "Creating future leaders using technical revolutions and values is not just our tagline; it is the soul of GVP."
                    </h3>
                    <div className="flex items-center gap-5">
                      <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
                        <span className="text-primary font-black text-xl">DS</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-secondary">Mr. Devender Singla</h4>
                        <p className="text-sm opacity-80 uppercase tracking-wider">Director, GVP Group</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="lg:w-1/2 space-y-8">
                <h2 className="text-4xl md:text-5xl font-heading font-black leading-tight">
                  Pioneering a <br />
                  <span className="text-secondary font-bold">New Standard.</span>
                </h2>
                <p className="text-lg text-white/80 leading-relaxed">
                  For over two decades, we have been more than just a school. We are an incubator for the technical minds of tomorrow, grounded in the cultural soil of India.
                </p>
                <div className="space-y-4">
                  {[
                    { text: "HBSE State Board Excellence", icon: Award },
                    { text: "Advanced Technical Integration", icon: Cpu },
                    { text: "Cultural & Moral Value Education", icon: HeartHandshake }
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-4 p-4 bg-white/5 rounded-xl"
                    >
                      <CheckCircle className="text-secondary w-6 h-6 flex-shrink-0" />
                      <span className="font-bold uppercase tracking-wide text-sm">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-secondary relative overflow-hidden">
          <div className="absolute inset-0 bg-dot-pattern opacity-10" />
          <div className="container mx-auto px-6 md:px-12 relative">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl md:text-5xl font-black text-primary mb-2 font-mono">
                    {stat.value}
                  </div>
                  <div className="text-sm font-bold uppercase tracking-wider text-primary/80">
                    {stat.label}
                  </div>
                  <div className="text-[10px] uppercase tracking-wider text-primary/50 mt-1">
                    {stat.sub}
                  </div>
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

        {/* Admission Inquiry Section */}
        <section id="admissions" className="section-pad bg-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="container mx-auto px-6 md:px-12 relative">
            <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-2">
              {/* Left Side - Info */}
              <div className="p-10 md:p-14 bg-gradient-to-br from-secondary to-secondary-dark text-primary">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <Sparkles className="w-12 h-12 text-white mb-6" />
                  <h3 className="text-3xl md:text-4xl font-heading font-black leading-tight mb-6">
                    Join the <br />
                    <span className="text-white font-bold">Technical Revolution.</span>
                  </h3>
                  <p className="text-base font-bold mb-8 opacity-90 leading-relaxed">
                    Admissions Open 2026-27
                    <br />
                    <span className="text-sm font-normal opacity-75">Limited seats across all wings</span>
                  </p>
                  <div className="space-y-4">
                    {[
                      "Priority Campus Tours",
                      "Direct Merit Admissions",
                      "Scholarship Assessment"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm font-bold uppercase tracking-wide">
                        <CheckCircle className="w-5 h-5 text-white" />
                        {item}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Right Side - Form */}
              <div className="p-10 md:p-14">
                <h4 className="text-2xl font-bold text-primary mb-8">Inquiry for Admission</h4>
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-2">
                        Parent Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-secondary focus:outline-none transition-colors"
                        placeholder="Enter full name"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-secondary focus:outline-none transition-colors"
                        placeholder="+91 00000 00000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-secondary focus:outline-none transition-colors"
                      placeholder="parent@example.com"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-2">
                      Applying for Class
                    </label>
                    <select className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-secondary focus:outline-none cursor-pointer">
                      <option>Foundation Wing (Pre-Nur to II)</option>
                      <option>Middle Wing (III to VIII)</option>
                      <option>Senior Wing (IX to XII)</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-secondary text-primary py-4 rounded-xl font-bold text-lg hover:bg-secondary-dark transition-all shadow-lg hover:shadow-xl"
                  >
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