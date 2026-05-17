'use client'

import { motion, type Variants } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Github, ExternalLink, ImageIcon, ArrowUpRight } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { SpotlightCard } from './spotlight-card'

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1]

const projects = [
  {
    id: 1,
    title: 'Expense Tracker App',
    badge: 'Personal Finance',
    description:
      'A comprehensive expense management application with offline-first architecture, real-time sync, and detailed analytics.',
    tags: ['Flutter', 'Supabase', 'Dart', 'Analytics'],
    features: ['Offline/Online Sync', 'Clean UI', 'Expense Analytics'],
    github: 'https://github.com/crystalz05/expense_tracker_flutter_app',
    demo: '#',
    images: [
      '/project_images/expense_tracker/Screenshot_20260512-192829.jpg',
      '/project_images/expense_tracker/Screenshot_20260512-192833.jpg',
      '/project_images/expense_tracker/Screenshot_20260512-192839.jpg',
      '/project_images/expense_tracker/Screenshot_20260512-192842.jpg',
      '/project_images/expense_tracker/Screenshot_20260512-192846.jpg',
      '/project_images/expense_tracker/Screenshot_20260512-192858.jpg',
      '/project_images/expense_tracker/Screenshot_20260512-192907.jpg',
      '/project_images/expense_tracker/Screenshot_20260512-192925.jpg',
    ],
  },
  {
    id: 2,
    title: 'CampusPay',
    badge: 'Fintech',
    description:
      'A comprehensive Flutter application for campus financial management, wallet funding, P2P transfers, utility payments, and fee processing.',
    tags: ['Flutter', 'Supabase', 'Clean Architecture', 'Dart'],
    features: ['Wallet System', 'P2P Transfers', 'Utility Payments'],
    github: 'https://github.com/crystalz05/campuspay',
    demo: '#',
    images: [
      '/project_images/campuspay/login.png',
      '/project_images/campuspay/signup.png',
      '/project_images/campuspay/home.png',
      '/project_images/campuspay/fund_wallet.png',
      '/project_images/campuspay/pay.png',
      '/project_images/campuspay/buy_data.png',
      '/project_images/campuspay/transfer.png',
      '/project_images/campuspay/notifications.png',
      '/project_images/campuspay/profile.png',
      '/project_images/campuspay/tx_history.png',
      '/project_images/campuspay/tx_detail.png',
    ],
  },
  {
    id: 3,
    title: 'SabiStyle',
    badge: 'eCommerce',
    description:
      'A premium eCommerce app built with Flutter, seamless shopping experience, elegant UI, smart search, and robust order management.',
    tags: ['Flutter', 'Supabase', 'Dart', 'eCommerce'],
    features: ['Smart Search', 'Shopping Cart', 'Real-time Notifications'],
    github: 'https://github.com/crystalz05/sabistyle',
    demo: '#',
    images: [
      '/project_images/sabistyle/Screenshot_20260512-190555.jpg',
      '/project_images/sabistyle/Screenshot_20260512-191344.jpg',
      '/project_images/sabistyle/Screenshot_20260512-191346.jpg',
      '/project_images/sabistyle/Screenshot_20260512-191356.jpg',
      '/project_images/sabistyle/Screenshot_20260512-191359.jpg',
      '/project_images/sabistyle/Screenshot_20260512-191406.jpg',
      '/project_images/sabistyle/Screenshot_20260512-191409.jpg',
      '/project_images/sabistyle/Screenshot_20260512-191414.jpg',
      '/project_images/sabistyle/Screenshot_20260512-191422.jpg',
      '/project_images/sabistyle/Screenshot_20260512-191431.jpg',
    ],
  },
  {
    id: 4,
    title: 'Tyro Focus Timer',
    badge: 'Productivity',
    description:
      'A clean, production-grade productivity timer built with Flutter. Automatic Pomodoro cycling, persistent session history, and weekly stats.',
    tags: ['Flutter', 'SQLite', 'Clean Architecture', 'Dart'],
    features: ['Pomodoro Cycle', 'Persistent History', 'Weekly Stats'],
    github: 'https://github.com/crystalz05/tyro-focus-timer',
    demo: '#',
    images: [
      '/project_images/focus_timer/timer_light.png',
      '/project_images/focus_timer/timer_dark.png',
      '/project_images/focus_timer/stats_light.png',
      '/project_images/focus_timer/stats_dark.png',
      '/project_images/focus_timer/settings_light.png',
      '/project_images/focus_timer/settings_dark.png',
    ],
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
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium mb-3 border border-cyan-400/30 bg-cyan-400/10 text-cyan-200">
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
                      className="text-xs px-2.5 py-1 rounded-full border border-cyan-400/25 bg-cyan-400/[0.06] text-cyan-200/85"
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
                <div className="relative flex gap-3 mt-auto pt-4 border-t border-white/10">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold text-white bg-white/[0.08] border border-white/20 hover:bg-white/[0.14] hover:border-white/30 transition"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                  {project.images ? (
                    <Dialog>
                      <DialogTrigger asChild>
                        <button
                          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold text-background bg-gradient-to-r from-cyan-400 to-violet-500 hover:brightness-110 transition"
                        >
                          <ImageIcon size={16} />
                          <span>Preview</span>
                        </button>
                      </DialogTrigger>
                      <DialogContent className="max-w-[95vw] lg:max-w-[90vw] xl:max-w-[85vw] h-[90vh] flex flex-col bg-background border border-white/10 p-0 overflow-hidden">
                        <DialogTitle className="sr-only">
                          {project.title} Preview
                        </DialogTitle>
                        <DialogDescription className="sr-only">
                          Screenshots of the {project.title} project.
                        </DialogDescription>
                        <div className="p-2 sm:p-6 flex-1 min-h-0 flex items-center justify-center">
                          <Carousel className="w-full h-full flex items-center">
                            <CarouselContent className="h-full">
                              {project.images.map((img, idx) => (
                                <CarouselItem
                                  key={idx}
                                  className="h-full flex items-center justify-center"
                                >
                                  <div className="relative w-full h-full rounded-lg overflow-hidden flex items-center justify-center bg-black/50">
                                    <img
                                      src={img}
                                      alt={`${project.title} screenshot ${idx + 1}`}
                                      className="max-w-full max-h-[80vh] sm:max-h-[85vh] object-contain rounded-md p-2"
                                    />
                                  </div>
                                </CarouselItem>
                              ))}
                            </CarouselContent>
                            <div className="hidden sm:block">
                              <CarouselPrevious className="left-4 bg-black/50 border-white/20 hover:bg-black/70" />
                              <CarouselNext className="right-4 bg-black/50 border-white/20 hover:bg-black/70" />
                            </div>
                          </Carousel>
                        </div>
                      </DialogContent>
                    </Dialog>
                  ) : (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold text-background bg-gradient-to-r from-cyan-400 to-violet-500 hover:brightness-110 transition"
                    >
                      <ExternalLink size={16} />
                      <span>Preview</span>
                    </a>
                  )}
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
