'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Is the course free?',
      a: 'Yes, 100% Free. The course is fully sponsored by the District Administration Mardan, District Youth Office Mardan, and IT HUB Mardan. There are no registration or training charges.',
    },
    {
      q: 'Who can apply?',
      a: 'The program is open exclusively to female applicants from Mardan and surrounding districts who are interested in learning Shopify e-commerce and can attend the training sessions in person.',
    },
    {
      q: 'How long is the course?',
      a: 'The course duration is 2 Weeks.',
    },
    {
      q: 'How many classes are included?',
      a: 'The program includes 10 Practical Classes focused on hands-on computer lab training.',
    },
    {
      q: 'What will I learn?',
      a: 'You will learn Store Setup, Product Research, Store Design, Product Listings, Orders & Delivery workflows, and Digital Marketing fundamentals on Shopify.',
    },
    {
      q: 'Where will the classes take place?',
      a: 'Classes will take place at Jawan Markaz, Sports Complex Mardan.',
    },
    {
      q: 'What time are classes?',
      a: 'Classes are scheduled daily from 2:00 PM to 4:00 PM.',
    },
    {
      q: 'What is the application deadline?',
      a: 'The last date to apply is 10 October 2026.',
    },
    {
      q: 'How can I contact the organizers?',
      a: 'You can contact the official helpline at 0312-8444762 via direct phone call or WhatsApp.',
    },
    {
      q: 'How can I check my application status?',
      a: 'You can check your application status directly on this website using your Application ID (NGSS-2026-XXXXXX) and registered Phone Number in the "Check Status" section.',
    },
  ];

  return (
    <section id="faqs" className="py-20 lg:py-28 bg-[#F4FAF6] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#006B3C]/10 text-[#006B3C] text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#004D2A] tracking-tight">
            QUESTIONS & ANSWERS
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Clear, transparent answers directly derived from the official program announcement.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-200/80 overflow-hidden shadow-xs transition-all"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-[#004D2A] hover:text-[#006B3C] transition-colors"
                >
                  <span className="text-base sm:text-lg">{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform ${
                    isOpen ? 'bg-[#006B3C] text-[#F4E500] rotate-180' : 'bg-[#F4FAF6] text-[#006B3C]'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-gray-600 leading-relaxed border-t border-gray-100 bg-[#F4FAF6]/40">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
