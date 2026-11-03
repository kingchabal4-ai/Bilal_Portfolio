import React from 'react';
import { motion } from 'motion/react';
import { Compass, Film, Layers, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { MagneticButton } from './MagneticButton';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-black border-t border-zinc-900 overflow-hidden">
      {/* Decorative Blueprint Background Grid */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col mb-16 md:mb-24">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.25em] text-zinc-500 mb-3">
            <span className="w-8 h-[1px] bg-zinc-700" />
            <span>01 // BIOGRAPHY & CRAFT</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white max-w-3xl">
            Six Years of Visual Precision & Kinetic Storytelling.
          </h2>
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Big Statement & Personal Overview (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="space-y-6 text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
              <p className="text-xl sm:text-2xl text-white font-normal leading-snug">
                Hello, I am <strong className="font-semibold text-white">Muhammad Bilal</strong>—a professional graphic designer and video editor operating from Karachi, Pakistan, with over six years of dedicated creative practice.
              </p>

              <p>
                My work exists at the intersection of static visual geometry and dynamic motion. Rather than viewing graphic design and video editing as isolated domains, I treat them as two halves of a single cohesive creative language. Every print collateral, brand identity, or wedding card I construct obeys rigorous principles of typography, balance, and spatial harmony.
              </p>

              <p>
                In the timeline, that same structural discipline guides my video editing—from high-energy YouTube content and viral Instagram Reels to cinematic wedding films and long-form documentary narratives. Rhythm, color grading, sound design, and motion graphics are tuned frame by frame to produce visuals that leave lasting impressions.
              </p>
            </div>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-zinc-800/80">
              <div className="p-6 bg-zinc-950 border border-zinc-800/80 hover:border-zinc-500 transition-colors">
                <div className="w-10 h-10 border border-zinc-700 bg-black flex items-center justify-center mb-4">
                  <Compass className="w-5 h-5 text-zinc-200" />
                </div>
                <h3 className="font-display text-base font-bold uppercase tracking-tight text-white mb-2">
                  Graphic Design Mastery
                </h3>
                <p className="text-sm text-zinc-400 font-light leading-relaxed">
                  Deep proficiency in CorelDRAW, Adobe Illustrator, and Photoshop. Specializing in print prepress, large-scale banners, wedding cards, branding, and publication layouts.
                </p>
              </div>

              <div className="p-6 bg-zinc-950 border border-zinc-800/80 hover:border-zinc-500 transition-colors">
                <div className="w-10 h-10 border border-zinc-700 bg-black flex items-center justify-center mb-4">
                  <Film className="w-5 h-5 text-zinc-200" />
                </div>
                <h3 className="font-display text-base font-bold uppercase tracking-tight text-white mb-2">
                  Cinematic Video Editing
                </h3>
                <p className="text-sm text-zinc-400 font-light leading-relaxed">
                  Timeline mastery with Premiere Pro and After Effects. Crafting engaging cuts, kinetic typography, professional color grading, and immersive audio design.
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="pt-2 flex items-center gap-6">
              <MagneticButton
                variant="primary"
                href="#services"
                onClick={() => {
                  const el = document.getElementById('services');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Browse Services
              </MagneticButton>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors flex items-center gap-1.5"
              >
                Start a Collaboration <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Key Details & Spec Sheet (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Spec Sheet Card */}
            <div className="p-8 bg-zinc-950 border border-zinc-800/80 rounded-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/5 to-transparent pointer-events-none" />

              <div className="flex items-center justify-between pb-4 mb-6 border-b border-zinc-900 text-xs font-mono uppercase tracking-widest text-zinc-500">
                <span>Practitioner Dossier</span>
                <span>Ref: MB-2026</span>
              </div>

              <div className="space-y-5 text-sm">
                <div className="flex justify-between items-baseline pb-3 border-b border-zinc-900">
                  <span className="text-zinc-500 font-mono text-xs uppercase">Full Name</span>
                  <span className="font-medium text-white">{PORTFOLIO_DATA.profile.name}</span>
                </div>

                <div className="flex justify-between items-baseline pb-3 border-b border-zinc-900">
                  <span className="text-zinc-500 font-mono text-xs uppercase">Primary Disciplines</span>
                  <span className="font-medium text-white text-right">Graphic Design · Video Editing</span>
                </div>

                <div className="flex justify-between items-baseline pb-3 border-b border-zinc-900">
                  <span className="text-zinc-500 font-mono text-xs uppercase">Industry Tenure</span>
                  <span className="font-medium text-white">6 Years (Continuous Practice)</span>
                </div>

                <div className="flex justify-between items-baseline pb-3 border-b border-zinc-900">
                  <span className="text-zinc-500 font-mono text-xs uppercase">Location Base</span>
                  <span className="font-medium text-white">{PORTFOLIO_DATA.profile.location}</span>
                </div>

                <div className="flex justify-between items-baseline pb-3 border-b border-zinc-900">
                  <span className="text-zinc-500 font-mono text-xs uppercase">Direct Contact</span>
                  <a
                    href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                    className="font-mono text-xs text-zinc-300 hover:text-white underline underline-offset-4"
                  >
                    {PORTFOLIO_DATA.profile.email}
                  </a>
                </div>

                <div className="flex justify-between items-baseline">
                  <span className="text-zinc-500 font-mono text-xs uppercase">Workflow Pipeline</span>
                  <span className="text-zinc-300 text-right text-xs">Vector Prepress to 4K Digital Master</span>
                </div>
              </div>

              {/* Approach Philosophy Quote */}
              <div className="mt-8 pt-6 border-t border-zinc-900">
                <p className="text-xs font-serif italic text-zinc-400 leading-relaxed">
                  "{PORTFOLIO_DATA.profile.philosophy}"
                </p>
              </div>
            </div>

            {/* Guiding Principles List */}
            <div className="p-6 bg-black border border-zinc-800/80 rounded-sm">
              <h4 className="font-mono text-xs uppercase tracking-widest text-zinc-400 mb-4">
                Core Production Standards
              </h4>
              <ul className="space-y-3 text-xs text-zinc-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                  <span><strong>Mathematical Precision:</strong> Clean vector paths, proper bleed margins, and lossless CMYK/RGB output.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                  <span><strong>Story-First Pacing:</strong> Video cuts timed to emotional beats and viewer retention rather than decorative clutter.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                  <span><strong>Native Software Synergy:</strong> Seamless interoperability between Photoshop, Illustrator, CorelDRAW, Premiere Pro & After Effects.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
