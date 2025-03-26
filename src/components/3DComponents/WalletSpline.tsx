
import React, { useState, useEffect } from 'react';
import SplineWrapper from './SplineWrapper';
import { ShieldAlert, Wallet } from 'lucide-react';

const WalletSpline = () => {
  const [showFallback, setShowFallback] = useState(false);
  
  // Check WebGL support and device performance on mount
  useEffect(() => {
    // Check for WebGL support
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      
      if (!gl) {
        console.log("WebGL not supported, showing fallback");
        setShowFallback(true);
        return;
      }
      
      // Even with WebGL support, check if it's a mobile device with potentially limited resources
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      if (isMobile) {
        console.log("Mobile device detected, showing fallback for better performance");
        setShowFallback(true);
        return;
      }
    } catch (e) {
      console.error("WebGL check failed:", e);
      setShowFallback(true);
    }
    
    // Set a fallback timeout in case loading takes too long
    const fallbackTimer = setTimeout(() => {
      console.log("3D model loading timeout, showing fallback");
      setShowFallback(true);
    }, 5000); // 5 second timeout
    
    return () => clearTimeout(fallbackTimer);
  }, []);
  
  if (showFallback) {
    return (
      <div className="w-full h-64 flex items-center justify-center cube-card animate-float">
        <div className="text-center p-6">
          <div className="mx-auto w-16 h-16 rounded-lg bg-gradient-to-br from-zacro-500/30 to-zacro-700/30 backdrop-blur-md flex items-center justify-center mb-4 border border-white/10">
            <Wallet className="text-white w-8 h-8" />
          </div>
          <p className="text-xl font-medium text-white mb-2">Secure Wallet</p>
          <p className="text-sm text-gray-400">Store & manage your crypto assets safely</p>
        </div>
      </div>
    );
  }
  
  return (
    <SplineWrapper 
      scene="https://prod.spline.design/6a0kkXxsJNClJ6lL/scene.splinecode"
      fallbackIcon="💰"
      fallbackText="Secure digital wallet for your assets"
    />
  );
};

export default WalletSpline;
