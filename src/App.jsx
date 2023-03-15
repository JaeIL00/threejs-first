import { useState } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import {
  AccumulativeShadows,
  RandomizedLight,
  Environment as EnvironmentImpl,
} from "@react-three/drei";

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      {/* Canvas Size By Parents */}
      <Canvas shadows camera={{ position: [-15, 10, 15], fov: 25 }}>
        <color attach="background" args={["green"]} />
        {/* Space Stars Background */}
        {/* <Stars /> */}

        {/* Control Object */}
        <OrbitControls />

        {/* Light on Object for Color & Shadow */}
        <ambientLight intensity={0.2} />
        <spotLight position={[10, 15, 10]} angle={0.3} />

        {/* Object */}
        <mesh receiveShadow castShadow>
          {/* <boxBufferGeometry attatch="geometry" /> */}
          <boxGeometry args={[2, 2, 2]} />
          <meshLambertMaterial attatch="material" color="yellow" />
        </mesh>
      </Canvas>
    </div>
  );
}

export default App;
