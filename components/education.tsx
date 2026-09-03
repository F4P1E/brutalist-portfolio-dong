"use client"

import { Teacher, Location } from "reicon-react"

const education = [
  {
    degree: "BACHELOR OF SOFTWARE ENGINEERING",
    institution: "RMIT University Vietnam",
    year: "Graduating 2027",
    status: "IN PROGRESS",
    campus: "Ho Chi Minh City, Vietnam",
    focus: ["System Architecture", "Distributed Systems", "Full-stack Web Engineering"],
  },
  {
    degree: "HIGH SCHOOL DIPLOMA",
    institution: "Urban International School",
    year: "Completed",
    status: "COMPLETED",
    campus: "Toronto, Canada",
    focus: ["Advanced Functions", "Calculus", "Computer Science"],
  },
]

export function Education() {
  return (
    <section id="education" className="scroll-mt-20">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="mb-8">
          <div className="border border-border/60 bg-card/70 backdrop-blur-md px-3 py-1.5 inline-block rounded-xl shadow-sm">
            <h2 className="font-mono text-xl md:text-3xl font-bold tracking-tight text-foreground">{">"} EDUCATION</h2>
          </div>
          <p className="mt-3 font-mono text-xs md:text-sm text-muted-foreground leading-relaxed">
            Academic pathways and core areas of focus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((item) => (
            <div
              key={item.degree}
              className="border border-border/50 bg-card/75 backdrop-blur-xl p-6 rounded-2xl shadow-lg hover:border-accent/50 hover:shadow-2xl transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between border-b border-border/30 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <Teacher className="h-5 w-5 text-accent" />
                    <span className="font-mono text-[10px] font-bold bg-accent/15 text-accent border border-accent/30 px-2.5 py-0.5 rounded-lg">
                      {item.status}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">{item.year}</span>
                </div>

                <h3 className="font-mono text-lg font-black tracking-tight leading-snug text-foreground">{item.degree}</h3>
                <p className="text-sm font-medium mt-1 text-foreground/80">{item.institution}</p>

                <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-3">
                  <Location className="h-3.5 w-3.5 text-accent" />
                  <span>{item.campus}</span>
                </div>
              </div>

              <div className="mt-6 border-t border-border/30 pt-4">
                <p className="font-mono text-[10px] uppercase text-muted-foreground font-bold mb-2 tracking-wider">Key Focus Area</p>
                <div className="flex flex-wrap gap-2">
                  {item.focus.map((skill) => (
                    <span
                      key={skill}
                      className="border border-border/50 bg-secondary/30 backdrop-blur-md px-2.5 py-1 font-mono text-[10px] text-muted-foreground rounded-lg"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
