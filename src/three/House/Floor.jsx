//React
import React from "react";

//R3F
import { useLoader } from "@react-three/fiber";

//THREE
import * as THREE from "three";
import { TextureLoader } from "three/src/loaders/TextureLoader";

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
    <mesh receiveShadow rotation={[-Math.PI * 0.5, 0, 0]}>
      <planeGeometry args={[20, 20]} />
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

export default Floor;
