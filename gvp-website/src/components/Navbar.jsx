import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

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
  // On home page we might still want transparency at the very top, 
  // but the final mockup shows a solid green header. 
  // I will make it solid primary green with a gold border for that formal look.
  const headerStyle = "bg-primary border-b border-secondary/70 py-2";

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${headerStyle}`}>
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-4 group">
            <div className="bg-white/10 p-1 rounded-lg backdrop-blur-sm border border-white/10">
              <img
                src="/icons/logo.webp"
                alt="GVP Logo"
                className="h-10 md:h-12 "
              />
            </div>
            <div className="hidden sm:block text-white">
              <h1 className="font-heading font-black text-lg leading-none tracking-tight">GYAN VIDYA PEETH</h1>
              <p className="text-[9px] tracking-[0.2em] font-extrabold uppercase mt-0.5 text-secondary">Lead • Innovate • Values</p>
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
