// components/SectionTitle.jsx
import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ children, subtitle, centered = true }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''}`}
    >
      {subtitle && (
        <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary font-bold text-xs uppercase tracking-wider rounded-full mb-4">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-primary leading-tight">
        {children}
      </h2>
      {centered && (
        <div className="w-20 h-1 bg-secondary rounded-full mt-6 mx-auto" />
      )}
    </motion.div>
  );
};

export default SectionTitle;