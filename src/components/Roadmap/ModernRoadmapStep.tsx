
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ModernRoadmapStepProps {
  number: string | number;
  title: string;
  description?: string;
  isActive?: boolean;
  isLast?: boolean;
  className?: string;
}

const ModernRoadmapStep = ({
  number,
  title,
  description,
  isActive = false,
  isLast = false,
  className
}: ModernRoadmapStepProps) => {
  return (
    <div className={cn("step-item pb-12", className, isLast && "pb-0")}>
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
        className={cn(
          "step-number",
          isActive && "bg-zacro-700 border-zacro-400"
        )}
      >
        {number}
      </motion.div>
      
      <div className="flex-1">
        <h3 className={cn("text-xl font-semibold mb-1", 
          isActive ? "text-white" : "text-gray-300"
        )}>
          {title}
        </h3>
        {description && (
          <p className="text-gray-400 text-sm">{description}</p>
        )}
      </div>
      
      {!isLast && <div className="step-connector" />}
    </div>
  );
};

export default ModernRoadmapStep;
