"use client";

import { useEffect, useRef } from "react";

const capabilities = [
  {
    title: "Remote Experiment Execution",
    desc: "Deploy and run code on high-performance university server nodes from any web browser.",
    icon: "🌐",
    color: "from-blue-500 to-indigo-600",
  },
  {
    title: "Simulation-Based Labs",
    desc: "Interactive 3D and 2D simulations for complex physics, circuit design, and networking scenarios.",
    icon: "🎮",
    color: "from-purple-500 to-pink-600",
  },
  {
    title: "Dataset Access",
    desc: "One-click access to massive curated datasets for Big Data and AI experiments.",
    icon: "📊",
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "Report Submission System",
    desc: "Integrated markdown-based lab manuals and automatic PDF report generation.",
    icon: "📄",
    color: "from-orange-500 to-amber-600",
  },
  {
    title: "Automated Evaluation",
    desc: "Instant grading of code and results using custom test suites and AI-powered feedback.",
    icon: "🤖",
    color: "from-cyan-500 to-blue-600",
  },
];

export default function VLabCapabilities() {
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
    <section id="capabilities" ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      <div className="absolute left-0 top-0 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="reveal text-center mb-24">
          <span className="text-xs tracking-[0.3em] uppercase text-indigo-400 font-medium mb-4 block">
            Capabilities
          </span>
          <h2 className="font-space font-bold text-4xl md:text-6xl text-white mb-6">
            Virtual Lab <span className="gradient-text">Powerhouse</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Our platform provides a comprehensive suite of tools designed to replace physical laboratory limitations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, i) => (
            <div 
              key={i} 
              className="reveal h-full"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="glass glass-hover p-8 rounded-2xl h-full flex flex-col gap-6 border border-white/5 group">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cap.color} bg-opacity-10 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                  {cap.icon}
                </div>
                <div>
                  <h3 className="font-space font-bold text-white text-xl mb-3">
                    {cap.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed">
                    {cap.desc}
                  </p>
                </div>

                {/* Status indicator */}
                <div className="mt-auto pt-6 flex items-center gap-2">
                   <div className="px-3 py-1 bg-white/5 rounded-full text-[10px] uppercase font-bold text-white/40 tracking-widest group-hover:text-indigo-400 group-hover:bg-indigo-500/10 transition-colors">
                      Enterprise Standard
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
