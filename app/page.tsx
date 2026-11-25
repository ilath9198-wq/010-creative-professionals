'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Compass,
  Eye,
  Layers,
  ShieldCheck,
  ChevronRight,
  Clock,
  MapPin,
  Sliders,
  Maximize2
} from 'lucide-react';
import {
  studioProjects,
  studioJournal,
  studioServices,
  studioStats,
  studioMaterials,
  heroSlides,
  HeroSlide,
  MaterialItem
} from '../data/studioData';
import { useStudio } from '../components/StudioContext';

export default function HomePage() {
  const { openProjectModal, openEnquiryModal, openLightbox } = useStudio();

  // 1. Interactive Hero Slider State
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const currentSlide: HeroSlide = heroSlides[activeSlide];

  // Auto-advance hero slides every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  // 2. Real-time Studio World Clocks
  const [zurichTime, setZurichTime] = useState<string>('');
  const [tokyoTime, setTokyoTime] = useState<string>('');

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      setZurichTime(
        now.toLocaleTimeString('en-GB', {
          timeZone: 'Europe/Zurich',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      );
      setTokyoTime(
        now.toLocaleTimeString('en-GB', {
          timeZone: 'Asia/Tokyo',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      );
    };
    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  // 3. Interactive Materiality Archive State
  const [activeMaterial, setActiveMaterial] = useState<MaterialItem>(studioMaterials[0]);

  // 4. Interactive Expanding Disciplines State
  const [activeServiceId, setActiveServiceId] = useState<string>(studioServices[0].id);

  const featuredArticles = studioJournal.slice(0, 3);

  return (
    <div className="w-full bg-ivory-100 text-charcoal-950">
      {/* =========================================================================
          1. DYNAMIC INTERACTIVE HERO STAGE (MANDATORY ATMOSPHERIC ARCHITECTURE)
          Interactive Crossfading Architectural Showcase with Real-Time Studio Hubs
          ========================================================================= */}
      <section className="relative min-h-[92vh] sm:min-h-[95vh] flex flex-col justify-between overflow-hidden pt-12 pb-8 sm:pb-12 bg-charcoal-950">
        {/* Dynamic Architectural Crossfade Backdrops */}
        {heroSlides.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
              activeSlide === idx ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover object-center transform transition-transform duration-[7000ms] ease-out scale-105"
              priority={idx === 0}
              sizes="100vw"
            />
            {/* Deep architectural gradient scrims */}
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/95 via-charcoal-950/80 to-charcoal-950/65" />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-transparent to-charcoal-950/70" />
            {/* Architectural Grid overlay */}
            <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
          </div>
        ))}

        {/* Top Floating Telemetry & World Clocks */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[11px] font-mono text-concrete-300">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-terracotta-400 animate-pulse shrink-0" />
            <span className="text-white font-bold uppercase tracking-widest">
              ATELIER N°10 ARCHIVE // STAGE 0{activeSlide + 1}
            </span>
            <span className="hidden sm:inline text-charcoal-600">|</span>
            <span className="hidden sm:inline text-concrete-300">
              {currentSlide.coordinates} • {currentSlide.elevation}
            </span>
          </div>

          <div className="flex items-center gap-4 text-concrete-300 bg-charcoal-900/80 px-3 py-1 border border-concrete-400/20 backdrop-blur-md">
            <span>ZÜRICH {zurichTime || '13:19:00'} CET</span>
            <span className="text-charcoal-600">•</span>
            <span>TOKYO {tokyoTime || '21:19:00'} JST</span>
          </div>
        </div>

        {/* Main Hero Statement & Actions */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-8">
          <div className="max-w-4xl">
            {/* Current Slide Category Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-charcoal-900/90 border border-concrete-400/40 text-ivory-100 text-xs font-mono font-medium tracking-widest uppercase mb-6 backdrop-blur-md shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta-400" />
              <span>{currentSlide.discipline} // {currentSlide.location}</span>
            </div>

            {/* Oversized Expressive Headline */}
            <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold uppercase tracking-tight text-white leading-[1.02] mb-6 drop-shadow-lg">
              We Shape <br />
              <span className="italic font-normal lowercase font-editorial text-concrete-200">
                Spaces, Identities
              </span>{' '}
              <br />
              <span className="text-stroke hover:text-white transition-colors duration-500">
                &amp; Experiences.
              </span>
            </h1>

            {/* Dynamic Slide Subtitle */}
            <p className="font-editorial text-lg sm:text-2xl italic text-concrete-200 leading-relaxed mb-8 max-w-2xl font-normal drop-shadow">
              &ldquo;{currentSlide.subtitle}&rdquo;
            </p>

            {/* Solid Unmissable High-Contrast CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
              <Link
                href="/work"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-terracotta-500 hover:bg-terracotta-600 text-white font-editorial font-bold text-base sm:text-lg tracking-wider uppercase shadow-terracotta transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Explore Our Work</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                onClick={openEnquiryModal}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-charcoal-900/90 hover:bg-charcoal-800 text-white border-2 border-concrete-400/70 hover:border-ivory-100 font-editorial font-bold text-base sm:text-lg tracking-wider uppercase backdrop-blur-md transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4 text-terracotta-400" />
              </button>

              <Link
                href={`/work/${currentSlide.slug}`}
                className="hidden lg:inline-flex items-center gap-2 px-5 py-4 text-xs font-mono tracking-widest uppercase text-concrete-300 hover:text-white transition-colors"
              >
                <span>View {currentSlide.title}</span>
                <ArrowRight className="w-3.5 h-3.5 text-terracotta-400" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Interactive Hero Slide Controller Strip */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full border-t border-concrete-400/30 pt-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {heroSlides.map((slide, idx) => {
              const active = activeSlide === idx;
              return (
                <button
                  key={slide.id}
                  onClick={() => setActiveSlide(idx)}
                  className={`text-left p-3 border transition-all cursor-pointer relative overflow-hidden group ${
                    active
                      ? 'bg-charcoal-900/90 border-terracotta-500 text-white'
                      : 'bg-charcoal-950/60 border-concrete-400/20 text-concrete-400 hover:border-concrete-400/50 hover:text-concrete-200'
                  }`}
                >
                  {/* Progress Line for Active Slide */}
                  {active && (
                    <div className="absolute top-0 left-0 h-[2px] bg-terracotta-500 w-full animate-pulse" />
                  )}
                  <div className="flex items-baseline justify-between">
                    <span className="font-mono text-xs font-bold text-terracotta-400">
                      0{idx + 1}
                    </span>
                    <span className="text-[10px] font-mono uppercase text-concrete-500">
                      {slide.location.split(',')[0]}
                    </span>
                  </div>
                  <p className="font-editorial text-sm sm:text-base font-bold mt-1 text-white truncate">
                    {slide.title}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. KINETIC TYPOGRAPHIC HORIZON (CONTINUOUS MARQUEE)
          ========================================================================= */}
      <section className="bg-charcoal-950 border-y border-charcoal-800 py-5 overflow-hidden select-none">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-12 text-2xl sm:text-3xl font-editorial font-bold uppercase tracking-wider text-concrete-300">
          <span>ATELIER N°10</span>
          <span className="text-terracotta-400">•</span>
          <span className="italic font-normal lowercase font-editorial text-white">Monolithic Architecture</span>
          <span className="text-terracotta-400">•</span>
          <span className="text-stroke">Tactile Interiors</span>
          <span className="text-terracotta-400">•</span>
          <span>Bespoke Brand Systems</span>
          <span className="text-terracotta-400">•</span>
          <span className="italic font-normal lowercase font-editorial text-white">Generative Digital Canvases</span>
          <span className="text-terracotta-400">•</span>
          <span className="text-stroke">Zürich • Milano • Tokyo</span>
          <span className="text-terracotta-400">•</span>
          <span>Ideas Into Form</span>
          <span className="text-terracotta-400">•</span>
          {/* Duplicate loop */}
          <span>ATELIER N°10</span>
          <span className="text-terracotta-400">•</span>
          <span className="italic font-normal lowercase font-editorial text-white">Monolithic Architecture</span>
          <span className="text-terracotta-400">•</span>
          <span className="text-stroke">Tactile Interiors</span>
          <span className="text-terracotta-400">•</span>
          <span>Bespoke Brand Systems</span>
          <span className="text-terracotta-400">•</span>
          <span className="italic font-normal lowercase font-editorial text-white">Generative Digital Canvases</span>
          <span className="text-terracotta-400">•</span>
          <span className="text-stroke">Zürich • Milano • Tokyo</span>
          <span className="text-terracotta-400">•</span>
          <span>Ideas Into Form</span>
          <span className="text-terracotta-400">•</span>
        </div>
      </section>

      {/* =========================================================================
          3. ASYMMETRIC CURATED COMMISSIONS EXHIBITION (NOT A FLAT GRID!)
          Magazine-Style Editorial Composition with Floating Monograph Cards
          ========================================================================= */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-ivory-50">
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-concrete-300">
            <div>
              <span className="text-xs font-mono tracking-[0.25em] text-terracotta-600 uppercase font-bold">
                // CURATED EXHIBITION
              </span>
              <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-charcoal-950 mt-1">
                Monograph Retrospective
              </h2>
            </div>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-charcoal-900 hover:text-terracotta-600 transition-colors"
            >
              <span>Explore Complete 8-Project Index</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* EXHIBITION PIECE 01: Full-Bleed Panorama + Overlapping Editorial Dossier */}
          <div className="relative mb-24 group">
            <div
              onClick={() => openProjectModal(studioProjects[0])}
              className="relative w-full h-[400px] sm:h-[550px] lg:h-[620px] bg-charcoal-900 overflow-hidden cursor-pointer shadow-studio"
            >
              <Image
                src={studioProjects[0].heroImage}
                alt={studioProjects[0].title}
                fill
                sizes="100vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-1000"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />

              <div className="absolute top-6 left-6 px-3.5 py-1.5 bg-charcoal-950/90 text-ivory-50 text-xs font-mono uppercase tracking-wider backdrop-blur-md">
                PROJECT HIGHLIGHT // 01 ARCHITECTURE
              </div>
            </div>

            {/* Floating Overlapping Editorial Card (Desktop) */}
            <div className="lg:absolute lg:bottom-10 lg:right-10 w-full lg:max-w-xl bg-ivory-100/95 backdrop-blur-md border border-concrete-300 p-8 sm:p-10 shadow-2xl mt-4 lg:mt-0">
              <span className="text-xs font-mono font-bold text-terracotta-600 uppercase tracking-widest">
                {studioProjects[0].discipline} • {studioProjects[0].location}
              </span>
              <h3 className="font-editorial text-3xl sm:text-4xl font-bold text-charcoal-950 mt-1">
                {studioProjects[0].title}
              </h3>
              <p className="text-sm text-charcoal-700 font-sans leading-relaxed mt-3">
                {studioProjects[0].concept}
              </p>
              <div className="mt-6 pt-4 border-t border-concrete-300/80 flex items-center justify-between">
                <button
                  onClick={() => openProjectModal(studioProjects[0])}
                  className="px-6 py-2.5 bg-terracotta-500 hover:bg-terracotta-600 text-white font-editorial text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Preview Specs
                </button>
                <Link
                  href={`/work/${studioProjects[0].slug}`}
                  className="text-xs font-mono font-bold uppercase tracking-wider text-charcoal-900 hover:text-terracotta-600 flex items-center gap-1.5"
                >
                  <span>Dedicated Case</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* EXHIBITION PIECES 02 & 03: Asymmetric Editorial Diptych with Giant Numeral Watermarks */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-24">
            {/* Left: Casa Terrazzo (Portrait 4:5 Aspect Ratio) */}
            <div className="lg:col-span-7 bg-white border border-concrete-300 p-6 sm:p-8 shadow-studio group relative overflow-hidden">
              <span className="absolute -top-6 -right-4 font-editorial text-9xl font-bold text-concrete-200 select-none opacity-40 pointer-events-none">
                02
              </span>
              <div
                onClick={() => openProjectModal(studioProjects[1])}
                className="relative w-full h-[380px] sm:h-[460px] bg-charcoal-900 overflow-hidden cursor-pointer mb-6"
              >
                <Image
                  src={studioProjects[1].heroImage}
                  alt={studioProjects[1].title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 700px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-charcoal-950/80 text-white text-xs font-mono uppercase">
                  {studioProjects[1].category} // {studioProjects[1].year}
                </div>
              </div>

              <span className="text-xs font-mono font-bold text-terracotta-600 uppercase tracking-widest">
                {studioProjects[1].location}
              </span>
              <h3 className="font-editorial text-3xl font-bold text-charcoal-950 mt-1">
                {studioProjects[1].title}
              </h3>
              <p className="text-sm text-charcoal-700 font-sans leading-relaxed mt-2">
                {studioProjects[1].brief}
              </p>
              <div className="mt-6 pt-4 border-t border-concrete-200 flex items-center justify-between text-xs font-mono">
                <button
                  onClick={() => openProjectModal(studioProjects[1])}
                  className="text-terracotta-600 hover:text-terracotta-700 font-bold uppercase tracking-wider cursor-pointer"
                >
                  Preview Specs
                </button>
                <Link
                  href={`/work/${studioProjects[1].slug}`}
                  className="text-charcoal-900 hover:text-terracotta-600 font-bold uppercase tracking-wider flex items-center gap-1"
                >
                  <span>Monograph &rarr;</span>
                </Link>
              </div>
            </div>

            {/* Right: Nocturne Botanical Parfumerie (Offset Studio Card) */}
            <div className="lg:col-span-5 bg-white border border-concrete-300 p-6 sm:p-8 shadow-studio group relative overflow-hidden lg:mt-16">
              <span className="absolute -top-6 -right-4 font-editorial text-9xl font-bold text-concrete-200 select-none opacity-40 pointer-events-none">
                03
              </span>
              <div
                onClick={() => openProjectModal(studioProjects[2])}
                className="relative w-full h-[320px] sm:h-[380px] bg-charcoal-900 overflow-hidden cursor-pointer mb-6"
              >
                <Image
                  src={studioProjects[2].heroImage}
                  alt={studioProjects[2].title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-charcoal-950/80 text-white text-xs font-mono uppercase">
                  {studioProjects[2].category} // {studioProjects[2].year}
                </div>
              </div>

              <span className="text-xs font-mono font-bold text-terracotta-600 uppercase tracking-widest">
                {studioProjects[2].location}
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-charcoal-950 mt-1">
                {studioProjects[2].title}
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-700 font-sans leading-relaxed mt-2">
                {studioProjects[2].concept}
              </p>
              <div className="mt-6 pt-4 border-t border-concrete-200 flex items-center justify-between text-xs font-mono">
                <button
                  onClick={() => openProjectModal(studioProjects[2])}
                  className="text-terracotta-600 hover:text-terracotta-700 font-bold uppercase tracking-wider cursor-pointer"
                >
                  Preview Specs
                </button>
                <Link
                  href={`/work/${studioProjects[2].slug}`}
                  className="text-charcoal-900 hover:text-terracotta-600 font-bold uppercase tracking-wider flex items-center gap-1"
                >
                  <span>Monograph &rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. INTERACTIVE MATERIALITY & TACTILE ARCHIVE (DEEPLY CREATIVE FEATURE!)
          Patrons Can Inspect Raw Architectural Materials, Patina & Carbon Metrics
          ========================================================================= */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-ivory-200/70 border-y border-concrete-300">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono tracking-[0.25em] text-terracotta-600 uppercase font-bold">
              // TACTILE LIBRARY & RESEARCH
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-charcoal-950 mt-1">
              Materiality &amp; Elemental Craft
            </h2>
            <p className="text-base sm:text-lg text-charcoal-700 font-sans mt-3 leading-relaxed">
              Synthetics cannot patina with dignity. Select a mineral, wood, or metal specimen from our studio repository to inspect its tactile resonance and specification history.
            </p>
          </div>

          {/* Interactive Material Specification Console */}
          <div className="bg-white border border-concrete-300 shadow-2xl p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: 5 Specimen Selector Buttons */}
            <div className="lg:col-span-5 space-y-3">
              <span className="text-xs font-mono font-bold tracking-wider text-charcoal-500 uppercase">
                SPECIMEN SELECTION (CLICK TO INSPECT)
              </span>

              <div className="space-y-2 pt-2">
                {studioMaterials.map((mat, i) => {
                  const isSelected = activeMaterial.id === mat.id;
                  return (
                    <button
                      key={mat.id}
                      onClick={() => setActiveMaterial(mat)}
                      className={`w-full text-left p-4 border transition-all cursor-pointer flex items-center justify-between group ${
                        isSelected
                          ? 'bg-charcoal-950 text-white border-charcoal-950 shadow-md'
                          : 'bg-ivory-50 text-charcoal-800 border-concrete-300 hover:bg-white hover:border-charcoal-400'
                      }`}
                    >
                      <div>
                        <span className={`text-[10px] font-mono uppercase tracking-widest block ${
                          isSelected ? 'text-terracotta-400' : 'text-charcoal-500'
                        }`}>
                          SPECIMEN 0{i + 1} // {mat.origin.split(',')[0]}
                        </span>
                        <h4 className="font-editorial text-lg sm:text-xl font-bold mt-0.5">
                          {mat.name}
                        </h4>
                      </div>
                      <ChevronRight className={`w-4 h-4 transition-transform ${
                        isSelected ? 'text-terracotta-400 translate-x-1' : 'text-concrete-400 group-hover:translate-x-1'
                      }`} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right: Active Material Dossier Viewport */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              {/* Material Macro Image Viewport */}
              <div
                onClick={() => openLightbox(activeMaterial.image, `${activeMaterial.name} — Tactile Specimen`)}
                className="relative h-[280px] sm:h-[360px] bg-charcoal-900 border border-concrete-300 overflow-hidden cursor-zoom-in group shadow-inner"
              >
                <Image
                  src={activeMaterial.image}
                  alt={activeMaterial.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-3 left-3 px-3 py-1 bg-charcoal-950/85 text-ivory-50 text-[11px] font-mono uppercase backdrop-blur-sm">
                  {activeMaterial.application}
                </div>
                <div className="absolute top-3 right-3 px-2.5 py-1 bg-white/90 text-charcoal-950 text-[10px] font-mono tracking-wider font-bold">
                  HIGH-RES SPECIMEN
                </div>
              </div>

              {/* Material Sensory & Environmental Dossier */}
              <div className="p-6 bg-ivory-100 border border-concrete-300 space-y-4">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-terracotta-600 font-bold">
                    SENSORY ATMOSPHERE
                  </span>
                  <p className="font-editorial text-lg italic text-charcoal-900 mt-1 leading-relaxed">
                    &ldquo;{activeMaterial.sensoryNote}&rdquo;
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-concrete-300 text-xs font-mono">
                  <div>
                    <span className="text-charcoal-500 block uppercase text-[10px]">PROVENANCE</span>
                    <span className="font-bold text-charcoal-950">{activeMaterial.origin}</span>
                  </div>
                  <div>
                    <span className="text-charcoal-500 block uppercase text-[10px]">DENSITY</span>
                    <span className="font-bold text-charcoal-950">{activeMaterial.density}</span>
                  </div>
                  <div>
                    <span className="text-charcoal-500 block uppercase text-[10px]">SPECIFIED IN</span>
                    <span className="font-bold text-terracotta-600">{activeMaterial.featuredIn}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. INTERACTIVE DISCIPLINES IN MOTION (EXPANDING ACCORDION)
          ========================================================================= */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-ivory-100">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-mono tracking-[0.25em] text-terracotta-600 uppercase font-bold">
              // INTEGRATED DISCIPLINES
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-charcoal-950 mt-1">
              Five Studios, One Continuity
            </h2>
            <p className="text-base sm:text-lg text-charcoal-600 mt-3 font-sans leading-relaxed">
              Explore how our architectural core intersects with spatial interiors, packaging systems, and digital web frameworks.
            </p>
          </div>

          {/* Interactive Stacked Discipline Accordion */}
          <div className="border-t border-concrete-300 divide-y divide-concrete-300">
            {studioServices.map((srv, idx) => {
              const isExpanded = activeServiceId === srv.id;
              return (
                <div
                  key={srv.id}
                  className="transition-colors group"
                >
                  <button
                    onClick={() => setActiveServiceId(isExpanded ? '' : srv.id)}
                    className="w-full py-8 text-left flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <div className="flex items-baseline gap-6">
                      <span className="font-mono text-sm sm:text-base font-bold text-terracotta-600">
                        0{idx + 1}
                      </span>
                      <h3 className="font-editorial text-2xl sm:text-4xl font-bold text-charcoal-950 group-hover:text-terracotta-600 transition-colors">
                        {srv.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-4 text-xs font-mono text-charcoal-600">
                      <span className="uppercase tracking-widest hidden sm:inline">{srv.category}</span>
                      <span className="w-8 h-8 rounded-full border border-concrete-400 flex items-center justify-center group-hover:bg-charcoal-950 group-hover:text-white transition-colors">
                        {isExpanded ? '−' : '+'}
                      </span>
                    </div>
                  </button>

                  {/* Expanded Visual & Capabilities Drawer */}
                  {isExpanded && (
                    <div className="pb-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fadeIn">
                      <div className="lg:col-span-5 relative h-64 sm:h-80 bg-charcoal-900 border border-concrete-300 overflow-hidden shadow-md">
                        <Image
                          src={srv.image}
                          alt={srv.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 500px"
                          className="object-cover object-center"
                        />
                      </div>
                      <div className="lg:col-span-7 space-y-4">
                        <p className="text-base sm:text-lg text-charcoal-800 font-sans leading-relaxed">
                          {srv.lead}
                        </p>
                        <div className="p-4 bg-white border border-concrete-300">
                          <span className="text-[10px] font-mono uppercase tracking-widest text-charcoal-500 font-bold block mb-2">
                            PRACTICE CAPABILITIES
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {srv.scope.map((item, i) => (
                              <span
                                key={i}
                                className="px-2.5 py-1 bg-ivory-100 border border-concrete-200 text-xs font-mono text-charcoal-700"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="pt-2 flex items-center gap-4">
                          <Link
                            href="/services"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-terracotta-500 hover:bg-terracotta-600 text-white font-editorial text-xs font-bold uppercase tracking-wider transition-colors"
                          >
                            <span>Explore Service Page</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                          <button
                            onClick={openEnquiryModal}
                            className="text-xs font-mono font-bold uppercase tracking-wider text-charcoal-900 hover:text-terracotta-600 cursor-pointer"
                          >
                            Commission This Discipline &rarr;
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. EDITORIAL JOURNAL PERSPECTIVES
          ========================================================================= */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-ivory-50 border-t border-concrete-300">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-concrete-300">
            <div>
              <span className="text-xs font-mono tracking-[0.25em] text-terracotta-600 uppercase font-bold">
                // ESSAYS & THEORY
              </span>
              <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-charcoal-950 mt-1">
                Studio Perspectives
              </h2>
            </div>
            <Link
              href="/journal"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-charcoal-900 hover:text-terracotta-600 transition-colors"
            >
              <span>View All Dispatches</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredArticles.map((art) => (
              <article
                key={art.id}
                className="group flex flex-col justify-between bg-white border border-concrete-300 overflow-hidden shadow-sm hover:shadow-studio transition-all"
              >
                <div className="relative h-60 bg-charcoal-900 overflow-hidden">
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

                <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                  <div>
                    <span className="text-[11px] font-mono text-concrete-500">
                      {art.date} • {art.readTime}
                    </span>
                    <h3 className="font-editorial text-2xl font-bold text-charcoal-950 mt-2 group-hover:text-terracotta-600 transition-colors leading-snug">
                      <Link href={`/journal/${art.slug}`}>{art.title}</Link>
                    </h3>
                    <p className="text-xs text-charcoal-600 font-sans mt-3 line-clamp-3 leading-relaxed">
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
