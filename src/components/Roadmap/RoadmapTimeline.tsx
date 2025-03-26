
import React from 'react';
import { motion } from 'framer-motion';

const RoadmapTimeline = () => {
  // Points on the timeline
  const timelinePoints = [0, 1, 2, 3];

  return (
    <div className="absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2 w-0.5 bg-zacro-500/30 z-0">
      {timelinePoints.map((_, index) => (
        <motion.div
          key={index}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          viewport={{ once: true }}
          className="absolute w-4 h-4 rounded-full bg-zacro-500 left-1/2 transform -translate-x-1/2"
          style={{ top: `calc(${(index) * 33}% + ${index > 0 ? 0 : 0}px)` }}
        >
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute w-full h-full rounded-full bg-zacro-500/50"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default RoadmapTimeline;
