
import { Canvas, useFrame } from "@react-three/fiber";
import { Cloud, Float, Environment, Sparkles } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const FloatingOrbs = () => {
    const ref = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (ref.current) {
            ref.current.rotation.y = state.clock.elapsedTime * 0.05;
        }
    });

    return (
        <group ref={ref}>
            {/* Soft Glowing Orbs to create the "Glowing White" atmosphere */}
            <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
                <mesh position={[-5, 5, -10]}>
                    <sphereGeometry args={[4, 32, 32]} />
                    <meshStandardMaterial color="#FFE5D9" emissive="#FFE5D9" emissiveIntensity={0.5} transparent opacity={0.6} />
                </mesh>
                <mesh position={[7, -5, -12]}>
                    <sphereGeometry args={[5, 32, 32]} />
                    <meshStandardMaterial color="#FFD1DC" emissive="#FFD1DC" emissiveIntensity={0.4} transparent opacity={0.5} />
                </mesh>
                <mesh position={[0, 8, -15]}>
                    <sphereGeometry args={[6, 32, 32]} />
                    <meshStandardMaterial color="#E0F7FA" emissive="#E0F7FA" emissiveIntensity={0.3} transparent opacity={0.4} />
                </mesh>
            </Float>
        </group>
    )
}

const Background3D = () => {
    return (
        <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none bg-gradient-to-b from-white via-[#fff5f5] to-[#fff0f0]">
            {/* 3D Canvas Layer */}
            <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
                <ambientLight intensity={1.2} />
                <directionalLight position={[5, 10, 5]} intensity={1.5} color="#fff" />
                <Environment preset="dawn" />

                <FloatingOrbs />

                {/* Subtle sparkle for the "Glow" */}
                <Sparkles count={100} scale={20} size={3} speed={0.2} opacity={0.4} color="#FFB7B2" />
            </Canvas>

            {/* Soft overlay to blend everything */}
            <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]" />
        </div>
    );
};

export default Background3D;
