import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';

interface MagneticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  ariaLabel?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  onClick,
  className = '',
  variant = 'primary',
  href,
  type = 'button',
  ariaLabel,
}) => {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const deltaX = (clientX - centerX) * 0.28;
    const deltaY = (clientY - centerY) * 0.28;
    setPosition({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles = 'relative inline-flex items-center justify-center font-medium text-sm tracking-wider uppercase transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

  const variantStyles = {
    primary:
      'bg-white text-black hover:bg-zinc-200 border border-white px-7 py-3.5 shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.25)]',
    secondary:
      'bg-zinc-950 text-white border border-zinc-700/80 hover:border-zinc-300 hover:bg-zinc-900 px-7 py-3.5',
    ghost:
      'bg-transparent text-zinc-400 hover:text-white border border-transparent hover:border-zinc-800 px-5 py-2.5',
  };

  const content = (
    <motion.div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', damping: 15, stiffness: 180, mass: 0.1 }}
      className="inline-block"
    >
      {href ? (
        <a
          href={href}
          onClick={onClick}
          aria-label={ariaLabel}
          className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        >
          {children}
        </a>
      ) : (
        <button
          type={type}
          onClick={onClick}
          aria-label={ariaLabel}
          className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        >
          {children}
        </button>
      )}
    </motion.div>
  );

  return content;
};
