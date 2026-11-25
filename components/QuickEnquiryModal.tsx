'use client';

import React, { useState } from 'react';
import { X, Check, Upload, ArrowRight, Sparkles, AlertCircle } from 'lucide-react';
import { useStudio } from './StudioContext';

export default function QuickEnquiryModal() {
  const { isEnquiryModalOpen, closeEnquiryModal } = useStudio();

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: 'Architecture',
    services: [] as string[],
    budget: '$100k - $250k',
    timeline: 'Q3-Q4 2026',
    description: '',
    fileName: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState('');

  if (!isEnquiryModalOpen) return null;

  const handleServiceToggle = (srv: string) => {
    setFormData((prev) => {
      const exists = prev.services.includes(srv);
      return {
        ...prev,
        services: exists ? prev.services.filter((s) => s !== srv) : [...prev.services, srv],
      };
    });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, fileName: e.target.files![0].name }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = `ATEL-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setSubmissionId(id);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      projectType: 'Architecture',
      services: [],
      budget: '$100k - $250k',
      timeline: 'Q3-Q4 2026',
      description: '',
      fileName: '',
    });
    closeEnquiryModal();
  };

  const serviceOptions = [
    'Concept Feasibility',
    'Full Architectural Blueprint',
    'Interior Joinery & Materials',
    'Visual Identity & Monogram',
    'Packaging Architecture',
    'Digital Web & App Platform',
    'Location Photography & Film',
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10">
      {/* Backdrop */}
      <div
        onClick={closeEnquiryModal}
        className="absolute inset-0 bg-charcoal-950/80 backdrop-blur-md cursor-pointer animate-fadeIn"
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div
        className="relative w-full max-w-3xl max-h-[92vh] bg-ivory-100 text-charcoal-950 border border-concrete-300 shadow-2xl flex flex-col overflow-hidden z-10 animate-scaleUp"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-enquiry-title"
      >
        {/* Header */}
        <div className="px-6 sm:px-8 py-5 border-b border-concrete-300 bg-ivory-200/90 flex items-center justify-between sticky top-0 z-20">
          <div>
            <span className="text-[10px] font-mono tracking-[0.25em] text-terracotta-600 uppercase">
              // PROJECT INITIATION DOSSIER
            </span>
            <h2 id="modal-enquiry-title" className="font-editorial text-2xl sm:text-3xl font-bold text-charcoal-950 mt-0.5">
              Start a Project Commission
            </h2>
          </div>

          <button
            onClick={closeEnquiryModal}
            className="w-10 h-10 border border-charcoal-900/40 hover:border-charcoal-950 hover:bg-charcoal-950 hover:text-white flex items-center justify-center transition-colors cursor-pointer group"
            aria-label="Close project modal"
          >
            <X className="w-4 h-4 text-charcoal-900 group-hover:text-white transition-colors" />
          </button>
        </div>

        {/* Body */}
        <div className="overflow-y-auto p-6 sm:p-8 lg:p-10">
          {submitted ? (
            <div className="py-10 text-center space-y-6">
              <div className="w-16 h-16 bg-terracotta-100 text-terracotta-600 rounded-full mx-auto flex items-center justify-center">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="font-editorial text-3xl font-bold text-charcoal-950">
                Brief Received with Gratitude
              </h3>
              <p className="text-sm font-sans text-charcoal-600 max-w-md mx-auto leading-relaxed">
                Your commission inquiry has been registered under reference dossier{' '}
                <span className="font-mono font-bold text-charcoal-950 bg-concrete-200 px-2 py-0.5">{submissionId}</span>.
                Our partners in Zürich or Milan will review your parameters and respond within 24 business hours.
              </p>
              <div className="p-4 bg-white border border-concrete-300 max-w-sm mx-auto text-left text-xs font-mono text-charcoal-600 space-y-1">
                <p>PATRON: {formData.name} ({formData.company || 'Private'})</p>
                <p>DISCIPLINE: {formData.projectType}</p>
                <p>ALLOCATION: {formData.budget}</p>
                <p>TIMELINE: {formData.timeline}</p>
              </div>
              <p className="text-[11px] font-mono text-concrete-500 italic">
                * Note: Demonstration simulation. No actual email transmission occurred.
              </p>
              <button
                onClick={handleReset}
                className="px-8 py-3 bg-charcoal-950 hover:bg-charcoal-800 text-white font-editorial font-bold uppercase tracking-wider text-sm transition-colors cursor-pointer"
              >
                Close & Return to Studio
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <p className="text-xs text-charcoal-600 font-sans leading-relaxed">
                Please complete the following brief. We engage with a curated number of architectural, interior, and identity commissions annually to safeguard craft intensity.
              </p>

              {/* 1. Contact Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-charcoal-600 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Adrian Meier"
                    className="w-full bg-white border border-concrete-300 px-3.5 py-2.5 text-sm font-sans text-charcoal-950 focus:outline-none focus:border-terracotta-500"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-charcoal-600 mb-1">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Meier Foundation"
                    className="w-full bg-white border border-concrete-300 px-3.5 py-2.5 text-sm font-sans text-charcoal-950 focus:outline-none focus:border-terracotta-500"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-charcoal-600 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="adrian@foundation.ch"
                    className="w-full bg-white border border-concrete-300 px-3.5 py-2.5 text-sm font-sans text-charcoal-950 focus:outline-none focus:border-terracotta-500"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-charcoal-600 mb-1">
                    Telephone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+41 44 000 00 00"
                    className="w-full bg-white border border-concrete-300 px-3.5 py-2.5 text-sm font-sans text-charcoal-950 focus:outline-none focus:border-terracotta-500"
                  />
                </div>
              </div>

              {/* 2. Primary Discipline & Scope */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-charcoal-600 mb-1">
                    Primary Creative Discipline
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-white border border-concrete-300 px-3.5 py-2.5 text-sm font-sans text-charcoal-950 focus:outline-none focus:border-terracotta-500"
                  >
                    <option value="Architecture">Architecture & Spatial Design</option>
                    <option value="Interior Design">Interior Architecture & Living Spaces</option>
                    <option value="Branding & Identity">Branding, Identity & Packaging</option>
                    <option value="Digital & UI/UX">Digital Web Platform & UI/UX</option>
                    <option value="Product Design">Furniture & Industrial Product</option>
                    <option value="Photography">Photography & Creative Direction</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-charcoal-600 mb-1">
                    Estimated Budget Tier
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-white border border-concrete-300 px-3.5 py-2.5 text-sm font-sans text-charcoal-950 focus:outline-none focus:border-terracotta-500"
                  >
                    <option value="$50k - $100k">$50,000 – $100,000 (Consultancy & Brand)</option>
                    <option value="$100k - $250k">$100,000 – $250,000 (Interiors & Digital)</option>
                    <option value="$250k - $500k">$250,000 – $500,000 (Major Spatial Scheme)</option>
                    <option value="$500k+">$500,000+ (Full Architectural Realisation)</option>
                  </select>
                </div>
              </div>

              {/* 3. Scope of Services Multi-Select */}
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-charcoal-600 mb-2">
                  Select Required Capabilities (Multi-Select)
                </label>
                <div className="flex flex-wrap gap-2">
                  {serviceOptions.map((srv) => {
                    const active = formData.services.includes(srv);
                    return (
                      <button
                        type="button"
                        key={srv}
                        onClick={() => handleServiceToggle(srv)}
                        className={`px-3 py-1.5 text-xs font-mono border transition-all cursor-pointer ${
                          active
                            ? 'bg-charcoal-950 text-white border-charcoal-950'
                            : 'bg-white text-charcoal-700 border-concrete-300 hover:border-charcoal-400'
                        }`}
                      >
                        {active ? '✓ ' : '+ '}
                        {srv}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 4. Description & Timeline */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-[11px] font-mono uppercase tracking-wider text-charcoal-600">
                    Project Brief & Spatial Vision *
                  </label>
                  <span className="text-[10px] font-mono text-concrete-500">
                    Timeline: {formData.timeline}
                  </span>
                </div>
                <textarea
                  required
                  rows={4}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Outline site location, architectural scope, brand aspirations, or desired materials..."
                  className="w-full bg-white border border-concrete-300 px-3.5 py-2.5 text-sm font-sans text-charcoal-950 focus:outline-none focus:border-terracotta-500"
                />
              </div>

              {/* 5. File Attachment Simulation */}
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-charcoal-600 mb-1">
                  Reference Dossier / Brief Attachment (Optional)
                </label>
                <div className="border border-dashed border-concrete-400 bg-white p-4 text-center">
                  <label className="cursor-pointer inline-flex items-center gap-2 text-xs font-mono text-charcoal-700 hover:text-terracotta-600">
                    <Upload className="w-4 h-4 text-terracotta-500" />
                    <span>{formData.fileName ? `Selected: ${formData.fileName}` : 'Upload PDF, DWG, or Moodboard (.pdf, .dwg, .jpg up to 50MB)'}</span>
                    <input
                      type="file"
                      onChange={handleFileUpload}
                      className="hidden"
                      accept=".pdf,.dwg,.jpg,.png,.zip"
                    />
                  </label>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4 border-t border-concrete-300 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-[11px] font-mono text-concrete-500">
                  CONFIDENTIAL • PRIVACY SAFEGUARDED
                </span>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 bg-terracotta-500 hover:bg-terracotta-600 text-white font-editorial text-sm font-bold uppercase tracking-wider shadow-terracotta transition-all cursor-pointer"
                >
                  Submit Commission Dossier
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
