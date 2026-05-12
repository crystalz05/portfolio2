'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Product Manager',
    company: 'TechStart Inc',
    image: '👩‍💼',
    text: 'Working with this developer was an absolute game-changer. The quality of code, attention to detail, and commitment to clean architecture transformed our mobile app.',
    rating: 5,
  },
  {
    name: 'Marcus Chen',
    role: 'CTO',
    company: 'FastScale Systems',
    image: '👨‍💻',
    text: 'Exceptional backend development skills. The API architecture they designed handles millions of requests seamlessly. Highly recommended for any scalability challenges.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Startup Founder',
    company: 'EcoApp Solutions',
    image: '👩‍🔬',
    text: 'From concept to production, this developer delivered a full-stack solution that exceeded expectations. Professional, responsive, and technically brilliant.',
    rating: 5,
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

export function TestimonialsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      id="testimonials"
      ref={ref}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-white">What Clients</span>
            <span className="glow-text"> Say</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mx-auto" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group relative"
            >
              <div className="glass-effect rounded-xl border border-white/10 p-8 h-full hover:border-cyan-400/50 transition-all duration-300 flex flex-col">
                {/* Testimonial content */}
                <div className="flex-1 mb-6">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{ delay: index * 0.1 + i * 0.05 }}
                      >
                        <Star
                          size={18}
                          className="fill-yellow-400 text-yellow-400"
                        />
                      </motion.div>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-muted-foreground leading-relaxed italic">
                    &quot;{testimonial.text}&quot;
                  </p>
                </div>

                {/* Author info */}
                <div className="pt-6 border-t border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">{testimonial.image}</div>
                    <div>
                      <h4 className="font-semibold text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Glow effect */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 to-purple-500/0 group-hover:from-cyan-400/10 group-hover:to-purple-500/10 rounded-xl pointer-events-none"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
