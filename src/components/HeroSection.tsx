'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Sparkles,
  ArrowRight,
  BookOpen,
  Calendar,
  Users,
  CheckCircle2,
  TrendingUp,
  ShoppingBag,
  Layers,
  Search,
  Award
} from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden hero-mesh-bg text-white">
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-96 h-96 bg-[#006B3C] rounded-full blur-[140px] opacity-70 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#B7D936]/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-10 right-1/3 w-64 h-64 bg-[#F4E500]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Official Branding, Headings, Badges, CTAs */}
          <motion.div
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* OFFICIAL LOGOS ROW (Mandatory Requirement) */}
            <div className="inline-flex flex-wrap items-center gap-3 p-2 sm:p-2.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 shadow-xl">
              {/* IT HUB Logo */}
              <div className="bg-white px-2.5 py-1.5 rounded-xl shadow-sm flex items-center justify-center">
                <Image
                  src="/assets/it-hub-logo.png"
                  alt="IT HUB MARDAN Logo"
                  width={140}
                  height={55}
                  className="h-9 sm:h-10 w-auto object-contain"
                  priority
                />
              </div>

              {/* KP Govt Emblem */}
              <div className="bg-white/95 p-1 rounded-xl shadow-sm flex items-center justify-center">
                <Image
                  src="/assets/govt-emblem.png"
                  alt="Govt of KP Emblem"
                  width={46}
                  height={46}
                  className="h-9 sm:h-10 w-auto object-contain"
                  priority
                />
              </div>

              {/* District Youth Office Mardan */}
              <div className="bg-white px-2.5 py-1.5 rounded-xl shadow-sm flex items-center justify-center">
                <Image
                  src="/assets/youth-office-logo.png"
                  alt="District Youth Office Mardan"
                  width={150}
                  height={55}
                  className="h-9 sm:h-10 w-auto object-contain"
                  priority
                />
              </div>
            </div>

            {/* Small Badge */}
            <div className="flex items-center gap-2">
              <span className="badge-tag bg-[#B7D936] text-[#004D2A] font-extrabold tracking-wider shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                NEXT GEN SKILLS INITIATIVE
              </span>
              <span className="badge-tag bg-white/15 text-white/95 border border-white/20">
                GOVT COLLABORATION
              </span>
            </div>

            {/* Main Energetic Heading */}
            <div className="space-y-1">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08]">
                <span className="block text-white">NEXT GEN</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#F4E500] via-[#cbf328] to-[#B7D936] drop-shadow-md">
                  SMART SKILLS
                </span>
                <span className="block text-white/95 text-2xl sm:text-4xl lg:text-5xl font-extrabold mt-1">
                  FOR YOUTH
                </span>
              </h1>

              {/* Subheading Badge Banner */}
              <div className="pt-3 pb-1">
                <div className="inline-block px-4 py-2 rounded-xl bg-gradient-to-r from-[#006B3C] to-[#004D2A] border border-[#B7D936]/40 shadow-inner">
                  <span className="text-lg sm:text-2xl font-black tracking-wide text-white flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#F4E500]"></span>
                    SHOPIFY E-COMMERCE COURSE
                  </span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-white/85 max-w-xl leading-relaxed">
              Build practical e-commerce skills and learn the fundamentals of creating, managing,
              and promoting an online Shopify store with expert mentorship at Jawan Markaz Mardan.
            </p>

            {/* Four Premium Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-xl pt-2">
              <div className="bg-gradient-to-br from-[#F4E500] to-[#ecd700] text-[#004D2A] font-extrabold text-xs sm:text-sm py-2 px-3 rounded-xl shadow-md text-center flex flex-col items-center justify-center border border-yellow-200">
                <span className="text-base sm:text-lg font-black leading-none">100%</span>
                <span className="text-[11px] font-bold tracking-wider">FREE</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 py-2 px-3 rounded-xl text-center flex flex-col items-center justify-center">
                <span className="text-base sm:text-lg font-black text-[#F4E500] leading-none">2</span>
                <span className="text-[11px] text-white/90 font-semibold tracking-wider uppercase">Weeks</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 py-2 px-3 rounded-xl text-center flex flex-col items-center justify-center">
                <span className="text-base sm:text-lg font-black text-[#B7D936] leading-none">10</span>
                <span className="text-[10px] text-white/90 font-semibold tracking-wider uppercase">Practical Classes</span>
              </div>
              <div className="bg-[#006B3C]/80 border border-[#B7D936]/30 py-2 px-3 rounded-xl text-center flex flex-col items-center justify-center">
                <span className="text-xs sm:text-sm font-black text-white leading-none">FEMALES ONLY</span>
                <span className="text-[10px] text-[#F4E500] font-bold tracking-wider uppercase">Limited Seats</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="#apply"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl text-base font-black text-[#004D2A] bg-[#F4E500] hover:bg-[#ffe600] transition-all transform hover:-translate-y-1 shadow-[0_10px_25px_-5px_rgba(244,229,0,0.5)] glow-yellow cursor-pointer"
              >
                <span>APPLY NOW FOR FREE</span>
                <ArrowRight className="w-5 h-5 stroke-[2.5]" />
              </a>

              <a
                href="#course"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-base font-bold text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 transition-all hover:-translate-y-0.5"
              >
                <BookOpen className="w-4 h-4 text-[#B7D936]" />
                <span>EXPLORE COURSE</span>
              </a>
            </div>

            {/* Motivational Quote Banner */}
            <div className="pt-2">
              <div className="relative p-3.5 sm:p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md max-w-xl">
                <div className="text-[#F4E500] font-black text-xs sm:text-sm tracking-widest uppercase flex items-center gap-2">
                  <span className="text-xl">“</span>
                  SMART SKILLS • STRONG WOMEN • BRIGHTER TOMORROW
                  <span className="text-xl">”</span>
                </div>
                <div className="text-[11px] text-white/70 mt-1 pl-4">
                  Official empowerment vision of the District Youth Office & IT HUB Mardan.
                </div>
              </div>
            </div>

          </motion.div>

          {/* RIGHT COLUMN: Art-Directed E-Commerce Composition */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Visual Container */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Glow backdrops */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#006B3C] to-[#B7D936] rounded-3xl blur-2xl opacity-40 transform rotate-1 scale-95" />

              {/* Main Visual Image Card */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl bg-[#004D2A]">
                <Image
                  src="/assets/hero-student.jpg"
                  alt="Confident young South Asian female student working on Shopify e-commerce store"
                  width={700}
                  height={700}
                  className="w-full h-auto object-cover transform hover:scale-102 transition-transform duration-700"
                  priority
                />

                {/* Gradient overlay at bottom of photo for text contrast */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#004D2A]/90 to-transparent pointer-events-none" />

                {/* Sub-label inside image */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/15">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#B7D936] animate-ping" />
                    <span className="text-xs font-semibold text-white">Hands-on Shopify Lab</span>
                  </div>
                  <span className="text-[11px] font-bold text-[#F4E500] bg-black/40 px-2.5 py-1.5 rounded-xl border border-white/15">
                    Jawan Markaz Mardan
                  </span>
                </div>
              </div>

              {/* Floating Glassmorphism Badge 1: Build Your Online Store */}
              <motion.div
                className="absolute -top-6 -left-6 sm:-left-8 bg-white/90 backdrop-blur-xl border border-white/60 text-[#004D2A] p-3 rounded-2xl shadow-xl flex items-center gap-3 z-20"
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              >
                <div className="w-10 h-10 rounded-xl bg-[#006B3C] flex items-center justify-center text-white shadow-sm">
                  <ShoppingBag className="w-5 h-5 text-[#F4E500]" />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-[#004D2A]">Build Online Store</div>
                  <div className="text-[10px] text-gray-500 font-medium">Shopify CMS Mastery</div>
                </div>
              </motion.div>

              {/* Floating Glassmorphism Badge 2: Product Research */}
              <motion.div
                className="absolute top-1/3 -right-6 sm:-right-8 bg-white/90 backdrop-blur-xl border border-white/60 text-[#004D2A] p-3 rounded-2xl shadow-xl flex items-center gap-3 z-20"
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 0.5 }}
              >
                <div className="w-10 h-10 rounded-xl bg-[#F4E500] flex items-center justify-center text-[#004D2A] shadow-sm font-black">
                  <Search className="w-5 h-5 text-[#004D2A]" />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-[#004D2A]">Product Research</div>
                  <div className="text-[10px] text-gray-500 font-medium">Winning Trends & Niches</div>
                </div>
              </motion.div>

              {/* Floating Glassmorphism Badge 3: Online Orders & Marketing */}
              <motion.div
                className="absolute -bottom-6 -right-4 sm:-right-6 bg-[#004D2A]/95 backdrop-blur-xl border border-[#B7D936]/40 text-white p-3.5 rounded-2xl shadow-2xl flex items-center gap-3 z-20"
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1 }}
              >
                <div className="w-10 h-10 rounded-xl bg-[#006B3C] flex items-center justify-center text-[#B7D936] shadow-sm">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-1">
                    <span>Digital Marketing</span>
                    <span className="text-[#F4E500] font-black">100% Free</span>
                  </div>
                  <div className="text-[10px] text-white/70">Social Ads & Store Scaling</div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
