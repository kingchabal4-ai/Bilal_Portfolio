import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PreloaderProps {
  onComplete?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Check if autostart query param is present
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('autostart') === '1') {
      setIsDone(true);
      onComplete?.();
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDone(true);
            onComplete?.();
          }, 350);
          return 100;
        }
        const increment = Math.floor(Math.random() * 14) + 6;
        return Math.min(100, prev + increment);
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  const handleSkip = () => {
    setIsDone(true);
    onComplete?.();
  };

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            y: '-100%',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-50 flex flex-col justify-between bg-black p-8 md:p-16 text-white cursor-pointer select-none"
          onClick={handleSkip}
          title="Click to skip intro"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between text-xs tracking-widest text-zinc-500 uppercase">
            <span>Muhammad Bilal</span>
            <span className="hidden sm:inline">6 Years of Experience · Karachi, PK</span>
            <button
              onClick={handleSkip}
              className="text-zinc-400 hover:text-white transition-colors cursor-pointer text-xs"
            >
              [ Skip Intro ]
            </button>
          </div>

          {/* Center Brand Monogram & Status */}
          <div className="my-auto flex flex-col items-center justify-center text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="w-16 h-16 border border-zinc-700 flex items-center justify-center mb-6 bg-zinc-950/80"
            >
              <span className="font-display text-2xl font-bold tracking-tighter text-white">MB</span>
            </motion.div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-display text-2xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight"
            >
              Muhammad Bilal
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="text-xs sm:text-sm tracking-[0.25em] text-zinc-400 uppercase mt-3"
            >
              Graphic Designer & Video Editor
            </motion.p>
          </div>

          {/* Bottom Progress Counter */}
          <div className="flex items-end justify-between border-t border-zinc-900 pt-6">
            <div className="flex flex-col">
              <span className="text-xs tracking-widest text-zinc-600 uppercase">System Initializing</span>
              <span className="text-xs text-zinc-400 font-mono mt-0.5">Crafting Visuals · 2026</span>
            </div>

            <div className="flex items-baseline gap-1 font-display">
              <span className="text-4xl sm:text-6xl md:text-7xl font-bold tabular-nums text-white">
                {String(progress).padStart(2, '0')}
              </span>
              <span className="text-lg sm:text-2xl text-zinc-600 font-mono">%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
