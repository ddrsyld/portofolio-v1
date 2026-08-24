import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, CheckCircle2 } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 border-b border-gpt-lightBorder dark:border-gpt-darkBorder bg-gpt-lightSurface/40 dark:bg-gpt-darkSurface/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-gpt-lightMuted dark:text-gpt-darkMuted mb-2">
            <Briefcase className="w-3.5 h-3.5 text-black dark:text-white" />
            <span>Career Path</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gpt-lightTextHeading dark:text-gpt-darkTextHeading">
            Work Experience
          </h2>
          <p className="text-sm text-gpt-lightMuted dark:text-gpt-darkMuted mt-2">
            Pengalaman kerja praktis dalam pengembangan sistem backend, integrasi AI, dan aplikasi web modern.
          </p>
        </motion.div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:-ml-px before:w-0.5 before:bg-gpt-lightBorder dark:before:bg-gpt-darkBorder">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex flex-col md:flex-row items-start md:justify-between group"
            >
              
              {/* Timeline Node with Pulse */}
              <motion.div
                whileHover={{ scale: 1.25 }}
                className="absolute left-4 md:left-1/2 -translate-x-1/2 top-1.5 w-7 h-7 rounded-full bg-gpt-lightBg dark:bg-gpt-darkBg border-2 border-black dark:border-white flex items-center justify-center shadow z-10 cursor-pointer"
              >
                <span className="w-2 h-2 rounded-full bg-black dark:bg-white"></span>
              </motion.div>

              {/* Left Metadata */}
              <div className="pl-12 md:pl-0 md:w-[45%] md:pr-10 md:text-right mb-2 md:mb-0">
                <span className="inline-block px-2.5 py-0.5 rounded-md text-xs font-mono font-medium bg-black/5 dark:bg-white/10 text-black dark:text-white border border-gpt-lightBorder dark:border-gpt-darkBorder">
                  {exp.period}
                </span>
                <h3 className="text-xl font-bold text-gpt-lightTextHeading dark:text-gpt-darkTextHeading mt-1">
                  {exp.company}
                </h3>
                <p className="text-xs text-gpt-lightMuted dark:text-gpt-darkMuted font-mono">
                  {exp.location} • {exp.type}
                </p>
              </div>

              {/* Right Content Card with Hover Elevation */}
              <div className="pl-12 md:pl-10 md:w-[45%]">
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="p-6 rounded-2xl bg-gpt-lightSurface dark:bg-gpt-darkSurface border border-gpt-lightBorder dark:border-gpt-darkBorder shadow-sm hover:border-black dark:hover:border-white transition-all"
                >
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <h4 className="font-bold text-base text-gpt-lightTextHeading dark:text-gpt-darkTextHeading">
                      {exp.role}
                    </h4>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-gpt-lightHover dark:bg-gpt-darkHover text-gpt-lightMuted dark:text-gpt-darkMuted font-medium border border-gpt-lightBorder dark:border-gpt-darkBorder">
                      {exp.tag}
                    </span>
                  </div>

                  <ul className="space-y-2 text-xs text-gpt-lightMuted dark:text-gpt-darkMuted leading-relaxed">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-black dark:text-white shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 pt-3 border-t border-gpt-lightBorder dark:border-gpt-darkBorder flex flex-wrap gap-1.5">
                    {exp.techStack.map((tech, tIdx) => (
                      <span key={tIdx} className="gpt-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
