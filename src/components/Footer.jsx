import React from 'react';
import { ArrowUp } from 'lucide-react';
import { LinkedInIcon, GithubIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-gpt-lightBorder dark:border-gpt-darkBorder bg-gpt-lightBg dark:bg-gpt-darkBg py-14 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        
        {/* Top Architectural Banner */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-gpt-lightBorder dark:border-gpt-darkBorder">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-[10px] font-mono-tech uppercase tracking-widest text-gpt-lightMuted dark:text-gpt-darkMuted">
              <span className="w-1.5 h-1.5 bg-black dark:bg-white"></span>
              <span>FORMATION ARCHIVE // PENS SURABAYA</span>
            </div>
            <div className="font-display text-3xl sm:text-4xl uppercase tracking-tight text-gpt-lightTextHeading dark:text-gpt-darkTextHeading">
              {personalInfo.name}
            </div>
            <p className="font-mono-tech text-xs uppercase tracking-wider text-gpt-lightMuted dark:text-gpt-darkMuted max-w-md">
              Software Developer & Machine Learning Enthusiast · D4 Informatics Engineering (Game Technology) · Politeknik Elektronika Negeri Surabaya
            </p>
          </div>

          {/* Quick Index Navigation */}
          <div className="flex flex-wrap items-center gap-6 font-condensed font-bold text-xs uppercase tracking-widest">
            <a href="#about" className="text-gpt-lightMuted dark:text-gpt-darkMuted hover:text-black dark:hover:text-white transition-colors">
              // About
            </a>
            <a href="#experience" className="text-gpt-lightMuted dark:text-gpt-darkMuted hover:text-black dark:hover:text-white transition-colors">
              // Experience
            </a>
            <a href="#skills" className="text-gpt-lightMuted dark:text-gpt-darkMuted hover:text-black dark:hover:text-white transition-colors">
              // Capabilities
            </a>
            <a href="#achievements" className="text-gpt-lightMuted dark:text-gpt-darkMuted hover:text-black dark:hover:text-white transition-colors">
              // Honors
            </a>
            <a href="#certifications" className="text-gpt-lightMuted dark:text-gpt-darkMuted hover:text-black dark:hover:text-white transition-colors">
              // Certs
            </a>
            <a href="#contact" className="text-gpt-lightMuted dark:text-gpt-darkMuted hover:text-black dark:hover:text-white transition-colors">
              // Contact
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gpt-lightMuted dark:text-gpt-darkMuted hover:text-black dark:hover:text-white transition-colors inline-flex items-center gap-1"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>// GitHub</span>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gpt-lightMuted dark:text-gpt-darkMuted hover:text-black dark:hover:text-white transition-colors inline-flex items-center gap-1"
            >
              <LinkedInIcon className="w-3.5 h-3.5" />
              <span>// LinkedIn</span>
            </a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-gpt-lightBorder dark:border-gpt-darkBorder hover:border-black dark:hover:border-white text-black dark:text-white transition-colors cursor-pointer"
            >
              <span>TOP</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Bottom Telemetry & Diagnostics Strip */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono-tech uppercase tracking-widest text-gpt-lightMuted dark:text-gpt-darkMuted">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>SYSTEM OPERATIONAL // 2026 © DEDY RISYALDI</span>
          </div>

          <div className="flex items-center gap-4">
            <span>SURABAYA · PENS KAMPUS ITS</span>
            <span>•</span>
            <span>7.2797° S, 112.7975° E</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
