import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero'
import { AboutSection } from '@/components/about'
import { SkillsSection } from '@/components/skills'
import { ProjectsSection } from '@/components/projects'
import { ContactSection } from '@/components/contact'
import { Footer } from '@/components/footer'
import { ScrollToTop } from '@/components/scroll-to-top'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
