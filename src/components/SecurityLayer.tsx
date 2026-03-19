"use client";

import { useEffect, useRef, useState } from "react";

const securityFeatures = [
  {
    title: "Vulnerability Assessment",
    desc: "Continuous automated scanning of virtual lab infrastructure for known CVEs and misconfigurations.",
    icon: "📡",
  },
  {
    title: "CTF-Style Pen-Testing",
    desc: "Integrated Capture The Flag environments for students to practice ethical hacking in controlled sandboxes.",
    icon: "🚩",
  },
  {
    title: "Secure Execution",
    desc: "Kernel-level isolation and resource limiting for all student-submitted code and simulations.",
    icon: "🗝️",
  },
  {
    title: "Access Control",
    desc: "Multi-factor authentication and role-based access to specialized laboratory resources.",
    icon: "🔐",
  },
];

export default function SecurityLayer() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [time, setTime] = useState("");

  useEffect(() => {
    setTime(new Date().toLocaleTimeString());
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
    <section id="security" ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="reveal text-center mb-24">
          <span className="text-xs tracking-[0.3em] uppercase text-red-400 font-medium mb-4 block">
            Critical Infrastructure
          </span>
          <h2 className="font-space font-bold text-4xl md:text-6xl text-white mb-6">
            Security & <span className="gradient-text">Testing</span> Layer
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Protecting our innovation ecosystem through rigorous testing and military-grade isolation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Security Terminal Mockup */}
          <div className="reveal glass border border-red-500/20 p-8 rounded-2xl bg-black/60 relative overflow-hidden group">
             <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-3xl group-hover:bg-red-500/20 transition-all" />
             
             <div className="flex items-center gap-2 mb-6 text-red-500/60 font-mono text-[10px] uppercase tracking-widest">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" /> Security_Kernel: v2.4.0
             </div>

             <div className="space-y-4 font-mono text-xs md:text-sm">
                <div className="text-white/40">[{time}] Initializing security sweep...</div>
                <div className="text-green-400/80">✓ Sandbox isolation: ACTIVE</div>
                <div className="text-green-400/80">✓ Firewall rules: SYNCED</div>
                <div className="text-white/40">[{time}] Scanning for vulnerabilities...</div>
                <div className="text-red-400">! Warning: 0 low-risk threats neutralized</div>
                <div className="text-indigo-400">--- SYSTEM INTEGRITY: 100% ---</div>
             </div>

             {/* Shield Icon Overlay */}
             <div className="absolute bottom-6 right-8 text-6xl opacity-10 group-hover:opacity-30 group-hover:scale-110 transition-all duration-500">
                🛡️
             </div>
          </div>

          {/* Features List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
             {securityFeatures.map((feat, i) => (
                <div 
                  key={i} 
                  className="reveal glass glass-hover p-6 rounded-2xl border border-white/5"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                   <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-xl mb-4 text-red-400 border border-red-500/20">
                      {feat.icon}
                   </div>
                   <h3 className="font-space font-bold text-white text-sm mb-2">
                      {feat.title}
                   </h3>
                   <p className="text-white/40 text-[11px] leading-relaxed">
                      {feat.desc}
                   </p>
                </div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
}
