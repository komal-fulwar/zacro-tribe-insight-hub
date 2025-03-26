
import React, { useState, Suspense, useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, Stage, OrbitControls } from '@react-three/drei';

function Model({ path }: { path: string }) {
  const { scene } = useGLTF(path);
  return <primitive object={scene} scale={1.5} />;
}

interface FeatureIn3DProps {
  modelPath?: string;
}

const FeatureIn3D = ({ modelPath = "/models/coin.glb" }: FeatureIn3DProps) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Check WebGL support on mount
  useEffect(() => {
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
    
    // Use a timeout to prevent infinite loading
    const timeout = setTimeout(() => {
      if (!isLoaded) {
        console.log("3D model load timeout, showing fallback");
        setHasError(true);
      }
    }, 5000);
    
    return () => clearTimeout(timeout);
  }, [isLoaded]);

  if (hasError) {
    return (
      <div className="w-full h-full min-h-[200px] flex items-center justify-center">
        <div className="text-center">
          <div className="text-zacro-500 text-4xl mb-2">💰</div>
          <p className="text-sm text-gray-400">3D visualization</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full min-h-[200px]">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="w-8 h-8 border-4 border-zacro-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      <Canvas
        ref={canvasRef}
        dpr={[0.5, 1]} // Lower DPR for better performance
        camera={{ position: [0, 0, 4], fov: 45 }}
        onCreated={() => {
          console.log("Canvas created successfully");
          setIsLoaded(true);
        }}
        onError={(error) => {
          console.error("Canvas error occurred:", error);
          setHasError(true);
        }}
        gl={{ 
          antialias: false,
          alpha: true,
          powerPreference: 'low-power'
        }}
        style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 0.5s ease' }}
      >
        <color attach="background" args={['transparent']} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        
        <Suspense fallback={null}>
          <OrbitControls 
            enableZoom={false} 
            autoRotate={true} 
            autoRotateSpeed={1} 
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 4}
          />
          <Stage environment="city" intensity={0.4}>
            <Model path={modelPath} />
          </Stage>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default FeatureIn3D;
