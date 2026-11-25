'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Sparkles, Compass, Eye, Layers, ShieldCheck, Heart } from 'lucide-react';
import { studioProjects, studioJournal, studioServices, studioStats } from '../data/studioData';
import { useStudio } from '../components/StudioContext';

export default function HomePage() {
  const { openProjectModal, openEnquiryModal, openLightbox } = useStudio();
  const featuredProjects = studioProjects.slice(0, 4);
  const featuredArticles = studioJournal.slice(0, 3);

  return (
    <div className="w-full">
      {/* =========================================================================
          1. HERO SECTION (MANDATORY: Atmospheric Photographic Editorial Background)
          Monolithic Contemporary Architecture with Deep Charcoal Gradient Scrims
          ========================================================================= */}
      <section className="relative min-h-[85vh] sm:min-h-[88vh] lg:min-h-[86vh] flex items-center justify-center overflow-hidden py-16 sm:py-20 lg:py-24">
        {/* Full-bleed Architectural Photographic Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
            alt="ATELIER N°10 Architectural Masterpiece"
            fill
            className="object-cover object-center scale-105 transition-transform duration-1000"
            priority
            sizes="100vw"
          />
          {/* Deep charcoal gradient scrim for maximum contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/95 via-charcoal-950/80 to-charcoal-950/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-transparent to-charcoal-950/60" />
        </div>

        {/* Hero Content Layer */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center sm:text-left">
          <div className="max-w-3xl">
            {/* Delicate Studio Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-charcoal-900/90 border border-concrete-400/40 text-ivory-100 text-xs font-mono font-medium tracking-widest uppercase mb-6 backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-terracotta-400 animate-pulse shrink-0" />
              <span>ATELIER N°10 // MULTIDISCIPLINARY PRACTICE</span>
            </div>

            {/* Mandatory Main Headline */}
            <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-white leading-[1.06] mb-5 sm:mb-6 drop-shadow-md">
              We Create <br />
              <span className="italic font-normal lowercase font-editorial text-concrete-200">
                Spaces, Identities
              </span>{' '}
              <br />&amp; Experiences.
            </h1>

            {/* Mandatory Supporting Statement */}
            <p className="font-editorial text-lg sm:text-2xl italic text-concrete-200 leading-relaxed mb-7 sm:mb-8 max-w-2xl font-normal drop-shadow">
              &ldquo;An independent collaborative studio bringing together architecture, interior design, brand identity systems, and digital platforms into unified harmony.&rdquo;
            </p>

            {/* Mandatory High-Contrast Unmissable CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8 sm:mb-10">
              <Link
                href="/work"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 sm:py-4 bg-terracotta-500 hover:bg-terracotta-600 text-white font-editorial font-bold text-base sm:text-lg tracking-wider uppercase shadow-terracotta transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Explore Our Work</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                onClick={openEnquiryModal}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 sm:py-4 bg-charcoal-900/90 hover:bg-charcoal-800 text-white border-2 border-concrete-400/70 hover:border-ivory-100 font-editorial font-bold text-base sm:text-lg tracking-wider uppercase backdrop-blur-md transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4 text-terracotta-400" />
              </button>
            </div>

            {/* Studio Metrics Micro-Row */}
            <div className="pt-5 border-t border-concrete-400/30 flex flex-wrap items-center justify-center sm:justify-start gap-x-4 sm:gap-x-6 gap-y-2 text-xs font-mono text-concrete-300">
              <span>ZÜRICH • MILAN • TOKYO</span>
              <span className="hidden sm:inline text-charcoal-500">|</span>
              <span>14+ YEARS OF PRACTICE</span>
              <span className="hidden sm:inline text-charcoal-500">|</span>
              <span className="text-terracotta-400 font-bold">38 DESIGN HONORS</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. STUDIO ETHOS & PHILOSOPHY STRIP
          ========================================================================= */}
      <section className="bg-ivory-100 border-b border-concrete-300 py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-4">
            <span className="text-xs font-mono tracking-[0.25em] text-terracotta-600 uppercase">
              // STUDIO PHILOSOPHY
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold tracking-tight text-charcoal-950 mt-2">
              Ideas Into Form. Creativity Into Experience.
            </h2>
          </div>
          <div className="lg:col-span-8">
            <p className="font-editorial text-xl sm:text-2xl text-charcoal-800 italic leading-relaxed">
              &ldquo;We reject the compartmentalisation of design disciplines. A building is not separate from the identity of the foundation that commissions it, nor is an interior decoupled from the acoustic and digital gestures that animate it. We practice design as a holistic spatial continuum.&rdquo;
            </p>
            <div className="mt-6 flex items-center gap-4 text-xs font-mono text-charcoal-600">
              <span className="font-bold text-charcoal-950">ATELIER N°10 MANIFESTO</span>
              <span>•</span>
              <span>ESTABLISHED 2012</span>
              <span>•</span>
              <Link href="/about" className="text-terracotta-600 hover:underline font-bold">
                Read Full Practice Story &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. FEATURED PORTFOLIO PROJECTS
          ========================================================================= */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-ivory-50">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 pb-6 border-b border-concrete-300">
            <div>
              <span className="text-xs font-mono tracking-[0.25em] text-terracotta-600 uppercase">
                // SELECTED COMMISSIONS
              </span>
              <h2 className="font-editorial text-4xl sm:text-5xl font-bold tracking-tight text-charcoal-950 mt-1">
                Curated Works (2024–2026)
              </h2>
            </div>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-charcoal-900 hover:text-terracotta-600 transition-colors"
            >
              <span>View Full 8-Project Portfolio Index</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Project Showcase Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-white border border-concrete-300 flex flex-col justify-between overflow-hidden shadow-studio hover:shadow-studio-lg transition-all duration-300"
              >
                {/* Visual Viewport with Zoom */}
                <div
                  onClick={() => openProjectModal(project)}
                  className="relative h-[340px] sm:h-[420px] bg-charcoal-900 overflow-hidden cursor-pointer"
                >
                  <Image
                    src={project.heroImage}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Badge & Year Tag */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 bg-charcoal-950/90 text-ivory-50 text-[11px] font-mono tracking-wider uppercase backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white flex items-end justify-between">
                    <div>
                      <span className="text-[11px] font-mono text-concrete-300 uppercase tracking-widest">
                        {project.location}
                      </span>
                      <h3 className="font-editorial text-2xl sm:text-3xl font-bold tracking-tight text-white mt-0.5">
                        {project.title}
                      </h3>
                    </div>
                    <span className="w-10 h-10 bg-white/90 group-hover:bg-terracotta-500 text-charcoal-950 group-hover:text-white flex items-center justify-center transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                {/* Information Card & Trigger */}
                <div className="p-6 sm:p-7 flex flex-col justify-between gap-4">
                  <p className="text-sm text-charcoal-700 font-sans leading-relaxed line-clamp-2">
                    {project.brief}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-concrete-200 text-xs font-mono">
                    <span className="text-charcoal-500">{project.discipline}</span>
                    <button
                      onClick={() => openProjectModal(project)}
                      className="font-bold text-terracotta-600 hover:text-terracotta-700 uppercase tracking-wider flex items-center gap-1 cursor-pointer"
                    >
                      <span>Preview Specs</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. MULTIDISCIPLINARY SERVICE CAPABILITIES
          ========================================================================= */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-ivory-100 border-t border-b border-concrete-300">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-mono tracking-[0.25em] text-terracotta-600 uppercase">
              // STUDIO CAPABILITIES
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl font-bold tracking-tight text-charcoal-950 mt-1">
              Multidisciplinary Creative Architecture
            </h2>
            <p className="text-charcoal-600 text-base sm:text-lg mt-3 leading-relaxed">
              We operate across five integrated design studios, ensuring seamless artistic coherence from foundation concrete to brand guidelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {studioServices.map((srv) => (
              <div
                key={srv.id}
                className="bg-white p-6 border border-concrete-300 flex flex-col justify-between hover:border-terracotta-500 transition-colors group"
              >
                <div>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-terracotta-600">
                    {srv.category}
                  </span>
                  <h3 className="font-editorial text-xl font-bold text-charcoal-950 mt-2 group-hover:text-terracotta-600 transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-charcoal-600 mt-3 font-sans leading-relaxed">
                    {srv.lead}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-concrete-200">
                  <Link
                    href="/services"
                    className="text-xs font-mono font-bold uppercase tracking-wider text-charcoal-900 group-hover:text-terracotta-600 flex items-center justify-between"
                  >
                    <span>Explore Scope</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. STUDIO JOURNAL INSIGHTS PREVIEW
          ========================================================================= */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-ivory-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 pb-6 border-b border-concrete-300">
            <div>
              <span className="text-xs font-mono tracking-[0.25em] text-terracotta-600 uppercase">
                // JOURNAL & PERSPECTIVES
              </span>
              <h2 className="font-editorial text-4xl sm:text-5xl font-bold tracking-tight text-charcoal-950 mt-1">
                Dispatches from the Practice
              </h2>
            </div>
            <Link
              href="/journal"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-charcoal-900 hover:text-terracotta-600 transition-colors"
            >
              <span>Explore All Editorial Articles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredArticles.map((art) => (
              <article
                key={art.id}
                className="group flex flex-col justify-between bg-white border border-concrete-300 overflow-hidden shadow-sm hover:shadow-studio transition-all"
              >
                <div className="relative h-56 bg-charcoal-900 overflow-hidden">
                  <Image
                    src={art.heroImage}
                    alt={art.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-0.5 bg-charcoal-950/80 text-white text-[10px] font-mono tracking-wider uppercase">
                    {art.category}
                  </div>
                </div>

                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <span className="text-[11px] font-mono text-concrete-500">
                      {art.date} • {art.readTime}
                    </span>
                    <h3 className="font-editorial text-xl font-bold text-charcoal-950 mt-2 group-hover:text-terracotta-600 transition-colors leading-snug">
                      <Link href={`/journal/${art.slug}`}>{art.title}</Link>
                    </h3>
                    <p className="text-xs text-charcoal-600 font-sans mt-3 line-clamp-2 leading-relaxed">
                      {art.excerpt}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-concrete-200 flex items-center justify-between text-xs font-mono">
                    <span className="text-charcoal-500">{art.author.name}</span>
                    <Link
                      href={`/journal/${art.slug}`}
                      className="font-bold text-terracotta-600 group-hover:translate-x-1 transition-transform flex items-center gap-1"
                    >
                      <span>Read Essay</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
