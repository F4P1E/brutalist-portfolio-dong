"use client"

import { useState, useEffect } from "react"
import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { Education } from "@/components/education"
import { Contact } from "@/components/contact"
import { Skills } from "@/components/skills"
import { SideNavigation } from "@/components/navigation"
import { CommandPalette } from "@/components/command-palette"
import { Footer } from "@/components/footer"
import FaultyTerminal from "@/components/faulty-terminal"

const sections = [
  { id: "home", label: "HOME", shortcut: "01" },
  { id: "projects", label: "PROJECTS", shortcut: "02" },
  { id: "technical-skills", label: "TECHNICAL SKILLS", shortcut: "03" },
  { id: "education", label: "EDUCATION", shortcut: "04" },
  { id: "contact", label: "CONTACT", shortcut: "05" },
]

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0)

  // Track scroll position to update active index
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120
      for (let i = 0; i < sections.length; i++) {
        const el = document.getElementById(sections[i].id)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveIndex(i)
            break
          }
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Sync URL hash (optional, only when activeIndex changes and window is not scrolling manually)
  useEffect(() => {
    window.history.replaceState(null, "", `#${sections[activeIndex].id}`)
  }, [activeIndex])

  const navigateTo = (index: number) => {
    setActiveIndex(index)
    const element = document.getElementById(sections[index].id)
    if (element) {
      const offset = 80
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }

  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-accent selection:text-accent-foreground overflow-x-hidden">
      {/* Interactive Cyber FaultyTerminal WebGL Canvas Background */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-40 dark:opacity-30">
        <FaultyTerminal
          scale={1.5}
          digitSize={1.2}
          timeScale={0.4}
          scanlineIntensity={0.3}
          curvature={0.08}
          tint="#FF334E"
          mouseReact
          mouseStrength={0.4}
          pageLoadAnimation
          noiseAmp={0.8}
          brightness={0.7}
        />
      </div>

      <div className="relative z-10">
        <SideNavigation
          sections={sections}
          activeIndex={activeIndex}
          onNavigate={navigateTo}
        />

        <main className="pt-16 max-w-7xl mx-auto px-4 md:px-8 space-y-8 pb-16">
          <Hero onNavigate={navigateTo} />
          <Projects />
          <Skills />
          <Education />
          <Contact />
        </main>

        <Footer />

        <CommandPalette sections={sections} onNavigate={navigateTo} />
      </div>
    </div>
  )
}
