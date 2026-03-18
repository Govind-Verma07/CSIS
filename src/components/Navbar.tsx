"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#vlab", label: "V-Lab" },
  { href: "#domains", label: "Domains" },
  { href: "#activities", label: "Activities" },
  { href: "#team", label: "Team" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9">
            {/* Geometric logo */}
            <svg viewBox="0 0 36 36" fill="none" className="w-9 h-9">
              <polygon
                points="18,2 34,10 34,26 18,34 2,26 2,10"
                stroke="url(#logoGrad)"
                strokeWidth="1.5"
                fill="rgba(99,102,241,0.1)"
              />
              <polygon
                points="18,8 28,13 28,23 18,28 8,23 8,13"
                stroke="rgba(99,102,241,0.5)"
                strokeWidth="1"
                fill="none"
              />
              <circle cx="18" cy="18" r="3" fill="url(#logoGrad)" />
              <defs>
                <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6366f1" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 rounded-full bg-indigo-500/20 blur-sm group-hover:bg-indigo-500/40 transition-all duration-300" />
          </div>
          <div>
            <span className="font-bold text-white text-base tracking-tight font-space">CSIS</span>
            <span className="block text-[10px] text-white/40 tracking-widest uppercase font-space">Innovation Society</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/60 hover:text-white transition-colors duration-200 tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#vlab"
            className="text-sm text-white/60 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-white/5"
          >
            Explore Labs
          </a>
          <a
            href="#contact"
            className="btn-primary text-sm px-5 py-2.5 rounded-lg"
          >
            Join CSIS
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-xl border-t border-white/5 px-6 pb-6 pt-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/70 hover:text-white text-base py-2 transition-colors border-b border-white/5"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary text-center mt-2">
            Join CSIS
          </a>
        </div>
      )}
    </nav>
  );
}
