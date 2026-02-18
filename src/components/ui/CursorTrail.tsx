"use client";

import { useEffect, useRef, useCallback } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
  type: number; // 0 = leaf, 1 = dot
}

export function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const mouse = useRef({ x: -100, y: -100 });
  const animFrame = useRef<number>(0);
  const lastSpawn = useRef(0);

  const drawLeaf = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      size: number,
      rotation: number,
      alpha: number
    ) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.globalAlpha = alpha;
      ctx.fillStyle = "#00E87B";
      ctx.beginPath();
      ctx.moveTo(0, -size);
      ctx.quadraticCurveTo(size * 0.6, -size * 0.3, size * 0.3, size * 0.3);
      ctx.quadraticCurveTo(0, size * 0.6, -size * 0.3, size * 0.3);
      ctx.quadraticCurveTo(-size * 0.6, -size * 0.3, 0, -size);
      ctx.fill();
      ctx.restore();
    },
    []
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouse = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    window.addEventListener("mousemove", handleMouse);

    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Spawn particles less frequently, smaller
      if (time - lastSpawn.current > 80) {
        lastSpawn.current = time;
        if (
          mouse.current.x > 0 &&
          mouse.current.y > 0 &&
          mouse.current.x < canvas.width &&
          mouse.current.y < canvas.height
        ) {
          const isLeaf = Math.random() > 0.7;
          particles.current.push({
            x: mouse.current.x + (Math.random() - 0.5) * 6,
            y: mouse.current.y + (Math.random() - 0.5) * 6,
            vx: (Math.random() - 0.5) * 0.8,
            vy: Math.random() * 0.4 + 0.2,
            life: 1,
            maxLife: 1,
            size: isLeaf ? 3 + Math.random() * 3 : 1 + Math.random() * 1,
            rotation: Math.random() * Math.PI * 2,
            rotationSpeed: (Math.random() - 0.5) * 0.05,
            type: isLeaf ? 0 : 1,
          });
        }
      }

      // Cap particle count
      if (particles.current.length > 30) {
        particles.current = particles.current.slice(-30);
      }

      particles.current = particles.current.filter((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.008;
        p.vx *= 0.99;
        p.rotation += p.rotationSpeed;
        p.life -= 0.02;

        if (p.life <= 0) return false;

        const alpha = p.life * 0.25;

        if (p.type === 0) {
          drawLeaf(ctx, p.x, p.y, p.size, p.rotation, alpha);
        } else {
          ctx.globalAlpha = alpha;
          ctx.fillStyle = "#00E87B";
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        }

        return true;
      });

      animFrame.current = requestAnimationFrame(animate);
    };

    animFrame.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animFrame.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
    };
  }, [drawLeaf]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
