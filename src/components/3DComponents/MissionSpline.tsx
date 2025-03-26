
import React, { useState, useEffect } from 'react';
import SplineWrapper from './SplineWrapper';

const MissionSpline = () => {
  const [showFallback, setShowFallback] = useState(false);
  
  // Check WebGL support on mount
  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        console.log("WebGL not supported, showing fallback");
        setShowFallback(true);
        return;
      }
    } catch (e) {
      console.error("WebGL check failed:", e);
      setShowFallback(true);
    }
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
