import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  HeartHandshake,
  Compass,
  Utensils,
  Layers,
  Maximize,
  CreditCard,
  LayoutGrid,
  Presentation,
  BookOpen,
  Wand2,
  PlaySquare,
  Smartphone,
  Sparkles,
  Film,
  Video,
  Activity,
  Repeat,
  Sliders,
  Type,
  ArrowUpRight,
  Check,
  X,
  Mail,
} from 'lucide-react';
import { PORTFOLIO_DATA, ServiceItem } from '../data/portfolioData';
import { createMailtoLink } from '../utils/portfolio';
import { MagneticButton } from './MagneticButton';

// Icon Map
const iconMap: Record<string, React.ReactNode> = {
  HeartHandshake: <HeartHandshake className="w-5 h-5" />,
  Compass: <Compass className="w-5 h-5" />,
  Utensils: <Utensils className="w-5 h-5" />,
  Layers: <Layers className="w-5 h-5" />,
  Maximize: <Maximize className="w-5 h-5" />,
  CreditCard: <CreditCard className="w-5 h-5" />,
  LayoutGrid: <LayoutGrid className="w-5 h-5" />,
  Presentation: <Presentation className="w-5 h-5" />,
  BookOpen: <BookOpen className="w-5 h-5" />,
  Wand2: <Wand2 className="w-5 h-5" />,
  PlaySquare: <PlaySquare className="w-5 h-5" />,
  Smartphone: <Smartphone className="w-5 h-5" />,
  Sparkles: <Sparkles className="w-5 h-5" />,
  Film: <Film className="w-5 h-5" />,
  Video: <Video className="w-5 h-5" />,
  Activity: <Activity className="w-5 h-5" />,
  Repeat: <Repeat className="w-5 h-5" />,
  Sliders: <Sliders className="w-5 h-5" />,
  Type: <Type className="w-5 h-5" />,
};

export const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const graphicServices = PORTFOLIO_DATA.graphicDesignServices;
  const videoServices = PORTFOLIO_DATA.videoEditingServices;

  return (
    <section id="services" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-black border-t border-zinc-900">
      <div className="relative max-w-7xl mx-auto">
        {/* Master Section Header */}
        <div className="flex flex-col mb-20">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.25em] text-zinc-500 mb-3">
            <span className="w-8 h-[1px] bg-zinc-700" />
            <span>02 // CAPABILITIES & SCOPE</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="font-display text-4xl sm:text-6xl font-black uppercase tracking-tight text-white">
                Professional Services
              </h2>
              <p className="text-zinc-400 text-base sm:text-lg font-light mt-3 max-w-2xl">
                Precision-engineered graphic design and cinematic video editing. Every service backed by six years of practical mastery.
              </p>
            </div>
            <div className="text-right text-xs font-mono text-zinc-500">
              <span className="text-white font-bold">19</span> DISTINCT DISCIPLINES
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* SECTION 1: GRAPHIC DESIGN (10 SERVICES)                 */}
        {/* ======================================================== */}
        <div className="mb-28">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-6 mb-10 border-b border-zinc-800">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 bg-white rounded-full" />
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white">
                Graphic Design
              </h3>
            </div>
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest mt-2 sm:mt-0">
              10 Specialized Print & Digital Solutions
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {graphicServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onClick={() => setSelectedService(service)}
                className="group relative p-6 sm:p-7 bg-zinc-950 border border-zinc-800/80 hover:border-zinc-300 transition-all duration-300 cursor-pointer flex flex-col justify-between hover:shadow-[0_0_30px_rgba(255,255,255,0.06)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs text-zinc-500 group-hover:text-zinc-300 transition-colors">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="w-9 h-9 border border-zinc-800 bg-black flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-zinc-500 transition-colors">
                      {iconMap[service.icon] || <Compass className="w-5 h-5" />}
                    </div>
                  </div>

                  <h4 className="font-display text-xl font-bold uppercase tracking-tight text-white mb-3 group-hover:text-zinc-100 flex items-center justify-between">
                    <span>{service.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </h4>

                  <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Deliverables Preview Tags */}
                <div className="pt-4 border-t border-zinc-900">
                  <div className="flex flex-wrap gap-1.5 text-[11px] font-mono text-zinc-500">
                    {service.deliverables.slice(0, 2).map((item, idx) => (
                      <span key={idx} className="border border-zinc-800/60 bg-zinc-900/40 px-2 py-0.5 text-zinc-400">
                        {item}
                      </span>
                    ))}
                    {service.deliverables.length > 2 && (
                      <span className="text-zinc-600 px-1 py-0.5">
                        +{service.deliverables.length - 2} more
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ======================================================== */}
        {/* SECTION 2: VIDEO EDITING (9 SERVICES)                   */}
        {/* ======================================================== */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-6 mb-10 border-b border-zinc-800">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 bg-white rounded-full" />
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white">
                Video Editing
              </h3>
            </div>
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest mt-2 sm:mt-0">
              09 High-Retention Post-Production Services
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onClick={() => setSelectedService(service)}
                className="group relative p-6 sm:p-7 bg-zinc-950 border border-zinc-800/80 hover:border-zinc-300 transition-all duration-300 cursor-pointer flex flex-col justify-between hover:shadow-[0_0_30px_rgba(255,255,255,0.06)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs text-zinc-500 group-hover:text-zinc-300 transition-colors">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="w-9 h-9 border border-zinc-800 bg-black flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-zinc-500 transition-colors">
                      {iconMap[service.icon] || <Film className="w-5 h-5" />}
                    </div>
                  </div>

                  <h4 className="font-display text-xl font-bold uppercase tracking-tight text-white mb-3 group-hover:text-zinc-100 flex items-center justify-between">
                    <span>{service.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </h4>

                  <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Deliverables Preview Tags */}
                <div className="pt-4 border-t border-zinc-900">
                  <div className="flex flex-wrap gap-1.5 text-[11px] font-mono text-zinc-500">
                    {service.deliverables.slice(0, 2).map((item, idx) => (
                      <span key={idx} className="border border-zinc-800/60 bg-zinc-900/40 px-2 py-0.5 text-zinc-400">
                        {item}
                      </span>
                    ))}
                    {service.deliverables.length > 2 && (
                      <span className="text-zinc-600 px-1 py-0.5">
                        +{service.deliverables.length - 2} more
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-xl bg-zinc-950 border border-zinc-700 p-6 sm:p-8 text-white shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-5 right-5 p-2 text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-500 transition-colors"
                aria-label="Close service modal"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-500 mb-3">
                <span>{selectedService.category.replace('-', ' ')}</span>
                <span>/</span>
                <span>Specification</span>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 border border-zinc-700 bg-black flex items-center justify-center">
                  {iconMap[selectedService.icon]}
                </div>
                <h3 className="font-display text-2xl font-bold uppercase tracking-tight">
                  {selectedService.title}
                </h3>
              </div>

              <p className="text-sm text-zinc-300 font-light leading-relaxed mb-6">
                {selectedService.description}
              </p>

              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3">
                  Scope & Deliverables
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-300">
                  {selectedService.deliverables.map((del, i) => (
                    <li key={i} className="flex items-center gap-2 border border-zinc-800/80 bg-zinc-900/60 p-2.5">
                      <Check className="w-3.5 h-3.5 text-white shrink-0" />
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Direct Inquire for this service */}
              <div className="pt-6 border-t border-zinc-800 flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-500">
                  Practitioner: Muhammad Bilal
                </span>
                <a
                  href={createMailtoLink(
                    `Inquiry: ${selectedService.title}`,
                    `Hello Muhammad Bilal,\n\nI am interested in your ${selectedService.title} service. Here are some details about my project:`
                  )}
                  className="inline-flex items-center gap-2 bg-white text-black font-semibold text-xs px-5 py-2.5 uppercase tracking-wider hover:bg-zinc-200 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  Inquire for this Service
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
