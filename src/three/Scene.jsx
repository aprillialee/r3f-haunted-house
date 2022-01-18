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
      shadowMap
    >
      <OrbitControls />
      <Suspense fallback={null}>
        <House />
        <Graves />
        <Ghosts />
        <Floor />
        <fog attach="fog" color="#262837" near={1} far={15} />
        <ambientLight color="#b9d5ff" intensity={0.5} />
        <directionalLight castShadow color="#b9d5ff" intensity={0.12} />
      </Suspense>
    </Canvas>
  );
};

export default Scene;

const Floor = () => {
  const repeatX = 8;
  const repeatY = 8;

  const colorMap = useLoader(TextureLoader, "/assets/grass/color.jpg");
  colorMap.wrapS = colorMap.wrapT = THREE.RepeatWrapping;
  colorMap.repeat.set(repeatX, repeatY);

  const normalMap = useLoader(TextureLoader, "/assets/grass/normal.jpg");
  normalMap.wrapS = normalMap.wrapT = THREE.RepeatWrapping;
  normalMap.repeat.set(repeatX, repeatY);

  const roughnessMap = useLoader(TextureLoader, "/assets/grass/roughness.jpg");
  roughnessMap.wrapS = roughnessMap.wrapT = THREE.RepeatWrapping;
  roughnessMap.repeat.set(repeatX, repeatY);

  const aoMap = useLoader(TextureLoader, "/assets/grass/ambientOcclusion.jpg");
  aoMap.wrapS = aoMap.wrapT = THREE.RepeatWrapping;
  aoMap.repeat.set(repeatX, repeatY);

  return (
    <mesh rotation={[-Math.PI * 0.5, 0, 0]}>
      <planeGeometry receiveShadow args={[20, 20]} />
      <meshStandardMaterial
        attach="material"
        map={colorMap}
        normalMap={normalMap}
        roughnessMap={roughnessMap}
        aoMap={aoMap}
      />
    </mesh>
  );
};
