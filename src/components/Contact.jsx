import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MailCheck, Mail, Phone, Copy, Check } from 'lucide-react';
import { LinkedInIcon } from './Icons';
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
    <section id="contact" className="py-16 md:py-24 bg-gpt-lightSurface/60 dark:bg-gpt-darkSurface/40">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 text-center"
      >
        
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-gpt-lightMuted dark:text-gpt-darkMuted mb-4">
          <MailCheck className="w-3.5 h-3.5 text-black dark:text-white" />
          <span>Let's Build Something Meaningful</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gpt-lightTextHeading dark:text-gpt-darkTextHeading leading-tight mb-4">
          Ready to discuss a project or opportunity?
        </h2>

        <p className="text-sm sm:text-base text-gpt-lightMuted dark:text-gpt-darkMuted max-w-xl mx-auto mb-10 leading-relaxed">
          Silakan hubungi saya melalui email, WhatsApp, atau LinkedIn. Terbuka untuk diskusi proyek perangkat lunak, inisiatif AI/ML, maupun kolaborasi pengembangan teknologi.
        </p>

        {/* Direct Contact Cards with Interactive Springs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10 text-left">
          
          {/* Email */}
          <motion.a
            href={`mailto:${personalInfo.email}`}
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="p-5 rounded-2xl bg-gpt-lightSurface dark:bg-gpt-darkSurface border border-gpt-lightBorder dark:border-gpt-darkBorder hover:border-black dark:hover:border-white transition-colors shadow-sm group block"
          >
            <div className="w-8 h-8 rounded-lg bg-black/5 dark:bg-white/10 text-black dark:text-white flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Mail className="w-4 h-4" />
            </div>
            <div className="text-[11px] font-mono text-gpt-lightMuted dark:text-gpt-darkMuted uppercase">
              Email Address
            </div>
            <div className="text-sm font-semibold text-gpt-lightTextHeading dark:text-gpt-darkTextHeading truncate mt-0.5">
              {personalInfo.email}
            </div>
          </motion.a>

          {/* WhatsApp */}
          <motion.a
            href={`https://wa.me/6283191647715`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="p-5 rounded-2xl bg-gpt-lightSurface dark:bg-gpt-darkSurface border border-gpt-lightBorder dark:border-gpt-darkBorder hover:border-black dark:hover:border-white transition-colors shadow-sm group block"
          >
            <div className="w-8 h-8 rounded-lg bg-black/5 dark:bg-white/10 text-black dark:text-white flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Phone className="w-4 h-4" />
            </div>
            <div className="text-[11px] font-mono text-gpt-lightMuted dark:text-gpt-darkMuted uppercase">
              WhatsApp / Call
            </div>
            <div className="text-sm font-semibold text-gpt-lightTextHeading dark:text-gpt-darkTextHeading truncate mt-0.5">
              {personalInfo.formattedPhone}
            </div>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="p-5 rounded-2xl bg-gpt-lightSurface dark:bg-gpt-darkSurface border border-gpt-lightBorder dark:border-gpt-darkBorder hover:border-black dark:hover:border-white transition-colors shadow-sm group block"
          >
            <div className="w-8 h-8 rounded-lg bg-black/5 dark:bg-white/10 text-black dark:text-white flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <LinkedInIcon className="w-4 h-4" />
            </div>
            <div className="text-[11px] font-mono text-gpt-lightMuted dark:text-gpt-darkMuted uppercase">
              LinkedIn Profile
            </div>
            <div className="text-sm font-semibold text-gpt-lightTextHeading dark:text-gpt-darkTextHeading truncate mt-0.5">
              {personalInfo.linkedinDisplay}
            </div>
          </motion.a>

        </div>

        {/* Copy Email Button with Animated Pop */}
        <motion.button
          onClick={handleCopyEmail}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.96 }}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono border transition-all shadow-sm ${
            copied
              ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30'
              : 'border-gpt-lightBorder dark:border-gpt-darkBorder bg-gpt-lightSurface dark:bg-gpt-darkSurface hover:border-black dark:hover:border-white text-gpt-lightMuted dark:text-gpt-darkMuted hover:text-black dark:hover:text-white'
          }`}
        >
          {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
          <span>{copied ? '✓ Copied to Clipboard!' : `Copy Email: ${personalInfo.email}`}</span>
        </motion.button>

      </motion.div>
    </section>
  );
}
