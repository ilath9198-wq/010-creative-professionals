'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Check, Upload, Mail, Phone, MapPin, MessageSquare, AlertCircle, Sparkles } from 'lucide-react';
import { studioLocations } from '../../data/studioData';
import { useStudio } from '../../components/StudioContext';

export default function ContactPage() {
  const { openLightbox } = useStudio();

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

  const serviceOptions = [
    'Concept Feasibility',
    'Full Architectural Blueprint',
    'Interior Joinery & Materials',
    'Visual Identity & Monogram',
    'Packaging Architecture',
    'Digital Web & App Platform',
    'Location Photography & Film',
  ];

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
  };

  return (
    <div className="w-full bg-ivory-50 text-charcoal-950">
      {/* 1. ATMOSPHERIC PHOTOGRAPHIC HERO */}
      <section className="relative min-h-[75vh] md:min-h-[82vh] flex items-center justify-center overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2000&q=85"
            alt="ATELIER N°10 Architectural Consultation & Drafting"
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
              <span>START A PROJECT // COMMISSIONS 2026–2027</span>
            </div>

            <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-white leading-[1.06] mb-6 drop-shadow-md">
              Begin a Spatial or <br />
              <span className="italic font-normal lowercase font-editorial text-concrete-200">
                Identity Dialogue
              </span>
            </h1>

            <p className="font-editorial text-lg sm:text-2xl italic text-concrete-200 leading-relaxed mb-8 max-w-2xl font-normal drop-shadow">
              &ldquo;We accept a selected number of commissions each calendar year to ensure profound craft focus and direct partner involvement from first sketch to completion.&rdquo;
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#enquiry-form-section"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-terracotta-500 hover:bg-terracotta-600 text-white font-editorial font-bold text-base tracking-wider uppercase shadow-terracotta transition-all cursor-pointer"
              >
                <span>Complete Project Brief</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/41442801090"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-charcoal-900/90 hover:bg-charcoal-800 text-white border-2 border-concrete-400/70 font-editorial font-bold text-base tracking-wider uppercase backdrop-blur-md transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-terracotta-400" />
                <span>WhatsApp Concierge</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THREE STUDIO HUBS */}
      <section className="bg-ivory-100 border-b border-concrete-300 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {studioLocations.map((loc) => (
            <div key={loc.city} className="bg-white border border-concrete-300 p-8 space-y-4 shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="font-editorial text-3xl font-bold text-charcoal-950">{loc.city}</h3>
                <span className="text-[10px] font-mono uppercase bg-ivory-200 px-2 py-0.5 border border-concrete-300 text-terracotta-600">
                  ACTIVE STUDIO
                </span>
              </div>
              <p className="text-xs font-mono text-terracotta-600 uppercase font-bold">{loc.role}</p>
              <div className="space-y-2 text-xs font-sans text-charcoal-700 pt-2 border-t border-concrete-200">
                <p className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-terracotta-500 shrink-0 mt-0.5" />
                  <span>{loc.address}</span>
                </p>
                <p className="flex items-center gap-2 font-mono">
                  <Phone className="w-3.5 h-3.5 text-terracotta-500 shrink-0" />
                  <span>{loc.phone}</span>
                </p>
                <p className="flex items-center gap-2 font-mono">
                  <Mail className="w-3.5 h-3.5 text-terracotta-500 shrink-0" />
                  <span>{loc.email}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. MAIN ENQUIRY FORM SECTION */}
      <section id="enquiry-form-section" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-concrete-300 p-8 sm:p-12 lg:p-14 shadow-studio">
            {submitted ? (
              <div className="py-12 text-center space-y-6">
                <div className="w-16 h-16 bg-terracotta-100 text-terracotta-600 rounded-full mx-auto flex items-center justify-center">
                  <Check className="w-8 h-8" />
                </div>
                <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-charcoal-950">
                  Commission Brief Received
                </h2>
                <p className="text-sm font-sans text-charcoal-600 max-w-lg mx-auto leading-relaxed">
                  Thank you, <span className="font-bold text-charcoal-950">{formData.name}</span>. Your project parameters have been compiled under registry dossier{' '}
                  <span className="font-mono font-bold text-charcoal-950 bg-concrete-200 px-2 py-0.5">{submissionId}</span>.
                  A partner from our Zürich or Milan office will reach out directly to schedule a preliminary review.
                </p>
                <div className="p-4 bg-ivory-100 border border-concrete-300 max-w-md mx-auto text-left text-xs font-mono text-charcoal-700 space-y-1">
                  <p>DISCIPLINE: {formData.projectType}</p>
                  <p>BUDGET TIER: {formData.budget}</p>
                  <p>TARGET TIMELINE: {formData.timeline}</p>
                  <p>ATTACHMENT: {formData.fileName || 'None provided'}</p>
                </div>
                <p className="text-[11px] font-mono text-concrete-500 italic">
                  * Note: Demonstration simulation. Actual enquiry delivery requires live backend API integration.
                </p>
                <button
                  onClick={handleReset}
                  className="px-8 py-3 bg-charcoal-950 hover:bg-charcoal-800 text-white font-editorial font-bold uppercase tracking-wider text-sm transition-colors cursor-pointer"
                >
                  Submit Another Brief
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <span className="text-xs font-mono font-bold text-terracotta-600 uppercase tracking-widest">
                    PROJECT INITIATION DOSSIER
                  </span>
                  <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-charcoal-950 mt-1">
                    Tell Us About Your Vision
                  </h2>
                  <p className="text-xs sm:text-sm text-charcoal-600 mt-2 font-sans leading-relaxed">
                    Please provide initial details regarding your architectural site, residential renovation, or brand identity aspirations.
                  </p>
                </div>

                {/* 1. Contact Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-charcoal-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Adrian Meier"
                      className="w-full bg-ivory-50 border border-concrete-300 px-4 py-3 text-sm font-sans text-charcoal-950 focus:outline-none focus:border-terracotta-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-charcoal-700 mb-1">
                      Company / Foundation
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Meier Heritage Trust"
                      className="w-full bg-ivory-50 border border-concrete-300 px-4 py-3 text-sm font-sans text-charcoal-950 focus:outline-none focus:border-terracotta-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-charcoal-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="adrian@meier.ch"
                      className="w-full bg-ivory-50 border border-concrete-300 px-4 py-3 text-sm font-sans text-charcoal-950 focus:outline-none focus:border-terracotta-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-charcoal-700 mb-1">
                      Telephone
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+41 44 000 00 00"
                      className="w-full bg-ivory-50 border border-concrete-300 px-4 py-3 text-sm font-sans text-charcoal-950 focus:outline-none focus:border-terracotta-500"
                    />
                  </div>
                </div>

                {/* 2. Project Parameters */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4 border-t border-concrete-200">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-charcoal-700 mb-1">
                      Primary Creative Discipline
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full bg-ivory-50 border border-concrete-300 px-4 py-3 text-sm font-sans text-charcoal-950 focus:outline-none focus:border-terracotta-500"
                    >
                      <option value="Architecture">Architecture & Spatial Design</option>
                      <option value="Interior Design">Interior Architecture & Curation</option>
                      <option value="Branding & Identity">Branding, Identity & Packaging</option>
                      <option value="Digital & UI/UX">Digital Platform & UI/UX</option>
                      <option value="Product Design">Furniture & Industrial Design</option>
                      <option value="Photography">Photography & Creative Direction</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-charcoal-700 mb-1">
                      Estimated Project Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-ivory-50 border border-concrete-300 px-4 py-3 text-sm font-sans text-charcoal-950 focus:outline-none focus:border-terracotta-500"
                    >
                      <option value="$50k - $100k">$50,000 – $100,000 (Identity & Advisory)</option>
                      <option value="$100k - $250k">$100,000 – $250,000 (Interiors & Digital)</option>
                      <option value="$250k - $500k">$250,000 – $500,000 (Major Scheme)</option>
                      <option value="$500k+">$500,000+ (Full Architectural Scheme)</option>
                    </select>
                  </div>
                </div>

                {/* 3. Multi-Select Services */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-charcoal-700 mb-2">
                    Scope of Capabilities Required
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
                              : 'bg-ivory-50 text-charcoal-700 border-concrete-300 hover:border-charcoal-400'
                          }`}
                        >
                          {active ? '✓ ' : '+ '}
                          {srv}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 4. Description */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-charcoal-700 mb-1">
                    Project Brief & Ambitions *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Describe the architectural site, interior square footage, material preferences, or brand objectives..."
                    className="w-full bg-ivory-50 border border-concrete-300 px-4 py-3 text-sm font-sans text-charcoal-950 focus:outline-none focus:border-terracotta-500"
                  />
                </div>

                {/* 5. File Upload */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-charcoal-700 mb-1">
                    Attach Design References or RFP (Optional)
                  </label>
                  <div className="border border-dashed border-concrete-400 bg-ivory-50 p-6 text-center">
                    <label className="cursor-pointer inline-flex items-center gap-2 text-xs font-mono text-charcoal-700 hover:text-terracotta-600">
                      <Upload className="w-4 h-4 text-terracotta-500" />
                      <span>{formData.fileName ? `Uploaded: ${formData.fileName}` : 'Upload PDF, CAD drawing, or moodboard (up to 50MB)'}</span>
                      <input
                        type="file"
                        onChange={handleFileUpload}
                        className="hidden"
                        accept=".pdf,.dwg,.jpg,.png,.zip"
                      />
                    </label>
                  </div>
                </div>

                {/* Submit button */}
                <div className="pt-4 border-t border-concrete-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-[11px] font-mono text-concrete-500 italic">
                    * Confirmed confidentiality under Swiss practice standards.
                  </p>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-10 py-4 bg-terracotta-500 hover:bg-terracotta-600 text-white font-editorial text-base font-bold uppercase tracking-wider shadow-terracotta transition-all cursor-pointer"
                  >
                    Submit Commission Dossier
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
