'use client';

import React, { useState } from 'react';
import {
  Search,
  CheckCircle2,
  Clock,
  UserCheck,
  AlertCircle,
  XCircle,
  FileText,
  Calendar,
  Sparkles
} from 'lucide-react';
import { findApplication } from '@/lib/storage';
import { ApplicationRecord } from '@/lib/data';

export default function ApplicationStatus() {
  const [appId, setAppId] = useState('');
  const [phone, setPhone] = useState('');
  const [searched, setSearched] = useState(false);
  const [result, setResult] = useState<ApplicationRecord | null>(null);

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!appId || !phone) return;

    const found = findApplication(appId, phone);
    setResult(found);
    setSearched(true);
  };

  const statuses = [
    { title: 'Application Received', desc: 'Received & recorded in district database' },
    { title: 'Under Review', desc: 'Credentials and seat quota being verified' },
    { title: 'Selected', desc: 'Seat offered for the upcoming batch' },
    { title: 'Waitlisted', desc: 'Placed on standby for seat vacancy' },
  ];

  const getStatusIndex = (current: ApplicationRecord['status']) => {
    switch (current) {
      case 'Application Received': return 0;
      case 'Under Review': return 1;
      case 'Selected': return 2;
      case 'Waitlisted': return 3;
      case 'Rejected': return -1;
      default: return 0;
    }
  };

  return (
    <section id="status" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#006B3C]/10 text-[#006B3C] text-xs font-bold uppercase tracking-wider">
            <Search className="w-3.5 h-3.5" />
            Verification Portal
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#004D2A] tracking-tight">
            CHECK YOUR APPLICATION STATUS
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Enter your official Application ID (NGSS-2026-XXXXXX) and registered Phone Number.
          </p>
        </div>

        {/* Input Card */}
        <div className="max-w-2xl mx-auto bg-[#F4FAF6] rounded-3xl p-6 sm:p-8 border-2 border-[#006B3C]/15 shadow-md">
          <form onSubmit={handleCheck} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Application ID *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. NGSS-2026-894102"
                  value={appId}
                  onChange={(e) => setAppId(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#006B3C] text-sm text-gray-900 bg-white font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 0312-8444762"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#006B3C] text-sm text-gray-900 bg-white"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-2xl text-sm font-black text-[#004D2A] bg-[#F4E500] hover:bg-yellow-400 transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <Search className="w-4 h-4 stroke-[2.5]" />
              <span>CHECK APPLICATION STATUS</span>
            </button>
          </form>

          {/* Quick test hints */}
          <div className="mt-4 pt-3 border-t border-gray-200/80 text-[11px] text-gray-500 flex items-center justify-between">
            <span>Try sample ID: <strong className="font-mono text-gray-800">NGSS-2026-894102</strong></span>
            <span>Phone: <strong className="font-mono text-gray-800">0312-8444762</strong></span>
          </div>
        </div>

        {/* RESULTS CARD */}
        {searched && (
          <div className="max-w-3xl mx-auto mt-8">
            {result ? (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#006B3C]/20 shadow-xl space-y-6">
                
                {/* Result Header */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-gray-100">
                  <div>
                    <span className="text-xs font-mono font-bold text-[#006B3C] bg-[#F4FAF6] px-2.5 py-1 rounded-md">
                      {result.id}
                    </span>
                    <h3 className="text-2xl font-black text-[#004D2A] mt-1">{result.fullName}</h3>
                    <p className="text-xs text-gray-500">{result.city} • Applied on {new Date(result.createdAt).toLocaleDateString()}</p>
                  </div>

                  <div className="text-right">
                    <span className={`inline-block px-4 py-2 rounded-xl text-xs font-black tracking-wide uppercase ${
                      result.status === 'Selected'
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                        : result.status === 'Under Review'
                        ? 'bg-amber-100 text-amber-800 border border-amber-300'
                        : result.status === 'Waitlisted'
                        ? 'bg-purple-100 text-purple-800 border border-purple-300'
                        : result.status === 'Rejected'
                        ? 'bg-red-100 text-red-800 border border-red-300'
                        : 'bg-blue-100 text-blue-800 border border-blue-300'
                    }`}>
                      ● {result.status}
                    </span>
                  </div>
                </div>

                {/* Progress Timeline */}
                <div>
                  <div className="text-xs font-bold uppercase text-gray-500 tracking-wider mb-4">
                    Application Review Progress
                  </div>

                  {result.status === 'Rejected' ? (
                    <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-800 text-xs flex items-center gap-3">
                      <XCircle className="w-5 h-5 text-red-600 shrink-0" />
                      <span>We regret to inform you that your application could not be selected due to seat constraints. We encourage you to apply for upcoming cohorts.</span>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                      {statuses.map((step, idx) => {
                        const currentIndex = getStatusIndex(result.status);
                        const isDone = idx <= currentIndex;
                        const isCurrent = idx === currentIndex;

                        return (
                          <div
                            key={step.title}
                            className={`p-3.5 rounded-2xl border transition-colors ${
                              isCurrent
                                ? 'bg-[#004D2A] text-white border-[#004D2A] shadow-md'
                                : isDone
                                ? 'bg-emerald-50 text-emerald-900 border-emerald-200'
                                : 'bg-gray-50 text-gray-400 border-gray-200'
                            }`}
                          >
                            <div className="flex items-center justify-between mb-1.5">
                              <span className="text-[10px] font-bold">STAGE 0{idx + 1}</span>
                              {isDone ? (
                                <CheckCircle2 className={`w-4 h-4 ${isCurrent ? 'text-[#F4E500]' : 'text-emerald-600'}`} />
                              ) : (
                                <Clock className="w-3.5 h-3.5 text-gray-300" />
                              )}
                            </div>
                            <div className={`text-xs font-bold leading-tight ${isCurrent ? 'text-white' : ''}`}>
                              {step.title}
                            </div>
                            <div className={`text-[10px] mt-1 ${isCurrent ? 'text-white/80' : 'text-gray-500'}`}>
                              {step.desc}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Next Steps Instructions */}
                <div className="p-4 rounded-2xl bg-[#F4FAF6] border border-gray-200 text-xs text-gray-700 space-y-1">
                  <div className="font-bold text-[#004D2A] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#006B3C]" /> Official Next Steps:
                  </div>
                  {result.status === 'Selected' ? (
                    <p>Congratulations! Please bring your original CNIC/B-Form copy on the first class at Jawan Markaz, Sports Complex Mardan at 1:45 PM.</p>
                  ) : result.status === 'Under Review' ? (
                    <p>Your application is undergoing verification by the youth evaluation committee. Please keep your WhatsApp active.</p>
                  ) : (
                    <p>Application is registered. Shortlisted candidates are announced prior to class commencement.</p>
                  )}
                </div>

              </div>
            ) : (
              <div className="p-8 rounded-3xl bg-red-50 border border-red-200 text-center space-y-2">
                <AlertCircle className="w-10 h-10 text-red-500 mx-auto" />
                <h4 className="text-lg font-black text-red-800">No Matching Record Found</h4>
                <p className="text-xs text-red-600 max-w-sm mx-auto">
                  Please verify your Application ID format (NGSS-2026-XXXXXX) and registered phone number.
                </p>
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
}
