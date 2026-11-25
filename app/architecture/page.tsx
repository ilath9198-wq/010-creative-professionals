'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Compass, Maximize2, Shield, Sparkles } from 'lucide-react';
import { studioProjects } from '../../data/studioData';
import { useStudio } from '../../components/StudioContext';

export default function ArchitecturePage() {
  const { openProjectModal, openEnquiryModal, openLightbox } = useStudio();
  const architectureProjects = studioProjects.filter((p) => p.category === 'Architecture');

  return (
    <div className="w-full">
      {/* 1. ATMOSPHERIC PHOTOGRAPHIC HERO */}
      <section className="relative min-h-[75vh] md:min-h-[82vh] flex items-center justify-center overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=85"
            alt="ATELIER N°10 Monolithic Architecture"
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
              <span>SPATIAL & ARCHITECTURAL PRACTICE</span>
            </div>

            <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-white leading-[1.06] mb-6 drop-shadow-md">
              Architecture &amp; <br />
              <span className="italic font-normal lowercase font-editorial text-concrete-200">
                Spatial Monoliths
              </span>
            </h1>

            <p className="font-editorial text-lg sm:text-2xl italic text-concrete-200 leading-relaxed mb-8 max-w-2xl font-normal drop-shadow">
              &ldquo;Conceiving structures rooted in alpine geology, daylight choreography, and low-carbon thermal mass that stand for generations.&rdquo;
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={openEnquiryModal}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-terracotta-500 hover:bg-terracotta-600 text-white font-editorial font-bold text-base tracking-wider uppercase shadow-terracotta transition-all cursor-pointer"
              >
                <span>Commission Architecture</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <Link
                href="/work"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-charcoal-900/90 hover:bg-charcoal-800 text-white border-2 border-concrete-400/70 font-editorial font-bold text-base tracking-wider uppercase backdrop-blur-md transition-all cursor-pointer"
              >
                <span>View Full Portfolio</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ARCHITECTURAL PHILOSOPHY STRIP */}
      <section className="bg-ivory-100 border-b border-concrete-300 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white border border-concrete-300 space-y-2">
            <span className="text-xs font-mono font-bold text-terracotta-600">01 // GEOLOGICAL CONTEXT</span>
            <h3 className="font-editorial text-2xl font-bold text-charcoal-950">Site-Specific Massing</h3>
            <p className="text-xs text-charcoal-600 leading-relaxed font-sans">
              Every building originates from geotechnical surveys, solar azimuth calculations, and local quarry materials, grounding human life firmly in regional landscape.
            </p>
          </div>
          <div className="p-6 bg-white border border-concrete-300 space-y-2">
            <span className="text-xs font-mono font-bold text-terracotta-600">02 // THERMAL INERTIA</span>
            <h3 className="font-editorial text-2xl font-bold text-charcoal-950">Passive Climate Envelope</h3>
            <p className="text-xs text-charcoal-600 leading-relaxed font-sans">
              Through thick mineral walls and earth-sheltered envelopes, our structures regulate temperature naturally with minimal reliance on mechanical HVAC systems.
            </p>
          </div>
          <div className="p-6 bg-white border border-concrete-300 space-y-2">
            <span className="text-xs font-mono font-bold text-terracotta-600">03 // DAYLIGHT DRAMA</span>
            <h3 className="font-editorial text-2xl font-bold text-charcoal-950">Solar Choreography</h3>
            <p className="text-xs text-charcoal-600 leading-relaxed font-sans">
              We carve precise lightwells and deep reveals that transform ordinary rooms into sundials, registering the unhurried passage of seasons and weather.
            </p>
          </div>
        </div>
      </section>

      {/* 3. SHOWCASED ARCHITECTURAL COMMISSIONS */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-ivory-50">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="max-w-2xl">
            <span className="text-xs font-mono tracking-[0.25em] text-terracotta-600 uppercase">
              // BUILT ENVIRONMENT DOSSIER
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl font-bold tracking-tight text-charcoal-950 mt-1">
              Select Architecture Case Studies
            </h2>
          </div>

          <div className="space-y-16">
            {architectureProjects.map((project, idx) => (
              <div
                key={project.id}
                className="bg-white border border-concrete-300 p-6 sm:p-10 shadow-studio grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                <div
                  onClick={() => openProjectModal(project)}
                  className="lg:col-span-7 relative h-[360px] sm:h-[460px] bg-charcoal-900 border border-concrete-300 overflow-hidden cursor-pointer group"
                >
                  <Image
                    src={project.heroImage}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 700px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-charcoal-950/20 group-hover:bg-transparent transition-colors" />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-charcoal-950 text-white font-mono text-xs uppercase">
                    {project.year} // {project.location}
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-5">
                  <span className="text-xs font-mono font-bold text-terracotta-600 uppercase tracking-widest">
                    {project.discipline}
                  </span>
                  <h3 className="font-editorial text-3xl sm:text-4xl font-bold text-charcoal-950">
                    {project.title}
                  </h3>
                  <p className="text-sm text-charcoal-700 font-sans leading-relaxed">
                    {project.concept}
                  </p>
                  <div className="p-4 bg-ivory-100 border border-concrete-300 text-xs font-mono text-charcoal-700 space-y-1">
                    <p>CLIENT: {project.client}</p>
                    <p>HONOR: {project.awards || 'Studio Publication'}</p>
                  </div>
                  <div className="pt-2 flex items-center gap-4">
                    <button
                      onClick={() => openProjectModal(project)}
                      className="px-6 py-2.5 bg-terracotta-500 hover:bg-terracotta-600 text-white font-editorial text-sm font-bold uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      Inspect Monograph
                    </button>
                    <Link
                      href={`/work/${project.slug}`}
                      className="text-xs font-mono font-bold uppercase text-charcoal-900 hover:text-terracotta-600 flex items-center gap-1"
                    >
                      <span>Full Page</span>
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
