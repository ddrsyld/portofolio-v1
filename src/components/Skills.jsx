import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Monitor, Brain, Layers, CloudCog, Filter } from 'lucide-react';
import { skillItems } from '../data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Technologies', icon: Filter },
    { id: 'desktop', label: 'Desktop (.NET/Java)', icon: Monitor },
    { id: 'ai-ml', label: 'AI & Data Science', icon: Brain },
    { id: 'web', label: 'Web & Backend', icon: Layers },
    { id: 'cloud', label: 'Cloud & DevOps', icon: CloudCog },
  ];

  const filteredSkills = activeCategory === 'all'
    ? skillItems
    : skillItems.filter(item => item.category === activeCategory);

  return (
    <section id="skills" className="py-16 md:py-24 border-b border-gpt-lightBorder dark:border-gpt-darkBorder">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-xl mx-auto mb-10"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-gpt-lightMuted dark:text-gpt-darkMuted mb-2">
            <Cpu className="w-3.5 h-3.5 text-black dark:text-white" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gpt-lightTextHeading dark:text-gpt-darkTextHeading">
            Skills & Proficiencies
          </h2>
          <p className="text-sm text-gpt-lightMuted dark:text-gpt-darkMuted mt-2">
            Eksplorasi keahlian teknis, bahasa pemrograman, framework, dan tools yang digunakan dalam pengembangan software.
          </p>
        </motion.div>

        {/* Dynamic Category Filter Bar with Animated Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-10"
        >
          {categories.map((cat) => {
            const IconComp = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <motion.button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium transition-colors relative ${
                  isActive
                    ? 'bg-black text-white dark:bg-white dark:text-black shadow-sm'
                    : 'bg-gpt-lightSurface dark:bg-gpt-darkSurface border border-gpt-lightBorder dark:border-gpt-darkBorder text-gpt-lightMuted dark:text-gpt-darkMuted hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white'
                }`}
              >
                <IconComp className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                  isActive
                    ? 'bg-white/20 text-white dark:bg-black/20 dark:text-black'
                    : 'bg-gpt-lightBorder dark:bg-gpt-darkBorder text-gpt-lightMuted dark:text-gpt-darkMuted'
                }`}>
                  {cat.id === 'all' ? skillItems.length : skillItems.filter(s => s.category === cat.id).length}
                </span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Fluid Animated Skills Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.94, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: -15 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -3 }}
                className="p-5 rounded-2xl bg-gpt-lightSurface dark:bg-gpt-darkSurface border border-gpt-lightBorder dark:border-gpt-darkBorder hover:border-black dark:hover:border-white transition-all shadow-sm flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-mono font-semibold text-black dark:text-white bg-black/5 dark:bg-white/10 px-2 py-0.5 rounded-md border border-gpt-lightBorder dark:border-gpt-darkBorder">
                      {skill.categoryLabel}
                    </span>
                    <span className="text-xs font-mono font-medium text-gpt-lightMuted dark:text-gpt-darkMuted">
                      {skill.level}
                    </span>
                  </div>

                  <h3 className="font-bold text-base text-gpt-lightTextHeading dark:text-gpt-darkTextHeading group-hover:underline transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-gpt-lightMuted dark:text-gpt-darkMuted mt-1 leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-gpt-lightBorder dark:border-gpt-darkBorder">
                  <div className="flex items-center justify-between text-[11px] font-mono text-gpt-lightMuted dark:text-gpt-darkMuted mb-1.5">
                    <span>Proficiency</span>
                    <span className="font-semibold text-black dark:text-white">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gpt-lightBorder dark:bg-gpt-darkBorder rounded-full h-1.5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                      className="bg-black dark:bg-white h-full rounded-full"
                    ></motion.div>
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
