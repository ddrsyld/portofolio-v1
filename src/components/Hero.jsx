import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Terminal, Download } from 'lucide-react';
import { LinkedInIcon, GithubIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import ParticleNetwork from './ParticleNetwork';

export default function Hero() {
  return (
    <section id="hero" className="relative border-b border-gpt-lightBorder dark:border-gpt-darkBorder overflow-hidden bg-gpt-lightBg dark:bg-gpt-darkBg transition-colors">
      
      {/* Interactive Neural / Particle Constellation Network (Inspired by aigra.id) */}
      <ParticleNetwork />

      {/* Subtle Technical Blueprint Grid Background Overlay */}
      <div className="absolute inset-0 tech-grid-pattern opacity-25 dark:opacity-15 [mask-image:linear-gradient(180deg,white_40%,transparent_95%)] pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 pt-16 sm:pt-24 pb-16">
        
        {/* Hero Main Grid: Headline & Developer Terminal Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-14">
          
          {/* Main Headline & Bio */}
          <div className="lg:col-span-7 space-y-6">

            <h1 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-[-0.035em] text-gpt-lightTextHeading dark:text-gpt-darkTextHeading leading-[1.12]">
              Engineering scalable backends, <span className="text-gpt-lightMuted dark:text-gpt-darkMuted font-bold">practical AI models</span>, and reliable software.
            </h1>

            <p className="max-w-xl text-base sm:text-lg text-gpt-lightMuted dark:text-gpt-darkMuted leading-relaxed font-sans">
              Hi, saya <strong className="text-gpt-lightTextHeading dark:text-gpt-darkTextHeading font-semibold">{personalInfo.name}</strong> - Software Developer di <strong className="text-gpt-lightTextHeading dark:text-gpt-darkTextHeading">PT. Novtra Tech Indonesia</strong> & mahasiswa Game Technology di <strong className="text-gpt-lightTextHeading dark:text-gpt-darkTextHeading">Politeknik Elektronika Negeri Surabaya (PENS)</strong>. Mengutamakan kode yang modular, efisien, dan berdampak nyata.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-5 py-3 bg-black text-white dark:bg-white dark:text-black font-condensed font-bold text-xs tracking-widest uppercase hover:opacity-85 transition-opacity"
              >
                <span>EXPLORE WORK</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 border border-black/80 dark:border-white/80 text-black dark:text-white font-condensed font-bold text-xs tracking-widest uppercase hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
              >
                <LinkedInIcon className="w-3.5 h-3.5" />
                <span>LINKEDIN</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 border border-gpt-lightBorder dark:border-gpt-darkBorder bg-gpt-lightSurface dark:bg-gpt-darkSurface text-black dark:text-white font-condensed font-bold text-xs tracking-widest uppercase hover:border-black dark:hover:border-white transition-colors shadow-sm"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GITHUB</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={personalInfo.resumePdf}
                download
                className="inline-flex items-center gap-1.5 px-3.5 py-3 text-xs font-mono-tech uppercase tracking-wider text-gpt-lightMuted dark:text-gpt-darkMuted hover:text-black dark:hover:text-white transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>RESUME.PDF</span>
              </a>
            </div>

            {/* Quick Tech Badges */}
            <div className="pt-2 flex flex-wrap items-center gap-2 text-[11px] font-mono-tech text-gpt-lightMuted dark:text-gpt-darkMuted">
              <span className="uppercase text-[10px] tracking-wider opacity-60 mr-1">PRIMARY TECH:</span>
              <span className="px-2 py-0.5 border border-gpt-lightBorder dark:border-gpt-darkBorder bg-gpt-lightSurface dark:bg-gpt-darkSurface text-black dark:text-white">Laravel</span>
              <span className="px-2 py-0.5 border border-gpt-lightBorder dark:border-gpt-darkBorder bg-gpt-lightSurface dark:bg-gpt-darkSurface text-black dark:text-white">Python (AI/ML)</span>
              <span className="px-2 py-0.5 border border-gpt-lightBorder dark:border-gpt-darkBorder bg-gpt-lightSurface dark:bg-gpt-darkSurface text-black dark:text-white">C# / .NET</span>
              <span className="px-2 py-0.5 border border-gpt-lightBorder dark:border-gpt-darkBorder bg-gpt-lightSurface dark:bg-gpt-darkSurface text-black dark:text-white">React</span>
              <span className="px-2 py-0.5 border border-gpt-lightBorder dark:border-gpt-darkBorder bg-gpt-lightSurface dark:bg-gpt-darkSurface text-black dark:text-white">MySQL</span>
            </div>

          </div>

          {/* Right Column: Sleek Developer System Inspector (Distinct Software Engineer Component) */}
          <div className="lg:col-span-5">
            <div className="tech-cross border border-gpt-lightBorder dark:border-gpt-darkBorder bg-gpt-lightSurface dark:bg-gpt-darkSurface shadow-sm overflow-hidden">
              
              {/* Terminal Window Top Bar */}
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-gpt-lightBorder dark:border-gpt-darkBorder bg-gpt-lightBg/80 dark:bg-gpt-darkBg/80 text-xs font-mono-tech">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700"></span>
                  <span className="ml-2 text-[11px] text-gpt-lightMuted dark:text-gpt-darkMuted">
                    dedy-profile.json
                  </span>
                </div>
                <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-mono flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>LIVE</span>
                </div>
              </div>

              {/* Code / Profile Spec Content */}
              <div className="p-5 text-xs font-mono-tech space-y-2 leading-relaxed text-gpt-lightText dark:text-gpt-darkText overflow-x-auto">
                <div>
                  <span className="text-gpt-lightMuted dark:text-gpt-darkMuted">// Engineering Profile Dossier</span>
                </div>
                <div>
                  <span className="text-neutral-500 dark:text-neutral-400">const</span>{" "}
                  <span className="text-black dark:text-white font-bold">engineer</span> = &#123;
                </div>
                <div className="pl-4 space-y-1">
                  <div>
                    <span className="text-gpt-lightMuted dark:text-gpt-darkMuted">name:</span>{" "}
                    <span className="text-black dark:text-white font-medium">"{personalInfo.name}"</span>,
                  </div>
                  <div>
                    <span className="text-gpt-lightMuted dark:text-gpt-darkMuted">institution:</span>{" "}
                    <span className="text-black dark:text-white font-medium">"PENS Surabaya"</span>,
                  </div>
                  <div>
                    <span className="text-gpt-lightMuted dark:text-gpt-darkMuted">industryRole:</span>{" "}
                    <span className="text-black dark:text-white font-medium">"Software Dev @ PT. Novtra Tech"</span>,
                  </div>
                  <div>
                    <span className="text-gpt-lightMuted dark:text-gpt-darkMuted">specialization:</span> [
                    <span className="text-black dark:text-white">"Full-Stack Web"</span>,{" "}
                    <span className="text-black dark:text-white">"AI / ML"</span>,{" "}
                    <span className="text-black dark:text-white">"Desktop"</span>],
                  </div>
                  <div>
                    <span className="text-gpt-lightMuted dark:text-gpt-darkMuted">notableHonors:</span> [
                    <span className="text-black dark:text-white">"KMIPN VII (Juara 3)"</span>,{" "}
                    <span className="text-black dark:text-white">"PERTAMUDA (Top 3)"</span>],
                  </div>
                  <div>
                    <span className="text-gpt-lightMuted dark:text-gpt-darkMuted">currentGpa:</span>{" "}
                    <span className="text-black dark:text-white font-bold">"3.65 / 4.00"</span>,
                  </div>
                  <div>
                    <span className="text-gpt-lightMuted dark:text-gpt-darkMuted">status:</span>{" "}
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">"Active & Open for Contract"</span>
                  </div>
                </div>
                <div>&#125;;</div>
              </div>

              {/* Terminal Bottom Diagnostics */}
              <div className="px-4 py-2 border-t border-gpt-lightBorder dark:border-gpt-darkBorder bg-gpt-lightBg/50 dark:bg-gpt-darkBg/50 flex items-center justify-between text-[10px] font-mono-tech text-gpt-lightMuted dark:text-gpt-darkMuted">
                <span>UTF-8 • JSON • 100% NOMINAL</span>
                <span>PENS KAMPUS ITS</span>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Caksa-style Architectural Stats Section (.stats) - Preserved intact as requested */}
      <div className="border-t border-gpt-lightBorder dark:border-gpt-darkBorder bg-gpt-lightSurface/70 dark:bg-gpt-darkSurface/50 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Stats Intro Column */}
            <div className="lg:col-span-4 space-y-2">
              <div className="text-[10px] font-mono-tech uppercase tracking-widest text-gpt-lightMuted dark:text-gpt-darkMuted">
                VERIFIED METRICS // 2026
              </div>
              <h3 className="font-condensed font-bold text-2xl uppercase tracking-wide text-gpt-lightTextHeading dark:text-gpt-darkTextHeading">
                Academic Rigor & Practical Engineering
              </h3>
              <p className="text-xs text-gpt-lightMuted dark:text-gpt-darkMuted leading-relaxed">
                Kombinasi performa akademis di PENS, rekam jejak kompetisi nasional, serta pengalaman langsung membangun solusi industri di startup teknologi.
              </p>
            </div>

            {/* 3-Column Architectural Stats Grid */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-0">
              
              {/* Stat 1 */}
              <div className="sm:border-l border-gpt-lightBorder dark:border-gpt-darkBorder sm:pl-8 sm:pr-4">
                <span className="font-display text-4xl sm:text-5xl lg:text-6xl text-gpt-lightTextHeading dark:text-gpt-darkTextHeading leading-none block">
                  3.65<sup className="text-xl sm:text-2xl font-mono-tech opacity-60">/4.0</sup>
                </span>
                <span className="font-condensed font-bold text-base uppercase tracking-wider block mt-2 text-gpt-lightTextHeading dark:text-gpt-darkTextHeading">
                  PENS GPA (IPK)
                </span>
                <span className="font-mono-tech text-[10px] uppercase tracking-wider text-gpt-lightMuted dark:text-gpt-darkMuted block mt-0.5">
                  D4 Game Tech / Informatics
                </span>
              </div>

              {/* Stat 2 */}
              <div className="sm:border-l border-gpt-lightBorder dark:border-gpt-darkBorder sm:pl-8 sm:pr-4">
                <span className="font-display text-4xl sm:text-5xl lg:text-6xl text-gpt-lightTextHeading dark:text-gpt-darkTextHeading leading-none block">
                  06<sup className="text-xl sm:text-2xl font-mono-tech opacity-60">+</sup>
                </span>
                <span className="font-condensed font-bold text-base uppercase tracking-wider block mt-2 text-gpt-lightTextHeading dark:text-gpt-darkTextHeading">
                  Verified Honors
                </span>
                <span className="font-mono-tech text-[10px] uppercase tracking-wider text-gpt-lightMuted dark:text-gpt-darkMuted block mt-0.5">
                  KMIPN VII, PERTAMUDA, GSIC USA
                </span>
              </div>

              {/* Stat 3 */}
              <div className="sm:border-l border-gpt-lightBorder dark:border-gpt-darkBorder sm:pl-8 sm:pr-4">
                <span className="font-display text-4xl sm:text-5xl lg:text-6xl text-gpt-lightTextHeading dark:text-gpt-darkTextHeading leading-none block">
                  04
                </span>
                <span className="font-condensed font-bold text-base uppercase tracking-wider block mt-2 text-gpt-lightTextHeading dark:text-gpt-darkTextHeading">
                  Core Verticals
                </span>
                <span className="font-mono-tech text-[10px] uppercase tracking-wider text-gpt-lightMuted dark:text-gpt-darkMuted block mt-0.5">
                  Web, AI/ML, Desktop, Cloud
                </span>
              </div>

            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
