import { useEffect, useRef } from "react";

interface Crow {
  x: number;
  y: number;
  size: number;
  speed: number;
  angle: number;
  wingPhase: number;
  opacity: number;
}

const CrowParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const crows: Crow[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 8; i++) {
      crows.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height * 0.6,
        size: 4 + Math.random() * 6,
        speed: 0.3 + Math.random() * 0.7,
        angle: Math.random() * Math.PI * 2,
        wingPhase: Math.random() * Math.PI * 2,
        opacity: 0.15 + Math.random() * 0.25,
      });
    }

    const drawCrow = (c: Crow) => {
      ctx.save();
      ctx.translate(c.x, c.y);
      ctx.globalAlpha = c.opacity;
      ctx.fillStyle = "#1a0000";
      ctx.strokeStyle = "#1a0000";
      ctx.lineWidth = 1.5;

      const wing = Math.sin(c.wingPhase) * c.size * 0.8;

      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.quadraticCurveTo(-c.size, wing - c.size * 0.5, -c.size * 2, wing);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.quadraticCurveTo(c.size, wing - c.size * 0.5, c.size * 2, wing);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(0, 0, c.size * 0.3, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      crows.forEach((c) => {
        c.x += Math.cos(c.angle) * c.speed;
        c.y += Math.sin(c.angle) * c.speed * 0.5 - 0.2;
        c.wingPhase += 0.05;
        c.angle += (Math.random() - 0.5) * 0.02;

        if (c.x < -50) c.x = canvas.width + 50;
        if (c.x > canvas.width + 50) c.x = -50;
        if (c.y < -50) c.y = canvas.height * 0.6;

        drawCrow(c);
      });
      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
};

export default CrowParticles;
