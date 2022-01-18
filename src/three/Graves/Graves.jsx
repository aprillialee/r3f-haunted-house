// React
import React from "react";

// R3F

const Graves = () => {
  const graves = [];

  for (let i = 0; i < 30; i++) {
    const angle = Math.random() * Math.PI * 2; // Random angle
    const radius = 4 + Math.random() * 4; // Random radius
    const x = Math.cos(angle) * radius; // Get the x position using cosinus
    const z = Math.sin(angle) * radius; // Get the z position using sinus

    const rotateY = (Math.random() - 0.5) * 0.4;
    const rotateZ = (Math.random() - 0.5) * 0.4;

    graves.push(
      <Grave key={i} position={[x, 0.3, z]} rotation={[0, rotateY, rotateZ]} />
    );
  }

  return <group>{graves}</group>;
};

export default Graves;

const Grave = ({ position, rotation }) => {
  return (
    <mesh position={position} rotation={rotation}>
      <boxGeometry castShadow args={[0.6, 0.8, 0.2]} />
      <meshStandardMaterial color="#b2b6b1" />
    </mesh>
  );
};
