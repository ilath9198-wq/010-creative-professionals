'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Filter, Sparkles, Eye, Compass } from 'lucide-react';
import { studioProjects, Project } from '../../data/studioData';
import { useStudio } from '../../components/StudioContext';

export default function WorkPage() {
  const { openProjectModal, openEnquiryModal, openLightbox } = useStudio();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Architecture',
    'Interior Design',
    'Branding & Identity',
    'Digital & UI/UX',
    'Product Design',
  ];

  const filteredProjects =
    selectedCategory === 'All'
      ? studioProjects
      : studioProjects.filter((p) => p.category === selectedCategory);

  return (
    <div className="w-full">
      {/* 1. ATMOSPHERIC PHOTOGRAPHIC HERO */}
      <section className="relative min-h-[75vh] md:min-h-[82vh] flex items-center justify-center overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=85"
            alt="ATELIER N°10 Portfolio & Architecture"
            fill
            className="object-cover object-center scale-105 transition-transform duration-1000"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/95 via-charcoal-950/85 to-charcoal-950/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-transparent to-charcoal-950/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center sm:text-left">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-charcoal-900/90 border border-concrete-400/40 text-ivory-100 text-xs font-mono font-medium tracking-widest uppercase mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-terracotta-400 animate-pulse" />
              <span>RETROSPECTIVE // 2024–2026 ARCHIVE</span>
            </div>

            <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-white leading-[1.06] mb-6 drop-shadow-md">
              Selected Works &amp; <br />
              <span className="italic font-normal lowercase font-editorial text-concrete-200">
                Spatial Monoliths
              </span>
            </h1>

            <p className="font-editorial text-lg sm:text-2xl italic text-concrete-200 leading-relaxed mb-8 max-w-2xl font-normal drop-shadow">
              &ldquo;An editorial archive of commissions spanning alpine pavilions, Milanese lofts, luxury identity compendiums, and generative digital canvases.&rdquo;
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={openEnquiryModal}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-terracotta-500 hover:bg-terracotta-600 text-white font-editorial font-bold text-base tracking-wider uppercase shadow-terracotta transition-all cursor-pointer"
              >
                <span>Commission Studio</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <a
                href="#portfolio-grid"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-charcoal-900/90 hover:bg-charcoal-800 text-white border-2 border-concrete-400/70 font-editorial font-bold text-base tracking-wider uppercase backdrop-blur-md transition-all cursor-pointer"
              >
                <span>Filter by Discipline ({studioProjects.length})</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY FILTER BAR */}
      <section id="portfolio-grid" className="bg-ivory-100 border-b border-concrete-300 py-6 px-4 sm:px-6 lg:px-8 sticky top-20 z-30 backdrop-blur-md bg-ivory-100/95">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-charcoal-600">
            <Filter className="w-3.5 h-3.5 text-terracotta-500" />
            <span>FILTER ARCHIVE:</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 text-xs font-mono tracking-wider uppercase transition-all cursor-pointer ${
                    active
                      ? 'bg-charcoal-950 text-white font-bold border border-charcoal-950 shadow-sm'
                      : 'bg-white text-charcoal-700 border border-concrete-300 hover:border-charcoal-400'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <span className="text-xs font-mono text-concrete-500">
            SHOWING {filteredProjects.length} OF {studioProjects.length} COMMISSIONS
          </span>
        </div>
      </section>

      {/* 3. ASYMMETRIC PORTFOLIO GRID */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-ivory-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {filteredProjects.map((project, idx) => (
              <div
                key={project.id}
                className="group bg-white border border-concrete-300 flex flex-col justify-between overflow-hidden shadow-studio hover:shadow-studio-lg transition-all duration-300 relative"
              >
                {/* Architectural Numeral Watermark */}
                <span className="absolute -top-6 -right-2 font-editorial text-8xl font-bold text-concrete-200 select-none opacity-30 pointer-events-none z-0">
                  0{idx + 1}
                </span>
                {/* Visual Viewport with Interactive Hover */}
                <div
                  onClick={() => openProjectModal(project)}
                  className="relative h-[360px] sm:h-[440px] bg-charcoal-900 overflow-hidden cursor-pointer"
                >
                  <Image
                    src={project.heroImage}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/75 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 bg-charcoal-950/90 text-ivory-50 text-[11px] font-mono tracking-wider uppercase backdrop-blur-sm">
                      {project.category}
                    </span>
                    <span className="px-2.5 py-1 bg-terracotta-500 text-white text-[10px] font-mono tracking-wider uppercase">
                      {project.year}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white flex items-end justify-between">
                    <div>
                      <span className="text-[11px] font-mono text-concrete-300 uppercase tracking-widest">
                        {project.location} • {project.client}
                      </span>
                      <h3 className="font-editorial text-2xl sm:text-3xl font-bold tracking-tight text-white mt-0.5">
                        {project.title}
                      </h3>
                    </div>
                    <span className="w-10 h-10 bg-white/95 group-hover:bg-terracotta-500 text-charcoal-950 group-hover:text-white flex items-center justify-center transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                {/* Card Details & Multi-Channel Links */}
                <div className="p-6 sm:p-7 flex flex-col justify-between gap-4">
                  <p className="text-sm text-charcoal-700 font-sans leading-relaxed">
                    {project.concept}
                  </p>
                  <div className="pt-4 border-t border-concrete-200 flex items-center justify-between text-xs font-mono">
                    <button
                      onClick={() => openProjectModal(project)}
                      className="font-bold text-terracotta-600 hover:text-terracotta-700 uppercase tracking-wider flex items-center gap-1 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Preview Specs</span>
                    </button>

                    <Link
                      href={`/work/${project.slug}`}
                      className="font-bold text-charcoal-900 hover:text-terracotta-600 uppercase tracking-wider flex items-center gap-1.5"
                    >
                      <span>Dedicated Monograph</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
