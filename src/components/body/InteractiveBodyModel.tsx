import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { CameraControls, Float, Environment, Sparkles, ContactShadows } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";

// Colors for the "White Glow" aesthetic
const WIREFRAME_COLOR = "#FF6B6B"; // Salmon/Peach Wireframe to stand out against white
const HOVER_COLOR = "#000000"; // Black on hover for high contrast

interface BodyPartProps {
  position: [number, number, number];
  scale: [number, number, number];
  name: string;
  onClick: (name: string, position: THREE.Vector3) => void;
  isHovered: boolean;
  onHover: (name: string | null) => void;
  geometryType?: "sphere" | "capsule" | "cylinder";
}

const BodyPart = ({ position, scale, name, onClick, isHovered, onHover, geometryType = "sphere" }: BodyPartProps) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      // Gentle pulsing when hovered
      const hoverScale = isHovered ? 1.1 : 1;
      meshRef.current.scale.lerp(
        new THREE.Vector3(scale[0] * hoverScale, scale[1] * hoverScale, scale[2] * hoverScale),
        0.1
      );
    }
  });

  const handleClick = (e: any) => {
    e.stopPropagation();
    const worldPosition = new THREE.Vector3();
    meshRef.current?.getWorldPosition(worldPosition);
    onClick(name, worldPosition);
  };

  return (
    <mesh
      ref={meshRef}
      position={position}
      onClick={handleClick}
      onPointerEnter={() => onHover(name)}
      onPointerLeave={() => onHover(null)}
    >
      {geometryType === "capsule" && <capsuleGeometry args={[1, 2, 4, 8]} />}
      {geometryType === "sphere" && <sphereGeometry args={[1, 16, 16]} />}
      {geometryType === "cylinder" && <cylinderGeometry args={[1, 1, 2, 16]} />}

      <meshBasicMaterial
        color={isHovered ? HOVER_COLOR : WIREFRAME_COLOR}
        wireframe={true}
        transparent
        opacity={isHovered ? 0.8 : 0.3}
      />
    </mesh>
  );
};

const ProceduralWireframeModel = ({ onPartClick, hoveredPart, onHover }: any) => {
  return (
    <group position={[0, -2, 0]}>
      {/* === HEAD AREA === */}
      <BodyPart name="face" position={[0, 4.2, 0]} scale={[0.4, 0.5, 0.45]} onClick={onPartClick} isHovered={hoveredPart === "face"} onHover={onHover} />
      <BodyPart name="hair" position={[0, 4.4, -0.1]} scale={[0.45, 0.5, 0.5]} onClick={onPartClick} isHovered={hoveredPart === "hair"} onHover={onHover} />

      {/* NECK */}
      <BodyPart name="neck" position={[0, 3.5, 0]} scale={[0.15, 0.3, 0.15]} geometryType="cylinder" onClick={onPartClick} isHovered={hoveredPart === "neck"} onHover={onHover} />

      {/* TORSO */}
      <BodyPart name="chest" position={[0, 2.8, 0]} scale={[0.45, 0.7, 0.25]} geometryType="cylinder" onClick={onPartClick} isHovered={hoveredPart === "chest"} onHover={onHover} />
      <BodyPart name="waist" position={[0, 1.8, 0]} scale={[0.35, 0.6, 0.22]} geometryType="cylinder" onClick={onPartClick} isHovered={hoveredPart === "waist"} onHover={onHover} />
      <BodyPart name="hips" position={[0, 1.0, 0]} scale={[0.45, 0.5, 0.25]} geometryType="cylinder" onClick={onPartClick} isHovered={hoveredPart === "hips"} onHover={onHover} />

      {/* ARMS */}
      <BodyPart name="shoulders" position={[-0.6, 3, 0]} scale={[0.2, 0.2, 0.2]} onClick={onPartClick} isHovered={hoveredPart === "shoulders"} onHover={onHover} />
      <BodyPart name="shoulders" position={[0.6, 3, 0]} scale={[0.2, 0.2, 0.2]} onClick={onPartClick} isHovered={hoveredPart === "shoulders"} onHover={onHover} />

      <BodyPart name="arms" position={[-0.8, 2.2, 0]} scale={[0.12, 0.8, 0.12]} geometryType="cylinder" onClick={onPartClick} isHovered={hoveredPart === "arms"} onHover={onHover} />
      <BodyPart name="arms" position={[0.8, 2.2, 0]} scale={[0.12, 0.8, 0.12]} geometryType="cylinder" onClick={onPartClick} isHovered={hoveredPart === "arms"} onHover={onHover} />

      <BodyPart name="hands" position={[-1, 1.2, 0]} scale={[0.12, 0.2, 0.1]} onClick={onPartClick} isHovered={hoveredPart === "hands"} onHover={onHover} />
      <BodyPart name="hands" position={[1, 1.2, 0]} scale={[0.12, 0.2, 0.1]} onClick={onPartClick} isHovered={hoveredPart === "hands"} onHover={onHover} />

      {/* LEGS */}
      <BodyPart name="legs" position={[-0.3, 0, 0]} scale={[0.18, 1.2, 0.18]} geometryType="cylinder" onClick={onPartClick} isHovered={hoveredPart === "legs"} onHover={onHover} />
      <BodyPart name="legs" position={[0.3, 0, 0]} scale={[0.18, 1.2, 0.18]} geometryType="cylinder" onClick={onPartClick} isHovered={hoveredPart === "legs"} onHover={onHover} />

      <BodyPart name="feet" position={[-0.35, -1.4, 0.1]} scale={[0.15, 0.1, 0.3]} onClick={onPartClick} isHovered={hoveredPart === "feet"} onHover={onHover} />
      <BodyPart name="feet" position={[0.35, -1.4, 0.1]} scale={[0.15, 0.1, 0.3]} onClick={onPartClick} isHovered={hoveredPart === "feet"} onHover={onHover} />
    </group>
  );
}

interface InteractiveBodyModelProps {
  onBodyPartClick: (part: string) => void;
  hoveredPart: string | null;
}

export const InteractiveBodyModel = ({ onBodyPartClick, hoveredPart: propHoveredPart }: InteractiveBodyModelProps) => {
  const cameraControlsRef = useRef<CameraControls>(null);
  const [internalHover, setInternalHover] = useState<string | null>(null);
  const currentHover = internalHover || propHoveredPart;

  const handlePartClick = (name: string, position: THREE.Vector3) => {
    onBodyPartClick(name);

    if (cameraControlsRef.current) {
      const offsetDist = name === 'face' || name === 'neck' ? 1.5 : 3.0;
      const offset = position.clone().add(new THREE.Vector3(0, 0, offsetDist));

      cameraControlsRef.current.setLookAt(
        offset.x, offset.y, offset.z,
        position.x, position.y, position.z,
        true
      );
    }
  };

  return (
    <div className="relative w-full h-[600px] md:h-[700px]">
      <Canvas
        camera={{ position: [0, 1.5, 6], fov: 40 }}
        style={{ background: "transparent" }}
        shadows
        onPointerMissed={() => cameraControlsRef.current?.setLookAt(0, 1.5, 6, 0, 1, 0, true)}
      >
        <ambientLight intensity={0.8} />
        <spotLight position={[5, 10, 5]} intensity={0.5} />
        <Environment preset="city" />

        <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.2}>
          <ProceduralWireframeModel onPartClick={handlePartClick} hoveredPart={currentHover} onHover={setInternalHover} />
        </Float>

        <ContactShadows opacity={0.2} scale={10} blur={2.5} far={4} color="#000000" />
        <CameraControls ref={cameraControlsRef} minPolarAngle={0} maxPolarAngle={Math.PI / 1.8} />
      </Canvas>

      <div className="absolute top-4 right-4 z-10">
        <button
          onClick={() => cameraControlsRef.current?.setLookAt(0, 1.5, 6, 0, 1, 0, true)}
          className="px-4 py-2 bg-white/50 backdrop-blur-md rounded-full text-xs font-bold text-gray-800 uppercase border border-gray-200 hover:bg-white transition-all shadow-sm"
        >
          Reset View
        </button>
      </div>

      {/* Simple Floating Label */}
      {currentHover && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20"
        >
          <div className="bg-white/80 backdrop-blur-md text-gray-900 px-6 py-2 rounded-full border border-gray-200 shadow-xl">
            <span className="text-lg font-bold uppercase tracking-widest">{currentHover}</span>
          </div>
        </motion.div>
      )}
    </div>
  );
};
