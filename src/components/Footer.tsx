"use client";

import Link from "next/link";

const footerLinks = [
  {
    group: "Society",
    links: [
      { label: "About CSIS", href: "#about" },
      { label: "Domains", href: "#domains" },
      { label: "Activities", href: "#activities" },
      { label: "Team", href: "#team" },
    ],
  },
  {
    group: "Platform",
    links: [
      { label: "Prayukti-VLab", href: "#vlab" },
      { label: "Features", href: "#features" },
      { label: "Experiments", href: "#vlab" },
      { label: "Student Dashboard", href: "#" },
    ],
  },
  {
    group: "Connect",
    links: [
      { label: "Contact Us", href: "mailto:csis@university.ac.in" },
      { label: "LinkedIn", href: "https://linkedin.com" },
      { label: "GitHub", href: "https://github.com" },
      { label: "Join CSIS", href: "#contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 pt-20 pb-10 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[#080808]" />
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-9 h-9">
                <svg viewBox="0 0 36 36" fill="none" className="w-9 h-9">
                  <polygon
                    points="18,2 34,10 34,26 18,34 2,26 2,10"
                    stroke="url(#footerLogoGrad)"
                    strokeWidth="1.5"
                    fill="rgba(99,102,241,0.1)"
                  />
                  <polygon
                    points="18,8 28,13 28,23 18,28 8,23 8,13"
                    stroke="rgba(99,102,241,0.5)"
                    strokeWidth="1"
                    fill="none"
                  />
                  <circle cx="18" cy="18" r="3" fill="url(#footerLogoGrad)" />
                  <defs>
                    <linearGradient id="footerLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#6366f1" />
                      <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div>
                <span className="font-bold text-white text-lg font-space">CSIS</span>
                <span className="block text-[10px] text-white/40 tracking-widest uppercase font-space">
                  Innovation Society
                </span>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-6">
              Computer Science &amp; Innovation Society — building the next generation of
              tech leaders through innovation, research, and practical learning.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg glass border border-white/10 flex items-center justify-center text-white/50 hover:text-indigo-400 hover:border-indigo-500/40 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg glass border border-white/10 flex items-center justify-center text-white/50 hover:text-indigo-400 hover:border-indigo-500/40 transition-all duration-200"
                aria-label="GitHub"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </a>
              <a
                href="mailto:csis@university.ac.in"
                className="w-9 h-9 rounded-lg glass border border-white/10 flex items-center justify-center text-white/50 hover:text-indigo-400 hover:border-indigo-500/40 transition-all duration-200"
                aria-label="Email"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.group}>
              <h4 className="text-xs tracking-widest uppercase text-white/30 font-semibold mb-5">
                {group.group}
              </h4>
              <ul className="flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} Computer Science &amp; Innovation Society. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-xs text-white/25">
            <span>Powered by</span>
            <span className="text-indigo-400">Prayukti-VLab</span>
            <span className="mx-1">·</span>
            <span>Built with ❤️</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
