'use client';

import React from 'react';
import { Clock, Calendar, MapPin, Users, Award, BookCheck } from 'lucide-react';

export default function QuickInfoBar() {
  const infoCards = [
    {
      num: '01',
      title: 'DURATION',
      detail: '2 Weeks',
      sub: 'Intensive Training',
      icon: Calendar,
      accent: 'text-[#006B3C]'
    },
    {
      num: '02',
      title: 'PRACTICAL CLASSES',
      detail: '10 Classes',
      sub: 'Hands-on Lab Work',
      icon: BookCheck,
      accent: 'text-[#006B3C]'
    },
    {
      num: '03',
      title: 'TIME',
      detail: '2:00 PM – 4:00 PM',
      sub: 'Afternoon Schedule',
      icon: Clock,
      accent: 'text-[#006B3C]'
    },
    {
      num: '04',
      title: 'VENUE',
      detail: 'Jawan Markaz',
      sub: 'Sports Complex Mardan',
      icon: MapPin,
      accent: 'text-[#006B3C]'
    },
  ];

  return (
    <div className="relative z-30 -mt-8 sm:-mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,107,60,0.12)] border border-[#006B3C]/10 p-4 sm:p-7">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
          {infoCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={card.num}
                className={`flex items-start gap-4 ${
                  idx > 0 ? 'pt-4 sm:pt-0 sm:pl-6' : ''
                } group hover:-translate-y-0.5 transition-transform`}
              >
                <div className="w-12 h-12 rounded-2xl bg-[#F4FAF6] group-hover:bg-[#006B3C] border border-[#006B3C]/15 flex items-center justify-center shrink-0 transition-colors shadow-sm">
                  <Icon className="w-6 h-6 text-[#006B3C] group-hover:text-[#F4E500] transition-colors" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-black text-[#B7D936] bg-[#004D2A] px-2 py-0.5 rounded-md">
                      {card.num}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                      {card.title}
                    </span>
                  </div>
                  <div className="text-lg font-black text-[#004D2A] mt-1 group-hover:text-[#006B3C] transition-colors">
                    {card.detail}
                  </div>
                  <div className="text-xs text-gray-500 font-medium">
                    {card.sub}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
