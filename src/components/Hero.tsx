import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Sparkles, MoveRight, Layers, Film, Compass } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Hero3DCanvas } from './Hero3DCanvas';
import { WorkstationIllustration } from './WorkstationIllustration';
import { MagneticButton } from './MagneticButton';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const headlineWords = PORTFOLIO_DATA.profile.headline.split(' ');

  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black bg-grid-pattern"
    >
      {/* Background Radial Vignette (Pure Monochrome) */}
      <div
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_40%,rgba(39,39,42,0.35)_0%,rgba(0,0,0,0.95)_75%)]"
        aria-hidden="true"
      />

      {/* Floating 3D Creative Wireframe Elements in background corners */}
      <div className="absolute top-24 right-10 w-72 h-72 opacity-25 pointer-events-none hidden lg:block">
        <svg viewBox="0 0 200 200" className="w-full h-full animate-[spin_60s_linear_infinite]">
          <polygon
            points="100,10 190,100 100,190 10,100"
            fill="none"
            stroke="#ffffff"
            strokeWidth="0.8"
            strokeDasharray="4 4"
          />
          <circle cx="100" cy="100" r="70" fill="none" stroke="#71717a" strokeWidth="0.5" />
          <polygon points="100,35 165,100 100,165 35,100" fill="none" stroke="#a1a1aa" strokeWidth="0.7" />
        </svg>
      </div>

      <div className="absolute bottom-20 left-6 w-56 h-56 opacity-20 pointer-events-none hidden lg:block">
        <svg viewBox="0 0 160 160" className="w-full h-full animate-[spin_45s_linear_infinite_reverse]">
          <circle cx="80" cy="80" r="60" fill="none" stroke="#ffffff" strokeWidth="0.5" strokeDasharray="3 3" />
          <rect x="35" y="35" width="90" height="90" fill="none" stroke="#71717a" strokeWidth="0.7" />
          <circle cx="80" cy="80" r="4" fill="#ffffff" />
        </svg>
      </div>

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & Narrative (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Metadata Kicker (Anti-Pill: Clean unboxed typographic layout) */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-[0.2em] text-zinc-400 mb-5"
            >
              <span className="w-2 h-2 bg-white rounded-full inline-block animate-pulse" />
              <span>{PORTFOLIO_DATA.profile.experience.toUpperCase()}</span>
              <span className="text-zinc-600">/</span>
              <span>{PORTFOLIO_DATA.profile.location.toUpperCase()}</span>
            </motion.div>

            {/* Name Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mb-2"
            >
              <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-none">
                {PORTFOLIO_DATA.profile.name}
              </h1>
            </motion.div>

            {/* Profession Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-[1px] w-8 bg-zinc-600 hidden sm:block" />
              <p className="font-mono text-xs sm:text-sm md:text-base font-medium tracking-[0.2em] uppercase text-zinc-300">
                {PORTFOLIO_DATA.profile.role}
              </p>
            </motion.div>

            {/* Animated Headline: "Creativity Beyond Boundaries." */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-6 overflow-hidden"
            >
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-zinc-100 tracking-tight leading-tight">
                {headlineWords.map((word, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.35 + idx * 0.12,
                      ease: [0.215, 0.61, 0.355, 1],
                    }}
                    className={`inline-block mr-2.5 ${
                      word.toLowerCase().includes('boundaries') ? 'italic font-serif font-normal text-white underline decoration-zinc-700 underline-offset-8' : ''
                    }`}
                  >
                    {word}
                  </motion.span>
                ))}
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="text-base sm:text-lg text-zinc-400 font-light leading-relaxed max-w-2xl mb-10"
            >
              {PORTFOLIO_DATA.profile.description}
            </motion.p>

            {/* Two Working Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="flex flex-wrap items-center gap-4 sm:gap-6"
            >
              <MagneticButton
                variant="primary"
                onClick={() => scrollTo('services')}
                ariaLabel="Explore Services offered by Muhammad Bilal"
              >
                <span className="flex items-center gap-2">
                  Explore Services
                  <MoveRight className="w-4 h-4" />
                </span>
              </MagneticButton>

              <MagneticButton
                variant="secondary"
                onClick={() => scrollTo('contact')}
                ariaLabel="Contact Muhammad Bilal"
              >
                <span className="flex items-center gap-2">
                  Contact Me
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                </span>
              </MagneticButton>
            </motion.div>

            {/* Quick Metrics Bar (Clean Editorial Line) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.85 }}
              className="grid grid-cols-3 gap-6 sm:gap-8 pt-10 mt-10 border-t border-zinc-900 max-w-lg"
            >
              <div>
                <span className="block font-display text-2xl sm:text-3xl font-bold text-white">06</span>
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500">
                  Years Experience
                </span>
              </div>
              <div>
                <span className="block font-display text-2xl sm:text-3xl font-bold text-white">19+</span>
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500">
                  Specialized Services
                </span>
              </div>
              <div>
                <span className="block font-display text-2xl sm:text-3xl font-bold text-white">06</span>
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500">
                  Mastered Software
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: 3D Scene & Studio Workstation (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            {/* Interactive 3D Canvas Box */}
            <div className="relative w-full aspect-square max-w-[420px] mx-auto flex items-center justify-center">
              {/* Geometric Accent Frame */}
              <div className="absolute inset-0 border border-zinc-800/70 rounded-full animate-[spin_80s_linear_infinite] pointer-events-none" />
              <div className="absolute inset-6 border border-zinc-900 rounded-full pointer-events-none" />

              {/* Three.js Interactive 3D Canvas */}
              <Hero3DCanvas />

              {/* Spatial Overlay Badge */}
              <div className="absolute bottom-2 right-2 border border-zinc-800/80 bg-zinc-950/90 px-3 py-1.5 text-[10px] font-mono text-zinc-400 uppercase tracking-widest backdrop-blur-sm pointer-events-none">
                3D Spatial Geometry · Move Mouse
              </div>
            </div>

            {/* Workstation Blueprint Preview */}
            <div className="w-full mt-6">
              <WorkstationIllustration />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between text-xs font-mono text-zinc-500 pt-6 border-t border-zinc-900/80">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
          <span>PORTFOLIO // MUHAMMAD BILAL</span>
        </div>
        <button
          onClick={() => scrollTo('about')}
          className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors cursor-pointer group"
          aria-label="Scroll down to About section"
        >
          <span className="uppercase tracking-widest text-[11px]">Scroll Down</span>
          <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
        </button>
      </div>
    </section>
  );
};
