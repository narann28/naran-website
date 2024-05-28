import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { TextureLoader, MeshStandardMaterial } from 'three';
import earthImage from '../earth4.jpg'; // Import the image file

const EarthMesh = () => {
  const meshRef = useRef(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01; // Adjust the rotation speed as desired
    }
  });

  const textureLoader = new TextureLoader();
  const earthTexture = textureLoader.load(earthImage); // Replace with the path to your Earth texture

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2, 100, 100]} /> {/* Increase the radius and increase the number of segments */}
      <meshStandardMaterial map={earthTexture} />
    </mesh>
  );
};

const Earth = () => {
  return (
    <Canvas>
      <ambientLight intensity={.9} />
      <pointLight position={[10, 10, 10]} />
      <EarthMesh />
    </Canvas>
  );
};

export default Earth;
