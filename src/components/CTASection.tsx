"use client";

import { useEffect, useRef } from "react";

export default function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.2 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((r) => observer.observe(r));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0d0d0d]" />
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Glow orbs */}
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-600/15 rounded-full blur-[100px]" />
      <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-80 h-80 bg-purple-600/15 rounded-full blur-[100px]" />

      {/* Geometric decoration */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <svg width="800" height="400" viewBox="0 0 800 400">
          <polygon points="400,20 780,380 20,380" stroke="white" strokeWidth="1" fill="none" />
          <polygon points="400,60 740,360 60,360" stroke="white" strokeWidth="0.5" fill="none" />
          <polygon points="400,100 700,340 100,340" stroke="white" strokeWidth="0.3" fill="none" />
        </svg>
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Tag */}
        <div className="reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-indigo-500/30 mb-8 text-xs text-indigo-300 tracking-widest uppercase">
          <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse" />
          Open Enrollment
        </div>

        <h2 className="reveal font-space font-bold text-5xl md:text-7xl text-white mb-6 leading-tight">
          Join the Future of{" "}
          <span className="gradient-text">Learning</span>
        </h2>
        <p className="reveal text-white/50 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          Be part of a thriving community of innovators, researchers, and tech leaders. Your
          journey to excellence starts here.
        </p>

        <div className="reveal flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:csis@university.ac.in"
            className="btn-primary px-10 py-4 text-base rounded-xl inline-flex items-center justify-center gap-2"
          >
            🚀 Join Now — It's Free
          </a>
          <a
            href="#vlab"
            className="btn-secondary px-10 py-4 text-base rounded-xl inline-flex items-center justify-center gap-2"
          >
            🧪 Explore Labs
          </a>
        </div>

        {/* Social proof */}
        <div className="reveal mt-12 flex items-center justify-center gap-3 text-white/30 text-sm">
          <div className="flex -space-x-2">
            {["🧑‍💻", "👩‍💻", "🧑‍🔬", "👩‍🔬", "🧑‍🎓"].map((e, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500/30 to-purple-500/30 border border-white/10 flex items-center justify-center text-sm"
              >
                {e}
              </div>
            ))}
          </div>
          <span>Join 2000+ students already building the future</span>
        </div>
      </div>
    </section>
  );
}
