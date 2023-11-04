"use server"

import React from "react";
import { useGLTF, PerspectiveCamera } from "@react-three/drei";

export async function BonkWireframe(props) {
  const { nodes, materials } = useGLTF("../public/bonkModel.glb");
  return (
    <group {...props} dispose={null}>
      <PerspectiveCamera
        makeDefault={true}
        far={100}
        near={0.1}
        fov={37.299}
        position={[7.359, 4.958, -6.898]}
        rotation={[-2.736, 0.776, 2.85]}
      />
      <group scale={1}>
        <mesh
          geometry={nodes.Bonk_Top_Level_Robot_Assembly_v163.geometry}
          material={materials["Opaque(229,234,237)"]}
          scale={0.1}
        >
          <meshNormalMaterial wireframe wireframeLinewidth={1} />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("../public/bonkModel.glb");
