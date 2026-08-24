import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, TrendingUp, Globe, Bot, Target, Rocket, ExternalLink } from 'lucide-react';
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
    <section id="achievements" className="py-16 md:py-24 border-b border-gpt-lightBorder dark:border-gpt-darkBorder bg-gpt-lightSurface/40 dark:bg-gpt-darkSurface/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4"
        >
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-gpt-lightMuted dark:text-gpt-darkMuted mb-2">
              <Award className="w-3.5 h-3.5 text-black dark:text-white" />
              <span>Honors & Competitions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gpt-lightTextHeading dark:text-gpt-darkTextHeading">
              Honors & Competitions
            </h2>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <p className="text-xs sm:text-sm text-gpt-lightMuted dark:text-gpt-darkMuted max-w-sm">
              Pengalaman berkompetisi dan penghargaan di bidang rekayasa perangkat lunak, robotika, dan inovasi teknologi.
            </p>
            <motion.a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold border border-gpt-lightBorder dark:border-gpt-darkBorder bg-gpt-lightSurface dark:bg-gpt-darkSurface text-gpt-lightText dark:text-gpt-darkText hover:border-black dark:hover:border-white transition-all shadow-sm shrink-0"
            >
              <LinkedInIcon className="w-3.5 h-3.5" />
              <span>Lihat di LinkedIn</span>
              <ExternalLink className="w-3 h-3 text-gpt-lightMuted dark:text-gpt-darkMuted" />
            </motion.a>
          </div>
        </motion.div>

        {/* Bento Grid with Cascading Stagger Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {achievements.map((item, idx) => {
            const IconComp = iconMap[item.icon] || Trophy;
            return (
              <motion.a
                key={idx}
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="p-6 rounded-2xl bg-gpt-lightSurface dark:bg-gpt-darkSurface border border-gpt-lightBorder dark:border-gpt-darkBorder hover:border-black dark:hover:border-white transition-all shadow-sm flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-9 h-9 rounded-xl bg-black/5 dark:bg-white/10 text-black dark:text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComp className="w-5 h-5" />
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold border border-gpt-lightBorder dark:border-gpt-darkBorder bg-black text-white dark:bg-white dark:text-black">
                      {item.award}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gpt-lightTextHeading dark:text-gpt-darkTextHeading group-hover:underline transition-colors mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono text-gpt-lightMuted dark:text-gpt-darkMuted font-medium mb-2">
                    {item.subtitle}
                  </p>
                  <p className="text-xs text-gpt-lightMuted dark:text-gpt-darkMuted leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-gpt-lightBorder dark:border-gpt-darkBorder flex items-center justify-between text-[11px] font-mono text-gpt-lightMuted dark:text-gpt-darkMuted">
                  <span>Year: {item.year}</span>
                  <span className="group-hover:text-black dark:group-hover:text-white flex items-center gap-1">
                    {item.level} <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
