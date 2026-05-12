'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Code2,
  Database,
  Smartphone,
  Server,
  GitBranch,
  Terminal,
} from 'lucide-react'

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
    title: 'Version Control',
    icon: GitBranch,
    skills: ['Git Flow', 'Pull Requests', 'Code Review', 'CI/CD'],
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

export function SkillsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" ref={ref} className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-white">My</span>
            <span className="glow-text"> Skills</span>
          </h2>
          <div className="h-1 w-20 bg-white rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group relative"
              >
                <div className="gradient-border cursor-pointer">
                  <div className="p-6 space-y-4 group-hover:bg-card/80 transition-colors duration-300">
                    {/* Header */}
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors">
                        <Icon className="text-white group-hover:text-white/80 transition-colors" size={24} />
                      </div>
                      <h3 className="text-lg font-semibold text-white">
                        {category.title}
                      </h3>
                    </div>

                    {/* Skills Grid */}
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{ delay: Math.random() * 0.3 }}
                          className="px-3 py-1 text-sm rounded-full bg-white/10 border border-white/20 text-white/80 hover:bg-white/20 hover:border-white/40 transition-colors cursor-default"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Glow effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-white/0 hover:bg-white/5 rounded-xl pointer-events-none"
                />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
