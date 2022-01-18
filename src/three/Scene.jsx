//React
import React from "react";
import { Suspense } from "react";

//R3F
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

//Components
import House from "./House/House";
import Graves from "./Graves/Graves";

const Scene = () => {
  return (
    <Canvas
      id="canvas"
      gl={{
        antialias: true,
        color: "#262837",
      }}
      camera={{
        aspect: window.innerWidth / window.innerHeight,
        position: [4, 2, 5],
      }}
    >
      <OrbitControls />
      <Suspense fallback={null}>
        <House />
        <Graves />
        <Floor />
        <fog attach="fog" color="#262837" near={1} far={15} />
        <ambientLight color="#b9d5ff" intensity={0.1} />
        <directionalLight color="#b9d5ff" intensity={0.12} />
      </Suspense>
    </Canvas>
  );
};

export default Scene;

const Floor = () => {
  return (
    <mesh rotation={[-Math.PI * 0.5, 0, 0]}>
      <planeGeometry args={[20, 20]} />
      <meshStandardMaterial color="#a9c388" />
    </mesh>
  );
};
