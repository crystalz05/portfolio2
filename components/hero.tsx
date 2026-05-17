'use client'

import { motion, type Variants } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail, Twitter, Download, Sparkles } from 'lucide-react'
import Image from 'next/image'

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_OUT },
  },
}

const stats = [
  { label: 'Projects', value: '15+' },
  { label: 'Years', value: '4+' },
  { label: 'Clients', value: '10+' },
]

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-20"
    >
      {/* Grid background */}
      <div className="absolute inset-0 -z-10 grid-bg" />

      {/* Floating orbs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          className="orb top-10 -left-20 w-[26rem] h-[26rem] bg-cyan-500/15"
        />
        <motion.div
          animate={{ x: [0, -25, 0], y: [0, 30, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          className="orb bottom-0 -right-20 w-[30rem] h-[30rem] bg-violet-500/15"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="orb top-1/3 left-1/2 -translate-x-1/2 w-[20rem] h-[20rem] bg-blue-500/10"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10"
      >
        {/* Status Pill */}
        <motion.div variants={itemVariants} className="mb-8 flex justify-center">
          <span className="status-pill">
            <span className="dot" />
            <span>Available for new projects</span>
          </span>
        </motion.div>

        {/* Profile Image */}
        <motion.div variants={itemVariants} className="mb-8 flex justify-center">
          <div className="ring-glow relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border border-white/10">
            <Image
              src="/profile.jpg"
              alt="Paul Michael"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-[1.05] tracking-tight text-balance"
        >
          <span className="block text-white">I&apos;m Paul Michael,</span>
          <span className="block gradient-text">a Flutter Developer</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-balance"
        >
          I build scalable mobile apps and clean backend systems with production-ready
          architecture, turning ideas into polished, shipped products.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center mb-12"
        >
          <a href="#projects" className="btn-primary">
            <span>View Projects</span>
            <ArrowRight size={18} />
          </a>
          <a href="#contact" className="btn-ghost">
            <Sparkles size={16} />
            <span>Let&apos;s Talk</span>
          </a>
          <a
            href="/resume/Michael_Resume_v2.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            <Download size={16} />
            <span>Download CV</span>
          </a>
        </motion.div>

        {/* Inline stats strip */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-6 sm:gap-10 mb-10"
        >
          {stats.map((s, i) => (
            <div key={s.label} className="flex items-center gap-6 sm:gap-10">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold gradient-text">{s.value}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">
                  {s.label}
                </div>
              </div>
              {i < stats.length - 1 && <div className="h-8 w-px bg-white/10" />}
            </div>
          ))}
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants} className="flex justify-center gap-3">
          <a
            href="https://github.com/crystalz05"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/mikebuilds"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://twitter.com/mikebuilds_"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn"
            aria-label="Twitter"
          >
            <Twitter size={20} />
          </a>
          <a
            href="mailto:mikecrystalz05@gmail.com"
            className="icon-btn"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="mt-16"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-muted-foreground flex flex-col items-center"
          >
            <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
