import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Copy, Check, ArrowUpRight, Radio, Send } from 'lucide-react';
import { LinkedInIcon, GithubIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-b border-gpt-lightBorder dark:border-gpt-darkBorder bg-gpt-lightSurface/40 dark:bg-gpt-darkSurface/30 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header (Caksa .section-heading style) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 pb-6 border-b border-gpt-lightBorder dark:border-gpt-darkBorder">
          <div>
            <div className="flex items-center gap-2 text-[10px] font-mono-tech uppercase tracking-widest text-gpt-lightMuted dark:text-gpt-darkMuted mb-2">
              <span className="w-1.5 h-1.5 bg-black dark:bg-white"></span>
              <span>06 // DISPATCH & TRANSMISSION</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-[-0.05em] text-gpt-lightTextHeading dark:text-gpt-darkTextHeading leading-none">
              INITIATE CONTACT.
            </h2>
          </div>
          
          <div className="text-right">
            <span className="font-mono-tech text-xs uppercase tracking-widest text-gpt-lightMuted dark:text-gpt-darkMuted">
              COMMUNICATION MATRIX // OPEN
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Main Statement */}
          <div className="lg:col-span-6 space-y-5">
            <p className="text-base sm:text-lg text-gpt-lightMuted dark:text-gpt-darkMuted leading-relaxed">
              Terbuka untuk diskusi proyek rekayasa perangkat lunak, implementasi pipeline AI & Machine Learning, kolaborasi riset, maupun peluang karir profesional.
            </p>

            <div className="p-6 border border-gpt-lightBorder dark:border-gpt-darkBorder bg-gpt-lightBg dark:bg-gpt-darkBg space-y-3">
              <div className="text-[10px] font-mono-tech uppercase tracking-widest text-gpt-lightMuted dark:text-gpt-darkMuted">
                TRANSMISSION TELEMETRY
              </div>
              <div className="flex items-center justify-between text-xs font-mono-tech">
                <span className="text-gpt-lightMuted dark:text-gpt-darkMuted">BASE COORDINATES:</span>
                <span className="font-bold text-black dark:text-white">7.2797° S, 112.7975° E (PENS)</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono-tech">
                <span className="text-gpt-lightMuted dark:text-gpt-darkMuted">TYPICAL RESPONSE:</span>
                <span className="font-bold text-black dark:text-white">&lt; 24 HOURS</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono-tech">
                <span className="text-gpt-lightMuted dark:text-gpt-darkMuted">TIMEZONE:</span>
                <span className="font-bold text-black dark:text-white">ASIA/JAKARTA (UTC+7)</span>
              </div>
            </div>

            {/* Quick Copy Button */}
            <div>
              <button
                onClick={handleCopyEmail}
                className={`inline-flex items-center gap-2.5 px-5 py-3 border font-condensed font-bold text-xs uppercase tracking-widest transition-all ${
                  copied
                    ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400'
                    : 'border-gpt-lightBorder dark:border-gpt-darkBorder bg-gpt-lightBg dark:bg-gpt-darkBg text-black dark:text-white hover:border-black dark:hover:border-white shadow-sm'
                }`}
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'EMAIL COPIED TO CLIPBOARD' : `COPY DIRECT: ${personalInfo.email}`}</span>
              </button>
            </div>
          </div>

          {/* Direct Communication Channels (3 Cards) */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Email Channel */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="tech-cross p-6 border border-gpt-lightBorder dark:border-gpt-darkBorder bg-gpt-lightBg dark:bg-gpt-darkBg hover:border-black dark:hover:border-white transition-all flex items-center justify-between group block cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 border border-gpt-lightBorder dark:border-gpt-darkBorder flex items-center justify-center text-black dark:text-white bg-gpt-lightSurface dark:bg-gpt-darkSurface">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono-tech uppercase tracking-wider text-gpt-lightMuted dark:text-gpt-darkMuted">
                    CHANNEL // 01 · DIRECT EMAIL
                  </div>
                  <div className="font-condensed font-bold text-lg uppercase tracking-wide text-gpt-lightTextHeading dark:text-gpt-darkTextHeading group-hover:underline">
                    {personalInfo.email}
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-gpt-lightMuted dark:text-gpt-darkMuted group-hover:text-black dark:group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* WhatsApp Channel */}
            <a
              href="https://wa.me/6283191647715"
              target="_blank"
              rel="noopener noreferrer"
              className="tech-cross p-6 border border-gpt-lightBorder dark:border-gpt-darkBorder bg-gpt-lightBg dark:bg-gpt-darkBg hover:border-black dark:hover:border-white transition-all flex items-center justify-between group block cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 border border-gpt-lightBorder dark:border-gpt-darkBorder flex items-center justify-center text-black dark:text-white bg-gpt-lightSurface dark:bg-gpt-darkSurface">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono-tech uppercase tracking-wider text-gpt-lightMuted dark:text-gpt-darkMuted">
                    CHANNEL // 02 · WHATSAPP DISPATCH
                  </div>
                  <div className="font-condensed font-bold text-lg uppercase tracking-wide text-gpt-lightTextHeading dark:text-gpt-darkTextHeading group-hover:underline">
                    {personalInfo.formattedPhone}
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-gpt-lightMuted dark:text-gpt-darkMuted group-hover:text-black dark:group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* LinkedIn Channel */}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="tech-cross p-6 border border-gpt-lightBorder dark:border-gpt-darkBorder bg-gpt-lightBg dark:bg-gpt-darkBg hover:border-black dark:hover:border-white transition-all flex items-center justify-between group block cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 border border-gpt-lightBorder dark:border-gpt-darkBorder flex items-center justify-center text-black dark:text-white bg-gpt-lightSurface dark:bg-gpt-darkSurface">
                  <LinkedInIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono-tech uppercase tracking-wider text-gpt-lightMuted dark:text-gpt-darkMuted">
                    CHANNEL // 03 · PROFESSIONAL LINKEDIN
                  </div>
                  <div className="font-condensed font-bold text-lg uppercase tracking-wide text-gpt-lightTextHeading dark:text-gpt-darkTextHeading group-hover:underline">
                    linkedin.com/in/{personalInfo.linkedinDisplay}
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-gpt-lightMuted dark:text-gpt-darkMuted group-hover:text-black dark:group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* GitHub Channel */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="tech-cross p-6 border border-gpt-lightBorder dark:border-gpt-darkBorder bg-gpt-lightBg dark:bg-gpt-darkBg hover:border-black dark:hover:border-white transition-all flex items-center justify-between group block cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 border border-gpt-lightBorder dark:border-gpt-darkBorder flex items-center justify-center text-black dark:text-white bg-gpt-lightSurface dark:bg-gpt-darkSurface">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono-tech uppercase tracking-wider text-gpt-lightMuted dark:text-gpt-darkMuted">
                    CHANNEL // 04 · GITHUB REPOSITORIES
                  </div>
                  <div className="font-condensed font-bold text-lg uppercase tracking-wide text-gpt-lightTextHeading dark:text-gpt-darkTextHeading group-hover:underline">
                    github.com/{personalInfo.githubDisplay}
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-gpt-lightMuted dark:text-gpt-darkMuted group-hover:text-black dark:group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}
