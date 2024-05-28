import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { TextureLoader, MeshStandardMaterial } from 'three';
import earthImage from '../earth.jpg'; // Import the image file

const EarthMesh = () => {
  const meshRef = useRef(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.02; 
    }
  });

  const textureLoader = new TextureLoader();
  const earthTexture = textureLoader.load(earthImage); 

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2, 100, 150]} /> {/* Increase the radius and increase the number of segments */}
      <meshStandardMaterial map={earthTexture} />
    </mesh>
  );
};

const Earth = () => {
  return (
    <Canvas>
      <ambientLight intensity={1} />
      <pointLight position={[200, 200, 200]} />
      <EarthMesh />
    </Canvas>
  );
};

export default Earth;
