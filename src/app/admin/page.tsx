'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Users,
  Clock,
  CheckCircle2,
  AlertCircle,
  FileSpreadsheet,
  Search,
  Filter,
  Download,
  Trash2,
  ArrowLeft,
  ShieldAlert,
  Eye,
  LogOut,
  Sparkles,
  Lock
} from 'lucide-react';
import { ApplicationRecord } from '@/lib/data';
import { getApplications, updateApplicationStatus } from '@/lib/storage';

export default function AdminDashboardPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const [applications, setApplications] = useState<ApplicationRecord[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('All');
  const [selectedApplicant, setSelectedApplicant] = useState<ApplicationRecord | null>(null);

  useEffect(() => {
    // Check if session admin is already set
    const auth = sessionStorage.getItem('ngss_admin_auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
      setApplications(getApplications());
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Secure passcode for District Administration / IT HUB admin portal
    if (password === 'ithub2026' || password === 'admin123') {
      setIsAuthenticated(true);
      sessionStorage.setItem('ngss_admin_auth', 'true');
      setApplications(getApplications());
      setLoginError('');
    } else {
      setLoginError('Invalid Administrator Passcode. Access restricted to official staff.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('ngss_admin_auth');
  };

  const handleStatusChange = (id: string, newStatus: ApplicationRecord['status']) => {
    updateApplicationStatus(id, newStatus);
    const updated = getApplications();
    setApplications(updated);
    if (selectedApplicant && selectedApplicant.id === id) {
      setSelectedApplicant({ ...selectedApplicant, status: newStatus });
    }
  };

  const exportCSV = () => {
    const headers = ['Application ID,Full Name,Father Name,CNIC,Phone,Email,Age,Education,City,Occupation,Status,Created At'];
    const rows = applications.map(a =>
      `"${a.id}","${a.fullName}","${a.fatherName}","${a.cnic}","${a.phone}","${a.email || ''}","${a.age || ''}","${a.education || ''}","${a.city || ''}","${a.occupation || ''}","${a.status}","${a.createdAt}"`
    );
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers, ...rows].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `NGSS_Applications_Export_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Filtered applications
  const filtered = applications.filter(app => {
    const matchesSearch =
      app.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.phone.includes(searchTerm) ||
      (app.city && app.city.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesFilter = filterStatus === 'All' || app.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  // Metric stats
  const totalApps = applications.length;
  const pendingCount = applications.filter(a => a.status === 'Application Received').length;
  const underReviewCount = applications.filter(a => a.status === 'Under Review').length;
  const selectedCount = applications.filter(a => a.status === 'Selected').length;
  const waitlistedCount = applications.filter(a => a.status === 'Waitlisted').length;

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#004D2A] flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-3xl p-8 shadow-2xl border border-white/20">
          <div className="text-center space-y-3 mb-6">
            <div className="bg-[#F4FAF6] p-2.5 rounded-2xl inline-block">
              <Image
                src="/assets/it-hub-logo.png"
                alt="IT HUB"
                width={120}
                height={50}
                className="h-10 w-auto object-contain mx-auto"
              />
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#006B3C]/10 text-[#006B3C] text-[11px] font-bold uppercase tracking-wider">
              <Lock className="w-3.5 h-3.5" />
              Secured Officer Portal
            </div>
            <h2 className="text-2xl font-black text-[#004D2A]">Admin Authentication</h2>
            <p className="text-xs text-gray-500">
              District Youth Office & IT HUB Mardan Administration System
            </p>
          </div>

          {loginError && (
            <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-xs font-semibold text-red-700 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{loginError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                Passcode / Access Key
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin passcode (e.g. ithub2026)"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#006B3C] text-sm text-gray-900 bg-[#F4FAF6]"
              />
              <p className="text-[11px] text-gray-400 mt-1">Default administrator key: <code className="bg-gray-100 px-1 py-0.5 rounded text-gray-700 font-mono">ithub2026</code></p>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl font-black text-sm text-[#004D2A] bg-[#F4E500] hover:bg-yellow-400 transition-colors shadow-md"
            >
              UNLOCK ADMIN DASHBOARD →
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link href="/" className="text-xs font-bold text-gray-500 hover:text-[#006B3C] inline-flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Main Website
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F4FAF6] text-gray-900">
      
      {/* Top Admin Header */}
      <header className="bg-[#004D2A] text-white border-b border-[#B7D936]/20 py-3.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-white p-1.5 rounded-lg">
              <Image
                src="/assets/it-hub-logo.png"
                alt="IT HUB"
                width={100}
                height={35}
                className="h-7 w-auto object-contain"
              />
            </div>
            <div>
              <div className="text-xs font-black tracking-wider text-[#F4E500] uppercase">
                ADMINISTRATION CONSOLE
              </div>
              <div className="text-xs text-white/80 font-medium">
                Next Gen Smart Skills For Youth • Admissions Desk
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={exportCSV}
              className="px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-bold text-white flex items-center gap-1.5 transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-[#F4E500]" />
              Export CSV
            </button>
            <Link
              href="/"
              className="px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-white transition-colors"
            >
              View Site
            </Link>
            <button
              onClick={handleLogout}
              className="p-2 rounded-xl bg-red-600/80 hover:bg-red-600 text-white text-xs font-bold transition-colors"
              title="Logout"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Admin Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-8 space-y-8">
        
        {/* STATS METRIC CARDS (Requirement 18) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs">
            <div className="text-xs font-bold text-gray-500 uppercase">TOTAL APPLICATIONS</div>
            <div className="text-3xl font-black text-[#004D2A] mt-1">{totalApps}</div>
            <div className="text-[11px] text-[#006B3C] font-semibold mt-1">Live Database</div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-blue-200 bg-blue-50/20 shadow-xs">
            <div className="text-xs font-bold text-blue-700 uppercase">PENDING</div>
            <div className="text-3xl font-black text-blue-800 mt-1">{pendingCount}</div>
            <div className="text-[11px] text-blue-600 font-semibold mt-1">Newly Received</div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-amber-200 bg-amber-50/20 shadow-xs">
            <div className="text-xs font-bold text-amber-700 uppercase">UNDER REVIEW</div>
            <div className="text-3xl font-black text-amber-800 mt-1">{underReviewCount}</div>
            <div className="text-[11px] text-amber-600 font-semibold mt-1">Under Assessment</div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-emerald-200 bg-emerald-50/20 shadow-xs">
            <div className="text-xs font-bold text-emerald-700 uppercase">SELECTED</div>
            <div className="text-3xl font-black text-emerald-800 mt-1">{selectedCount}</div>
            <div className="text-[11px] text-emerald-600 font-semibold mt-1">Confirmed Seats</div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-purple-200 bg-purple-50/20 shadow-xs col-span-2 sm:col-span-1">
            <div className="text-xs font-bold text-purple-700 uppercase">WAITLISTED</div>
            <div className="text-3xl font-black text-purple-800 mt-1">{waitlistedCount}</div>
            <div className="text-[11px] text-purple-600 font-semibold mt-1">Standby Pool</div>
          </div>
        </div>

        {/* CONTROLS: SEARCH & FILTER */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-200 shadow-xs flex flex-wrap items-center justify-between gap-4">
          <div className="relative flex-1 min-w-[240px]">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by Applicant Name, ID, Phone, City..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#006B3C] text-sm text-gray-900"
            />
          </div>

          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-500" />
            <span className="text-xs font-bold text-gray-600 uppercase">Status Filter:</span>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-3 py-2 rounded-xl border border-gray-200 text-sm font-semibold text-gray-800 focus:outline-none focus:border-[#006B3C] bg-white"
            >
              <option value="All">All Statuses ({totalApps})</option>
              <option value="Application Received">Application Received ({pendingCount})</option>
              <option value="Under Review">Under Review ({underReviewCount})</option>
              <option value="Selected">Selected ({selectedCount})</option>
              <option value="Waitlisted">Waitlisted ({waitlistedCount})</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>
        </div>

        {/* APPLICATION DATA TABLE */}
        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#004D2A] text-white uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="py-4 px-4 font-bold">Application ID</th>
                  <th className="py-4 px-4 font-bold">Full Name</th>
                  <th className="py-4 px-4 font-bold">Phone Number</th>
                  <th className="py-4 px-4 font-bold">Education</th>
                  <th className="py-4 px-4 font-bold">City / Area</th>
                  <th className="py-4 px-4 font-bold">Status</th>
                  <th className="py-4 px-4 font-bold">Applied Date</th>
                  <th className="py-4 px-4 font-bold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filtered.length > 0 ? (
                  filtered.map((app) => (
                    <tr key={app.id} className="hover:bg-[#F4FAF6] transition-colors">
                      <td className="py-3.5 px-4 font-mono font-bold text-[#006B3C]">
                        {app.id}
                      </td>
                      <td className="py-3.5 px-4 font-bold text-gray-900">
                        {app.fullName}
                      </td>
                      <td className="py-3.5 px-4 text-gray-700">
                        {app.phone}
                      </td>
                      <td className="py-3.5 px-4 text-gray-600 max-w-[150px] truncate">
                        {app.education || 'N/A'}
                      </td>
                      <td className="py-3.5 px-4 text-gray-600">
                        {app.city || 'Mardan'}
                      </td>
                      <td className="py-3.5 px-4">
                        <select
                          value={app.status}
                          onChange={(e) => handleStatusChange(app.id, e.target.value as ApplicationRecord['status'])}
                          className={`px-2.5 py-1 rounded-lg text-xs font-bold border ${
                            app.status === 'Selected'
                              ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                              : app.status === 'Under Review'
                              ? 'bg-amber-50 text-amber-800 border-amber-300'
                              : app.status === 'Waitlisted'
                              ? 'bg-purple-50 text-purple-800 border-purple-300'
                              : app.status === 'Rejected'
                              ? 'bg-red-50 text-red-800 border-red-300'
                              : 'bg-blue-50 text-blue-800 border-blue-300'
                          }`}
                        >
                          <option value="Application Received">Application Received</option>
                          <option value="Under Review">Under Review</option>
                          <option value="Selected">Selected</option>
                          <option value="Waitlisted">Waitlisted</option>
                          <option value="Rejected">Rejected</option>
                        </select>
                      </td>
                      <td className="py-3.5 px-4 text-gray-500">
                        {new Date(app.createdAt).toLocaleDateString()}
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <button
                          onClick={() => setSelectedApplicant(app)}
                          className="px-2.5 py-1 rounded-lg bg-gray-100 hover:bg-[#006B3C] hover:text-white font-bold text-gray-700 transition-colors inline-flex items-center gap-1"
                        >
                          <Eye className="w-3.5 h-3.5" /> Details
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={8} className="py-12 text-center text-gray-500">
                      No matching applicant records found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </main>

      {/* APPLICANT DETAIL MODAL */}
      {selectedApplicant && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-gray-200 space-y-5">
            <div className="flex items-start justify-between pb-4 border-b border-gray-100">
              <div>
                <span className="text-xs font-mono font-bold text-[#006B3C] bg-[#F4FAF6] px-2.5 py-1 rounded-md">
                  {selectedApplicant.id}
                </span>
                <h3 className="text-2xl font-black text-[#004D2A] mt-1">{selectedApplicant.fullName}</h3>
                <p className="text-xs text-gray-500">D/o {selectedApplicant.fatherName}</p>
              </div>
              <button
                onClick={() => setSelectedApplicant(null)}
                className="p-1 rounded-lg hover:bg-gray-100 text-gray-500"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-gray-400 font-bold uppercase">CNIC</span>
                <p className="font-semibold text-gray-800">{selectedApplicant.cnic}</p>
              </div>
              <div>
                <span className="text-gray-400 font-bold uppercase">Phone</span>
                <p className="font-semibold text-gray-800">{selectedApplicant.phone}</p>
              </div>
              <div>
                <span className="text-gray-400 font-bold uppercase">Email</span>
                <p className="font-semibold text-gray-800">{selectedApplicant.email || 'N/A'}</p>
              </div>
              <div>
                <span className="text-gray-400 font-bold uppercase">Age</span>
                <p className="font-semibold text-gray-800">{selectedApplicant.age ? `${selectedApplicant.age} Years` : 'N/A'}</p>
              </div>
              <div>
                <span className="text-gray-400 font-bold uppercase">Education</span>
                <p className="font-semibold text-gray-800">{selectedApplicant.education || 'N/A'}</p>
              </div>
              <div>
                <span className="text-gray-400 font-bold uppercase">City/Area</span>
                <p className="font-semibold text-gray-800">{selectedApplicant.city || 'N/A'}</p>
              </div>
              <div>
                <span className="text-gray-400 font-bold uppercase">Occupation</span>
                <p className="font-semibold text-gray-800">{selectedApplicant.occupation || 'N/A'}</p>
              </div>
              <div>
                <span className="text-gray-400 font-bold uppercase">Current Status</span>
                <p className="font-bold text-[#006B3C]">{selectedApplicant.status}</p>
              </div>
            </div>

            {selectedApplicant.reason && (
              <div className="p-3.5 rounded-2xl bg-[#F4FAF6] border border-gray-100">
                <span className="text-[11px] font-bold text-gray-500 uppercase block mb-1">
                  Reason for Joining
                </span>
                <p className="text-xs text-gray-700 italic">
                  "{selectedApplicant.reason}"
                </p>
              </div>
            )}

            <div className="pt-2 flex items-center justify-between gap-3">
              <a
                href={`tel:${selectedApplicant.phone.replace(/[^0-9]/g, '')}`}
                className="px-4 py-2 rounded-xl bg-[#004D2A] text-white text-xs font-bold hover:bg-[#006B3C] transition-colors"
              >
                Call Applicant
              </a>
              <button
                onClick={() => setSelectedApplicant(null)}
                className="px-5 py-2 rounded-xl bg-gray-200 text-gray-800 text-xs font-bold hover:bg-gray-300 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
