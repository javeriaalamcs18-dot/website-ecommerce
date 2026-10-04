'use client';

import React from 'react';
import {
  CalendarDays,
  Clock,
  MapPin,
  Users2,
  DollarSign,
  AlertTriangle,
  GraduationCap,
  Sparkles
} from 'lucide-react';

export default function ProgramDetails() {
  const details = [
    { label: 'COURSE', value: 'Shopify E-Commerce', highlight: 'Comprehensive Digital Skills', icon: GraduationCap },
    { label: 'DURATION', value: '2 Weeks', highlight: 'Fast-track Bootcamp', icon: CalendarDays },
    { label: 'PRACTICAL CLASSES', value: '10 Classes', highlight: 'Hands-on Computer Labs', icon: Sparkles },
    { label: 'TIME', value: '2:00 PM – 4:00 PM', highlight: 'Daily Afternoon Session', icon: Clock },
    { label: 'FEE', value: '100% FREE', highlight: 'Fully Sponsored by Govt', icon: DollarSign, special: true },
    { label: 'APPLICATION DEADLINE', value: '10 October 2026', highlight: 'Final Registration Date', icon: CalendarDays, urgent: true },
    { label: 'VENUE', value: 'Jawan Markaz, Sports Complex Mardan', highlight: 'Dedicated Youth Facility', icon: MapPin },
    { label: 'ELIGIBILITY', value: 'Females Only', highlight: 'Women Empowerment Focus', icon: Users2 },
    { label: 'SEATS', value: 'Limited Seats', highlight: 'Merit / First Come Selection', icon: AlertTriangle },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#004D2A] text-white relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#006B3C] rounded-full blur-[140px] pointer-events-none opacity-60" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#B7D936]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="badge-tag bg-[#B7D936] text-[#004D2A]">
            OFFICIAL PROGRAM SPECS
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            PROGRAM DETAILS
          </h2>
          <p className="text-sm sm:text-base text-white/80">
            Key official parameters verified directly from the District Administration & IT HUB announcement.
          </p>
        </div>

        {/* 3x3 Parameter Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {details.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`relative rounded-3xl p-6 sm:p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 ${
                  item.special
                    ? 'bg-gradient-to-br from-[#006B3C] to-[#004D2A] border-2 border-[#F4E500] shadow-[0_0_25px_rgba(244,229,0,0.3)]'
                    : item.urgent
                    ? 'bg-white/10 border-2 border-[#F4E500]/60'
                    : 'bg-white/5 border border-white/15 hover:border-white/30'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[11px] font-black uppercase tracking-widest text-[#B7D936]">
                      {item.label}
                    </span>
                    <h3 className={`text-xl sm:text-2xl font-black mt-1 leading-snug ${
                      item.special ? 'text-[#F4E500]' : 'text-white'
                    }`}>
                      {item.value}
                    </h3>
                  </div>
                  <div className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 ${
                    item.special
                      ? 'bg-[#F4E500] text-[#004D2A]'
                      : 'bg-white/10 text-[#B7D936]'
                  }`}>
                    <Icon className="w-5 h-5 stroke-[2.5]" />
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 text-xs font-semibold text-white/70 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F4E500]" />
                  {item.highlight}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
