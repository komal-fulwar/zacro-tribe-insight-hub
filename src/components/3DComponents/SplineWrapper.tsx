
import { useState } from 'react';
import Spline from '@splinetool/react-spline';

interface SplineWrapperProps {
  scene: string;
  fallbackIcon?: string;
  fallbackText?: string;
  height?: string;
}

const SplineWrapper = ({ 
  scene, 
  fallbackIcon = "🔮", 
  fallbackText = "3D visualization", 
  height = "h-64" 
}: SplineWrapperProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    console.log("Error loading Spline scene:", scene);
    setHasError(true);
  };

  return (
    <div className={`relative w-full ${height}`}>
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-zacro-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      {hasError ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center p-4 rounded-lg">
            <div className="text-zacro-500 text-4xl mb-2">{fallbackIcon}</div>
            <p className="text-sm text-gray-400">{fallbackText}</p>
          </div>
        </div>
      ) : (
        <Spline
          scene={scene}
          onLoad={() => setIsLoaded(true)}
          onError={handleError}
          style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 0.5s ease' }}
        />
      )}
    </div>
  );
};

export default SplineWrapper;
