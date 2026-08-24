import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, GraduationCap } from 'lucide-react';
import { personalInfo, educations } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 border-b border-gpt-lightBorder dark:border-gpt-darkBorder">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-gpt-lightMuted dark:text-gpt-darkMuted">
              <Sparkles className="w-3.5 h-3.5 text-black dark:text-white" />
              <span>Engineering Mindset</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gpt-lightTextHeading dark:text-gpt-darkTextHeading leading-tight">
              Passionate about building clean code, solid architecture, and real-world impact.
            </h2>

            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="p-5 rounded-2xl bg-gpt-lightSurface dark:bg-gpt-darkSurface border border-gpt-lightBorder dark:border-gpt-darkBorder relative overflow-hidden shadow-sm"
            >
              <div className="text-sm text-gpt-lightMuted dark:text-gpt-darkMuted leading-relaxed italic">
                "{personalInfo.philosophy}"
              </div>
              <div className="mt-4 flex items-center gap-3 pt-3 border-t border-gpt-lightBorder dark:border-gpt-darkBorder text-xs font-medium text-gpt-lightTextHeading dark:text-gpt-darkTextHeading">
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="w-7 h-7 rounded-full object-cover border border-gpt-lightBorder dark:border-gpt-darkBorder"
                />
                <span>{personalInfo.name} • Software & AI Developer</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Narrative & Education Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            <p className="text-gpt-lightMuted dark:text-gpt-darkMuted text-base leading-relaxed">
              Saya adalah Software Developer yang berfokus pada pengembangan web full-stack, penerapan AI/Machine Learning, dan pembuatan aplikasi desktop. Saat ini sedang menempuh studi di <strong className="text-gpt-lightTextHeading dark:text-gpt-darkTextHeading">Politeknik Elektronika Negeri Surabaya (PENS)</strong> sekaligus aktif berkontribusi sebagai Software Developer di <strong className="text-gpt-lightTextHeading dark:text-gpt-darkTextHeading">PT. Novtra Tech Indonesia</strong>.
            </p>
            <p className="text-gpt-lightMuted dark:text-gpt-darkMuted text-base leading-relaxed">
              Terbiasa merancang backend menggunakan Laravel, mengintegrasikan pipeline data & AI dengan Python, serta mengembangkan aplikasi desktop berbasis C# / .NET dan Java. Saya mengutamakan kode yang rapi, performa yang handal, dan kolaborasi yang efektif.
            </p>

            {/* Education Grid */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-gpt-lightMuted dark:text-gpt-darkMuted">
                <GraduationCap className="w-4 h-4 text-black dark:text-white" />
                <span>Education Background</span>
              </div>
              
              {educations.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -3 }}
                  className="p-5 rounded-xl bg-gpt-lightSurface dark:bg-gpt-darkSurface border border-gpt-lightBorder dark:border-gpt-darkBorder hover:border-black dark:hover:border-white transition-all shadow-sm"
                >
                  <div className="flex items-start justify-between gap-3 sm:gap-4 mb-2.5">
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-base text-gpt-lightTextHeading dark:text-gpt-darkTextHeading leading-snug">
                        {edu.institution}
                      </h4>
                      <p className="text-sm text-gpt-lightText dark:text-gpt-darkText font-medium mt-0.5">
                        {edu.degree}
                      </p>
                    </div>
                    <div className="shrink-0 text-right flex flex-col items-end gap-1 pt-0.5">
                      <span className="inline-block px-2.5 py-0.5 rounded-md text-xs font-mono font-medium bg-black/5 dark:bg-white/10 text-black dark:text-white border border-gpt-lightBorder dark:border-gpt-darkBorder whitespace-nowrap">
                        {edu.period}
                      </span>
                      {edu.score && (
                        <span className="text-[11px] font-mono text-gpt-lightMuted dark:text-gpt-darkMuted whitespace-nowrap">
                          {edu.score}
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-xs text-gpt-lightMuted dark:text-gpt-darkMuted leading-relaxed">
                    {edu.description}
                  </p>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
