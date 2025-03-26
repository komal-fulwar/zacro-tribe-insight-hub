
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Spline from '@splinetool/react-spline';

interface RoadmapCardProps {
  title: string;
  items: string[];
  position: 'left' | 'right';
  index: number;
}

const RoadmapCard = ({ title, items, position, index }: RoadmapCardProps) => {
  const containerVariants = {
    hidden: { opacity: 0, x: position === 'left' ? -50 : 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={`max-w-md ${position === 'right' ? 'ml-auto' : 'mr-auto'}`}
    >
      <Card className="glass-card border-zacro-500/20 overflow-hidden">
        <CardHeader className="bg-dark-800/50 border-b border-white/5">
          <CardTitle className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-zacro-500 flex items-center justify-center text-xs">
              {index + 1}
            </div>
            <span className="text-zacro-500">{title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <ul className="space-y-2">
            {items.map((item, i) => (
              <motion.li 
                key={i}
                variants={itemVariants}
                className="flex items-start gap-2"
              >
                <CheckCircle2 className="h-4 w-4 text-zacro-500 mt-1 flex-shrink-0" />
                <span className="text-sm text-gray-300">{item}</span>
              </motion.li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default RoadmapCard;
