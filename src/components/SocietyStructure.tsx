"use client";

import { useEffect, useRef, useState } from "react";

const structure = {
  fourthYear: {
    title: "4th Year · Core Leadership",
    members: [
      { role: "President", icon: "👑" },
      { role: "Vice President", icon: "⚡" },
      { role: "Technical Head (Infrastructure)", icon: "🏗️" },
      { role: "Technical Head (Development)", icon: "💻" },
      { role: "Virtual Lab Head", icon: "🧪" },
      { role: "Open Source & Research Head", icon: "🔬" },
      { role: "Head of Operations", icon: "⚙️" },
    ],
  },
  thirdYear: {
    title: "3rd Year · Operational Leads",
    members: [
      { role: "Virtual Lab Architect Lead", icon: "🏛️" },
      { role: "Deployment Lead (CI/CD, Docker)", icon: "🚀" },
      { role: "Programming Lead", icon: "⌨️" },
      { role: "Security & Testing Lead", icon: "🛡️" },
      { role: "Open Source Lead", icon: "🌐" },
      { role: "Research Deployment Lead", icon: "📊" },
      { role: "Engagement & PR Lead", icon: "📢" },
      { role: "UI/UX Lead", icon: "🎨" },
      { role: "Event Coordinator", icon: "📅" },
      { role: "Secretary", icon: "📝" },
      { role: "Planning & Innovation Lead", icon: "💡" },
    ],
  },
  secondYear: {
    title: "2nd Year · Executive Members",
    members: [
      { role: "Executive Member", icon: "🌱" },
      { role: "Executive Member", icon: "🌱" },
      { role: "Executive Member", icon: "🌱" },
      { role: "Executive Member", icon: "🌱" },
      { role: "Executive Member", icon: "🌱" },
    ],
  },
};

export default function SocietyStructure() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [expandedYear, setExpandedYear] = useState<string | null>("fourthYear");

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
    <section id="structure" ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="reveal text-center mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-indigo-400 font-medium mb-4 block">
            Organization
          </span>
          <h2 className="font-space font-bold text-4xl md:text-6xl text-white mb-6">
            Society <span className="gradient-text">Structure</span> & Leadership
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            A multi-tier technical hierarchy driving innovation across all university levels.
          </p>
        </div>

        <div className="space-y-6">
          {(Object.entries(structure) as [keyof typeof structure, any][]).map(([key, year], idx) => (
            <div 
              key={key} 
              className="reveal"
              style={{ transitionDelay: `${idx * 0.15}s` }}
            >
              <div 
                className={`glass border transition-all duration-500 overflow-hidden ${
                  expandedYear === key ? "border-indigo-500/40 bg-indigo-500/5" : "border-white/5 hover:border-white/10"
                }`}
              >
                <button
                  onClick={() => setExpandedYear(expandedYear === key ? null : key)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-2 h-2 rounded-full ${expandedYear === key ? "bg-indigo-400 animate-pulse" : "bg-white/20"}`} />
                    <h3 className="font-space font-bold text-xl md:text-2xl text-white">
                      {year.title}
                    </h3>
                  </div>
                  <span className={`text-2xl transition-transform duration-300 ${expandedYear === key ? "rotate-180" : ""}`}>
                    ⌄
                  </span>
                </button>

                <div 
                  className={`transition-all duration-500 ease-in-out ${
                    expandedYear === key ? "max-h-[1000px] opacity-100 pb-8 px-8" : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                    {year.members.map((member: any, i: number) => (
                      <div 
                        key={i}
                        className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-indigo-500/30 transition-all group flex items-center gap-4"
                      >
                        <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                          {member.icon}
                        </div>
                        <div className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                          {member.role}
                        </div>
                      </div>
                    ))}
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
