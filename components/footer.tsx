'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ExternalLink, Twitter, MessageCircle, Sparkles, ArrowUpRight } from 'lucide-react'

const footerLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Process', href: '#process' },
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

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/5 mt-10">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 sm:p-10 mb-14 text-center"
        >
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-balance">
            <span className="text-white">Got a project in mind? </span>
            <span className="gradient-text">Let&apos;s build it.</span>
          </h3>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            From mobile app concepts to production-ready backends, I&apos;d love to help.
          </p>
          <a href="#contact" className="btn-primary mt-6">
            <span>Start a conversation</span>
            <ArrowUpRight size={16} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12"
        >
          {/* Brand */}
          <div className="md:col-span-1 col-span-2">
            <div className="flex items-center gap-2 text-white font-semibold mb-3">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500">
                <Sparkles size={14} className="text-background" />
              </span>
              <span>mikebuilds</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Designing and shipping clean Flutter apps and modern backend systems.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-semibold text-white mb-3 text-sm">Navigate</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-cyan-300 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-white mb-3 text-sm">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/resume/Michael_Resume_v2.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-cyan-300 transition-colors inline-flex items-center gap-1"
                >
                  Resume <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/crystalz05"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-cyan-300 transition-colors inline-flex items-center gap-1"
                >
                  Open Source <ExternalLink size={12} />
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-white mb-3 text-sm">Connect</h4>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-btn !w-10 !h-10"
                    title={social.label}
                    aria-label={social.label}
                  >
                    <Icon size={16} />
                  </a>
                )
              })}
            </div>
          </div>
        </motion.div>

        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground text-center md:text-left">
            © {currentYear} Paul Michael. Built with Next.js, Tailwind & Framer Motion.
          </p>
          <p className="text-xs text-muted-foreground inline-flex items-center gap-1.5">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Currently available for work
          </p>
        </div>
      </div>
    </footer>
  )
}
