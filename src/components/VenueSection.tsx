'use client';

import React from 'react';
import Image from 'next/image';
import { MapPin, Navigation, Compass, ExternalLink, Calendar, Clock, CheckCircle2 } from 'lucide-react';

export default function VenueSection() {
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=34.143804,72.023064";

  return (
    <section className="py-20 lg:py-28 bg-[#F4FAF6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#006B3C]/10 text-[#006B3C] text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            Official Training Location
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#004D2A] tracking-tight">
            JAWAN MARKAZ
          </h2>
          <p className="text-base sm:text-lg font-bold text-[#006B3C]">
            SPORTS COMPLEX MARDAN
          </p>
        </div>

        {/* Venue Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          
          {/* Details Card */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-7 sm:p-9 border-2 border-[#006B3C]/15 shadow-xl space-y-6">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-[#006B3C]">
                Official Facility
              </span>
              <h3 className="text-2xl font-black text-[#004D2A] mt-1">
                Jawan Markaz Youth Training Center
              </h3>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                A state-of-the-art youth empowerment and digital literacy hub located within the landmark Sports Complex Mardan, equipped with modern computer lab facilities for practical e-commerce learning.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#F4FAF6] border border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-[#006B3C] text-[#F4E500] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-semibold uppercase">GPS Verified Location</div>
                  <div className="text-sm font-bold text-[#004D2A]">42vf+hh3, Mardan, Khyber Pakhtunkhwa 23200</div>
                  <div className="text-[11px] font-mono text-gray-500 mt-0.5">Lat 34.143804° Long 72.023064°</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#F4FAF6] border border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-[#006B3C] text-[#F4E500] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-semibold uppercase">Batch Timing</div>
                  <div className="text-sm font-bold text-[#004D2A]">2:00 PM – 4:00 PM (Daily Classes)</div>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl text-xs font-black text-[#004D2A] bg-[#F4E500] hover:bg-yellow-400 transition-transform hover:-translate-y-0.5 shadow-md"
              >
                <span>OPEN IN GOOGLE MAPS</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Actual Building Photo Card */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#006B3C]/20 shadow-2xl bg-[#004D2A] group">
              
              {/* Actual photo of Jawan Markaz Mardan */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/10">
                <Image
                  src="/assets/jawan-markaz-building.jpg"
                  alt="Jawan Markaz Mardan Building Exterior at Sports Complex"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  priority
                />
                
                {/* Badge Overlay */}
                <div className="absolute top-3 left-3 bg-[#004D2A]/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20 text-white text-xs font-bold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#B7D936] animate-pulse" />
                  <span>Jawan Markaz Mardan Facility</span>
                </div>
              </div>

              {/* Information Footbar on Card */}
              <div className="p-4 bg-[#004D2A] text-white flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white">Sports Complex Mardan</h4>
                  <p className="text-[11px] text-[#B7D936]">Verified On-Site Training Center</p>
                </div>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-bold text-[#F4E500] flex items-center gap-1.5 transition-colors"
                >
                  <Compass className="w-3.5 h-3.5" />
                  Directions
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
