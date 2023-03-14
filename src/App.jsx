import { useState } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      {/* Canvas Size By Parents */}
      <Canvas>
        {/* Space Stars Background */}
        <Stars />

        {/* Control Object */}
        <OrbitControls />

        {/* Light on Object for Color & Shadow */}
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.3} />

        {/* Object */}
        <mesh position={[0, 0, 0]}>
          {/* <boxBufferGeometry attatch="geometry" /> */}
          <boxGeometry args={[2, 2, 2]} />
          <meshLambertMaterial attatch="material" color="orange" />
        </mesh>
      </Canvas>
    </div>
  );
}

export default App;
