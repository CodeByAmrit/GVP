import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, Mail, Award, BookOpen, Users, Calendar, MapPin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);
  const location = useLocation();

  const handleMouseEnter = (name) => {
    if (timeoutId) clearTimeout(timeoutId);
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
    setTimeoutId(id);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [timeoutId]);

  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    {
      name: 'About',
      path: '/about',
      dropdown: [
        { name: 'Our Story', path: '/about/story' },
        { name: 'Mission & Vision', path: '/about/mission' },
        { name: 'Leadership', path: '/about/leadership' },
        { name: 'Accreditations', path: '/about/accreditations' }
      ]
    },
    {
      name: 'Academics',
      path: '/academics',
      dropdown: [
        { name: 'Curriculum', path: '/academics/curriculum' },
        { name: 'Departments', path: '/academics/departments' },
        { name: 'Academic Calendar', path: '/academics/calendar' },
        { name: 'Examinations', path: '/academics/exams' }
      ]
    },
    {
      name: 'Admissions',
      path: '/admissions',
      dropdown: [
        { name: 'Process', path: '/admissions/process' },
        { name: 'Fee Structure', path: '/admissions/fees' },
        { name: 'Scholarships', path: '/admissions/scholarships' },
        { name: 'Apply Online', path: '/admissions/apply' }
      ]
    },
    { name: 'Campus Life', path: '/campus' },
    { name: 'Infrastructure', path: '/infrastructure' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className={`hidden md:block fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? '-translate-y-full' : 'translate-y-0'
        }`}>
        <div className="bg-gradient-to-r from-primary via-primary-dark to-primary text-white/80 text-xs">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between py-1.5">
              {/* Left Section */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-secondary" />
                  <span className="text-white/80 text-[11px]">+91 123 456 7890</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-secondary" />
                  <span className="text-white/80 text-[11px]">info@gvpschool.edu</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-secondary" />
                  <span className="text-white/80 text-[11px]">Sector 12, Karnal</span>
                </div>
              </div>

              {/* Center Section - Marquee */}
              <div className="flex-1 max-w-lg mx-4">
                <div className="relative overflow-hidden">
                  <motion.div
                    animate={{ x: ['100%', '-100%'] }}
                    transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                    className="whitespace-nowrap"
                  >
                    <span className="inline-flex items-center gap-3 text-[11px] font-medium">
                      <Award className="w-3.5 h-3.5 text-secondary" />
                      CBSE Affiliated Senior Secondary School
                      <span className="mx-2">•</span>
                      <BookOpen className="w-3.5 h-3.5 text-secondary" />
                      English Medium Co-Educational
                      <span className="mx-2">•</span>
                      <Users className="w-3.5 h-3.5 text-secondary" />
                      Excellence Since 2001
                    </span>
                  </motion.div>
                </div>
              </div>

              {/* Right Section */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-white/50 text-[11px]">Affiliation:</span>
                  <span className="font-mono text-secondary text-[11px] font-bold">530041</span>
                </div>
                <div className="w-px h-3 bg-white/20" />
                <div className="flex items-center gap-2">
                  <span className="text-white/50 text-[11px]">School Code:</span>
                  <span className="font-mono text-secondary text-[11px] font-bold">40059</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className={`fixed w-full z-40 transition-all duration-500 bg-white shadow-premium py-2 ${isScrolled
        ? 'top-0'
        : 'top-8'
        }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo Section */}
            <Link to="/" className="flex items-center gap-2 group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 bg-gradient-to-br from-primary to-primary-dark shadow-md">
                  <img
                    src="/icons/logo.svg"
                    alt="GVP Logo"
                    className="h-8 w-8 object-contain"
                  />
                </div>
              </motion.div>

              <div className="hidden sm:block">
                <h1 className="font-display text-xl font-bold leading-tight transition-colors duration-300 text-primary">
                  GYAN VIDYA PEETH
                </h1>
                <p className="text-[10px] font-semibold tracking-[0.3em] uppercase transition-colors duration-300 text-gray-500">
                  Lead • Innovate • Values
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.dropdown && handleMouseEnter(item.name)}
                  onMouseLeave={() => item.dropdown && handleMouseLeave()}
                >
                  <Link
                    to={item.path}
                    className={`px-2.5 py-1.5 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center gap-1 group ${location.pathname === item.path
                        ? 'text-secondary bg-amber-50'
                        : 'text-gray-700 hover:text-secondary hover:bg-gray-50'
                      }`}
                  >
                    {item.name}
                    {item.dropdown && (
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.dropdown && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 pt-2 w-64 z-50"
                      onMouseEnter={() => handleMouseEnter(item.name)}
                      onMouseLeave={() => handleMouseLeave()}
                    >
                      <div className="bg-white rounded-xl shadow-elevated border border-gray-100 overflow-hidden">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="block px-5 py-3 text-sm text-gray-700 hover:bg-amber-50 hover:text-secondary transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/admissions/apply"
                  className="px-8 py-2.5 rounded-full font-bold text-sm tracking-wide transition-all duration-300 shadow-lg bg-gradient-to-r from-secondary to-secondary-dark text-primary hover:shadow-xl"
                >
                  APPLY NOW
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden p-2 rounded-lg transition-all duration-300 text-gray-900 hover:bg-gray-100"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 bg-white z-50 overflow-y-auto"
          >
            <div className="min-h-screen flex flex-col">
              {/* Mobile Menu Header */}
              <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center">
                    <img src="/icons/logo.svg" alt="Logo" className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="font-display font-bold text-primary">GYAN VIDYA PEETH</h2>
                    <p className="text-[8px] tracking-wider text-gray-500">Lead • Innovate • Values</p>
                  </div>
                </div>
                <button onClick={() => setIsMenuOpen(false)} className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <div className="flex-1 px-6 py-8">
                <div className="space-y-1">
                  {navLinks.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        to={item.path}
                        className={`block py-4 text-lg font-semibold transition-colors ${location.pathname === item.path ? 'text-secondary' : 'text-gray-800'
                          }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                      {item.dropdown && (
                        <div className="ml-4 space-y-2 pb-2">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              className="block py-2 text-sm text-gray-600 hover:text-secondary"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Mobile CTA */}
                <div className="mt-8">
                  <Link
                    to="/admissions/apply"
                    className="block w-full bg-gradient-to-r from-secondary to-secondary-dark text-primary text-center py-4 rounded-xl font-bold shadow-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Apply for 2026-27
                  </Link>
                </div>

                {/* Mobile Contact Info */}
                <div className="mt-12 pt-8 border-t border-gray-100 space-y-4">
                  <div className="flex items-center gap-3 text-gray-600">
                    <Phone className="w-5 h-5 text-secondary" />
                    <span className="text-sm">+91 123 456 7890</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Mail className="w-5 h-5 text-secondary" />
                    <span className="text-sm">info@gvpschool.edu</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Calendar className="w-5 h-5 text-secondary" />
                    <span className="text-sm">Mon-Fri: 8:00 AM - 3:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;