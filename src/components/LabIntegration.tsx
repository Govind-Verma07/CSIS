"use client";

import { useEffect, useRef } from "react";

const integrations = [
  {
    name: "AI Centre of Excellence",
    focus: "Deep Learning & NLP",
    sync: "Real-time GPU scheduling for VLab neural network training.",
    icon: "🧠",
  },
  {
    name: "Digital Forensics Lab",
    focus: "Cyber Investigation",
    sync: "Secure sandboxing for malware analysis and recovery experiments.",
    icon: "🔍",
  },
  {
    name: "Big Data Lab",
    focus: "Distributed Computing",
    sync: "Direct HDFS cluster integration for massive-scale data processing.",
    icon: "☁️",
  },
  {
    name: "Digital Twin Lab",
    focus: "Sensing & Simulation",
    sync: "IoT sensor streams mapped to virtual lab simulation environments.",
    icon: "🏙️",
  },
];

export default function LabIntegration() {
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
    <section id="integration" ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="reveal text-center mb-24">
          <span className="text-xs tracking-[0.3em] uppercase text-indigo-400 font-medium mb-4 block">
            Synergy & Collaboration
          </span>
          <h2 className="font-space font-bold text-4xl md:text-6xl text-white mb-6">
            Integration with <span className="gradient-text">University Labs</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Optimizing academic resources through shared infrastructure and collaborative technical pipelines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {integrations.map((lab, i) => (
            <div 
              key={i} 
              className="reveal"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className="glass glass-hover p-10 rounded-2xl flex flex-col md:flex-row gap-8 items-center md:items-start border border-white/5 group">
                <div className="w-20 h-20 shrink-0 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-4xl group-hover:scale-110 group-hover:bg-indigo-500/20 transition-all duration-500 shadow-xl border border-indigo-500/20">
                  {lab.icon}
                </div>
                <div className="text-center md:text-left">
                  <div className="text-indigo-400 font-bold text-xs uppercase tracking-widest mb-2">
                    {lab.focus}
                  </div>
                  <h3 className="font-space font-bold text-white text-2xl mb-4">
                    {lab.name}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed mb-6">
                    {lab.sync}
                  </p>
                  
                  {/* Performance stats mock */}
                  <div className="flex gap-4 items-center">
                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                       <div className="h-full bg-indigo-500 w-3/4 rounded-full" />
                    </div>
                    <span className="text-[10px] text-white/30 whitespace-nowrap font-bold">RESOURCE LOAD: 75%</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note about resource optimization */}
        <div className="reveal mt-16 p-8 glass border border-indigo-500/20 rounded-2xl text-center bg-indigo-500/5">
           <p className="text-white/60 font-medium">
             ⚡ <span className="text-indigo-300">Architecture Insight:</span> By virtualizing access to specialized laboratory hardware, we've increased student throughput by <span className="text-white font-bold">450%</span> while reducing physical maintenance costs.
           </p>
        </div>
      </div>
    </section>
  );
}
