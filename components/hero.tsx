"use client"

import { useEffect, useState } from "react"
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Download,
  FileText,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Rocket,
  Trophy,
} from "lucide-react"

interface HeroProps {
  onNavigate?: (index: number) => void
}

const SESSION_ID_KEY = "portfolio-session-id"
const VIEW_COUNTED_KEY = "portfolio-view-counted"

const dossierRows = [
  { label: "Role", value: "Full-stack & Systems Architect", Icon: BriefcaseBusiness },
  { label: "Education", value: "RMIT Software Engineering (Graduating 2027)", Icon: GraduationCap },
  { label: "Location", value: "Ho Chi Minh City, Vietnam", Icon: MapPin },
  { label: "Specialty", value: "Web Apps & AI Integrations", Icon: Rocket },
]

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/duong-phu-dong/",
    Icon: Linkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/DongDuong2001",
    Icon: Github,
  },
  {
    label: "Email",
    href: "mailto:dongduong840@gmail.com",
    Icon: Mail,
  },
]

export function Hero({ onNavigate }: HeroProps) {
  const [profileViews, setProfileViews] = useState<number | null>(null)

  useEffect(() => {
    let isActive = true

    const getOrCreateSessionId = () => {
      const existing = window.sessionStorage.getItem(SESSION_ID_KEY)
      if (existing) return existing

      const generated =
        typeof crypto !== "undefined" && "randomUUID" in crypto
          ? crypto.randomUUID()
          : `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`

      window.sessionStorage.setItem(SESSION_ID_KEY, generated)
      return generated
    }

    const updateViews = async () => {
      const sessionId = getOrCreateSessionId()
      const alreadyCounted = window.sessionStorage.getItem(VIEW_COUNTED_KEY) === "1"

      if (!alreadyCounted) {
        const countResponse = await fetch("/api/profile-views", {
          method: "POST",
          headers: { "x-session-id": sessionId },
          cache: "no-store",
        })

        if (countResponse.ok) {
          const countData = (await countResponse.json()) as { total?: number }
          if (isActive && typeof countData.total === "number") {
            setProfileViews(countData.total)
          }
          window.sessionStorage.setItem(VIEW_COUNTED_KEY, "1")
          return
        }
      }

      const readResponse = await fetch("/api/profile-views", { cache: "no-store" })
      if (!readResponse.ok) return

      const readData = (await readResponse.json()) as { total?: number }
      if (isActive && typeof readData.total === "number") {
        setProfileViews(readData.total)
      }
    }

    void updateViews()

    return () => {
      isActive = false
    }
  }, [])

  return (
    <section id="home" className="relative flex flex-col pt-2 space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-6 w-full items-stretch">
        {/* Left Column: Software Engineer Profile & Terminal */}
        <article className="border border-border/50 bg-card/75 backdrop-blur-xl p-5 sm:p-7 md:p-8 flex flex-col justify-between rounded-2xl shadow-lg hover:border-accent/40 transition-all">
          <div className="space-y-6">
            {/* Header identity bar */}
            <div className="flex items-center justify-between border-b border-border/30 pb-4">
              <div className="flex items-center gap-3.5">
                <img
                  src="/logo_banner/DuongPhuDong_Logo.jpg"
                  alt="Duong Phu Dong Logo"
                  className="h-12 w-12 md:h-14 md:w-14 rounded-2xl border border-border/60 object-cover shadow-md ring-2 ring-accent/20 shrink-0"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
                      SOFTWARE ENGINEER
                    </p>
                  </div>
                  <p className="font-mono text-sm sm:text-base font-black uppercase tracking-tight text-foreground">
                    Duong Phu Dong / @lab68dev
                  </p>
                </div>
              </div>
              <div className="border border-accent/40 bg-accent/15 px-3 py-1 text-accent font-mono text-xs font-black rounded-lg shadow-sm">
                OPEN TO WORK
              </div>
            </div>

            {/* Headline */}
            <div>
              <h1 className="font-mono text-2xl sm:text-4xl lg:text-5xl font-black uppercase leading-tight tracking-tight text-foreground">
                Building Resilient <br />
                <span className="text-accent underline decoration-accent/30 underline-offset-4">Full-Stack</span> & AI Systems
              </h1>
              <p className="mt-3.5 border-l-2 border-accent pl-4 text-xs sm:text-sm leading-relaxed text-muted-foreground max-w-xl">
                Specialized in architecting robust backend APIs, building responsive frontends, and integrating local AI/LLMs into production workflows. Completing Software Engineering at RMIT University.
              </p>
            </div>

            {/* Interactive Terminal / Code Snippet */}
            <div className="rounded-xl border border-border/60 bg-black/80 backdrop-blur-md overflow-hidden font-mono text-xs shadow-inner">
              <div className="flex items-center justify-between px-4 py-2 border-b border-border/40 bg-secondary/20">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500/80 inline-block" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80 inline-block" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="ml-2 text-[10px] text-muted-foreground">profile.config.ts</span>
                </div>
                <span className="text-[10px] text-accent">TypeScript</span>
              </div>
              <div className="p-4 space-y-1 text-[11px] leading-relaxed overflow-x-auto text-zinc-300">
                <p><span className="text-purple-400">const</span> <span className="text-blue-400">engineer</span> = &#123;</p>
                <p className="pl-4"><span className="text-zinc-400">name:</span> <span className="text-amber-300">"Duong Phu Dong"</span>,</p>
                <p className="pl-4"><span className="text-zinc-400">degree:</span> <span className="text-amber-300">"B.Eng Software Engineering @ RMIT '27"</span>,</p>
                <p className="pl-4"><span className="text-zinc-400">coreStack:</span> [<span className="text-emerald-400">"Next.js"</span>, <span className="text-emerald-400">"TypeScript"</span>, <span className="text-emerald-400">"Python"</span>, <span className="text-emerald-400">"PostgreSQL"</span>, <span className="text-emerald-400">"Docker"</span>],</p>
                <p className="pl-4"><span className="text-zinc-400">focus:</span> <span className="text-amber-300">"System Reliability & Local LLMs Inference"</span></p>
                <p>&#125;;</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 sm:mt-8 flex flex-wrap gap-3">
            <button
              onClick={() => onNavigate?.(1)}
              className="inline-flex min-h-10 items-center justify-center gap-2 border border-foreground/20 bg-foreground px-5 py-2.5 font-mono text-xs font-bold text-background transition-all hover:bg-accent hover:text-accent-foreground hover:scale-[1.02] rounded-xl shadow-md cursor-pointer"
            >
              <Rocket className="h-4 w-4" />
              VIEW PROJECTS
            </button>
            <button
              onClick={() => onNavigate?.(4)}
              className="inline-flex min-h-10 items-center justify-center gap-2 border border-border/60 bg-secondary/40 backdrop-blur-md px-5 py-2.5 font-mono text-xs font-bold transition-all hover:bg-foreground hover:text-background hover:scale-[1.02] rounded-xl shadow-sm cursor-pointer"
            >
              <Mail className="h-4 w-4" />
              CONTACT
            </button>
            <a
              href="/cv/DuongPhuDong_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-10 items-center justify-center gap-2 border border-border/60 bg-secondary/40 backdrop-blur-md px-5 py-2.5 font-mono text-xs font-bold transition-all hover:bg-foreground hover:text-background hover:scale-[1.02] rounded-xl shadow-sm"
            >
              <Download className="h-4 w-4" />
              RESUME (CV)
            </a>
          </div>
        </article>

        {/* Right Column: Clean Dynamic Showcase Media & Stats Dossier */}
        <aside className="space-y-6 flex flex-col justify-between">
          {/* Clean Showcase Video Frame without unnecessary banners */}
          <div className="border border-border/50 bg-black/90 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg ring-1 ring-border/20 flex items-center justify-center">
            <div className="relative w-full aspect-video flex items-center justify-center bg-black">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-contain pointer-events-none block"
              >
                <source src="/logo_banner/duongphudong_banner.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* Stats & Dossier Card */}
          <div className="border border-border/50 bg-card/75 backdrop-blur-xl flex flex-col justify-between rounded-2xl overflow-hidden shadow-lg hover:border-accent/40 transition-all flex-1">
            <div className="flex items-center justify-between border-b border-border/30 bg-secondary/40 backdrop-blur-md px-5 py-3">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-muted-foreground">ENGINEER MANIFEST</span>
              <span className="font-mono text-[10px] font-bold text-accent">
                VIEWS: {profileViews === null ? "..." : profileViews.toLocaleString()}
              </span>
            </div>

            <div className="p-4 sm:p-5 flex-1 flex flex-col justify-center space-y-2.5">
              {dossierRows.map(({ label, value, Icon }) => (
                <div key={label} className="flex items-center gap-3 border border-border/40 bg-secondary/25 backdrop-blur-md p-2.5 rounded-xl hover:bg-secondary/40 transition-colors">
                  <div className="h-7 w-7 bg-background/80 border border-border/40 flex items-center justify-center shrink-0 rounded-lg shadow-sm text-accent">
                    <Icon className="h-3.5 w-3.5" />
                  </div>
                  <div className="min-w-0">
                    <span className="block font-mono text-[9px] uppercase tracking-wider text-muted-foreground">{label}</span>
                    <span className="block text-xs font-bold text-foreground leading-snug truncate">{value}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border/30 p-3.5 bg-secondary/15 flex justify-center gap-2">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className="group flex-1 inline-flex items-center justify-center gap-1.5 border border-border/50 bg-background/60 backdrop-blur-md py-2 font-mono text-[10px] font-bold rounded-xl transition-all hover:bg-foreground hover:text-background shadow-sm hover:scale-[1.03]"
                >
                  <Icon className="h-3.5 w-3.5" />
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}
