'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Maximize2, X, ZoomIn, Download, ExternalLink, ShieldAlert } from 'lucide-react';

export default function OfficialPosterSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="py-20 lg:py-28 bg-[#F4FAF6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="badge-tag bg-[#006B3C] text-[#F4E500]">
            Primary Source Of Truth
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#004D2A] tracking-tight">
            OFFICIAL PROGRAM ANNOUNCEMENT
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            View the verified promotional announcement published by District Youth Office Mardan and IT HUB.
          </p>
        </div>

        {/* Poster Showcase Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-3 sm:p-5 border-2 border-[#006B3C]/15 shadow-2xl relative group">
            
            <div className="relative rounded-2xl overflow-hidden aspect-[16/8] bg-black/5 cursor-pointer"
                 onClick={() => setModalOpen(true)}>
              <Image
                src="/assets/official-poster.jpg"
                alt="Official Promotional Poster for Next Gen Smart Skills For Youth - Shopify E-Commerce Course"
                width={1600}
                height={800}
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                priority
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#004D2A]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="px-5 py-2.5 rounded-full bg-white/90 text-[#004D2A] font-bold text-xs flex items-center gap-2 shadow-xl backdrop-blur-sm">
                  <ZoomIn className="w-4 h-4 text-[#006B3C]" />
                  <span>Click to Zoom & View Full Resolution</span>
                </div>
              </div>
            </div>

            {/* Poster Details Bar */}
            <div className="mt-4 px-3 py-2 flex flex-wrap items-center justify-between gap-3 text-xs text-gray-600">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-semibold text-gray-800">Official Announcement Image (1600 × 800)</span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setModalOpen(true)}
                  className="font-bold text-[#006B3C] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <Maximize2 className="w-3.5 h-3.5" /> Fullscreen View
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-6xl w-full max-h-[90vh] flex flex-col items-center">
            
            {/* Close button */}
            <button
              onClick={() => setModalOpen(false)}
              className="absolute -top-12 right-0 p-2 rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/20">
              <Image
                src="/assets/official-poster.jpg"
                alt="Full resolution official poster"
                width={1600}
                height={800}
                className="w-full h-auto max-h-[85vh] object-contain"
              />
            </div>

            <div className="mt-3 text-white/80 text-xs text-center font-medium">
              Official Program Announcement — District Administration / District Youth Office / IT HUB Mardan
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
