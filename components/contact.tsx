'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Github, Linkedin, Send, MessageCircle } from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'mikecrystalz05@gma..',
    href: 'mailto:mikecrystalz05@gmail.com',
  },
  {
    icon: Github,
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
    value: '+2348132743494',
    href: 'https://wa.me/2348132743494',
  },
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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export function ContactSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData)
      setFormData({ name: '', email: '', message: '' })
      setIsSubmitting(false)
      alert('Message sent! I&apos;ll get back to you soon.')
    }, 1000)
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-white">Get In</span>
            <span className="glow-text"> Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s collaborate and bring your ideas to life. Feel free to reach out!
          </p>
          <div className="h-1 w-20 bg-white rounded-full mx-auto mt-6" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {/* Contact Info */}
          {contactInfo.map((info) => {
            const Icon = info.icon
            return (
              <motion.a
                key={info.label}
                href={info.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <div className="glass-effect rounded-lg border border-white/10 p-6 hover:border-white/30 transition-all duration-300 flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors">
                    <Icon className="text-white group-hover:text-white/80 transition-colors" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white text-sm">
                      {info.label}
                    </h3>
                    <p className="text-muted-foreground text-sm hover:text-white transition-colors">
                      {info.value}
                    </p>
                  </div>
                </div>
              </motion.a>
            )
          })}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-2xl mx-auto"
        >
          <div className="glass-effect rounded-xl border border-white/10 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-card border border-white/10 text-white placeholder-muted-foreground focus:outline-none focus:border-white/30 transition-colors"
                  placeholder="John Doe"
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-card border border-white/10 text-white placeholder-muted-foreground focus:outline-none focus:border-white/30 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-card border border-white/10 text-white placeholder-muted-foreground focus:outline-none focus:border-cyan-400/50 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full glow-button bg-white/10 border border-white/30 text-white hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="w-5 h-5 border-2 border-transparent border-t-white rounded-full"
                    />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
