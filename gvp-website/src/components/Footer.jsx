import React from 'react';
import { Facebook, Instagram, Youtube, MapPin, PhoneCall, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-24 pb-12 border-t-8 border-secondary/20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-4 gap-16 mb-20">
          {/* Column 1: School Contact */}
          <div>
            <h4 className="text-xl font-heading font-black text-secondary mb-10 tracking-tight uppercase">School Contact</h4>
            <div className="space-y-8">
              <div className="flex gap-4 group">
                <MapPin className="w-6 h-6 text-secondary shrink-0" />
                <p className="text-sm font-medium leading-relaxed opacity-80">
                  GYAN VIDYA PEETH<br />
                  Near Kalupur Chungi, Rohtak Road,<br />
                  Sector 25, Sonipat, Haryana
                </p>
              </div>
              <div className="flex gap-4 group">
                <PhoneCall className="w-6 h-6 text-secondary shrink-0" />
                <p className="text-sm font-black text-white">+91 98XXX XXXXX</p>
              </div>
              <div className="flex gap-4 group">
                <Mail className="w-6 h-6 text-secondary shrink-0" />
                <p className="text-sm font-black text-white">info@gvpsonipat.ac.in</p>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xl font-heading font-black text-secondary mb-10 tracking-tight uppercase">Quick Links</h4>
            <ul className="space-y-4 text-sm font-bold uppercase tracking-widest opacity-80">
              <li><Link to="/" className="hover:text-secondary transition-all">Home</Link></li>
              <li><Link to="/academics" className="hover:text-secondary transition-all">Academics</Link></li>
              <li><Link to="/facilities" className="hover:text-secondary transition-all">Admissions</Link></li>
              <li><Link to="/contact" className="hover:text-secondary transition-all">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Social Links */}
          <div>
            <h4 className="text-xl font-heading font-black text-secondary mb-10 tracking-tight uppercase">Social Links</h4>
            <ul className="space-y-4 text-sm font-bold uppercase tracking-widest opacity-80">
              <li><Link to="/admissions" className="hover:text-secondary transition-all">Apply Now</Link></li>
              <li><Link to="/contact" className="hover:text-secondary transition-all">Reception</Link></li>
              <li><Link to="#" className="hover:text-secondary transition-all">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Column 4: Social Media Icons */}
          <div>
            <h4 className="text-xl font-heading font-black text-secondary mb-10 tracking-tight uppercase">Social Media</h4>
            <div className="flex gap-6">
              {[Facebook, Instagram, Youtube].map((Icon, idx) => (
                <a key={idx} href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-secondary hover:bg-secondary hover:text-primary transition-all duration-500">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 text-center text-[10px] font-black uppercase tracking-[0.5em] text-white/40">
          <p>&copy; 2026 GYAN VIDYA PEETH. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
