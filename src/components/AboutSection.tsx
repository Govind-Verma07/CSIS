"use client";

import { useEffect, useRef } from "react";

const highlights = [
  {
    icon: "💡",
    title: "Innovation",
    desc: "Fostering creative thinking and breakthrough solutions to real-world problems.",
  },
  {
    icon: "🔬",
    title: "Research",
    desc: "Conducting cutting-edge research across AI, cybersecurity, and emerging tech.",
  },
  {
    icon: "🤝",
    title: "Collaboration",
    desc: "Building a vibrant community of like-minded tech enthusiasts and innovators.",
  },
  {
    icon: "🚀",
    title: "Skill Development",
    desc: "Hands-on workshops, hackathons, and virtual labs to accelerate your growth.",
  },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );
    const reveals = sectionRef.current?.querySelectorAll(".reveal");
    reveals?.forEach((r) => observer.observe(r));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="reveal mb-20">
          <span className="text-xs tracking-[0.3em] uppercase text-indigo-400 font-medium mb-4 block">
            About CSIS
          </span>
          <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-20">
            <h2 className="font-space font-bold text-4xl md:text-6xl text-white leading-tight max-w-lg">
              Where{" "}
              <span className="gradient-text">curiosity</span>{" "}
              meets innovation.
            </h2>
            <p className="text-white/50 text-base md:text-lg max-w-md leading-relaxed">
              CSIS is a student-driven technical society focused on{" "}
              <span className="text-white/80">innovation</span>,{" "}
              <span className="text-white/80">research</span>, and practical
              learning. We bridge the gap between academic theory and
              industry-ready skills.
            </p>
          </div>
        </div>

        {/* Highlight cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {highlights.map((item, i) => (
            <div
              key={i}
              className="reveal glass glass-hover p-7 flex flex-col gap-4"
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div className="text-3xl mb-1">{item.icon}</div>
              <div>
                <h3 className="font-space font-semibold text-white text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
              {/* Accent line */}
              <div className="mt-auto w-8 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
            </div>
          ))}
        </div>

        {/* Bottom decorative line */}
        <div className="reveal mt-20 flex items-center gap-6">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <span className="text-xs text-white/30 tracking-widest uppercase">Est. 2020</span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
      </div>
    </section>
  );
}
