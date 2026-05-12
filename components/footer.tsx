'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ExternalLink, Twitter, MessageCircle } from 'lucide-react'

const footerLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

const socialLinks = [
  { icon: Github, href: 'https://github.com/crystalz05', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/mikebuilds', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/mikebuilds_', label: 'Twitter' },
  { icon: Mail, href: 'mailto:mikecrystalz05@gmail.com', label: 'Email' },
  { icon: MessageCircle, href: 'https://wa.me/2348132743494', label: 'WhatsApp' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-gradient-to-t from-muted/20 to-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12"
        >
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-1"
          >
            <div className="text-lg font-bold text-white mb-2">
              mikebuilds
            </div>
            <p className="text-sm text-muted-foreground">
              Building beautiful and functional digital experiences with clean code and attention to detail.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-1"
          >
            <h4 className="font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-1"
          >
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="/resume/Michael_Resume_v2.pdf" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-white transition-colors flex items-center gap-1">
                  Resume <ExternalLink size={12} />
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-1"
          >
            <h4 className="font-semibold text-white mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-lg border border-white/30 text-white hover:bg-white/10 transition-colors"
                    title={social.label}
                  >
                    <Icon size={20} />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8" />

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {currentYear} Full-Stack Developer. Built with passion for clean code.
          </p>
          <div className="text-sm text-muted-foreground">
            Designed & Developed with <span className="text-white">Flutter</span> & <span className="text-white">Modern Web Tech</span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
