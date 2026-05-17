'use client'

import { motion, type Variants } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Code2,
  Database,
  Smartphone,
  Server,
  GitBranch,
  Terminal,
} from 'lucide-react'
import { SpotlightCard } from './spotlight-card'

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1]

const skillCategories = [
  {
    title: 'Frontend',
    icon: Smartphone,
    skills: ['Flutter', 'Dart', 'Jetpack Compose', 'React', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    icon: Server,
    skills: ['FastAPI', 'Spring Boot', 'Firebase', 'Supabase'],
  },
  {
    title: 'Database',
    icon: Database,
    skills: ['PostgreSQL', 'MySQL', 'Firestore', 'Firebase Realtime'],
  },
  {
    title: 'Tools & DevOps',
    icon: Terminal,
    skills: ['Git', 'GitHub', 'Docker', 'Linux', 'VS Code', 'Android Studio'],
  },
  {
    title: 'Architecture',
    icon: Code2,
    skills: ['REST APIs', 'Authentication', 'State Management', 'System Design'],
  },
  {
    title: 'Workflow',
    icon: GitBranch,
    skills: ['Git Flow', 'Pull Requests', 'Code Review', 'CI/CD'],
  },
]

const marqueeTags = [
  'Flutter', 'Dart', 'FastAPI', 'Spring Boot', 'PostgreSQL', 'Firebase',
  'Supabase', 'React', 'Next.js', 'TypeScript', 'Docker', 'Linux',
  'Jetpack Compose', 'REST API', 'Tailwind', 'Git',
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } },
}

export function SkillsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="skills" ref={ref} className="relative py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE_OUT }}
          className="mb-12 text-center max-w-2xl mx-auto"
        >
          <span className="section-label">Toolkit</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 tracking-tight text-balance">
            <span className="text-white">The stack I </span>
            <span className="gradient-text">build with</span>
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            A focused set of tools I use every day, chosen for production
            reliability, not novelty.
          </p>
        </motion.div>

        {/* Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="marquee mb-14"
        >
          {[0, 1].map((dup) => (
            <div key={dup} className="marquee-track pr-6" aria-hidden={dup === 1}>
              {marqueeTags.map((tag) => (
                <span key={`${dup}-${tag}`} className="chip whitespace-nowrap">
                  {tag}
                </span>
              ))}
            </div>
          ))}
        </motion.div>

        {/* Category cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {skillCategories.map((category) => {
            const Icon = category.icon
            return (
              <motion.div key={category.title} variants={itemVariants}>
                <SpotlightCard className="p-6 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/15 to-violet-500/15 border border-white/10">
                      <Icon className="text-cyan-300" size={18} />
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span key={skill} className="chip">
                        {skill}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
