import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Terminal, Layers, Brain, Monitor, CloudCog } from 'lucide-react';
import { LinkedInIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="hero" className="relative pt-16 pb-20 md:pt-24 md:pb-28 border-b border-gpt-lightBorder dark:border-gpt-darkBorder overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto px-4 sm:px-6 text-center"
      >
        
        {/* Status Pill */}
        <motion.div variants={itemVariants} className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gpt-lightBorder dark:border-gpt-darkBorder bg-gpt-lightSurface dark:bg-gpt-darkSurface text-xs font-mono text-gpt-lightMuted dark:text-gpt-darkMuted shadow-sm hover:border-black dark:hover:border-white transition-colors cursor-default">
            <Terminal className="w-3.5 h-3.5 text-black dark:text-white" />
            <span>Full-Stack Web Dev • Machine Learning • Desktop Solutions</span>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gpt-lightTextHeading dark:text-gpt-darkTextHeading leading-[1.14] mb-6"
        >
          Building scalable web systems, practical AI/ML solutions, and reliable software.
        </motion.h1>

        {/* Subtitle / Narrative */}
        <motion.p
          variants={itemVariants}
          className="max-w-2xl mx-auto text-base sm:text-lg text-gpt-lightMuted dark:text-gpt-darkMuted leading-relaxed mb-8"
        >
          Hi, saya <strong className="text-gpt-lightTextHeading dark:text-gpt-darkTextHeading font-semibold">{personalInfo.name}</strong>, Software Developer & Machine Learning enthusiast. Berpengalaman membangun backend modern, integrasi model AI/ML, dan aplikasi desktop yang terstruktur.
        </motion.p>

        {/* Action CTAs */}
        <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="px-5 py-2.5 rounded-xl font-semibold text-sm bg-black text-white dark:bg-white dark:text-black hover:opacity-90 shadow-sm transition-all flex items-center gap-2"
          >
            <span>Get in Touch</span>
            <ArrowRight className="w-4 h-4" />
          </motion.a>
          
          <motion.a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="px-5 py-2.5 rounded-xl font-medium text-sm border border-gpt-lightBorder dark:border-gpt-darkBorder bg-gpt-lightSurface dark:bg-gpt-darkSurface text-gpt-lightText dark:text-gpt-darkText hover:border-black dark:hover:border-white transition-all flex items-center gap-2 shadow-sm"
          >
            <LinkedInIcon className="w-4 h-4" />
            <span>Pergi ke LinkedIn</span>
          </motion.a>

          <motion.a
            href={`mailto:${personalInfo.email}`}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            className="p-2.5 rounded-xl border border-gpt-lightBorder dark:border-gpt-darkBorder bg-gpt-lightSurface dark:bg-gpt-darkSurface text-gpt-lightMuted dark:text-gpt-darkMuted hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white transition-all shadow-sm"
            aria-label="Send Email"
          >
            <Mail className="w-5 h-5" />
          </motion.a>
        </motion.div>

        {/* Core Expertise Grid (Replaces old stat numbers) */}
        <motion.div
          variants={itemVariants}
          className="pt-8 border-t border-gpt-lightBorder dark:border-gpt-darkBorder max-w-4xl mx-auto"
        >
          <div className="text-xs font-mono uppercase tracking-wider text-gpt-lightMuted dark:text-gpt-darkMuted mb-4 text-center">
            Core Focus & Expertise
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 text-left">
            {personalInfo.coreExpertise.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="p-4 rounded-xl bg-gpt-lightSurface dark:bg-gpt-darkSurface border border-gpt-lightBorder dark:border-gpt-darkBorder hover:border-black dark:hover:border-white transition-all shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="text-[11px] font-mono font-semibold text-gpt-lightMuted dark:text-gpt-darkMuted mb-1">
                    {item.category}
                  </div>
                  <div className="text-sm font-bold text-gpt-lightTextHeading dark:text-gpt-darkTextHeading leading-snug">
                    {item.title}
                  </div>
                  <div className="text-xs text-gpt-lightMuted dark:text-gpt-darkMuted mt-1.5 leading-relaxed">
                    {item.desc}
                  </div>
                </div>
                <div className="mt-3 pt-2.5 border-t border-gpt-lightBorder dark:border-gpt-darkBorder text-[11px] font-mono font-medium text-black dark:text-white">
                  {item.tech}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}
