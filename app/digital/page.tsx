'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Cpu, Layout, Smartphone, Globe, Code2 } from 'lucide-react';
import { studioProjects } from '../../data/studioData';
import { useStudio } from '../../components/StudioContext';

export default function DigitalPage() {
  const { openProjectModal, openEnquiryModal, openLightbox } = useStudio();
  const digitalProjects = studioProjects.filter((p) => p.category === 'Digital & UI/UX');

  return (
    <div className="w-full">
      {/* 1. ATMOSPHERIC PHOTOGRAPHIC HERO */}
      <section className="relative min-h-[75vh] md:min-h-[82vh] flex items-center justify-center overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=2000&q=85"
            alt="ATELIER N°10 Digital & UI/UX Design Systems"
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
              <span>DIGITAL CRAFT & INTERACTIVE PLATFORMS</span>
            </div>

            <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-white leading-[1.06] mb-6 drop-shadow-md">
              Interactive Systems &amp; <br />
              <span className="italic font-normal lowercase font-editorial text-concrete-200">
                Fluid Digital Canvases
              </span>
            </h1>

            <p className="font-editorial text-lg sm:text-2xl italic text-concrete-200 leading-relaxed mb-8 max-w-2xl font-normal drop-shadow">
              &ldquo;We engineer web platforms, tokenised design systems, and mobile interfaces that reject generic templates in pursuit of mechanical elegance and typographic majesty.&rdquo;
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={openEnquiryModal}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-terracotta-500 hover:bg-terracotta-600 text-white font-editorial font-bold text-base tracking-wider uppercase shadow-terracotta transition-all cursor-pointer"
              >
                <span>Commission Digital Platform</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <Link
                href="/work"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-charcoal-900/90 hover:bg-charcoal-800 text-white border-2 border-concrete-400/70 font-editorial font-bold text-base tracking-wider uppercase backdrop-blur-md transition-all cursor-pointer"
              >
                <span>Browse Interactive Works</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DIGITAL CAPABILITIES */}
      <section className="bg-ivory-100 border-b border-concrete-300 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-5 bg-white border border-concrete-300">
            <span className="text-[10px] font-mono uppercase text-terracotta-600 font-bold">DISCIPLINE 01</span>
            <h4 className="font-editorial text-xl font-bold text-charcoal-950 mt-1">Design Systems</h4>
            <p className="text-xs text-charcoal-600 mt-2 font-sans leading-relaxed">
              Token-based design architecture synchronised seamlessly across Figma, Next.js, and native mobile environments.
            </p>
          </div>
          <div className="p-5 bg-white border border-concrete-300">
            <span className="text-[10px] font-mono uppercase text-terracotta-600 font-bold">DISCIPLINE 02</span>
            <h4 className="font-editorial text-xl font-bold text-charcoal-950 mt-1">Creative WebGL & 3D</h4>
            <p className="text-xs text-charcoal-600 mt-2 font-sans leading-relaxed">
              Bespoke spatial shaders, physics-based canvas interactions, and immersive 60fps portfolio viewing engines.
            </p>
          </div>
          <div className="p-5 bg-white border border-concrete-300">
            <span className="text-[10px] font-mono uppercase text-terracotta-600 font-bold">DISCIPLINE 03</span>
            <h4 className="font-editorial text-xl font-bold text-charcoal-950 mt-1">Luxury E-Commerce</h4>
            <p className="text-xs text-charcoal-600 mt-2 font-sans leading-relaxed">
              High-converting headless digital storefronts engineered with bespoke checkout curation and zero friction.
            </p>
          </div>
          <div className="p-5 bg-white border border-concrete-300">
            <span className="text-[10px] font-mono uppercase text-terracotta-600 font-bold">DISCIPLINE 04</span>
            <h4 className="font-editorial text-xl font-bold text-charcoal-950 mt-1">Global Performance</h4>
            <p className="text-xs text-charcoal-600 mt-2 font-sans leading-relaxed">
              Sub-second edge deployments, 98+ Lighthouse scores, and rigorous WCAG 2.1 AA accessibility compliance.
            </p>
          </div>
        </div>
      </section>

      {/* 3. SHOWCASED DIGITAL PLATFORMS */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-ivory-50">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="max-w-2xl">
            <span className="text-xs font-mono tracking-[0.25em] text-terracotta-600 uppercase">
              // INTERACTION ARCHIVE
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl font-bold tracking-tight text-charcoal-950 mt-1">
              Select Digital Case Studies
            </h2>
          </div>

          <div className="space-y-16">
            {digitalProjects.map((project) => (
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
                  <div className="absolute top-4 left-4 px-3 py-1 bg-charcoal-950 text-white font-mono text-xs uppercase">
                    {project.location} // {project.year}
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
                    <p>STACK: Next.js App Router, Tailwind CSS, WebGL Shaders, Edge CDN</p>
                    <p>METRIC: 98/100 Core Web Vitals Benchmark</p>
                  </div>
                  <div className="pt-2 flex items-center gap-4">
                    <button
                      onClick={() => openProjectModal(project)}
                      className="px-6 py-2.5 bg-terracotta-500 hover:bg-terracotta-600 text-white font-editorial text-sm font-bold uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      Inspect System Architecture
                    </button>
                    <Link
                      href={`/work/${project.slug}`}
                      className="text-xs font-mono font-bold uppercase text-charcoal-900 hover:text-terracotta-600 flex items-center gap-1"
                    >
                      <span>Full Case</span>
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
