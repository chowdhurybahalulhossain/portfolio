import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Sparkles, Code2, Database } from 'lucide-react';

interface PhotoCard3DProps {
  imageSrc: string;
  name: string;
}

export const PhotoCard3D: React.FC<PhotoCard3DProps> = ({ imageSrc, name }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Motion values for 3D tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 250, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 250, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['14deg', '-14deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-14deg', '14deg']);
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ['0%', '100%']);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ['0%', '100%']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      className="relative flex items-center justify-center p-4 md:p-8"
      style={{ perspective: 1200 }}
    >
      {/* Ambient background glow orbs */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/20 via-indigo-500/20 to-purple-500/20 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-sky-500/25 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute -top-8 -right-8 w-48 h-48 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

      {/* Floating 3D Tilt Container */}
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-72 sm:w-80 md:w-96 rounded-3xl p-3 bg-gradient-to-b from-white/10 to-white/5 border border-white/15 backdrop-blur-xl shadow-2xl shadow-cyan-950/40 cursor-grab active:cursor-grabbing group"
      >
        {/* Dynamic Glass Glare effect */}
        <motion.div
          className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-40 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.4) 0%, transparent 65%)`,
            zIndex: 10,
          }}
        />

        {/* Photo Container */}
        <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-zinc-950/90 shadow-inner">
          <img
            src={imageSrc}
            alt={name}
            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            loading="eager"
          />

          {/* Subtle gradient vignette to blend into dark backdrop */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050609] via-transparent to-black/20 opacity-80" />

          {/* Floating Badge at top */}
          <div
            className="absolute top-3 left-3 right-3 flex items-center justify-between"
            style={{ transform: 'translateZ(30px)' }}
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs font-medium text-emerald-400 shadow-lg">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for Hire
            </div>

            <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs text-zinc-300">
              <Sparkles className="w-3 h-3 text-cyan-400" />
              <span>Full-Stack</span>
            </div>
          </div>

          {/* Bottom Card Overlay Details */}
          <div
            className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-zinc-950/80 backdrop-blur-md border border-white/10 shadow-lg"
            style={{ transform: 'translateZ(35px)' }}
          >
            <div className="flex items-center justify-between text-xs text-zinc-400 mb-1">
              <span>Dhaka, Bangladesh</span>
              <span className="text-cyan-400 font-mono">IUBAT • 2026</span>
            </div>
            <div className="text-sm font-semibold text-white tracking-wide">
              Bahalul Hossain Chowdhury
            </div>
            <div className="flex items-center gap-2 mt-2 pt-2 border-t border-white/10 text-[11px] text-zinc-400">
              <span className="flex items-center gap-1 text-sky-300">
                <Code2 className="w-3 h-3" /> Node.js / React
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-indigo-300">
                <Database className="w-3 h-3" /> PostgreSQL / Socket.io
              </span>
            </div>
          </div>
        </div>

        {/* 3D Depth floating accent chips */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-3 -right-3 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-900/90 border border-cyan-500/30 text-xs font-mono text-cyan-300 shadow-xl backdrop-blur-md"
          style={{ transform: 'translateZ(45px)' }}
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
          7 Mo. Support Exp
        </motion.div>

        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute -bottom-3 -left-3 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-900/90 border border-indigo-500/30 text-xs font-mono text-indigo-300 shadow-xl backdrop-blur-md"
          style={{ transform: 'translateZ(45px)' }}
        >
          <span>⚡</span>
          Real-Time & REST
        </motion.div>
      </motion.div>
    </div>
  );
};
