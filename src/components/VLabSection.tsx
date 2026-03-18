"use client";

import { useEffect, useRef } from "react";

const vlabFeatures = [
  {
    icon: "🕐",
    title: "24×7 Remote Access",
    desc: "Access experiments anytime, anywhere from any device. No lab hours, no queues.",
    color: "from-indigo-500 to-blue-600",
  },
  {
    icon: "🧪",
    title: "100+ Experiments",
    desc: "Extensive library spanning CS, networking, data science, and software engineering.",
    color: "from-purple-500 to-pink-600",
  },
  {
    icon: "🤖",
    title: "AI-Assisted Learning",
    desc: "Smart hints, automated evaluation, and personalized feedback powered by AI.",
    color: "from-cyan-500 to-teal-600",
  },
  {
    icon: "⚡",
    title: "Code Execution Engine",
    desc: "Real-time multi-language code runner with instant output and error analysis.",
    color: "from-orange-500 to-amber-600",
  },
];

export default function VLabSection() {
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
    <section id="vlab" ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      {/* Bg glow */}
      <div className="absolute left-0 top-1/2 w-[600px] h-[400px] bg-indigo-600/8 rounded-full blur-[120px] -translate-y-1/2" />
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="reveal text-center mb-20">
          <span className="text-xs tracking-[0.3em] uppercase text-indigo-400 font-medium mb-4 block">
            Virtual Laboratory
          </span>
          <h2 className="font-space font-bold text-4xl md:text-6xl text-white mb-6">
            Prayukti<span className="gradient-text">-VLab</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            A next-generation virtual lab platform designed to make
            practical learning immersive, intelligent, and always accessible.
          </p>
        </div>

        {/* Main card */}
        <div className="reveal mb-10 glass border border-indigo-500/20 p-8 md:p-12 relative overflow-hidden rounded-2xl">
          {/* Inner bg decoration */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-20 w-60 h-60 bg-purple-600/10 rounded-full blur-[80px]" />

          {/* Terminal-style header */}
          <div className="relative z-10 flex items-center gap-3 mb-8">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
            </div>
            <div className="flex-1 bg-white/5 rounded-lg px-4 py-1.5 text-xs text-white/40 font-mono">
              prayukti-vlab.csis.ac.in
            </div>
            <div className="px-3 py-1.5 bg-green-500/20 border border-green-500/30 rounded-lg text-xs text-green-400 font-medium">
              ● Live
            </div>
          </div>

          {/* Code snippet display */}
          <div className="relative z-10 bg-black/40 border border-white/5 rounded-xl p-6 font-mono text-sm mb-8 overflow-x-auto">
            <div className="text-indigo-400">$ prayukti init experiment --lab=<span className="text-purple-400">cs-101</span></div>
            <div className="text-white/30 mt-1">Initializing virtual environment...</div>
            <div className="text-green-400 mt-1">✓ Docker container started (port: 8080)</div>
            <div className="text-white/30 mt-1">✓ Dependencies installed (32 packages)</div>
            <div className="text-green-400 mt-1">✓ AI evaluator connected</div>
            <div className="text-white mt-2">
              <span className="text-indigo-400">{">"}</span> Ready. Open your experiment →{" "}
              <span className="underline text-indigo-300">http://localhost:8080</span>
            </div>
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {vlabFeatures.map((feat, i) => (
            <div
              key={i}
              className="reveal glass glass-hover p-6 flex flex-col gap-4 rounded-2xl"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl bg-gradient-to-br ${feat.color} bg-opacity-10`}
                style={{ boxShadow: "0 0 20px rgba(99,102,241,0.2)" }}
              >
                {feat.icon}
              </div>
              <div>
                <h3 className="font-space font-semibold text-white text-base mb-2">
                  {feat.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
