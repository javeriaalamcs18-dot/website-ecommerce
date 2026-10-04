'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Store,
  Search,
  Palette,
  FileSpreadsheet,
  Truck,
  Megaphone,
  ArrowRight,
  Layers,
  Sparkles
} from 'lucide-react';

export default function WhatYouWillLearn() {
  const learningModules = [
    {
      num: '01',
      title: 'STORE SETUP',
      desc: 'Learn the basics of setting up an online Shopify store from scratch.',
      icon: Store,
      skills: ['Store settings', 'Domain basics', 'Navigation architecture', 'Payment options'],
    },
    {
      num: '02',
      title: 'PRODUCT RESEARCH',
      desc: 'Understand the fundamentals of finding and evaluating high-demand products.',
      icon: Search,
      skills: ['Niche selection', 'Competitor benchmarking', 'Trend validation', 'Margin analysis'],
    },
    {
      num: '03',
      title: 'STORE DESIGN',
      desc: 'Learn how to create an attractive, trustworthy, and user-friendly online store layout.',
      icon: Palette,
      skills: ['Theme customization', 'Mobile optimization', 'Banner design', 'Branding elements'],
    },
    {
      num: '04',
      title: 'PRODUCT LISTINGS',
      desc: 'Learn how to organize, optimize, and present products effectively to convert visitors.',
      icon: FileSpreadsheet,
      skills: ['Compelling copy', 'Image galleries', 'Pricing strategies', 'Variant management'],
    },
    {
      num: '05',
      title: 'ORDERS & DELIVERY',
      desc: 'Understand basic order fulfillment, inventory tracking, and local courier workflows.',
      icon: Truck,
      skills: ['Cash on delivery (COD)', 'Order tracking', 'Customer communication', 'Returns workflow'],
    },
    {
      num: '06',
      title: 'DIGITAL MARKETING',
      desc: 'Learn fundamental organic and paid methods for promoting and driving traffic to an online store.',
      icon: Megaphone,
      skills: ['Social media selling', 'TikTok/Meta ads basics', 'Discount offers', 'Customer retention'],
    },
  ];

  return (
    <section id="course" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#006B3C]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#F4E500]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#006B3C]/10 text-[#006B3C] font-bold text-xs uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            Curriculum Highlights
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#004D2A] tracking-tight">
            WHAT YOU WILL LEARN
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-normal">
            Practical skills designed to introduce participants to the fundamentals of Shopify e-commerce.
          </p>
        </div>

        {/* 3x2 Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {learningModules.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.num}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="group relative bg-[#F4FAF6] hover:bg-white rounded-3xl p-7 border-2 border-transparent hover:border-[#006B3C]/20 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Yellow accent marker on hover */}
                <div className="absolute top-0 left-8 right-8 h-1 bg-[#F4E500] rounded-b-md opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Card Header: Number & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-black text-[#004D2A] bg-white group-hover:bg-[#006B3C] group-hover:text-[#F4E500] px-3 py-1.5 rounded-xl border border-gray-200 group-hover:border-transparent transition-colors shadow-xs">
                      CARD {item.num}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-white group-hover:bg-[#006B3C] border border-[#006B3C]/15 flex items-center justify-center text-[#006B3C] group-hover:text-[#F4E500] group-hover:scale-110 transition-all shadow-sm">
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-black text-[#004D2A] group-hover:text-[#006B3C] transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-normal mb-6">
                    {item.desc}
                  </p>
                </div>

                {/* Practical Skill Tags */}
                <div className="pt-4 border-t border-gray-200/80 group-hover:border-[#006B3C]/15 transition-colors">
                  <div className="text-[11px] font-bold uppercase text-[#006B3C] tracking-wider mb-2 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#B7D936]" /> Core Elements:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {item.skills.map((s, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-medium bg-white group-hover:bg-[#F4FAF6] text-gray-700 px-2 py-0.5 rounded-md border border-gray-200"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* CTA banner below cards */}
        <div className="mt-14 text-center">
          <a
            href="#apply"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-black text-sm text-[#004D2A] bg-[#F4E500] hover:bg-yellow-400 shadow-md hover:shadow-lg transition-transform hover:-translate-y-0.5"
          >
            <span>APPLY TO JOIN THE NEXT COHORT</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </a>
        </div>

      </div>
    </section>
  );
}
