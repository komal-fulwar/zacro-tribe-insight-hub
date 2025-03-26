
import React, { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, PresentationControls, Stage, OrbitControls } from '@react-three/drei';

function Model({ path }: { path: string }) {
  const gltf = useGLTF(path);
  return <primitive object={gltf.scene} scale={1.5} />;
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
        onError={() => setHasError(true)}
      >
        <Suspense fallback={null}>
          <PresentationControls
            global
            rotation={[0, 0, 0]}
            polar={[-Math.PI / 4, Math.PI / 4]}
            azimuth={[-Math.PI / 4, Math.PI / 4]}
            config={{ mass: 2, tension: 500 }}
            snap={{ mass: 4, tension: 300 }}
          >
            <Stage environment="city" intensity={0.6}>
              <Model path={modelPath} />
            </Stage>
          </PresentationControls>
        </Suspense>
        <OrbitControls autoRotate enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default FeatureIn3D;
