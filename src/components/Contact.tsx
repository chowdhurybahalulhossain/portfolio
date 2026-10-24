import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  FileDown,
  Copy,
  Check,
  Send,
  MessageCircle,
  Sparkles,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { resumeData } from '../data/resumeData';
import { GithubIcon, LinkedinIcon } from './icons';

export const Contact: React.FC = () => {
  const { personal } = resumeData;
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const handleDownload = () => {
    confetti({
      particleCount: 70,
      spread: 80,
      origin: { y: 0.8 },
      colors: ['#38bdf8', '#818cf8', '#34d399', '#ffffff'],
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Open mailto link
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Bahalul,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
    );
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;

    setFormSubmitted(true);
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.7 },
    });
  };

  return (
    <section id="contact" className="relative py-24 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-cyan-600/10 blur-[140px] rounded-full pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-cyan-400 mb-3">
          <MessageCircle className="w-3.5 h-3.5" />
          <span>GET IN TOUCH</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
          Let's build <span className="gradient-text-cyan">something meaningful.</span>
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
          I am actively seeking Software Engineer, Full-Stack Developer, and Backend Developer roles. Feel free to reach out directly.
        </p>
      </div>

      {/* Main Contact Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
        {/* Left Column: Direct verified contact cards (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          {/* Email Card */}
          <div className="p-6 rounded-3xl glass-panel glass-panel-hover border border-white/10 relative overflow-hidden flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0">
                <Mail className="w-5 h-5" />
              </span>
              <div>
                <div className="text-xs font-mono text-zinc-400">EMAIL ADDRESS</div>
                <a
                  href={`mailto:${personal.email}`}
                  className="text-sm sm:text-base font-semibold text-white hover:text-cyan-300 transition-colors break-all"
                >
                  {personal.email}
                </a>
              </div>
            </div>
            <button
              onClick={() => copyToClipboard(personal.email, 'email')}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Copy email address"
              title="Copy to clipboard"
            >
              {copiedType === 'email' ? (
                <Check className="w-4 h-4 text-emerald-400" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* Phone Card */}
          <div className="p-6 rounded-3xl glass-panel glass-panel-hover border border-white/10 relative overflow-hidden flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shrink-0">
                <Phone className="w-5 h-5" />
              </span>
              <div>
                <div className="text-xs font-mono text-zinc-400">PHONE / WHATSAPP</div>
                <a
                  href={`tel:${personal.phone}`}
                  className="text-sm sm:text-base font-semibold text-white hover:text-indigo-300 transition-colors"
                >
                  {personal.phoneFormatted}
                </a>
              </div>
            </div>
            <button
              onClick={() => copyToClipboard(personal.phone, 'phone')}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Copy phone number"
              title="Copy to clipboard"
            >
              {copiedType === 'phone' ? (
                <Check className="w-4 h-4 text-emerald-400" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* Location Card */}
          <div className="p-6 rounded-3xl glass-panel border border-white/10 flex items-center gap-4">
            <span className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
              <MapPin className="w-5 h-5" />
            </span>
            <div>
              <div className="text-xs font-mono text-zinc-400">LOCATION</div>
              <div className="text-sm sm:text-base font-semibold text-white">
                {personal.location}
              </div>
            </div>
          </div>

          {/* Prominent Resume Download Card */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-cyan-950/60 to-indigo-950/60 border border-cyan-500/30 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-cyan-300 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> OFFICIAL CURRICULUM VITAE
                </span>
                <span className="text-[11px] font-mono text-zinc-400">PDF Document</span>
              </div>
              <h4 className="text-lg font-bold text-white mb-1">
                Download Verified Resume
              </h4>
              <p className="text-xs text-zinc-300 mb-4 leading-relaxed">
                Contains complete educational scores, software support experience, and verified technical credentials.
              </p>
            </div>

            <a
              href={personal.resumePdf}
              download="Bahalul_Hossain_Chowdhury_Resume.pdf"
              onClick={handleDownload}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-xs bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/25 transition-all duration-200 active:scale-95 cursor-pointer"
            >
              <FileDown className="w-4 h-4" />
              <span>Download PDF Resume</span>
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Contact Form (7 cols) */}
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl glass-panel border border-white/10 flex flex-col justify-between">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Send a Direct Message
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm mb-6">
              Recruiters, hiring managers, and collaborators can send an inquiry directly to my verified inbox.
            </p>

            {formSubmitted ? (
              <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center my-8">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-3">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-white mb-1">Inquiry Prepared!</h4>
                <p className="text-xs text-zinc-300 max-w-sm mx-auto">
                  Your email client has opened with your message ready for sending to {personal.email}.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-4 text-xs text-cyan-400 hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                      YOUR EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                    MESSAGE / OPPORTUNITY *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="We have an open Software Engineer / Full-Stack role and were impressed by your background..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/20 transition-all duration-200 active:scale-95 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message to Bahalul</span>
                </button>
              </form>
            )}
          </div>

          {/* Social links row */}
          <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400">
            <span>Connect on Socials:</span>
            <div className="flex items-center gap-2">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-colors"
                aria-label="GitHub profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-colors"
                aria-label="LinkedIn profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
        <div>
          © {new Date().getFullYear()} <span className="text-zinc-300 font-medium">Bahalul Hossain Chowdhury</span>. All rights reserved.
        </div>
        <div className="flex items-center gap-4">
          <a href="#home" className="hover:text-cyan-400 transition-colors">
            Back to Top ↑
          </a>
          <span>•</span>
          <a
            href={personal.resumePdf}
            download="Bahalul_Hossain_Chowdhury_Resume.pdf"
            className="hover:text-cyan-400 transition-colors"
          >
            Download Resume
          </a>
        </div>
      </footer>
    </section>
  );
};
