'use client';

import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  Send,
  CheckCircle2,
  Copy,
  AlertCircle,
  FileCheck2,
  Sparkles,
  PhoneCall,
  UserCheck
} from 'lucide-react';
import { saveApplication } from '@/lib/storage';

export default function RegistrationSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    fatherName: '',
    cnic: '',
    phone: '',
    email: '',
    age: '',
    education: '',
    city: '',
    occupation: '',
    reason: '',
    confirmed: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [generatedId, setGeneratedId] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.confirmed) {
      setErrorMsg('Please check the confirmation box to verify your information.');
      return;
    }

    if (!formData.fullName || !formData.phone || !formData.cnic) {
      setErrorMsg('Please complete all required fields.');
      return;
    }

    setIsSubmitting(true);

    try {
      const created = saveApplication({
        fullName: formData.fullName,
        fatherName: formData.fatherName,
        cnic: formData.cnic,
        phone: formData.phone,
        email: formData.email,
        age: formData.age,
        education: formData.education,
        city: formData.city,
        occupation: formData.occupation,
        reason: formData.reason,
      });

      setGeneratedId(created.id);
      setIsSubmitting(false);

      // Trigger celebratory confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#006B3C', '#F4E500', '#B7D936']
      });
    } catch {
      setErrorMsg('Failed to save application. Please try again.');
      setIsSubmitting(false);
    }
  };

  const copyToClipboard = () => {
    if (generatedId) {
      navigator.clipboard.writeText(generatedId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const resetForm = () => {
    setGeneratedId(null);
    setFormData({
      fullName: '',
      fatherName: '',
      cnic: '',
      phone: '',
      email: '',
      age: '',
      education: '',
      city: '',
      occupation: '',
      reason: '',
      confirmed: false,
    });
  };

  return (
    <section id="apply" className="py-20 lg:py-28 bg-[#F4FAF6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* LEFT: Benefits & Heading */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#006B3C]/10 text-[#006B3C] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Limited Intake Cohort
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-[#004D2A] leading-tight">
              START YOUR <br />
              <span className="text-[#006B3C]">E-COMMERCE JOURNEY</span>
            </h2>

            <p className="text-gray-600 text-base leading-relaxed">
              Submit your official application for the Next Gen Smart Skills Shopify training.
              Selected candidates will be notified via phone and WhatsApp.
            </p>

            {/* Benefits Checklist */}
            <div className="p-6 rounded-3xl bg-white border border-[#006B3C]/15 shadow-sm space-y-3.5">
              <div className="text-xs font-black uppercase tracking-wider text-[#006B3C] pb-2 border-b border-gray-100">
                Program Highlights & Inclusions
              </div>
              {[
                '100% Free – No tuition or hidden fees',
                'Practical Training in computer lab at Jawan Markaz Mardan',
                '10 Classes (2:00 PM – 4:00 PM)',
                'Shopify E-Commerce complete practical curriculum',
                'District Youth Office & IT HUB Mardan initiative',
              ].map((b, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#006B3C] text-[#F4E500] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm font-semibold text-gray-800">{b}</span>
                </div>
              ))}
            </div>

            {/* Helpline box */}
            <div className="p-5 rounded-3xl bg-[#004D2A] text-white flex items-center justify-between shadow-md">
              <div>
                <div className="text-xs text-[#B7D936] font-bold uppercase tracking-wider">Need assistance applying?</div>
                <div className="text-base font-black mt-0.5">Contact: 0312-8444762</div>
              </div>
              <a
                href="tel:03128444762"
                className="px-3.5 py-2 rounded-xl bg-[#F4E500] text-[#004D2A] font-black text-xs hover:bg-yellow-300 transition-colors"
              >
                CALL NOW
              </a>
            </div>

          </div>

          {/* RIGHT: Modern Form / Success Screen */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-9 border-2 border-[#006B3C]/15 shadow-xl">
              
              {!generatedId ? (
                // REGISTRATION FORM
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="pb-3 border-b border-gray-100 flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-black text-[#004D2A]">Course Application Form</h3>
                      <p className="text-xs text-gray-500">Shopify E-Commerce (Females Only)</p>
                    </div>
                    <span className="text-[11px] font-bold text-red-600 bg-red-50 px-2.5 py-1 rounded-md">
                      Deadline: 10 Oct 2026
                    </span>
                  </div>

                  {errorMsg && (
                    <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs font-semibold text-red-700 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Ayesha Khan"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#006B3C] text-sm text-gray-900 bg-[#F4FAF6]/50"
                      />
                    </div>

                    {/* Father/Guardian Name */}
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Father / Guardian Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fatherName}
                        onChange={(e) => setFormData({ ...formData, fatherName: e.target.value })}
                        placeholder="e.g. Muhammad Tariq"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#006B3C] text-sm text-gray-900 bg-[#F4FAF6]/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* CNIC */}
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        CNIC / B-Form Number *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.cnic}
                        onChange={(e) => setFormData({ ...formData, cnic: e.target.value })}
                        placeholder="e.g. 16101-XXXXXXX-X"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#006B3C] text-sm text-gray-900 bg-[#F4FAF6]/50"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 0312-XXXXXXX"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#006B3C] text-sm text-gray-900 bg-[#F4FAF6]/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#006B3C] text-sm text-gray-900 bg-[#F4FAF6]/50"
                      />
                    </div>

                    {/* Age */}
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Age (Years)
                      </label>
                      <input
                        type="number"
                        min="14"
                        max="35"
                        value={formData.age}
                        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                        placeholder="e.g. 21"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#006B3C] text-sm text-gray-900 bg-[#F4FAF6]/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {/* Education */}
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Education
                      </label>
                      <input
                        type="text"
                        value={formData.education}
                        onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                        placeholder="e.g. Matric / Intermediate / BS"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#006B3C] text-sm text-gray-900 bg-[#F4FAF6]/50"
                      />
                    </div>

                    {/* City/Area */}
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        City / Area (Mardan)
                      </label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="e.g. Mardan City / Takht Bhai"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#006B3C] text-sm text-gray-900 bg-[#F4FAF6]/50"
                      />
                    </div>

                    {/* Occupation */}
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Occupation
                      </label>
                      <input
                        type="text"
                        value={formData.occupation}
                        onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
                        placeholder="e.g. Student / Freelancer"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#006B3C] text-sm text-gray-900 bg-[#F4FAF6]/50"
                      />
                    </div>
                  </div>

                  {/* Reason for joining */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Why do you want to join? (Brief Statement)
                    </label>
                    <textarea
                      rows={2}
                      value={formData.reason}
                      onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                      placeholder="Share your goals with Shopify e-commerce and learning online skills..."
                      className="w-full px-3.5 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-[#006B3C] text-sm text-gray-900 bg-[#F4FAF6]/50"
                    />
                  </div>

                  {/* Confirmation Checkbox */}
                  <div className="pt-2">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.confirmed}
                        onChange={(e) => setFormData({ ...formData, confirmed: e.target.checked })}
                        className="mt-1 w-4 h-4 rounded text-[#006B3C] focus:ring-[#006B3C]"
                      />
                      <span className="text-xs text-gray-700 font-medium leading-relaxed">
                        I confirm that the information provided is correct and I am available to attend in-person classes from 2:00 PM to 4:00 PM at Jawan Markaz Mardan.
                      </span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-2xl text-base font-black text-[#004D2A] bg-[#F4E500] hover:bg-yellow-400 transition-all transform hover:-translate-y-0.5 shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>PROCESSING APPLICATION...</span>
                      ) : (
                        <>
                          <span>SUBMIT APPLICATION →</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                // SUCCESS SCREEN (Requirement 16)
                <div className="py-6 text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-[#006B3C] text-[#F4E500] flex items-center justify-center mx-auto shadow-lg">
                    <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
                  </div>

                  <div>
                    <span className="badge-tag bg-[#B7D936] text-[#004D2A] mb-2">
                      Official Application Registered
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-[#004D2A]">
                      Application Submitted Successfully
                    </h3>
                    <p className="text-sm text-gray-600 max-w-md mx-auto mt-2">
                      Thank you, <strong className="text-gray-900">{formData.fullName}</strong>. Your official submission has been logged into the District Youth Office system.
                    </p>
                  </div>

                  {/* Generated Application ID Box */}
                  <div className="p-5 rounded-2xl bg-[#F4FAF6] border-2 border-[#006B3C]/30 max-w-md mx-auto">
                    <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">
                      Your Official Application ID
                    </div>
                    <div className="text-2xl sm:text-3xl font-black text-[#006B3C] tracking-wider py-1 font-mono">
                      {generatedId}
                    </div>
                    <button
                      onClick={copyToClipboard}
                      className="mt-2 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold text-[#004D2A] bg-white border border-gray-300 hover:bg-gray-50 shadow-2xs"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      {copied ? 'Copied to clipboard!' : 'Copy ID'}
                    </button>
                  </div>

                  {/* Important Disclaimer Notice (Mandatory Requirement) */}
                  <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 max-w-md mx-auto text-left flex items-start gap-3">
                    <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold">Important Instructions:</p>
                      <p className="mt-0.5">Please keep your Application ID for future reference and status checking.</p>
                      <p className="mt-1 font-semibold text-amber-800">
                        * Note: Application submission does not guarantee selection. Seats are limited and subject to official review.
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-wrap justify-center gap-3">
                    <a
                      href="#status"
                      className="px-6 py-3 rounded-xl font-bold text-xs text-white bg-[#006B3C] hover:bg-[#004D2A] transition-colors"
                    >
                      Track Application Status
                    </a>
                    <button
                      onClick={resetForm}
                      className="px-6 py-3 rounded-xl font-bold text-xs text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      Submit Another Application
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
