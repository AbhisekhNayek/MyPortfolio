"use client";

import React, { useEffect, useState, Suspense, lazy } from "react";

export default function ThreeScene() {
  const [isClient, setIsClient] = useState(false);
  const [Scene, setScene] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    setIsClient(true);

    const loadThreeScene = async () => {
      try {
        const { Canvas } = await import("@react-three/fiber");
        const { OrbitControls, Environment } = await import("@react-three/drei");
        const ProfessionalScene = (await import("@/components/3d/professional-scene")).default;

        const RenderScene = () => (
          <Canvas
            camera={{ position: [0, 0, 8], fov: 60 }}
            gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
            dpr={[1, 2]}
            onCreated={({ gl }) => {
              gl.setClearColor(0x000000, 0); // Transparent background
            }}
          >
            <Suspense fallback={<LoadingFallback />}>
              <ambientLight intensity={0.4} />
              <directionalLight position={[5, 5, 5]} intensity={1} />
              <ProfessionalScene />
              <Environment preset="sunset" background={false} />
              <OrbitControls
                enableZoom={false}
                enablePan={false}
                autoRotate
                autoRotateSpeed={0.5}
                maxPolarAngle={Math.PI / 1.9}
                minPolarAngle={Math.PI / 2.1}
              />
            </Suspense>
          </Canvas>
        );

        setScene(() => RenderScene);
      } catch (err) {
        console.error("Three.js Scene Load Failed:", err);
      }
    };

    loadThreeScene();
  }, []);

  if (!isClient || !Scene) return null;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Scene />
    </div>
  );
}

// Small fallback animation or visual
function LoadingFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white" />
    </div>
  );
}
