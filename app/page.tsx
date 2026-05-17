import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero'
import { AboutSection } from '@/components/about'
import { SkillsSection } from '@/components/skills'
import { ProcessSection } from '@/components/process'
import { ProjectsSection } from '@/components/projects'
import { ContactSection } from '@/components/contact'
import { Footer } from '@/components/footer'
import { ScrollToTop } from '@/components/scroll-to-top'

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
