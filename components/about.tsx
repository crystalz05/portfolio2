'use client'

import { motion, type Variants } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Layers, Smartphone, ServerCog } from 'lucide-react'
import { AnimatedCounter } from './animated-counter'
import { SpotlightCard } from './spotlight-card'

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1]

const stats = [
  { label: 'Projects shipped', value: 15, suffix: '+' },
  { label: 'Technologies', value: 20, suffix: '+' },
  { label: 'Years coding', value: 4, suffix: '+' },
  { label: 'GitHub commits', value: 500, suffix: '+' },
]

const focusItems = [
  {
    icon: Smartphone,
    title: 'Mobile-first development',
    text: 'Flutter apps with offline-first sync, clean architecture, and pixel-precise UI.',
  },
  {
    icon: ServerCog,
    title: 'Robust backend systems',
    text: 'FastAPI & Spring Boot services with auth, scaling, and clean API design.',
  },
  {
    icon: Layers,
    title: 'Maintainable architecture',
    text: 'Feature-first folder structures, typed contracts, and tested core logic.',
  },
  {
    icon: Code,
    title: 'Polished user experience',
    text: 'Smooth animations, accessible interfaces, and thoughtful micro-interactions.',
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

export function AboutSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-28 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE_OUT }}
          className="mb-14 text-center max-w-2xl mx-auto"
        >
          <span className="section-label mb-4">About</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 tracking-tight text-balance">
            <span className="text-white">A developer obsessed with </span>
            <span className="gradient-text">clean, shippable code</span>
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            I help teams turn product ideas into polished apps, focused on
            performance, scalability, and the small details users actually feel.
          </p>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="glass-card p-5 text-center"
            >
              <div className="text-3xl sm:text-4xl font-bold gradient-text">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bio + Focus grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-5 gap-6"
        >
          {/* Bio */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <SpotlightCard className="p-7 h-full">
              <div className="flex items-center gap-2 mb-4">
                <span className="status-pill">
                  <span className="dot" />
                  Open to work
                </span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">
                Who I am
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                I&apos;m a full-stack developer who specializes in Flutter and
                modern backend systems. I love taking a product from a rough idea
                to a shipped, scalable build.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My path started with Java and Android, then Flutter for
                cross-platform apps, and grew into FastAPI for the
                APIs powering them.
              </p>
            </SpotlightCard>
          </motion.div>

          {/* Focus items */}
          <motion.div variants={itemVariants} className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {focusItems.map((item) => {
              const Icon = item.icon
              return (
                <SpotlightCard key={item.title} className="p-6">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 border border-white/10 mb-4">
                    <Icon className="text-cyan-300" size={18} />
                  </div>
                  <h4 className="text-white font-semibold mb-1.5">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.text}
                  </p>
                </SpotlightCard>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
