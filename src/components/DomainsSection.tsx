"use client";

import { useEffect, useRef } from "react";

const domains = [
  {
    icon: "🧠",
    title: "Artificial Intelligence",
    desc: "ML, Deep Learning, NLP, and Computer Vision projects.",
    color: "#6366f1",
  },
  {
    icon: "🔐",
    title: "Cyber Security",
    desc: "Ethical hacking, CTF, penetration testing, and digital forensics.",
    color: "#a855f7",
  },
  {
    icon: "☁️",
    title: "Cloud Computing",
    desc: "AWS, GCP, Azure deployments, DevOps, and containerization.",
    color: "#06b6d4",
  },
  {
    icon: "📡",
    title: "IoT",
    desc: "Smart devices, embedded systems, sensors, and real-time data.",
    color: "#10b981",
  },
  {
    icon: "📊",
    title: "Data Science",
    desc: "Analytics, visualization, big data pipelines, and statistics.",
    color: "#f59e0b",
  },
  {
    icon: "🌐",
    title: "Web Development",
    desc: "Full-stack apps using React, Next.js, Node.js, and modern APIs.",
    color: "#ef4444",
  },
];

export default function DomainsSection() {
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
    <section id="domains" ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[#0d0d0d]" />
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="reveal text-center mb-20">
          <span className="text-xs tracking-[0.3em] uppercase text-indigo-400 font-medium mb-4 block">
            Focus Areas
          </span>
          <h2 className="font-space font-bold text-4xl md:text-6xl text-white mb-6">
            Our <span className="gradient-text">Domains</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Explore cutting-edge fields and find your specialization within our
            multi-disciplinary tech community.
          </p>
        </div>

        {/* Domain Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {domains.map((domain, i) => (
            <div
              key={i}
              className="reveal group relative overflow-hidden glass glass-hover p-8 rounded-2xl cursor-pointer"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              {/* Hover glow bg */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{
                  background: `radial-gradient(ellipse at 30% 30%, ${domain.color}15, transparent 70%)`,
                }}
              />

              {/* Icon */}
              <div
                className="relative z-10 text-4xl mb-5 inline-block p-3 rounded-xl"
                style={{ background: `${domain.color}15`, border: `1px solid ${domain.color}30` }}
              >
                {domain.icon}
              </div>

              <h3 className="relative z-10 font-space font-bold text-white text-xl mb-3">
                {domain.title}
              </h3>
              <p className="relative z-10 text-white/50 text-sm leading-relaxed">{domain.desc}</p>

              {/* Arrow on hover */}
              <div className="relative z-10 mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-1 text-sm font-medium"
                style={{ color: domain.color }}>
                Explore domain
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl"
                style={{ background: `linear-gradient(90deg, ${domain.color}, transparent)` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
