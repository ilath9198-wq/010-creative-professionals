import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, ArrowUpRight, Calendar, MapPin, Award, Building, Sparkles } from 'lucide-react';
import { studioProjects, Project } from '../../../data/studioData';

export function generateStaticParams() {
  return studioProjects.map((p) => ({
    slug: p.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = studioProjects.find((p) => p.slug === params.slug);
  if (!project) return { title: 'Project Not Found | ATELIER N°10' };
  return {
    title: `${project.title} — ${project.discipline} | ATELIER N°10`,
    description: project.brief,
  };
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = studioProjects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const relatedProjects = studioProjects.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <div className="w-full bg-ivory-50 text-charcoal-950">
      {/* 1. ATMOSPHERIC PHOTOGRAPHIC HERO */}
      <section className="relative min-h-[75vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 z-0">
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            className="object-cover object-center scale-105 transition-transform duration-1000"
            priority
            sizes="100vw"
          />
          {/* Deep luxury charcoal gradient scrim */}
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/95 via-charcoal-950/85 to-charcoal-950/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-transparent to-charcoal-950/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center sm:text-left">
          <div className="max-w-4xl">
            {/* Back link */}
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-concrete-300 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Portfolio Archive</span>
            </Link>

            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-terracotta-500 text-white text-xs font-mono uppercase tracking-wider">
                {project.category}
              </span>
              <span className="text-xs font-mono text-concrete-300">
                {project.location} • {project.year}
              </span>
            </div>

            <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-white leading-[1.06] mb-6 drop-shadow-md">
              {project.title}
            </h1>

            <p className="font-editorial text-lg sm:text-2xl italic text-concrete-200 leading-relaxed mb-8 max-w-2xl font-normal drop-shadow">
              &ldquo;{project.concept}&rdquo;
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-terracotta-500 hover:bg-terracotta-600 text-white font-editorial font-bold text-base tracking-wider uppercase shadow-terracotta transition-all cursor-pointer"
              >
                <span>Commission Similar Work</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <a
                href="#gallery-perspectives"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-charcoal-900/90 hover:bg-charcoal-800 text-white border-2 border-concrete-400/70 font-editorial font-bold text-base tracking-wider uppercase backdrop-blur-md transition-all cursor-pointer"
              >
                <span>Inspect Visual Documentation</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SPECIFICATION MATRIX */}
      <section className="bg-ivory-100 border-b border-concrete-300 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-4 bg-white border border-concrete-300">
            <span className="text-[10px] font-mono uppercase text-charcoal-500">COMMISSION PATRON</span>
            <p className="font-editorial text-lg font-bold text-charcoal-950 mt-1">{project.client}</p>
          </div>
          <div className="p-4 bg-white border border-concrete-300">
            <span className="text-[10px] font-mono uppercase text-charcoal-500">GEOGRAPHIC SITE</span>
            <p className="font-editorial text-lg font-bold text-charcoal-950 mt-1">{project.location}</p>
          </div>
          <div className="p-4 bg-white border border-concrete-300">
            <span className="text-[10px] font-mono uppercase text-charcoal-500">YEAR OF HANDOVER</span>
            <p className="font-editorial text-lg font-bold text-charcoal-950 mt-1">{project.year}</p>
          </div>
          <div className="p-4 bg-white border border-concrete-300">
            <span className="text-[10px] font-mono uppercase text-charcoal-500">CRITICAL ACCLAIM</span>
            <p className="font-editorial text-lg font-bold text-charcoal-950 mt-1">{project.awards || 'Studio Monograph'}</p>
          </div>
        </div>
      </section>

      {/* 3. EDITORIAL NARRATIVE SECTIONS */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-14">
          <div>
            <span className="text-xs font-mono font-bold text-terracotta-600 uppercase tracking-widest">
              01 // THE INITIAL BRIEF
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-charcoal-950 mt-2">
              Context &amp; Ambition
            </h2>
            <p className="text-base sm:text-lg text-charcoal-700 font-sans leading-relaxed mt-4">
              {project.brief}
            </p>
          </div>

          <div>
            <span className="text-xs font-mono font-bold text-terracotta-600 uppercase tracking-widest">
              02 // CONCEPT & SPATIAL INSPIRATION
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-charcoal-950 mt-2">
              Theoretical Foundation
            </h2>
            <p className="text-base sm:text-lg text-charcoal-700 font-sans leading-relaxed mt-4">
              {project.concept}
            </p>
          </div>

          <div>
            <span className="text-xs font-mono font-bold text-terracotta-600 uppercase tracking-widest">
              03 // METHODOLOGY & REALISATION
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-charcoal-950 mt-2">
              Execution &amp; Material Craft
            </h2>
            <p className="text-base sm:text-lg text-charcoal-700 font-sans leading-relaxed mt-4">
              {project.approach}
            </p>
          </div>

          <div className="p-8 bg-ivory-100 border border-concrete-300">
            <span className="text-xs font-mono font-bold text-charcoal-950 uppercase tracking-widest">
              04 // PERFORMANCE & RECOGNITION
            </span>
            <p className="font-editorial text-xl italic text-charcoal-800 mt-2 leading-relaxed">
              &ldquo;{project.outcome}&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* 4. HIGH-RESOLUTION GALLERY DOCUMENTATION */}
      <section id="gallery-perspectives" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-ivory-100 border-t border-concrete-300">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="max-w-2xl">
            <span className="text-xs font-mono tracking-[0.25em] text-terracotta-600 uppercase">
              // ARCHIVAL DOCUMENTATION
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-charcoal-950 mt-1">
              Visual Perspectives &amp; Material Captures
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.galleryImages.map((img, i) => (
              <div
                key={i}
                className="relative h-80 sm:h-96 bg-charcoal-900 border border-concrete-300 overflow-hidden group shadow-md"
              >
                <Image
                  src={img}
                  alt={`${project.title} Perspective ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-3 left-3 px-2.5 py-1 bg-charcoal-950/80 text-[10px] font-mono text-white">
                  PERSPECTIVE 0{i + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. RELATED PROJECTS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-ivory-50 border-t border-concrete-300">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10 pb-4 border-b border-concrete-300">
            <span className="text-xs font-mono font-bold tracking-widest text-charcoal-600 uppercase">
              RELATED COMMISSIONS
            </span>
            <Link href="/work" className="text-xs font-mono font-bold uppercase text-terracotta-600 hover:underline">
              View All Works &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedProjects.map((rel) => (
              <Link
                key={rel.id}
                href={`/work/${rel.slug}`}
                className="group bg-white border border-concrete-300 p-6 flex flex-col sm:flex-row gap-6 items-center shadow-sm hover:shadow-studio transition-all"
              >
                <div className="relative w-full sm:w-44 h-40 bg-charcoal-900 shrink-0 overflow-hidden">
                  <Image
                    src={rel.heroImage}
                    alt={rel.title}
                    fill
                    sizes="200px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-terracotta-600 uppercase tracking-wider">
                    {rel.category}
                  </span>
                  <h3 className="font-editorial text-2xl font-bold text-charcoal-950 group-hover:text-terracotta-600 transition-colors">
                    {rel.title}
                  </h3>
                  <p className="text-xs text-charcoal-600 font-sans line-clamp-2">
                    {rel.brief}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
