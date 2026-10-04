'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, Laptop, ShoppingCart, Zap, Sparkles } from 'lucide-react';

export default function AboutSection() {
  const highlights = [
    'Focus on hands-on learning, digital skills and online business fundamentals.',
    'Equipping female youth of Mardan with contemporary e-commerce independence.',
    'Real-time store launch mentorship on Shopify platform.',
    'Fully sponsored & 100% free initiative by District Administration & IT HUB Mardan.'
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F4FAF6] relative overflow-hidden">
      {/* Decorative subtle background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#006B3C]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#B7D936]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Heading, Description, Bullet Highlights, Button */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#006B3C]/10 border border-[#006B3C]/20 text-[#006B3C] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Empowering Youth of Mardan
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#004D2A] leading-tight">
              LEARN PRACTICAL <br />
              <span className="text-[#006B3C] relative">
                E-COMMERCE SKILLS
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-[#F4E500] rounded-full" />
              </span>
            </h2>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
              The <strong className="text-[#004D2A]">Next Gen Smart Skills for Youth</strong> program provides practical exposure to Shopify e-commerce and digital business skills. Designed especially to equip young women with actionable technical and commercial acumen.
            </p>

            <div className="p-4 rounded-2xl bg-white border border-[#006B3C]/15 shadow-sm space-y-3">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#006B3C] text-[#F4E500] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm font-medium text-gray-800 leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#course"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-sm font-extrabold text-white bg-[#006B3C] hover:bg-[#004D2A] transition-all transform hover:-translate-y-0.5 shadow-md"
              >
                <span>LEARN MORE ABOUT TOPICS</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#apply"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-extrabold text-[#004D2A] bg-[#F4E500] hover:bg-yellow-400 transition-all transform hover:-translate-y-0.5 shadow-sm"
              >
                <span>REGISTER NOW</span>
              </a>
            </div>
          </div>

          {/* RIGHT: Clean Shopify / E-Commerce Illustration Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden bg-white p-3 sm:p-5 border-2 border-[#006B3C]/15 shadow-2xl">
              
              {/* Laptop & Store visual from poster crop */}
              <div className="relative rounded-2xl overflow-hidden bg-[#004D2A]/5 aspect-[4/3] flex items-center justify-center">
                <Image
                  src="/assets/laptop-showcase.png"
                  alt="Shopify E-Commerce Storefront on Laptop"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Floating Meta Stats Inside Card */}
              <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                <div className="p-2.5 rounded-xl bg-[#F4FAF6] border border-[#006B3C]/10">
                  <div className="text-base font-black text-[#006B3C]">10 Days</div>
                  <div className="text-[11px] text-gray-500 font-semibold">Practical Lab</div>
                </div>
                <div className="p-2.5 rounded-xl bg-[#F4FAF6] border border-[#006B3C]/10">
                  <div className="text-base font-black text-[#004D2A]">Shopify</div>
                  <div className="text-[11px] text-gray-500 font-semibold">Full Stack Store</div>
                </div>
                <div className="p-2.5 rounded-xl bg-[#F4FAF6] border border-[#006B3C]/10">
                  <div className="text-base font-black text-[#006B3C]">Free</div>
                  <div className="text-[11px] text-gray-500 font-semibold">Fully Funded</div>
                </div>
              </div>

            </div>

            {/* Badge floating */}
            <div className="absolute -bottom-4 -left-4 sm:-left-6 bg-[#004D2A] text-white p-3.5 rounded-2xl shadow-xl flex items-center gap-3 border border-[#B7D936]/30">
              <div className="w-10 h-10 rounded-xl bg-[#B7D936] text-[#004D2A] flex items-center justify-center font-black">
                <Laptop className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">Live Shopify Practice</div>
                <div className="text-[10px] text-[#F4E500]">No prior experience needed</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
