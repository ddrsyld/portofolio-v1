import React, { useState } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';
import { LinkedInIcon, GithubIcon } from './Icons';
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
    { num: '01', label: 'About', href: '#about' },
    { num: '02', label: 'Experience', href: '#experience' },
    { num: '03', label: 'Capabilities', href: '#skills' },
    { num: '04', label: 'Honors', href: '#achievements' },
    { num: '05', label: 'Certs', href: '#certifications' },
    { num: '06', label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-black dark:bg-white z-50 origin-left"
        style={{ scaleX }}
      />


      {/* Main Sticky Navbar (Caksa Architectural Style) */}
      <header className="sticky top-0 z-40 bg-gpt-lightBg/95 dark:bg-gpt-darkBg/95 backdrop-blur-md border-b border-gpt-lightBorder dark:border-gpt-darkBorder transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-18 py-3.5 flex items-center justify-between">
          
          {/* Brand Dossier Link */}
          <a href="#hero" className="flex items-center gap-3.5 group">
            <div className="relative w-10 h-10 rounded-sm border border-black/20 dark:border-white/20 p-0.5 group-hover:border-black dark:group-hover:border-white transition-colors">
              <img
                src={personalInfo.avatar}
                alt={personalInfo.name}
                className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-300"
                onError={(e) => {
                  e.currentTarget.src = 'https://ui-avatars.com/api/?name=Dedy+Risyaldi&background=171717&color=fff';
                }}
              />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-black dark:bg-white rounded-none"></span>
            </div>

            <div>
              <div className="font-condensed font-bold text-lg sm:text-xl tracking-wider uppercase leading-none text-gpt-lightTextHeading dark:text-gpt-darkTextHeading group-hover:opacity-80 transition-opacity">
                {personalInfo.name}
              </div>
              <div className="text-[10px] font-mono-tech uppercase tracking-widest text-gpt-lightMuted dark:text-gpt-darkMuted mt-0.5">
                COMPUTER SCIENCE · PENS SURABAYA
              </div>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-condensed font-bold text-xs uppercase tracking-[0.14em] text-gpt-lightMuted dark:text-gpt-darkMuted hover:text-black dark:hover:text-white transition-colors flex items-center gap-1.5 group py-1"
              >
                <span className="text-[10px] font-mono-tech opacity-40 group-hover:opacity-100 transition-opacity">
                  {link.num}
                </span>
                <span>{link.label}</span>
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            {/* Dark / Light Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="w-9 h-9 border border-gpt-lightBorder dark:border-gpt-darkBorder bg-gpt-lightSurface dark:bg-gpt-darkSurface flex items-center justify-center text-gpt-lightMuted dark:text-gpt-darkMuted hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white transition-all shadow-sm"
            >
              {isDark ? <Sun className="w-4 h-4 text-white" /> : <Moon className="w-4 h-4 text-black" />}
            </button>

            {/* Outline CTA (Caksa style) */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-condensed font-bold uppercase tracking-wider border border-gpt-lightBorder dark:border-gpt-darkBorder bg-gpt-lightSurface dark:bg-gpt-darkSurface text-black dark:text-white hover:border-black dark:hover:border-white transition-colors"
              title="GitHub Profile"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GITHUB</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-condensed font-bold uppercase tracking-wider border border-black/80 dark:border-white/80 text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
              title="LinkedIn Profile"
            >
              <LinkedInIcon className="w-3.5 h-3.5" />
              <span>LINKEDIN</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="lg:hidden w-9 h-9 border border-gpt-lightBorder dark:border-gpt-darkBorder flex items-center justify-center text-gpt-lightText dark:text-gpt-darkText"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden border-b border-gpt-lightBorder dark:border-gpt-darkBorder bg-gpt-lightBg dark:bg-gpt-darkBg px-6 py-5 space-y-3 overflow-hidden"
            >
              <div className="text-[10px] font-mono-tech uppercase tracking-widest text-gpt-lightMuted dark:text-gpt-darkMuted mb-2">
                INDEX NAVIGATION
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2 border-b border-gpt-lightBorder/50 dark:border-gpt-darkBorder/50 font-condensed font-bold text-sm tracking-wider uppercase text-gpt-lightText dark:text-gpt-darkText hover:text-black dark:hover:text-white"
                >
                  <span>{link.label}</span>
                  <span className="font-mono-tech text-xs opacity-50">{link.num}</span>
                </a>
              ))}
              <div className="pt-3 grid grid-cols-2 gap-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 text-xs font-condensed font-bold uppercase tracking-widest border border-gpt-lightBorder dark:border-gpt-darkBorder bg-gpt-lightSurface dark:bg-gpt-darkSurface text-black dark:text-white"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GITHUB ↗</span>
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 text-xs font-condensed font-bold uppercase tracking-widest border border-black dark:border-white bg-black text-white dark:bg-white dark:text-black"
                >
                  <LinkedInIcon className="w-4 h-4" />
                  <span>LINKEDIN ↗</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
