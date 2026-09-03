"use client"

import { useRef } from "react"
import { PlugConnectedIcon } from "@/components/ui/plug-connected-icon"
import type { AnimatedIconHandle } from "@/components/ui/types"

export function Footer() {
  const footerPlugRef = useRef<AnimatedIconHandle>(null)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="border-t border-border/40 bg-card/60 backdrop-blur-xl mt-16 font-mono">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 space-y-8">
        {/* Top footer row: Philosophy & Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Quote and Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo_banner/DuongPhuDong_Logo.jpg"
                alt="Duong Phu Dong Logo"
                className="h-10 w-10 rounded-xl border border-border/60 object-cover shadow-sm ring-1 ring-accent/30"
              />
              <div>
                <span className="text-[10px] tracking-widest uppercase font-bold text-accent">Philosophy</span>
                <p className="text-xs font-bold text-foreground">DUONG PHU DONG</p>
              </div>
            </div>
            <p className="text-sm md:text-base font-semibold leading-relaxed text-foreground/90 max-w-md">
              "We build systems not just to work, but to endure. Simple solutions are often the hardest to design."
            </p>
            <div className="text-[10px] text-muted-foreground space-y-1">
              <p>RMIT SOFTWARE ENGINEERING CLASS OF '27</p>
              <p>SYSTEMS ARCHITECT & FULLSTACK DEVELOPER</p>
            </div>
          </div>

          {/* Links and contact info */}
          <div className="flex flex-col md:items-end justify-between h-full space-y-6 md:space-y-0">
            <div className="space-y-3 md:text-right">
              <p className="text-[10px] tracking-widest uppercase font-bold text-muted-foreground">Get in touch</p>
              <a
                href="mailto:dongduong840@gmail.com"
                onMouseEnter={() => footerPlugRef.current?.startAnimation()}
                onMouseLeave={() => footerPlugRef.current?.stopAnimation()}
                className="inline-flex items-center gap-2 border border-accent/50 bg-accent/15 px-4 py-2 font-mono text-xs font-black uppercase text-accent rounded-xl shadow-sm hover:bg-accent hover:text-accent-foreground hover:scale-[1.03] transition-all group cursor-pointer"
              >
                <span>Email Me Directly</span>
                <PlugConnectedIcon ref={footerPlugRef} size={16} className="text-current" />
              </a>
            </div>

            <div className="flex flex-wrap md:justify-end gap-4 text-[10px] text-muted-foreground border-t border-border/30 pt-4 w-full">
              <button onClick={scrollToTop} className="hover:text-foreground transition-colors font-bold uppercase cursor-pointer">
                [ Back to Top ]
              </button>
              <span>•</span>
              <span>DUONG PHU DONG © 2026</span>
            </div>
          </div>
        </div>

        {/* GitHub Live Status & Profile Bar */}
        <div className="rounded-2xl border border-border/40 bg-secondary/20 backdrop-blur-md p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="h-10 w-10 rounded-xl bg-background/80 border border-border/50 flex items-center justify-center text-foreground shrink-0 shadow-xs">
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-foreground">@DongDuong2001</span>
                <span className="inline-flex items-center gap-1 border border-emerald-500/40 bg-emerald-500/15 text-emerald-500 px-2 py-0.5 rounded-md text-[10px] font-bold">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Active
                </span>
              </div>
              <p className="font-mono text-[10px] text-muted-foreground mt-0.5">
                Open source repositories, AI testbenches & systems engineering
              </p>
            </div>
          </div>

          <a
            href="https://github.com/DongDuong2001"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-border/60 bg-background/80 hover:bg-foreground hover:text-background px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-xs shrink-0"
          >
            <span>Visit GitHub Profile</span>
            <span className="text-accent font-bold">↗</span>
          </a>
        </div>
      </div>

      {/* Terminal bar at the very bottom */}
      <div className="border-t border-border/40 bg-secondary/30 backdrop-blur-md text-muted-foreground py-2.5 px-4 md:px-8 flex items-center justify-between text-[9px] uppercase tracking-widest">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          <span className="text-foreground font-semibold">DUONG PHU DONG // PORTFOLIO PROTOCOL</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline">NEXT.JS 16 // TAILWIND v4</span>
          <span className="text-accent font-bold">SYSTEMS: ONLINE</span>
        </div>
      </div>
    </footer>
  )
}
