
import React, { useState, useEffect } from 'react';
import SplineWrapper from './SplineWrapper';

const MissionSpline = () => {
  const [showFallback, setShowFallback] = useState(false);
  
  // If there's a WebGL context issue, show fallback after a short delay
  useEffect(() => {
    const checkWebGLSupport = () => {
      try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        setShowFallback(!gl);
      } catch (e) {
        console.error("WebGL check failed:", e);
        setShowFallback(true);
      }
    };
    
    checkWebGLSupport();
  }, []);
  
  if (showFallback) {
    return (
      <div className="w-full h-64 flex items-center justify-center bg-dark-900/50 rounded-lg">
        <div className="text-center p-4">
          <div className="text-zacro-500 text-4xl mb-2">🚀</div>
          <p className="text-sm text-gray-400">Mission visualization</p>
        </div>
      </div>
    );
  }
  
  return (
    <SplineWrapper 
      scene="https://prod.spline.design/A91sQa2TbD5W-YiE/scene.splinecode"
      fallbackIcon="🚀"
      fallbackText="Mission visualization"
    />
  );
};

export default MissionSpline;
