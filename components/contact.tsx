'use client'

import { useState } from 'react'
import { motion, type Variants } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Linkedin, Send, MessageCircle, ArrowUpRight, Github as GithubIcon, Twitter } from 'lucide-react'
import { SpotlightCard } from './spotlight-card'

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1]

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'mikecrystalz05@gmail.com',
    href: 'mailto:mikecrystalz05@gmail.com',
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    value: '@crystalz05',
    href: 'https://github.com/crystalz05',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: '@mikebuilds',
    href: 'https://www.linkedin.com/in/mikebuilds/',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+234 813 450 2427',
    href: 'https://wa.me/2348134502427',
  },
  {
    icon: Twitter,
    label: 'X (Twitter)',
    value: '@mikebuilds_',
    href: 'https://x.com/mikebuilds_',
  },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } },
}

export function ContactSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [sent, setSent] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' })
      setIsSubmitting(false)
      setSent(true)
      setTimeout(() => setSent(false), 3500)
    }, 1000)
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-28 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE_OUT }}
          className="mb-14 text-center max-w-2xl mx-auto"
        >
          <span className="section-label">Contact</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 tracking-tight text-balance">
            <span className="text-foreground">Let&apos;s build </span>
            <span className="gradient-text">something good</span>
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Have a project, a role, or just a question? I usually reply within
            24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:items-stretch">
          {/* Contact info column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="lg:col-span-2 space-y-4"
          >
            {contactInfo.map((info) => {
              const Icon = info.icon
              return (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  className="group block"
                >
                  <SpotlightCard className="p-5 flex items-center gap-4 transition-transform group-hover:-translate-y-0.5">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--brand-sky)]/10 border border-[var(--brand-sky)]/15">
                      <Icon className="text-accent-ink" size={18} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs uppercase tracking-wider text-muted-foreground">
                        {info.label}
                      </div>
                      <div className="text-foreground text-sm truncate">
                        {info.value}
                      </div>
                    </div>
                    <ArrowUpRight
                      className="text-muted-foreground group-hover:text-accent-ink transition-colors shrink-0"
                      size={18}
                    />
                  </SpotlightCard>
                </motion.a>
              )
            })}
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.15 }}
            className="lg:col-span-3 flex flex-col"
          >
            <SpotlightCard className="p-7 flex flex-col flex-1">
              <form onSubmit={handleSubmit} className="flex flex-col flex-1 gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
                      Your name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-foreground/[0.02] border border-foreground/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[var(--brand-sky)]/40 focus:bg-foreground/[0.04] transition"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-foreground/[0.02] border border-foreground/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[var(--brand-sky)]/40 focus:bg-foreground/[0.04] transition"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>

                <div className="flex flex-col flex-1">
                  <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="flex-1 w-full px-4 py-3 rounded-xl bg-foreground/[0.02] border border-foreground/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[var(--brand-sky)]/40 focus:bg-foreground/[0.04] transition resize-none min-h-[120px]"
                    placeholder="Tell me about the project, timeline, and what success looks like..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-4 h-4 border-2 border-[#07090F]/40 border-t-[#07090F] rounded-full"
                      />
                      <span>Sending...</span>
                    </>
                  ) : sent ? (
                    <span>Sent — talk soon!</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={16} />
                    </>
                  )}
                </motion.button>
              </form>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
