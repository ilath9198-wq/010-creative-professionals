'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, CheckCircle2, Layers, Compass, Sparkles } from 'lucide-react';
import { studioServices } from '../../data/studioData';
import { useStudio } from '../../components/StudioContext';

export default function ServicesPage() {
  const { openEnquiryModal, openLightbox } = useStudio();

  return (
    <div className="w-full">
      {/* 1. ATMOSPHERIC PHOTOGRAPHIC HERO */}
      <section className="relative min-h-[75vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=2000&q=85"
            alt="ATELIER N°10 Materials & Creative Disciplines"
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
              <span>CAPABILITIES & METHODOLOGY</span>
            </div>

            <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-white leading-[1.06] mb-6 drop-shadow-md">
              Five Disciplines, <br />
              <span className="italic font-normal lowercase font-editorial text-concrete-200">
                One Cohesive Vision
              </span>
            </h1>

            <p className="font-editorial text-lg sm:text-2xl italic text-concrete-200 leading-relaxed mb-8 max-w-2xl font-normal drop-shadow">
              &ldquo;We integrate the structural permanence of architecture with the emotional resonance of visual identity and digital craft.&rdquo;
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={openEnquiryModal}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-terracotta-500 hover:bg-terracotta-600 text-white font-editorial font-bold text-base tracking-wider uppercase shadow-terracotta transition-all cursor-pointer"
              >
                <span>Request Service Proposal</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <Link
                href="/work"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-charcoal-900/90 hover:bg-charcoal-800 text-white border-2 border-concrete-400/70 font-editorial font-bold text-base tracking-wider uppercase backdrop-blur-md transition-all cursor-pointer"
              >
                <span>View Realised Projects</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES DEEP DIVE */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-ivory-50">
        <div className="max-w-7xl mx-auto space-y-20 lg:space-y-28">
          {studioServices.map((service, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Visual Viewport */}
                <div
                  className={`lg:col-span-6 relative h-[360px] sm:h-[480px] bg-charcoal-900 border border-concrete-300 overflow-hidden shadow-studio group ${
                    isReversed ? 'lg:order-2' : ''
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-transparent opacity-70" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[11px] font-mono tracking-widest uppercase bg-charcoal-950/80 px-2 py-0.5 border border-concrete-400/30">
                      {service.category}
                    </span>
                    <p className="text-xs font-mono text-concrete-300 mt-2">
                      {service.metrics}
                    </p>
                  </div>
                </div>

                {/* Service Text & Scope Matrix */}
                <div className={`lg:col-span-6 space-y-6 ${isReversed ? 'lg:order-1' : ''}`}>
                  <span className="text-xs font-mono tracking-[0.25em] text-terracotta-600 uppercase font-bold">
                    0{index + 1} // {service.category}
                  </span>
                  <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-950 tracking-tight leading-tight">
                    {service.title}
                  </h2>
                  <p className="text-base text-charcoal-700 leading-relaxed font-sans">
                    {service.lead}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-concrete-300">
                    <div>
                      <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-charcoal-900 mb-3">
                        Scope of Practice
                      </h4>
                      <ul className="space-y-2 text-xs font-sans text-charcoal-600">
                        {service.scope.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-terracotta-500 font-bold">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-charcoal-900 mb-3">
                        Key Deliverables
                      </h4>
                      <ul className="space-y-2 text-xs font-sans text-charcoal-600">
                        {service.deliverables.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-terracotta-500 font-bold">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 flex items-center gap-4">
                    <button
                      onClick={openEnquiryModal}
                      className="px-6 py-3 bg-terracotta-500 hover:bg-terracotta-600 text-white font-editorial text-sm font-bold uppercase tracking-wider shadow-sm transition-colors cursor-pointer"
                    >
                      Commission {service.category}
                    </button>
                    <Link
                      href="/work"
                      className="text-xs font-mono font-bold uppercase tracking-wider text-charcoal-900 hover:text-terracotta-600 flex items-center gap-1.5"
                    >
                      <span>Relevant Case Studies</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
