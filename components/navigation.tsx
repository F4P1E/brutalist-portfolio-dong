"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { AnimatePresence, motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faMoon, faSun, faXmark, faChevronDown } from "@fortawesome/free-solid-svg-icons"

interface Section {
  id: string
  label: string
}

interface SideNavigationProps {
  sections: Section[]
  activeIndex: number
  onNavigate: (index: number) => void
}

export function SideNavigation({
  sections,
  activeIndex,
  onNavigate,
}: SideNavigationProps) {
  const [mounted, setMounted] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const handleScrollTo = (id: string, index: number) => {
    onNavigate(index)
    setDropdownOpen(false)
    const element = document.getElementById(id)
    if (element) {
      const offset = 80 // offset for sticky header
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

  useEffect(() => {
    if (!dropdownOpen) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setDropdownOpen(false)
    }
    window.addEventListener("keydown", closeOnEscape)
    return () => window.removeEventListener("keydown", closeOnEscape)
  }, [dropdownOpen])

  if (!mounted) return null

  return (
    <header className="fixed top-0 left-0 right-0 h-16 border-b border-border/40 bg-background/80 backdrop-blur-xl z-50 transition-colors">
      <div className="max-w-7xl mx-auto h-full px-4 md:px-8 flex items-center justify-between gap-4">
        {/* Brand logo */}
        <div 
          onClick={() => handleScrollTo("home", 0)} 
          className="cursor-pointer flex items-center gap-2.5 font-mono text-sm font-black tracking-wider text-foreground hover:opacity-80 transition-opacity shrink-0"
        >
          <img
            src="/logo_banner/DuongPhuDong_Logo.jpg"
            alt="Duong Phu Dong Logo"
            className="h-8 w-8 rounded-lg border border-border/60 object-cover shadow-sm ring-1 ring-accent/30"
          />
          <span className="bg-accent text-accent-foreground px-2 py-0.5 text-xs font-black rounded-md">DEV</span>
          <span className="hidden sm:inline font-bold">DUONG PHU DONG</span>
          <span className="inline sm:hidden font-bold">DONG.DEV</span>
        </div>

        {/* Desktop Direct Nav Links */}
        <nav className="hidden md:flex items-center gap-1.5 font-mono text-xs p-1 bg-secondary/30 rounded-xl border border-border/30 backdrop-blur-md">
          {sections.map((section, index) => {
            const isActive = activeIndex === index
            return (
              <button
                key={section.id}
                onClick={() => handleScrollTo(section.id, index)}
                className={`px-3.5 py-1.5 font-bold transition-all rounded-lg ${
                  isActive
                    ? "bg-foreground text-background shadow-md"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}
              >
                {section.label}
              </button>
            )
          })}
        </nav>

        {/* Right control box */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Theme button */}
          <button
            onClick={toggleTheme}
            className="h-9 w-9 border border-border/60 bg-card/80 hover:bg-secondary/70 backdrop-blur-md rounded-xl flex items-center justify-center transition-all shadow-sm"
            title="Toggle Theme"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? (
              <FontAwesomeIcon icon={faMoon} className="h-3.5 w-3.5" />
            ) : (
              <FontAwesomeIcon icon={faSun} className="h-3.5 w-3.5" />
            )}
          </button>

          {/* Mobile Dropdown Menu Trigger */}
          <div className="relative md:hidden">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-2 h-9 border-2 border-foreground bg-accent px-3 py-1.5 font-mono text-xs font-black uppercase text-accent-foreground rounded-lg shadow-[2px_2px_0_0_var(--foreground)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
              aria-expanded={dropdownOpen}
            >
              <span>{sections[activeIndex]?.label ?? "MENU"}</span>
              <FontAwesomeIcon icon={dropdownOpen ? faXmark : faChevronDown} className="h-3 w-3" />
            </button>

            {/* Custom Dropdown List on Mobile */}
            <AnimatePresence>
              {dropdownOpen && (
                <>
                  <motion.div
                    className="fixed inset-0 z-40 bg-transparent"
                    onClick={() => setDropdownOpen(false)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                  <motion.div
                    className="absolute right-0 mt-2 w-52 border-2 border-foreground bg-card shadow-[4px_4px_0_0_var(--foreground)] rounded-xl z-50 overflow-hidden flex flex-col"
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                  >
                    <div className="bg-foreground text-background px-3 py-1.5 font-mono text-[9px] font-bold tracking-widest uppercase">
                      NAVIGATION SELECT
                    </div>
                    {sections.map((section, index) => {
                      const isActive = activeIndex === index
                      return (
                        <button
                          key={section.id}
                          onClick={() => handleScrollTo(section.id, index)}
                          className={`w-full text-left px-4 py-2.5 font-mono text-xs font-bold border-b border-foreground/10 last:border-b-0 transition-colors flex items-center justify-between ${
                            isActive
                              ? "bg-accent text-accent-foreground"
                              : "bg-background hover:bg-secondary"
                          }`}
                        >
                          <span>{section.label}</span>
                          {isActive && <span className="text-[10px] opacity-75">●</span>}
                        </button>
                      )
                    })}
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </header>
  )
}
