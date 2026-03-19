"use client";

import { useEffect, useRef } from "react";

const analyticsFeatures = [
  {
    title: "Performance Tracking",
    desc: "Real-time dashboards for students to visualize their learning curve and technical growth.",
    icon: "📈",
  },
  {
    title: "Experiment Progress",
    desc: "Detailed logs of completed experiments, time spent, and successful code executions.",
    icon: "🧪",
  },
  {
    title: "Faculty Insights",
    desc: "Aggregated analytics for faculty to identify class-wide trends and individual student needs.",
    icon: "👥",
  },
  {
    title: "Skill Mapping",
    desc: "Algorithmic mapping of completed virtual labs to industry-standard technical competencies.",
    icon: "🗺️",
  },
];

export default function AnalyticsSection() {
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
    <section id="analytics" ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="reveal text-center mb-20">
          <span className="text-xs tracking-[0.3em] uppercase text-indigo-400 font-medium mb-4 block">
            Data-Driven Learning
          </span>
          <h2 className="font-space font-bold text-4xl md:text-6xl text-white mb-6">
            Student Progress & <span className="gradient-text">Analytics</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Empowering students and faculty with deep insights into the learning lifecycle through advanced data visualization.
          </p>
        </div>

        {/* Mock Dashboard UI */}
        <div className="reveal mb-16 glass border border-indigo-500/20 p-8 md:p-12 rounded-3xl relative overflow-hidden bg-indigo-500/[0.02]">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                 <div className="inline-flex items-center gap-2 px-3 py-1 glass border border-white/5 rounded-full text-[10px] text-white/50 tracking-widest uppercase font-bold">
                    <span className="w-2 h-2 bg-green-500 rounded-full" /> Live Dashboard Preview
                 </div>
                 <h3 className="font-space font-bold text-3xl text-white">
                    Measure. Improve. <span className="text-indigo-400">Excel.</span>
                 </h3>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {analyticsFeatures.map((feat, i) => (
                       <div key={i} className="flex gap-4">
                          <div className="text-2xl">{feat.icon}</div>
                          <div>
                             <h4 className="text-white font-bold text-sm mb-1">{feat.title}</h4>
                             <p className="text-white/30 text-xs leading-relaxed">{feat.desc}</p>
                          </div>
                       </div>
                    ))}
                 </div>
              </div>

              {/* Mock Charts */}
              <div className="relative glass border border-white/10 p-6 rounded-2xl bg-black/40 rotate-1 group-hover:rotate-0 transition-transform duration-500">
                 <div className="flex justify-between items-center mb-6">
                    <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Global Activity (24h)</span>
                    <div className="flex gap-2">
                       <div className="w-2 h-2 rounded-full bg-indigo-500" />
                       <div className="w-2 h-2 rounded-full bg-purple-500" />
                    </div>
                 </div>
                 <div className="h-48 flex items-end gap-2 px-2">
                    {[35, 65, 45, 85, 55, 75, 95, 65, 45, 70, 80, 60].map((h, i) => (
                       <div 
                         key={i} 
                         className="flex-1 bg-gradient-to-t from-indigo-500/40 to-indigo-500/80 rounded-t-sm hover:translate-y-[-5px] transition-transform duration-300" 
                         style={{ height: `${h}%` }}
                       />
                    ))}
                 </div>
                 <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/5 flex justify-between items-center">
                    <div className="text-xs text-white/40 font-medium">Session Success Rate</div>
                    <div className="text-indigo-400 font-bold">98.4%</div>
                 </div>
              </div>
           </div>
        </div>

        {/* Feature Highlights */}
        <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-6">
           <div className="glass p-6 rounded-2xl border border-white/5 text-center">
              <div className="text-3xl font-bold text-white mb-2">15k+</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-indigo-400 font-bold">Monthly Lab Sessions</div>
           </div>
           <div className="glass p-6 rounded-2xl border border-white/5 text-center">
              <div className="text-3xl font-bold text-white mb-2">850ms</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-indigo-400 font-bold">Avg. Code Eval Speed</div>
           </div>
           <div className="glass p-6 rounded-2xl border border-white/5 text-center">
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-indigo-400 font-bold">Platform Availability</div>
           </div>
        </div>
      </div>
    </section>
  );
}
