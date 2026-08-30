import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, TrendingUp, Globe, Bot, Target, Rocket, ArrowUpRight } from 'lucide-react';
import { LinkedInIcon } from './Icons';
import { achievements, personalInfo } from '../data/portfolioData';

const iconMap = {
  Trophy: Trophy,
  TrendingUp: TrendingUp,
  Globe: Globe,
  Bot: Bot,
  Target: Target,
  Rocket: Rocket,
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 md:py-28 border-b border-gpt-lightBorder dark:border-gpt-darkBorder bg-gpt-lightSurface/40 dark:bg-gpt-darkSurface/30 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header (Caksa .section-heading style) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 pb-6 border-b border-gpt-lightBorder dark:border-gpt-darkBorder">
          <div>
            <div className="flex items-center gap-2 text-[10px] font-mono-tech uppercase tracking-widest text-gpt-lightMuted dark:text-gpt-darkMuted mb-2">
              <span className="w-1.5 h-1.5 bg-black dark:bg-white"></span>
              <span>04 // RECORD OF EXCELLENCE</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-[-0.05em] text-gpt-lightTextHeading dark:text-gpt-darkTextHeading leading-none">
              HONORS & COMPETITIONS.
            </h2>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline font-mono-tech text-xs uppercase tracking-widest text-gpt-lightMuted dark:text-gpt-darkMuted">
              VERIFIED CONTEST ARCHIVE
            </span>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-gpt-lightBorder dark:border-gpt-darkBorder bg-gpt-lightSurface dark:bg-gpt-darkSurface font-condensed font-bold text-xs uppercase tracking-wider text-black dark:text-white hover:border-black dark:hover:border-white transition-all shadow-sm"
            >
              <LinkedInIcon className="w-3.5 h-3.5" />
              <span>LINKEDIN VERIFY</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Caksa Verified Achievement Records Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, idx) => {
            const IconComp = iconMap[item.icon] || Trophy;
            return (
              <a
                key={idx}
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="tech-cross p-6 sm:p-7 border border-gpt-lightBorder dark:border-gpt-darkBorder bg-gpt-lightBg dark:bg-gpt-darkBg hover:border-black dark:hover:border-white transition-all flex flex-col justify-between group block cursor-pointer"
              >
                <div>
                  {/* Top Metadata Row */}
                  <div className="flex items-center justify-between gap-3 pb-4 mb-4 border-b border-gpt-lightBorder/60 dark:border-gpt-darkBorder/60">
                    <span className="font-mono-tech text-[10px] uppercase tracking-widest text-gpt-lightMuted dark:text-gpt-darkMuted">
                      REC // 0{idx + 1}
                    </span>
                    <span className="px-2.5 py-0.5 border border-black dark:border-white bg-black text-white dark:bg-white dark:text-black font-condensed font-bold text-xs uppercase tracking-wider">
                      {item.award}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 border border-gpt-lightBorder dark:border-gpt-darkBorder flex items-center justify-center text-black dark:text-white bg-gpt-lightSurface dark:bg-gpt-darkSurface">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <span className="font-mono-tech text-[11px] font-bold text-black dark:text-white uppercase">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="font-condensed font-bold text-2xl uppercase tracking-tight text-gpt-lightTextHeading dark:text-gpt-darkTextHeading group-hover:underline transition-colors mt-2 mb-1">
                    {item.title}
                  </h3>

                  <div className="text-xs font-mono-tech uppercase tracking-wider text-gpt-lightMuted dark:text-gpt-darkMuted mb-3">
                    {item.subtitle}
                  </div>

                  <p className="text-xs text-gpt-lightMuted dark:text-gpt-darkMuted leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Spec Footer */}
                <div className="mt-6 pt-4 border-t border-gpt-lightBorder/60 dark:border-gpt-darkBorder/60 flex items-center justify-between text-[10px] font-mono-tech uppercase tracking-wider text-gpt-lightMuted dark:text-gpt-darkMuted">
                  <span>SEASON // {item.year}</span>
                  <span className="group-hover:text-black dark:group-hover:text-white flex items-center gap-1 font-semibold">
                    {item.level} <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
