'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Check, Mail, MapPin, Phone, Sparkles } from 'lucide-react';
import { studioLocations, navigationItems } from '../data/studioData';
import { useStudio } from './StudioContext';

export default function Footer() {
  const { openEnquiryModal } = useStudio();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 4000);
  };

  return (
    <footer className="bg-charcoal-950 text-ivory-100 border-t border-charcoal-800">
      {/* 1. TOP CALL TO ACTION BANNER */}
      <div className="border-b border-charcoal-800/80 px-6 sm:px-10 lg:px-16 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-mono tracking-[0.25em] text-terracotta-400 uppercase">
              // COMMISSIONS & COLLABORATIONS
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mt-3 leading-tight">
              Have a visionary project in mind? Let&rsquo;s shape it.
            </h2>
            <p className="text-concrete-400 font-sans text-base sm:text-lg mt-4 leading-relaxed">
              We partner with forward-thinking patrons, institutions, and founders worldwide to create spaces, identities, and digital experiences that endure.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={openEnquiryModal}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-terracotta-500 hover:bg-terracotta-600 text-white font-editorial text-base font-bold tracking-wider uppercase transition-all shadow-terracotta transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <Link
              href="/work"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-concrete-500/50 hover:border-ivory-100 text-ivory-100 font-editorial text-base font-bold tracking-wider uppercase transition-colors"
            >
              <span>Explore Portfolio</span>
            </Link>
          </div>
        </div>
      </div>

      {/* 2. MAIN FOOTER DIRECTORY & LOCATIONS */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
        {/* Brand Column */}
        <div className="lg:col-span-4 flex flex-col justify-between">
          <div>
            <span className="font-editorial text-3xl font-bold tracking-tight text-white">
              ATELIER N°10
            </span>
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-terracotta-400 mt-1">
              Creative Studio // Est. 2012
            </p>
            <p className="text-sm text-concrete-400 mt-4 leading-relaxed max-w-sm">
              An independent multidisciplinary practice dedicated to architecture, tactile interiors, editorial brand identities, and digital craft.
            </p>
          </div>

          {/* Newsletter Dispatch */}
          <div className="mt-8 pt-8 border-t border-charcoal-800">
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-concrete-300">
              STUDIO DISPATCH // OCCASIONAL ESSAYS
            </span>
            <form onSubmit={handleSubscribe} className="mt-3 flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="colleague@domain.com"
                required
                className="flex-1 bg-charcoal-900 border border-charcoal-700 px-3.5 py-2 text-xs font-mono text-white placeholder-charcoal-500 focus:outline-none focus:border-terracotta-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-charcoal-800 hover:bg-terracotta-500 text-white font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                {subscribed ? <Check className="w-3.5 h-3.5 text-terracotta-300" /> : 'Join'}
              </button>
            </form>
            {subscribed && (
              <p className="text-[11px] font-mono text-terracotta-400 mt-1.5 animate-fadeIn">
                Thank you. You have been added to our private dispatch.
              </p>
            )}
          </div>
        </div>

        {/* Studio Locations */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-concrete-400 uppercase">
              STUDIO ATELIERS
            </span>
            <div className="mt-4 space-y-6">
              {studioLocations.map((loc) => (
                <div key={loc.city} className="space-y-1">
                  <h4 className="text-base font-editorial font-bold text-white tracking-wide">
                    {loc.city} <span className="text-xs font-mono text-terracotta-400 font-normal">[{loc.role}]</span>
                  </h4>
                  <p className="text-xs text-concrete-400 leading-relaxed font-sans">
                    {loc.address}
                  </p>
                  <p className="text-xs font-mono text-concrete-300">
                    {loc.phone}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-concrete-400 uppercase">
              DISCIPLINES
            </span>
            <ul className="mt-4 space-y-2 text-xs font-mono text-concrete-300">
              <li>• Spatial & Architectural Design</li>
              <li>• Luxury Residential Interiors</li>
              <li>• Brand Identity & Systems</li>
              <li>• Editorial & Packaging Design</li>
              <li>• Bespoke UI/UX Experiences</li>
              <li>• Product & Furniture Prototyping</li>
              <li>• Architectural Photography</li>
            </ul>
          </div>
        </div>

        {/* Directory Links */}
        <div className="lg:col-span-3">
          <span className="text-xs font-mono font-bold tracking-widest text-concrete-400 uppercase">
            STUDIO DIRECTORY
          </span>
          <div className="mt-4 grid grid-cols-1 gap-2 text-sm font-sans">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="text-concrete-300 hover:text-terracotta-400 transition-colors flex items-center justify-between group py-1"
              >
                <span>{item.title}</span>
                <span className="text-[10px] font-mono text-charcoal-500 group-hover:text-terracotta-400">
                  {item.num}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* 3. COPYRIGHT & DEMONSTRATION DISCLAIMER */}
      <div className="border-t border-charcoal-900 bg-charcoal-950 px-6 sm:px-10 lg:px-16 py-6 text-center sm:text-left">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-charcoal-500">
          <div>
            © 2026 ATELIER N°10 CREATIVE STUDIO. ALL RIGHTS RESERVED.
          </div>
          <div className="text-[11px] text-concrete-500 italic">
            Demonstration website for creative professionals, architecture practices, and design agencies. All portfolio entities are conceptual.
          </div>
        </div>
      </div>
    </footer>
  );
}
