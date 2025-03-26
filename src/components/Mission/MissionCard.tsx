
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

interface MissionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

const MissionCard = ({ icon: Icon, title, description, index }: MissionCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="glass-card h-full border-white/10 bg-dark-800/30 hover:border-zacro-500/30 transition-all duration-300">
        <CardContent className="p-6 flex flex-col h-full">
          <div className="rounded-full w-12 h-12 bg-zacro-500/10 flex items-center justify-center mb-4">
            <Icon className="h-6 w-6 text-zacro-500" />
          </div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-400 text-sm">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default MissionCard;
