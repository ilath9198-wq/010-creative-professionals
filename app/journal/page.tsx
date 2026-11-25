'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, BookOpen, Clock, Tag, Sparkles } from 'lucide-react';
import { studioJournal, JournalArticle } from '../../data/studioData';
import { useStudio } from '../../components/StudioContext';

export default function JournalPage() {
  const { openEnquiryModal, openLightbox } = useStudio();
  const [selectedTag, setSelectedTag] = useState<string>('All');

  const categories = ['All', 'Visual Identity', 'Architecture', 'Materiality', 'Digital Craft'];

  const filteredArticles =
    selectedTag === 'All'
      ? studioJournal
      : studioJournal.filter((a) => a.category === selectedTag);

  const featuredArticle = studioJournal[0];

  return (
    <div className="w-full">
      {/* 1. ATMOSPHERIC PHOTOGRAPHIC HERO */}
      <section className="relative min-h-[75vh] md:min-h-[82vh] flex items-center justify-center overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=2000&q=85"
            alt="ATELIER N°10 Editorial Journal & Publications"
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
              <span>THE STUDIO JOURNAL // ESSAYS & CRITICISM</span>
            </div>

            <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-white leading-[1.06] mb-6 drop-shadow-md">
              Thoughts on Form, <br />
              <span className="italic font-normal lowercase font-editorial text-concrete-200">
                Silence &amp; Material
              </span>
            </h1>

            <p className="font-editorial text-lg sm:text-2xl italic text-concrete-200 leading-relaxed mb-8 max-w-2xl font-normal drop-shadow">
              &ldquo;Critical essays, architectural monographs, and design philosophy authored by the partners and visiting fellows of ATELIER N°10.&rdquo;
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#featured-essay"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-terracotta-500 hover:bg-terracotta-600 text-white font-editorial font-bold text-base tracking-wider uppercase shadow-terracotta transition-all cursor-pointer"
              >
                <span>Read Featured Monograph</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <button
                onClick={openEnquiryModal}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-charcoal-900/90 hover:bg-charcoal-800 text-white border-2 border-concrete-400/70 font-editorial font-bold text-base tracking-wider uppercase backdrop-blur-md transition-all cursor-pointer"
              >
                <span>Submit Editorial Enquiry</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURED ESSAY SHOWCASE */}
      <section id="featured-essay" className="bg-ivory-100 border-b border-concrete-300 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white border border-concrete-300 p-8 sm:p-12 shadow-studio grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 relative h-[360px] sm:h-[460px] bg-charcoal-900 border border-concrete-300 overflow-hidden group">
              <Image
                src={featuredArticle.heroImage}
                alt={featuredArticle.title}
                fill
                sizes="(max-width: 1024px) 100vw, 700px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 px-3 py-1 bg-charcoal-950 text-white text-[11px] font-mono uppercase">
                FEATURED ESSAY // {featuredArticle.category}
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-terracotta-600 font-bold uppercase">
                  {featuredArticle.date}
                </span>
                <span className="text-concrete-400">•</span>
                <span className="text-xs font-mono text-charcoal-600">
                  {featuredArticle.readTime}
                </span>
              </div>

              <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-charcoal-950 leading-tight">
                {featuredArticle.title}
              </h2>

              <p className="text-sm sm:text-base text-charcoal-700 font-sans leading-relaxed">
                {featuredArticle.excerpt}
              </p>

              <div className="pt-4 border-t border-concrete-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative w-9 h-9 rounded-full overflow-hidden bg-charcoal-900">
                    <Image
                      src={featuredArticle.author.avatar}
                      alt={featuredArticle.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-bold font-editorial text-charcoal-950">{featuredArticle.author.name}</p>
                    <p className="text-[10px] font-mono text-charcoal-500">{featuredArticle.author.role}</p>
                  </div>
                </div>

                <Link
                  href={`/journal/${featuredArticle.slug}`}
                  className="px-6 py-2.5 bg-terracotta-500 hover:bg-terracotta-600 text-white font-editorial text-sm font-bold uppercase tracking-wider transition-colors"
                >
                  Read Essay
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ALL JOURNAL ARTICLES GRID */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-ivory-50">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Filter Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-concrete-300">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-charcoal-600">
              DISPATCHES BY THEMATIC FOCUS
            </span>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedTag(cat)}
                  className={`px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                    selectedTag === cat
                      ? 'bg-charcoal-950 text-white font-bold'
                      : 'bg-white text-charcoal-700 border border-concrete-300 hover:border-charcoal-400'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                className="group flex flex-col justify-between bg-white border border-concrete-300 overflow-hidden shadow-sm hover:shadow-studio transition-all"
              >
                <div className="relative h-60 bg-charcoal-900 overflow-hidden">
                  <Image
                    src={article.heroImage}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-0.5 bg-charcoal-950/80 text-white text-[10px] font-mono tracking-wider uppercase">
                    {article.category}
                  </div>
                </div>

                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <span className="text-[11px] font-mono text-concrete-500">
                      {article.date} • {article.readTime}
                    </span>
                    <h3 className="font-editorial text-2xl font-bold text-charcoal-950 mt-2 group-hover:text-terracotta-600 transition-colors leading-snug">
                      <Link href={`/journal/${article.slug}`}>{article.title}</Link>
                    </h3>
                    <p className="text-xs text-charcoal-600 font-sans mt-3 line-clamp-3 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-concrete-200 flex items-center justify-between text-xs font-mono">
                    <span className="text-charcoal-500">{article.author.name}</span>
                    <Link
                      href={`/journal/${article.slug}`}
                      className="font-bold text-terracotta-600 group-hover:translate-x-1 transition-transform flex items-center gap-1"
                    >
                      <span>Read Full Essay</span>
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
