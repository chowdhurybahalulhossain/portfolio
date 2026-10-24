import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Award,
  Calendar,
  CheckCircle,
  FileCheck2,
  Users2,
  Globe2,
} from 'lucide-react';
import { resumeData } from '../data/resumeData';

export const Education: React.FC = () => {
  const { education, certifications, leadership, languages } = resumeData;

  return (
    <section id="education" className="relative py-24 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-cyan-400 mb-3">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>ACADEMIC & CREDENTIALS</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
          Education & <span className="gradient-text-cyan">Certifications</span>
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
          Formal engineering degree, recognized vocational certificates, and collegiate club leadership.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Education Timeline (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
            <GraduationCap className="w-5 h-5 text-cyan-400" />
            <span>Academic Background</span>
          </h3>

          <div className="space-y-6">
            {education.map((edu, idx) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-3xl glass-panel glass-panel-hover border border-white/10 relative overflow-hidden"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div className="text-xs font-mono text-cyan-400 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 self-start">
                    {edu.result}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                <h4 className="text-xl font-bold text-white mb-1.5">
                  {edu.degree}
                </h4>
                <div className="text-sm font-medium text-zinc-300 mb-3">
                  {edu.institution}
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-zinc-400">
                  <span>Field: {edu.field}</span>
                  <span className="text-cyan-400 flex items-center gap-1 font-mono">
                    <CheckCircle className="w-3.5 h-3.5" /> Verified
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Leadership highlight card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 rounded-3xl glass-panel border border-white/10 relative overflow-hidden"
          >
            <div className="flex items-center gap-2 text-xs font-mono text-purple-400 mb-2">
              <Users2 className="w-4 h-4" />
              <span>COLLEGIATE LEADERSHIP</span>
            </div>
            <h4 className="text-lg font-bold text-white mb-1">
              {leadership.role}
            </h4>
            <div className="text-sm text-zinc-300 font-medium mb-2">
              {leadership.organization}
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              {leadership.impact}
            </p>
          </motion.div>
        </div>

        {/* Right Column: Certifications & Languages (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
            <Award className="w-5 h-5 text-indigo-400" />
            <span>Professional Certifications</span>
          </h3>

          <div className="space-y-4">
            {certifications.map((cert, idx) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-5 rounded-2xl glass-panel glass-panel-hover border border-white/10 flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3.5">
                  <span className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shrink-0">
                    <FileCheck2 className="w-4 h-4" />
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-white leading-snug">
                      {cert.title}
                    </h4>
                    <div className="text-xs text-zinc-400">
                      {cert.issuer}
                    </div>
                  </div>
                </div>

                <div className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-zinc-300 shrink-0">
                  {cert.year}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Languages Card */}
          <div className="p-6 rounded-3xl glass-panel border border-white/10">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-4">
              <Globe2 className="w-4 h-4" />
              <span>LANGUAGE PROFICIENCY</span>
            </div>
            <div className="space-y-3">
              {languages.map((l) => (
                <div key={l.name} className="flex items-center justify-between text-xs">
                  <span className="text-sm font-semibold text-white">{l.name}</span>
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300">
                    {l.proficiency}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
