
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard = ({ icon: Icon, title, description, className = '' }: FeatureCardProps) => {
  return (
    <div className={`glass-card p-6 md:p-8 h-full transition-all duration-500 hover:shadow-xl hover:shadow-zacro-500/5 group ${className}`}>
      <div className="relative mb-5">
        <div className="absolute -inset-1 bg-gradient-to-r from-zacro-500 to-zacro-700 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-500"></div>
        <div className="relative w-12 h-12 flex items-center justify-center rounded-full bg-dark-800 border border-white/10">
          <Icon className="h-6 w-6 text-zacro-500 group-hover:text-zacro-400 transition-colors duration-300" />
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default FeatureCard;
