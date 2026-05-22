import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Sparkles, Stars, Center } from '@react-three/drei';

function DeveloperWorkstation() {
  return (
    <group position={[0, -0.5, 0]}>
      {/* Table/Base */}
      <mesh position={[0, -0.1, 0]}>
        <boxGeometry args={[3, 0.15, 2]} />
        <meshStandardMaterial color="#1e1b4b" roughness={0.4} metalness={0.8} />
      </mesh>

      {/* Keyboard */}
      <mesh position={[0, 0.02, 0.4]}>
        <boxGeometry args={[1.2, 0.04, 0.4]} />
        <meshStandardMaterial color="#0f172a" roughness={0.8} />
      </mesh>

      {/* Mouse */}
      <mesh position={[0.8, 0.02, 0.4]}>
        <boxGeometry args={[0.15, 0.04, 0.25]} />
        <meshStandardMaterial color="#6366f1" roughness={0.5} />
      </mesh>

      {/* Monitor Base & Stand */}
      <mesh position={[0, 0.3, -0.4]}>
        <cylinderGeometry args={[0.06, 0.06, 0.6]} />
        <meshStandardMaterial color="#334155" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Monitor Screen Frame */}
      <mesh position={[0, 0.8, -0.4]}>
        <boxGeometry args={[2.2, 1.2, 0.08]} />
        <meshStandardMaterial color="#0f172a" roughness={0.5} />
      </mesh>

      {/* Glowing Screen Content */}
      <mesh position={[0, 0.8, -0.35]}>
        <boxGeometry args={[2.1, 1.1, 0.02]} />
        <meshStandardMaterial
          color="#06b6d4"
          emissive="#06b6d4"
          emissiveIntensity={1.5}
          roughness={0.2}
        />
      </mesh>

      {/* Screen Coding Visual Code Lines */}
      <mesh position={[-0.4, 0.8, -0.33]}>
        <boxGeometry args={[0.8, 0.03, 0.02]} />
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={2} />
      </mesh>
      <mesh position={[-0.2, 0.7, -0.33]}>
        <boxGeometry args={[1.2, 0.03, 0.02]} />
        <meshStandardMaterial color="#a855f7" emissive="#a855f7" emissiveIntensity={2} />
      </mesh>
      <mesh position={[-0.5, 0.9, -0.33]}>
        <boxGeometry args={[0.6, 0.03, 0.02]} />
        <meshStandardMaterial color="#10b981" emissive="#10b981" emissiveIntensity={2} />
      </mesh>

      {/* Floating Glowing Brain/Sphere above setup symbolizing AI */}
      <Float speed={3} rotationIntensity={1.5} floatIntensity={1.5}>
        <mesh position={[0, 1.8, 0]}>
          <sphereGeometry args={[0.35, 32, 32]} />
          <meshStandardMaterial
            color="#6366f1"
            emissive="#6366f1"
            emissiveIntensity={2}
            wireframe
          />
        </mesh>
        {/* Core glow */}
        <mesh position={[0, 1.8, 0]}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshBasicMaterial color="#06b6d4" />
        </mesh>
      </Float>

      {/* Orbiting Tech Rings */}
      <group position={[0, 1.8, 0]} rotation={[0.5, 0.5, 0]}>
        <mesh>
          <torusGeometry args={[0.7, 0.02, 8, 64]} />
          <meshBasicMaterial color="#a855f7" opacity={0.6} transparent />
        </mesh>
      </group>
      <group position={[0, 1.8, 0]} rotation={[-0.5, 0.8, 0.5]}>
        <mesh>
          <torusGeometry args={[0.9, 0.015, 8, 64]} />
          <meshBasicMaterial color="#06b6d4" opacity={0.5} transparent />
        </mesh>
      </group>
    </group>
  );
}

export default function AvatarCanvas() {
  return (
    <div style={{ width: '100%', height: '500px', cursor: 'grab' }}>
      <Canvas
        camera={{ position: [4, 3, 5], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#6366f1" />
        <pointLight position={[-10, 5, -10]} intensity={0.8} color="#06b6d4" />
        <directionalLight position={[0, 10, 0]} intensity={1} />
        
        <Suspense fallback={null}>
          <Center>
            <DeveloperWorkstation />
          </Center>
          <Sparkles count={50} scale={4} size={2} speed={0.4} color="#06b6d4" />
          <Stars radius={100} depth={50} count={300} factor={4} saturation={0.5} fade speed={1} />
        </Suspense>
        
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2 - 0.05} // Don't go below ground
          minPolarAngle={Math.PI / 6}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}
