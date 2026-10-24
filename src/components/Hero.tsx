import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowDown,
  FileDown,
  Mail,
  Phone,
  MapPin,
  Terminal,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { resumeData } from '../data/resumeData';
import { PhotoCard3D } from './PhotoCard3D';

export const Hero: React.FC = () => {
  const { personal } = resumeData;

  const handleDownload = () => {
    confetti({
      particleCount: 80,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#38bdf8', '#818cf8', '#34d399', '#ffffff'],
    });
  };

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 md:px-8 overflow-hidden"
    >
      {/* Background ambient lighting aura */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[380px] bg-cyan-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column: Hero Typography & CTAs */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-xs font-medium text-cyan-300 shadow-sm backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>Seeking Software Engineer & Full-Stack Opportunities</span>
          </div>

          {/* Name & Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-4 leading-[1.08]">
            <span className="block text-zinc-400 text-lg sm:text-xl font-mono font-medium tracking-normal mb-2">
              Hello, I am
            </span>
            <span className="gradient-text-cyan">{personal.name}</span>
          </h1>

          <p className="text-lg sm:text-xl font-medium text-zinc-300 mb-5 flex items-center gap-2 flex-wrap">
            <span className="text-cyan-400">{personal.title}</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400">BCSE Graduate (IUBAT)</span>
          </p>

          {/* Summary strictly from resume */}
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl mb-8">
            {personal.summary}
          </p>

          {/* Primary & Secondary Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
            <button
              onClick={() => scrollTo('#projects')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/25 transition-all duration-200 active:scale-95 group cursor-pointer"
            >
              <span>View My Work</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </button>

            <a
              href={personal.resumePdf}
              download="Bahalul_Hossain_Chowdhury_Resume.pdf"
              onClick={handleDownload}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm bg-zinc-900/80 hover:bg-zinc-800 text-zinc-100 border border-white/10 hover:border-white/20 shadow-md backdrop-blur-md transition-all duration-200 active:scale-95 cursor-pointer"
            >
              <FileDown className="w-4 h-4 text-cyan-400" />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Recruiter Quick Fact Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full max-w-2xl pt-6 border-t border-white/10">
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 backdrop-blur-sm">
              <div className="flex items-center gap-1.5 text-xs text-zinc-400 mb-1">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span>Support Exp.</span>
              </div>
              <div className="text-sm font-bold text-white">7 Months</div>
              <div className="text-[11px] text-zinc-500">3S Softtech Limited</div>
            </div>

            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 backdrop-blur-sm">
              <div className="flex items-center gap-1.5 text-xs text-zinc-400 mb-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Education</span>
              </div>
              <div className="text-sm font-bold text-white">BCSE Graduate</div>
              <div className="text-[11px] text-zinc-500">IUBAT (CGPA 3.10)</div>
            </div>

            <div className="col-span-2 sm:col-span-1 p-3 rounded-xl bg-white/[0.03] border border-white/5 backdrop-blur-sm">
              <div className="flex items-center gap-1.5 text-xs text-zinc-400 mb-1">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>Core Stack</span>
              </div>
              <div className="text-sm font-bold text-white">Full-Stack</div>
              <div className="text-[11px] text-zinc-500">Node • React • Postgres</div>
            </div>
          </div>

          {/* Quick contact tags */}
          <div className="flex flex-wrap items-center gap-4 mt-6 text-xs text-zinc-400">
            <span className="flex items-center gap-1.5 hover:text-white transition-colors">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              {personal.location}
            </span>
            <a
              href={`mailto:${personal.email}`}
              className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              {personal.email}
            </a>
            <a
              href={`tel:${personal.phone}`}
              className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              {personal.phone}
            </a>
          </div>
        </motion.div>

        {/* Right Column: 3D Photo & Depth Artifact */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center items-center"
        >
          <PhotoCard3D imageSrc={personal.profilePhoto} name={personal.name} />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo('#about')}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-zinc-500 hover:text-cyan-400 transition-colors cursor-pointer"
        aria-label="Scroll to About section"
      >
        <span className="text-[10px] uppercase tracking-widest font-mono">Scroll</span>
        <ArrowDown className="w-3.5 h-3.5" />
      </motion.button>
    </section>
  );
};
