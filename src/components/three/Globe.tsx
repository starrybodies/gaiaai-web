"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { LAND_MASK, LAND_MASK_HEIGHT, LAND_MASK_WIDTH } from "./land-mask";

const RADIUS = 1.6;
const SAMPLES = 42000;
const TILT = 0.36;

export const GLOBE_SITES = [
  { lat: 4.7, lon: -74.1, label: "Bogotá — Fundación Batis" },
  { lat: 40.7, lon: -74.0, label: "New York — United Nations" },
  { lat: 39.74, lon: -104.99, label: "Denver — ETHDenver" },
  { lat: 37.8, lon: -122.4, label: "San Francisco" },
  { lat: 52.5, lon: 13.4, label: "Berlin" },
  { lat: 0.35, lon: 32.58, label: "Uganda — AYOWECCA" },
  { lat: -1.29, lon: 36.82, label: "Nairobi" },
  { lat: -22.91, lon: -43.17, label: "Brazil" },
];

const ARCS: [number, number][] = [
  [0, 1], [1, 4], [1, 3], [2, 1], [4, 5], [5, 6], [0, 7], [3, 7], [7, 5],
];

export type GlobeColors = { land: string; accent: string; core: string };

function latLonToVec3(lat: number, lon: number, r: number) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -r * Math.sin(phi) * Math.cos(theta),
    r * Math.cos(phi),
    r * Math.sin(phi) * Math.sin(theta)
  );
}

function isLand(lat: number, lon: number) {
  const bytes = landBytes();
  const x = Math.min(LAND_MASK_WIDTH - 1, Math.floor(lon + 180));
  const y = Math.min(LAND_MASK_HEIGHT - 1, Math.floor(90 - lat));
  const i = y * LAND_MASK_WIDTH + x;
  return (bytes[i >> 3] >> (i & 7)) & 1;
}

let cachedBytes: Uint8Array | null = null;
function landBytes() {
  if (!cachedBytes) {
    const bin = atob(LAND_MASK);
    cachedBytes = Uint8Array.from(bin, (c) => c.charCodeAt(0));
  }
  return cachedBytes;
}

/** Evenly spaced points on the sphere (Fibonacci lattice), kept where there is land. */
function useLandPoints() {
  return useMemo(() => {
    const out: number[] = [];
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < SAMPLES; i++) {
      const y = 1 - (i / (SAMPLES - 1)) * 2;
      const lat = Math.asin(y) * (180 / Math.PI);
      const lon = ((((i * golden) * 180) / Math.PI) % 360) - 180;
      if (!isLand(lat, lon)) continue;
      const v = latLonToVec3(lat, lon, RADIUS);
      out.push(v.x, v.y, v.z);
    }
    return new Float32Array(out);
  }, []);
}

const dotVertex = /* glsl */ `
  uniform float uSize;
  varying float vFacing;
  void main() {
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    vec3 n = normalize(normalMatrix * normalize(position));
    vFacing = dot(n, normalize(-mv.xyz));
    gl_PointSize = uSize * (6.0 / -mv.z);
    gl_Position = projectionMatrix * mv;
  }
`;

const dotFragment = /* glsl */ `
  uniform vec3 uColor;
  varying float vFacing;
  void main() {
    vec2 c = gl_PointCoord - 0.5;
    if (dot(c, c) > 0.25) discard;
    float a = smoothstep(-0.15, 0.55, vFacing);
    gl_FragColor = vec4(uColor, a * 0.9);
  }
`;

function LandDots({ color }: { color: string }) {
  const positions = useLandPoints();
  const uniforms = useMemo(
    () => ({ uColor: { value: new THREE.Color(color) }, uSize: { value: 2.2 } }),
    [color]
  );
  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <shaderMaterial
        vertexShader={dotVertex}
        fragmentShader={dotFragment}
        uniforms={uniforms}
        transparent
        depthWrite={false}
      />
    </points>
  );
}

function Sites({ color, animate }: { color: string; animate: boolean }) {
  const rings = useRef<THREE.Mesh[]>([]);
  const packets = useRef<THREE.Mesh[]>([]);

  const points = useMemo(
    () => GLOBE_SITES.map((s) => latLonToVec3(s.lat, s.lon, RADIUS + 0.005)),
    []
  );

  const arcs = useMemo(
    () =>
      ARCS.map(([a, b]) => {
        const start = points[a];
        const end = points[b];
        const lift = 1 + start.distanceTo(end) * 0.28;
        const mid = start.clone().add(end).multiplyScalar(0.5).normalize().multiplyScalar(RADIUS * lift);
        const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
        const geo = new THREE.BufferGeometry().setFromPoints(curve.getPoints(64));
        const line = new THREE.Line(
          geo,
          new THREE.LineDashedMaterial({ color, transparent: true, opacity: 0.4, dashSize: 0.05, gapSize: 0.04 })
        );
        line.computeLineDistances();
        return { curve, line };
      }),
    [points, color]
  );

  useFrame(({ clock }) => {
    if (!animate) return;
    const t = clock.getElapsedTime();
    rings.current.forEach((ring, i) => {
      const phase = (t * 0.5 + i * 0.37) % 1;
      ring.scale.setScalar(1 + phase * 2.4);
      (ring.material as THREE.MeshBasicMaterial).opacity = 0.7 * (1 - phase);
    });
    // Signal packets travel each arc, staggered so the network never pulses in unison
    packets.current.forEach((packet, i) => {
      packet.position.copy(arcs[i].curve.getPoint((t * 0.22 + i * 0.29) % 1));
    });
  });

  return (
    <group>
      {arcs.map(({ curve, line }, i) => (
        <group key={i}>
          <primitive object={line} />
          <mesh
            position={curve.getPoint((i * 0.29) % 1)}
            ref={(el) => { if (el) packets.current[i] = el; }}
          >
            <sphereGeometry args={[0.014, 8, 8]} />
            <meshBasicMaterial color={color} />
          </mesh>
        </group>
      ))}
      {points.map((p, i) => {
        const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 0, 1), p.clone().normalize());
        return (
          <group key={i} position={p} quaternion={q}>
            <mesh>
              <circleGeometry args={[0.028, 20]} />
              <meshBasicMaterial color={color} />
            </mesh>
            <mesh ref={(el) => { if (el) rings.current[i] = el; }}>
              <ringGeometry args={[0.03, 0.038, 32]} />
              <meshBasicMaterial color={color} transparent opacity={0.6} side={THREE.DoubleSide} depthWrite={false} />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}

function Planet({ colors, animate }: { colors: GlobeColors; animate: boolean }) {
  const spin = useRef<THREE.Group>(null);
  useFrame((_s, delta) => {
    if (animate && spin.current) spin.current.rotation.y += delta * 0.045;
  });
  return (
    <group rotation={[TILT, 0, 0]}>
      <group ref={spin} rotation={[0, -1.05, 0]}>
        {/* Opaque core hides the far hemisphere's dots and arcs */}
        <mesh>
          <sphereGeometry args={[RADIUS * 0.985, 64, 64]} />
          <meshBasicMaterial color={colors.core} />
        </mesh>
        <LandDots color={colors.land} />
        <Sites color={colors.accent} animate={animate} />
      </group>
    </group>
  );
}

export function Globe({ colors, animate }: { colors: GlobeColors; animate: boolean }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 6.4], fov: 34 }}
      dpr={[1, 2]}
      gl={{ alpha: true, antialias: true }}
      frameloop={animate ? "always" : "demand"}
      aria-hidden
    >
      <Planet colors={colors} animate={animate} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={(2 * Math.PI) / 3}
      />
    </Canvas>
  );
}
