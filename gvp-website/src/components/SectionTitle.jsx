import { motion } from 'framer-motion';

const SectionTitle = ({ children, subtitle, light = false }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-center mb-16 px-4"
  >
    <h2 className={`text-3xl md:text-5xl font-heading font-black mb-6 tracking-tight ${light ? 'text-white' : 'text-primary'}`}>
      {children}
    </h2>
    {subtitle && <p className={`max-w-xl mx-auto text-base md:text-lg font-medium leading-relaxed ${light ? 'text-white/70' : 'text-gray-500'}`}>{subtitle}</p>}
    <div className="w-16 h-1.5 bg-secondary mx-auto mt-8 rounded-full" />
  </motion.div>
);

export default SectionTitle;
