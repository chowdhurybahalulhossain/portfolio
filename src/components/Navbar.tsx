import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileDown, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface NavbarProps {
  activeSection: string;
}

const navItems = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'EXPERIENCE', href: '#experience' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'EDUCATION', href: '#education' },
  { label: 'CONTACT', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleResumeDownload = () => {
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.15 },
      colors: ['#38bdf8', '#818cf8', '#34d399', '#ffffff'],
    });
  };

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8 py-3 md:py-4 flex justify-center items-center ${
          isScrolled ? 'backdrop-blur-md bg-black/40' : ''
        }`}
      >
        <nav
          className="w-full max-w-6xl mx-auto flex items-center justify-between px-4 py-2.5 rounded-full border border-white/10 bg-[#090b14]/80 backdrop-blur-xl shadow-xl shadow-black/40"
          aria-label="Main Navigation"
        >
          {/* Brand Monogram */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('#home');
            }}
            className="flex items-center gap-2 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-full pr-2"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white font-bold text-xs tracking-wider shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              BHC
            </div>
            <span className="hidden sm:inline font-semibold text-sm tracking-tight text-zinc-200 group-hover:text-white transition-colors">
              Bahalul Hossain
            </span>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <button
                  key={item.label}
                  onClick={() => scrollTo(item.href)}
                  className={`relative px-3.5 py-1.5 text-xs font-medium tracking-wide transition-colors rounded-full ${
                    isActive
                      ? 'text-cyan-300 font-semibold'
                      : 'text-zinc-400 hover:text-zinc-100 hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full bg-cyan-500/15 border border-cyan-500/30 -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-2">
            <a
              href="/Bahalul_Hossain_Chowdhury_Resume.pdf"
              download="Bahalul_Hossain_Chowdhury_Resume.pdf"
              onClick={handleResumeDownload}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-md shadow-cyan-500/20 transition-all duration-200 active:scale-95"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full text-zinc-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 z-40 p-5 rounded-3xl bg-[#090b14]/95 border border-white/10 backdrop-blur-2xl shadow-2xl lg:hidden flex flex-col gap-2"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs text-zinc-400">
              <span className="flex items-center gap-1 text-cyan-400">
                <Sparkles className="w-3.5 h-3.5" /> Navigation
              </span>
              <span>Bahalul Hossain Chowdhury</span>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <button
                    key={item.label}
                    onClick={() => scrollTo(item.href)}
                    className={`px-4 py-2.5 rounded-xl text-left text-xs font-medium transition-all ${
                      isActive
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                        : 'bg-white/5 text-zinc-300 hover:bg-white/10'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            <div className="pt-3 mt-1 border-t border-white/10">
              <a
                href="/Bahalul_Hossain_Chowdhury_Resume.pdf"
                download="Bahalul_Hossain_Chowdhury_Resume.pdf"
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleResumeDownload();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg"
              >
                <FileDown className="w-4 h-4" />
                Download Complete Resume (PDF)
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
