import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Float } from "@react-three/drei";
import * as THREE from "three";

function ParticleField() {
  const ref = useRef<THREE.Points>(null!);
  
  // Generate random points in a sphere
  const sphere = useMemo(() => {
    const positions = new Float32Array(5000 * 3);
    for (let i = 0; i < 5000; i++) {
      const r = 10 * Math.sqrt(Math.random());
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    return positions;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#00FFFF"
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.3}
        />
      </Points>
    </group>
  );
}

function FloatingShape({ color, position, speed = 1 }: { color: string, position: [number, number, number], speed?: number }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const timeRef = useRef(0);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      timeRef.current += delta * speed;
      const time = timeRef.current;
      meshRef.current.position.y = position[1] + Math.sin(time) * 0.5;
      meshRef.current.rotation.x = time * 0.2;
      meshRef.current.rotation.y = time * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color={color} wireframe transparent opacity={0.15} />
      </mesh>
    </Float>
  );
}

export default function Scene3D() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none opacity-40">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00FFFF" />
        <pointLight position={[-10, -10, -10]} color="#008080" intensity={0.5} />
        
        <ParticleField />
        
        <FloatingShape color="#00FFFF" position={[-4, 2, -2]} speed={0.5} />
        <FloatingShape color="#008080" position={[4, -2, -3]} speed={0.8} />
        <FloatingShape color="#00FFFF" position={[2, 3, -5]} speed={0.3} />
        
        <fog attach="fog" args={["#050505", 5, 15]} />
      </Canvas>
    </div>
  );
}
