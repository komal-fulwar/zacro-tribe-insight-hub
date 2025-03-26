
import { useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline';

const RoadmapSpline = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative h-64 w-full">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-zacro-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <Spline
        scene="https://prod.spline.design/oa-3HcHrDYEKHCru/scene.splinecode"
        onLoad={() => setIsLoaded(true)}
        style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 0.5s ease' }}
      />
    </div>
  );
};

export default RoadmapSpline;
