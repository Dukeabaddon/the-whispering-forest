import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  alpha: number;
  alphaSpeed: number;
  wobble: number;
  wobbleSpeed: number;
  color: string;
}

export default function ParticleCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;
    let width = container.clientWidth;
    let height = container.clientHeight;

    const colors = [
      'rgba(200, 155, 91, ',  // Ember Gold
      'rgba(156, 75, 75, ',  // Muted Crimson
      'rgba(140, 200, 145, ', // Light Moss Green
      'rgba(255, 220, 160, ', // Lantern Warm Light
    ];

    const createParticle = (yPos?: number): Particle => {
      const size = Math.random() * 2.2 + 0.6;
      const color = colors[Math.floor(Math.random() * colors.length)];
      return {
        x: Math.random() * width,
        y: yPos !== undefined ? yPos : Math.random() * height,
        size,
        speedX: (Math.random() - 0.5) * 0.35,
        speedY: -(Math.random() * 0.45 + 0.15),
        alpha: Math.random() * 0.5 + 0.1,
        alphaSpeed: (Math.random() - 0.5) * 0.005,
        wobble: Math.random() * Math.PI * 2,
        wobbleSpeed: Math.random() * 0.02 + 0.005,
        color,
      };
    };

    const resizeCanvas = () => {
      width = container.clientWidth;
      height = container.clientHeight;
      canvas.width = width;
      canvas.height = height;

      // Re-populate particles to density
      const density = Math.floor((width * height) / 12000);
      particles = [];
      for (let i = 0; i < Math.min(density, 120); i++) {
        particles.push(createParticle());
      }
    };

    // Use ResizeObserver for accurate sizing
    const resizeObserver = new ResizeObserver(() => {
      resizeCanvas();
    });
    resizeObserver.observe(container);

    // Initial setup
    resizeCanvas();

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p, idx) => {
        // Move particle
        p.y += p.speedY;
        p.wobble += p.wobbleSpeed;
        p.x += p.speedX + Math.sin(p.wobble) * 0.15;

        // Mouse interaction: Gentle repulsion
        if (mouseX !== -1000 && mouseY !== -1000) {
          const dx = p.x - mouseX;
          const dy = p.y - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            const force = (100 - dist) / 100;
            p.x += (dx / dist) * force * 1.5;
            p.y += (dy / dist) * force * 1.5;
          }
        }

        // Fade effect
        p.alpha += p.alphaSpeed;
        if (p.alpha <= 0.05 || p.alpha >= 0.8) {
          p.alphaSpeed = -p.alphaSpeed;
        }

        // Reset if out of bounds
        if (p.y < -10 || p.x < -10 || p.x > width + 10) {
          particles[idx] = createParticle(height + 10);
        }

        // Draw particle
        ctx.beginPath();
        const glowRad = p.size * 3.5;
        const radGrd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowRad);
        radGrd.addColorStop(0, `${p.color}${p.alpha})`);
        radGrd.addColorStop(0.3, `${p.color}${p.alpha * 0.4})`);
        radGrd.addColorStop(1, `${p.color}0)`);

        ctx.fillStyle = radGrd;
        ctx.arc(p.x, p.y, glowRad, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      if (canvas) {
        canvas.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <div id="particle-canvas-container" ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-10">
      <canvas id="particle-canvas" ref={canvasRef} className="absolute inset-0 w-full h-full block" />
    </div>
  );
}
