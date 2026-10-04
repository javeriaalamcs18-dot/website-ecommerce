'use client';

import React from 'react';
import Image from 'next/image';
import { ShieldCheck, Building2, Award } from 'lucide-react';

export default function OrganizersSection() {
  const organizers = [
    {
      name: 'IT HUB MARDAN',
      role: 'Implementing Technology & Skills Partner',
      tag: 'Empowering Students, Building Futures',
      img: '/assets/it-hub-logo.png',
      width: 150,
      height: 60,
    },
    {
      name: 'DISTRICT YOUTH OFFICE MARDAN',
      role: 'Lead Youth Development Authority',
      tag: 'Youth Empowerment Initiative',
      img: '/assets/youth-office-logo.png',
      width: 170,
      height: 60,
    },
    {
      name: 'DISTRICT ADMINISTRATION MARDAN',
      role: 'Government Governance & Patronage',
      tag: 'Public Service & Youth Advancement',
      img: '/assets/govt-emblem.png',
      width: 70,
      height: 70,
    },
  ];

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#006B3C]/10 text-[#006B3C] text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5" />
            Institutional Collaboration
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#004D2A] tracking-tight">
            ORGANIZED BY
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            A united public-private youth development partnership for Khyber Pakhtunkhwa.
          </p>
        </div>

        {/* 3 Organizers Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {organizers.map((org, idx) => (
            <div
              key={idx}
              className="bg-[#F4FAF6] rounded-3xl p-8 border-2 border-[#006B3C]/10 text-center flex flex-col items-center justify-between hover:border-[#006B3C]/30 transition-all shadow-xs hover:shadow-md group"
            >
              <div className="w-full flex flex-col items-center">
                {/* Logo Box */}
                <div className="h-24 flex items-center justify-center p-3 bg-white rounded-2xl border border-gray-200 group-hover:shadow-md transition-shadow w-full max-w-[220px]">
                  <Image
                    src={org.img}
                    alt={org.name}
                    width={org.width}
                    height={org.height}
                    className="max-h-16 w-auto object-contain"
                  />
                </div>

                <h3 className="text-lg font-black text-[#004D2A] mt-5">
                  {org.name}
                </h3>
                <div className="text-xs font-semibold text-[#006B3C] mt-1">
                  {org.role}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200/80 w-full text-[11px] text-gray-500 font-medium">
                {org.tag}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
