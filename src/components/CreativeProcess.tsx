import React from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const CreativeProcess: React.FC = () => {
  const steps = PORTFOLIO_DATA.process;

  return (
    <section id="process" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-black border-t border-zinc-900 overflow-hidden">
      {/* Background Subtle Line Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col mb-20">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.25em] text-zinc-500 mb-3">
            <span className="w-8 h-[1px] bg-zinc-700" />
            <span>04 // METHODOLOGY</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="font-display text-4xl sm:text-6xl font-black uppercase tracking-tight text-white">
                Creative Process
              </h2>
              <p className="text-zinc-400 text-base sm:text-lg font-light mt-3 max-w-2xl">
                A structured four-stage production framework engineered for clarity, predictable execution, and cinematic excellence.
              </p>
            </div>
            <div className="text-xs font-mono text-zinc-500">
              DISCOVERY TO MASTER DELIVERY
            </div>
          </div>
        </div>

        {/* Desktop Connecting Line (Animated SVG Track) */}
        <div className="relative">
          <div className="hidden lg:block absolute top-[68px] left-[10%] right-[10%] h-[2px] bg-zinc-800 -z-0">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              className="h-full bg-white origin-left"
            />
          </div>

          {/* 4 Stages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((stage, index) => (
              <motion.div
                key={stage.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="p-7 sm:p-8 bg-zinc-950 border border-zinc-800/80 hover:border-zinc-400 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  {/* Step Number Circle / Node */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-full border border-zinc-700 bg-black flex items-center justify-center font-display font-black text-sm text-white group-hover:border-white group-hover:scale-105 transition-all">
                      {stage.step}
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-500">
                      Phase {index + 1}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-white mb-1 group-hover:text-zinc-200">
                    {stage.title}
                  </h3>
                  <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider block mb-4">
                    {stage.subtitle}
                  </span>

                  <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed mb-6">
                    {stage.description}
                  </p>
                </div>

                {/* Phase Deliverables */}
                <div className="pt-4 border-t border-zinc-900">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block mb-2">
                    Key Outputs
                  </span>
                  <ul className="space-y-1.5">
                    {stage.deliverables.map((del, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-2 text-xs text-zinc-300 font-mono">
                        <span className="w-1 h-1 bg-zinc-500 rounded-full group-hover:bg-white" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
