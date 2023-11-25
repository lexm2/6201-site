
import React, { useRef } from "react";
import { useGLTF, PerspectiveCamera } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/bonkModel.glb");
  return (
    <group {...props} dispose={null}>
      <PerspectiveCamera
        makeDefault={false}
        far={100}
        near={0.1}
        fov={37.299}
        position={[7.359, 4.958, -6.898]}
        rotation={[-2.736, 0.776, 2.85]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bonk_Top_Level_Robot_Assembly_v163.geometry}
        material={materials["Opaque(229,234,237)"]}
        scale={0.1}
      />
    </group>
  );
}

useGLTF.preload("/bonkModel.glb");

