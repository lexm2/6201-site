import React, { useEffect, useRef } from "react";
import { useGLTF, useProgress } from "@react-three/drei";
import * as THREE from 'three'

export function Bonk(props) {
  const { nodes } = useGLTF("/bonkDecimated.glb");

  const wireframeMaterial = new THREE.MeshNormalMaterial({ wireframe: true });

  return (
    <group {...props} dispose={null}>
      <group scale={0.1}>
        {Object.values(nodes).map((node, index) => (
          <mesh
            key={index}
            geometry={node.geometry}
            material={wireframeMaterial}
          />
        ))}
      </group>
    </group>
  );
}

useGLTF.preload("/bonkDecimated.glb");
