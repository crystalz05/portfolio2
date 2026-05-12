'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const timelineEvents = [
  {
    year: '2020',
    title: 'Started Learning Programming',
    description: 'Began my programming journey with Java and foundational computer science concepts.',
    icon: '📚',
  },
  {
    year: '2021',
    title: 'Android Development Era',
    description: 'Focused on native Android development, learning Kotlin and building mobile applications.',
    icon: '📱',
  },
  {
    year: '2022',
    title: 'Discovered Flutter',
    description: 'Transitioned to Flutter for cross-platform development and built several production apps.',
    icon: '🚀',
  },
  {
    year: '2023',
    title: 'Backend Development',
    description: 'Expanded skill set to include FastAPI, Spring Boot, and database design. Started freelancing.',
    icon: '⚙️',
  },
  {
    year: '2024',
    title: 'Full-Stack Mastery',
    description: 'Building scalable full-stack applications with modern architectures and deployment strategies.',
    icon: '⭐',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
}

export function TimelineSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" ref={ref} className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-white">My</span>
            <span className="glow-text"> Journey</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-purple-500 md:translate-x-1/2" />

          {/* Timeline events */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                variants={itemVariants}
                className={`relative md:flex md:gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Left side content (mobile: always left, desktop: alternating) */}
                <div className="md:w-1/2 pl-12 md:pl-0">
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="glass-effect rounded-lg border border-white/10 p-6 hover:border-cyan-400/50 transition-colors"
                  >
                    <div className="mb-3">
                      <span className="text-3xl">{event.icon}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {event.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {event.description}
                    </p>
                  </motion.div>
                </div>

                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: index * 0.2 + 0.3 }}
                  className="absolute left-0 md:left-1/2 top-6 w-6 h-6 bg-cyan-400 rounded-full border-4 border-background md:translate-x--3 z-10"
                >
                  <motion.div
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    className="absolute inset-0 rounded-full border-2 border-cyan-400"
                  />
                </motion.div>

                {/* Year badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: index * 0.2 + 0.1 }}
                  className="hidden md:flex md:w-1/2 md:items-start justify-center md:pt-2"
                >
                  <div className="text-center">
                    <span className="inline-block px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/50 text-purple-300 font-bold text-lg">
                      {event.year}
                    </span>
                  </div>
                </motion.div>

                {/* Year badge mobile */}
                <div className="md:hidden mb-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/50 text-purple-300 font-bold text-sm">
                    {event.year}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
