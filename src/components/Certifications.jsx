import React from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck, Check, ArrowUpRight } from 'lucide-react';
import { LinkedInIcon } from './Icons';
import { certifications, personalInfo } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 md:py-28 border-b border-gpt-lightBorder dark:border-gpt-darkBorder bg-gpt-lightBg dark:bg-gpt-darkBg transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header (Caksa .section-heading style) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 pb-6 border-b border-gpt-lightBorder dark:border-gpt-darkBorder">
          <div>
            <div className="flex items-center gap-2 text-[10px] font-mono-tech uppercase tracking-widest text-gpt-lightMuted dark:text-gpt-darkMuted mb-2">
              <span className="w-1.5 h-1.5 bg-black dark:bg-white"></span>
              <span>05 // LICENSES & ACCREDITATIONS</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-[-0.05em] text-gpt-lightTextHeading dark:text-gpt-darkTextHeading leading-none">
              VERIFIED CREDENTIALS.
            </h2>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline font-mono-tech text-xs uppercase tracking-widest text-gpt-lightMuted dark:text-gpt-darkMuted">
              INDUSTRY & AI CERTIFICATION
            </span>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-gpt-lightBorder dark:border-gpt-darkBorder bg-gpt-lightSurface dark:bg-gpt-darkSurface font-condensed font-bold text-xs uppercase tracking-wider text-black dark:text-white hover:border-black dark:hover:border-white transition-all shadow-sm"
            >
              <LinkedInIcon className="w-3.5 h-3.5" />
              <span>LINKEDIN CERTS</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <a
              key={idx}
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="tech-cross p-6 border border-gpt-lightBorder dark:border-gpt-darkBorder bg-gpt-lightSurface dark:bg-gpt-darkSurface hover:border-black dark:hover:border-white transition-all flex flex-col justify-between group block cursor-pointer"
            >
              <div>
                {/* Header Strip */}
                <div className="flex items-start justify-between gap-2 pb-3 mb-3 border-b border-gpt-lightBorder/60 dark:border-gpt-darkBorder/60">
                  <span className="font-mono-tech text-xs font-bold text-black dark:text-white uppercase tracking-wider">
                    {cert.issuer}
                  </span>
                  <span className="font-mono-tech text-[10px] uppercase text-gpt-lightMuted dark:text-gpt-darkMuted">
                    {cert.year}
                  </span>
                </div>

                <h3 className="font-condensed font-bold text-lg uppercase tracking-wide text-gpt-lightTextHeading dark:text-gpt-darkTextHeading mb-2 leading-snug group-hover:underline">
                  {cert.title}
                </h3>

                <p className="text-xs text-gpt-lightMuted dark:text-gpt-darkMuted leading-relaxed">
                  {cert.description}
                </p>
              </div>

              {/* Footer */}
              <div className="mt-5 pt-3 border-t border-gpt-lightBorder/60 dark:border-gpt-darkBorder/60 flex items-center justify-between text-[11px] font-mono-tech">
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-black dark:text-white shrink-0" />
                  <span className="text-[10px] uppercase tracking-wider text-black dark:text-white font-medium">
                    {cert.badge}
                  </span>
                </div>

                <span className="text-[10px] uppercase tracking-wider text-gpt-lightMuted dark:text-gpt-darkMuted group-hover:text-black dark:group-hover:text-white flex items-center gap-1 font-semibold">
                  VERIFY <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
