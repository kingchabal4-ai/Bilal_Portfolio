import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Clock, Mail } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { getKarachiTimeString } from '../utils/portfolio';
import { MagneticButton } from './MagneticButton';

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(getKarachiTimeString());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    const timer = setInterval(() => {
      setCurrentTime(getKarachiTimeString());
    }, 1000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
    };
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Software', href: '#software' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/90 backdrop-blur-md border-b border-zinc-800/80 py-3.5 shadow-2xl'
            : 'bg-gradient-to-b from-black via-black/80 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Brand */}
            <a
              href="#top"
              className="group flex items-center gap-3.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 p-1"
            >
              <div className="w-10 h-10 border border-zinc-700 bg-zinc-950 flex items-center justify-center transition-colors group-hover:border-white">
                <span className="font-display font-bold text-sm tracking-tighter text-white">MB</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-sm font-bold tracking-tight text-white uppercase group-hover:text-zinc-200">
                  {PORTFOLIO_DATA.profile.name}
                </span>
                <span className="text-[11px] text-zinc-400 font-mono tracking-wider uppercase">
                  Designer & Editor
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors duration-200 relative py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Right Meta Info & CTA */}
            <div className="hidden lg:flex items-center gap-6">
              {/* Live Karachi Time Clock */}
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 border border-zinc-800/80 bg-zinc-950/60 px-3 py-1.5 rounded-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <Clock className="w-3.5 h-3.5 text-zinc-500" />
                <span>KHI {currentTime}</span>
              </div>

              {/* Contact Button */}
              <MagneticButton
                variant="primary"
                href="#contact"
                onClick={() => handleNavClick('#contact')}
                className="text-xs py-2 px-5"
              >
                Get in Touch
              </MagneticButton>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-zinc-400 hover:text-white border border-zinc-800 bg-zinc-950 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-30 bg-black pt-24 px-6 pb-12 flex flex-col justify-between md:hidden border-b border-zinc-800"
          >
            <div className="flex flex-col gap-6">
              <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest pb-3 border-b border-zinc-900">
                Navigation
              </div>

              <div className="flex flex-col gap-5">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className="font-display text-2xl font-semibold tracking-tight text-zinc-300 hover:text-white flex items-center justify-between py-2 border-b border-zinc-900/60"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-5 h-5 text-zinc-600" />
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-zinc-900 flex flex-col gap-4">
              <div className="flex items-center justify-between text-xs font-mono text-zinc-500">
                <span>Location: Karachi, Pakistan</span>
                <span>{currentTime}</span>
              </div>
              <a
                href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                className="flex items-center justify-center gap-2 bg-white text-black font-semibold text-xs py-3.5 px-6 uppercase tracking-wider"
              >
                <Mail className="w-4 h-4" />
                {PORTFOLIO_DATA.profile.email}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
