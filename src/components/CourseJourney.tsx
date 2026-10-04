'use client';

import React from 'react';
import { Compass, GraduationCap, Cpu, Rocket, TrendingUp, Check } from 'lucide-react';

export default function CourseJourney() {
  const steps = [
    {
      stage: '01',
      title: 'DISCOVER',
      subtitle: 'E-Commerce Landscapes',
      desc: 'Understand how global and local Shopify ecosystems work and identify digital commerce potentials.',
      icon: Compass,
    },
    {
      stage: '02',
      title: 'LEARN',
      subtitle: 'Core Mechanics',
      desc: 'Master product sourcing, niche selection, supplier relations, and basic Shopify architecture.',
      icon: GraduationCap,
    },
    {
      stage: '03',
      title: 'PRACTICE',
      subtitle: 'Hands-on Labs',
      desc: 'Create real stores, configure settings, upload items, and design mobile-responsive storefronts.',
      icon: Cpu,
    },
    {
      stage: '04',
      title: 'BUILD',
      subtitle: 'Store Operations',
      desc: 'Connect orders, customer notifications, Cash on Delivery logistics, and inventory channels.',
      icon: Rocket,
    },
    {
      stage: '05',
      title: 'GROW',
      subtitle: 'Marketing & Scale',
      desc: 'Apply modern social media promotion methods to drive traffic, acquire customers, and expand.',
      icon: TrendingUp,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#004D2A] text-white relative overflow-hidden">
      {/* Decorative background graphics */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#F4E500 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#006B3C] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B7D936]/20 text-[#B7D936] text-xs font-bold uppercase tracking-widest">
            Structured Trajectory
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            COURSE JOURNEY
          </h2>
          <p className="text-sm sm:text-base text-white/80">
            A step-by-step roadmap from your first login to operating an interactive Shopify store.
          </p>
        </div>

        {/* Journey Timeline */}
        <div className="relative">
          {/* Horizontal line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-1 bg-gradient-to-r from-[#B7D936] via-[#F4E500] to-[#B7D936] -translate-y-6 z-0 opacity-40 rounded-full" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="group bg-white/5 hover:bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/15 hover:border-[#F4E500]/50 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Top indicator & icon */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-xs font-black text-[#004D2A] bg-[#B7D936] px-2.5 py-1 rounded-lg">
                        {step.stage}
                      </span>
                      <div className="w-12 h-12 rounded-2xl bg-[#006B3C] group-hover:bg-[#F4E500] text-[#F4E500] group-hover:text-[#004D2A] flex items-center justify-center transition-colors shadow-md">
                        <Icon className="w-6 h-6 stroke-[2]" />
                      </div>
                    </div>

                    <h3 className="text-xl font-black text-white group-hover:text-[#F4E500] transition-colors mb-1">
                      {step.title}
                    </h3>
                    <div className="text-xs font-semibold text-[#B7D936] mb-3 uppercase tracking-wider">
                      {step.subtitle}
                    </div>
                    <p className="text-xs text-white/70 leading-relaxed font-normal">
                      {step.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-white/10 flex items-center gap-1.5 text-[11px] text-white/60">
                    <Check className="w-3.5 h-3.5 text-[#B7D936]" />
                    <span>Cohort Milestone</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
