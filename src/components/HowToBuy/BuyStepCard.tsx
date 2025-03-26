
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface BuyStepCardProps {
  number: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

const BuyStepCard = ({ number, title, description, icon: Icon }: BuyStepCardProps) => {
  return (
    <div className="flex items-start gap-4">
      <div className="relative">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-zacro-700/50 text-white font-bold text-lg border border-zacro-500/30"
        >
          {number}
        </motion.div>
      </div>

      <div className="flex-1 cube-card p-4">
        <div className="flex items-center gap-3 mb-2">
          <Icon className="h-5 w-5 text-zacro-400" />
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default BuyStepCard;
