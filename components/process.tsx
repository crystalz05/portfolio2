'use client'

import { motion, type Variants } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Compass, PenTool, Hammer, Rocket } from 'lucide-react'
import { SpotlightCard } from './spotlight-card'

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1]

const steps = [
  {
    icon: Compass,
    title: 'Discover',
    text: 'Understand the problem, audience, and constraints. Define what shipping looks like.',
  },
  {
    icon: PenTool,
    title: 'Design',
    text: 'Sketch flows, model data, and shape the architecture before writing real code.',
  },
  {
    icon: Hammer,
    title: 'Build',
    text: 'Production-grade Flutter & backend code with tests, clean state, and CI.',
  },
  {
    icon: Rocket,
    title: 'Ship',
    text: 'Polish, performance pass, deploy, then watch it land smoothly with users.',
  },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_OUT } },
}

export function ProcessSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section id="process" ref={ref} className="relative py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE_OUT }}
          className="mb-14 text-center max-w-2xl mx-auto"
        >
          <span className="section-label">Process</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 tracking-tight text-balance">
            <span className="text-white">How I </span>
            <span className="gradient-text">turn ideas into apps</span>
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            A simple, repeatable flow — no scope creep, no hidden surprises.
          </p>
        </motion.div>

        <motion.ol
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {/* Connector line on desktop */}
          <div
            aria-hidden
            className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
          />

          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.li key={step.title} variants={itemVariants} className="relative">
                <SpotlightCard className="p-6 h-full">
                  {/* Number badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 border border-white/10">
                      <Icon className="text-cyan-300" size={18} />
                    </div>
                    <span className="text-xs font-mono text-muted-foreground">
                      0{i + 1}
                    </span>
                  </div>

                  <h3 className="text-white font-semibold text-lg mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.text}
                  </p>
                </SpotlightCard>
              </motion.li>
            )
          })}
        </motion.ol>
      </div>
    </section>
  )
}
