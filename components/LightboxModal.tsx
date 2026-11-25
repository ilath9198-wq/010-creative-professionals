'use client';

import React from 'react';
import Image from 'next/image';
import { X, ZoomIn } from 'lucide-react';
import { useStudio } from './StudioContext';

export default function LightboxModal() {
  const { isLightboxOpen, lightboxImage, lightboxCaption, closeLightbox } = useStudio();

  if (!isLightboxOpen || !lightboxImage) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10">
      {/* Dark backdrop */}
      <div
        onClick={closeLightbox}
        className="absolute inset-0 bg-charcoal-950/95 backdrop-blur-md cursor-pointer animate-fadeIn"
        aria-hidden="true"
      />

      {/* Lightbox Content Container */}
      <div className="relative max-w-6xl max-h-[90vh] w-full flex flex-col items-center z-10 animate-scaleUp">
        {/* Close Button */}
        <button
          onClick={closeLightbox}
          className="absolute -top-12 right-0 text-white/80 hover:text-white flex items-center gap-1.5 text-xs font-mono tracking-widest uppercase cursor-pointer"
          aria-label="Close lightbox"
        >
          <span>CLOSE [ESC]</span>
          <X className="w-4 h-4" />
        </button>

        {/* High-res Image Viewport */}
        <div className="relative w-full h-[65vh] sm:h-[75vh] bg-charcoal-900 border border-charcoal-800 overflow-hidden shadow-2xl">
          <Image
            src={lightboxImage}
            alt={lightboxCaption || 'ATELIER N°10 Expanded View'}
            fill
            sizes="100vw"
            className="object-contain object-center"
            priority
          />
        </div>

        {/* Caption Bar */}
        {lightboxCaption && (
          <div className="w-full mt-3 px-4 py-2 bg-charcoal-900/90 border border-charcoal-800 text-ivory-100 flex items-center justify-between text-xs font-mono">
            <span>{lightboxCaption}</span>
            <span className="text-terracotta-400 uppercase tracking-widest text-[10px]">
              ATELIER N°10 ARCHIVE
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
