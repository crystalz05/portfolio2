'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const stats = [
  { label: 'Projects Completed', value: '15+' },
  { label: 'Tecnologies', value: '15+' },
  { label: 'Years Learning', value: '4+' },
  { label: 'GitHub Contributions', value: '500+' },
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

export function AboutSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="glow-text">About</span>
            <span className="text-white"> Me</span>
          </h2>
          <div className="h-1 w-20 bg-white rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start"
        >
          {/* Bio */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass-effect p-8 rounded-xl border border-white/10">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                I&apos;m a passionate full-stack developer with a focus on creating scalable, efficient, and user-centric applications. With expertise in mobile development using Flutter and backend systems built with FastAPI and Spring Boot, I thrive on solving complex problems through clean architecture and production-ready code.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey started with learning Java and transitioning into Android development, then exploring the power of Flutter for cross-platform solutions. I&apos;ve since expanded my skill set to include modern backend APIs, database design, and deployment strategies that scale.
              </p>
            </div>

            <div className="glass-effect p-8 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-white">What I Focus On</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-white font-bold mt-1">•</span>
                  <span>Building clean, maintainable code with attention to performance and scalability</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-white font-bold mt-1">•</span>
                  <span>Creating intuitive user interfaces with excellent UX principles</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-white font-bold mt-1">•</span>
                  <span>Designing robust backend systems with proper authentication and security</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-white font-bold mt-1">•</span>
                  <span>Implementing offline-first solutions for mobile applications</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="space-y-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.1 }}
                className="glass-effect p-6 rounded-lg border border-white/10 text-center hover:border-white/30 transition-colors"
              >
                <div className="text-3xl font-bold glow-text mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
