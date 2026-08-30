import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ArrowUpRight, Check, ArrowRight } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 border-b border-gpt-lightBorder dark:border-gpt-darkBorder bg-gpt-lightSurface/40 dark:bg-gpt-darkSurface/30 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header (Caksa .section-heading style) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 pb-6 border-b border-gpt-lightBorder dark:border-gpt-darkBorder">
          <div>
            <div className="flex items-center gap-2 text-[10px] font-mono-tech uppercase tracking-widest text-gpt-lightMuted dark:text-gpt-darkMuted mb-2">
              <span className="w-1.5 h-1.5 bg-black dark:bg-white"></span>
              <span>02 // FIELD WORK & MISSIONS</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-[-0.05em] text-gpt-lightTextHeading dark:text-gpt-darkTextHeading leading-none">
              CAREER & OPERATIONS.
            </h2>
          </div>
          
          <div className="text-right">
            <span className="font-mono-tech text-xs uppercase tracking-widest text-gpt-lightMuted dark:text-gpt-darkMuted">
              ENGINEERING LOG // 2023 – PRESENT
            </span>
          </div>
        </div>

        {/* Missions Timeline (Caksa style) */}
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="tech-cross border border-gpt-lightBorder dark:border-gpt-darkBorder bg-gpt-lightBg dark:bg-gpt-darkBg p-6 sm:p-10 hover:border-black dark:hover:border-white transition-all group"
            >
              
              {/* Mission Header */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-gpt-lightBorder dark:border-gpt-darkBorder">
                <div>
                  <div className="flex items-center gap-3 mb-1.5">
                    <span className="font-mono-tech text-xs uppercase tracking-widest text-gpt-lightMuted dark:text-gpt-darkMuted">
                      MISSION // 0{idx + 1}
                    </span>
                    <span className="text-gpt-lightBorder dark:text-gpt-darkBorder">•</span>
                    <span className="px-2 py-0.5 border border-gpt-lightBorder dark:border-gpt-darkBorder font-mono-tech text-[10px] uppercase text-black dark:text-white">
                      {exp.type}
                    </span>
                    <span className="text-[10px] font-mono-tech uppercase tracking-wider text-gpt-lightMuted dark:text-gpt-darkMuted">
                      {exp.tag}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-gpt-lightTextHeading dark:text-gpt-darkTextHeading group-hover:underline">
                    {exp.company}
                  </h3>
                  <div className="font-condensed font-bold text-base uppercase tracking-wider text-gpt-lightMuted dark:text-gpt-darkMuted mt-0.5">
                    {exp.role}
                  </div>
                </div>

                {/* Right Metadata */}
                <div className="lg:text-right space-y-1">
                  <div className="font-mono-tech text-xs font-bold text-black dark:text-white">
                    {exp.period}
                  </div>
                  <div className="font-mono-tech text-[11px] text-gpt-lightMuted dark:text-gpt-darkMuted">
                    LOC: {exp.location}
                  </div>
                </div>
              </div>

              {/* Responsibilities & Deliverables */}
              <div className="py-6 space-y-3">
                <div className="text-[10px] font-mono-tech uppercase tracking-widest text-gpt-lightMuted dark:text-gpt-darkMuted mb-2">
                  KEY DELIVERABLES & RESPONSIBILITIES
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-2.5 text-xs text-gpt-lightMuted dark:text-gpt-darkMuted leading-relaxed">
                      <ArrowRight className="w-3.5 h-3.5 text-black dark:text-white shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Specs Strip */}
              <div className="pt-5 border-t border-gpt-lightBorder dark:border-gpt-darkBorder flex flex-wrap items-center gap-2">
                <span className="font-mono-tech text-[10px] uppercase tracking-wider text-gpt-lightMuted dark:text-gpt-darkMuted mr-2">
                  DEPLOYED STACK:
                </span>
                {exp.techStack.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 text-[11px] font-mono-tech border border-gpt-lightBorder dark:border-gpt-darkBorder bg-gpt-lightSurface dark:bg-gpt-darkSurface text-black dark:text-white hover:border-black dark:hover:border-white transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
