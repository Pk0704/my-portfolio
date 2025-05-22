// src/components/ThreeScene.js
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Html } from '@react-three/drei';

function HumanModel() {
  // adjust the path if you nested models differently
  const { scene } = useGLTF('/models/human.glb');
  // Rotate the model so it’s looking up:
  scene.rotation.x = -0.2;   // tilt back ~12°
  scene.position.y = 0.8;   // lower it so it sits in view
  return <primitive object={scene} />;
}

export default function ThreeScene() {
  return (
    <Canvas
      style={{ width: '100%', height: '70vh', position: 'absolute', top: 0 }}
      camera={{ position: [0, 1.5, 4], fov: 50 }}
    >
      {/* simple lights */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 7]} intensity={1} />

      {/* let Drei show a loading indicator until your model loads */}
      <Suspense fallback={<Html center>Loading…</Html>}>
        <HumanModel />
      </Suspense>

      {/* you can disable zoom if you like */}
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
