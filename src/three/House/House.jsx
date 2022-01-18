// React
import React from "react";

// R3F
import { useLoader } from "@react-three/fiber";

//THREE
import { TextureLoader } from "three/src/loaders/TextureLoader";

const House = () => {
  return (
    <group>
      <Roof />
      <Walls />
      <pointLight
        color="#ff7d46"
        intensity={0.5}
        distance={7}
        position={[0, 2.2, 2.7]}
      />
      <Door />
      <Bush position={[0.8, 0.2, 2.2]} scale={[0.5, 0.5, 0.5]} />
      <Bush position={[1.4, 0.1, 2.1]} scale={[0.25, 0.25, 0.25]} />
      <Bush position={[-0.8, 0.1, 2.2]} scale={[0.4, 0.4, 0.4]} />
      <Bush position={[-1, 0.05, 2.6]} scale={[0.15, 0.15, 0.15]} />
    </group>
  );
};

export default House;

const Roof = () => {
  return (
    <mesh
      castShadow
      receiveShadow
      position={[0, 3 + 0.5, 0]}
      rotation={[0, Math.PI * 0.25, 0]}
    >
      <coneGeometry args={[3.5, 1, 4]} />
      <meshStandardMaterial color="#b35f45" />
    </mesh>
  );
};

const Walls = () => {
  const [colorMap, normalMap, roughnessMap, aoMap] = useLoader(TextureLoader, [
    "/assets/walls/color.jpg",
    "/assets/walls/normal.jpg",
    "/assets/walls/roughness.jpg",
    "/assets/walls/ambientOcclusion.jpg",
  ]);
  return (
    <mesh castShadow receiveShadow position={[0, 3 * 0.5, 0]}>
      <boxGeometry args={[4, 3, 4]} />
      <meshStandardMaterial
        map={colorMap}
        normalMap={normalMap}
        roughnessMap={roughnessMap}
        aoMap={aoMap}
        aoMapIntensity={1}
      />
    </mesh>
  );
};

const Door = () => {
  const [
    colorMap,
    displacementMap,
    normalMap,
    roughnessMap,
    metalnessMap,
    aoMap,
    alphaMap,
  ] = useLoader(TextureLoader, [
    "/assets/door/color.jpg",
    "/assets/door/height.jpg",
    "/assets/door/normal.jpg",
    "/assets/door/roughness.jpg",
    "/assets/door/metalness.jpg",
    "/assets/door/ambientOcclusion.jpg",
    "/assets/door/alpha.jpg",
  ]);
  return (
    <mesh position={[0, 2 * 0.45, 2.01]}>
      <planeGeometry args={[2.2, 2.2, 100, 100]} />
      <meshStandardMaterial
        transparent="true"
        displacementScale={0.15}
        map={colorMap}
        displacementMap={displacementMap}
        normalMap={normalMap}
        roughnessMap={roughnessMap}
        metalnessMap={metalnessMap}
        aoMap={aoMap}
        alphaMap={alphaMap}
      />
    </mesh>
  );
};

const Bush = ({ position, scale }) => {
  return (
    <mesh castShadow receiveShadow position={position} scale={scale}>
      <sphereGeometry args={[1, 16, 16]} />
      <meshStandardMaterial color="#89c854" />
    </mesh>
  );
};
