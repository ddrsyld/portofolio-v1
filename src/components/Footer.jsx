import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="border-t border-gpt-lightBorder dark:border-gpt-darkBorder bg-gpt-lightBg dark:bg-gpt-darkBg py-8 text-xs text-gpt-lightMuted dark:text-gpt-darkMuted transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-bold text-sm text-gpt-lightTextHeading dark:text-gpt-darkTextHeading">
            {personalInfo.name}
          </span>
          <span>•</span>
          <span>© 2026 All Rights Reserved</span>
        </div>
        <div className="flex items-center gap-6 font-mono text-[11px]">
          <a href="#hero" className="hover:text-black dark:hover:text-white transition-colors">Back to Top ↑</a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors">LinkedIn</a>
          <a href={`mailto:${personalInfo.email}`} className="hover:text-black dark:hover:text-white transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
}
