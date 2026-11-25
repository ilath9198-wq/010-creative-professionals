'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Compass, Sparkles } from 'lucide-react';
import { useStudio } from './StudioContext';

export default function Header() {
  const { toggleCreativeCanvas, isCreativeCanvasOpen, openEnquiryModal } = useStudio();
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full bg-ivory-100/90 backdrop-blur-md border-b border-concrete-300/80 transition-all">
      {/* Studio Location & Edition Strip (Desktop) */}
      <div className="hidden lg:flex items-center justify-between px-8 py-1.5 bg-charcoal-950 text-[11px] font-mono tracking-wider text-concrete-300">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-terracotta-400" />
            <span className="text-ivory-50">ATELIER N°10 • ARCHITECTURE // SPATIAL CURATION // IDENTITY</span>
          </span>
          <span className="text-charcoal-600">|</span>
          <span>EDITION 2026 • VOL. X</span>
        </div>
        <div className="flex items-center gap-6">
          <span className="text-concrete-300">ZÜRICH • MILANO • TOKYO</span>
          <span className="text-charcoal-600">|</span>
          <span className="text-terracotta-400">47.3769° N, 8.5417° E</span>
        </div>
      </div>

      {/* Main Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Left: Brand Identity Wordmark */}
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="flex flex-col group focus:outline-none"
            aria-label="ATELIER N°10 Homepage"
          >
            <span className="font-editorial text-2xl sm:text-3xl font-bold tracking-tight text-charcoal-950 group-hover:text-terracotta-600 transition-colors">
              ATELIER N°10
            </span>
            <span className="text-[10px] font-mono tracking-[0.25em] text-charcoal-600 uppercase">
              Creative Studio
            </span>
          </Link>

          {/* Quick Editorial Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-6 ml-6 pl-6 border-l border-concrete-300 text-xs font-mono tracking-widest uppercase">
            <Link
              href="/work"
              className={`hover:text-terracotta-600 transition-colors ${
                pathname === '/work' ? 'text-terracotta-600 font-bold border-b border-terracotta-500' : 'text-charcoal-700'
              }`}
            >
              Works
            </Link>
            <Link
              href="/services"
              className={`hover:text-terracotta-600 transition-colors ${
                pathname === '/services' ? 'text-terracotta-600 font-bold border-b border-terracotta-500' : 'text-charcoal-700'
              }`}
            >
              Services
            </Link>
            <Link
              href="/architecture"
              className={`hover:text-terracotta-600 transition-colors ${
                pathname === '/architecture' ? 'text-terracotta-600 font-bold border-b border-terracotta-500' : 'text-charcoal-700'
              }`}
            >
              Architecture
            </Link>
            <Link
              href="/journal"
              className={`hover:text-terracotta-600 transition-colors ${
                pathname === '/journal' ? 'text-terracotta-600 font-bold border-b border-terracotta-500' : 'text-charcoal-700'
              }`}
            >
              Journal
            </Link>
          </nav>
        </div>

        {/* Right: CTAs and Unique Creative Canvas Hamburger Button */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* High-Contrast "Start a Project" Action */}
          <button
            onClick={openEnquiryModal}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-terracotta-500 hover:bg-terracotta-600 text-white font-editorial text-sm font-bold tracking-wider uppercase shadow-sm transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Unique Creative Canvas Asymmetric Hamburger Button */}
          <button
            onClick={toggleCreativeCanvas}
            className="w-12 h-12 border border-charcoal-900/40 hover:border-charcoal-950 bg-ivory-50 hover:bg-white flex flex-col justify-center items-start px-3 gap-1.5 transition-all shadow-sm cursor-pointer group"
            aria-label="Open Creative Canvas Navigation"
            aria-expanded={isCreativeCanvasOpen}
          >
            {/* Stroke 1 (Medium: 18px) */}
            <span className="w-[18px] h-[2px] bg-charcoal-900 group-hover:bg-terracotta-600 transition-all" />
            {/* Stroke 2 (Longest: 24px) */}
            <span className="w-[24px] h-[2px] bg-charcoal-900 group-hover:bg-charcoal-950 transition-all" />
            {/* Stroke 3 (Shortest & Accent: 12px) */}
            <span className="w-[12px] h-[2px] bg-terracotta-500 group-hover:w-[20px] transition-all" />
          </button>
        </div>
      </div>
    </header>
  );
}
