"use client"


import { Canvas } from "@react-three/fiber";
import { BonkWireframe } from "./BonkWireframe";

function CanvasComponent() {
  return (
    <Canvas>
      <ambientLight intensity={0.3} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <BonkWireframe scale={scale} />
    </Canvas>
  );
};

const ModelViewer = ({ scale }) => {
  return (
    <div className="model">
      <CanvasComponent scale={scale} />
    </div>
  );
};

export default ModelViewer;
