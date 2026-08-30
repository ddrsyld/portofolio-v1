import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Monitor, Brain, Layers, CloudCog, Filter } from 'lucide-react';
import { skillItems } from '../data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', num: '00', label: 'All Capabilities' },
    { id: 'desktop', num: '01', label: 'Desktop & Systems' },
    { id: 'ai-ml', num: '02', label: 'AI & Data Science' },
    { id: 'web', num: '03', label: 'Web & Backend' },
    { id: 'cloud', num: '04', label: 'Cloud & DevOps' },
  ];

  const filteredSkills = activeCategory === 'all'
    ? skillItems
    : skillItems.filter(item => item.category === activeCategory);

  return (
    <section id="skills" className="py-20 md:py-28 border-b border-gpt-lightBorder dark:border-gpt-darkBorder bg-gpt-lightBg dark:bg-gpt-darkBg transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header (Caksa .section-heading style) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 pb-6 border-b border-gpt-lightBorder dark:border-gpt-darkBorder">
          <div>
            <div className="flex items-center gap-2 text-[10px] font-mono-tech uppercase tracking-widest text-gpt-lightMuted dark:text-gpt-darkMuted mb-2">
              <span className="w-1.5 h-1.5 bg-black dark:bg-white"></span>
              <span>03 // CAPABILITY MATRIX</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-[-0.05em] text-gpt-lightTextHeading dark:text-gpt-darkTextHeading leading-none">
              TECHNICAL SPECIFICATIONS.
            </h2>
          </div>
          
          <div className="text-right">
            <span className="font-mono-tech text-xs uppercase tracking-widest text-gpt-lightMuted dark:text-gpt-darkMuted">
              SYSTEM PROFICIENCY INDEX
            </span>
          </div>
        </div>

        {/* Dynamic Category Filter Bar (Caksa Selector Style) */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs font-condensed font-bold uppercase tracking-wider transition-all border ${
                  isActive
                    ? 'bg-black text-white dark:bg-white dark:text-black border-black dark:border-white shadow-sm'
                    : 'bg-gpt-lightSurface dark:bg-gpt-darkSurface border-gpt-lightBorder dark:border-gpt-darkBorder text-gpt-lightMuted dark:text-gpt-darkMuted hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white'
                }`}
              >
                <span className="font-mono-tech text-[10px] opacity-60 mr-1.5">{cat.num}</span>
                <span>{cat.label}</span>
                <span className="ml-2 font-mono-tech text-[10px] opacity-60">
                  [{cat.id === 'all' ? skillItems.length : skillItems.filter(s => s.category === cat.id).length}]
                </span>
              </button>
            );
          })}
        </div>

        {/* Fluid Technical Cards Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.96, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: -15 }}
                transition={{ duration: 0.3 }}
                className="tech-cross p-6 border border-gpt-lightBorder dark:border-gpt-darkBorder bg-gpt-lightSurface dark:bg-gpt-darkSurface hover:border-black dark:hover:border-white transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-gpt-lightBorder/60 dark:border-gpt-darkBorder/60">
                    <span className="text-[10px] font-mono-tech uppercase tracking-widest text-gpt-lightMuted dark:text-gpt-darkMuted">
                      {skill.categoryLabel}
                    </span>
                    <span className="font-mono-tech text-[10px] uppercase px-2 py-0.5 border border-gpt-lightBorder dark:border-gpt-darkBorder text-black dark:text-white">
                      {skill.level}
                    </span>
                  </div>

                  <h3 className="font-condensed font-bold text-xl uppercase tracking-wider text-gpt-lightTextHeading dark:text-gpt-darkTextHeading group-hover:underline transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-gpt-lightMuted dark:text-gpt-darkMuted mt-1.5 leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gpt-lightBorder/60 dark:border-gpt-darkBorder/60">
                  <div className="flex items-center justify-between text-[11px] font-mono-tech text-gpt-lightMuted dark:text-gpt-darkMuted mb-2">
                    <span className="uppercase tracking-wider">CAPABILITY RATING</span>
                    <span className="font-bold text-black dark:text-white">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gpt-lightBorder dark:bg-gpt-darkBorder h-1 overflow-hidden">
                    <div
                      style={{ width: `${skill.percentage}%` }}
                      className="bg-black dark:bg-white h-full"
                    />
                  </div>
                  <div className="mt-2.5 flex items-center justify-between text-[10px] font-mono-tech uppercase tracking-wider text-gpt-lightMuted dark:text-gpt-darkMuted">
                    <span>SPEC TAG: {skill.tag}</span>
                    <span>VERIFIED</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
