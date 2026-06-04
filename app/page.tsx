import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero'
import dynamic from 'next/dynamic'

// Dynamically import below-the-fold components to reduce initial JS payload
const AboutSection = dynamic(() => import('@/components/about').then(mod => mod.AboutSection))
const SkillsSection = dynamic(() => import('@/components/skills').then(mod => mod.SkillsSection))
const ProcessSection = dynamic(() => import('@/components/process').then(mod => mod.ProcessSection))
const ProjectsSection = dynamic(() => import('@/components/projects').then(mod => mod.ProjectsSection))
const ContactSection = dynamic(() => import('@/components/contact').then(mod => mod.ContactSection))
const Footer = dynamic(() => import('@/components/footer').then(mod => mod.Footer))
const ScrollToTop = dynamic(() => import('@/components/scroll-to-top').then(mod => mod.ScrollToTop))

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProcessSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
