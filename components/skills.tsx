"use client"

import { skills as skillCategories } from "@/data/skills"
import { Code, Server, Designtools, ShieldCheck } from "reicon-react"

const iconsMap: Record<string, any> = {
  LANGUAGES: Code,
  "FRAMEWORKS & LIBRARIES": Server,
  "DATABASES & INFRASTRUCTURE": Designtools,
  "SYSTEMS & ARCHITECTURE": ShieldCheck,
}

export function Skills() {
  return (
    <section id="technical-skills" className="scroll-mt-20">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="mb-8">
          <div className="border border-border/60 bg-card/70 backdrop-blur-md px-3 py-1.5 inline-block rounded-xl shadow-sm">
            <h2 className="font-mono text-xl md:text-3xl font-bold tracking-tight text-foreground">{">"} TECHNICAL SKILLS & STACK</h2>
          </div>
          <p className="mt-3 font-mono text-xs md:text-sm text-muted-foreground leading-relaxed max-w-2xl">
            Technologies, frameworks, and architecture patterns I actively use in production, hackathons, and local AI engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat) => {
            const Icon = iconsMap[cat.category] || Code
            return (
              <div
                key={cat.category}
                className="border border-border/50 bg-card/75 backdrop-blur-xl p-6 rounded-2xl shadow-lg hover:border-accent/50 hover:shadow-2xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3.5 border-b border-border/30 pb-3.5 mb-3.5">
                    <div className="h-9 w-9 bg-secondary/40 border border-border/60 rounded-xl flex items-center justify-center shrink-0 shadow-sm text-accent">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-mono text-sm font-black uppercase tracking-wider text-foreground">{cat.category}</h3>
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                    {cat.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center border border-border/50 bg-secondary/30 backdrop-blur-md px-3 py-1.5 font-mono text-xs font-semibold text-foreground rounded-xl transition-all hover:bg-foreground hover:text-background hover:scale-[1.03] shadow-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
