import React, { useRef, useEffect } from 'react';

const PARTICLE_COUNT = 90;
const LINE_DISTANCE = 180;
const NODE_RADIUS = 2.8;
const NODE_GLOW_RADIUS = 22;
const FOG_OPACITY = 0.18;
const PARALLAX_FACTOR = 0.08;

// Color palette for a premium blue/cyan mesh
const LINE_COLOR = 'rgba(0, 200, 255, 0.55)';
const NODE_GLOW_COLOR = 'rgba(0, 200, 255, 0.22)';
const NODE_COLOR = 'rgba(0, 255, 255, 1)';
const FOG_COLOR = 'rgba(0, 200, 255, 0.12)';
const BG_GRAD_TOP = '#070a13';
const BG_GRAD_BOTTOM = '#0a0d16';

type Particle = {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  phase: number;
  speed: number;
  pulse: number;
};

function randomBetween(a: number, b: number) {
  return a + Math.random() * (b - a);
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

const ParticleNetworkBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const particles = useRef<Particle[]>([]);
  const parallax = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  // Responsive resize
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = window.innerWidth * window.devicePixelRatio;
        canvas.height = window.innerHeight * window.devicePixelRatio;
        canvas.style.width = window.innerWidth + 'px';
        canvas.style.height = window.innerHeight + 'px';
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Parallax on scroll
  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      parallax.current.y = scrollY * PARALLAX_FACTOR;
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Initialize particles
    if (particles.current.length === 0) {
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.current.push({
          x: randomBetween(0, window.innerWidth),
          y: randomBetween(window.innerHeight * 0.25, window.innerHeight * 0.75),
          baseX: 0,
          baseY: 0,
          vx: randomBetween(-0.08, 0.08),
          vy: randomBetween(-0.03, 0.03),
          phase: Math.random() * Math.PI * 2,
          speed: randomBetween(0.7, 1.1),
          pulse: Math.random() * Math.PI * 2,
        });
      }
    }

    function animate() {
      if (!ctx) return;
      const dpr = window.devicePixelRatio || 1;
      const width = window.innerWidth * dpr;
      const height = window.innerHeight * dpr;
      ctx.clearRect(0, 0, width, height);

      // Draw deep dark background
      ctx.save();
      ctx.globalAlpha = 1;
      const grad = ctx.createLinearGradient(0, 0, 0, height);
      grad.addColorStop(0, BG_GRAD_TOP);
      grad.addColorStop(1, BG_GRAD_BOTTOM);
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);
      ctx.restore();

      // Animate particles (horizontal wave)
      const now = Date.now();
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const p = particles.current[i];
        // Horizontal undulating wave
        const waveY = Math.sin((p.x / width) * Math.PI * 2 + now * 0.00025 + p.phase) * 60;
        p.baseX = p.x + Math.sin(now * 0.0002 * p.speed + p.phase) * 18;
        p.baseY = p.y + waveY;
        // Move
        p.x += p.vx * p.speed;
        p.y += p.vy * p.speed;
        // Bounce off edges
        if (p.x < 0 || p.x > window.innerWidth) p.vx *= -1;
        if (p.y < window.innerHeight * 0.18 || p.y > window.innerHeight * 0.82) p.vy *= -1;
      }

      // Draw lines
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        for (let j = i + 1; j < PARTICLE_COUNT; j++) {
          const a = particles.current[i];
          const b = particles.current[j];
          const dx = a.baseX - b.baseX;
          const dy = a.baseY - b.baseY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINE_DISTANCE) {
            ctx.save();
            ctx.globalAlpha = lerp(0.22, 0.06, dist / LINE_DISTANCE);
            ctx.strokeStyle = LINE_COLOR;
            ctx.beginPath();
            ctx.moveTo(a.baseX * dpr, (a.baseY + parallax.current.y) * dpr);
            ctx.lineTo(b.baseX * dpr, (b.baseY + parallax.current.y) * dpr);
            ctx.stroke();
            ctx.restore();
          }
        }
      }

      // Draw nodes
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const p = particles.current[i];
        // Glow
        ctx.save();
        ctx.globalAlpha = 0.22;
        ctx.beginPath();
        ctx.arc(p.baseX * dpr, (p.baseY + parallax.current.y) * dpr, NODE_GLOW_RADIUS, 0, Math.PI * 2);
        ctx.fillStyle = NODE_GLOW_COLOR;
        ctx.shadowColor = NODE_COLOR;
        ctx.shadowBlur = 24;
        ctx.fill();
        ctx.restore();
        // Node
        ctx.save();
        ctx.globalAlpha = 0.95;
        ctx.beginPath();
        ctx.arc(p.baseX * dpr, (p.baseY + parallax.current.y) * dpr, NODE_RADIUS + Math.sin(Date.now() * 0.002 + p.pulse) * 0.7, 0, Math.PI * 2);
        ctx.fillStyle = NODE_COLOR;
        ctx.shadowColor = NODE_COLOR;
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.restore();
      }

      // Stronger fog overlay at bottom and edges
      ctx.save();
      ctx.globalAlpha = FOG_OPACITY;
      const fogGrad = ctx.createRadialGradient(width/2, height*0.95, width/2.5, width/2, height, width/0.7);
      fogGrad.addColorStop(0, FOG_COLOR);
      fogGrad.addColorStop(1, BG_GRAD_BOTTOM);
      ctx.fillStyle = fogGrad;
      ctx.fillRect(0, height * 0.7, width, height * 0.3);
      ctx.restore();

      animationRef.current = requestAnimationFrame(animate);
    }
    animate();
    return () => {
      if (animationRef.current !== null) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full z-0 pointer-events-none select-none"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        background: 'transparent',
      }}
      aria-hidden="true"
    />
  );
};

export default ParticleNetworkBackground; 