'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { X, ArrowUpRight, Sparkles, Compass, Mail, Phone } from 'lucide-react';
import { useStudio } from './StudioContext';
import { navigationItems } from '../data/studioData';

export default function CreativeCanvasNavigation() {
  const {
    isCreativeCanvasOpen,
    closeCreativeCanvas,
    activeCanvasImage,
    setActiveCanvasImage,
    openEnquiryModal,
  } = useStudio();
  const pathname = usePathname();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  if (!isCreativeCanvasOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop with soft dimming */}
      <div
        onClick={closeCreativeCanvas}
        className="absolute inset-0 bg-charcoal-950/70 backdrop-blur-md transition-opacity duration-500 animate-fadeIn cursor-pointer"
        aria-hidden="true"
      />

      {/* Expansive Diagonal Slide-in Canvas */}
      <div
        className="relative w-full lg:w-[94vw] xl:w-[88vw] h-full bg-ivory-100 text-charcoal-950 border-r border-b border-concrete-300 shadow-2xl flex flex-col justify-between overflow-y-auto transform origin-top-left transition-transform duration-500 ease-out"
        role="dialog"
        aria-modal="true"
        aria-label="Creative Canvas Navigation"
      >
        {/* 1. TOP CONTROL BAR */}
        <div className="px-6 sm:px-10 lg:px-14 py-6 border-b border-concrete-200/80 flex items-center justify-between bg-ivory-100/90 sticky top-0 z-20 backdrop-blur-sm">
          {/* Brand & Rotating Emblem */}
          <div className="flex items-center gap-4 sm:gap-6">
            <Link
              href="/"
              onClick={closeCreativeCanvas}
              className="group flex flex-col"
            >
              <span className="font-editorial text-2xl sm:text-3xl font-bold tracking-tight text-charcoal-950">
                ATELIER N°10
              </span>
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-charcoal-600">
                Creative Studio // Directory
              </span>
            </Link>

            {/* Rotating Studio Emblem */}
            <div className="hidden sm:flex items-center gap-2 pl-4 border-l border-concrete-300">
              <div className="relative w-9 h-9 flex items-center justify-center">
                <svg
                  className="w-full h-full animate-spin-slow text-charcoal-600"
                  viewBox="0 0 100 100"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="44"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeDasharray="4 6"
                  />
                </svg>
                <span className="absolute font-mono text-[9px] font-bold text-terracotta-500">
                  N°10
                </span>
              </div>
              <span className="text-[10px] font-mono tracking-widest text-charcoal-600 uppercase">
                Zürich • Milano • Tokyo
              </span>
            </div>
          </div>

          {/* Minimal Square Outline Close Control */}
          <button
            onClick={closeCreativeCanvas}
            className="w-11 h-11 sm:w-12 sm:h-12 border border-charcoal-900/40 hover:border-charcoal-950 hover:bg-charcoal-950 hover:text-white flex items-center justify-center transition-all duration-200 cursor-pointer group"
            aria-label="Close Creative Canvas Navigation"
          >
            <X className="w-5 h-5 text-charcoal-900 group-hover:text-white transition-colors" />
          </button>
        </div>

        {/* 2. MAIN CANVAS CONTENT AREA */}
        <div className="flex-1 px-6 sm:px-10 lg:px-14 py-8 lg:py-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Navigation Matrix: 2 Columns of 5 items */}
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 bg-terracotta-500 rounded-full animate-pulse" />
              <span className="text-xs font-mono tracking-[0.25em] uppercase text-charcoal-500">
                CANVAS DIRECTORY // 10 DEDICATED SECTIONS
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4 sm:gap-y-6">
              {navigationItems.map((item, idx) => {
                const isActive = pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={closeCreativeCanvas}
                    onMouseEnter={() => {
                      setActiveCanvasImage(item.image);
                      setHoveredIndex(idx);
                    }}
                    className={`group relative p-3 sm:p-4 border-b border-concrete-300/80 transition-all duration-300 block hover:bg-white/60 hover:translate-x-1 ${
                      isActive ? 'bg-white shadow-sm border-l-4 border-l-terracotta-500 pl-4' : ''
                    }`}
                  >
                    <div className="flex items-baseline justify-between">
                      <div className="flex items-baseline gap-3 sm:gap-4">
                        <span className="font-mono text-xs sm:text-sm font-bold text-terracotta-500 tracking-wider">
                          {item.num}
                        </span>
                        <div>
                          <h3 className="font-editorial text-xl sm:text-2xl lg:text-2xl font-bold tracking-tight text-charcoal-950 group-hover:text-terracotta-600 transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-xs text-charcoal-500 font-sans tracking-wide mt-0.5">
                            {item.subtitle}
                          </p>
                        </div>
                      </div>

                      <ArrowUpRight className="w-4 h-4 text-charcoal-400 group-hover:text-terracotta-500 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right Floating Image & Section Preview Canvas */}
          <div className="hidden lg:flex lg:col-span-4 flex-col gap-4 sticky top-28">
            <div className="relative w-full h-[320px] xl:h-[380px] bg-charcoal-900 border border-concrete-300 overflow-hidden shadow-studio group">
              <Image
                src={activeCanvasImage}
                alt="ATELIER N°10 Section Spotlight"
                fill
                sizes="(max-width: 1200px) 35vw, 400px"
                className="object-cover object-center transition-all duration-700 transform group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-mono tracking-widest uppercase bg-charcoal-900/80 px-2 py-0.5 border border-concrete-400/30 text-concrete-200">
                  FEATURED CANVAS PERSPECTIVE
                </span>
                <p className="font-editorial text-lg italic text-white/95 mt-1">
                  &ldquo;Every discipline informs the next.&rdquo;
                </p>
              </div>
            </div>

            {/* Quick Inquiry Callout */}
            <div className="p-5 bg-white border border-concrete-300 shadow-sm flex flex-col justify-between">
              <span className="text-xs font-mono font-bold tracking-wider uppercase text-charcoal-600">
                NEW COMMISSIONS 2026/2027
              </span>
              <p className="text-xs text-charcoal-600 mt-1 mb-4 leading-relaxed">
                Accepting architectural, interior, and visual identity projects across Europe, North America, and Asia.
              </p>
              <button
                onClick={() => {
                  closeCreativeCanvas();
                  openEnquiryModal();
                }}
                className="w-full py-2.5 px-4 bg-charcoal-950 hover:bg-charcoal-800 text-ivory-50 font-editorial text-sm font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>Have a Project in Mind?</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-terracotta-400" />
              </button>
            </div>
          </div>
        </div>

        {/* 3. BOTTOM UTILITY & STUDIO CONTACT STRIP */}
        <div className="px-6 sm:px-10 lg:px-14 py-4 sm:py-5 border-t border-concrete-300 bg-ivory-200/90 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4 sm:gap-8 text-xs font-mono text-charcoal-600">
            <span>ZÜRICH: +41 44 280 10 90</span>
            <span className="hidden sm:inline text-concrete-400">•</span>
            <span>MILANO: +39 02 8739 10 20</span>
            <span className="hidden sm:inline text-concrete-400">•</span>
            <span>TOKYO: +81 3 6427 10 80</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                closeCreativeCanvas();
                openEnquiryModal();
              }}
              className="text-xs font-mono font-bold uppercase tracking-wider text-terracotta-600 hover:text-terracotta-700 flex items-center gap-1 cursor-pointer"
            >
              <span>Instant Project Briefing</span>
              <ArrowUpRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
