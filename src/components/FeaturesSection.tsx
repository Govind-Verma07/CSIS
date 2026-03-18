"use client";

import { useEffect, useRef } from "react";

const features = [
  {
    number: "01",
    icon: "🧪",
    title: "Virtual Experiments",
    desc: "Run realistic simulations of physics, networking, and algorithm experiments in safe, isolated environments without physical equipment.",
  },
  {
    number: "02",
    icon: "⚡",
    title: "Real-time Code Execution",
    desc: "Write, test, and debug code in 15+ languages with instant results, syntax highlighting, and integrated debugging tools.",
  },
  {
    number: "03",
    icon: "🎯",
    title: "Automated Evaluation",
    desc: "Get instant, objective grading with detailed feedback, performance metrics, and AI-powered improvement suggestions.",
  },
  {
    number: "04",
    icon: "📊",
    title: "Student Dashboard",
    desc: "Track your progress, view completed experiments, manage submissions, and visualize learning analytics in one place.",
  },
  {
    number: "05",
    icon: "🔓",
    title: "Research & Open Source",
    desc: "Contribute to real open-source projects, publish research findings, and collaborate with students across institutions.",
  },
];

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.08 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((r) => observer.observe(r));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="reveal mb-20">
          <span className="text-xs tracking-[0.3em] uppercase text-indigo-400 font-medium mb-4 block">
            Platform Features
          </span>
          <h2 className="font-space font-bold text-4xl md:text-6xl text-white max-w-lg">
            Everything you need to{" "}
            <span className="gradient-text">excel</span>.
          </h2>
        </div>

        {/* Feature list */}
        <div className="flex flex-col gap-4">
          {features.map((feat, i) => (
            <div
              key={i}
              className="reveal feature-card group glass glass-hover rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Number */}
              <span className="font-space text-6xl font-bold text-white/5 group-hover:text-indigo-500/20 transition-colors duration-300 min-w-[80px]">
                {feat.number}
              </span>
              {/* Icon */}
              <div className="feature-icon text-3xl min-w-[48px] text-center transition-all duration-300">
                {feat.icon}
              </div>
              {/* Content */}
              <div className="flex-1">
                <h3 className="font-space font-semibold text-white text-xl mb-2">
                  {feat.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed max-w-2xl">
                  {feat.desc}
                </p>
              </div>
              {/* Arrow */}
              <svg
                className="hidden md:block w-6 h-6 text-white/10 group-hover:text-indigo-400 transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
