import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2, Building2, Wrench, PhoneCall } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export const Experience: React.FC = () => {
  const { experiences } = resumeData;

  return (
    <section id="experience" className="relative py-24 px-4 md:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-cyan-400 mb-3">
          <Briefcase className="w-3.5 h-3.5" />
          <span>CAREER TIMELINE</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
          Professional <span className="gradient-text-cyan">Experience</span>
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
          Demonstrated technical support, system maintenance, and client communication track record.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative pl-6 sm:pl-10 border-l border-cyan-500/30 ml-4 sm:ml-8 space-y-12">
        {experiences.map((exp, index) => {
          const isSupport = exp.role.includes('Support');
          return (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Glowing Timeline Marker */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-6 w-5 h-5 rounded-full bg-[#050609] border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.8)] group-hover:scale-125 transition-transform duration-300">
                <div className="w-2 h-2 rounded-full bg-cyan-400" />
              </div>

              {/* Card Container */}
              <div className="p-6 sm:p-8 rounded-3xl glass-panel glass-panel-hover border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-56 h-56 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/10 transition-colors" />

                {/* Top Row: Role, Company & Dates */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                      <span className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400">
                        {isSupport ? <Wrench className="w-4 h-4" /> : <PhoneCall className="w-4 h-4" />}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {exp.role}
                      </h3>
                      {exp.duration && (
                        <span className="text-xs px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-medium">
                          {exp.duration}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-zinc-300 text-sm font-medium">
                      <Building2 className="w-4 h-4 text-zinc-400" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-zinc-400 self-start sm:self-auto">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Responsibilities list directly from resume */}
                <div className="space-y-3 mb-6">
                  {exp.responsibilities.map((resp, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-zinc-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>

                {/* Skills/Tags */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-2">
                  <span className="text-xs text-zinc-400 font-mono mr-1">Focus Areas:</span>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
