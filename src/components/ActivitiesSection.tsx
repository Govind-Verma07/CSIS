"use client";

import { useEffect, useRef } from "react";

const activities = [
  {
    icon: "🛠️",
    title: "Workshops",
    desc: "Hands-on technical sessions on trending tools and frameworks with industry experts.",
    tag: "Monthly",
    color: "#6366f1",
  },
  {
    icon: "🏆",
    title: "Hackathons",
    desc: "24-48 hour intensive coding competitions to build and ship real solutions fast.",
    tag: "Quarterly",
    color: "#a855f7",
  },
  {
    icon: "🎯",
    title: "CTF Competitions",
    desc: "Capture The Flag cybersecurity challenges for all skill levels.",
    tag: "Bi-monthly",
    color: "#06b6d4",
  },
  {
    icon: "🎙️",
    title: "Guest Lectures",
    desc: "Talks from industry veterans, researchers, and startup founders shaping tech.",
    tag: "Weekly",
    color: "#10b981",
  },
  {
    icon: "💼",
    title: "Internship Programs",
    desc: "Curated connections to research labs, startups, and top tech companies.",
    tag: "Ongoing",
    color: "#f59e0b",
  },
];

export default function ActivitiesSection() {
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
    <section id="activities" ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[#0d0d0d]" />
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="reveal text-center mb-20">
          <span className="text-xs tracking-[0.3em] uppercase text-indigo-400 font-medium mb-4 block">
            What We Do
          </span>
          <h2 className="font-space font-bold text-4xl md:text-6xl text-white mb-6">
            Activities &amp; <span className="gradient-text">Events</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            A full calendar of learning, competing, and networking opportunities designed to grow
            your technical career.
          </p>
        </div>

        {/* Timeline-style layout */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-600/30 via-purple-600/30 to-transparent" />

          <div className="flex flex-col gap-8">
            {activities.map((act, i) => (
              <div
                key={i}
                className={`reveal flex flex-col md:flex-row items-start md:items-center gap-6 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {/* Card */}
                <div className="flex-1 glass glass-hover p-6 rounded-2xl group">
                  <div className="flex items-start gap-4">
                    <div
                      className="text-3xl p-3 rounded-xl flex-shrink-0"
                      style={{ background: `${act.color}15`, border: `1px solid ${act.color}30` }}
                    >
                      {act.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-space font-semibold text-white text-lg">
                          {act.title}
                        </h3>
                        <span
                          className="text-xs px-2.5 py-1 rounded-full font-medium"
                          style={{ background: `${act.color}20`, color: act.color }}
                        >
                          {act.tag}
                        </span>
                      </div>
                      <p className="text-white/50 text-sm leading-relaxed">{act.desc}</p>
                    </div>
                  </div>
                </div>

                {/* Center dot */}
                <div
                  className="hidden md:flex w-5 h-5 rounded-full border-2 flex-shrink-0 z-10"
                  style={{ borderColor: act.color, background: `${act.color}30`, boxShadow: `0 0 10px ${act.color}50` }}
                />

                {/* Spacer for alternate side */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
