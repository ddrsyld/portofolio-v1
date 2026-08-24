import React, { useState } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { LinkedInIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ isDark, toggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Certificates', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Scroll Progress Bar at the very top */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-black dark:bg-white z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Top Status Bar */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="border-b border-gpt-lightBorder dark:border-gpt-darkBorder bg-gpt-lightSurface/80 dark:bg-gpt-darkSurface/80 backdrop-blur-sm text-xs py-1.5 px-4"
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-gpt-lightMuted dark:text-gpt-darkMuted text-xs font-mono">
              Open for Software Development & AI/ML Projects
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-gpt-lightMuted dark:text-gpt-darkMuted font-mono text-[11px]">
            <span>Surabaya / Probolinggo, ID</span>
            <span>•</span>
            <span>PENS Surabaya</span>
          </div>
        </div>
      </motion.div>

      {/* Main Sticky Navbar */}
      <header className="sticky top-0 z-40 bg-gpt-lightBg/90 dark:bg-gpt-darkBg/90 backdrop-blur-md border-b border-gpt-lightBorder dark:border-gpt-darkBorder transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          
          {/* Brand with Profile Picture linking to LinkedIn */}
          <div className="flex items-center gap-3">
            {/* Clickable Profile Picture -> Direct to LinkedIn with Spring Hover */}
            <motion.a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              className="w-9 h-9 rounded-full p-0.5 border border-gpt-lightBorder dark:border-gpt-darkBorder hover:border-black dark:hover:border-white shadow-sm transition-colors block relative group"
              title="Click to visit LinkedIn profile"
            >
              <img
                src={personalInfo.avatar}
                alt={personalInfo.name}
                className="w-full h-full object-cover rounded-full"
                onError={(e) => {
                  e.currentTarget.src = 'https://ui-avatars.com/api/?name=Dedy+Risyaldi&background=171717&color=fff';
                }}
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white dark:border-gpt-darkBg rounded-full" title="Online / Open to Work"></span>
            </motion.a>

            {/* Name & Role Text */}
            <a href="#hero" className="group">
              <span className="font-bold text-sm sm:text-base tracking-tight block leading-tight text-gpt-lightTextHeading dark:text-gpt-darkTextHeading group-hover:underline">
                {personalInfo.name}
              </span>
              <span className="text-[10px] sm:text-[11px] text-gpt-lightMuted dark:text-gpt-darkMuted font-mono uppercase tracking-wider block">
                Software & AI Engineer
              </span>
            </a>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gpt-lightMuted dark:text-gpt-darkMuted">
            {navLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                whileHover={{ y: -1 }}
                className="hover:text-black dark:hover:text-white transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2.5">
            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              whileTap={{ scale: 0.9, rotate: 15 }}
              aria-label="Toggle Theme"
              className="w-9 h-9 rounded-lg border border-gpt-lightBorder dark:border-gpt-darkBorder bg-gpt-lightSurface dark:bg-gpt-darkSurface flex items-center justify-center text-gpt-lightMuted dark:text-gpt-darkMuted hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white transition-all shadow-sm"
            >
              {isDark ? <Sun className="w-4 h-4 text-white" /> : <Moon className="w-4 h-4 text-black" />}
            </motion.button>

            {/* LinkedIn Button */}
            <motion.a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-black text-white dark:bg-white dark:text-black hover:opacity-85 shadow-sm transition-all"
            >
              <LinkedInIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </motion.a>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle Navigation Menu"
              className="md:hidden w-9 h-9 rounded-lg border border-gpt-lightBorder dark:border-gpt-darkBorder flex items-center justify-center text-gpt-lightText dark:text-gpt-darkText"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Dropdown Animation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden border-b border-gpt-lightBorder dark:border-gpt-darkBorder bg-gpt-lightSurface dark:bg-gpt-darkSurface px-6 py-4 space-y-3 text-sm overflow-hidden"
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1.5 text-gpt-lightMuted dark:text-gpt-darkMuted hover:text-black dark:hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 border-t border-gpt-lightBorder dark:border-gpt-darkBorder">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2 rounded-lg text-xs font-semibold bg-black text-white dark:bg-white dark:text-black"
                >
                  <LinkedInIcon className="w-4 h-4" />
                  <span>Pergi ke LinkedIn</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
