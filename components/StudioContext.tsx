'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Project, navigationItems } from '../data/studioData';

interface StudioContextType {
  isCreativeCanvasOpen: boolean;
  openCreativeCanvas: () => void;
  closeCreativeCanvas: () => void;
  toggleCreativeCanvas: () => void;
  activeCanvasImage: string;
  setActiveCanvasImage: (img: string) => void;
  isProjectModalOpen: boolean;
  selectedProject: Project | null;
  openProjectModal: (project: Project) => void;
  closeProjectModal: () => void;
  isEnquiryModalOpen: boolean;
  openEnquiryModal: () => void;
  closeEnquiryModal: () => void;
  isLightboxOpen: boolean;
  lightboxImage: string;
  lightboxCaption: string;
  openLightbox: (img: string, caption?: string) => void;
  closeLightbox: () => void;
}

const StudioContext = createContext<StudioContextType | undefined>(undefined);

export function StudioProvider({ children }: { children: React.ReactNode }) {
  const [isCreativeCanvasOpen, setIsCreativeCanvasOpen] = useState(false);
  const [activeCanvasImage, setActiveCanvasImage] = useState(navigationItems[0].image);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState('');
  const [lightboxCaption, setLightboxCaption] = useState('');

  const openCreativeCanvas = () => setIsCreativeCanvasOpen(true);
  const closeCreativeCanvas = () => setIsCreativeCanvasOpen(false);
  const toggleCreativeCanvas = () => setIsCreativeCanvasOpen((prev) => !prev);

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setIsProjectModalOpen(true);
  };
  const closeProjectModal = () => {
    setIsProjectModalOpen(false);
    setSelectedProject(null);
  };

  const openEnquiryModal = () => setIsEnquiryModalOpen(true);
  const closeEnquiryModal = () => setIsEnquiryModalOpen(false);

  const openLightbox = (img: string, caption = '') => {
    setLightboxImage(img);
    setLightboxCaption(caption);
    setIsLightboxOpen(true);
  };
  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setLightboxImage('');
    setLightboxCaption('');
  };

  // Keyboard accessibility: Escape closes any active overlay
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isLightboxOpen) closeLightbox();
        else if (isProjectModalOpen) closeProjectModal();
        else if (isEnquiryModalOpen) closeEnquiryModal();
        else if (isCreativeCanvasOpen) closeCreativeCanvas();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, isProjectModalOpen, isEnquiryModalOpen, isCreativeCanvasOpen]);

  // Lock scroll when overlays are active
  useEffect(() => {
    if (isCreativeCanvasOpen || isProjectModalOpen || isEnquiryModalOpen || isLightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isCreativeCanvasOpen, isProjectModalOpen, isEnquiryModalOpen, isLightboxOpen]);

  return (
    <StudioContext.Provider
      value={{
        isCreativeCanvasOpen,
        openCreativeCanvas,
        closeCreativeCanvas,
        toggleCreativeCanvas,
        activeCanvasImage,
        setActiveCanvasImage,
        isProjectModalOpen,
        selectedProject,
        openProjectModal,
        closeProjectModal,
        isEnquiryModalOpen,
        openEnquiryModal,
        closeEnquiryModal,
        isLightboxOpen,
        lightboxImage,
        lightboxCaption,
        openLightbox,
        closeLightbox,
      }}
    >
      {children}
    </StudioContext.Provider>
  );
}

export function useStudio() {
  const context = useContext(StudioContext);
  if (!context) {
    throw new Error('useStudio must be used within a StudioProvider');
  }
  return context;
}
