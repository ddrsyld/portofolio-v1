import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, GraduationCap, ArrowUpRight, CheckCircle2, User } from 'lucide-react';
import { personalInfo, educations } from '../data/portfolioData';

export default function About() {
  const specs = [
    { label: 'AFFILIATION', value: 'Politeknik Elektronika Negeri Surabaya' },
    { label: 'STUDY PROGRAM', value: 'Game Technology (Game Technology)' },
    { label: 'ACADEMIC PERIOD', value: '2025 – 2029 (Expected)' },
    { label: 'ACADEMIC GPA', value: '3.65 / 4.00' },
    { label: 'INDUSTRY ROLE', value: 'Software Developer at PT. Novtra Tech' },
    { label: 'BASE LOCATION', value: 'Surabaya / Probolinggo, Jawa Timur' },
  ];

  return (
    <section id="about" className="py-20 md:py-28 border-b border-gpt-lightBorder dark:border-gpt-darkBorder bg-gpt-lightBg dark:bg-gpt-darkBg transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header (Caksa .section-heading style) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 pb-6 border-b border-gpt-lightBorder dark:border-gpt-darkBorder">
          <div>
            <div className="flex items-center gap-2 text-[10px] font-mono-tech uppercase tracking-widest text-gpt-lightMuted dark:text-gpt-darkMuted mb-2">
              <span className="w-1.5 h-1.5 bg-black dark:bg-white"></span>
              <span>01 // PROFILE & DOSSIER</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-[-0.05em] text-gpt-lightTextHeading dark:text-gpt-darkTextHeading leading-none">
              ORIGIN & PHILOSOPHY.
            </h2>
          </div>
          
          <div className="text-right">
            <span className="font-mono-tech text-xs uppercase tracking-widest text-gpt-lightMuted dark:text-gpt-darkMuted">
              SURABAYA RESEARCH BASE // PENS
            </span>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Technical Dossier Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Dossier Card with Corner Markers */}
            <div className="tech-cross border border-gpt-lightBorder dark:border-gpt-darkBorder bg-gpt-lightSurface dark:bg-gpt-darkSurface p-6 sm:p-8">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-gpt-lightBorder dark:border-gpt-darkBorder">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 border border-gpt-lightBorder dark:border-gpt-darkBorder p-0.5">
                    <img
                      src={personalInfo.avatar}
                      alt={personalInfo.name}
                      className="w-full h-full object-cover grayscale contrast-125"
                      onError={(e) => {
                        e.currentTarget.src = 'https://ui-avatars.com/api/?name=Dedy+Risyaldi&background=171717&color=fff';
                      }}
                    />
                  </div>
                  <div>
                    <h3 className="font-condensed font-bold text-lg uppercase tracking-wide text-gpt-lightTextHeading dark:text-gpt-darkTextHeading">
                      {personalInfo.name}
                    </h3>
                    <p className="text-[10px] font-mono-tech uppercase tracking-widest text-gpt-lightMuted dark:text-gpt-darkMuted">
                      DOSSIER // ID: 2026-DR
                    </p>
                  </div>
                </div>

                <span className="px-2 py-0.5 border border-black/30 dark:border-white/30 text-[10px] font-mono-tech uppercase">
                  VERIFIED
                </span>
              </div>

              {/* Specification Table (Caksa .dossier-specs style) */}
              <div className="space-y-3">
                {specs.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row sm:items-baseline justify-between py-2 border-b border-gpt-lightBorder/50 dark:border-gpt-darkBorder/50 text-xs"
                  >
                    <span className="font-mono-tech text-[10px] uppercase tracking-wider text-gpt-lightMuted dark:text-gpt-darkMuted">
                      {item.label}
                    </span>
                    <span className="font-medium text-gpt-lightTextHeading dark:text-gpt-darkTextHeading text-right mt-0.5 sm:mt-0">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Philosophy Quote */}
              <div className="mt-6 pt-5 border-t border-gpt-lightBorder dark:border-gpt-darkBorder">
                <div className="text-[10px] font-mono-tech uppercase tracking-widest text-gpt-lightMuted dark:text-gpt-darkMuted mb-2">
                  ENGINEERING CREED
                </div>
                <blockquote className="text-xs sm:text-sm text-gpt-lightText dark:text-gpt-darkText leading-relaxed italic border-l-2 border-black dark:border-white pl-3.5">
                  "{personalInfo.philosophy}"
                </blockquote>
              </div>

            </div>

          </div>

          {/* Right Column: Narrative & Education Records */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Narrative Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-gpt-lightMuted dark:text-gpt-darkMuted leading-relaxed">
              <p>
                Saya adalah Software Developer yang berfokus pada arsitektur web terukur, integrasi model AI/Machine Learning, dan pengembangan aplikasi desktop berperforma tinggi. Saat ini sedang menempuh studi di <strong className="text-gpt-lightTextHeading dark:text-gpt-darkTextHeading">Politeknik Elektronika Negeri Surabaya (PENS)</strong> serta aktif berkontribusi di industri teknologi sebagai Software Developer di <strong className="text-gpt-lightTextHeading dark:text-gpt-darkTextHeading">PT. Novtra Tech Indonesia</strong>.
              </p>
              <p>
                Pendekatan rekayasa saya berakar pada pemahaman komprehensif atas alur logika sistem: mulai dari perancangan skema basis data relasional, efisiensi endpoint API, pipeline machine learning otomatis berbasis Python, hingga implementasi antarmuka native Windows yang intuitif.
              </p>
            </div>

            {/* Academic Credentials & Education Records */}
            <div className="pt-4 space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-gpt-lightBorder dark:border-gpt-darkBorder">
                <div className="flex items-center gap-2 text-xs font-mono-tech uppercase tracking-widest text-gpt-lightMuted dark:text-gpt-darkMuted">
                  <GraduationCap className="w-4 h-4 text-black dark:text-white" />
                  <span>ACADEMIC BACKGROUND & FORMATION</span>
                </div>
                <span className="text-[10px] font-mono-tech uppercase tracking-wider text-gpt-lightMuted dark:text-gpt-darkMuted">
                  RECORD ARCHIVE
                </span>
              </div>

              <div className="space-y-4">
                {educations.map((edu, idx) => (
                  <div
                    key={idx}
                    className="p-6 border border-gpt-lightBorder dark:border-gpt-darkBorder bg-gpt-lightSurface dark:bg-gpt-darkSurface hover:border-black dark:hover:border-white transition-all group"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                      <div>
                        <div className="text-[10px] font-mono-tech uppercase tracking-widest text-gpt-lightMuted dark:text-gpt-darkMuted">
                          FORMATION // 0{idx + 1}
                        </div>
                        <h4 className="font-condensed font-bold text-xl uppercase tracking-wide text-gpt-lightTextHeading dark:text-gpt-darkTextHeading mt-0.5 group-hover:underline">
                          {edu.institution}
                        </h4>
                        <p className="text-xs font-medium text-gpt-lightText dark:text-gpt-darkText mt-0.5">
                          {edu.degree}
                        </p>
                      </div>

                      <div className="flex sm:flex-col items-start sm:items-end gap-1.5 shrink-0">
                        <span className="px-2.5 py-0.5 border border-gpt-lightBorder dark:border-gpt-darkBorder font-mono-tech text-xs text-black dark:text-white">
                          {edu.period}
                        </span>
                        {edu.score && (
                          <span className="text-[11px] font-mono-tech font-bold text-black dark:text-white">
                            {edu.score}
                          </span>
                        )}
                      </div>
                    </div>

                    <p className="text-xs text-gpt-lightMuted dark:text-gpt-darkMuted leading-relaxed pt-2 border-t border-gpt-lightBorder/50 dark:border-gpt-darkBorder/50">
                      {edu.description}
                    </p>

                    <div className="mt-3 flex items-center justify-between text-[10px] font-mono-tech uppercase tracking-wider text-gpt-lightMuted dark:text-gpt-darkMuted">
                      <span>LOCATION: {edu.location}</span>
                      <span>STATUS: VERIFIED</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
