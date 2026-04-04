import { useEffect, useRef, useCallback } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  drift: number;
  driftSpeed: number;
  driftOffset: number;
  shape: "circle" | "ring" | "cross" | "diamond";
  pulseSpeed: number;
  pulseOffset: number;
}

interface ScrollParticlesProps {
  containerRef: React.RefObject<HTMLDivElement>;
}

const ScrollParticles = ({ containerRef }: ScrollParticlesProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animFrameRef = useRef<number>(0);
  const timeRef = useRef(0);

  const generateParticles = useCallback(() => {
    if (!containerRef.current) return;
    
    const count = window.innerWidth < 768 ? 28 : 52;
    const rect = containerRef.current.getBoundingClientRect();
    const containerHeight = containerRef.current.scrollHeight;

    particlesRef.current = Array.from({ length: count }, (_, i) => {
      const shape: Particle["shape"] =
        i % 4 === 0 ? "ring" :
        i % 4 === 1 ? "cross" :
        i % 4 === 2 ? "diamond" : "circle";

      return {
        id: i,
        x: Math.random() * rect.width,
        y: Math.random() * containerHeight,
        size: 
          shape === "ring" ? 6 + Math.random() * 14 :
          shape === "cross" ? 3 + Math.random() * 5 :
          shape === "diamond" ? 4 + Math.random() * 8 :
          2 + Math.random() * 5,
        opacity: 0.04 + Math.random() * 0.13,
        drift: (Math.random() - 0.3) * 180,
        driftSpeed: 0.0003 + Math.random() * 0.0005,
        driftOffset: Math.random() * Math.PI * 2,
        shape,
        pulseSpeed: 0.0008 + Math.random() * 0.001,
        pulseOffset: Math.random() * Math.PI * 2,
      };
    });
  }, [containerRef]);

  const drawShape = (
    ctx: CanvasRenderingContext2D,
    p: Particle,
    x: number,
    y: number,
    alpha: number,
    time: number
  ) => {
    const pulse = 0.85 + 0.15 * Math.sin(time * p.pulseSpeed + p.pulseOffset);
    const s = p.size * pulse;

    ctx.globalAlpha = alpha;

    if (p.shape === "circle") {
      ctx.beginPath();
      ctx.arc(x, y, s, 0, Math.PI * 2);
      ctx.fillStyle = "#00C2A8";
      ctx.fill();
    } else if (p.shape === "ring") {
      ctx.beginPath();
      ctx.arc(x, y, s, 0, Math.PI * 2);
      ctx.strokeStyle = "#00C2A8";
      ctx.lineWidth = 1.2;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(x, y, s * 0.45, 0, Math.PI * 2);
      ctx.fillStyle = "#00C2A8";
      ctx.globalAlpha = alpha * 0.4;
      ctx.fill();
    } else if (p.shape === "cross") {
      const half = s * 1.6;
      const thick = Math.max(1, s * 0.28);

      ctx.strokeStyle = "#5EE4CF";
      ctx.lineWidth = thick;
      ctx.lineCap = "round";

      ctx.beginPath();
      ctx.moveTo(x - half, y);
      ctx.lineTo(x + half, y);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(x, y - half);
      ctx.lineTo(x, y + half);
      ctx.stroke();
    } else if (p.shape === "diamond") {
      ctx.beginPath();
      ctx.moveTo(x, y - s * 1.3);
      ctx.lineTo(x + s * 0.8, y);
      ctx.lineTo(x, y + s * 1.3);
      ctx.lineTo(x - s * 0.8, y);
      ctx.closePath();
      ctx.strokeStyle = "#2dd4bf";
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    ctx.globalAlpha = 1;
  };

  const render = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = container.getBoundingClientRect();
    const W = canvas.width;
    const H = canvas.height;

    ctx.clearRect(0, 0, W, H);

    timeRef.current += 1;
    const time = timeRef.current;

    const scrollY = window.scrollY;
    const containerTop = container.offsetTop;
    const containerHeight = container.scrollHeight;
    const relativeScroll = scrollY - containerTop;
    const scrollFraction = containerHeight > 0 ? Math.max(0, Math.min(1, relativeScroll / containerHeight)) : 0;

    particlesRef.current.forEach((p) => {
      const scrollShiftX = scrollFraction * p.drift;
      const floatY = Math.sin(time * p.driftSpeed + p.driftOffset) * 22;
      const y = p.y + floatY - relativeScroll;

      if (y < -120 || y > H + 120) return;

      const x = (p.x + scrollShiftX + W * 2) % W;

      const fadeMargin = 150;
      let alpha = p.opacity;
      if (y < fadeMargin) alpha *= y / fadeMargin;
      if (y > H - fadeMargin) alpha *= (H - y) / fadeMargin;

      if (alpha <= 0) return;

      drawShape(ctx, p, x, y, alpha, time);
    });

    animFrameRef.current = requestAnimationFrame(render);
  }, [containerRef]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      generateParticles();
    };

    const onScroll = () => {
      // Trigger re-render on scroll
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });

    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, [generateParticles, render, containerRef]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 1,
      }}
      aria-hidden="true"
    />
  );
};

export default ScrollParticles;
