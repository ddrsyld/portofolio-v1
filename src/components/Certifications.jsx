import React from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck, Check, ExternalLink } from 'lucide-react';
import { LinkedInIcon } from './Icons';
import { certifications, personalInfo } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 md:py-24 border-b border-gpt-lightBorder dark:border-gpt-darkBorder">
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
              <BadgeCheck className="w-3.5 h-3.5 text-black dark:text-white" />
              <span>Verified Qualifications</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gpt-lightTextHeading dark:text-gpt-darkTextHeading">
              Certifications & Badges
            </h2>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <p className="text-xs sm:text-sm text-gpt-lightMuted dark:text-gpt-darkMuted max-w-sm">
              Sertifikasi dan pelatihan di bidang Machine Learning, pengolahan data Python, dan rekayasa perangkat lunak modern.
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, idx) => (
            <motion.a
              key={idx}
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.07, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="p-5 rounded-2xl bg-gpt-lightSurface dark:bg-gpt-darkSurface border border-gpt-lightBorder dark:border-gpt-darkBorder hover:border-black dark:hover:border-white transition-all shadow-sm flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="text-xs font-mono text-gpt-lightTextHeading dark:text-gpt-darkTextHeading font-bold">{cert.issuer}</span>
                  <span className="text-[11px] font-mono text-gpt-lightMuted dark:text-gpt-darkMuted">{cert.year}</span>
                </div>
                <h3 className="font-bold text-sm text-gpt-lightTextHeading dark:text-gpt-darkTextHeading mb-1 leading-snug group-hover:underline">
                  {cert.title}
                </h3>
                <p className="text-xs text-gpt-lightMuted dark:text-gpt-darkMuted leading-relaxed">
                  {cert.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-gpt-lightBorder dark:border-gpt-darkBorder flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-black dark:text-white shrink-0" />
                  <span className="text-[11px] font-mono font-medium text-gpt-lightText dark:text-gpt-darkText">
                    {cert.badge}
                  </span>
                </div>
                <span className="text-[11px] font-mono text-gpt-lightMuted dark:text-gpt-darkMuted group-hover:text-black dark:group-hover:text-white flex items-center gap-1">
                  Verify <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
