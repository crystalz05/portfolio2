'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Github, ExternalLink, ImageIcon } from 'lucide-react'
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
import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: 'Expense Tracker App',
    description: 'A comprehensive expense management application with offline-first architecture, real-time sync, and detailed analytics.',
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
    description: 'A comprehensive Flutter application for campus financial management, featuring wallet funding, P2P transfers, utility payments, and fee processing.',
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
    description: 'A premium eCommerce application built with Flutter. Offers a seamless shopping experience with elegant UI, smart search, and robust order management.',
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
    description: 'A clean, production-grade productivity timer built with Flutter. Features automatic Pomodoro cycling, persistent session history, and weekly stats.',
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

export function ProjectsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      id="projects"
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
            <span className="glow-text">Featured</span>
            <span className="text-white"> Projects</span>
          </h2>
          <div className="h-1 w-20 bg-white rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative"
            >
                <div className="glass-effect rounded-xl border border-white/10 overflow-hidden hover:border-white/30 transition-all duration-300 p-6 h-full flex flex-col">
                {/* Header */}
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature) => (
                        <span
                          key={feature}
                          className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/80"
                        >
                          {feature}
                        </span>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-6 flex-1">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-1 rounded-full bg-white/10 border border-white/20 text-white/80"
                        >
                          {tag}
                        </span>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors"
                    >
                      <Github size={18} />
                      <span>Code</span>
                    </a>
                    {project.images ? (
                      <Dialog>
                        <DialogTrigger asChild>
                          <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors">
                            <ImageIcon size={18} />
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
                                  <CarouselItem key={idx} className="h-full flex items-center justify-center">
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
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors"
                      >
                        <ExternalLink size={18} />
                        <span>Preview</span>
                      </a>
                    )}
                </div>
              </div>

              {/* Animated border glow on hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-white/0 group-hover:bg-white/5 rounded-xl pointer-events-none"
                />
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <button className="glow-button bg-white/10 border border-white/30 text-white hover:bg-white/20">
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  )
}
