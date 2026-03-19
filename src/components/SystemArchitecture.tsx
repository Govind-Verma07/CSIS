"use client";

import { useEffect, useRef } from "react";

const architecture = [
  {
    title: "Containerization",
    desc: "Docker-based isolated lab environments ensuring clean execution for every student.",
    icon: "🐳",
  },
  {
    title: "CI/CD Pipelines",
    desc: "Automated testing and deployment workflows for rapid experimentation and stability.",
    icon: "⚙️",
  },
  {
    title: "Server Architecture",
    desc: "Robust backend infrastructure designed for high availability and low latency.",
    icon: "🖥️",
  },
  {
    title: "Scalability",
    desc: "Load balancing and elastic resources to handle peak usage during university lab hours.",
    icon: "📈",
  },
  {
    title: "Secure Sandbox",
    desc: "Restricted execution environments protecting the host system from untrusted code.",
    icon: "🛡️",
  },
];

export default function SystemArchitecture() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((r) => observer.observe(r));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="architecture" ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute right-0 top-0 w-[600px] h-[400px] bg-indigo-600/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="reveal text-center mb-24">
          <span className="text-xs tracking-[0.3em] uppercase text-indigo-400 font-medium mb-4 block">
            Technical Infrastructure
          </span>
          <h2 className="font-space font-bold text-4xl md:text-6xl text-white mb-6">
            System <span className="gradient-text">Architecture</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            A high-performance orchestration layer powering the future of virtual learning.
          </p>
        </div>

        {/* Diagram-style Layout */}
        <div className="relative group">
          {/* Central Hub Decorative Element */}
          <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-indigo-500/20 glass flex items-center justify-center animate-spin-slow">
            <div className="w-16 h-16 bg-indigo-500/20 rounded-full blur-xl" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {architecture.map((item, i) => (
              <div 
                key={i} 
                className={`reveal glass glass-hover p-8 rounded-2xl flex flex-col gap-5 border border-white/5 relative group ${
                  i === 4 ? "lg:col-start-2" : ""
                }`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {/* Connector Lines (Abstracted via after/before) */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="font-space font-bold text-white text-xl">
                    {item.title}
                  </h3>
                </div>
                <p className="text-white/40 text-sm leading-relaxed">
                  {item.desc}
                </p>

                {/* Technical badge */}
                <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] uppercase tracking-widest font-bold text-indigo-400 opacity-60">
                   <span>Enabled</span>
                   <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
