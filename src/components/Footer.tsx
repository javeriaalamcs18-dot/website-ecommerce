'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, MapPin, Calendar, Clock, ShieldCheck, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#00361d] text-white pt-16 pb-12 border-t-4 border-[#F4E500] relative overflow-hidden">
      {/* Decorative gradient / pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#F4E500_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Identity & Logos */}
          <div className="space-y-4">
            <div className="bg-white p-2.5 rounded-xl inline-block">
              <Image
                src="/assets/it-hub-logo.png"
                alt="IT HUB Mardan"
                width={130}
                height={50}
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-xs text-white/75 leading-relaxed">
              Empowering Students, Building Futures. Next Gen Smart Skills For Youth is an official public-private collaborative program.
            </p>
            <div className="text-[11px] font-bold text-[#F4E500] uppercase tracking-wider">
              Shopify E-Commerce Training (Females Only)
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-[#B7D936] mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-white/80">
              <li><a href="#home" className="hover:text-[#F4E500] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#F4E500] transition-colors">About Program</a></li>
              <li><a href="#course" className="hover:text-[#F4E500] transition-colors">Course Modules</a></li>
              <li><a href="#schedule" className="hover:text-[#F4E500] transition-colors">2-Week Schedule</a></li>
              <li><a href="#eligibility" className="hover:text-[#F4E500] transition-colors">Eligibility Criteria</a></li>
              <li><a href="#status" className="hover:text-[#F4E500] transition-colors">Check Application Status</a></li>
              <li><a href="#faqs" className="hover:text-[#F4E500] transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Col 3: Key Program Facts */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-[#B7D936] mb-4">
              Program Facts
            </h4>
            <div className="space-y-2.5 text-xs text-white/80">
              <div className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-[#F4E500] shrink-0" />
                <span>Duration: 2 Weeks (10 Classes)</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#F4E500] shrink-0" />
                <span>Class Time: 2:00 PM – 4:00 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#F4E500] shrink-0" />
                <span>Jawan Markaz, Sports Complex Mardan</span>
              </div>
              <div className="pt-2 text-[11px] text-[#B7D936] font-bold">
                Application Deadline: 10 October 2026
              </div>
            </div>
          </div>

          {/* Col 4: Contact & Administration */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-[#B7D936] mb-4">
              Organized By
            </h4>
            <div className="space-y-2 text-xs text-white/80">
              <p className="font-bold text-white">District Administration Mardan</p>
              <p className="font-bold text-white">District Youth Office Mardan</p>
              <p className="font-bold text-white">IT HUB Mardan</p>
              <div className="pt-3">
                <div className="text-[11px] text-white/60">Program Helpline:</div>
                <a href="tel:03128444762" className="text-sm font-black text-[#F4E500] hover:underline">
                  0312-8444762
                </a>
              </div>
              <div className="pt-2">
                <Link
                  href="/admin"
                  className="inline-flex items-center gap-1.5 text-xs text-[#B7D936] hover:text-white transition-colors"
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Admin Access Portal</span>
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div>
            © 2026 Next Gen Smart Skills For Youth • IT HUB MARDAN & District Youth Office. All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-[#B7D936]">
            <span>Dedicated to Female Youth Digital Leadership</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
