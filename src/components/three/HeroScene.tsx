import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Group, Mesh } from "three";

function FloatingShape({
  position,
  scale,
  speed,
  color,
  geometry,
}: {
  position: [number, number, number];
  scale: number;
  speed: number;
  color: string;
  geometry: "box" | "torus" | "sphere" | "octa";
}) {
  const ref = useRef<Mesh>(null);

  useFrame((state) => {
    const mesh = ref.current;
    if (!mesh) return;
    const t = state.clock.elapsedTime * speed;
    mesh.rotation.x = t * 0.4;
    mesh.rotation.y = t * 0.55;
    mesh.position.y = position[1] + Math.sin(t) * 0.35;
  });

  return (
    <mesh ref={ref} position={position} scale={scale}>
      {geometry === "box" && <boxGeometry args={[1, 1, 1]} />}
      {geometry === "torus" && <torusGeometry args={[0.7, 0.25, 24, 64]} />}
      {geometry === "sphere" && <sphereGeometry args={[0.7, 32, 32]} />}
      {geometry === "octa" && <octahedronGeometry args={[0.8, 0]} />}
      <meshStandardMaterial
        color={color}
        roughness={0.25}
        metalness={0.35}
        transparent
        opacity={0.85}
      />
    </mesh>
  );
}

function SceneContents() {
  const group = useRef<Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    const { x, y } = state.pointer;
    group.current.rotation.y += (x * 0.25 - group.current.rotation.y) * 0.04;
    group.current.rotation.x += (-y * 0.15 - group.current.rotation.x) * 0.04;
  });

  return (
    <group ref={group}>
      <ambientLight intensity={0.75} />
      <directionalLight position={[4, 6, 5]} intensity={1.6} />
      <directionalLight position={[-5, -2, -3]} intensity={0.5} color="#6ee7ff" />
      <FloatingShape position={[-3.1, 1.1, 0]} scale={0.8} speed={0.5} color="#2f4fd8" geometry="octa" />
      <FloatingShape position={[3.2, 1.5, -1]} scale={0.75} speed={0.42} color="#5ec9e8" geometry="torus" />
      <FloatingShape position={[2.4, -1.6, 0.4]} scale={0.55} speed={0.6} color="#1d2a63" geometry="box" />
      <FloatingShape position={[-2.6, -1.8, -0.6]} scale={0.45} speed={0.52} color="#e0b25c" geometry="sphere" />
      <FloatingShape position={[0.2, 2.3, -2]} scale={0.4} speed={0.7} color="#3b82f6" geometry="box" />
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.6]}
      camera={{ position: [0, 0, 7], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      style={{ pointerEvents: "none" }}
    >
      <SceneContents />
    </Canvas>
  );
}
