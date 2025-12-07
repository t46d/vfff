import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

export default function ThreeScene() {
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: -10 }}>
      <Canvas camera={{ position: [0, 0, 6] }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[2, 2, 2]} intensity={1.2} />
        <Stars radius={60} depth={20} count={2500} factor={6} saturation={0} fade />
      </Canvas>
    </div>
  );
}
