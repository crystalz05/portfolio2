'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail, ExternalLink, Twitter, Download } from 'lucide-react'
import Image from 'next/image'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          initial={{ opacity: 0.3 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0.2 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse', delay: 0.5 }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0.2 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse', delay: 1 }}
          className="absolute top-1/2 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10"
      >
        {/* Profile Image */}
        <motion.div variants={itemVariants} className="mb-8 flex justify-center">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-2 border-white/30">
            <Image
              src="/profile.jpg"
              alt="Paul Michael"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Greeting */}
        <motion.div variants={itemVariants}>
          <p className="text-sm sm:text-base font-semibold text-white mb-4 tracking-wider">
            Welcome to my digital space
          </p>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight"
        >
          <span className="block text-white">I&apos;m Paul Michael</span>
          <span className="glow-text text-5xl sm:text-6xl lg:text-7xl">
            Flutter Developer
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          Flutter Developer, Building scalable mobile apps and systems with clean architecture and production-ready code.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center mb-12"
        >
          <a href="#projects" className="glow-button px-6 py-3 rounded-lg bg-white/10 border border-white/30 text-white hover:bg-white/20 flex items-center justify-center gap-2 transition-colors">
            <span>View Projects</span>
            <ArrowRight size={20} />
          </a>
          <a href="#contact" className="glow-button px-6 py-3 rounded-lg bg-white/10 border border-white/30 text-white hover:bg-white/20 flex items-center justify-center transition-colors">
            Contact Me
          </a>
          <a href="/resume/Michael_Resume_v2.pdf" target="_blank" rel="noopener noreferrer" className="glow-button px-6 py-3 rounded-lg bg-cyan-500/20 border border-cyan-400/50 text-white hover:bg-cyan-500/30 flex items-center justify-center gap-2 transition-colors">
            <Download size={20} />
            <span>Download CV</span>
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-6"
        >
          <motion.a
            href="https://github.com/crystalz05"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors"
          >
            <Github size={24} />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/mikebuilds"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors"
          >
            <Linkedin size={24} />
          </motion.a>
          <motion.a
            href="https://twitter.com/mikebuilds_"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors"
          >
            <Twitter size={24} />
          </motion.a>
          <motion.a
            href="mailto:mikecrystalz05@gmail.com"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors"
          >
            <Mail size={24} />
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="mt-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white flex flex-col items-center"
          >
            <span className="text-sm font-medium mb-2">Scroll to explore</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
