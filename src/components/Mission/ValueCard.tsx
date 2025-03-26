
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

interface ValueCardProps {
  icon: string;
  title: string;
  description: string;
  link: string;
  index: number;
}

const ValueCard = ({ icon, title, description, link, index }: ValueCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="glass-card h-full border-white/10 bg-dark-800/30 hover:border-zacro-500/30 transition-all duration-300">
        <CardContent className="p-6 flex flex-col h-full">
          <div className="mb-4 w-12 h-12 flex items-center justify-center">
            <img src={icon} alt={title} className="w-full h-full object-contain" />
          </div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-400 text-sm">{description}</p>
        </CardContent>
        <CardFooter className="pt-0 pb-4 px-6">
          <a 
            href={link} 
            className="text-zacro-500 text-sm font-medium flex items-center hover:text-zacro-400 transition-colors"
          >
            Learn more <ArrowRight className="ml-1 h-4 w-4" />
          </a>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ValueCard;
