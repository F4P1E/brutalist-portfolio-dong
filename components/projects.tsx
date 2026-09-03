"use client"

import { useEffect, useMemo, useState } from "react"
import { ArrowUpRight, ChevronDown, Code2, ExternalLink, Github, LockKeyhole, Rocket, Trophy } from "lucide-react"

import {
  projects,
  slugifyProjectTitle,
  type Project,
  type ProjectAward,
  type ProjectCaseStudy,
  type ProjectKpis,
} from "@/data/projects"

const CATEGORIES = ["ALL", ...Array.from(new Set(projects.map((project) => project.category)))]

const totalAwards = projects.reduce((sum, project) => {
  if (project.awards) return sum + project.awards.length
  if (project.award) return sum + 1
  return sum
}, 0)

const projectSummary = [
  { label: "Shipped", value: String(projects.filter((project) => project.stage !== "now-building").length) },
  { label: "Live demos", value: String(projects.filter((project) => Boolean(project.link)).length) },
  { label: "Launch wins", value: String(totalAwards) },
  { label: "Now building", value: String(projects.filter((project) => project.stage === "now-building").length) },
]

const DEFAULT_KPIS: ProjectKpis = {
  users: "Early users",
  launchTime: "2-6 weeks",
  coreImpact: "Improved workflow",
  performance: "Production-ready",
}

const DEFAULT_CASE_STUDY: ProjectCaseStudy = {
  problem: "The existing workflow had friction, low visibility, or weak scalability.",
  build: "I designed and shipped a practical implementation focused on product quality and velocity.",
  result: "Delivered measurable product value and stronger reliability for real usage.",
}

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("ALL")
  const [expandedProject, setExpandedProject] = useState<string | null>(null)

  useEffect(() => {
    const handleOpenProject = (event: Event) => {
      const detail = (event as CustomEvent<{ title?: string }>).detail
      if (!detail?.title) return

      setActiveFilter("ALL")
      setExpandedProject(detail.title)

      const projectId = `project-${slugifyProjectTitle(detail.title)}`
      const projectElement = document.getElementById(projectId)
      if (projectElement) {
        projectElement.scrollIntoView({ behavior: "smooth", block: "center" })
      }
    }

    window.addEventListener("portfolio:open-project", handleOpenProject)
    return () => window.removeEventListener("portfolio:open-project", handleOpenProject)
  }, [])

  const filteredProjects = useMemo(
    () => (activeFilter === "ALL" ? projects : projects.filter((project) => project.category === activeFilter)),
    [activeFilter],
  )

  const getAwards = (project: Project): ProjectAward[] => {
    if (project.awards && Array.isArray(project.awards)) return project.awards
    if (project.award) return [project.award]
    return []
  }

  const getKpis = (project: Project): ProjectKpis => project.kpis ?? DEFAULT_KPIS
  const getCaseStudy = (project: Project): ProjectCaseStudy => project.caseStudy ?? DEFAULT_CASE_STUDY

  return (
    <section id="projects" className="scroll-mt-20">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6 md:mb-10">
          <div className="self-start">
            <div className="border border-border/60 bg-card/70 backdrop-blur-md px-3 py-1.5 inline-block rounded-xl shadow-sm">
              <h2 className="font-mono text-xl md:text-3xl font-bold tracking-tight text-foreground">{">"} PROJECTS</h2>
            </div>
            <p className="mt-3 font-mono text-xs md:text-sm text-muted-foreground max-w-3xl leading-relaxed">
              Product case studies: role, problem, build, result, stack, and links.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 self-start lg:self-auto">
            <a
              href="/api/project-index"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border/60 bg-secondary/40 backdrop-blur-md px-3.5 py-1.5 font-mono text-xs font-bold hover:bg-foreground hover:text-background transition-all rounded-xl shadow-sm"
            >
              PROJECT INDEX PDF
            </a>
            <div className="border border-accent/40 bg-accent/15 px-4 py-1.5 inline-block text-accent font-mono text-xs font-bold rounded-xl shadow-sm">
              {filteredProjects.length} PROJECT{filteredProjects.length !== 1 && "S"}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6 md:mb-8">
          {projectSummary.map((item) => (
            <div key={item.label} className="border border-border/50 bg-card/70 backdrop-blur-md px-4 py-3 rounded-2xl shadow-sm">
              <p className="font-mono text-[9px] md:text-[10px] uppercase tracking-wider text-muted-foreground">
                {item.label}
              </p>
              <p className="font-mono text-base md:text-xl font-bold mt-0.5 text-foreground">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="flex gap-2 mb-8 overflow-x-auto pb-2 p-1 bg-secondary/20 backdrop-blur-md rounded-2xl border border-border/30">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-1.5 font-mono text-xs font-bold transition-all rounded-xl ${
                activeFilter === category ? "bg-foreground text-background shadow-md" : "text-muted-foreground hover:text-foreground hover:bg-secondary/40"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const featured = project.year.includes("Current")
            const highlighted = Boolean(project.highlighted)
            const awards = getAwards(project)
            const kpis = getKpis(project)
            const caseStudy = getCaseStudy(project)
            const slug = slugifyProjectTitle(project.title)
            const isExpanded = expandedProject === project.title
            const visibleTech = project.tech.slice(0, 4)
            const hiddenTechCount = Math.max(project.tech.length - visibleTech.length, 0)
            const activeProject = project.stage === "now-building" || featured
            const statusLabel = project.stage === "now-building" ? "BUILDING" : featured ? "ACTIVE" : "SHIPPED"

            return (
              <article
                key={project.title}
                id={`project-${slug}`}
                className={`group relative flex flex-col justify-between overflow-hidden border border-border/50 bg-card/80 backdrop-blur-xl rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-2xl ${
                  featured ? "ring-2 ring-accent/60" : ""
                } ${highlighted ? "border-l-4 border-l-accent" : ""}`}
              >
                <div>
                  {/* Card Header: Category, Status & Title */}
                  <div className="border-b border-border/30 bg-secondary/30 backdrop-blur-md p-4 md:p-5">
                    <div className="mb-2.5 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="border border-border/60 bg-background/80 px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase text-foreground rounded-md shadow-xs">
                          {project.category}
                        </span>
                        <span
                          className={`inline-flex items-center gap-1 border px-2 py-0.5 font-mono text-[10px] font-bold uppercase rounded-md shadow-xs ${
                            activeProject
                              ? "border-accent/40 bg-accent/15 text-accent"
                              : "border-border/40 bg-secondary/50 text-muted-foreground"
                          }`}
                        >
                          {statusLabel}
                        </span>
                      </div>
                      <span className="font-mono text-[11px] text-muted-foreground font-semibold">
                        {project.year}
                      </span>
                    </div>

                    <div className="flex items-start justify-between gap-2 mt-1">
                      <div>
                        <h3 className="font-mono text-base md:text-lg font-black leading-tight text-foreground group-hover:text-accent transition-colors">
                          {project.title}
                        </h3>
                        <p className="mt-1 font-mono text-[11px] font-semibold text-accent/90">
                          {project.role ?? "Lead Developer"}
                        </p>
                      </div>
                      {highlighted && (
                        <span
                          title="Featured Project"
                          className="inline-flex h-7 w-7 shrink-0 items-center justify-center border border-accent/40 bg-accent/15 text-accent rounded-lg shadow-sm"
                        >
                          <Trophy className="h-3.5 w-3.5" />
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Body: Description & Structured Takeaways for HR / Tech Leads */}
                  <div className="p-4 md:p-5 space-y-3.5">
                    {/* Clear 1-sentence value proposition */}
                    <p className="text-xs leading-relaxed text-foreground/80 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Problem & Impact Snapshot */}
                    <div className="rounded-xl border border-border/40 bg-secondary/25 p-3 space-y-2">
                      <div>
                        <span className="font-mono text-[9px] uppercase font-bold text-accent tracking-wider block">
                          CORE IMPACT / RESULT
                        </span>
                        <p className="text-[11px] font-medium leading-relaxed text-foreground mt-0.5">
                          {project.recruiterTakeaway ?? caseStudy.result}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-border/30 flex items-center justify-between text-[10px] text-muted-foreground font-mono">
                        <span>Proof: <strong className="text-foreground">{project.proof ?? kpis.coreImpact}</strong></span>
                        <span>Launch: <strong className="text-foreground">{kpis.launchTime}</strong></span>
                      </div>
                    </div>

                    {/* Case Study Toggle */}
                    <button
                      type="button"
                      onClick={() => setExpandedProject((prev) => (prev === project.title ? null : project.title))}
                      className="flex w-full items-center justify-between gap-2 border border-border/50 bg-background/60 px-3 py-1.5 font-mono text-[11px] font-bold text-muted-foreground hover:text-foreground hover:bg-secondary/40 transition-all rounded-lg cursor-pointer"
                    >
                      <span>{isExpanded ? "Hide Technical Breakdown" : "View Technical Breakdown"}</span>
                      <ChevronDown className={`h-3.5 w-3.5 shrink-0 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                    </button>

                    {isExpanded && (
                      <div className="space-y-2.5 border border-border/40 p-3 bg-secondary/15 rounded-xl text-xs leading-relaxed">
                        <div>
                          <p className="font-mono text-[9px] font-bold text-accent uppercase tracking-wider">Problem</p>
                          <p className="text-[11px] text-muted-foreground mt-0.5">{caseStudy.problem}</p>
                        </div>
                        <div>
                          <p className="font-mono text-[9px] font-bold text-accent uppercase tracking-wider">Architecture / Build</p>
                          <p className="text-[11px] text-muted-foreground mt-0.5">{caseStudy.build}</p>
                        </div>

                        {project.contributors && project.contributors.length > 0 && (
                          <div className="border-t border-border/30 pt-2">
                            <p className="font-mono text-[9px] font-bold text-accent uppercase tracking-wider mb-1">Contributors</p>
                            <div className="flex flex-wrap gap-1.5">
                              {project.contributors.map((c) => (
                                <a
                                  key={c.name}
                                  href={c.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="font-mono text-[9px] border border-border/40 bg-background/80 px-2 py-0.5 hover:bg-foreground hover:text-background transition-colors rounded-md"
                                >
                                  {c.name}
                                </a>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Footer: Tech Stack & Action Links */}
                <div className="p-4 md:p-5 pt-0 space-y-3 mt-auto">
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {visibleTech.map((tech) => (
                      <span
                        key={tech}
                        className="border border-border/40 bg-secondary/30 px-2 py-0.5 font-mono text-[10px] text-muted-foreground rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {hiddenTechCount > 0 && (
                      <span className="border border-border/40 bg-secondary/30 px-2 py-0.5 font-mono text-[10px] text-muted-foreground rounded-md">
                        +{hiddenTechCount}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 pt-1 border-t border-border/30">
                    <a
                      href={`/projects/${slug}`}
                      className="inline-flex min-h-9 flex-1 items-center justify-center gap-1.5 border border-border/60 bg-secondary/40 backdrop-blur-md px-3 py-1.5 font-mono text-xs font-bold transition-all hover:bg-foreground hover:text-background rounded-xl shadow-xs"
                      aria-label={`View details of project ${project.title}`}
                    >
                      <ArrowUpRight className="h-3.5 w-3.5" />
                      DETAILS
                    </a>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-9 w-9 shrink-0 items-center justify-center border border-accent/40 bg-accent text-accent-foreground transition-all hover:bg-foreground hover:text-background rounded-xl shadow-xs"
                        aria-label={`Visit live website of project ${project.title}`}
                        title="Live Site"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-9 w-9 shrink-0 items-center justify-center border border-border/60 bg-secondary/30 transition-all hover:bg-foreground hover:text-background rounded-xl shadow-xs"
                        aria-label={`Visit GitHub repository of project ${project.title}`}
                        title="Source Code"
                      >
                        <Github className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
