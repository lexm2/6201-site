import { Canvas } from "@react-three/fiber";
import { Bonk } from "@/public/Bonk";
import { Environment, Preload } from "@react-three/drei";

const HomeCanvas = () => (
  <div
    style={{ width: "100%", position: "fixed", bottom: "0" }}
    className="canvas__container"
  >
    <Canvas>
      <Bonk />
      <ambientLight />
      <Environment preset="city" />
      <Preload all />
    </Canvas>
  </div>
);


export default HomeCanvas;