import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Model } from "@/public/Model";
import { Environment } from "@react-three/drei";

export default function ModelCanvas() {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <Model />
        <spotLight position={[0, 20, -20]} intensity={1.5} color="#fff" penumbra={0.5} castShadow={false} />
      </Suspense>
    </Canvas>
  );
}
