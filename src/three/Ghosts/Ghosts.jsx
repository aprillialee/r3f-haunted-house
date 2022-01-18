// React
import React, { useRef } from "react";

//R3F
import { useFrame } from "@react-three/fiber";

//THREE
import * as THREE from "three";

const Ghosts = () => {
  return (
    <>
      <Ghost1 />
      <Ghost2 />
      <Ghost3 />
    </>
  );
};

export default Ghosts;

const clock = new THREE.Clock();

const Ghost1 = () => {
  const ghost1Ref = useRef();

  useFrame(() => {
    const elapsedTime = clock.getElapsedTime();

    const ghost1Angle = elapsedTime * 0.5;

    ghost1Ref.current.position.x = Math.cos(ghost1Angle) * 4;
    ghost1Ref.current.position.y = Math.sin(ghost1Angle) * 4;
    ghost1Ref.current.position.z = Math.sin(elapsedTime * 3);
  });

  return (
    <pointLight
      castShadow
      ref={ghost1Ref}
      color="#ff00ff"
      intensity={2}
      distance={3}
    />
  );
};

const Ghost2 = () => {
  const ghost2Ref = useRef();

  useFrame(() => {
    const elapsedTime = clock.getElapsedTime();

    const ghost2Angle = -elapsedTime * 0.32;

    ghost2Ref.current.position.x = Math.cos(ghost2Angle) * 5;
    ghost2Ref.current.position.y = Math.sin(ghost2Angle) * 5;
    ghost2Ref.current.position.z =
      Math.sin(elapsedTime * 4) + Math.sin(elapsedTime * 2.5);
  });

  return (
    <pointLight
      castShadow
      ref={ghost2Ref}
      color="#00ffff"
      intensity={2}
      distance={3}
    />
  );
};

const Ghost3 = () => {
  const ghost3Ref = useRef();

  useFrame(() => {
    const elapsedTime = clock.getElapsedTime();

    const ghost3Angle = -elapsedTime * 0.18;

    ghost3Ref.current.position.x =
      Math.cos(ghost3Angle) * (7 + Math.sin(elapsedTime * 0.32));
    ghost3Ref.current.position.y =
      Math.sin(ghost3Angle) * (7 + Math.sin(elapsedTime * 0.5));
    ghost3Ref.current.position.z =
      Math.sin(elapsedTime * 4) + Math.sin(elapsedTime * 2.5);
  });
  return (
    <pointLight
      castShadow
      ref={ghost3Ref}
      color="#ffff00"
      intensity={2}
      distance={3}
    />
  );
};
