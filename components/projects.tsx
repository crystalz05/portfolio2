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
            <span className="text-foreground">Selected </span>
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
              {/* Glow halo behind card */}
              <div
                aria-hidden
                className="absolute -inset-px rounded-2xl pointer-events-none transition-opacity duration-500 opacity-40 group-hover:opacity-80"
                style={{
                  background:
                    'radial-gradient(ellipse at center, color-mix(in srgb, var(--foreground) 18%, transparent), transparent 70%)',
                  filter: 'blur(22px)',
                }}
              />

              <SpotlightCard
                className="relative p-7 h-full flex flex-col rounded-2xl border-foreground/10"
              >
                {/* Background wash */}
                <div
                  aria-hidden
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{
                    background:
                      'linear-gradient(160deg, color-mix(in srgb, var(--foreground) 6%, transparent) 0%, transparent 55%)',
                  }}
                />
                {/* Top stripe */}
                <div
                  aria-hidden
                  className="absolute top-0 left-6 right-6 h-px pointer-events-none"
                  style={{
                    background:
                      'linear-gradient(90deg, transparent, color-mix(in srgb, var(--foreground) 50%, transparent), transparent)',
                  }}
                />

                {/* Header */}
                <div className="relative flex items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium mb-3 border border-[var(--brand-sky)]/25 bg-[var(--brand-sky)]/08 text-accent-ink">
                      {project.badge}
                    </span>
                    <h3 className="text-2xl font-semibold text-foreground tracking-tight">
                      {project.title}
                    </h3>
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 inline-flex items-center justify-center h-10 w-10 rounded-full border border-foreground/20 bg-foreground/[0.08] text-foreground hover:bg-foreground/[0.14] hover:border-foreground/30 transition"
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
                      className="text-xs px-2.5 py-1 rounded-full border border-[var(--brand-sky)]/20 bg-[var(--brand-sky)]/[0.06] text-accent-ink/85"
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
                <div className="relative flex gap-2 mt-auto pt-4 border-t border-foreground/10">
                  <Link
                    href={`/projects/${project.id}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-[var(--brand-sky-text)] bg-[var(--brand-sky)] hover:brightness-110 transition"
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
