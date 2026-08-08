'use client'

import { motion, type Variants } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Github, ExternalLink, ImageIcon, ArrowUpRight } from 'lucide-react'
import { SpotlightCard } from './spotlight-card'
import Link from 'next/link'
import { projects } from '@/lib/data/projects'

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1]

// Projects data moved to lib/data/projects.ts

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_OUT } },
}

export function ProjectsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section
      id="projects"
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
          <span className="section-label">Work</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 tracking-tight text-balance">
            <span className="text-white">Selected </span>
            <span className="gradient-text">projects</span>
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            A few apps I&apos;ve designed and shipped, from indie tools to
            production-grade fintech.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="relative project-card group rounded-2xl"
            >
              {/* White glow halo behind card */}
              <div
                aria-hidden
                className="absolute -inset-px rounded-2xl pointer-events-none transition-opacity duration-500 opacity-40 group-hover:opacity-80"
                style={{
                  background:
                    'radial-gradient(ellipse at center, rgba(255,255,255,0.18), rgba(255,255,255,0) 70%)',
                  filter: 'blur(22px)',
                }}
              />

              <SpotlightCard
                className="relative p-7 h-full flex flex-col rounded-2xl border-white/10"
              >
                {/* White background wash */}
                <div
                  aria-hidden
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{
                    background:
                      'linear-gradient(160deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 55%)',
                  }}
                />
                {/* Top white stripe */}
                <div
                  aria-hidden
                  className="absolute top-0 left-6 right-6 h-px pointer-events-none"
                  style={{
                    background:
                      'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)',
                  }}
                />

                {/* Header */}
                <div className="relative flex items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium mb-3 border border-[#7BAFD4]/25 bg-[#7BAFD4]/08 text-[#A8C8DC]">
                      {project.badge}
                    </span>
                    <h3 className="text-2xl font-semibold text-white tracking-tight">
                      {project.title}
                    </h3>
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 inline-flex items-center justify-center h-10 w-10 rounded-full border border-white/20 bg-white/[0.08] text-white hover:bg-white/[0.14] hover:border-white/30 transition"
                    aria-label="View code"
                  >
                    <ArrowUpRight size={18} />
                  </a>
                </div>

                <p className="relative text-muted-foreground leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Features */}
                <div className="relative mb-4 flex flex-wrap gap-2">
                  {project.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs px-2.5 py-1 rounded-full border border-[#7BAFD4]/20 bg-[#7BAFD4]/[0.06] text-[#A8C8DC]/85"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="relative mb-6 flex-1 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="chip">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="relative flex gap-2 mt-auto pt-4 border-t border-white/10">
                  <Link
                    href={`/projects/${project.id}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-background bg-[#7BAFD4] hover:brightness-110 transition"
                  >
                    <span>View Project</span>
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-14 text-center"
        >
          <a
            href="https://github.com/crystalz05"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            <Github size={16} />
            <span>See more on GitHub</span>
            <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
