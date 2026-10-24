import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  Layout,
  Server,
  Database,
  Wrench,
  Cpu,
  Sparkles,
} from 'lucide-react';
import { resumeData } from '../data/resumeData';

interface SkillItem {
  name: string;
  badge?: string;
}

interface SkillGroup {
  categoryId: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  accent: string;
  items: SkillItem[];
}

export const Skills: React.FC = () => {
  const { skills } = resumeData;
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Disciplines', icon: Sparkles },
    { id: 'languages', label: 'Languages', icon: Code2 },
    { id: 'backend', label: 'Backend', icon: Server },
    { id: 'frontend', label: 'Frontend', icon: Layout },
    { id: 'databases', label: 'Databases', icon: Database },
    { id: 'tools', label: 'Tools', icon: Wrench },
    { id: 'concepts', label: 'Core Concepts', icon: Cpu },
  ];

  const skillGroups: SkillGroup[] = [
    {
      categoryId: 'languages',
      title: 'Programming Languages',
      icon: Code2,
      accent: 'from-amber-500/20 to-orange-500/20 border-amber-500/30 text-amber-300',
      items: skills.languages.map((l) => ({
        name: l.name,
        badge: 'badge' in l ? l.badge : undefined,
      })),
    },
    {
      categoryId: 'backend',
      title: 'Backend Engineering',
      icon: Server,
      accent: 'from-cyan-500/20 to-blue-500/20 border-cyan-500/30 text-cyan-300',
      items: skills.backend.map((b) => ({ name: b.name })),
    },
    {
      categoryId: 'frontend',
      title: 'Frontend Development',
      icon: Layout,
      accent: 'from-sky-500/20 to-indigo-500/20 border-sky-500/30 text-sky-300',
      items: skills.frontend.map((f) => ({ name: f.name })),
    },
    {
      categoryId: 'databases',
      title: 'Databases & Storage',
      icon: Database,
      accent: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-300',
      items: skills.databases.map((d) => ({ name: d.name })),
    },
    {
      categoryId: 'tools',
      title: 'Development Tools',
      icon: Wrench,
      accent: 'from-purple-500/20 to-pink-500/20 border-purple-500/30 text-purple-300',
      items: skills.tools.map((t) => ({ name: t.name })),
    },
    {
      categoryId: 'concepts',
      title: 'Architectural Concepts',
      icon: Cpu,
      accent: 'from-indigo-500/20 to-violet-500/20 border-indigo-500/30 text-indigo-300',
      items: skills.concepts.map((c) => ({ name: c.name })),
    },
  ];

  const filteredGroups =
    activeCategory === 'all'
      ? skillGroups
      : skillGroups.filter((g) => g.categoryId === activeCategory);

  return (
    <section id="skills" className="relative py-24 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-cyan-400 mb-3">
          <Cpu className="w-3.5 h-3.5" />
          <span>TECHNICAL MATRIX</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
          Skills & <span className="gradient-text-cyan">Technologies</span>
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
          Grouped strictly according to my verified curriculum and engineering stack. No arbitrary percentages.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25 border border-cyan-400'
                  : 'bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Skills Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence>
          {filteredGroups.map((group) => {
            const Icon = group.icon;
            return (
              <motion.div
                layout
                key={group.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl glass-panel glass-panel-hover p-6 border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <span className={`p-2.5 rounded-2xl bg-gradient-to-br ${group.accent} border`}>
                      <Icon className="w-5 h-5" />
                    </span>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {group.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {group.items.map((item) => (
                      <div
                        key={item.name}
                        className="group/item relative px-3.5 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-cyan-500/40 text-xs font-mono text-zinc-200 transition-all duration-200 flex items-center gap-2 shadow-sm"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 opacity-60 group-hover/item:opacity-100 transition-opacity" />
                        <span>{item.name}</span>
                        {item.badge && (
                          <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/30">
                            {item.badge}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-zinc-500 font-mono">
                  <span>Verified Stack</span>
                  <span>{group.items.length} Elements</span>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
