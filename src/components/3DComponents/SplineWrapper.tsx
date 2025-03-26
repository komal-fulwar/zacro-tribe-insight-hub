
import { useState, useEffect } from 'react';
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
  const [isMounted, setIsMounted] = useState(false);

  // Check WebGL support on mount
  useEffect(() => {
    setIsMounted(true);
    
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        console.log("WebGL not supported, showing fallback");
        setHasError(true);
        return;
      }
    } catch (e) {
      console.error("WebGL check failed:", e);
      setHasError(true);
      return;
    }
    
    // Safety timeout - if Spline doesn't load within 8 seconds, show fallback
    const timeout = setTimeout(() => {
      if (!isLoaded && !hasError) {
        console.log("Spline load timeout, showing fallback");
        setHasError(true);
      }
    }, 8000);
    
    return () => {
      clearTimeout(timeout);
      setIsMounted(false);
    };
  }, [isLoaded, hasError]);

  const handleLoad = () => {
    if (isMounted) {
      console.log("Spline scene loaded:", scene);
      setIsLoaded(true);
    }
  };

  const handleError = () => {
    if (isMounted) {
      console.error("Error loading Spline scene:", scene);
      setHasError(true);
    }
  };

  if (hasError) {
    return (
      <div className={`w-full ${height} flex items-center justify-center bg-dark-900/50 rounded-lg`}>
        <div className="text-center p-4">
          <div className="text-zacro-500 text-4xl mb-2">{fallbackIcon}</div>
          <p className="text-sm text-gray-400">{fallbackText}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative w-full ${height} overflow-hidden`}>
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-zacro-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      <div className={isLoaded ? "opacity-100 transition-opacity duration-500" : "opacity-0"} style={{ height: '100%' }}>
        <Spline
          scene={scene}
          onLoad={handleLoad}
          onError={handleError}
        />
      </div>
    </div>
  );
};

export default SplineWrapper;
