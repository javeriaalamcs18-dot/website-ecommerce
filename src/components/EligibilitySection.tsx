'use client';

import React from 'react';
import { CheckCircle2, AlertCircle, HeartHandshake, Sparkles, UserCheck } from 'lucide-react';

export default function EligibilitySection() {
  const criteria = [
    {
      title: 'Female Applicants Only',
      desc: 'This cohort is dedicated exclusively to empowering female youth with digital skills and online commerce capability.',
      badge: 'Official Requirement'
    },
    {
      title: 'Interest in Shopify & E-Commerce',
      desc: 'Enthusiasm and genuine curiosity to learn online store setup, product evaluation, and digital sales workflows.',
      badge: 'Motivation'
    },
    {
      title: 'Able to Attend On-Site Training',
      desc: 'Physically present at Jawan Markaz, Sports Complex Mardan for the 10 scheduled in-person practical lab sessions.',
      badge: 'Attendance'
    },
    {
      title: 'Available During Stated Schedule',
      desc: 'Commitment to attend daily sessions during the afternoon window from 2:00 PM to 4:00 PM throughout the 2-week course.',
      badge: 'Schedule'
    },
  ];

  return (
    <section id="eligibility" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#006B3C]/10 text-[#006B3C] text-xs font-bold uppercase tracking-wider">
            <UserCheck className="w-3.5 h-3.5" />
            Applicant Criteria
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#004D2A] tracking-tight">
            WHO CAN APPLY?
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Official eligibility parameters announced by District Administration and IT HUB Mardan.
          </p>
        </div>

        {/* 2x2 Grid of Criteria */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {criteria.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#F4FAF6] rounded-3xl p-6 sm:p-7 border-2 border-[#006B3C]/10 hover:border-[#006B3C]/30 transition-all shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold text-[#006B3C] bg-white px-2.5 py-1 rounded-lg border border-gray-200">
                    {item.badge}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#006B3C] text-[#F4E500] flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 stroke-[2.5]" />
                  </div>
                </div>
                <h3 className="text-xl font-black text-[#004D2A] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Important Boundary Notice (Rule 29: Do not invent age/education criteria) */}
        <div className="mt-10 max-w-3xl mx-auto p-4 rounded-2xl bg-[#F4FAF6] border border-gray-200 text-center">
          <div className="flex items-center justify-center gap-2 text-xs text-gray-600 font-semibold">
            <AlertCircle className="w-4 h-4 text-[#006B3C]" />
            <span>Applicants from all educational backgrounds with basic computer interest are encouraged to apply.</span>
          </div>
        </div>

      </div>
    </section>
  );
}
