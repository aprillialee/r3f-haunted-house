//React
import React from "react";
import { Suspense } from "react";

//R3F
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

//THREE
import * as THREE from "three";
import { TextureLoader } from "three/src/loaders/TextureLoader";

//Components
import House from "./House/House";
import Floor from "./House/Floor";
import Graves from "./Graves/Graves";
import Ghosts from "./Ghosts/Ghosts";

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
      shadows
    >
      <OrbitControls />
      <Suspense fallback={null}>
        <House />
        <Graves />
        <Ghosts />
        <Floor />
        <fog attach="fog" color="#262837" near={1} far={15} />
        <ambientLight color="#b9d5ff" intensity={0.1} />
        <directionalLight castShadow color="#b9d5ff" intensity={0.12} />
      </Suspense>
    </Canvas>
  );
};

export default Scene;
