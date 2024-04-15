import { Canvas } from "@react-three/fiber";
import { Bonk } from "@/public/Bonk";
import { Environment, Preload } from "@react-three/drei";

const HomeCanvas = () => {
  return (
    <div
      style={{ width: "100%", position: "fixed", bottom: "0" }}
      className="canvas__container"
    >
      <Canvas camera={{ position: [-6, 5, -6] }}>
        {/* <Bonk position={[0, 0, 0]}/> */}
        <ambientLight />
        <Environment preset="city" />
        <Preload all />
      </Canvas>
    </div>
  );
};

export default HomeCanvas;
