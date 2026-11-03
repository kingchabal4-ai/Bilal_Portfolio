import React from 'react';
import { motion } from 'motion/react';
import { Layers, Sliders, Cpu, Terminal, Sparkles, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const SoftwareSection: React.FC = () => {
  return (
    <section id="software" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-black border-t border-zinc-900">
      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col mb-20">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.25em] text-zinc-500 mb-3">
            <span className="w-8 h-[1px] bg-zinc-700" />
            <span>03 // PRODUCTION TOOLKIT</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="font-display text-4xl sm:text-6xl font-black uppercase tracking-tight text-white">
                Software Knowledge
              </h2>
              <p className="text-zinc-400 text-base sm:text-lg font-light mt-3 max-w-2xl">
                Industry-standard creative applications leveraged across six years of rigorous production in Karachi, Pakistan.
              </p>
            </div>
            <div className="text-xs font-mono text-zinc-500">
              NO FABRICATED METRICS · VERIFIED APPLICATION WORKFLOWS
            </div>
          </div>
        </div>

        {/* 6 Software Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.software.map((tool, index) => (
            <motion.div
              key={tool.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative p-7 sm:p-8 bg-zinc-950 border border-zinc-800/80 hover:border-white transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Monogram Badge & Category */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-900">
                  <div className="flex items-center gap-3">
                    {/* Software Monogram in Luxury Monochrome Silver/Dark Box */}
                    <div className="w-12 h-12 border border-zinc-700 bg-black flex items-center justify-center font-display font-black text-xl tracking-tight text-white group-hover:border-white group-hover:bg-zinc-900 transition-colors shadow-inner">
                      {tool.badge}
                    </div>
                    <div>
                      <span className="font-display font-bold text-lg text-white block uppercase tracking-tight">
                        {tool.name}
                      </span>
                      <span className="text-[11px] font-mono text-zinc-500 uppercase">
                        {tool.category}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed mb-6">
                  {tool.description}
                </p>
              </div>

              {/* Specialization List */}
              <div className="pt-4 border-t border-zinc-900/80">
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block mb-3">
                  Production Specializations
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs text-zinc-300">
                  {tool.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-400">
                      <span className="w-1 h-1 bg-zinc-500 rounded-full group-hover:bg-white transition-colors" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Subtle Silver Hover Line */}
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-transparent group-hover:bg-gradient-to-r group-hover:from-transparent group-hover:via-white group-hover:to-transparent transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Integration Statement */}
        <div className="mt-16 p-8 bg-zinc-950/60 border border-zinc-800/80 text-center max-w-3xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-widest text-zinc-400 mb-2">
            Multi-Platform Interoperability
          </p>
          <p className="text-sm text-zinc-300 font-light leading-relaxed">
            From raster retouching in Photoshop and vector precision in CorelDRAW / Illustrator, to seamless dynamic linking across Premiere Pro and After Effects—every project benefits from a calibrated, unified creative pipeline.
          </p>
        </div>
      </div>
    </section>
  );
};
