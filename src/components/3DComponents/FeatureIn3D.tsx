
import React, { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, PresentationControls, Stage, OrbitControls } from '@react-three/drei';

function Model({ path }: { path: string }) {
  const { scene } = useGLTF(path);
  return <primitive object={scene} scale={1.5} />;
}

interface FeatureIn3DProps {
  modelPath?: string;
}

const FeatureIn3D = ({ modelPath = "/models/coin.glb" }: FeatureIn3DProps) => {
  const [hasError, setHasError] = useState(false);

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
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 4], fov: 50 }}
        onCreated={() => {
          console.log("Canvas created successfully");
        }}
        onError={() => {
          console.error("Canvas error occurred");
          setHasError(true);
        }}
      >
        <color attach="background" args={['#1a1a1a']} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6}>
            <Model path={modelPath} />
          </Stage>
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default FeatureIn3D;
