import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, ArrowUpRight, Clock, User, Share2 } from 'lucide-react';
import { studioJournal, JournalArticle } from '../../../data/studioData';

export function generateStaticParams() {
  return studioJournal.map((a) => ({
    slug: a.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const article = studioJournal.find((a) => a.slug === params.slug);
  if (!article) return { title: 'Essay Not Found | ATELIER N°10' };
  return {
    title: `${article.title} | ATELIER N°10 Studio Journal`,
    description: article.excerpt,
  };
}

export default function JournalDetailPage({ params }: { params: { slug: string } }) {
  const article = studioJournal.find((a) => a.slug === params.slug);
  if (!article) notFound();

  const otherArticles = studioJournal.filter((a) => a.slug !== article.slug).slice(0, 2);

  return (
    <div className="w-full bg-ivory-50 text-charcoal-950">
      {/* 1. ATMOSPHERIC PHOTOGRAPHIC HERO */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 z-0">
          <Image
            src={article.heroImage}
            alt={article.title}
            fill
            className="object-cover object-center scale-105 transition-transform duration-1000"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/95 via-charcoal-950/85 to-charcoal-950/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-transparent to-charcoal-950/60" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center sm:text-left">
          {/* Back link */}
          <Link
            href="/journal"
            className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-concrete-300 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Studio Journal</span>
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-terracotta-500 text-white text-xs font-mono uppercase tracking-wider">
              {article.category}
            </span>
            <span className="text-xs font-mono text-concrete-300">
              {article.date} • {article.readTime}
            </span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white leading-[1.08] mb-6 drop-shadow-md">
            {article.title}
          </h1>

          <p className="font-editorial text-lg sm:text-2xl italic text-concrete-200 leading-relaxed mb-8 max-w-3xl font-normal drop-shadow">
            &ldquo;{article.excerpt}&rdquo;
          </p>

          <div className="flex items-center gap-4 pt-6 border-t border-concrete-400/40">
            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-charcoal-900 border border-concrete-300">
              <Image
                src={article.author.avatar}
                alt={article.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="text-left">
              <p className="font-editorial text-lg font-bold text-white">{article.author.name}</p>
              <p className="text-xs font-mono text-concrete-300">{article.author.role}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ARTICLE ESSAY BODY */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-8">
          {article.content.map((paragraph, idx) => (
            <p
              key={idx}
              className={`text-charcoal-800 font-sans leading-relaxed ${
                idx === 0
                  ? 'text-xl sm:text-2xl font-editorial font-normal leading-relaxed text-charcoal-950 border-l-2 border-terracotta-500 pl-6 my-6'
                  : 'text-base sm:text-lg'
              }`}
            >
              {paragraph}
            </p>
          ))}

          {/* Tag Pills */}
          <div className="pt-10 border-t border-concrete-300 flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-charcoal-500 uppercase mr-2">TOPICS:</span>
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-ivory-200 border border-concrete-300 text-xs font-mono text-charcoal-700"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FURTHER ESSAYS */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-ivory-100 border-t border-concrete-300">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10 pb-4 border-b border-concrete-300">
            <span className="text-xs font-mono font-bold tracking-widest text-charcoal-600 uppercase">
              FURTHER PERSPECTIVES
            </span>
            <Link href="/journal" className="text-xs font-mono font-bold uppercase text-terracotta-600 hover:underline">
              View All Articles &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherArticles.map((art) => (
              <Link
                key={art.id}
                href={`/journal/${art.slug}`}
                className="group bg-white border border-concrete-300 p-6 flex flex-col sm:flex-row gap-6 items-center shadow-sm hover:shadow-studio transition-all"
              >
                <div className="relative w-full sm:w-44 h-40 bg-charcoal-900 shrink-0 overflow-hidden">
                  <Image
                    src={art.heroImage}
                    alt={art.title}
                    fill
                    sizes="200px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-terracotta-600 uppercase tracking-wider">
                    {art.category}
                  </span>
                  <h3 className="font-editorial text-2xl font-bold text-charcoal-950 group-hover:text-terracotta-600 transition-colors">
                    {art.title}
                  </h3>
                  <p className="text-xs text-charcoal-600 font-sans line-clamp-2">
                    {art.excerpt}
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
