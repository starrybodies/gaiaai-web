"use client";

import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const RADIUS = 1.6;
const SEGMENTS = 48;

// Convert lat/lon to 3D position on sphere
function latLonToVec3(lat: number, lon: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}

const LOCATIONS = [
  { lat: 4.7, lon: -74.1, label: "Bogota (Batis)" },
  { lat: 40.7, lon: -74.0, label: "New York (UN)" },
  { lat: 52.5, lon: 13.4, label: "Berlin (Regen)" },
  { lat: 37.8, lon: -122.4, label: "San Francisco" },
  { lat: -1.29, lon: 36.82, label: "Nairobi" },
  { lat: -22.91, lon: -43.17, label: "Brazil" },
];

const CONNECTIONS = [
  [0, 1], [1, 2], [1, 3], [2, 4], [0, 5], [3, 5],
];

// Floating particles around the globe
function Particles() {
  const ref = useRef<THREE.Points>(null);
  const count = 200;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = RADIUS + 0.3 + Math.random() * 1.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.cos(phi);
      pos[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
    }
    return pos;
  }, []);

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.03;
    }
  });

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    return geo;
  }, [positions]);

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial
        color="#00E87B"
        size={0.008}
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

function WireframeGlobe() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[RADIUS, SEGMENTS, SEGMENTS]} />
      <meshBasicMaterial color="#00E87B" wireframe opacity={0.06} transparent />
    </mesh>
  );
}

function InnerGlow() {
  return (
    <mesh>
      <sphereGeometry args={[RADIUS * 0.98, 32, 32]} />
      <meshBasicMaterial
        color="#00E87B"
        transparent
        opacity={0.02}
      />
    </mesh>
  );
}

function Atmosphere() {
  return (
    <>
      <mesh>
        <sphereGeometry args={[RADIUS * 1.08, 32, 32]} />
        <meshBasicMaterial
          color="#00E87B"
          transparent
          opacity={0.04}
          side={THREE.BackSide}
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[RADIUS * 1.15, 32, 32]} />
        <meshBasicMaterial
          color="#00E87B"
          transparent
          opacity={0.02}
          side={THREE.BackSide}
        />
      </mesh>
    </>
  );
}

function LocationMarkers() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.05;
    }
  });

  const points = useMemo(
    () => LOCATIONS.map((loc) => latLonToVec3(loc.lat, loc.lon, RADIUS + 0.01)),
    []
  );

  const connectionLines = useMemo(() => {
    return CONNECTIONS.map(([from, to]) => {
      const start = points[from];
      const end = points[to];
      const mid = new THREE.Vector3()
        .addVectors(start, end)
        .multiplyScalar(0.5)
        .normalize()
        .multiplyScalar(RADIUS * 1.3);
      const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
      const curvePoints = curve.getPoints(32);
      const positions = new Float32Array(curvePoints.length * 3);
      curvePoints.forEach((p, idx) => {
        positions[idx * 3] = p.x;
        positions[idx * 3 + 1] = p.y;
        positions[idx * 3 + 2] = p.z;
      });
      return positions;
    });
  }, [points]);

  return (
    <group ref={groupRef}>
      {/* Location dots */}
      {points.map((pos, i) => (
        <group key={i} position={pos}>
          <mesh>
            <sphereGeometry args={[0.025, 8, 8]} />
            <meshBasicMaterial color="#00E87B" />
          </mesh>
          {/* Pulse ring */}
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <ringGeometry args={[0.03, 0.05, 16]} />
            <meshBasicMaterial color="#00E87B" transparent opacity={0.3} side={THREE.DoubleSide} />
          </mesh>
        </group>
      ))}
      {/* Connection arcs */}
      {connectionLines.map((positions, i) => {
        const geo = new THREE.BufferGeometry();
        geo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
        return (
          <primitive key={i} object={new THREE.Line(geo, new THREE.LineBasicMaterial({ color: "#00E87B", transparent: true, opacity: 0.15 }))} />
        );
      })}
    </group>
  );
}

function GlobeScene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <InnerGlow />
      <WireframeGlobe />
      <Atmosphere />
      <LocationMarkers />
      <Particles />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={(2 * Math.PI) / 3}
      />
    </>
  );
}

export function Globe({ className }: { className?: string }) {
  return (
    <div className={className} style={{ width: "100%", height: "100%" }}>
      <Suspense fallback={null}>
        <Canvas
          camera={{ position: [0, 0, 4.8], fov: 35 }}
          style={{ background: "transparent" }}
          gl={{ alpha: true, antialias: true }}
        >
          <GlobeScene />
        </Canvas>
      </Suspense>
    </div>
  );
}
