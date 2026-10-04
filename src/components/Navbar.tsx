'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, ArrowUpRight, ShieldCheck, PhoneCall } from 'lucide-react';

interface NavbarProps {
  activeSection?: string;
}

export default function Navbar({ activeSection = 'home' }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Course', href: '#course' },
    { label: 'Schedule', href: '#schedule' },
    { label: 'Eligibility', href: '#eligibility' },
    { label: 'Status', href: '#status' },
    { label: 'FAQs', href: '#faqs' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#004D2A]/90 backdrop-blur-md shadow-lg border-b border-[#B7D936]/20 py-2.5'
          : 'bg-[#004D2A] py-3.5 border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left: Official Logos */}
          <Link href="#home" className="flex items-center gap-3 group">
            <div className="bg-white px-2.5 py-1 rounded-lg shadow-sm flex items-center justify-center transition-transform group-hover:scale-105">
              <Image
                src="/assets/it-hub-logo.png"
                alt="IT HUB Mardan"
                width={120}
                height={48}
                className="h-9 w-auto object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block text-left">
              <div className="text-white text-xs font-bold tracking-wider uppercase flex items-center gap-1.5">
                <span className="inline-block w-2 h-2 rounded-full bg-[#B7D936] animate-pulse"></span>
                District Youth Office Mardan
              </div>
              <div className="text-[#B7D936] text-[11px] font-semibold tracking-wide">
                Next Gen Smart Skills for Youth
              </div>
            </div>
          </Link>

          {/* Center: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`relative px-3.5 py-2 text-sm font-medium transition-colors rounded-md ${
                    isActive
                      ? 'text-[#F4E500]'
                      : 'text-white/90 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-[2.5px] bg-[#F4E500] rounded-full shadow-[0_0_8px_#F4E500]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right: Apply Button & Admin link */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/admin"
              className="text-xs text-white/70 hover:text-white font-medium flex items-center gap-1 px-2.5 py-1.5 rounded-md hover:bg-white/5 transition-colors"
              title="Admin Portal"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#B7D936]" />
              Admin
            </Link>

            <a
              href="#apply"
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-black text-[#004D2A] bg-[#F4E500] hover:bg-[#ffe600] transition-all transform hover:-translate-y-0.5 shadow-md hover:shadow-[0_0_20px_rgba(244,229,0,0.6)] cursor-pointer"
            >
              <span>APPLY NOW</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="#apply"
              className="px-3 py-1.5 rounded-full text-xs font-black text-[#004D2A] bg-[#F4E500] hover:bg-yellow-400"
            >
              APPLY NOW
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-[#F4E500] focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#004D2A]/98 border-t border-white/10 px-4 pt-3 pb-6 space-y-2 shadow-2xl backdrop-blur-xl">
          <div className="pb-2 border-b border-white/10 text-xs text-white/60 flex items-center justify-between">
            <span>OFFICIAL YOUTH PORTAL</span>
            <Link href="/admin" onClick={() => setMobileMenuOpen(false)} className="text-[#B7D936] font-semibold flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" /> Admin Dashboard
            </Link>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-semibold text-white/90 hover:text-[#F4E500] hover:bg-white/5 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 flex flex-col gap-2">
            <a
              href="#apply"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-xl font-extrabold text-[#004D2A] bg-[#F4E500] hover:bg-yellow-300 shadow-lg"
            >
              APPLY NOW FOR FREE →
            </a>
            <a
              href="tel:03128444762"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold text-white/90 bg-white/10 hover:bg-white/15"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#B7D936]" /> Helpline: 0312-8444762
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
