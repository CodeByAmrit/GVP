import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { MapPin, School, Eye } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Academics', path: '/academics' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Contact', path: '/contact' },
  ];

  const isHomePage = location.pathname === '/';

  const headerStyle = "bg-primary border-b-3 border-secondary/70 gap-2 flex flex-col pb-2";

  return (
    <>
      <header className={`top-0 w-full z-50 transition-all duration-300 ${headerStyle}`}>
        <div className="bg-white text-primary text-[10px] md:text-xs font-bold uppercase tracking-widest border-b border-white/5 py-2">
          <div className="container mx-auto px-6">
            <ul className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2">
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-secondary" />
                <span>Affiliation No: 530041</span>
              </li>
              <li className="flex-1 min-w-[200px] md:min-w-[400px]">
                <marquee behavior="smooth" direction="left" className="align-middle text-secondary italic">
                  A PRESTIGIOUS ENGLISH MEDIUM CO-EDUCATIONAL CBSE AFFILIATED SENIOR SECONDARY SCHOOL
                </marquee>
              </li>
              <li className="flex items-center gap-2">
                <School className="w-3.5 h-3.5 text-secondary" />
                <span>School Code: 40059</span>
              </li>
              <li className="flex items-center gap-2">
                <Eye className="w-3.5 h-3.5 text-secondary" />
                <span>Total Visitors: 9797</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-4 group">
            <div className="bg-transparent p-2">
              <img
                src="/icons/logo.svg"
                alt="GVP Logo"
                className="h-8 md:h-10 "
              />
            </div>
            <div className="hidden sm:block text-white">
              <h1 className="text-secondary font-heading font-times text-2xl leading-none">GYAN VIDYA PEETH</h1>
              <p className="text-[9px] tracking-[0.2em] font-extrabold uppercase mt-0.5 color-white">Lead • Innovate • Values</p>
            </div>
          </Link>

          <nav className="hidden lg:flex gap-8 items-center">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-[11px] font-black tracking-[0.15em] uppercase hover:text-secondary transition-all relative group ${location.pathname === item.path ? 'text-secondary' : 'text-white'
                  }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-2 left-0 w-full h-0.5 bg-secondary rounded-full"
                  />
                )}
              </Link>
            ))}

            <div className="h-6 w-px bg-white/10 mx-2" />

            <Link to="/admissions" className="px-8 py-2.5 bg-secondary text-primary font-black rounded hover:bg-yellow-500 transition-all active:scale-95 text-[11px] tracking-widest uppercase">
              APPLY NOW
            </Link>
          </nav>

          <button onClick={() => setIsMenuOpen(true)} className="lg:hidden p-2 text-white">
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-primary z-[60] flex flex-col p-12"
          >
            <button onClick={() => setIsMenuOpen(false)} className="self-end text-secondary mb-12">
              <X className="w-12 h-12" />
            </button>
            <div className="flex flex-col gap-8">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-4xl font-heading font-black hover:text-secondary transition-colors italic ${location.pathname === item.path ? 'text-secondary' : 'text-white'
                    }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/admissions" className="mt-8 bg-secondary text-primary py-5 text-xl font-black text-center rounded-2xl">
                Apply for 2026-27
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
