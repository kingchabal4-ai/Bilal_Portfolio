import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Copy, Check, ArrowUp, Send, Clock, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { getKarachiTimeString, createMailtoLink } from '../utils/portfolio';
import { MagneticButton } from './MagneticButton';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState(getKarachiTimeString());
  const [selectedDiscipline, setSelectedDiscipline] = useState<'both' | 'graphic' | 'video'>('both');
  const [clientName, setClientName] = useState('');
  const [projectBrief, setProjectBrief] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(getKarachiTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Creative Project Inquiry from ${clientName || 'New Client'}`;
    const disciplineText =
      selectedDiscipline === 'graphic'
        ? 'Graphic Design'
        : selectedDiscipline === 'video'
        ? 'Video Editing'
        : 'Graphic Design & Video Editing';

    const body = `Hello Muhammad Bilal,\n\nName: ${clientName || 'Not specified'}\nDiscipline: ${disciplineText}\nProject Brief:\n${projectBrief || 'I would like to discuss a new creative collaboration with you.'}\n\nLooking forward to hearing from you.`;

    window.location.href = createMailtoLink(subject, body);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-black border-t border-zinc-900 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.25em] text-zinc-500 mb-3">
            <span className="w-8 h-[1px] bg-zinc-700" />
            <span>05 // INITIATE COLLABORATION</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white max-w-4xl">
            Let's Shape Your Next Visual Experience.
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg font-light mt-4 max-w-2xl">
            Available for premium graphic design commissions and cinematic video editing projects worldwide from Karachi, Pakistan.
          </p>
        </div>

        {/* Two-Column Contact System */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-24">
          {/* Left Column: Direct Info Dossier (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              {/* Profile Card */}
              <div className="p-8 bg-zinc-950 border border-zinc-800/80 rounded-sm">
                <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 block mb-2">
                  Direct Practitioner
                </span>
                <h3 className="font-display text-3xl font-extrabold uppercase tracking-tight text-white mb-1">
                  {PORTFOLIO_DATA.profile.name}
                </h3>
                <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-6">
                  {PORTFOLIO_DATA.profile.role} · {PORTFOLIO_DATA.profile.experience}
                </p>

                <div className="space-y-4 pt-6 border-t border-zinc-900 text-sm">
                  {/* Location */}
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-zinc-400 shrink-0 mt-1" />
                    <div>
                      <span className="text-xs font-mono text-zinc-500 uppercase block">Location</span>
                      <span className="text-white font-medium">{PORTFOLIO_DATA.profile.location}</span>
                    </div>
                  </div>

                  {/* Karachi Local Clock */}
                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-zinc-400 shrink-0 mt-1" />
                    <div>
                      <span className="text-xs font-mono text-zinc-500 uppercase block">Local Time (GMT+5)</span>
                      <span className="text-zinc-300 font-mono text-xs">{currentTime} PKT</span>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-zinc-400 shrink-0 mt-1" />
                    <div className="w-full">
                      <span className="text-xs font-mono text-zinc-500 uppercase block">Direct Email</span>
                      <a
                        href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                        className="text-white hover:text-zinc-300 font-mono text-xs sm:text-sm underline underline-offset-4 break-all block mt-0.5"
                      >
                        {PORTFOLIO_DATA.profile.email}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email Action Buttons */}
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                    className="inline-flex items-center justify-center gap-2 bg-white text-black font-semibold text-xs py-3 px-5 uppercase tracking-wider hover:bg-zinc-200 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    Send Direct Email
                  </a>

                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center justify-center gap-2 border border-zinc-700 bg-black text-white hover:border-zinc-400 font-medium text-xs py-3 px-4 uppercase tracking-wider transition-colors cursor-pointer"
                    aria-label="Copy email address to clipboard"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-zinc-300" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-zinc-400" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Availability Notice */}
            <div className="p-6 border border-zinc-800/80 bg-black text-xs text-zinc-400 leading-relaxed font-mono">
              <span className="w-2 h-2 rounded-full bg-white inline-block mr-2 animate-pulse" />
              <span>CURRENTLY ACCEPTING NEW COMMERCIAL & INDEPENDENT COMMISSIONS</span>
            </div>
          </div>

          {/* Right Column: Project Inquiry Composer (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 bg-zinc-950 border border-zinc-800/80 rounded-sm">
              <div className="pb-4 mb-8 border-b border-zinc-900 flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                  Project Inquiry Composer
                </span>
                <span className="text-[11px] font-mono text-zinc-600">
                  Direct Mail Router
                </span>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-6">
                {/* Discipline Selector (Functional buttons per constitution) */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                    Select Discipline of Interest
                  </label>
                  <div className="grid grid-cols-3 gap-2 p-1 bg-black border border-zinc-800">
                    <button
                      type="button"
                      onClick={() => setSelectedDiscipline('both')}
                      className={`py-2 px-3 text-xs font-mono uppercase transition-colors cursor-pointer ${
                        selectedDiscipline === 'both'
                          ? 'bg-white text-black font-semibold'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      Dual Discipline
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedDiscipline('graphic')}
                      className={`py-2 px-3 text-xs font-mono uppercase transition-colors cursor-pointer ${
                        selectedDiscipline === 'graphic'
                          ? 'bg-white text-black font-semibold'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      Graphic Design
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedDiscipline('video')}
                      className={`py-2 px-3 text-xs font-mono uppercase transition-colors cursor-pointer ${
                        selectedDiscipline === 'video'
                          ? 'bg-white text-black font-semibold'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      Video Editing
                    </button>
                  </div>
                </div>

                {/* Client Name Input */}
                <div>
                  <label htmlFor="client-name" className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                    Your Name or Organization
                  </label>
                  <input
                    id="client-name"
                    type="text"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="e.g. Elena Vance / Horizon Studio"
                    className="w-full bg-black border border-zinc-800 px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                {/* Project Brief */}
                <div>
                  <label htmlFor="project-brief" className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                    Project Overview & Timeline
                  </label>
                  <textarea
                    id="project-brief"
                    rows={4}
                    value={projectBrief}
                    onChange={(e) => setProjectBrief(e.target.value)}
                    placeholder="Briefly describe your objectives, deliverables (e.g. Wedding card suite, YouTube channel pacing, Logo identity), and preferred timeline..."
                    className="w-full bg-black border border-zinc-800 px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white transition-colors resize-none"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full group flex items-center justify-center gap-3 bg-white text-black font-bold text-xs py-4 px-8 uppercase tracking-widest hover:bg-zinc-200 transition-all cursor-pointer shadow-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                  >
                    <span>Launch Inquiry in Email Client</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <p className="text-[11px] font-mono text-zinc-500 text-center mt-3">
                    Submitting automatically prepares your email to <strong className="text-zinc-400">{PORTFOLIO_DATA.profile.email}</strong>.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Editorial Footer */}
        <div className="pt-12 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono text-zinc-500">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 border border-zinc-700 bg-zinc-950 flex items-center justify-center text-[10px] text-white font-bold">
              MB
            </div>
            <span>© {new Date().getFullYear()} MUHAMMAD BILAL. ALL RIGHTS RESERVED.</span>
          </div>

          <div className="flex items-center gap-8">
            <span className="hidden sm:inline">KARACHI, PAKISTAN</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors cursor-pointer group"
              aria-label="Back to top of page"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
