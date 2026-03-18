"use client";

import { useEffect, useRef } from "react";

const team = [
  { role: "President", name: "Student Lead", icon: "👑", level: 1 },
  { role: "Vice President", name: "Operations Lead", icon: "⚡", level: 2 },
  { role: "Tech Head", name: "Engineering", icon: "💻", level: 3 },
  { role: "Virtual Lab Head", name: "Prayukti-VLab", icon: "🧪", level: 3 },
  { role: "Research Head", name: "R&D Division", icon: "🔬", level: 3 },
  { role: "Training Head", name: "Learning Programs", icon: "📚", level: 3 },
  { role: "Industry Head", name: "Corporate Outreach", icon: "🤝", level: 3 },
];

export default function TeamSection() {
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

  const executive = team.filter((t) => t.level <= 2);
  const heads = team.filter((t) => t.level === 3);

  return (
    <section id="team" ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-25" />
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[400px] bg-purple-600/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="reveal text-center mb-20">
          <span className="text-xs tracking-[0.3em] uppercase text-indigo-400 font-medium mb-4 block">
            Our Team
          </span>
          <h2 className="font-space font-bold text-4xl md:text-6xl text-white mb-6">
            The People Behind{" "}
            <span className="gradient-text">CSIS</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            A dedicated team of passionate students working to advance innovation,
            learning, and collaboration.
          </p>
        </div>

        {/* Executive row */}
        <div className="reveal flex flex-col sm:flex-row justify-center gap-5 mb-8">
          {executive.map((member, i) => (
            <TeamCard key={i} member={member} featured />
          ))}
        </div>

        {/* Heads grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {heads.map((member, i) => (
            <div key={i} className="reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
              <TeamCard member={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamCard({
  member,
  featured = false,
}: {
  member: (typeof team)[0];
  featured?: boolean;
}) {
  return (
    <div
      className={`glass glass-hover rounded-2xl p-6 flex flex-col items-center text-center gap-4 group ${
        featured ? "min-w-[200px]" : ""
      }`}
    >
      {/* Avatar */}
      <div className="relative">
        <div
          className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 flex items-center justify-center text-2xl group-hover:border-indigo-400/60 transition-all duration-300"
          style={{ boxShadow: "0 0 0 0 rgba(99,102,241,0)" }}
        >
          {member.icon}
        </div>
        <div className="absolute inset-0 rounded-full bg-indigo-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Role */}
      <div>
        <div className="text-xs text-indigo-400 font-medium tracking-widest uppercase mb-1">
          {member.role}
        </div>
        <div className="text-white/60 text-sm">{member.name}</div>
      </div>

      {/* Status dot */}
      <div className="w-6 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
    </div>
  );
}
