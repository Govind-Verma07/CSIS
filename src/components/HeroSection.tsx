"use client";

import { useEffect, useRef } from "react";

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Particle mesh
    const particles: { x: number; y: number; vx: number; vy: number }[] = [];
    const count = 60;
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 160) {
            const alpha = (1 - dist / 160) * 0.25;
            ctx.strokeStyle = `rgba(99,102,241,${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
        // Draw particle dots
        ctx.beginPath();
        ctx.arc(particles[i].x, particles[i].y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(99,102,241,0.5)";
        ctx.fill();
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Canvas particle mesh */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.12)_0%,transparent_70%)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[120px]" />

      {/* Geometric decorations */}
      <div className="absolute top-20 right-10 opacity-10">
        <svg width="300" height="300" viewBox="0 0 300 300">
          <polygon points="150,10 290,225 10,225" stroke="white" strokeWidth="0.5" fill="none" />
          <polygon points="150,40 260,210 40,210" stroke="rgba(99,102,241,0.8)" strokeWidth="0.5" fill="none" />
          <polygon points="150,70 230,195 70,195" stroke="rgba(168,85,247,0.6)" strokeWidth="0.5" fill="none" />
        </svg>
      </div>
      <div className="absolute bottom-20 left-10 opacity-10">
        <svg width="200" height="200" viewBox="0 0 200 200">
          <rect x="10" y="10" width="180" height="180" stroke="white" strokeWidth="0.5" fill="none" transform="rotate(15 100 100)" />
          <rect x="30" y="30" width="140" height="140" stroke="rgba(99,102,241,0.8)" strokeWidth="0.5" fill="none" transform="rotate(30 100 100)" />
          <rect x="50" y="50" width="100" height="100" stroke="rgba(168,85,247,0.6)" strokeWidth="0.5" fill="none" transform="rotate(45 100 100)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-indigo-500/30 mb-8 text-xs text-indigo-300 tracking-widest uppercase font-medium">
          <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse" />
          Student Technical Society · Est. 2020
        </div>

        {/* Main Title */}
        <h1 className="font-space font-bold text-5xl md:text-7xl lg:text-8xl leading-[1.05] mb-6 tracking-tight">
          <span className="gradient-text">Computer Science</span>
          <br />
          <span className="text-white">&amp; Innovation</span>
          <br />
          <span className="text-white">Society</span>
        </h1>

        {/* Subtitle */}
        <p className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Building Innovation.{" "}
          <span className="text-indigo-300">Enabling Virtual Learning.</span>
          <br />
          Where technology meets curiosity and ideas transform into impact.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#vlab" className="btn-primary px-8 py-4 text-base rounded-xl w-full sm:w-auto">
            ⚡ Explore Prayukti-VLab
          </a>
          <a href="#contact" className="btn-secondary px-8 py-4 text-base rounded-xl w-full sm:w-auto">
            Join CSIS →
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="flex flex-col items-center gap-2 mt-20 opacity-40">
          <span className="text-xs tracking-widest uppercase text-white/50">Scroll to explore</span>
          <div className="w-px h-16 bg-gradient-to-b from-indigo-400 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
}
