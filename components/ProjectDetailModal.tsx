'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, ArrowRight, MapPin, Calendar, Award, Building, Sparkles } from 'lucide-react';
import { useStudio } from './StudioContext';

export default function ProjectDetailModal() {
  const { isProjectModalOpen, selectedProject, closeProjectModal, openEnquiryModal, openLightbox } = useStudio();

  if (!isProjectModalOpen || !selectedProject) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10">
      {/* Backdrop */}
      <div
        onClick={closeProjectModal}
        className="absolute inset-0 bg-charcoal-950/80 backdrop-blur-md cursor-pointer animate-fadeIn"
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div
        className="relative w-full max-w-5xl max-h-[92vh] bg-ivory-100 text-charcoal-950 border border-concrete-300 shadow-2xl flex flex-col overflow-hidden z-10 animate-scaleUp"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
      >
        {/* Header Bar */}
        <div className="px-6 sm:px-8 py-5 border-b border-concrete-300 bg-ivory-200/80 flex items-center justify-between sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-0.5 bg-terracotta-500 text-white text-[11px] font-mono uppercase tracking-wider">
              {selectedProject.category}
            </span>
            <span className="text-xs font-mono text-charcoal-600 hidden sm:inline">
              // {selectedProject.location} • {selectedProject.year}
            </span>
          </div>

          <button
            onClick={closeProjectModal}
            className="w-10 h-10 border border-charcoal-900/40 hover:border-charcoal-950 hover:bg-charcoal-950 hover:text-white flex items-center justify-center transition-colors cursor-pointer group"
            aria-label="Close project modal"
          >
            <X className="w-4 h-4 text-charcoal-900 group-hover:text-white transition-colors" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-6 sm:p-8 lg:p-10 space-y-8">
          {/* Main Title & Lead */}
          <div>
            <h2
              id="modal-project-title"
              className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-950 tracking-tight"
            >
              {selectedProject.title}
            </h2>
            <p className="text-sm sm:text-base font-mono text-terracotta-600 mt-2 uppercase tracking-wider">
              {selectedProject.discipline}
            </p>
          </div>

          {/* Hero Image in Modal */}
          <div
            onClick={() => openLightbox(selectedProject.heroImage, selectedProject.title)}
            className="relative w-full h-[320px] sm:h-[450px] bg-charcoal-900 overflow-hidden cursor-zoom-in group shadow-md"
          >
            <Image
              src={selectedProject.heroImage}
              alt={selectedProject.title}
              fill
              sizes="(max-width: 1200px) 100vw, 1000px"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-3 right-3 px-3 py-1 bg-charcoal-950/80 text-ivory-50 text-xs font-mono tracking-wider backdrop-blur-sm">
              CLICK TO EXPAND HIGH-RES
            </div>
          </div>

          {/* Specifications Matrix */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 bg-white border border-concrete-300">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-charcoal-500">CLIENT</span>
              <p className="font-editorial text-base font-bold text-charcoal-950 mt-0.5">{selectedProject.client}</p>
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-charcoal-500">LOCATION</span>
              <p className="font-editorial text-base font-bold text-charcoal-950 mt-0.5">{selectedProject.location}</p>
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-charcoal-500">YEAR</span>
              <p className="font-editorial text-base font-bold text-charcoal-950 mt-0.5">{selectedProject.year}</p>
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-charcoal-500">RECOGNITION</span>
              <p className="font-editorial text-base font-bold text-charcoal-950 mt-0.5">{selectedProject.awards || 'Studio Edition'}</p>
            </div>
          </div>

          {/* Editorial Content Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-concrete-300">
            <div>
              <h3 className="font-editorial text-lg font-bold uppercase tracking-wider text-charcoal-950 mb-2">
                The Brief
              </h3>
              <p className="text-sm text-charcoal-700 leading-relaxed font-sans">
                {selectedProject.brief}
              </p>
            </div>
            <div>
              <h3 className="font-editorial text-lg font-bold uppercase tracking-wider text-charcoal-950 mb-2">
                Concept & Spatial Theory
              </h3>
              <p className="text-sm text-charcoal-700 leading-relaxed font-sans">
                {selectedProject.concept}
              </p>
            </div>
            <div>
              <h3 className="font-editorial text-lg font-bold uppercase tracking-wider text-charcoal-950 mb-2">
                Approach & Realisation
              </h3>
              <p className="text-sm text-charcoal-700 leading-relaxed font-sans">
                {selectedProject.approach}
              </p>
            </div>
          </div>

          {/* Gallery Thumbnails */}
          <div>
            <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-charcoal-600 mb-4">
              GALLERY PERSPECTIVES ({selectedProject.galleryImages.length} VIEWS)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {selectedProject.galleryImages.map((img, i) => (
                <div
                  key={i}
                  onClick={() => openLightbox(img, `${selectedProject.title} — Detail ${i + 1}`)}
                  className="relative h-44 bg-charcoal-900 border border-concrete-300 overflow-hidden cursor-zoom-in group"
                >
                  <Image
                    src={img}
                    alt={`${selectedProject.title} view ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-charcoal-950/20 group-hover:bg-transparent transition-colors" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="px-6 sm:px-8 py-4 border-t border-concrete-300 bg-ivory-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href={`/work/${selectedProject.slug}`}
            onClick={closeProjectModal}
            className="text-xs font-mono font-bold uppercase tracking-wider text-charcoal-900 hover:text-terracotta-600 flex items-center gap-1.5"
          >
            <span>Open Dedicated Project Monograph Page</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <button
            onClick={() => {
              closeProjectModal();
              openEnquiryModal();
            }}
            className="w-full sm:w-auto px-6 py-2.5 bg-terracotta-500 hover:bg-terracotta-600 text-white font-editorial text-sm font-bold uppercase tracking-wider transition-colors cursor-pointer"
          >
            Inquire About Similar Commission
          </button>
        </div>
      </div>
    </div>
  );
}
