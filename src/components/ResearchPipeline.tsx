"use client";

import { useEffect, useRef } from "react";

const pipelineSteps = [
  { title: "Idea Generation", icon: "💡", color: "from-yellow-400 to-orange-500" },
  { title: "Deep Research", icon: "📚", color: "from-blue-400 to-indigo-500" },
  { title: "Rapid Prototyping", icon: "🛠️", color: "from-purple-400 to-pink-500" },
  { title: "Technical Deployment", icon: "🚀", color: "from-emerald-400 to-teal-500" },
  { title: "Open Source Release", icon: "🌐", color: "from-indigo-400 to-purple-500" },
];

export default function ResearchPipeline() {
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
    <section id="pipeline" ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-600/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="reveal text-center mb-20">
          <span className="text-xs tracking-[0.3em] uppercase text-indigo-400 font-medium mb-4 block">
            The Lifecycle
          </span>
          <h2 className="font-space font-bold text-4xl md:text-6xl text-white mb-6">
            Research & <span className="gradient-text">Deployment</span> Pipeline
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            A systematic engineering flow from the first spark of an idea to its global release.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[60px] left-[5%] right-[5%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 items-start">
            {pipelineSteps.map((step, i) => (
              <div 
                key={i} 
                className="reveal flex flex-col items-center text-center group"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {/* Step Icon with Glowing Ring */}
                <div className="relative mb-8">
                  <div className={`w-28 h-28 rounded-full glass border border-white/5 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-500 shadow-2xl relative z-10 overflow-hidden`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    {step.icon}
                  </div>
                  {/* Outer Pulsing Ring */}
                  <div className={`absolute inset-0 rounded-full bg-indigo-500/0 border border-indigo-500/0 group-hover:scale-125 group-hover:border-indigo-500/20 group-hover:bg-indigo-500/5 transition-all duration-700`} />
                </div>

                {/* Arrow (Mobile/Tablet) */}
                {i < pipelineSteps.length - 1 && (
                  <div className="lg:hidden my-4 text-white/10 text-2xl">↓</div>
                )}

                {/* Content */}
                <h3 className="font-space font-bold text-white text-xl mb-3 group-hover:gradient-text transition-all duration-300">
                  {step.title}
                </h3>
                
                <div className="flex items-center gap-1.5 justify-center opacity-40 group-hover:opacity-100 transition-opacity">
                   <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
                   <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
                   <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pipeline Tech Stack */}
        <div className="reveal mt-20 flex flex-wrap justify-center gap-4 opacity-40 hover:opacity-100 transition-opacity duration-500">
          {["Vite", "Next.js", "Docker", "GitLab CI", "FastAPI", "TensorFlow"].map((tech) => (
            <span key={tech} className="px-4 py-1.5 glass rounded-full text-[10px] font-mono tracking-widest text-white/50 uppercase">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
