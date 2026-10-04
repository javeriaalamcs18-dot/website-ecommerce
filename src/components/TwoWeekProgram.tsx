'use client';

import React from 'react';
import { Calendar, CheckCircle2, AlertCircle, Clock, Sparkles } from 'lucide-react';

export default function TwoWeekProgram() {
  const week1Topics = [
    { name: 'Store Setup', desc: 'Shopify dashboard navigation, store preferences, domain setup and initial settings.' },
    { name: 'Product Research', desc: 'Market analysis, niche evaluation, sourcing strategies, and product viability.' },
    { name: 'Store Design', desc: 'Theme installation, header/footer configuration, branding styles and UX layout.' },
    { name: 'Product Listings', desc: 'High-converting descriptions, imagery formatting, variants, and pricing structures.' },
  ];

  const week2Topics = [
    { name: 'Orders & Delivery', desc: 'Order processing workflows, cash on delivery (COD) courier setups, and packing notes.' },
    { name: 'Digital Marketing', desc: 'Social channels promotion, organic traffic, basic paid campaign funnels.' },
    { name: 'Practical Activities', desc: 'Hands-on lab simulations, mock store presentations, and instructor evaluations.' },
  ];

  return (
    <section id="schedule" className="py-20 lg:py-28 bg-[#F4FAF6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#006B3C]/10 text-[#006B3C] text-xs font-bold uppercase tracking-wider">
            <Calendar className="w-3.5 h-3.5" />
            Curriculum Schedule
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#004D2A] tracking-tight">
            TWO-WEEK PROGRAM
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            A comprehensive, fast-paced curriculum covering 10 practical sessions.
          </p>
        </div>

        {/* Official Notice Badge (Requirement 13) */}
        <div className="max-w-3xl mx-auto mb-12 p-3.5 sm:p-4 rounded-2xl bg-amber-50 border border-amber-200/80 text-amber-900 flex items-start gap-3 shadow-xs">
          <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm leading-relaxed">
            <strong className="font-bold">Official Program Note:</strong> Course structure based on published program topics. The poster confirms 2 weeks and 10 practical classes (2:00 PM – 4:00 PM). Detailed daily session breakdowns are guided by on-site instructors at Jawan Markaz Mardan.
          </div>
        </div>

        {/* 2-Week Split Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* WEEK 1 */}
          <div className="bg-white rounded-3xl p-7 sm:p-8 border-2 border-[#006B3C]/15 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-gray-100">
                <div>
                  <span className="text-xs font-black text-[#006B3C] tracking-widest uppercase">Phase 01</span>
                  <h3 className="text-2xl font-black text-[#004D2A]">WEEK 1</h3>
                </div>
                <div className="px-3 py-1 rounded-xl bg-[#F4FAF6] border border-[#006B3C]/20 text-[#006B3C] text-xs font-bold flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" /> 5 Practical Classes
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {week1Topics.map((topic, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-[#F4FAF6] border border-gray-100 flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-[#006B3C] text-[#F4E500] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 stroke-[2.5]" />
                    </div>
                    <div>
                      <div className="text-base font-bold text-[#004D2A]">{topic.name}</div>
                      <div className="text-xs text-gray-600 mt-0.5 leading-relaxed">{topic.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 text-xs font-bold text-[#006B3C] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#B7D936]" />
              Milestone: Live Store Scaffold & Product Catalogue Created
            </div>
          </div>

          {/* WEEK 2 */}
          <div className="bg-white rounded-3xl p-7 sm:p-8 border-2 border-[#006B3C]/15 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-gray-100">
                <div>
                  <span className="text-xs font-black text-[#006B3C] tracking-widest uppercase">Phase 02</span>
                  <h3 className="text-2xl font-black text-[#004D2A]">WEEK 2</h3>
                </div>
                <div className="px-3 py-1 rounded-xl bg-[#F4FAF6] border border-[#006B3C]/20 text-[#006B3C] text-xs font-bold flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" /> 5 Practical Classes
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {week2Topics.map((topic, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-[#F4FAF6] border border-gray-100 flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-[#006B3C] text-[#F4E500] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 stroke-[2.5]" />
                    </div>
                    <div>
                      <div className="text-base font-bold text-[#004D2A]">{topic.name}</div>
                      <div className="text-xs text-gray-600 mt-0.5 leading-relaxed">{topic.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 text-xs font-bold text-[#006B3C] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#B7D936]" />
              Milestone: Full Order Lifecycle & Marketing Launch Simulation
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
