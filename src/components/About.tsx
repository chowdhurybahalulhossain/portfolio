import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Layers,
  Compass,
  Award,
  Globe2,
  Server,
  Users2,
  CheckCircle2,
} from 'lucide-react';
import { resumeData } from '../data/resumeData';

export const About: React.FC = () => {
  const { personal, languages } = resumeData;

  return (
    <section id="about" className="relative py-24 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-cyan-400 mb-3">
          <Layers className="w-3.5 h-3.5" />
          <span>ABOUT ME</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
          Engineering Mindset, <span className="gradient-text-cyan">Real-World Execution</span>
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
          A visual overview of my educational foundation, engineering philosophy, and professional trajectory.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        {/* Card 1: Core Background & Education (Col 7) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="md:col-span-7 p-6 sm:p-8 rounded-3xl glass-panel glass-panel-hover flex flex-col justify-between relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="p-2.5 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <GraduationCap className="w-5 h-5" />
              </span>
              <span className="text-xs font-mono text-zinc-400 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                Background
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
              Computer Science & Engineering Graduate
            </h3>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-4">
              Earned a Bachelor of Computer Science and Engineering (BCSE) from{' '}
              <strong className="text-white">IUBAT</strong> (CGPA 3.10/4.00), building upon a perfect{' '}
              <strong className="text-white">GPA 5.00/5.00</strong> Science HSC at Gazipur Metropolitan College.
            </p>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
              Equipped with deep foundational knowledge in data structures, algorithms, object-oriented programming (C, C++), relational database schemas, and modern web application development.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-6 pt-5 border-t border-white/10">
            <div className="flex items-center gap-2 text-xs text-zinc-300">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Relational SQL Design</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-zinc-300">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Full-Stack MVC Systems</span>
            </div>
          </div>
        </motion.div>

        {/* Card 2: Professional Focus (Col 5) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:col-span-5 p-6 sm:p-8 rounded-3xl glass-panel glass-panel-hover flex flex-col justify-between relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="p-2.5 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                <Server className="w-5 h-5" />
              </span>
              <span className="text-xs font-mono text-zinc-400 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                Focus
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
              Full-Stack & Backend Systems
            </h3>
            <p className="text-zinc-300 text-sm leading-relaxed mb-4">
              Hands-on engineering across JavaScript, Node.js, Express.js, React, PostgreSQL, and Socket.io.
            </p>
            <div className="space-y-2 text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                <span>Real-time bidirectional event handling via Socket.io</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                <span>JWT & bcrypt authentication & RBAC protection</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                <span>Third-party integrations (Stripe payments)</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400">
            <span>Primary Ecosystem</span>
            <span className="font-mono text-indigo-300">Node • Express • React</span>
          </div>
        </motion.div>

        {/* Card 3: Career Direction & Python Learning (Col 5) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:col-span-5 p-6 sm:p-8 rounded-3xl glass-panel glass-panel-hover flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="p-2.5 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <Compass className="w-5 h-5" />
              </span>
              <span className="text-xs font-mono text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                Trajectory
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Growth & Python Learning
            </h3>
            <p className="text-zinc-300 text-sm leading-relaxed mb-4">
              Actively mastering Python to expand capabilities into automated backend pipelines, data processing, and scripting.
            </p>
            <div className="p-3.5 rounded-2xl bg-zinc-950/60 border border-white/10">
              <div className="text-xs text-zinc-400 mb-1">Target Roles:</div>
              <div className="flex flex-wrap gap-1.5">
                {personal.targetRoles.map((role) => (
                  <span
                    key={role}
                    className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] text-zinc-200"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 text-xs text-zinc-500 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Ready for Immediate Onboarding</span>
          </div>
        </motion.div>

        {/* Card 4: Practical Strengths & Support Experience (Col 4) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="md:col-span-4 p-6 sm:p-8 rounded-3xl glass-panel glass-panel-hover flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="p-2.5 rounded-2xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
                <Award className="w-5 h-5" />
              </span>
              <span className="text-xs font-mono text-zinc-400 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                Experience
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Software Support & Diagnostics
            </h3>
            <p className="text-zinc-300 text-sm leading-relaxed mb-3">
              7 months at <strong className="text-white">3S Softtech Limited</strong> configuring, maintaining software tools for client systems, and documenting solutions for support staff.
            </p>
            <div className="text-xs text-zinc-400">
              Plus telesales lead qualification and high-target performance at <strong className="text-zinc-300">SkyTech Limited</strong>.
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-white/10 text-xs font-mono text-sky-400">
            Systems • Triage • Documentation
          </div>
        </motion.div>

        {/* Card 5: Leadership & Languages (Col 3) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="md:col-span-3 p-6 sm:p-8 rounded-3xl glass-panel glass-panel-hover flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="p-2.5 rounded-2xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                <Users2 className="w-5 h-5" />
              </span>
              <span className="text-xs font-mono text-zinc-400 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                Leadership
              </span>
            </div>
            <h3 className="text-lg font-bold text-white mb-1">
              Senior Vice President
            </h3>
            <div className="text-xs text-purple-300 font-medium mb-3">
              Cultural Club (1 Year)
            </div>
            <p className="text-zinc-400 text-xs leading-relaxed mb-4">
              Gazipur Metropolitan College. Coordinated team members, events, and student communications.
            </p>
          </div>

          <div className="pt-3 border-t border-white/10">
            <div className="flex items-center gap-1.5 text-xs text-zinc-400 mb-2">
              <Globe2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>Languages</span>
            </div>
            <div className="space-y-1 text-xs">
              {languages.map((lang) => (
                <div key={lang.name} className="flex justify-between items-center text-zinc-300">
                  <span className="font-medium text-white">{lang.name}</span>
                  <span className="text-zinc-500 text-[11px]">{lang.proficiency}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
