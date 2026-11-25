'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Compass, Sparkles, Award, Users, BookOpen } from 'lucide-react';
import { teamMembers, studioStats, studioLocations } from '../../data/studioData';
import { useStudio } from '../../components/StudioContext';

export default function AboutPage() {
  const { openEnquiryModal, openLightbox } = useStudio();

  return (
    <div className="w-full">
      {/* 1. ATMOSPHERIC PHOTOGRAPHIC HERO */}
      <section className="relative min-h-[75vh] md:min-h-[82vh] flex items-center justify-center overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=85"
            alt="ATELIER N°10 Collaborative Studio Space"
            fill
            className="object-cover object-center scale-105 transition-transform duration-1000"
            priority
            sizes="100vw"
          />
          {/* Deep charcoal gradient scrim for contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/95 via-charcoal-950/85 to-charcoal-950/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-transparent to-charcoal-950/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center sm:text-left">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-charcoal-900/90 border border-concrete-400/40 text-ivory-100 text-xs font-mono font-medium tracking-widest uppercase mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-terracotta-400 animate-pulse" />
              <span>THE PRACTICE // EST. 2012</span>
            </div>

            <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-white leading-[1.06] mb-6 drop-shadow-md">
              A Multidisciplinary <br />
              <span className="italic font-normal lowercase font-editorial text-concrete-200">
                Design Sanctuary
              </span>
            </h1>

            <p className="font-editorial text-lg sm:text-2xl italic text-concrete-200 leading-relaxed mb-8 max-w-2xl font-normal drop-shadow">
              &ldquo;We exist at the fertile intersection where monolithic architecture, interior warmth, graphic restraint, and digital interaction converge into enduring human experiences.&rdquo;
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={openEnquiryModal}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-terracotta-500 hover:bg-terracotta-600 text-white font-editorial font-bold text-base tracking-wider uppercase shadow-terracotta transition-all cursor-pointer"
              >
                <span>Initiate Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <Link
                href="/work"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-charcoal-900/90 hover:bg-charcoal-800 text-white border-2 border-concrete-400/70 font-editorial font-bold text-base tracking-wider uppercase backdrop-blur-md transition-all cursor-pointer"
              >
                <span>Explore Retrospective</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PRACTICE STATS OVERVIEW */}
      <section className="bg-ivory-100 border-b border-concrete-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center sm:text-left">
          {studioStats.map((stat, i) => (
            <div key={i} className="space-y-1">
              <p className="font-editorial text-4xl sm:text-5xl font-bold text-charcoal-950">{stat.value}</p>
              <p className="text-xs font-mono uppercase tracking-wider text-charcoal-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. BRAND STORY & PHILOSOPHY */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-ivory-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono tracking-[0.25em] text-terracotta-600 uppercase">
              // STUDIO ORIGINS & MANIFESTO
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-charcoal-950 tracking-tight leading-tight">
              Crafting permanence in a culture of disposability.
            </h2>
            <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed font-sans">
              Founded in Zürich in 2012 by architect Marcus Thorne and creative director Elena Vance, ATELIER N°10 was born from a mutual impatience with modern creative silos. Architecture studios rarely cared about typefaces; branding agencies designed logos without tactile understanding of physical mass and stone.
            </p>
            <p className="text-base text-charcoal-600 leading-relaxed font-sans">
              Today, our studios in Zürich, Milan, and Tokyo collaborate as a singular collective. Whether designing an alpine cultural pavilion or orchestrating a global fragrance identity, we subject every concept to the same rigor: tactile authenticity, acoustic calmness, and mathematical proportion.
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div
              onClick={() => openLightbox('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=85', 'Studio Workshop & Material Sourcing Table')}
              className="relative h-72 sm:h-96 bg-charcoal-900 border border-concrete-300 overflow-hidden cursor-zoom-in group shadow-md"
            >
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=85"
                alt="Studio Collaboration"
                fill
                sizes="(max-width: 768px) 50vw, 400px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-2 left-2 px-2 py-1 bg-charcoal-950/80 text-[10px] font-mono text-white">
                COLLABORATIVE REVIEW
              </div>
            </div>
            <div
              onClick={() => openLightbox('https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85', 'Architectural Model & Prototyping Workshop')}
              className="relative h-72 sm:h-96 bg-charcoal-900 border border-concrete-300 overflow-hidden cursor-zoom-in group shadow-md mt-8"
            >
              <Image
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85"
                alt="Architectural Models"
                fill
                sizes="(max-width: 768px) 50vw, 400px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-2 left-2 px-2 py-1 bg-charcoal-950/80 text-[10px] font-mono text-white">
                PHYSICAL MAQUETTES
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FOUR CORE PILLARS OF PRACTICE */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-ivory-100 border-t border-b border-concrete-300">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-mono tracking-[0.25em] text-terracotta-600 uppercase">
              // DESIGN PRINCIPLES
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl font-bold tracking-tight text-charcoal-950 mt-1">
              Guiding Spatial Laws
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-7 border border-concrete-300 space-y-3">
              <span className="font-mono text-xs font-bold text-terracotta-600">01 // MATERIAL HONESTY</span>
              <h3 className="font-editorial text-2xl font-bold text-charcoal-950">Truth in Substance</h3>
              <p className="text-xs text-charcoal-600 leading-relaxed font-sans">
                We never simulate stone with vinyl or timber with composite laminates. If a surface cannot patina with dignity, it has no place in our drawings.
              </p>
            </div>
            <div className="bg-white p-7 border border-concrete-300 space-y-3">
              <span className="font-mono text-xs font-bold text-terracotta-600">02 // SPATIAL SILENCE</span>
              <h3 className="font-editorial text-2xl font-bold text-charcoal-950">Acoustic Stillness</h3>
              <p className="text-xs text-charcoal-600 leading-relaxed font-sans">
                Light and sound are treated as tangible materials. We choreograph spaces where human presence feels unhurried, calm, and sovereign.
              </p>
            </div>
            <div className="bg-white p-7 border border-concrete-300 space-y-3">
              <span className="font-mono text-xs font-bold text-terracotta-600">03 // TYPOGRAPHIC TENSION</span>
              <h3 className="font-editorial text-2xl font-bold text-charcoal-950">Editorial Hierarchy</h3>
              <p className="text-xs text-charcoal-600 leading-relaxed font-sans">
                Every monogram, packaging die, or website interface is engineered with the discipline of Swiss modernist book typography and grid geometry.
              </p>
            </div>
            <div className="bg-white p-7 border border-concrete-300 space-y-3">
              <span className="font-mono text-xs font-bold text-terracotta-600">04 // ECOLOGICAL STEWARDSHIP</span>
              <h3 className="font-editorial text-2xl font-bold text-charcoal-950">Low-Carbon Future</h3>
              <p className="text-xs text-charcoal-600 leading-relaxed font-sans">
                Every building envelope and packaging material is evaluated against life-cycle carbon models, specifying local quarry reserves and bio-based binders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. STUDIO LEADERSHIP & PARTNERS */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-ivory-50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-mono tracking-[0.25em] text-terracotta-600 uppercase">
              // STUDIO PARTNERS
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl font-bold tracking-tight text-charcoal-950 mt-1">
              Creative Leadership
            </h2>
            <p className="text-sm text-concrete-500 font-mono mt-2 italic">
              * Demonstration profiles representing the studio practice disciplines.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-white border border-concrete-300 flex flex-col justify-between overflow-hidden shadow-sm">
                <div className="relative h-72 bg-charcoal-900 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-charcoal-950/15" />
                </div>
                <div className="p-6 space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-terracotta-600">
                    {member.discipline}
                  </span>
                  <h3 className="font-editorial text-xl font-bold text-charcoal-950">{member.name}</h3>
                  <p className="text-xs font-mono text-charcoal-500">{member.role}</p>
                  <p className="text-xs text-charcoal-600 pt-2 font-sans leading-relaxed border-t border-concrete-200">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
