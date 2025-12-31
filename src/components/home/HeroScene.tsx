
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Stars } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const GlowingOrb = () => {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
        }
    });

    return (
        <Sphere args={[1, 100, 200]} scale={2.4} ref={meshRef}>
            <MeshDistortMaterial
                color="#f4a460" // Warm Peach-ish color
                attach="material"
                distort={0.4}
                speed={1.5}
                roughness={0}
                metalness={0.8}
                emissive="#ff7f50"
                emissiveIntensity={0.2}
            />
        </Sphere>
    );
};

const FloatingParticles = () => {
    return (
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
    )
}

export const HeroScene = () => {
    return (
        <div className="w-full h-full min-h-[500px] absolute inset-0 z-0 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 8] }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1.5} color="#ffdab9" />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#e0ffff" />
                <spotLight position={[0, 15, 0]} angle={0.3} penumbra={1} intensity={2} castShadow />

                <Float
                    speed={2}
                    rotationIntensity={0.5}
                    floatIntensity={1}
                >
                    <GlowingOrb />
                </Float>

                <FloatingParticles />
            </Canvas>
        </div>
    );
};
