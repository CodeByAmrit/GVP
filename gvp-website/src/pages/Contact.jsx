import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, PhoneCall, Mail, Clock, Map as MapIcon } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const Contact = () => {
  return (
    <div className="pt-32 pb-24">
      {/* Header */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <SectionTitle subtitle="Dedicated to transparent communication and community engagement.">Get In Touch</SectionTitle>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-start">

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="bg-white p-10 md:p-14 rounded-[2rem] border border-gray-100 shadow-xl overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <h3 className="text-3xl font-black text-primary mb-12 tracking-tight underline decoration-secondary decoration-8 underline-offset-8">Information Center</h3>

              <div className="space-y-12">
                {[
                  {
                    icon: MapPin,
                    label: "Campus Location",
                    value: "Near Kalupur Chungi, Rohtak Road, Sector 25, Sonipat, Haryana"
                  },
                  {
                    icon: PhoneCall,
                    label: "Direct Lines",
                    value: "+91 98XXX XXXXX / +91 94XXX XXXXX"
                  },
                  {
                    icon: Mail,
                    label: "Email Queries",
                    value: "info@gvpsonipat.ac.in / gvp12014@gmail.com"
                  },
                  {
                    icon: Clock,
                    label: "Visiting Hours",
                    value: "Mon - Sat: 8:00 AM to 2:30 PM"
                  }
                ].map((info, idx) => (
                  <div key={idx} className="flex gap-8 group">
                    <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-500">
                      <info.icon className="w-7 h-7 text-primary group-hover:text-secondary transition-colors" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2">{info.label}</p>
                      <p className="text-gray-800 font-bold leading-relaxed">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Map Integration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="h-full min-h-[500px] relative"
          >
            <div className="w-full h-full bg-slate-hero border-4 border-white shadow-2xl rounded-[2rem] overflow-hidden group relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3490.522974121645!2d77.0136388!3d28.971870099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390db00052b8d993%3A0x13dcce4d7419e8c4!2sGyan%20Vidya%20Peeth%20School%2C%20Sonepat!5e0!3m2!1sen!2sin!4v1775668275462!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-700"
              ></iframe>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default Contact;
