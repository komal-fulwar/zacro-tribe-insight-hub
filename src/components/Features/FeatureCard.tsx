
import { useState } from 'react';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard = ({ icon: Icon, title, description, className = '' }: FeatureCardProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div 
      className={`glass-card p-6 md:p-8 h-full transition-all duration-500 hover:shadow-xl hover:shadow-zacro-500/5 group ${className}`}
      whileHover={{ scale: 1.02 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <div className="relative mb-5">
        <div className="absolute -inset-1 bg-gradient-to-r from-zacro-500 to-zacro-700 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-500"></div>
        <div className="relative w-16 h-16 flex items-center justify-center rounded-full bg-dark-800 border border-white/10">
          <div className={`absolute inset-0 rounded-full bg-gradient-to-br from-zacro-500/20 to-zacro-700/30 transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-50'}`}></div>
          <Icon className="h-6 w-6 text-zacro-500 group-hover:text-zacro-400 transition-colors duration-300 z-10" />
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;
