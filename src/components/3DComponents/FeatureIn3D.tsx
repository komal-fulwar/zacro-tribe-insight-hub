
import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, PresentationControls, Stage, OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';

function Model({ path }) {
  const { scene } = useGLTF(path);
  return <primitive object={scene} scale={1.5} />;
}

const FeatureIn3D = ({ modelPath = "/models/coin.glb" }) => {
  return (
    <div className="w-full h-full min-h-[200px]">
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
        <Suspense fallback={null}>
          <PresentationControls
            global
            rotation={[0, 0, 0]}
            polar={[-Math.PI / 4, Math.PI / 4]}
            azimuth={[-Math.PI / 4, Math.PI / 4]}
            config={{ mass: 2, tension: 500 }}
            snap={{ mass: 4, tension: 300 }}
          >
            <Stage environment="city" intensity={0.6} contactShadow={false}>
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
