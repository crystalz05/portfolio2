import { notFound } from 'next/navigation'
import { projects } from '@/lib/data/projects'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ProjectScreenshots } from '@/components/project-screenshots'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Github, ExternalLink } from 'lucide-react'

// Generate static params for all projects if you are statically exporting
export function generateStaticParams() {
  return projects.map((p) => ({
    id: p.id.toString(),
  }))
}

export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const project = projects.find((p) => p.id.toString() === id)

  if (!project) {
    notFound()
  }

  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          <span>Back to Projects</span>
        </Link>

        <div className="mb-8">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-4 border border-[var(--brand-sky)]/25 bg-[var(--brand-sky)]/08 text-accent-ink">
            {project.badge}
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6">
            {project.title}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            {project.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Tech Stack */}
          <div>
            <h3 className="text-sm uppercase tracking-wider text-muted-foreground font-semibold mb-4">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="chip">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-sm uppercase tracking-wider text-muted-foreground font-semibold mb-4">
              Key Features
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.features.map((feature) => (
                <span
                  key={feature}
                  className="text-sm px-3 py-1.5 rounded-full border border-[var(--brand-sky)]/20 bg-[var(--brand-sky)]/[0.06] text-accent-ink/85"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mb-16 pt-8 border-t border-foreground/10">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-foreground bg-foreground/[0.08] border border-foreground/20 hover:bg-foreground/[0.14] hover:border-foreground/30 transition"
            >
              <Github size={18} />
              <span>App Code</span>
            </a>
          )}
          {project.githubContract && (
            <a
              href={project.githubContract}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-foreground bg-foreground/[0.08] border border-foreground/20 hover:bg-foreground/[0.14] hover:border-foreground/30 transition"
            >
              <Github size={18} />
              <span>Contract Code</span>
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-[var(--brand-sky-text)] bg-[var(--brand-sky)] hover:brightness-110 transition"
            >
              <ExternalLink size={18} />
              <span>Live Demo</span>
            </a>
          )}
        </div>

        {/* Screenshots Component with Controls & Large Scrollbar */}
        <ProjectScreenshots images={project.images} title={project.title} />
      </section>

      <Footer />
    </main>
  )
}
