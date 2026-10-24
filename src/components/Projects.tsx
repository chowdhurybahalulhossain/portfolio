import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  MessageSquare,
  ShoppingCart,
  ArrowUpRight,
  Zap,
} from 'lucide-react';
import { resumeData } from '../data/resumeData';
import type { Project } from '../data/resumeData';
import { ProjectModal } from './ProjectModal';
import { GithubIcon } from './icons';

export const Projects: React.FC = () => {
  const { projects } = resumeData;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-24 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-cyan-400 mb-3">
          <Code className="w-3.5 h-3.5" />
          <span>FEATURED WORK</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
          Engineered <span className="gradient-text-cyan">Projects</span>
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
          Full-stack architectures built with real-time WebSockets, normalized PostgreSQL databases, and secure authentication.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, idx) => {
          const isChat = project.id === 'linkup';
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
              className="group rounded-3xl glass-panel glass-panel-hover p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden border border-white/10"
            >
              {/* Subtle ambient card backdrop glow */}
              <div
                className={`absolute top-0 right-0 w-72 h-72 rounded-full blur-3xl pointer-events-none transition-opacity duration-500 opacity-20 group-hover:opacity-40 ${
                  isChat ? 'bg-cyan-500' : 'bg-indigo-500'
                }`}
              />

              <div>
                {/* Visual Project Preview Header */}
                <div className="relative aspect-video w-full rounded-2xl bg-zinc-950/80 border border-white/10 mb-6 overflow-hidden flex flex-col justify-between p-5">
                  {/* Mock Window Controls */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-[11px] font-mono text-zinc-500 tracking-wider">
                      {project.id}.fullstack.app
                    </span>
                    <span className="p-1 rounded-md bg-white/5 text-zinc-400">
                      {isChat ? (
                        <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
                      ) : (
                        <ShoppingCart className="w-3.5 h-3.5 text-indigo-400" />
                      )}
                    </span>
                  </div>

                  {/* Architecture Badges in Mockup */}
                  <div className="my-auto py-2 text-center">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-mono text-zinc-300">
                      <Zap className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{isChat ? 'Bidirectional Socket.io Events' : 'MVC Relational Architecture'}</span>
                    </div>
                    <div className="text-xl sm:text-2xl font-extrabold text-white mt-2">
                      {project.name}
                    </div>
                    <div className="text-xs text-zinc-400 font-mono mt-0.5">
                      {project.tagline}
                    </div>
                  </div>

                  {/* Tech stack badge strip */}
                  <div className="flex items-center justify-between text-[11px] text-zinc-500 pt-2 border-t border-white/5 font-mono">
                    <span>Database: PostgreSQL</span>
                    <span>Auth: {isChat ? 'bcrypt + Session' : 'JWT + Roles'}</span>
                  </div>
                </div>

                {/* Project Header */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-cyan-400 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                    {project.category}
                  </span>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {project.name}
                </h3>
                <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Key Achievements strictly from resume */}
                <div className="space-y-2 mb-6">
                  {project.contributions.map((bullet, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-400 leading-normal">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-2" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-5 border-t border-white/10 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  <span>Inspect Architecture Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/10 transition-colors"
                  aria-label={`View ${project.name} on GitHub`}
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
