"use client";

import { useEffect, useRef } from "react";

const steps = [
  {
    title: "Annual Recruitment",
    desc: "Application window opens for students across all departments interested in innovation and tech.",
    icon: "📅",
  },
  {
    title: "Technical Assessment",
    desc: "Rigorous technical tests covering programming, system design, and specialized domain knowledge.",
    icon: "📝",
  },
  {
    title: "Personal Interviews",
    desc: "In-depth discussions with society leads to evaluate mindset, collaboration, and aspirations.",
    icon: "💬",
  },
  {
    title: "Role-Based Selection",
    desc: "Strategic placement into specialized teams based on strengths, results, and project requirements.",
    icon: "🎯",
  },
  {
    title: "Faculty Guidance",
    desc: "Final validation and mentorship assignment guided by our expert departmental faculty.",
    icon: "🎓",
  },
];

export default function InductionProcess() {
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
    <section id="induction" ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-[400px] bg-purple-600/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="reveal text-center mb-24">
          <span className="text-xs tracking-[0.3em] uppercase text-indigo-400 font-medium mb-4 block">
            Join the Society
          </span>
          <h2 className="font-space font-bold text-4xl md:text-6xl text-white mb-6">
            Induction <span className="gradient-text">Process</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Our structured entry pipeline ensures we bring in the most passionate and capable minds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative items-start">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-[60px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />

          {steps.map((step, i) => (
            <div 
              key={i} 
              className="reveal flex flex-col items-center text-center relative z-10"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              {/* Step Number/Icon */}
              <div className="w-16 h-16 rounded-full glass border border-indigo-500/30 flex items-center justify-center text-2xl mb-8 group hover:border-indigo-400/60 transition-all duration-300 shadow-[0_0_20px_rgba(99,102,241,0.1)]">
                {step.icon}
                <div className="absolute -top-2 -right-2 w-7 h-7 bg-indigo-500 rounded-full flex items-center justify-center text-[10px] font-bold text-white border-2 border-[#0a0a0a]">
                  0{i + 1}
                </div>
              </div>

              {/* Content */}
              <h3 className="font-space font-bold text-white text-xl mb-4">
                {step.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed px-4">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="reveal mt-20 text-center">
          <button className="btn-secondary px-10 py-4 rounded-xl border-indigo-500/30 hover:border-indigo-500 text-indigo-300">
            View Current Openings →
          </button>
        </div>
      </div>
    </section>
  );
}
