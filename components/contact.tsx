"use client"

import type React from "react"

import {
  ArrowUpRight,
  BadgeCheck,
  FileText,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
  Rocket,
  Send,
  Trophy,
  type LucideIcon,
} from "lucide-react"
import { useState, useRef } from "react"
import { PlugConnectedIcon } from "@/components/ui/plug-connected-icon"
import type { AnimatedIconHandle } from "@/components/ui/types"

type ContactLink = {
  label: string
  href: string
  detail: string
  Icon: LucideIcon
  primary?: boolean
}

const hiringSignals = [
  { label: "Location", value: "Ho Chi Minh City", Icon: MapPin },
  { label: "Education", value: "RMIT Vietnam (Graduating 2027)", Icon: GraduationCap },
  { label: "Status", value: "Available for work", Icon: BadgeCheck },
  { label: "Strongest proof", value: "#1 launch on Forg + Unikorn", Icon: Trophy },
]

const primaryLinks: ContactLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/duong-phu-dong/",
    detail: "Best hiring channel",
    Icon: Linkedin,
    primary: true,
  },
  {
    label: "Email",
    href: "mailto:dongduong840@gmail.com",
    detail: "Direct message",
    Icon: Mail,
    primary: true,
  },
  {
    label: "Resume",
    href: "/cv/DuongPhuDong_Resume.pdf",
    detail: "PDF profile",
    Icon: FileText,
  },
  {
    label: "GitHub",
    href: "https://github.com/DongDuong2001",
    detail: "Public code",
    Icon: Github,
  },
]

const proofLinks: ContactLink[] = [
  {
    label: "Unikorn",
    href: "https://unikorn.vn/u/duong-phu-dong",
    detail: "Launch profile",
    Icon: Rocket,
  },
  {
    label: "Forg",
    href: "https://forg.to/@duongphudong",
    detail: "Product wins",
    Icon: Trophy,
  },
  {
    label: "Product Hunt",
    href: "https://www.producthunt.com/@duong_phu_dong",
    detail: "Product community",
    Icon: ArrowUpRight,
  },
]

export function Contact() {
  const plugIconRef = useRef<AnimatedIconHandle>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [statusMessage, setStatusMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    setStatusMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus("success")
        setStatusMessage("Message sent. Thanks for reaching out.")
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        setStatus("error")
        setStatusMessage("Could not send the message. Please use email or LinkedIn.")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setStatus("error")
      setStatusMessage("Something went wrong. Please use email or LinkedIn.")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const renderLink = ({ label, href, detail, Icon, primary }: ContactLink) => (
    <a
      key={label}
      href={href}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
      className={`group border-2 border-foreground p-3 md:p-4 rounded-xl transition-all hover:shadow-[3px_3px_0_0_var(--foreground)] ${
        primary
          ? "bg-accent text-accent-foreground hover:bg-foreground hover:text-background"
          : "bg-card hover:bg-foreground hover:text-background"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="inline-flex items-center gap-2">
          <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span className="font-mono text-sm font-bold">{label}</span>
        </div>
        <ArrowUpRight className="h-3.5 w-3.5 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
      </div>
      <p className="mt-2 font-mono text-[10px] uppercase tracking-wide opacity-75">{detail}</p>
    </a>
  )

  return (
    <section id="contact" className="scroll-mt-20">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="mb-6 md:mb-8">
          <div className="border border-border/60 bg-card/70 backdrop-blur-md px-3 py-1.5 inline-block rounded-xl shadow-sm">
            <h2 className="font-mono text-xl md:text-3xl font-bold tracking-tight text-foreground">{">"} CONTACT</h2>
          </div>
          <p className="mt-3 font-mono text-xs md:text-sm text-muted-foreground max-w-3xl leading-relaxed">
            Fast paths for recruiters and collaborators. LinkedIn and email are the cleanest ways to start a conversation.
          </p>
        </div>

        <div className="grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-5 md:gap-6">
          <div className="space-y-5">
            <article className="border border-border/50 bg-card/75 backdrop-blur-xl p-5 md:p-6 rounded-2xl shadow-lg">
              <div className="flex items-center gap-2 border-b border-border/30 pb-3 mb-4">
                <MessageSquare className="h-4 w-4 text-accent" aria-hidden="true" />
                <h3 className="font-mono text-lg font-bold text-foreground">HIRING SNAPSHOT</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {hiringSignals.map(({ label, value, Icon }) => (
                  <div key={label} className="border border-border/40 bg-secondary/25 backdrop-blur-md p-3.5 rounded-xl hover:bg-secondary/40 transition-all shadow-sm">
                    <div className="flex items-center gap-2.5 text-muted-foreground mb-1.5">
                      <div className="h-7 w-7 rounded-lg bg-background/80 border border-border/40 flex items-center justify-center shrink-0 shadow-sm text-accent">
                        <Icon className="h-3.5 w-3.5" />
                      </div>
                      <span className="font-mono text-[10px] font-bold uppercase tracking-wider">{label}</span>
                    </div>
                    <p className="text-xs font-bold pl-9 text-foreground">{value}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="border border-border/50 bg-card/75 backdrop-blur-xl p-5 md:p-6 rounded-2xl shadow-lg">
              <h3 className="font-mono text-lg font-bold border-b border-border/30 pb-3 mb-4 text-foreground">
                DIRECT LINKS
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">{primaryLinks.map(renderLink)}</div>
            </article>

            <article className="border border-border/50 bg-secondary/30 backdrop-blur-xl p-5 rounded-2xl shadow-sm">
              <h3 className="font-mono text-sm font-bold border-b border-border/30 pb-2 mb-3 text-foreground">
                PRODUCT PROOF
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-2.5">{proofLinks.map(renderLink)}</div>
            </article>
          </div>

          <div className="border border-border/50 bg-card/75 backdrop-blur-xl p-5 md:p-7 h-fit rounded-2xl shadow-lg">
            <div className="flex items-center justify-between gap-3 border-b border-border/30 pb-3 mb-4">
              <h3 className="font-mono text-lg font-bold text-foreground">SEND MESSAGE</h3>
              <Mail className="h-4 w-4 text-accent" aria-hidden="true" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="name" className="block font-mono text-xs md:text-sm font-bold mb-1.5">
                    NAME:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border-2 border-foreground p-2.5 bg-background focus:outline-none focus:ring-2 focus:ring-accent text-sm rounded-lg"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-mono text-xs md:text-sm font-bold mb-1.5">
                    EMAIL:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border-2 border-foreground p-2.5 bg-background focus:outline-none focus:ring-2 focus:ring-accent text-sm rounded-lg"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block font-mono text-xs md:text-sm font-bold mb-1.5">
                  SUBJECT:
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full border-2 border-foreground p-2.5 bg-background focus:outline-none focus:ring-2 focus:ring-accent text-sm rounded-lg"
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-mono text-xs md:text-sm font-bold mb-1.5">
                  MESSAGE:
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full border-2 border-foreground p-2.5 bg-background focus:outline-none focus:ring-2 focus:ring-accent resize-none text-sm rounded-lg"
                />
              </div>

              {statusMessage && (
                <p
                  className={`border-2 px-3 py-2 font-mono text-xs font-bold rounded-lg ${
                    status === "success"
                      ? "border-foreground bg-accent text-accent-foreground"
                      : "border-destructive text-destructive"
                  }`}
                >
                  {statusMessage}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                onMouseEnter={() => plugIconRef.current?.startAnimation()}
                onMouseLeave={() => plugIconRef.current?.stopAnimation()}
                className="w-full inline-flex items-center justify-center gap-2.5 border border-accent/40 p-3 font-mono text-sm font-bold bg-accent text-accent-foreground hover:bg-foreground hover:text-background transition-all rounded-xl shadow-md hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed group cursor-pointer"
              >
                <PlugConnectedIcon
                  ref={plugIconRef}
                  size={18}
                  className="transition-transform group-hover:scale-110"
                />
                {status === "loading" ? "SENDING..." : "CONNECT & SEND MESSAGE"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
