'use client';

import React from 'react';
import { PhoneCall, MessageCircle, Clock, ShieldCheck, Sparkles } from 'lucide-react';

export default function ContactSection() {
  const officialPhone = '0312-8444762';
  const cleanPhone = '923128444762';

  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#006B3C] to-[#004D2A] rounded-3xl p-8 sm:p-12 text-white shadow-2xl border-2 border-[#B7D936]/30 relative overflow-hidden">
          {/* Ambient glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#F4E500]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 text-center space-y-4">
            <span className="badge-tag bg-[#B7D936] text-[#004D2A]">
              OFFICIAL CONTACT
            </span>

            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              CONTACT THE PROGRAM TEAM
            </h2>

            <p className="text-sm sm:text-base text-white/85 max-w-xl mx-auto">
              For admissions assistance, program details, and verification, reach out directly to the official helpline.
            </p>

            {/* Official Phone Showcase */}
            <div className="py-4">
              <div className="inline-block px-7 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                <span className="text-xs uppercase tracking-widest text-[#B7D936] font-bold block">
                  Official Contact Number
                </span>
                <span className="text-3xl sm:text-4xl font-black text-[#F4E500] tracking-wider font-mono">
                  {officialPhone}
                </span>
              </div>
            </div>

            {/* Action Buttons: CALL NOW & WHATSAPP */}
            <div className="flex flex-wrap justify-center items-center gap-4 pt-2">
              <a
                href={`tel:${officialPhone.replace(/-/g, '')}`}
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl text-sm font-black text-[#004D2A] bg-[#F4E500] hover:bg-yellow-400 transition-all transform hover:-translate-y-0.5 shadow-lg"
              >
                <PhoneCall className="w-5 h-5" />
                <span>CALL NOW</span>
              </a>

              <a
                href={`https://wa.me/${cleanPhone}?text=Hello%20IT%20HUB%20Mardan,%20I%20have%20an%20inquiry%20regarding%20the%20Shopify%20E-Commerce%20Course.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl text-sm font-black text-white bg-[#25D366] hover:bg-[#20ba5a] transition-all transform hover:-translate-y-0.5 shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WHATSAPP</span>
              </a>
            </div>

            <div className="pt-4 text-xs text-white/70 flex items-center justify-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#B7D936]" />
              <span>Inquiries accepted during official program operating hours.</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
