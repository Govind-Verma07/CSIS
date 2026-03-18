"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 2000, suffix: "+", label: "Students", icon: "👨‍💻" },
  { value: 100, suffix: "+", label: "Experiments", icon: "🧪" },
  { value: 20, suffix: "+", label: "Labs", icon: "🏛️" },
  { value: 24, suffix: "×7", label: "Access", icon: "⏱️" },
];

function useCounter(target: number, duration: number, visible: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, visible]);
  return count;
}

function StatCard({ stat, visible }: { stat: (typeof stats)[0]; visible: boolean }) {
  const count = useCounter(stat.value, 2000, visible);
  return (
    <div className="glass glass-hover p-8 rounded-2xl flex flex-col items-center text-center gap-4">
      <div className="text-4xl">{stat.icon}</div>
      <div>
        <div className="font-space font-bold text-5xl md:text-6xl gradient-text mb-1">
          {count}
          {stat.suffix}
        </div>
        <div className="text-white/50 text-sm tracking-widest uppercase font-medium">{stat.label}</div>
      </div>
    </div>
  );
}

export default function StatsSection() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/10 to-transparent" />
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs tracking-[0.3em] uppercase text-indigo-400 font-medium mb-4 block">
            Our Impact
          </span>
          <h2 className="font-space font-bold text-4xl md:text-5xl text-white">
            Growing Every <span className="gradient-text">Semester</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}
